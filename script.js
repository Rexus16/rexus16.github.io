
document.addEventListener("DOMContentLoaded", () => {

  // REXUS INTRO
  const introScreen = document.getElementById("intro-screen");
  const progressBar = document.getElementById("loader-progress");
  const introText = document.getElementById("intro-text");
  const percentText = document.getElementById("loader-percent");
  const loader = document.querySelector(".loader");

  if (introScreen && progressBar && percentText) {
    progressBar.classList.add("progress-bar");
    if (loader) loader.classList.add("progress-container");
    if (introText) introText.classList.add("intro-text");

    let progress = 0;

    const loading = setInterval(() => {
      progress++;

      progressBar.style.width = `${progress}%`;
      percentText.textContent = `${progress}%`;

      if (progress >= 100) {
        clearInterval(loading);

        setTimeout(() => {
          introScreen.classList.add("hide");
        }, 400);
      }
    }, 25);
  } else if (introScreen) {
    introScreen.classList.add("hide");
  }

  // MOBILE NAVIGATION
  const menuButton = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navbar nav");

  if (navigation) navigation.classList.add("nav-links");

  if (menuButton && navigation) {
    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("active");

      const isOpen = navigation.classList.contains("active");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navigation.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navigation.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  // CATEGORY SEARCH
  const searchInput = document.getElementById("main-search");
  const categoryCards = document.querySelectorAll(".category-card");
  const searchMessage = document.getElementById("search-message");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim().toLowerCase();
      let found = 0;

      categoryCards.forEach(card => {
        const searchableText =
          `${card.textContent} ${card.dataset.search || ""}`.toLowerCase();

        const matches = searchableText.includes(query);

        card.style.display = matches ? "" : "none";

        if (matches) found++;
      });

      if (searchMessage) {
        if (!query) {
          searchMessage.textContent =
            "Discover your next favourite resource.";
        } else if (found === 0) {
          searchMessage.textContent = "No matching category found.";
        } else {
          searchMessage.textContent = `${found} matching categories found.`;
        }
      }
    });
  }

  // COMING SOON
  document.querySelectorAll(".coming-soon").forEach(item => {
    item.addEventListener("click", () => {
      alert("This REXUS section is coming soon!");
    });
  });

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
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
