# etheit site

next.js 14 (app router) + typescript. no css framework, no ui library.

## run it
```
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## edit content (no code needed)
everything you read on the site lives in `/data`:

| file | controls |
| --- | --- |
| `site.json` | name, email, nav, ticker on/off + text, socials (empty href = hidden), footer, theme colours |
| `home.json` | hero, problems, services, process, faq, cta |
| `projects.json` | project cards: title, tags, summary, image path, stack. set `"sample": false` once real |
| `about.json` | story, principles, the four mascots (name, job, colour) |
| `contact.json` | form labels, errors, success message |

## contact form
posts to `/api/contact`, which sends mail through resend. copy `.env.example` to `.env.local`
and fill in `RESEND_API_KEY` + `CONTACT_TO`. without them the form tells people to email you
directly instead of pretending it sent.

## turn things on and off (true / false)
- top bar marquee: `site.json` -> `tickerEnabled`
- home page sections: `home.json` -> `sections` (`hero`, `problems`, `build`, `process`, `work`, `testimonials`, `faq`, `cta`)
- about page sections: `about.json` -> `sections` (`story`, `founders`, `principles`, `crew`)

set any of them to `false` and that block is not rendered at all (no html, no js sent for it).

## testimonials
`home.json` -> `testimonials`. replace the placeholder quotes with real ones and set `"sample": false` to remove the dashed "sample" tag.

## co-founders and story
`about.json` -> `storyTitle`, `storyQuote`, `story` (paragraphs), `founders` (name, role, bio, optional `photo` path in /public, `color` for the placeholder mascot).
set `foundersSample` to false once the second card has real text.

## performance notes
server-rendered pages, one shared scroll observer for all reveal animations, `content-visibility: auto` on below-the-fold sections,
async image decoding, cached project images, no css framework or ui library.

## colours and pattern
change them in `data/site.json` -> `theme`. no css edits needed.
`bg` page colour, `paper` card colour, `ink` text and borders, `accent` main pop (buttons, stripes),
`sun` second pop (highlights), `muted` soft text, `onAccent` text on accent.
`pattern` controls the dot background: `color`, `opacity`, `size` (px). set opacity to 0 to remove it.
current palette is taken from the logo: yellow `#F6E977`, crescent pink `#D9406A`.

## hero
`home.json` -> `hero`. `rotate` is the list of words that cycle in the dark block, `rotateMs` is the speed
(set a single word to stop it).

## fonts
bricolage grotesque + space mono, set in `app/layout.tsx`.

## your real logo / mascots
`components/Crescent.tsx` is the logo traced as pixels (colours follow the theme). `components/Mascot.tsx`
is a placeholder. drop your own files in `/public` and swap them in.

## project pages (mdx)
each card links to `/projects/<slug>`. the page body is `content/projects/<slug>.mdx`.
to add a project: add an entry to `data/projects.json`, put the image in `public/projects/`,
and create `content/projects/<slug>.mdx`. plain markdown works, plus three helpers with no import:

```
<Callout>a highlighted note</Callout>
<Figure src="/projects/shot.png" alt="..." caption="..." />
<Stats><Stat value="3x" label="faster" /><Stat value="0" label="manual steps" /></Stats>
```
the card images in `public/projects/*.svg` are placeholders. swap in real screenshots (png, jpg, webp) and
update `image` in `projects.json`.
