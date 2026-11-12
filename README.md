# rosstewart.github.io

Personal academic website of Ross C. Stewart, built with [Astro](https://astro.build) and
deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Develop

```bash
nvm use            # Node 24 (see .nvmrc)
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/
```

## Editing content

Most updates only need a YAML or Markdown file. Entries appear in the same order as in the file.

| What | Where |
| --- | --- |
| Publications | `src/data/publications.yaml`: `selected: true` features a paper on the home page; `firstAuthor: true` includes it in the first/co-first filter. "Stewart, R." is bolded automatically. |
| Talks and posters | `src/data/talks.yaml` |
| Awards | `src/data/awards.yaml` (the first three appear on the home page) |
| Reviewing and service | `src/data/service.yaml` |
| Education, experience, teaching | `src/data/positions.yaml` |
| Research projects | `src/content/research/*.md` (one page each, at `/research/<file-name>/`) |
| Earlier projects | `src/content/archive/*.md` |
| Bio, name, links | `src/pages/index.astro` and `src/lib/site.ts` |
| CV PDF | replace `public/cv.pdf` |
| Images | `src/assets/` (optimized automatically at build time) |

Example publication:

```yaml
- id: my-paper-2027          # any unique id
  title: Paper title
  authors: Doe, J., Stewart, R., et al.
  venue: Conference or journal (ABBR 2027)
  year: 2027
  status: preprint           # published | in press | preprint
  note: co-first author      # optional
  firstAuthor: true          # optional
  selected: true             # optional
  links:
    - { label: Paper, url: "https://doi.org/..." }
    - { label: Code, url: "https://github.com/..." }
```

## Notes

- Old hash-routed URLs from the previous React site (e.g. `/#/projects/gym-brain/privacy-policy`)
  are redirected by a small script in `src/pages/index.astro`.
- The Gym Brain privacy policy lives at `/projects/gym-brain/privacy-policy/`.
- The previous React version of the site is preserved in git history (commit `fb870cc`).
