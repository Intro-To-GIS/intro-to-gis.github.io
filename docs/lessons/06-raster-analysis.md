---
title: Raster Analysis
---

<section class="lesson-hero lesson-hero--raster">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 08 · Raster &amp; Suitability Modeling</p>
    <h1>Raster Analysis</h1>
    <p class="lesson-deck">A cell holds one value for everything underneath it. Everything smaller than the cell was discarded before you opened the file.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>90</strong> minutes</span>
      <span><strong>Intermediate</strong> level</span>
      <span><strong>2 models</strong> to compare</span>
    </div>
  </div>
  <div class="spatial-demo ras-demo-wrap" data-raster-demo data-cell="30">
    <div class="ras-slider">
      <label for="ras-cell">Cell size</label>
      <input id="ras-cell" type="range" min="8" max="96" step="2" value="30"
             aria-describedby="ras-readout">
      <output id="ras-readout" for="ras-cell"><strong data-raster-size>30</strong> m</output>
    </div>
    <svg class="spatial-demo__map ras-demo" viewBox="0 0 700 430" role="img" aria-labelledby="ras-title ras-desc">
      <title id="ras-title">One lake recorded at a cell size you choose</title>
      <desc id="ras-desc">A lake with a narrow inlet, and the grid cells that would record it. Drag the cell size and the coastline becomes a staircase; past about 45 metres the inlet is narrower than a single cell.</desc>
      <g class="ras-grid" data-raster-grid aria-hidden="true"></g>
      <g class="ras-cells" data-raster-cells aria-hidden="true"></g>
      <path class="ras-truth" data-raster-shape
            d="M146,160 C168,126 214,110 262,114 C300,117 332,132 352,154 C368,172 380,186 398,192 L524,192 L524,236 L404,240 C396,262 374,284 344,298 C318,308 300,286 272,292 C246,298 226,316 196,300 C150,279 124,240 128,206 C130,186 136,172 146,160 Z"/>
      <text class="ras-key" x="60" y="404">true shoreline</text>
      <text class="ras-key ras-key--cells" x="230" y="404">cells that record it</text>
      <text class="ras-key ras-inlet-note" data-raster-note x="430" y="404">the 44 m inlet survives</text>
    </svg>
    <p class="spatial-demo__caption" data-raster-caption aria-live="polite"><strong>30 m cells:</strong> the shoreline is already a staircase, and the inlet is down to a single cell.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Raster Analysis lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/raster-data-analysis/"><span>02</span><strong>Slides</strong><small>Visual walkthrough</small></a>
  <a href="#labs"><span>03</span><strong>Lab</strong><small>Three raster labs</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

A 30 metre cell reports one elevation for 900 square metres of ground that is not actually uniform. The value is a sample or an average, and everything smaller than the cell was discarded before the file reached you.

That sets a hard ceiling on what you are entitled to say. **What is the smallest thing this raster is allowed to be evidence about?**

</div>

## Learning goals

By the end of this lesson, you can:

- Explain what a raster cell represents, and why cell size governs what can be concluded.
- Distinguish continuous from discrete rasters and handle each appropriately.
- Derive slope, aspect and hillshade from an elevation model, and read what they mean.
- Reclassify continuous values onto a common scale so unlike criteria can be combined.
- Build a weighted suitability model and state its assumptions honestly.

## Key concepts

<div class="concept-lead" markdown="1">

### Cell size sets the ceiling on your conclusions

**With 30 metre cells you cannot say anything about a 10 metre feature; the data does not contain it.** Drag the slider above and watch the inlet go: at 20 metres its shape is there, at 45 it is one cell wide, and past that the raster records a square of water broader than the channel ever was.

Resampling to 5 metre cells produces a smoother picture and no new information, which makes it a way to manufacture false precision.

Match cell size to the question. When combining rasters of different resolutions, the coarsest input governs the meaningful resolution of the output no matter what the output cell size says.

</div>

### Continuous and discrete rasters behave differently

**Continuous** rasters — elevation, temperature, slope — hold measured values where the arithmetic distance between them is meaningful, so averaging and interpolation make sense.

**Discrete** rasters — land cover classes — hold codes standing for categories. Land cover class 41 is not larger than class 22, and averaging them produces a number that means nothing. Symbolize continuous rasters with a stretched or classified ramp, and discrete rasters with unique values.

### NoData is not zero

