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

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.style.transform = "scale(0.95)";

    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 100);
  });
});

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

function toggleChat() {
  const chatbox = document.getElementById('chatbox');

  if (chatbox.style.display === 'flex') {
    chatbox.style.display = 'none';
  } else {
    chatbox.style.display = 'flex';
  }
}

async function sendMessage() {

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

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();

    messages.innerHTML += `
      <div class="bot-message">
        ${data.reply || "Sorry, I could not process that request."}
      </div>
    `;

  } catch (error) {
    messages.innerHTML += `
      <div class="bot-message">
        Network error. Please try again.
      </div>
    `;
  }

  messages.scrollTop = messages.scrollHeight;
}