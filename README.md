# Meridian Protocol — Website

Production website for Meridian Protocol (MRDN), a fixed-supply BEP-20 token on
BNB Smart Chain. Built with React, TypeScript, Vite, and Tailwind CSS.

**Live at:** https://meridianprotocol.site

## Project status

The token contract is deployed and verified. The rest of the ecosystem —
independent audit, tokenomics allocation, liquidity, utility — is in active
development. See [/roadmap](https://meridianprotocol.site/roadmap) and
[/security](https://meridianprotocol.site/security) for the current, honest
status of each.

## Tech stack

- React 18 + TypeScript (strict mode)
- Vite
- Tailwind CSS
- React Router
- Framer Motion (used sparingly)
- Deployed to Cloudflare Pages via GitHub Actions

## Project structure

```
src/
  components/   Shared UI (Header, Footer, Button, StatusBadge, ...)
  data/         Centralized facts — token config, roadmap, tokenomics, legal text
  layouts/      Root layout (header/footer wrapper)
  pages/        One file per route
  styles/       Global Tailwind entry point
public/
  documents/    Whitepaper / litepaper PDFs
  favicon/      Icon assets
```

All project facts (contract address, supply, social links, roadmap status) are
centralized in `src/data/`. Never hardcode these values inside a component —
import them from the relevant data file instead.

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build      # runs typecheck + Vite build, outputs to dist/
pnpm preview    # preview the production build locally
```

## Deployment

Deployment target is **Cloudflare Pages**.

- Build command: `pnpm build`
- Output directory: `dist`
- `public/_redirects` handles SPA fallback routing
- CI/CD runs via `.github/workflows/ci.yml`: install → typecheck → lint →
  build → (on `main`) deploy

Required GitHub Actions secrets for deployment:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Website security hardening

This is a static site with no backend, database, or login form — that alone
removes most common attack surfaces (no SQL injection, no server-side code
to exploit, no user accounts to breach). What's implemented and what you
still need to do:

**Already implemented in this repo:**
- `public/_headers` — Content-Security-Policy, HSTS, X-Frame-Options,
  X-Content-Type-Options, and other security headers (Cloudflare Pages
  reads this file automatically)
- No secrets in the codebase; `.env` is gitignored, `.env.example` has
  placeholders only
- `pnpm audit` runs in CI on every push to catch known vulnerable
  dependencies
- Contact page uses a plain `mailto:` link — no contact-form backend to
  attack

**You need to do this yourself (account-level, can't be done in code):**
- Enable **2FA** on your GitHub account and your Cloudflare account
- In GitHub repo settings → Branches, add a branch protection rule on
  `main` requiring CI to pass before merge
- In Cloudflare → your domain → Security, turn on **Bot Fight Mode** and
  **Always Use HTTPS**
- Keep the `CLOUDFLARE_API_TOKEN` GitHub secret scoped to only the
  permissions it needs (Pages edit), not a global API key
- Rotate that token if it's ever exposed anywhere (logs, screenshots, etc.)

## Security

Never commit `.env`, private keys, seed phrases, or API tokens. Copy
`.env.example` to `.env` for local values — only public, non-secret values
belong in `VITE_*` variables, since anything with that prefix is bundled into
the client-side build. See [SECURITY.md](./SECURITY.md) for the vulnerability
disclosure process.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Official links

- Website: https://meridianprotocol.site
- X: https://x.com/Meridian_MRDN
- Telegram: https://t.me/MeridianProtocol
- Discord: see [/community](https://meridianprotocol.site/community)
- Contact: admin@meridianprotocol.site
