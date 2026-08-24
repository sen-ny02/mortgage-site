# CLAUDE.md

Context for AI assistants working on this repository. Read this before
suggesting changes.

---

## What this is

A marketing website for **Cambridge Mortgage Bureau Limited**, a UK
mortgage and protection advice firm. Static site, no build step, no
framework — plain HTML, CSS and a small amount of vanilla JavaScript.

It is also a school project. Three sixth-form students are building it as
a CAS (Creativity, Activity, Service) submission, which affects how work
is divided — see **Team** below.

**Live:** https://cambridge-mortgage-bureau.netlify.app
**Repo:** github.com/sen-ny02/mortgage-site
**Custom domain:** purchased, not yet pointed.

---

## The most important thing on this page

**This website is a regulated financial promotion.** Cambridge Mortgage
Bureau is an Appointed Representative of an FCA-authorised firm, which
means the principal firm is legally answerable for what is published here.

Practical consequences for anyone writing content or code:

- **Describe services, never recommend them.** "Equity release lets you
  access value tied up in your home" is fine. "Equity release is a good
  option if you're over 55" is advice, and unlawful to publish here.
- **No claims about outcomes.** No implied guarantees about rates,
  approval, or savings.
- **Calculator output is an illustration, never an offer.** The
  `.calc-note` disclaimer under each calculator is a compliance element,
  not decoration. Do not remove or reword it.
- **The repossession warning is mandatory** and appears in the footer of
  every page.
- **Equity release is the most scrutinised area** on the site. Anything
  touching it needs particular care.
- **New material needs new approval.** The principal firm approved an
  earlier version of the site. The calculators are new and are not yet
  covered by that approval.

If a proposed change would alter regulated wording, say so explicitly
rather than making the change quietly.

---

## Business facts

Use these exactly. They are legal disclosures and appear in the footer of
every page.

| | |
|---|---|
| Legal name | Cambridge Mortgage Bureau Limited (CMB) |
| Company number | 17370060 |
| Registered office | 18 Yeomans Way, Littleport, Cambridgeshire, CB6 1FL |
| Adviser | Sam Makalandawa |
| Phone | 07920 635771 |
| Tagline | Trusted Guidance; Happier Homes |
| Scope | Whole of market, clients UK-wide, based in Cambridgeshire |
| Qualifications | CeMAP, CeRER, MBA (Edith Cowan University) |

**Principal firm** — CMB is an Appointed Representative of:

| | |
|---|---|
| Name | Flexi Network Limited |
| FCA number | 948658 |
| Company number | 13067602 |
| Registered office | Suite 1, 16a Alderley Road, Wilmslow, SK9 1JX |

Note the two company numbers belong to **different companies**. An earlier
draft of the brief listed them adjacently without labels, which caused
confusion. 13067602 and the Wilmslow address are Flexi Network's.

**Unresolved:** the contact email. The site currently uses
`enquiries@cambridgemortgages.co.uk`; the client's own draft used
`info@cambridgemortgages.co.uk`. Confirm before launch.

---

## Team and ownership

| Person | Role | Pages |
|---|---|---|
| **Sen** | Repo owner, sole reviewer, owns the shared layer | Home, Contact |
| **Marcel** | Contributor | Residential Mortgages, Buy to Let, Cookie policy |
| **Oliver** | Contributor | About, Commercial & Credit, Protection, Privacy policy |

Marcel and Oliver are **beginners** — they know basic HTML and had not used
branches or pull requests before this project. They work on Windows using
Git Bash. Sen is the most experienced and reviews every pull request.

This shapes the whole architecture: the shared stylesheet is deliberately
over-built so that building a page is mostly assembling documented
components in HTML rather than writing CSS.

**Because this is a CAS submission, each person needs a substantial
tangible deliverable.** Do not suggest consolidating work onto Sen to save
time — it defeats the purpose of the project.

---

## Repository rules

