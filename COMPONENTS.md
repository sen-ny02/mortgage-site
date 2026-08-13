
**New to this?** Read `BUILDING-A-PAGE.md` first — it explains how to work out which components you need. This file is the reference for what each one is.

# Components

**Read the first half before you start building. It explains how this
works. The second half is the reference you'll come back to.**

---

# Part 1 — How this works

## The idea

Normally when you build a web page you write HTML for the structure and CSS
to make it look right. On this project, **the CSS is already written.**

Every layout this site needs — two columns, a grid of cards, a form, a
block of text — already exists as a set of CSS classes in
`css/shared.css`. Your job is to write HTML that uses those classes.

So instead of this:

```html
<!-- Writing your own layout from scratch -->
<div class="my-two-columns">
  ...
</div>
```

```css
/* And then writing CSS to make it work */
.my-two-columns {
  display: grid;
  grid-template-columns: 300px 600px;
  ...
}
```

You do this:

```html
<!-- Using a class that already exists -->
<div class="container split">
  ...
</div>
```

And write no CSS at all.

## Why we're doing it this way

**Consistency.** Three people building six pages independently will produce
six slightly different-looking pages. Shared classes mean every page uses
the same spacing, the same buttons, the same card style — without anyone
having to coordinate.

**Responsiveness is already handled.** Every component here already works
on phones, tablets and desktop monitors. If you write your own layout with
fixed pixel widths, it will break on some screen size and you probably
won't notice until day 12.

**Changes happen once.** When Sam's real brand colours arrive, we change
them in one place and every page updates. If everyone hardcoded their own
colours, that's a change across six files.

## Your actual workflow

1. Copy `_template.html` and rename it to your page
2. Look at the page you're building. Break it into sections — a heading
   block, a row of cards, a photo beside some text, a contact form
3. For each section, find the matching component in Part 2 below
4. Copy the HTML block
5. Change the words. Change the images. Do not change the class names
6. Repeat until the page is built

Most pages are three to six components stacked on top of each other.

## The rules

**Copy the HTML exactly, then change only the content.** The class names
are what make it work. `class="container split"` works;
`class="container splits"` silently does nothing.

**Don't change `css/shared.css`.** It's loaded by every page, so editing it
affects everyone else's work and causes merge conflicts. If you think
something needs adding, message Sen.

**Don't use `style="..."` in your HTML.** Inline styles override
everything and can't be maintained.

**Don't write raw colours.** Not `#21453a` — use `var(--color-brand)`. All
the available variables are listed at the top of `css/shared.css`.

**Check here before you Google.** If you search "how to make two columns in
CSS" you'll find an answer that uses fixed pixel widths and breaks on
mobile. The version in this file is already correct for this project.

## When there isn't a component for what you need

This will happen, and it's fine. Two options:

**If it's small and only affects your page** — write it in your own CSS
file (`css/about.css`, `css/services.css`). Give the class a name starting
with your page, like `.about-timeline`, so it's obvious it isn't shared.

**If you think other pages will need it too** — message Sen. He'll add it
to the shared file so everyone gets it.

**If you're not sure which** — message Sen. That's faster than guessing.

## When you're stuck

Message Sen after **20 minutes**. Not two hours. 

---

# Part 2 — Component reference

Each of these is a working block of HTML. Copy it, change the text.

---

## Page section

The wrapper that goes around everything. Every block of content on the page
sits inside one of these.

```html
<section class="section">
  <div class="container">

    <!-- content goes here -->

  </div>
</section>
```

**Why two elements?** The `<section>` stretches the full width of the
screen, so its background colour spans edge to edge. The `.container`
caps the content at a readable width and centres it. If you merged them,
the background would be a floating rectangle with white gaps either side on
a wide monitor.

**Variants** — add a second class to `.section`:

| Class | Effect |
|---|---|
| `section` | White background |
| `section section-alt` | Light grey background |
| `section section-tint` | Pale brand-coloured background |

Alternate these down a page so adjacent sections separate visually.

**Add an `id` if the nav links to it:**

```html
<section class="section" id="services">
```

---

## Section heading

The standard heading block at the top of a section.

