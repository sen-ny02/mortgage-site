# Page plans

What each page should contain, block by block, with the component that
builds each one.

Use this alongside `BUILDING-A-PAGE.md` — that file explains the process,
this one tells you the target for your specific page.

If you think a page needs a block that isn't listed here, that's fine —
message Sen and we'll agree it. Don't just add it silently, because the
pages need to feel like one site.

---

## Home — Sen

```
┌──────────────────────────────────────────────┐
│  HEADER — same on every page                 │
├──────────────────────────────────────────────┤
│                                              │
│  .hero              [CUSTOM — home.css]      │
│                                              │
│  Whole-of-market · Cambridge · UK-wide       │
│  ────────────────────────────────            │
│  Mortgage advice without the jargon          │
│                                              │
│  One paragraph pitch, ~35 words.             │
│                                              │
│  [ Book a free chat ]  [ What I help with ]  │
│                                              │
├──────────────────────────────────────────────┤
│  .section + .section-header + .card-grid     │
│                                              │
│  What I can help with                        │
│  One line of intro.                          │
│                                              │
│  ┌────────┐ ┌────────┐ ┌────────┐            │
│  │ First- │ │ Remort-│ │ Buy-to-│            │
│  │ time   │ │ gaging │ │ let    │            │
│  └────────┘ └────────┘ └────────┘            │
│  ┌────────┐ ┌────────┐ ┌────────┐            │
│  │ Comm-  │ │ Equity │ │ Prot-  │            │
│  │ ercial │ │ release│ │ ection │            │
│  └────────┘ └────────┘ └────────┘            │
│                                              │
│  Each card links to services.html#anchor     │
├──────────────────────────────────────────────┤
│  .section-alt + .split                       │
│                                              │
│  ┌──────────┐  About                         │
│  │          │  Twenty years in financial     │
│  │  PHOTO   │  services                      │
│  │          │                                │
│  │          │  Two short paragraphs.         │
│  └──────────┘                                │
│                (CeMAP) (CeRER) (Whole of mkt)│
│                [ More about Sam ]            │
├──────────────────────────────────────────────┤
│  .cta-band                                   │
│         Ready to talk it through?            │
│           [ Book a free chat ]               │
├──────────────────────────────────────────────┤
│  FOOTER — same on every page                 │
└──────────────────────────────────────────────┘
```

**Note:** the About block here is a *teaser*, not the full bio. Three
sentences and a button. The real thing is on about.html.

---

## Services — Marcel

The biggest page, and the one with zero custom CSS. Six repetitions of one
pattern.

```
┌──────────────────────────────────────────────┐
│  HEADER                                      │
├──────────────────────────────────────────────┤
│  .section + .section-header                  │
│                                              │
│  Mortgage and protection services            │
│  One or two lines of intro.                  │
├──────────────────────────────────────────────┤
│  .section-alt + .card-grid                   │
│                                              │
│  Six cards, each linking DOWN this page       │
│  to its own section:                         │
│                                              │
│  ┌────────┐ ┌────────┐ ┌────────┐            │
│  └────────┘ └────────┘ └────────┘            │
│  ┌────────┐ ┌────────┐ ┌────────┐            │
│  └────────┘ └────────┘ └────────┘            │
│                                              │
│  href="#first-time-buyers" etc.              │
├──────────────────────────────────────────────┤
│  .section + .split      id="first-time-buyers"│
│                                              │
│  ┌──────────┐  First-time buyers             │
│  │  IMAGE   │  2–3 paragraphs.               │
│  └──────────┘  What's involved, what Sam does│
├──────────────────────────────────────────────┤
│  .section-alt + .split .split-reverse        │
│                         id="remortgaging"    │
│  Remortgaging   ┌──────────┐                 │
│  2–3 paragraphs │  IMAGE   │                 │
│                 └──────────┘                 │
├──────────────────────────────────────────────┤
│  .section + .split          id="buy-to-let"  │
│  ...                                         │
├──────────────────────────────────────────────┤
│  ... alternating, six sections total ...     │
├──────────────────────────────────────────────┤
│  .cta-band                                   │
├──────────────────────────────────────────────┤
│  FOOTER                                      │
└──────────────────────────────────────────────┘
```

### These six IDs are required

The Home page links to them. If they don't exist, those links break.
Spelling must match exactly:

```
id="first-time-buyers"
id="remortgaging"
id="buy-to-let"
id="commercial"
id="equity-release"
id="protection"
```

### Alternate two things down the page

1. Background — `.section` then `.section-alt` then `.section` ...
2. Image side — `.split` then `.split .split-reverse` then `.split` ...

Six identical-looking sections in a row is boring. Alternating both makes
a long page feel structured.

### Content per section

Roughly 100–150 words each. Cover:
- Who it's for
- What the process involves
- What Sam does that a comparison website doesn't

**Equity release needs care.** The FCA scrutinises it more than anything
else on this site. Write it plainly, don't make claims about outcomes, and
flag to Sen that it needs Flexi Network sign-off before launch.

---

## About — Oliver

