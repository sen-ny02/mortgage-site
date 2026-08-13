# Cambridge Mortgage Bureau — website

Static site. No build step, no framework. Plain HTML, CSS and a little JS.

Open any `.html` file with Live Server / Five Server in VS Code to preview.

---

## The rules

**1. Never push directly to `main`.** It's protected — the push will be
rejected. All work goes through a branch and a pull request.

**2. Never edit `css/shared.css`.** It's loaded by every page, so a change
there affects everyone's work and causes merge conflicts. If you think you
need something added to it, ask Sen and he'll add it.

**3. Never use inline `style="..."` attributes.** All styling goes in CSS
files. Inline styles override everything and become impossible to maintain.

**4. No raw hex colours.** Every colour comes from a variable in
`shared.css` — use `var(--color-brand)`, not `#21453a`. The brand palette is
changing once we have the logo, and variables mean that's a one-line change.

**5. If you're writing a lot of CSS, stop and ask.** There's probably
already a class for what you're doing. Check `COMPONENTS.md` first.

---

## File structure

```
/
├── index.html          Home
├── about.html          About
├── services.html       Services
├── contact.html        Contact
├── privacy.html        Privacy policy
├── cookies.html        Cookie policy
├── _template.html      Copy this to start a new page
├── css/
│   ├── shared.css      Loaded by every page. DO NOT EDIT.
│   ├── home.css        Page-specific styles
│   ├── about.css
│   └── ...
├── js/
│   └── reveal.js       Scroll animations
└── images/
```

Each page loads `shared.css` first, then its own stylesheet. Your page CSS
should be short — if it isn't, you're probably rebuilding something that
already exists.

---

## Starting a new page

1. Copy `_template.html` and rename it
2. Change the `<title>` and `<meta name="description">`
3. Point the second stylesheet link at your own CSS file
4. Create that CSS file in `css/`
5. Add `aria-current="page"` to your page's link in the nav
6. Write your content inside `<main>`

Do not change the header or footer markup. They're identical on every page.

---

## Git workflow

Every change, every time:

```bash
# Start from an up-to-date main
git switch main
git pull

# Create a branch. Name it after what you're doing.
git switch -c about-page

# ... do the work ...

git add .
git commit -m "Add about page layout and bio content"
git push
```

The first push on a new branch will error and tell you to run
`git push --set-upstream origin BRANCHNAME`. Run what it tells you.

Then on GitHub: open a pull request, request Sen as reviewer, wait for
approval, **squash and merge**, delete the branch.

Then clean up locally:

```bash
git switch main
git pull
git branch -d about-page
```

### Notes

- **Commit often.** Small commits are easier to review and easier to undo.
- **Keep branches short-lived.** A branch open for four days will conflict
  with everything. Aim to open a PR within a working session.
- **Pull `main` before starting anything new.** Most merge conflicts come
  from branching off a stale `main`.
- **If git says something you don't understand, stop and ask Sen.** Don't
  guess with `--force`.

---

## Outstanding — blocked on my dad / Flexi Network

- [ ] Brand colours from the logo
- [ ] Logo file (SVG preferred)
- [ ] Photo of Sam
- [ ] Real phone number and email
- [ ] Company number and registered address
- [ ] Exact FCA disclosure wording from Flexi Network
- [ ] Whether the BVS Trustpilot reviews can be used, and how labelled
- [ ] Equity release wording approval
- [ ] Domain purchased

Placeholders are marked `TODO` in the code. Search for `TODO` before launch.