```html
<div class="section-header">
  <p class="eyebrow">Small label above</p>
  <h2>The section heading</h2>
  <p>One sentence explaining what this section covers.</p>
</div>
```

The eyebrow is optional. Use it at most once per section.

**Only one `<h1>` per page**, and it should describe the page. Every other
heading is `<h2>`, then `<h3>` for subheadings inside those. Don't skip
levels — going from `<h2>` to `<h4>` breaks screen reader navigation.

---

## Card grid

A row of boxes that reflows automatically — three across on a desktop, two
on a tablet, one on a phone. You don't have to do anything to make that
happen.

```html
<ul class="card-grid">

  <li class="card">
    <h3>First-time buyers</h3>
    <p>Working out what you can borrow, what deposit you need, and which
       lenders will consider your situation.</p>
  </li>

  <li class="card">
    <h3>Remortgaging</h3>
    <p>Reviewing your current deal before it ends, and comparing product
       transfers against moving lender.</p>
  </li>

  <li class="card">
    <h3>Buy-to-let</h3>
    <p>Advice for landlords, including portfolio lending and limited
       company structures.</p>
  </li>

</ul>
```

**Why a `<ul>`?** It genuinely is a list of related items. Screen readers
announce "list, 6 items" so a blind user knows how many there are before
reading through them. The bullets are removed by the CSS.

Add as many `<li class="card">` items as you need — the grid works them out.

**Variant:** `class="card-grid card-grid-wide"` gives fewer, larger
columns. Use when the cards have more text in them.

**Clickable cards** — if the whole card should be a link:

```html
<li>
  <a class="card card-link" href="services.html#buy-to-let">
    <h3>Buy-to-let</h3>
    <p>Advice for landlords.</p>
  </a>
</li>
```

Note `card-link` goes on the `<a>`, not the `<li>`. Only use this when the
card actually is clickable — a card that lifts on hover but does nothing
when clicked is annoying.

---

## Two columns — image beside text

Side by side on desktop, stacked on mobile. Switches over at 800px wide.

```html
<section class="section">
  <div class="container split">

    <div>
      <img src="images/sam.jpg" alt="Sam Makalandawa, mortgage adviser">
    </div>

    <div>
      <p class="eyebrow">About</p>
      <h2>Twenty years in financial services</h2>
      <p>First paragraph.</p>
      <p>Second paragraph.</p>
    </div>

  </div>
</section>
```

`split` goes on the same element as `container`. It expects **exactly two
direct children** — the two `<div>`s. Put as much as you like inside each
one.

The text column is deliberately wider than the image column.

**Variants:**

| Class | Effect |
|---|---|
| `container split` | Narrow column, then wide column |
| `container split-even` | Two equal columns |
| `container split split-reverse` | Swaps the order on desktop only |

Use `split-reverse` on alternating sections so the image doesn't sit on the
same side all the way down a long page.

**Always write a real `alt` on images.** Describe what's in the picture. If
the image is purely decorative, use `alt=""` — empty, but present.

---

## Buttons

```html
<a class="btn btn-primary" href="contact.html">Book a free chat</a>
```

Two classes, both needed. `btn` is the shape and size; `btn-primary` is the
colour.

**Two buttons together:**

```html
<div class="btn-group">
  <a class="btn btn-primary" href="contact.html">Book a free chat</a>
  <a class="btn btn-secondary" href="services.html">What I can help with</a>
</div>
```

**Use `btn-primary` for the one main action on the page.** Everything else
is `btn-secondary`. Two equally loud buttons means the visitor doesn't know
which one to press, so neither gets pressed.

**Write what the button does**, in one to three words, starting with a
verb. "Book a free chat", not "Click here" or "Submit".

---

## Pill list

Small rounded labels in a row. For qualifications, tags, short features.

```html
<ul class="pill-list">
  <li>CeMAP</li>
  <li>CeRER</li>
  <li>Whole of market</li>
</ul>
```

Wraps to a second line automatically. Keep the text short — one or two
words each.

---

## Prose block

For pages that are mostly text — privacy policy, cookie policy. Wrap
everything in this and the headings, paragraphs and lists get spaced
correctly with no CSS from you.

