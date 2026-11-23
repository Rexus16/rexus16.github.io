
document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // REXUS INTRO ANIMATION
  // =========================

  const introScreen = document.getElementById("intro-screen");
  const progressBar = document.querySelector(".progress-bar");
  const introText = document.querySelector(".intro-text");

  if (introScreen) {
    let progress = 0;

    const loading = setInterval(() => {
      progress += 1;

      if (progressBar) {
        progressBar.style.width = `${progress}%`;
      }

      if (introText) {
        introText.textContent = `STARTING REXUS ${progress}%`;
      }

      if (progress >= 100) {
        clearInterval(loading);

        setTimeout(() => {
          introScreen.classList.add("intro-hidden");
        }, 400);
      }
    }, 30);
  }

  // =========================
  // MOBILE NAVIGATION
  // =========================

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("active");

      const isOpen = navigation.classList.contains("active");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // =========================
  // CATEGORY SEARCH
  // =========================

  const searchInput = document.querySelector("#search-input");
  const categoryCards = document.querySelectorAll(".category-card");

  if (searchInput && categoryCards.length) {
    searchInput.addEventListener("input", () => {
      const searchValue = searchInput.value
        .trim()
        .toLowerCase();

      let found = 0;

      categoryCards.forEach((card) => {
        const cardText = card.textContent.toLowerCase();
        const matches = cardText.includes(searchValue);

        card.style.display = matches ? "" : "none";

        if (matches) found++;
      });

      let message = document.querySelector(".search-message");

      if (!message) {
        message = document.createElement("p");
        message.className = "search-message";
        searchInput.parentElement.appendChild(message);
      }

      if (searchValue && found === 0) {
        message.textContent = "No matching category found.";
      } else {
        message.textContent = "";
      }
    });
  }

  // =========================
  // COMING SOON NOTIFICATION
  // =========================

  document.querySelectorAll(".coming-soon").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      alert("This REXUS section is coming soon!");
    });
  });

  // =========================
  // SMOOTH SCROLLING
  // =========================

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
