# Nollapohjabudjetoi

Kevyt GitHub Pages -prototyyppi pelistä, jossa pelaaja rakentaa Suomen budjettia nopeiden poliittisten valintojen kautta.

## Paikallinen käyttö

Koska kyseessä on staattinen sivu, voit avata `index.html`:n suoraan selaimessa tai ajaa paikallisen palvelimen:

```bash
python3 -m http.server 8000
```

Sen jälkeen avaa `http://localhost:8000`.

## Julkaisu GitHub Pagesiin

1. Pushaa reposi GitHubiin.
2. Avaa repoasetukset GitHubissa.
3. Mene kohtaan `Pages`.
4. Valitse lähteeksi `Deploy from a branch`.
5. Valitse branch `main` ja kansio `/ (root)`.
6. Tallenna.

GitHub Pages julkaisee sivun suoraan tästä repositorion juuresta.

## Balanssitestit

Pelin logiikkaa voi tarkistaa ilman selainta suoraan Node-ajolla.

```bash
npm test
```

Tämä ajaa kovemmat regressiotestit:
- pelissä on 10 kysymystä ja 4 vaihtoehtoa per kysymys
- saman kysymyksen vaihtoehdot eivät johda samaan lopputulokseen
- vaihtoehtojen välillä on oikea vaikutusero, ei vain kosmeettinen ero
- aikajänteet `Vuosi`, `Vaalikausi` ja `Ylivaalikausi` eroavat aidosti
- erilaiset budjettiprofiilit päätyvät selvästi eri lopputuloksiin

Lisäksi voit ajaa laajemman balanssiraportin:

```bash
npm run analyze:balance
```

Raportti näyttää:
- kysymyskohtaisen erottuvuuden
- Monte Carlo -otoksen siitä, mitkä vaihtoehdot näyttävät keskimäärin vahvoilta
- arkkityyppien erot
- varoitukset, jos jokin vaihtoehto alkaa dominoida tai kaksi vaihtoehtoa ajautuu liian lähelle toisiaan
