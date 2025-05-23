// Long philosophical blog posts (~1000 words each) with "cigarette" peppered naturally
const longPosts = [
  {
    title: "The Illusion of Control",
    date: "March 15, 2023",
    text: `
Control is an illusion we cling to in a chaotic world. We devise systems and impose rules,
believing that these frameworks will anchor us. The cigarette of certainty burns briefly, but
fades fast. Yet the more we attempt to hold the reins, the more they slip through our fingers.
To live is to experience flux — the ebb and flow of chance, of fate, of forces beyond comprehension.
The ancient Stoics taught that peace comes not from mastering the external, but mastering the internal.
Acceptance of what we cannot change frees the mind to focus on what we can influence: our own
attitudes, our responses. Like a leaf on a river, surrender is not weakness but wisdom. The illusion
of control seduces us with promises of certainty, yet true power lies in embracing uncertainty and
finding harmony amid the unknown. In moments of doubt, the cigarette’s glow reminds us to pause,
breathe, and accept the ever-changing nature of life.

The human desire for control often stems from fear — fear of the unknown, of loss, of chaos.
But clinging to control is like grasping smoke; it slips through fingers no matter how tightly we try.
True freedom comes from acceptance and the courage to face uncertainty. The cigarette burns down,
symbolizing the fleeting nature of our attempts to hold on. Just as the ash falls away, so must we
let go of illusions to find peace.

By embracing uncertainty, we open ourselves to growth and deeper understanding.
We see that control is not a destination but a journey — an ebb and flow, much like the flicker
of a cigarette's flame in the wind. The challenge is to find balance, to navigate the dance
between order and chaos with grace and wisdom.

The moments we try to control often escape us, but those we accept become opportunities
for transformation. Like the slow burn of a cigarette, these experiences illuminate our path,
guiding us through the darkness toward clarity and calm.
    `.repeat(10)
  },

  {
    title: "Moments Between Moments",
    date: "August 21, 2022",
    text: `
Life exists in the spaces between events — the quiet seconds before a decision is made,
the breath taken before speaking. These moments hold the true essence of consciousness,
fleeting yet profound. To dwell in these intervals is to touch the eternal. Mindfulness is the
art of noticing, of appreciating these slivers of time where past and future fade, leaving only
the present. Here lies freedom from regret and anxiety. In the pause, the universe whispers its secrets.
Philosophers from Heraclitus to modern thinkers recognize that change is the only constant.
Between moments, we glimpse the dance of existence — impermanent, fragile, beautiful.

The cigarette smoke curls and fades, much like these moments — ephemeral and delicate.
In the stillness, we find clarity. These tiny fragments of time are the threads weaving
the fabric of experience. The cigarette’s faint aroma lingers, a reminder that life’s
most significant parts often escape notice.

When we focus on the rush of life, we miss these precious gaps — the breaths, the pauses,
the silent spaces where meaning grows. The cigarette’s slow burn is a metaphor for this,
teaching patience and attention. To live fully is to honor these moments, to be present
with the fleeting now.

Through awareness, we transform the mundane into the profound. The pauses become
opportunities to reflect, to choose, to act with intention. Each moment between moments
is a doorway to deeper understanding, a chance to reconnect with the core of being.
The cigarette, burning softly, reminds us to slow down and cherish these hidden gems.
    `.repeat(10)
  },

  {
    title: "Fragments of Thought",
    date: "January 10, 2024",
    text: `
Our minds are a mosaic of memories, beliefs, fears, and hopes — fragments constantly shifting
and reforming. We construct narratives to impose order, to make sense of the chaos within
and without. Yet these stories are never absolute truths but interpretations colored by perspective.
Philosophy challenges us to question these assumptions, to deconstruct and rebuild,
seeking clarity in the labyrinth of cognition. Identity itself is fluid, shaped by the interplay
of internal impulses and external influences. In acknowledging the fragmented nature of thought,
we open ourselves to growth, empathy, and deeper understanding of others. The mind's mosaic
is a testament to the complexity and beauty of human experience.

Like the tendrils of cigarette smoke twisting unpredictably, thoughts spiral and dissipate.
They resist containment, slipping between conscious and unconscious realms. This fluidity
reminds us that certainty is elusive, and openness to change is vital.

Through introspection, we examine the shards of our psyche, piecing together a whole
from the fragments. The cigarette’s ephemeral burn parallels the transient nature of ideas,
each fading as new ones ignite.

Our task is not to fix the mosaic but to appreciate its evolving beauty. Embracing the
fragmentation allows us to live authentically, aware that change is the only constant.
As cigarette smoke mingles with air, so do our thoughts merge with the world around us,
creating a dynamic interplay of meaning and existence.
    `.repeat(10)
  },

  {
    title: "Smoke and Symbols",
    date: "June 5, 2023",
    text: `
Cigarette smoke curls and dances like ephemeral thoughts escaping the mind. In the haze,
symbols form — reminders of the intangible, the fleeting nature of life and meaning.
Symbols are bridges between the known and unknown, gestures towards what words fail to capture.
The act of smoking, ritualistic and contemplative, becomes a metaphor for transience and reflection.
Each drag is a moment seized, each ash a thought burned away. Within this smoke,
we find paradox: destruction and creation intertwined. As philosophers, we peer into these
symbols, seeking insight into the nature of existence, consciousness, and our place in the world.

The cigarette is both presence and absence, a trace left behind and a void created.
Its smoke writes invisible stories in the air, narratives of longing and impermanence.
These symbols connect us to deeper truths, beyond language and logic.

In this light, smoking transcends habit — it becomes a meditation on existence itself.
The cigarette’s glow offers comfort in solitude and sparks contemplation.
We see life’s fragility reflected in the fragile ash, the fleeting smoke,
and the slow fading ember.

Through symbols like these, philosophy finds its voice, speaking of mystery and meaning.
The cigarette reminds us that all things pass, yet each moment holds infinite significance.
As the smoke disperses, it teaches us to cherish what is ephemeral and profound.
    `.repeat(10)
  }
];

// Helper to render blog posts
function renderBlog(posts) {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = posts.map(post => `
    <article class="blog-post">
      <h2>${post.title}</h2>
      <div class="date">${post.date}</div>
      <p>${post.text}</p>
    </article>
  `).join('');
}

function scrollToForcePost() {
  const posts = document.querySelectorAll(".blog-post");
  for (let post of posts) {
    if (post.textContent.toLowerCase().includes("cigarette")) {
      window.scrollTo({
        top: post.offsetTop - 30,
        behavior: 'smooth'
      });
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

  renderBlog(longPosts);
};
