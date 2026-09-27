# Tomáš Magula — portfolio

Portfolio v Next.js 16, React 19, Tailwind CSS 4 a Framer Motion. Projekt sa
exportuje ako statická stránka a nasadzuje na **Cloudflare Pages**. Nepotrebuje
Next.js server, Pages Functions ani samostatný Cloudflare Worker.

## Lokálny vývoj

```bash
npm ci
npm run dev
```

Vývojový server beží na `http://localhost:3000`.

Produkčný build a lokálna kontrola cez Cloudflare Pages runtime:

```bash
npm run preview
```

`next build` vytvorí priečinok `out/`. Práve jeho obsah sa publikuje.

## Prvé nasadenie cez Cloudflare dashboard (odporúčané)

1. Pushni tento repozitár na GitHub alebo GitLab.
2. V Cloudflare otvor **Workers & Pages → Create application → Pages → Connect
   to Git** a vyber repozitár.
3. Nastav:

   | Pole | Hodnota |
   | --- | --- |
   | Project name | `main-page` (alebo iný voľný názov) |
   | Production branch | `main` |
   | Framework preset | `Next.js (Static HTML Export)` alebo `None` |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | nechaj prázdne |

4. Nepoužívaj `npm run deploy` ako build ani deploy command v Git integrácii.
   Pages po buildnutí automaticky publikuje obsah `out/`.
5. Projekt momentálne nepotrebuje žiadne environment variables, bindings ani
   compatibility flags.
6. Klikni **Save and Deploy**. Každý ďalší push do `main` spraví produkčný
   deploy; ostatné branche dostanú preview URL.

Odporúčaná verzia Node.js je 22. Ak ju treba vynútiť, v **Settings →
Environment variables** pridaj build premennú `NODE_VERSION=22` pre Production
aj Preview.

## Doména `tomag.xyz`

1. V Pages projekte otvor **Custom domains → Set up a domain**.
2. Zadaj `tomag.xyz` a dokonči sprievodcu. Apex doména musí byť v tom istom
   Cloudflare účte a používať Cloudflare nameservery.
3. Voliteľne pridaj aj `www.tomag.xyz`; v **Rules → Redirect Rules** ho môžeš
   presmerovať na `https://tomag.xyz`.
4. Ak doména doteraz smerovala na Dokploy/Traefik alebo starý Worker, odstráň
   konfliktný `A`, `AAAA`, `CNAME` alebo Worker route až po tom, čo si overíš,
   že ide o staré smerovanie. Doménu vždy najprv pridaj cez Pages UI — samotný
   ručne vytvorený CNAME nestačí.

## Manuálny deploy z terminálu

Git integrácia je bežný produkčný postup. Jednorazovo sa dá deploynúť aj priamo:

```bash
npx wrangler login
npm run deploy
```

Konfigurácia je vo `wrangler.jsonc`; `npm run deploy` najprv vytvorí `out/` a
potom ho odošle do Pages projektu `main-page`. Ak už Cloudflare projekt používa
iný názov, uprav `name` vo `wrangler.jsonc` tak, aby sa presne zhodoval.

## Prečo tu nie je Worker

Všetok obsah sa dá vytvoriť počas buildu. Prepínanie jazyka, animácie a modálne
okná bežia v prehliadači; `robots.txt` a `sitemap.xml` sa vygenerujú do `out/`.
Worker alebo Pages Function bude potrebný až pri serverovej funkcionalite, napr.
API route, SSR, autentifikácii, spracovaní kontaktného formulára alebo práci s
D1/KV/R2. Vtedy treba znovu zvoliť serverový deployment (napr. OpenNext na
Workers), nie miešať ho s týmto statickým Pages setupom.

## Rýchla diagnostika

Pred pushom spusti:

```bash
npm ci
npm run lint
npm run build
```

Úspešný build musí vytvoriť `out/index.html`, `out/robots.txt` a
`out/sitemap.xml`. Ak Cloudflare hlási, že nenašiel výstup, skontroluj najmä
`Build output directory = out`. Ak log spomína `.open-next/worker.js` alebo
`opennextjs-cloudflare`, Pages projekt stále používa starý build/deploy command.