```html
<section class="section">
  <div class="container">

    <h1>Privacy policy</h1>
    <p class="prose-meta">Last updated: 1 September 2026</p>

    <div class="prose">

      <h2>What information we collect</h2>
      <p>Text.</p>

      <h2>How we use it</h2>
      <p>Text.</p>

      <ul>
        <li>First point</li>
        <li>Second point</li>
      </ul>

      <h2>Your rights</h2>
      <p>Text.</p>

    </div>

  </div>
</section>
```

The `<h1>` and the meta line sit **outside** `.prose` — `.prose` is for the
body content only.

---

## Contact form

Every input needs a `<label>` where the `for` matches the input's `id`.
Clicking the label focuses the input, and screen readers read the label
when the user reaches the field.

```html
<div class="form-field">
  <label for="name">Your name</label>
  <input type="text" id="name" name="name" required>
</div>

<div class="form-field">
  <label for="email">Email address</label>
  <input type="email" id="email" name="email" required>
</div>

<div class="form-field">
  <label for="phone">Phone number</label>
  <span class="form-hint">Optional — if you'd rather we called you</span>
  <input type="tel" id="phone" name="phone">
</div>

<div class="form-field">
  <label for="message">How can we help?</label>
  <textarea id="message" name="message" required></textarea>
</div>

<div class="form-consent">
  <input type="checkbox" id="consent" name="consent" required>
  <label for="consent">
    I'm happy to be contacted about my enquiry.
    See our <a href="privacy.html">privacy policy</a>.
  </label>
</div>

<button type="submit" class="btn btn-primary">Send enquiry</button>
```

**Never use placeholder text instead of a label.** Placeholders vanish as
soon as someone types, so anyone who gets distracted mid-form loses the
label entirely.

**Error state** — add `has-error` to the wrapper and a message under the
input:

```html
<div class="form-field has-error">
  <label for="email">Email address</label>
  <input type="email" id="email" name="email" required>
  <span class="form-error" role="alert">Enter a valid email address</span>
</div>
```

`role="alert"` makes screen readers announce the error when it appears.

**Success and failure messages** shown after submitting:

```html
<p class="form-message form-message-success">
  Thanks — your message has been sent. Sam will be in touch within one
  working day.
</p>
```

```html
<p class="form-message form-message-error">
  Something went wrong sending your message. Please call 01234 567890
  instead.
</p>
```

---

## Call-to-action band

Full-width coloured strip at the bottom of a page.

```html
<section class="cta-band">
  <div class="container">
    <h2>Ready to talk it through?</h2>
    <p>A first conversation costs nothing and there's no obligation.</p>
    <div class="btn-group">
      <a class="btn btn-primary" href="contact.html">Book a free chat</a>
    </div>
  </div>
</section>
```

Note there's no `.section` class on this one — it brings its own padding.

**One per page maximum.** Two of these and neither reads as important.

---

## Scroll animation

Add `reveal` to any element and it fades up as it scrolls into view.

```html
<li class="card reveal">
  <h3>Heading</h3>
  <p>Text.</p>
</li>
```

**Don't put it on anything visible when the page first loads** —
especially the `<h1>` and anything in the hero. The first thing a visitor
sees should appear instantly.

Use it sparingly. A page where everything animates is worse than one where
nothing does.

---

# Quick reference

| I need | Use |
|---|---|
| A block of content on the page | `<section class="section">` + `<div class="container">` |
| A grey or tinted section | Add `section-alt` or `section-tint` |
| A heading with a subtitle | `<div class="section-header">` |
| A row of boxes | `<ul class="card-grid">` + `<li class="card">` |
| Image beside text | `<div class="container split">` |
| Two equal columns | `<div class="container split-even">` |
| A button | `<a class="btn btn-primary">` |
| Two buttons | `<div class="btn-group">` |
| Qualification tags | `<ul class="pill-list">` |
| A page of text | `<div class="prose">` |
| A form field | `<div class="form-field">` + label + input |
| A closing prompt to get in touch | `<section class="cta-band">` |
| Something to fade in on scroll | Add `reveal` |
