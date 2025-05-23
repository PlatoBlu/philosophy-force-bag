const forceParagraphs = [
  "He lit a cigarette not out of habit, but as a ritual — a symbolic return to comfort during uncertainty.",
  "Each drag of the cigarette was a meditation on mortality, a quiet rebellion against the rush of modern life.",
  "A cigarette, fragile and fleeting, embodied the impermanence of everything he once believed eternal.",
  "Smoke coiled upward from the cigarette, like memories you can see but never touch."
];

const exampleTitles = [
  "The Shape of Thought", "Echoes in Silence", "Fragments of Self", "The Gravity of Choice", "What We Leave Behind",
  "Moments of Stillness", "Time and the Self", "Seeing Through Shadows", "Suffering and Meaning", "On Being"
];

const exampleTexts = [
  "Reality, as we perceive it, is often a projection of inner doubts and desires.",
  "Every truth begins as heresy in the mind of the unprepared.",
  "Time does not heal all wounds; it merely teaches us how to carry them.",
  "Love is not a feeling — it's a decision to witness someone's pain and not flinch.",
  "Most people exist. Few people live with intention.",
  "The mirror does not lie, but our reflection often tells us only what we are willing to see.",
  "Truth is not discovered, but remembered.",
  "Pain is the cost of a conscious life.",
  "We fear being alone because silence introduces us to the self.",
  "To forget is human. To forgive is evolution."
];

function getRandomTitle() {
  return exampleTitles[Math.floor(Math.random() * exampleTitles.length)];
}

function getRandomText() {
  return exampleTexts[Math.floor(Math.random() * exampleTexts.length)];
}

function randomDate() {
  const start = new Date(2021, 0, 1);
  const end = new Date(2024, 12, 31);
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toDateString();
}

function getRandomImage() {
  const pics = [
    "https://source.unsplash.com/600x300/?philosophy",
    "https://source.unsplash.com/600x300/?consciousness",
    "https://source.unsplash.com/600x300/?books",
    "https://source.unsplash.com/600x300/?abstract",
    "https://source.unsplash.com/600x300/?light",
    "https://source.unsplash.com/600x300/?shadow",
    "https://source.unsplash.com/600x300/?writing"
  ];
  return pics[Math.floor(Math.random() * pics.length)];
}

// Generate many regular posts
function generateBlogPosts(count = 50) {
  const posts = [];
  for (let i = 0; i < count; i++) {
    posts.push({
      title: getRandomTitle(),
      text: getRandomText(),
      date: randomDate()
    });
  }
  return posts;
}

function insertForcePost(posts) {
  const forceText = forceParagraphs[Math.floor(Math.random() * forceParagraphs.length)];
  const forcePost = {
    title: "On Smoke and Stillness",
    text: forceText,
    date: randomDate()
  };
  const insertAt = Math.floor(Math.random() * posts.length);
  posts.splice(insertAt, 0, forcePost);
  return posts;
}

function renderBlog(posts) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = posts.map(post => `
    <div class="blog-post">
      <h2>${post.title}</h2>
      <div class="date">${post.date}</div>
      <img src="${getRandomImage()}" alt="Blog illustration" />
      <p>${post.text}</p>
    </div>
  `).join('');
}

// Scroll logic
function scrollToForcePost() {
  const posts = document.querySelectorAll(".blog-post");
  for (let p of posts) {
    if (p.textContent.includes("Cigarette")) {
      const y = p.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: 'smooth' });
      break;
    }
  }
}

let lastScroll = 0;
let lastTime = Date.now();
let forced = false;

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  const currentTime = Date.now();
  const speed = Math.abs(currentScroll - lastScroll) / (currentTime - lastTime);
  if (speed > 1.5 && !forced) {
    scrollToForcePost();
    forced = true;
  }
  lastScroll = currentScroll;
  lastTime = currentTime;
});

// Loading screen
window.onload = () => {
  let posts = generateBlogPosts(60);
  posts = insertForcePost(posts);
  renderBlog(posts);
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
};
