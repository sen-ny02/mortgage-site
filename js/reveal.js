/* ==========================================================================
   SCROLL REVEAL
   ==========================================================================

   Fades elements up as they scroll into view.

   HOW TO USE IT:
     Add class="reveal" to any element you want to animate in.
     That's it — this script finds them all automatically.

     <div class="card reveal">...</div>

   WHERE NOT TO USE IT:
     Do not put .reveal on anything visible when the page first loads —
     especially the h1 and hero text. The first thing a visitor sees should
     appear instantly. Delaying it makes the site feel slow.

   HOW IT WORKS:
     IntersectionObserver is a browser API that tells you when an element
     enters the viewport. It watches asynchronously, which is why it
     replaced the old approach of running code on every scroll event.
   ========================================================================== */

// threshold: 0.15 means "fire when 15% of the element is visible".
// Raise it to make elements appear later, lower it to make them appear
// sooner.
const revealObserver = new IntersectionObserver(function (entries) {

  entries.forEach(function (entry) {

    // isIntersecting is true when the element has come into view.
    if (entry.isIntersecting) {

      // Adding this class triggers the CSS transition. The styles for
      // .reveal and .reveal.is-visible live in css/shared.css.
      entry.target.classList.add('is-visible');

      // Stop watching this element. Without this it would re-trigger every
      // time the user scrolls past it, and it would keep using resources
      // for the rest of the session.
      revealObserver.unobserve(entry.target);
    }
  });

}, { threshold: 0.15 });


// Find every element with class="reveal" and start watching it.
document.querySelectorAll('.reveal').forEach(function (element) {
  revealObserver.observe(element);
});