These are enforced in code review. Breaking them creates merge conflicts
for people who cannot resolve them.

1. **Never push directly to `main`.** It is protected. All work goes
   through a branch and a pull request. Sen is on the bypass list for
   merging, not for skipping the branch.
2. **Never edit `css/shared.css` without coordinating.** It is loaded by
   every page. Changes there affect everyone's in-progress work.
3. **No inline `style="..."` attributes.** Ever.
4. **No raw hex colours.** Every colour comes from a custom property in
   `shared.css`. Use `var(--color-brand)`, not `#213c2d`.
5. **No arbitrary spacing values.** Use the `--space-*` scale, not `30px`.
6. **Page CSS files should be short.** If one is growing, a shared
   component probably already does the job.

---

## File structure

```
/
├── index.html            Home — hero, services summary, about teaser, CTA
├── about.html            About Sam
├── services.html         Being split into four product pages (see below)
├── contact.html          Contact form (Netlify Forms)
├── thanks.html           Form success page. Has <meta robots noindex>.
├── privacy.html          NOT YET BUILT
├── cookies.html          NOT YET BUILT
├── _template.html        Starter page. Copy this to begin a new page.
├── robots.txt            CURRENTLY BLOCKING ALL INDEXING — delete at launch
├── css/
│   ├── shared.css        Loaded by every page. The design system.
│   ├── home.css
│   ├── about.css
│   ├── services.css
│   └── contact.css
├── js/
│   └── reveal.js         IntersectionObserver scroll animation
└── images/
```

**Header and footer markup is duplicated across every HTML file**, because
plain HTML has no include mechanism. This was a deliberate trade-off — a
static site generator would have required Node, npm and a build step, which
was judged too much for two beginners on a deadline. The consequence is
that any header or footer change must be applied to every file in one pull
request. `grep -rn "TODO" .` finds stragglers.

---

## Documentation

Four files, each with a distinct job. Keep them accurate — the team relies
on them instead of reading `shared.css`.

| File | Purpose |
|---|---|
| `README.md` | Rules and git workflow. Read first. |
| `BUILDING-A-PAGE.md` | How to build a page. The process, read once. |
| `PAGE-PLANS.md` | What each page should contain, block by block. |
| `COMPONENTS.md` | Reference for every component. Used constantly. |

`COMPONENTS.md` opens with a flat list of every class that exists, and the
line *"if a class isn't on this list, it doesn't exist"*. **If you add a
component to `shared.css`, add it to that list**, or the guarantee breaks
and the team starts reading the stylesheet again.

---

## Design system

### Colours

All defined in `:root` in `shared.css`. Never hardcode.

| Variable | Value | Use |
|---|---|---|
| `--color-brand` | `#213c2d` | The brand colour. Buttons, headings. |
| `--color-brand-dark` | `#001c00` | Hover states, gradient edges. |
| `--color-brand-light` | `#2e5340` | Gradient highlights. |
| `--color-brand-tint` | `#f8f2e9` | Warm cream. Section backgrounds. |
| `--color-sage` | `#77917b` | Borders, rules, icons. |
| `--color-sage-light` | `#a6b8a0` | Secondary text on dark green. |
| `--color-gold` | `#d3b586` | Accents. See warning below. |
| `--color-gold-light` | `#eeddbb` | Backgrounds only. |
| `--color-stone` | `#c2b59b` | Borders on cream. |
| `--color-mist` | `#dfe0e1` | Rarely needed. |

**Contrast warning — this catches people out.** On white, only
`--color-brand` and `--color-text` are safe for text. `--color-sage` is
about 3.2:1 and `--color-gold` about 1.9:1, both failing the 4.5:1 minimum
for body text. They are for borders, rules and decoration.

Gold *is* readable on dark green (~5.5:1), which is why `.section-dark`
reassigns buttons and links to gold. That is the only context where gold
works as a text or button colour.

### Typography

