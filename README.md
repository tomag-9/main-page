# Main Page

Portfolio website built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion.

## Local Development

Run with Docker (Next.js dev server + local nginx proxy on port 3000):

```bash
docker compose up --build -d
```

Or run directly without Docker:

```bash
npm install
npm run dev
```

## Production Setup (Dokploy + Traefik)

This repository includes a dedicated production compose file with:

- one application service only
- no nginx proxy container
- no routing config inside compose

Traefik routing and TLS are expected to be handled by Dokploy.

Production compose file:

- `docker-compose.prod.yml`

To test production locally:

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

The app listens on port `3000` inside the container and is exposed internally for reverse proxying.

## Domain

Planned public domain: `tomag.xyz`.

Configure this in Dokploy/Traefik and point DNS to the server running Dokploy.
