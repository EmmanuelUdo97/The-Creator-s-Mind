// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Button click animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";

    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 100);
  });
});

// Scroll reveal animation
const sections = document.querySelectorAll(".section, .card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "0.6s ease";
  observer.observe(section);
});


// CHAT SYSTEM (NO API - OFFLINE SMART BOT)

function toggleChat() {
  const chatbox = document.getElementById('chatbox');

  if (chatbox.style.display === 'flex') {
    chatbox.style.display = 'none';
  } else {
    chatbox.style.display = 'flex';
  }
}

function sendMessage() {

  const input = document.getElementById('userInput');
  const messages = document.getElementById('chatMessages');

  const message = input.value.trim();
  if (!message) return;

  // show user message
  messages.innerHTML += `
    <div class="user-message">
      ${message}
    </div>
  `;

  input.value = '';

  const text = message.toLowerCase();

  let reply = "I’m not sure about that yet. Try asking about The Creator’s Mind, courses, founder, or community.";

  // ABOUT
  if (
    text.includes("what is") ||
    text.includes("creator") ||
    text.includes("about")
  ) {
    reply =
      "The Creator’s Mind is a movement that transforms people from consumers into creators of value systems, products, and scalable ideas.";
  }

  // FOUNDER
  else if (
    text.includes("founder") ||
    text.includes("chrysolite") ||
    text.includes("whyboss")
  ) {
    reply =
      "The Creator’s Mind was founded by Chrysolite Immanuel, also known as The WHYBoss — a transformational leader focused on creator development and systems thinking.";
  }

  // COURSES
  else if (
    text.includes("course") ||
    text.includes("learn") ||
    text.includes("training")
  ) {
    reply =
      "Courses are delivered as audio lessons on Telegram. They teach value creation, systems thinking, and entrepreneurial transformation.";
  }

  // COMMUNITY
  else if (
    text.includes("community") ||
    text.includes("join") ||
    text.includes("telegram")
  ) {
    reply =
      "Join The Creator’s Mind community here: https://t.me/+vdNqk3Ozvf1hODI0";
  }

  // CONTACT
  else if (
    text.includes("contact") ||
    text.includes("help") ||
    text.includes("support")
  ) {
    reply =
      "You can reach out through the Contact page or join the Telegram community for support.";
  }

  // VALUE / CREATION
  else if (
    text.includes("value") ||
    text.includes("creation")
  ) {
    reply =
      "Everything in existence is raw material waiting to be transformed into value through intelligence, systems, and execution.";
  }

  setTimeout(() => {
    messages.innerHTML += `
      <div class="bot-message">
        ${reply}
      </div>
    `;

    messages.scrollTop = messages.scrollHeight;
  }, 500);
}