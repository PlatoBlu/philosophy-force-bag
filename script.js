const forceParagraphs = [
  "Cigarette smoke drifted upward like thoughts he couldn't suppress.",
  "Cigarette in hand, he stood quietly, as if each drag clarified something unnamed.",
  "Cigarette moments marked time better than clocks ever could.",
  "Cigarette ashes fell like old ideas discarded too late."
];

const exampleTitles = [
  "The Illusion of Control", "Moments Between Moments", "Fragments of Thought", "What We Choose to Remember",
  "The Weight of Stillness", "In the Shadow of Certainty", "The Noise Beneath Silence"
];

const exampleTexts = [
  "Philosophy often begins where certainty ends.",
  "We walk through life constructing meaning from fragments we barely understand.",
  "To know oneself is to admit contradiction.",
  "Stillness isn’t the absence of motion but the fullness of awareness.",
  "Every question we ask is shaped by the answers we already want.",
  "Truth without compassion is brutality; compassion without truth is sentimentality.",
  "The self is a process, not a possession.",
  "Consciousness is the universe trying to observe itself."
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate() {
  const start = new Date(2020, 0, 1);
  const end = new Date(2024, 11, 31);
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toDateString();
}

function generateBlogPosts(count = 50) {
  const posts = [];
  for (let i = 0; i < count; i++) {
    posts.push({
      title: getRandom(exampleTitles),
      text: getRandom(exampleTexts),
      date: randomDate()
    });
  }
  return posts;
}

function insertForcePost(posts) {
  const forceText = getRandom(forceParagraphs);
  const forcePost = {
    title: "Smoke and Symbols",
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
      <p>${post.text}</p>
    </div>
  `).join('');
}

function scrollToForcePost() {
  const posts = document.querySelectorAll(".blog-post");
  for (let post of posts) {
    if (post.textContent.toLowerCase().includes("cigarette")) {
      post.scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    }
  }
}

let touchStartY = 0;
let touchEndY = 0;
let forced = false;

document.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
  touchEndY = e.changedTouches[0].screenY;
  const swipeDistance = touchEndY - touchStartY;

  if (Math.abs(swipeDistance) > 150 && !forced) {
    scrollToForcePost();
    forced = true;
  }
});

window.onload = () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").classList.remove("hidden");

  let posts = generateBlogPosts(60);
  posts = insertForcePost(posts);
  renderBlog(posts);
};
