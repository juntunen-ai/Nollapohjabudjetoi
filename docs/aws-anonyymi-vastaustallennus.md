# To-do: Anonyymi vastaustallennus AWS:ään

## Tavoite

Pelistä halutaan tallentaa pelaajien vastaukset myöhempää analyysia varten ilman rekisteröitymistä ja ilman henkilötietojen keräämistä.

Ratkaisun pitää olla:

- kevyt
- halpa ylläpitää
- helppo liittää nykyiseen GitHub Pages -sivuun
- riittävän turvallinen julkiselle kirjoitusendpointille
- myöhemmin laajennettavissa yksinkertaisesta vastausten tallennuksesta aggregaatteihin ja raportointiin

## Suositeltu kevyt arkkitehtuuri

Suositus ensimmäiseen toteutukseen:

- `GitHub Pages`
  - nykyinen staattinen käyttöliittymä
- `Amazon API Gateway (HTTP API)`
  - julkinen `POST /responses` -endpoint
- `AWS Lambda`
  - validoi ja normalisoi payloadin
  - kirjoittaa tietueen tietokantaan
- `Amazon DynamoDB`
  - kevyt päätietokanta anonyymeille pelituloksille
- `Amazon CloudWatch`
  - tekninen valvonta ja virhelokit lyhyellä säilytysajalla

Tämä on tarkoituksella yksinkertainen serverless-ratkaisu. Siinä ei tarvita jatkuvasti käynnissä olevaa palvelinta eikä erillistä sovellustietokantaa.

## Miksi tämä ratkaisu

`DynamoDB + Lambda + API Gateway` sopii tähän hyvin, koska:

- tapahtumia tulee yksittäisinä kirjoituksina, ei monimutkaisina transaktioina
- datan rakenne on luonnostaan dokumenttimainen
- käyttömäärät voivat vaihdella kampanjan aikana ilman erillistä kapasiteettisuunnittelua
- kustannukset pysyvät pieninä kevyellä käytöllä
- järjestelmä voidaan ottaa käyttöön ilman kirjautumista tai käyttäjähallintaa

## Mitä tallennetaan

Yksi tallennettu tietue vastaa yhtä pelattua kierrosta.

Tietueeseen tallennetaan vain analyysiin tarvittavat asiat:

- `run_id`
  - satunnainen UUID, luodaan selaimessa jokaiselle pelikierrokselle erikseen
- `created_at`
  - palvelinajan aikaleima
- `site_version`
  - julkaistu sivuversio, esim. `v0.0.3`
- `answers`
  - valtion rooli
  - 4 valittua ydintehtävää
  - 2 kärkiprioriteettia
  - 11 kysymyksen vastaukset
- `score`
  - loppupisteet
- `profile`
  - loppuprofiili, esim. `Uudistava tasapainottaja`
- `metrics`
  - näkyvät päämittarit lopputilassa
- `timeline`
  - vuosi, vaalikausi, ylivaalikausi
- `model_summary`
  - taustamallin keskeiset lukemat, jos niitä halutaan myöhemmin analysoida

## Mitä ei tallenneta

Näitä ei tallenneta omaan tietokantaan:

- nimi
- sähköposti
- puhelinnumero
- käyttäjätili
- vapaa tekstikenttä
- evästetunniste
- pysyvä selain- tai laitetunniste
- tarkka IP-osoite
- täydet headerit
- referrer-analytiikka

Jos teknisissä lokeissa näkyy hetkellisesti IP-osoite tai muita verkkotason tietoja AWS:n omissa palvelulokeissa, niitä ei kopioida sovellusdataan eikä käytetä analytiikkaan.

## Tietomalli

Yksi yksinkertainen DynamoDB-taulu riittää alkuun.

Taulu: `nollapohjabudjetoi_responses`

Pääkentät:

- `pk`
  - `RUN#{run_id}`
- `created_at`
- `site_version`
- `role_id`
- `priority_ids`
- `top_priority_ids`
- `answers`
- `score`
- `profile_title`
- `metrics`
- `timeline`
- `model_summary`

Suositus:

- pidä payload dokumenttimaisena
- älä pilko kaikkea heti useaan tauluun
- lisää myöhemmin tarvittaessa `GSI` aikaleiman tai profiilin mukaan

## API

