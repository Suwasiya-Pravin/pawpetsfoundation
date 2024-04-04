var mainListDiv = document.getElementById("mainListDiv"),
  mediaButton = document.getElementById("mediaButton");

mediaButton.onclick = function () {
  "use strict";

  mainListDiv.classList.toggle("show_list");
  mediaButton.classList.toggle("active");
};

function startCountersOnScroll() {
  const rescueCounter = document.getElementById("rescue-counter");
  const feedCounter = document.getElementById("feed-counter");
  const shelterCounter = document.getElementById("shelter-counter");
  const adoptCounter = document.getElementById("adopt-counter");

  const targetRescue = 500;
  const targetFeed = 1000;
  const targetShelter = 750;
  const targetAdopt = 200;

  let currentRescue = 0;
  let currentFeed = 0;
  let currentShelter = 0;
  let currentAdopt = 0;

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when 50% of the target is visible
  };

  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const interval = setInterval(() => {
          if (currentRescue < targetRescue) {
            currentRescue++;
            rescueCounter.textContent = currentRescue + "+";
          }

          if (currentFeed < targetFeed) {
            currentFeed++;
            feedCounter.textContent = currentFeed + "+";
          }

          if (currentShelter < targetShelter) {
            currentShelter++;
            shelterCounter.textContent = currentShelter + "+";
          }

          if (currentAdopt < targetAdopt) {
            currentAdopt++;
            adoptCounter.textContent = currentAdopt + "+";
          }

          if (
            currentRescue === targetRescue &&
            currentFeed === targetFeed &&
            currentShelter === targetShelter &&
            currentAdopt === targetAdopt
          ) {
            clearInterval(interval);
          }
        }, 10);

        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(rescueCounter);
}

startCountersOnScroll();
