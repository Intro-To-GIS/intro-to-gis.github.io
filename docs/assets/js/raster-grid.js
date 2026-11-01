/* Rasterize a shape at whatever cell size the reader asks for.
 *
 * The lesson's claim is that a cell holds one value for everything under
 * it, so anything smaller than a cell is gone before you open the file.
 * Three fixed buttons made that a comparison. A slider makes it the
 * continuous thing it actually is: drag, and watch a 44 metre inlet stop
 * being represented at all.
 *
 * Cells are decided the way a rasterizer decides them — a cell belongs to
 * the lake if its centre falls inside the shoreline — and the test is the
 * browser's own geometry, so the picture cannot drift from the claim.
 */
(function () {
  "use strict";

  var PLOT = { x: 60, y: 90, w: 540, h: 270 };   // the area the grid covers
  var INLET = 44;                                 // metres, the narrow part

  function build(demo) {
    var shape = demo.querySelector("[data-raster-shape]");
    var cellsG = demo.querySelector("[data-raster-cells]");
    var gridG = demo.querySelector("[data-raster-grid]");
    var slider = demo.querySelector('input[type="range"]');
    var sizeOut = demo.querySelector("[data-raster-size]");
    var caption = demo.querySelector("[data-raster-caption]");
    var note = demo.querySelector("[data-raster-note]");
    var svg = demo.querySelector("svg");
    if (!shape || !cellsG || !slider || !svg || !shape.isPointInFill) return;

    var point = svg.createSVGPoint();
    var frame = null;

    function inside(x, y) {
      point.x = x;
      point.y = y;
      return shape.isPointInFill(point);
    }

    function draw(cell) {
      var cells = [];
      var lines = [];
      // Align the grid to the plot, not to the shape, so the shape does
      // not appear to snap as the cell size changes.
      for (var x = PLOT.x; x < PLOT.x + PLOT.w; x += cell) {
        var w = Math.min(cell, PLOT.x + PLOT.w - x);
        lines.push('<path d="M' + x + ',' + PLOT.y + ' V' + (PLOT.y + PLOT.h) + '"/>');
        for (var y = PLOT.y; y < PLOT.y + PLOT.h; y += cell) {
          var h = Math.min(cell, PLOT.y + PLOT.h - y);
          if (inside(x + w / 2, y + h / 2)) {
            cells.push('<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '"/>');
          }
        }
      }
      for (var yy = PLOT.y; yy <= PLOT.y + PLOT.h; yy += cell) {
        lines.push('<path d="M' + PLOT.x + ',' + yy + ' H' + (PLOT.x + PLOT.w) + '"/>');
      }
      gridG.innerHTML = lines.join("");
      cellsG.innerHTML = cells.join("");
      return cells.length;
    }

    function describe(cell, count) {
      var across = INLET / cell;
      var verdict, short;
      if (across >= 2) {
        verdict = "the inlet is several cells wide and its shape survives.";
        short = "the " + INLET + " m inlet survives";
      } else if (across >= 0.9) {
        verdict = "the inlet is down to a single cell, and its width is now a guess.";
        short = "the inlet is one cell wide";
      } else {
        // A cell whose centre lands in the inlet still turns on, so the
        // raster does not simply lose the channel — it replaces it with a
        // square of water wider than the channel ever was.
        verdict = "the inlet is narrower than one cell. Where a cell centre happens to " +
          "fall inside it the raster records a whole cell of water; everywhere else, none.";
        short = "the inlet is narrower than a cell";
      }
      if (caption) {
        caption.innerHTML = "<strong>" + cell + " m cells:</strong> " +
          count.toLocaleString() + " cells hold the lake, and " + verdict;
      }
      if (note) note.textContent = short;
    }

    function update() {
      var cell = parseInt(slider.value, 10);
      if (sizeOut) sizeOut.textContent = cell;
      demo.dataset.cell = cell;
      describe(cell, draw(cell));
    }

    slider.addEventListener("input", function () {
      if (frame) return;                       // one redraw per frame while dragging
      frame = window.requestAnimationFrame(function () {
        frame = null;
        update();
      });
    });
    slider.addEventListener("change", update);
    update();
  }

  function init() {
    Array.prototype.forEach.call(
      document.querySelectorAll("[data-raster-demo]"), build
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
