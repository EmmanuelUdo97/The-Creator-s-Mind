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