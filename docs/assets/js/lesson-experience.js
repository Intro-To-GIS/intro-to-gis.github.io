(function () {
  "use strict";

  function normalize(value) {
    return value.toLocaleLowerCase().replace(/\s+/g, " ").trim();
  }

  function initializeLessonFilter() {
    var input = document.querySelector("[data-lesson-filter]");
    if (!input) return;

    var cards = Array.from(document.querySelectorAll("[data-collection]"));
    var acts = Array.from(document.querySelectorAll(".learning-act"));
    var results = document.querySelector("[data-lesson-results]");
    var empty = document.querySelector("[data-lesson-empty]");

    function updateFilter() {
      var query = normalize(input.value);
      var visibleCount = 0;

      cards.forEach(function (card) {
        var searchableText = normalize(
          card.textContent + " " + (card.dataset.keywords || "")
        );
        var matches = !query || searchableText.includes(query);
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      acts.forEach(function (act) {
        var hasVisibleCards = act.querySelector("[data-collection]:not([hidden])");
        act.hidden = !hasVisibleCards;
      });

      if (results) {
        if (!query) {
          results.textContent = "Showing all nine collections.";
        } else if (visibleCount === 1) {
          results.textContent = "Showing 1 matching collection.";
        } else {
          results.textContent = "Showing " + visibleCount + " matching collections.";
        }
      }

      if (empty) empty.hidden = visibleCount !== 0;
    }

    input.addEventListener("input", updateFilter);
  }

  function initializeSpatialDemo() {
    var demo = document.querySelector("[data-spatial-demo]");
    if (!demo) return;

    var buttons = Array.from(demo.querySelectorAll("[data-spatial-mode]"));
    var caption = demo.querySelector("[data-spatial-caption]");
    var captions = {
      intersect: "<strong>Inside:</strong> each school receives the district it falls within.",
      closest: "<strong>Closest:</strong> every school is paired—even when the nearest match is too far away to be meaningful.",
      reverse: "<strong>Count:</strong> reverse the direction and each district receives the number of schools inside it."
    };

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        var mode = button.dataset.spatialMode;
        demo.dataset.mode = mode;

        buttons.forEach(function (candidate) {
          candidate.setAttribute(
            "aria-pressed",
            String(candidate.dataset.spatialMode === mode)
          );
        });

        if (caption) caption.innerHTML = captions[mode];
      });
    });
  }

  function initializeExperiences() {
    initializeLessonFilter();
    initializeSpatialDemo();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeExperiences);
  } else {
    initializeExperiences();
  }
})();