Ensimmäinen versio tarvitsee vain yhden julkisen endpointin:

- `POST /responses`

Payload-esimerkki:

```json
{
  "run_id": "a8f7d6d7-9620-4f38-ae35-bb2d7439b7e2",
  "site_version": "v0.0.3",
  "answers": {
    "role_id": "enabler-state",
    "priority_ids": ["fiscal-stability", "safety-rule-of-law", "growth-and-investment", "freedom-choice"],
    "top_priority_ids": ["fiscal-stability", "growth-and-investment"],
    "decisions": {
      "income-tax": "tax-shift-reform",
      "social-security": "unified-security-reform"
    }
  },
  "score": 74,
  "profile_title": "Tulos on liberaalin politiikan suuntainen.",
  "metrics": {
    "debt": 4,
    "growth": 12,
    "wellbeing": -3,
    "freedom": 17
  },
  "timeline": {
    "year": { "debt": -5, "growth": 6 },
    "term": { "debt": 3, "growth": 13 },
    "post_term": { "debt": 8, "growth": 17 }
  }
}
```

Paluuarvo:

```json
{
  "ok": true,
  "stored": true
}
```

## Validointi

Lambda validoi aina:

- että kaikki pakolliset kentät ovat mukana
- että vastaukset sisältävät vain tunnettuja vaihtoehtoja
- että numeroarvot ovat järkevissä rajoissa
- että yksittäinen payload ei ylitä sovittua kokoa

Jos payload ei ole validi, palvelu palauttaa `400 Bad Request`.

## Turvallisuus ja abuse-suoja

Koska endpoint on julkinen eikä kirjautumista ole, minimisuojaus pitää silti tehdä.

Ensimmäiseen versioon riittää:

- CORS sallitaan vain omasta GitHub Pages -domainista
- API Gatewayyn kevyt throttling
- Lambda validoi payloadin tiukasti
- pyynnöistä ei kirjoiteta tarpeettomia henkilötietoja lokeihin
- CloudWatch-logien säilytysaika pidetään lyhyenä, esim. 7 tai 14 päivää

Mahdollinen myöhempi lisä:

- AWS WAF rate limiting, jos palveluun alkaa tulla roskaa tai bottiliikennettä

## Frontend-muutos pelissä

Peliin tarvitaan myöhemmin vain pieni lisäys loppuruutuun:

- kun peli päättyy, selain lähettää yhden anonyymin `POST /responses` -pyynnön
- kutsu tehdään taustalla
- pelaajalle voidaan näyttää kevyt ilmoitus vain virhetilanteessa

Tärkeä rajaus:

- tallennus ei saa estää tulosruudun näkymistä
- peli toimii edelleen, vaikka tallennus epäonnistuisi

## Raportointi myöhemmin

Ensimmäisessä versiossa riittää, että data tallentuu analysoitavaksi.

Myöhemmin voidaan lisätä:

- erillinen admin-skripti DynamoDB-datan vientiin
- aggregaattiraportit profiileista, pisteistä ja yleisimmistä valinnoista
- vienti S3:een ja analyysi Athena/QuickSight-yhdistelmällä

Tätä ei tarvitse tehdä ensimmäisessä toteutuksessa.

## Kevyt toteutusspeksi ensimmäiseen versioon

1. Luo `HTTP API` AWS API Gatewayhin.
2. Luo yksi `Lambda`, joka vastaanottaa ja validoi vastaukset.
3. Luo yksi `DynamoDB`-taulu anonyymeille pelituloksille.
4. Lisää CORS vain pelin julkiselle domainille.
5. Lisää kevyt throttling.
6. Lisää lyhyt log retention CloudWatchiin.
7. Lisää peliin yksi taustalla tehtävä `fetch` loppuruudussa.
8. Tallenna vain analyysiin tarvittavat kentät.
9. Älä tallenna henkilötietoja tai pysyviä tunnisteita.
10. Tee myöhemmin erillinen analyysiskripti tallennetulle datalle.

## Päätös

Ensimmäiseen toteutukseen suositellaan tätä yhdistelmää:

- `GitHub Pages`
- `API Gateway`
- `Lambda`
- `DynamoDB`

Tämä on kevyin järkevä AWS-ratkaisu tähän peliin silloin, kun tavoitteena on anonyymi vastaustallennus ilman henkilötietoja.