```
┌──────────────────────────────────────────────┐
│  HEADER                                      │
├──────────────────────────────────────────────┤
│  .section + .section-header                  │
│                                              │
│  About Sam                                   │
├──────────────────────────────────────────────┤
│  .section-alt + .split                       │
│                                              │
│  ┌──────────┐  Twenty years in financial     │
│  │          │  services                      │
│  │  PHOTO   │                                │
│  │          │  Full bio — 4 paragraphs.      │
│  │          │  Career, qualifications,       │
│  └──────────┘  whole-of-market, approach.    │
├──────────────────────────────────────────────┤
│  .section + .pill-list                       │
│                                              │
│  Qualifications                              │
│  (CeMAP) (CeRER) (MBA) (Whole of market)     │
├──────────────────────────────────────────────┤
│  .section-alt + .card-grid                   │
│                                              │
│  How Sam works                               │
│  ┌────────┐ ┌────────┐ ┌────────┐            │
│  │ Whole  │ │ Plain  │ │ No     │            │
│  │ of mkt │ │ English│ │ pressure│           │
│  └────────┘ └────────┘ └────────┘            │
│                                              │
│  Three cards. NOT clickable — no card-link.  │
├──────────────────────────────────────────────┤
│  .cta-band                                   │
├──────────────────────────────────────────────┤
│  FOOTER                                      │
└──────────────────────────────────────────────┘
```

**The photo is the most important asset on this page.** People choose a
broker on whether they trust the face. If the photo Sen gives you is poor
quality, say so rather than using it.

**"Whole of market" needs explaining, not just stating.** Most visitors
don't know the term. One sentence: it means Sam can recommend products
from across the lending market rather than a restricted panel of lenders.

---

## Contact — Sen

```
┌──────────────────────────────────────────────┐
│  HEADER                                      │
├──────────────────────────────────────────────┤
│  .section + .section-header                  │
│  Get in touch                                │
├──────────────────────────────────────────────┤
│  .section-alt + .split-even                  │
│                                              │
│  Your name          │  Prefer to talk?       │
│  [_______________]  │  01234 567890          │
│                     │  Mon–Fri, 9am–6pm      │
│  Email address      │                        │
│  [_______________]  │  Email                 │
│                     │  sam@...               │
│  Phone (optional)   │                        │
│  [_______________]  │  Where Sam works       │
│                     │  Based in Cambridge,   │
│  How can we help?   │  clients across the UK │
│  [_______________]  │                        │
│  [_______________]  │  What happens next     │
│                     │  Sam replies within    │
│  ☐ Happy to be      │  one working day.      │
│    contacted        │                        │
│                     │                        │
│  [ Send enquiry ]   │                        │
├──────────────────────────────────────────────┤
│  FOOTER                                      │
└──────────────────────────────────────────────┘
```

**No cta-band on this page** — the form is the call to action.

The right-hand column matters as much as the form. People who don't want
to fill in a form need an obvious phone number, and everyone wants to know
what happens after they press send.

---

## Privacy — Oliver, and Cookies — Marcel

Same shape. Almost no layout work; the job is research and writing.

```
┌──────────────────────────────────────────────┐
│  HEADER                                      │
├──────────────────────────────────────────────┤
│  .section + .container                       │
│                                              │
│  Privacy policy                     <h1>     │
│  Last updated: ...          .prose-meta      │
│                                              │
│  <div class="prose">                         │
│                                              │
│    What information we collect      <h2>     │
│    Paragraphs.                               │
│                                              │
│    How we use it                    <h2>     │
│    Paragraphs and lists.                     │
│                                              │
│    Who we share it with             <h2>     │
│    ...                                       │
│                                              │
│    How long we keep it              <h2>     │
│    Your rights                      <h2>     │
│    How to complain                  <h2>     │
│    Contact us                       <h2>     │
│                                              │
│  </div>                                      │
├──────────────────────────────────────────────┤
│  FOOTER                                      │
└──────────────────────────────────────────────┘
```

The `<h1>` and `.prose-meta` sit **outside** the `.prose` div. Everything
else goes inside it.

### What these need to cover

**Privacy policy** — UK GDPR. Research what's actually required rather than
copying another broker's page. It must cover: what personal data is
collected, the lawful basis for processing it, who it's shared with
(lenders, the network), how long it's kept, the individual's rights, and
how to complain to the ICO.

**Cookie policy** — what cookies the site sets and why. **This depends on
whether we end up using analytics.** Check with Sen before writing it. If
there's no analytics and no tracking, this page is short and honest, which
is better than a long one full of things that don't apply.

Neither of these should be copy-pasted from a generator or another site.
They have to describe what this business actually does.

---

## Rules that apply to every page

**Alternate section backgrounds.** Never two the same in a row.

**One `<h1>` per page**, and it should say what the page is. Everything
else is `<h2>`, then `<h3>` inside those. Don't skip levels.

**One `.cta-band` per page maximum**, except Contact which has none.

**Every image needs `alt` text.** Describe what's in it. Decorative images
get `alt=""` — empty, but the attribute must be present.

**Use `.reveal` sparingly**, and never on anything visible when the page
first loads.

**Mark placeholders with `TODO`** so they can be found before launch.
