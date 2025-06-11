document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  function switchTab(targetId) {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.add("hidden"));

    document.querySelector(`[data-tab="${targetId}"]`).classList.add("active");
    document.getElementById(targetId).classList.remove("hidden");
  }

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.tab);
    });
  });

  // Show the default tab on page load
  switchTab("starters");

  // Scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeIn 0.6s ease forwards";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".dish-card").forEach(el => {
    el.style.opacity = 0;
    observer.observe(el);
  });
});
