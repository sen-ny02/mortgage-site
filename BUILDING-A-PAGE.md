# How to build a page

**Read this once, properly, before you build your first page.**

`COMPONENTS.md` tells you what components exist. This file tells you how to
work out which ones you need and what order to do things in.

---

## The one idea that makes this easy

**Components are named after shapes, not topics.**

There is no "services component" and no "about component". There's a grid
of boxes, and there's an image beside some text. Services happens to suit
a grid. An about page happens to suit an image beside text.

This trips everyone up at first. You'll open `COMPONENTS.md` looking for
something called "testimonials" and not find it — because three quotes in a
row is just a card grid, the same shape as three services or three team
members.

So the question is never *"what is this section about?"*

The question is **"what shape is this content?"**

---

## Working out the shape

Four questions, in this order.

### 1. How many things is it?

| Number of things | Component |
|---|---|
| One | No layout component — just write it inside a `.container` |
| Two | `split` (uneven columns) or `split-even` (equal columns) |
| Three or more, all similar | `card-grid` |
| A long run of headings and paragraphs | `prose` |

### 2. Are they the same kind of thing?

This is what separates a grid from a split when both could technically
hold "more than one thing".

- Six services, each a title and a sentence → **same kind** → `card-grid`
- A photo and a biography → **different kinds** → `split`

If the items are interchangeable — you could reorder them and nothing would
look wrong — it's a grid.

### 3. Does it need separating from the section above?

Every block of content sits inside a `<section class="section">`. If two
sections in a row have the same background, they blur into one another.

Alternate down the page:

```
section              (white)
section section-alt  (light grey)
section              (white)
section section-tint (pale brand colour)
```

Never two of the same background in a row.

### 4. Is it asking the visitor to do something?

- One clear ask at the end of the page → `cta-band`
- An ask inside a section → `btn` or `btn-group`

One `cta-band` per page maximum. Two and neither reads as important.

---

## Worked example — the services page

Say you're building `services.html`. Six services, each needing a proper
explanation rather than one line.

### First, write the page out in words

Not code. Just the blocks, top to bottom. On paper, in Notes, anywhere.

```
Services page
  1. Page heading + one line of intro
  2. Quick list of all six, so people can jump to the one they want
  3. First-time buyers  — explanation + what's involved
  4. Remortgaging       — explanation
  5. Buy-to-let         — explanation
  6. Commercial         — explanation
  7. Equity release     — explanation
  8. Protection         — explanation
  9. Get in touch
```

This is the most important step and it's the one people skip. It takes five
minutes and it's the only part that needs you to think about the visitor
rather than the code.

### Then map each block to a shape

Go down the list asking the four questions.

```
1. Page heading      → one thing        → section + section-header
2. Quick list        → six, same kind   → card-grid (card-link, jumps down page)
3. First-time buyers → two, different   → section + split
4. Remortgaging      → two, different   → section-alt + split split-reverse
5. Buy-to-let        → two, different   → section + split
6. Commercial        → two, different   → section-alt + split split-reverse
7. Equity release    → two, different   → section + split
8. Protection        → two, different   → section-alt + split split-reverse
9. Get in touch      → an ask           → cta-band
```

Notice blocks 3–8 are the same shape six times, alternating background and
image side. That's deliberate — repetition is what makes a long page feel
organised rather than chaotic.

**Zero custom CSS needed for this entire page.**

---

## The order you build in

### Step 1 — Copy the template

```bash
cp _template.html services.html
```

Then change four things in it:

1. The `<title>`
2. The `<meta name="description">`
3. `<link rel="stylesheet" href="css/PAGENAME.css">` → your page's CSS
4. Add `aria-current="page"` to your page's link in the nav

Create your CSS file too, even if it stays empty:

```bash
touch css/services.css
```

### Step 2 — Build the skeleton with fake content

Paste in every component block from your map, with placeholder text. One
card, not six. "Heading" instead of a real heading. `alt=""` on images.

