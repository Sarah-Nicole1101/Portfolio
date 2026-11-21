# Sarah Nicole Hular — Portfolio

A responsive React portfolio built with Vite. The website uses one scrolling page, but each section has its own React component so the code stays easy to maintain.

## Getting started

Install [Node.js](https://nodejs.org/) 20.19+ (or 22.12+), then run:

```bash
npm install
npm run dev
```

Open the local address printed by Vite. To create a production build:

```bash
npm run build
```

The production files are written to `dist/`.

## Where to edit

| File | What it controls |
| --- | --- |
| `src/components/About.jsx` | About Me text, education, and portrait |
| `src/components/Projects.jsx` | Project cards, detail modal, and image galleries |
| `src/data/projects.js` | Names, descriptions, technologies, screenshots, and personal contributions |
| `src/components/Skills.jsx` | Skill categories and tags |
| `src/components/Credentials.jsx` | Certifications and training links |
| `src/components/Hero.jsx` | Opening introduction and illustration |
| `src/components/Header.jsx` | Sticky navigation, including the mobile menu |
| `src/components/Contact.jsx` | Contact details and copy-email interaction |
| `src/components/Footer.jsx` | Footer links |
| `src/styles.css` | Colors, typography, layouts, and responsive rules |
| `public/assets/` | Images, CV, icons, and screenshots |

`src/App.jsx` assembles the sections in order, while `src/main.jsx` starts React.

## Updating your portfolio

1. Change About Me in `About.jsx`.
2. Add a new project object in `src/data/projects.js`; add screenshots to `public/assets/` and reference their filenames in the project's `gallery` array.
3. Update skill tags in `Skills.jsx` and certificate links in `Credentials.jsx`.
4. Run `npm run build` and publish the resulting build.

AGAP's team-wide features are deliberately stored separately from Sarah's individual contributions. The AGAP source repository is private and no public source link is included.

## Notes

- The site is a single-page portfolio with anchor navigation, not a multi-route app.
- Images shown in the portfolio and the CV are included in `public/assets/`.
- `.openai/hosting.json` is hosting configuration for the existing ChatGPT Site. Preserve its `project_id` when updating that Site.
