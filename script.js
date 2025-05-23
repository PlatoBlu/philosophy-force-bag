const forceParagraphs = [
  "He lit a cigarette not out of habit, but as a ritual — a symbolic return to comfort during uncertainty.",
  "Each drag of the cigarette was a meditation on mortality, a quiet rebellion against the rush of modern life.",
  "A cigarette, fragile and fleeting, embodied the impermanence of everything he once believed eternal.",
  "Smoke coiled upward from the cigarette, like memories you can see but never touch."
];

const regularPosts = [
  {
    title: "The Myth of Meaning",
    text: "Life is not a puzzle with a final piece. It is a river, ever-flowing, changing shape with every thought and action.",
    date: "April 1, 2024"
  },
  {
    title: "When Stillness Speaks",
    text: "The noise of the world often drowns out the truth. Only in stillness can we hear the echo of the self.",
    date: "May 12, 2024"
  },
  {
    title: "Walking the Line",
    text: "Freedom does not lie in choice but in awareness. To walk the line consciously is to be truly free.",
    date: "June 2, 2024"
  },
  {
    title: "The Mirror of Perception",
    text: "What we see in others is often our own shadow in disguise. Perception is projection, not truth.",
    date: "July 18, 2024"
  }
];

let lastScroll = 0;
let lastTime = Date.now();
let forced = false;

function randomDateBetween(start, end) {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toDateString();
}

function getRandomImage() {
  const pics = [
    "https://source.unsplash.com/600x300/?philosophy",
    "https://source.unsplash.com/600x300/?consciousness",
    "https://source.unsplash.com/600x300/?books",
    "https://source.unsplash.com/600x300/?smoke"
  ];
  return pics[Math.floor(Math.random() * pics.length)];
}

function getAllPosts() {
  let posts = [...regularPosts];
  const forceText = forceParagraphs[Math.floor(Math.random() * forceParagraphs.length)];
  const forcePost = {
    title: "On Smoke and Stillness",
    text: forceText,
    date: randomDateBetween(new Date(2023, 0, 1), new Date(2024, 12, 31))
  };
  const insertAt = Math.floor(Math.random() * posts.length);
  posts.splice(insertAt, 0, forcePost);
  return posts.concat(posts); // Duplicate for long scroll
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

// Scroll trigger logic
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

// Loading screen logic
window.onload = () => {
  const posts = getAllPosts();
  renderBlog(posts);
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
};