Cells outside the data extent, or where the value is unknown, carry NoData, and it propagates: most operations return NoData wherever any input has it. This is correct behaviour, but it means a suitability surface can develop holes wherever a single criterion lacks coverage. Check the extent of every input before combining.

### Slope, aspect and hillshade answer different questions

All three are derived from elevation.

- **Slope** gives steepness, in degrees or percent — and the two are not interchangeable: 45 degrees is 100 percent.
- **Aspect** gives the compass direction a slope faces, which matters for sun exposure, snowmelt and vegetation.
- **Hillshade** is a shaded relief image for display. It is not an analytical surface and should not be an input to a model.

### Suitability modelling is where assumptions hide

The workflow is always the same shape.

1. **Choose criteria** that genuinely bear on the question.
2. **Reclassify each onto a common scale**, typically 1 to 5. This is the step that lets slope in degrees be combined with land cover categories, because both become *how suitable is this*.
3. **Weight the criteria** if some matter more.
4. **Combine** with Weighted Overlay or raster algebra.
5. **Interpret**, remembering the output models your assumptions, not the world.

**The reclassification thresholds are the model.** Deciding that slope under 5 degrees scores 5 and slope over 20 scores 1 is a substantive claim about what counts as suitable, and it should be stated and defended, not buried in a tool dialog. Two analysts with the same data and different thresholds will reach different conclusions, and both can be right, provided they say what they assumed.

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · Averaging a discrete raster

Land cover codes are labels, not quantities. Their mean is a number with no referent.

</div>

<div markdown="1">

### 02 · Combining without reclassifying

Adding slope in degrees to a land cover code produces a number that means nothing at all.

</div>

<div markdown="1">

### 03 · Resampling finer

Smoother is not more accurate. The 10 metre version of a 90 metre raster knows nothing new.

</div>

<div markdown="1">

### 04 · A suitability surface as a finding

It is the consequence of your weights and thresholds. Report them alongside it.

</div>

</div>

## Practice task

Using an elevation model and at least one other raster criterion:

1. Derive slope from the elevation model, and note whether you are working in degrees or percent.
2. Reclassify each criterion onto a 1 to 5 suitability scale. Write down the threshold you chose for every class and the reasoning behind it.
3. Combine the criteria into a suitability surface, weighting them if you judge that some matter more.
4. Re-run the model once with a materially different set of thresholds.

<div class="deliverable-card" markdown="1">

## Deliverable

- Your reclassification table: every criterion, every class break, and a short justification for each.
- Both suitability surfaces, from the original and the altered thresholds.
- Four to six sentences on how much the result moved when the thresholds changed, and what that tells a reader about how much confidence the model deserves.

</div>

## Labs {: #labs }

<div class="lab-cards" markdown="1">

<a href="../../labs/surface-analysis/" class="lab-card">
  <span>Lab</span>
  <strong>Surface Analysis</strong>
  <small>Slope, aspect and hillshade from an elevation model.</small>
</a>

<a href="../../labs/map-algebra/" class="lab-card">
  <span>Lab</span>
  <strong>Map Algebra</strong>
  <small>Cell-by-cell arithmetic, and what NoData does to it.</small>
</a>

<a href="../../labs/suitability-modeling/" class="lab-card">
  <span>Lab</span>
  <strong>Suitability Modeling</strong>
  <small>Reclassify, weight and combine criteria into one surface.</small>
</a>

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://slcc.pressbooks.pub/maps/chapter/8-6/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 8.6 Terrain Mapping</strong>
  <small>Slope, aspect and hillshade, and what each one is evidence of.</small>
</a>

<a href="https://slcc.pressbooks.pub/maps/chapter/8-4/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 8.4 Scale of Raster Analysis</strong>
  <small>Resolution, resampling, and the limits each one sets.</small>
</a>

<a href="https://saylordotorg.github.io/text_essentials-of-geographic-information-systems/s12-geospatial-analysis-ii-raster-.html" class="reading-card">
  <span>Open text</span>
  <strong>Essentials of GIS · Ch. 8 Raster Analysis</strong>
  <small>Map algebra and the raster operations that build on it.</small>
</a>

<a href="https://learn.arcgis.com/en/paths/using-raster-data-and-imagery-in-arcgis-pro/" class="reading-card">
  <span>Tutorial path</span>
  <strong>Esri · Raster Data and Imagery</strong>
  <small>A guided sequence through raster handling in ArcGIS Pro.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the course</p>
  <a href="../08-geospatial-programming/"><span>Next collection</span><strong>Geospatial Programming →</strong></a>
</aside>
