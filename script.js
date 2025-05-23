const philosophicalParagraphs = [
  "The unexamined life is not worth living. Each day we live without introspection is a missed opportunity to learn and evolve.",
  "Man is nothing else but what he makes of himself. Our choices shape our essence, more than any innate quality.",
  "Freedom is not the absence of constraint, but the acceptance of responsibility for one's actions.",
  "There is only one good, knowledge, and one evil, ignorance. Enlightenment begins with awareness.",
  "No man ever steps in the same river twice, for it's not the same river and he's not the same man.",
  "The mind is everything. What you think you become. Focus shapes perception, and perception sculpts reality.",
  "Cigarette smoke curled into the stale air like thoughts left unsaid — a symbol, perhaps, of choices we regret but still repeat.",
  "To live is to suffer; to survive is to find meaning in the suffering.",
  "When we are no longer able to change a situation, we are challenged to change ourselves.",
  "Life is not a problem to be solved, but a reality to be experienced.",
  "Being deeply loved gives you strength, while loving deeply gives you courage."
];

let contentDiv = document.getElementById("content");
let lastScroll = 0;
let lastTime = Date.now();
let forced = false;

// Display all paragraphs
function renderParagraphs(paragraphs) {
  contentDiv.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
}

// Scroll smoothly to the force paragraph
function scrollToForceParagraph() {
  const paras = document.querySelectorAll("#content p");
  for (let p of paras) {
    if (p.textContent.includes("Cigarette")) {
      p.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    }
  }
}

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  const currentTime = Date.now();
  const speed = Math.abs(currentScroll - lastScroll) / (currentTime - lastTime);

  if (speed > 1.5 && !forced) {
    scrollToForceParagraph();
    forced = true;
  }

  lastScroll = currentScroll;
  lastTime = currentTime;
});

// Initial render
renderParagraphs(philosophicalParagraphs.concat(philosophicalParagraphs).concat(philosophicalParagraphs)); // Triple to make it long