```html
<main id="main">

  <section class="section">
    <div class="container">
      <div class="section-header">
        <h1>Heading</h1>
        <p>Intro line.</p>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container">
      <ul class="card-grid">
        <li class="card"><h3>Card</h3><p>Text.</p></li>
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="container split">
      <div><img src="https://placehold.co/800x600" alt=""></div>
      <div><h2>Heading</h2><p>Text.</p></div>
    </div>
  </section>

  <section class="cta-band">
    <div class="container">
      <h2>Heading</h2>
      <div class="btn-group">
        <a class="btn btn-primary" href="contact.html">Button</a>
      </div>
    </div>
  </section>

</main>
```

### Step 3 — Look at it before writing any content

**This is the step people skip, and skipping it is the most expensive
mistake on this project.**

Open the page with Five Server. You are checking that the *structure* works:

- Do sections have space between them?
- Do the backgrounds alternate?
- Does the split actually split into two columns?
- Does anything overflow off the side of the screen?

Then drag the browser window from wide to narrow. Everything should stack
into one column and stay readable.

If something's broken, you're finding it now with four elements on screen
instead of after you've written 800 words and can't tell which bit is
causing it.

### Step 4 — Now write the content

Duplicate the card six times. Write the real headings and paragraphs. Swap
in real images.

Reload as you go rather than writing everything and checking at the end.

**Do layout and content as separate jobs.** If you do both at once and
something looks wrong, you won't know whether it's the CSS or the fact you
wrote a 90-character heading.

### Step 5 — Write CSS only if you genuinely need it

Most pages need none.

If you're writing CSS for something that came out of `COMPONENTS.md`, stop.
Either a class name is wrong, or there's a real gap in the shared file.
Both are worth messaging Sen about rather than working around.

If you do need it, it goes in **your** CSS file, and the class name starts
with your page name:

```css
/* css/services.css */

.services-comparison-table {
  ...
}
```

### Step 6 — Check it properly

- **Resize.** Drag from full width down to phone width. Watch for anything
  that overflows, crushes, or overlaps.
- **Keyboard.** Press Tab repeatedly. Every link and button should show a
  visible outline. If something gets skipped, it isn't reachable for
  keyboard users.
- **Lighthouse.** DevTools → Lighthouse tab → Analyse page load. Fix
  anything red in Accessibility.
- **Placeholders.** `grep -n "TODO" services.html`
- **Alt text.** Every `<img>` needs one. Empty `alt=""` is correct for
  decorative images, but the attribute must be there.

### Step 7 — Commit, push, open a PR

```bash
git add .
git commit -m "Add services page with six service sections"
git push
```

Then on GitHub: open the pull request, request Sen as reviewer, wait.

---

## When you get stuck

**Message Sen after 20 minutes. Not two hours.**

On a 13-day deadline, someone spending a whole evening stuck on something
that takes two minutes to answer is the most expensive thing that can
happen to this project. Nobody thinks less of you for asking.

Before you message, it helps to have:

- What you're trying to do
- What you tried
- A screenshot

---

## Common mistakes

**"The component isn't doing anything."**
Check the class name character by character. `split` works, `splits`
silently does nothing. CSS fails quietly — there's no error message.

**"I can't find a component for my section."**
You're probably searching by topic. Ask what shape it is instead. A row of
quotes is the same shape as a row of services.

**"It looks fine but the spacing is wrong."**
Check you have both elements — `<section class="section">` on the outside
and `<div class="container">` inside it. Missing the container means no
width limit and no side padding.

**"It breaks when I make the window narrow."**
Almost always a fixed pixel width somewhere, usually copied from a tutorial.
Search your CSS for `width:` followed by a `px` value. Use `max-width`
instead, or delete it and let the component handle it.

**"I found a solution on Stack Overflow but it doesn't work here."**
Check the date. CSS changed enormously around 2018. If the answer uses
`float`, `clearfix`, or `display: inline-block` for layout, it's outdated.
Check `COMPONENTS.md` first, ask Sen second, Google third.

**"I edited shared.css to fix something."**
Undo it and message Sen. That file is loaded by every page — changing it
affects both other people's work and will cause a merge conflict that's
painful to resolve.

---

## The short version

1. Write the page out in words first
2. Ask what **shape** each block is, not what it's about
3. Build the skeleton with fake content
4. **Look at it before writing any real content**
5. Fill in the content
6. Only write CSS if nothing fits
7. Resize, tab through, Lighthouse, commit
