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
