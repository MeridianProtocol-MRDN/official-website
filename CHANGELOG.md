# Changelog

All notable changes to this project are documented here.

## [1.0.0] — 2026

### Added

- Full rebuild of the website on React + TypeScript + Vite + Tailwind CSS
  (previously plain static HTML/CSS/JS).
- Centralized data layer for token config, roadmap, tokenomics, security
  status, legal content, and FAQ.
- Complete page set: Home, About, Token, Tokenomics, Roadmap, Security,
  Ecosystem, Community, Documentation, Whitepaper, Litepaper, FAQ, Contact,
  Legal hub (Privacy, Terms, Risk Disclosure, Disclaimer, Cookie Policy),
  Community Guidelines, Security Policy, Incident Response, Investor
  Disclosure, and a custom 404 page.
- GitHub Actions CI/CD pipeline (typecheck → lint → build → deploy to
  Cloudflare Pages).
- `robots.txt`, `sitemap.xml`, SPA `_redirects` for Cloudflare Pages.