- **Headings:** Source Serif 4, falling back to Georgia
- **Body:** system sans stack

This reverses the client's brand document, which specified Times for body
text. Times was designed for narrow print columns; on screen it reads as an
unstyled Word document, which undermines a site whose job is establishing
trust. Georgia is the fallback rather than Times so a failed font load
still looks intentional.

The webfont is loaded by a `<link>` in each page's `<head>`. **If headings
look like body text, that tag is missing from that page.**

### Sections

Every block of content follows this pattern:

```html
<section class="section">
  <div class="container">
    ...
  </div>
</section>
```

The section is full-width and carries the background; the container caps
content width and centres it.

Variants: `section-alt` (cream), `section-tint` (pale brand),
`section-dark` (dark green, everything inside recolours automatically).

Never two of the same background in a row. The footer is cream, so pages
should not end on `section-alt`. `section-dark` is an accent — one or two
per page at most.

### Responsive approach

Mobile-first. Base CSS is the narrow layout; `min-width` media queries add
desktop complexity.

Most components need no media queries at all — `clamp()` handles fluid
type and spacing, and `repeat(auto-fit, minmax(...))` handles reflowing
grids. There are only two media queries in the entire shared stylesheet.

---

## Deployment

Netlify, deploying automatically from `main`. Every merge is live in about
30 seconds. Pull requests get deploy previews, which is how Sen reviews
work without fetching branches locally.

**Contact form** uses Netlify Forms. Three attributes make it work:
`name="contact"`, `data-netlify="true"`, `netlify-honeypot="bot-field"`.
The form is only detected at build time, so it does not work on a local dev
server — test on a deploy preview or production. Free tier is 100
submissions per month.

---

## Current state

**Done:** shared design system, four documentation files, Home, Contact
with working form, About (needs content), Services (being restructured),
Netlify deploy, brand palette and fonts.

**In progress:** splitting the single Services page into four product
pages; replacing placeholder copy with the client's approved text; nav
rework for seven items.

**Not started:** Privacy policy, Cookie policy, calculators.

### Outstanding, blocked on the client

- Flexi Network sign-off on the calculators — blocking, not yet requested
- Logo file (SVG or transparent PNG — only screenshots supplied so far)
- Licensed hero photograph
- Fee structure — legally required disclosure, still `TODO` on Contact
- `info@` vs `enquiries@`
- Whether Trustpilot reviews earned at the adviser's previous firm may be
  used, and how they must be labelled
- Substantiation for the "100% pass ratio" claim in the draft copy
- Domain pointing

### Known issues

- Seven nav items do not fit on one line. Needs shorter labels and a
  burger menu below roughly 900px. Shared markup, so it must be fixed
  across every page at once.
- `robots.txt` currently blocks all search indexing. Deliberate, so an
  unapproved financial promotion is not indexed before launch. **Must be
  deleted on launch day** or the site will never appear in search.

---

## Launch checklist

- [ ] Flexi Network have approved the current site including calculators
- [ ] Fee disclosure added to Contact
- [ ] All placeholder text replaced — `grep -rn "TODO" .` returns nothing
- [ ] Testimonials either cleared and labelled, or removed
- [ ] Delete `robots.txt`
- [ ] Remove Netlify password protection
- [ ] Custom domain pointed, HTTPS confirmed
- [ ] Form notifications going to an inbox the client checks on his phone
- [ ] Every page has the Source Serif `<link>` tag
- [ ] Lighthouse accessibility pass on every page
- [ ] Keyboard tab-through on every page
- [ ] Google Business Profile set up (drives more local enquiries early on
      than the website itself)

---

## Working style

Sen has asked for direct feedback without softening, and for problems to be
named plainly rather than worked around. When something is a bad idea, say
so and explain why.

Flag explicitly when a suggested change touches `css/shared.css`, the
header, or the footer, because those need coordinating with two people who
cannot resolve merge conflicts. Prefer adding a new class over
restructuring an existing one.
