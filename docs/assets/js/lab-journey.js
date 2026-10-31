/* A lab is a sequence, not four boxes.
 *
 * Every lab page is built from the same four stages, so this runs over the
 * markup at load and adds what a sequence needs: a numbered rail showing
 * where you are, a step number on each layer, a way forward at the foot of
 * each panel, and a memory of the stage you were in. Nothing is written into
 * the fourteen lab pages, so a new lab gets this for free.
 *
 * It layers on top of lab-widget.js and leaves that file's behaviour alone:
 * the panels still open and close the same way, and the gated panels are
 * still gated.
 */
(function () {
  "use strict";

  var STAGES = [
    { key: "handout", label: "Handout", full: "Student Handout" },
    { key: "data", label: "Data", full: "Data Acquisition" },
    { key: "proj", label: "Instructions", full: "Project Instructions" },
    { key: "result", label: "Reference", full: "Result Reference" }
  ];

  // A quiet padlock in the collection's own colour, rather than an emoji.
  var LOCK =
    '<svg class="lab-rail__lock" viewBox="0 0 12 14" aria-hidden="true">' +
    '<path d="M3 6V4a3 3 0 0 1 6 0v2"/>' +
    '<rect x="1.1" y="6" width="9.8" height="7" rx="1.6"/></svg>';

  function panelOf(key) { return document.getElementById("panel-" + key); }
  function buttonOf(key) {
    return document.querySelector('[aria-controls="panel-' + key + '"]');
  }
  function isLocked(panel) {
    return !!panel.querySelector(".gate-form") && !panel.classList.contains("unlocked");
  }
  function isOpen(panel) { return panel.classList.contains("show"); }

  // Remembering the stage is a convenience, not state the page depends on.
  var storeKey = "lab-stage:" + location.pathname;
  function remember(key) {
    try { window.localStorage.setItem(storeKey, key); } catch (e) {}
  }
  function recall() {
    try { return window.localStorage.getItem(storeKey); } catch (e) { return null; }
  }

  function build() {
    var widget = document.querySelector(".lab-widget");
    if (!widget) return;

    var stages = STAGES.filter(function (s) { return panelOf(s.key) && buttonOf(s.key); });
    if (stages.length < 2) return;

    // 1. A step number on each layer, in the same numerals as the lesson dock.
    stages.forEach(function (stage, i) {
      var button = buttonOf(stage.key);
      if (button.querySelector(".layer-step")) return;
      var n = document.createElement("span");
      n.className = "layer-step";
      n.setAttribute("aria-hidden", "true");
      n.textContent = "0" + (i + 1);
      button.insertBefore(n, button.firstChild);
    });

    // 2. The rail, which says how far through the lab you are.
    var rail = document.createElement("nav");
    rail.className = "lab-rail";
    rail.setAttribute("aria-label", "Lab stages");
    var list = document.createElement("ol");
    stages.forEach(function (stage, i) {
      var li = document.createElement("li");
      var b = document.createElement("button");
      b.type = "button";
      b.dataset.stage = stage.key;
      b.innerHTML =
        '<span class="lab-rail__n">0' + (i + 1) + "</span>" +
        '<span class="lab-rail__label">' + stage.label + LOCK + "</span>";
      b.addEventListener("click", function () { go(stage.key, true); });
      li.appendChild(b);
      list.appendChild(li);
    });
    rail.appendChild(list);
    widget.insertBefore(rail, widget.firstChild);

    // The rail now says what the old header and the on-this-page strip
    // both said, and says it with state the other two could not show.
    var head = widget.querySelector(".contents-head");
    if (head) head.remove();
    var toc = document.querySelector(".lab-toc");
    if (toc) toc.remove();

    // 3. A way forward at the foot of every panel.
    stages.forEach(function (stage, i) {
      var panel = panelOf(stage.key);
      var next = stages[i + 1];
      var foot = document.createElement("div");
      foot.className = "lab-onward";
      if (next) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "lab-onward__next";
        b.innerHTML = "<span>Next</span><strong>" + next.full + " &rarr;</strong>";
        b.addEventListener("click", function () {
          close(stage.key);
          go(next.key, true);
        });
        foot.appendChild(b);
      } else {
        // The last stage sends you back to the lesson the lab belongs to,
        // which the travelling dock already knows the address of.
        var learn = document.querySelector(".resource-dock a");
        if (learn && learn.getAttribute("href")) {
          var a = document.createElement("a");
          a.className = "lab-onward__next";
          a.href = learn.getAttribute("href");
          a.innerHTML = "<span>Finished</span><strong>Back to the lesson &rarr;</strong>";
          foot.appendChild(a);
        }
      }
      if (foot.firstChild) {
        var host = panel.querySelector(".gate-content") || panel;
        host.appendChild(foot);
      }
    });

    // 4. Keep the rail honest about what is open, whoever opened it.
    widget.addEventListener("click", function () { window.setTimeout(sync, 0); });
    var originalCheck = window.checkCode;
    if (typeof originalCheck === "function") {
      window.checkCode = function (key) {
        originalCheck(key);
        remember(key);
        sync();
      };
    }

    // Come back to where you were. A gated stage reopens on its gate,
    // which is where you were. With nothing remembered, open the first
    // stage, so a lab you have never seen does not greet you shut.
    if (!location.hash) {
      var resume = recall();
      go(resume && panelOf(resume) ? resume : stages[0].key, false);
    }
    sync();
    // lab-widget.js opens a panel for a deep link on its own schedule, and
    // the rail has to agree with whatever it did.
    window.setTimeout(sync, 120);
    window.addEventListener("hashchange", function () { window.setTimeout(sync, 120); });

    function close(key) {
      var panel = panelOf(key), button = buttonOf(key);
      if (!panel || !isOpen(panel)) return;
      panel.classList.remove("show");
      button.setAttribute("aria-expanded", "false");
    }

    function go(key, scroll) {
      var panel = panelOf(key), button = buttonOf(key);
      if (!panel || !button) return;
      if (!isOpen(panel)) {
        panel.classList.add("show");
        button.setAttribute("aria-expanded", "true");
      }
      remember(key);
      sync();
      if (scroll) {
        button.scrollIntoView({ block: "start", behavior: "smooth" });
        var input = panel.querySelector(".gate-form .gate-input");
        if (input && isLocked(panel)) {
          window.setTimeout(function () { input.focus({ preventScroll: true }); }, 320);
        }
      }
    }

    function sync() {
      var lastOpen = null;
      stages.forEach(function (stage) {
        var panel = panelOf(stage.key);
        var cell = rail.querySelector('[data-stage="' + stage.key + '"]');
        if (!panel || !cell) return;
        var locked = isLocked(panel);
        cell.classList.toggle("is-open", isOpen(panel));
        cell.classList.toggle("is-locked", locked);
        buttonOf(stage.key).classList.toggle("is-locked", locked);
        if (isOpen(panel)) lastOpen = stage.key;
      });
      stages.forEach(function (stage) {
        var cell = rail.querySelector('[data-stage="' + stage.key + '"]');
        if (!cell) return;
        var current = stage.key === lastOpen;
        cell.classList.toggle("is-current", current);
        if (current) { cell.setAttribute("aria-current", "step"); }
        else { cell.removeAttribute("aria-current"); }
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", build);
  } else {
    build();
  }
})();
