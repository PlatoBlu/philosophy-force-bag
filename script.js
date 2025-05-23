// Full-length philosophical blog posts (~1000 words each)
const longPosts = [
  {
    title: "The Illusion of Control",
    date: "March 15, 2023",
    text: `Control is an illusion we cling to in a chaotic world. We devise systems and impose rules,
    believing that these frameworks will anchor us. Yet the more we attempt to hold the reins, the more
    they slip through our fingers. To live is to experience flux — the ebb and flow of chance, of fate,
    of forces beyond comprehension. The ancient Stoics taught that peace comes not from mastering the
    external, but mastering the internal. Acceptance of what we cannot change frees the mind to focus
    on what we can influence: our own attitudes, our responses. Like a leaf on a river, surrender is not
    weakness but wisdom. The illusion of control seduces us with promises of certainty, yet true power
    lies in embracing uncertainty and finding harmony amid the unknown.`
    + `\n\n` + `... (repeat or add similar content here until ~1000 words reached)`
  },

  {
    title: "Moments Between Moments",
    date: "August 21, 2022",
    text: `Life exists in the spaces between events — the quiet seconds before a decision is made,
    the breath taken before speaking. These moments hold the true essence of consciousness, fleeting
    yet profound. To dwell in these intervals is to touch the eternal. Mindfulness is the art of noticing,
    of appreciating these slivers of time where past and future fade, leaving only the present. Here lies
    freedom from regret and anxiety. In the pause, the universe whispers its secrets. Philosophers
    from Heraclitus to modern thinkers recognize that change is the only constant. Between moments,
    we glimpse the dance of existence — impermanent, fragile, beautiful.`
    + `\n\n` + `... (repeat or add similar content here until ~1000 words reached)`
  },

  {
    title: "Fragments of Thought",
    date: "January 10, 2024",
    text: `Our minds are a mosaic of memories, beliefs, fears, and hopes — fragments constantly
    shifting and reforming. We construct narratives to impose order, to make sense of the chaos
    within and without. Yet these stories are never absolute truths but interpretations colored by
    perspective. Philosophy challenges us to question these assumptions, to deconstruct and rebuild,
    seeking clarity in the labyrinth of cognition. Identity itself is fluid, shaped by the interplay of
    internal impulses and external influences. In acknowledging the fragmented nature of thought,
    we open ourselves to growth, empathy, and deeper understanding of others. The mind's mosaic
    is a testament to the complexity and beauty of human experience.`
    + `\n\n` + `... (repeat or add similar content here until ~1000 words reached)`
  },

  {
    title: "Smoke and Symbols",
    date: "June 5, 2023",
    text: `Cigarette smoke curls and dances like ephemeral thoughts escaping the mind. In the haze,
    symbols form — reminders of the intangible, the fleeting nature of life and meaning. Symbols
    are bridges between the known and unknown, gestures towards what words fail to capture.
    The act of smoking, ritualistic and contemplative, becomes a metaphor for transience and
    reflection. Each drag is a moment seized, each ash a thought burned away. Within this smoke,
    we find paradox: destruction and creation intertwined. As philosophers, we peer into these
    symbols, seeking insight into the nature of existence, consciousness, and our place in the world.`
    + `\n\n` + `... 
  }
];

// Helper function to repeat the text to about 1000 words (~6000 characters)
function repeatToLength(text, minLength = 6000) {
  let result = "";
  while (result.length < minLength) {
    result += text + "\n\n";
  }
  return result.trim();
}

function renderBlog(posts) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = posts.map(post => `
    <article class="blog-post">
      <h2>${post.title}</h2>
      <div class="date">${post.date}</div>
      <p>${repeatToLength(post.text)}</p>
    </article>
  `).join('');
}

function scrollToForcePost() {
  const posts = document.querySelectorAll(".blog-post");
  for (let post of posts) {
    if (post.textContent.toLowerCase().includes("cigarette")) {
      const offset = post.offsetTop + Math.floor(Math.random() * 30 - 10); // random offset
      setTimeout(() => {
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }, 300); // subtle delay
      break;
    }
  }
}

let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
  touchEndY = e.changedTouches[0].screenY;
  const swipeDistance = touchEndY - touchStartY;

  // Trigger on slower swipe: threshold lowered to 80px
  if (Math.abs(swipeDistance) > 80) {
    scrollToForcePost();
  }
});

window.onload = () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").classList.remove("hidden");

  // Shuffle and insert the force post randomly
  let posts = [...longPosts];
  // Insert force post is "Smoke and Symbols" which has "cigarette"
  // (already included in longPosts, so no need to insert again)

  renderBlog(posts);
};
