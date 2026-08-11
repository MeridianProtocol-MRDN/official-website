# Contributing

This is currently a solo-maintained project. Simplified workflow:

1. Create a feature branch from `main`.
2. Make your change. Keep components presentational — put facts and copy in
   `src/data/`, not hardcoded in JSX.
3. Run locally before pushing:
   ```bash
   pnpm typecheck
   pnpm lint
   pnpm build
   ```
4. Open a pull request against `main`. CI must pass before merge.
5. `main` auto-deploys to Cloudflare Pages on merge.

## Content accuracy

This site's core principle is that every status label reflects reality, not
intent. If you're editing copy in `src/data/`:

- Don't mark something `COMPLETED`, `LIVE`, or `VERIFIED` unless it actually
  is.
- Don't add statistics, partnerships, audits, or team members that aren't
  real and verifiable.
- If a fact changes (contract, supply, links), update it once in `src/data/`
  — never duplicate it inside a component.
