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
  <div class="spatial-demo" data-spatial-demo data-mode="fine">
    <div class="spatial-demo__controls" aria-label="One stream sampled at three cell sizes">
      <button type="button" data-spatial-mode="fine" aria-pressed="true"
        data-caption="&lt;strong&gt;10 m cells:&lt;/strong&gt; the stream is about as wide as one cell, so its course survives. This is the finest claim the data can support.">10 m</button>
      <button type="button" data-spatial-mode="mid" aria-pressed="false"
        data-caption="&lt;strong&gt;30 m cells:&lt;/strong&gt; the line is still there and the meanders are going. Anything narrower than 30 m is now a guess.">30 m</button>
      <button type="button" data-spatial-mode="coarse" aria-pressed="false"
        data-caption="&lt;strong&gt;90 m cells:&lt;/strong&gt; a staircase. Resampling this back to 10 m would look smoother and contain nothing it does not contain now.">90 m</button>
    </div>
    <svg class="spatial-demo__map ras-demo" viewBox="0 0 700 430" role="img" aria-labelledby="ras-title ras-desc">
      <title id="ras-title">One stream sampled at three cell sizes</title>
      <desc id="ras-desc">A stream drawn as a continuous line, with the cells that would record it at ten, thirty and ninety metres. The coarser the grid, the less of the stream's course survives.</desc>

      <g class="ras-grid ras-grid--fine" aria-hidden="true"><path d="M60,90 V360"/><path d="M70,90 V360"/><path d="M80,90 V360"/><path d="M90,90 V360"/><path d="M100,90 V360"/><path d="M110,90 V360"/><path d="M120,90 V360"/><path d="M130,90 V360"/><path d="M140,90 V360"/><path d="M150,90 V360"/><path d="M160,90 V360"/><path d="M170,90 V360"/><path d="M180,90 V360"/><path d="M190,90 V360"/><path d="M200,90 V360"/><path d="M210,90 V360"/><path d="M220,90 V360"/><path d="M230,90 V360"/><path d="M240,90 V360"/><path d="M250,90 V360"/><path d="M260,90 V360"/><path d="M270,90 V360"/><path d="M280,90 V360"/><path d="M290,90 V360"/><path d="M300,90 V360"/><path d="M310,90 V360"/><path d="M320,90 V360"/><path d="M330,90 V360"/><path d="M340,90 V360"/><path d="M350,90 V360"/><path d="M360,90 V360"/><path d="M370,90 V360"/><path d="M380,90 V360"/><path d="M390,90 V360"/><path d="M400,90 V360"/><path d="M410,90 V360"/><path d="M420,90 V360"/><path d="M430,90 V360"/><path d="M440,90 V360"/><path d="M450,90 V360"/><path d="M460,90 V360"/><path d="M470,90 V360"/><path d="M480,90 V360"/><path d="M490,90 V360"/><path d="M500,90 V360"/><path d="M510,90 V360"/><path d="M520,90 V360"/><path d="M530,90 V360"/><path d="M540,90 V360"/><path d="M550,90 V360"/><path d="M560,90 V360"/><path d="M570,90 V360"/><path d="M580,90 V360"/><path d="M590,90 V360"/><path d="M600,90 V360"/><path d="M60,90 H600"/><path d="M60,100 H600"/><path d="M60,110 H600"/><path d="M60,120 H600"/><path d="M60,130 H600"/><path d="M60,140 H600"/><path d="M60,150 H600"/><path d="M60,160 H600"/><path d="M60,170 H600"/><path d="M60,180 H600"/><path d="M60,190 H600"/><path d="M60,200 H600"/><path d="M60,210 H600"/><path d="M60,220 H600"/><path d="M60,230 H600"/><path d="M60,240 H600"/><path d="M60,250 H600"/><path d="M60,260 H600"/><path d="M60,270 H600"/><path d="M60,280 H600"/><path d="M60,290 H600"/><path d="M60,300 H600"/><path d="M60,310 H600"/><path d="M60,320 H600"/><path d="M60,330 H600"/><path d="M60,340 H600"/><path d="M60,350 H600"/><path d="M60,360 H600"/></g>
      <g class="ras-grid ras-grid--mid" aria-hidden="true"><path d="M60,90 V360"/><path d="M90,90 V360"/><path d="M120,90 V360"/><path d="M150,90 V360"/><path d="M180,90 V360"/><path d="M210,90 V360"/><path d="M240,90 V360"/><path d="M270,90 V360"/><path d="M300,90 V360"/><path d="M330,90 V360"/><path d="M360,90 V360"/><path d="M390,90 V360"/><path d="M420,90 V360"/><path d="M450,90 V360"/><path d="M480,90 V360"/><path d="M510,90 V360"/><path d="M540,90 V360"/><path d="M570,90 V360"/><path d="M600,90 V360"/><path d="M60,90 H600"/><path d="M60,120 H600"/><path d="M60,150 H600"/><path d="M60,180 H600"/><path d="M60,210 H600"/><path d="M60,240 H600"/><path d="M60,270 H600"/><path d="M60,300 H600"/><path d="M60,330 H600"/><path d="M60,360 H600"/></g>
      <g class="ras-grid ras-grid--coarse" aria-hidden="true"><path d="M60,90 V360"/><path d="M150,90 V360"/><path d="M240,90 V360"/><path d="M330,90 V360"/><path d="M420,90 V360"/><path d="M510,90 V360"/><path d="M600,90 V360"/><path d="M60,90 H600"/><path d="M60,180 H600"/><path d="M60,270 H600"/><path d="M60,360 H600"/></g>
      <g class="ras-cells ras-cells--fine" aria-hidden="true"><rect x="60" y="110" width="10" height="10"/><rect x="70" y="110" width="10" height="10"/><rect x="80" y="110" width="10" height="10"/><rect x="80" y="120" width="10" height="10"/><rect x="90" y="120" width="10" height="10"/><rect x="100" y="120" width="10" height="10"/><rect x="100" y="130" width="10" height="10"/><rect x="110" y="130" width="10" height="10"/><rect x="120" y="130" width="10" height="10"/><rect x="120" y="140" width="10" height="10"/><rect x="130" y="140" width="10" height="10"/><rect x="140" y="140" width="10" height="10"/><rect x="140" y="150" width="10" height="10"/><rect x="150" y="150" width="10" height="10"/><rect x="160" y="140" width="10" height="10"/><rect x="160" y="150" width="10" height="10"/><rect x="170" y="140" width="10" height="10"/><rect x="180" y="140" width="10" height="10"/><rect x="190" y="140" width="10" height="10"/><rect x="200" y="140" width="10" height="10"/><rect x="210" y="140" width="10" height="10"/><rect x="220" y="140" width="10" height="10"/><rect x="230" y="140" width="10" height="10"/><rect x="240" y="140" width="10" height="10"/><rect x="250" y="140" width="10" height="10"/><rect x="250" y="150" width="10" height="10"/><rect x="260" y="150" width="10" height="10"/><rect x="260" y="160" width="10" height="10"/><rect x="270" y="160" width="10" height="10"/><rect x="280" y="160" width="10" height="10"/><rect x="280" y="170" width="10" height="10"/><rect x="290" y="170" width="10" height="10"/><rect x="300" y="170" width="10" height="10"/><rect x="300" y="180" width="10" height="10"/><rect x="310" y="180" width="10" height="10"/><rect x="310" y="190" width="10" height="10"/><rect x="320" y="190" width="10" height="10"/><rect x="330" y="190" width="10" height="10"/><rect x="330" y="200" width="10" height="10"/><rect x="340" y="200" width="10" height="10"/><rect x="350" y="200" width="10" height="10"/><rect x="350" y="210" width="10" height="10"/><rect x="360" y="210" width="10" height="10"/><rect x="370" y="210" width="10" height="10"/><rect x="380" y="220" width="10" height="10"/><rect x="390" y="220" width="10" height="10"/><rect x="400" y="220" width="10" height="10"/><rect x="400" y="230" width="10" height="10"/><rect x="410" y="230" width="10" height="10"/><rect x="420" y="230" width="10" height="10"/><rect x="430" y="230" width="10" height="10"/><rect x="430" y="240" width="10" height="10"/><rect x="440" y="240" width="10" height="10"/><rect x="450" y="240" width="10" height="10"/><rect x="460" y="240" width="10" height="10"/><rect x="470" y="240" width="10" height="10"/><rect x="480" y="240" width="10" height="10"/><rect x="490" y="240" width="10" height="10"/><rect x="500" y="240" width="10" height="10"/><rect x="510" y="240" width="10" height="10"/><rect x="510" y="250" width="10" height="10"/><rect x="520" y="250" width="10" height="10"/><rect x="520" y="260" width="10" height="10"/><rect x="530" y="260" width="10" height="10"/><rect x="540" y="260" width="10" height="10"/><rect x="540" y="270" width="10" height="10"/><rect x="550" y="270" width="10" height="10"/><rect x="550" y="280" width="10" height="10"/><rect x="560" y="280" width="10" height="10"/><rect x="560" y="290" width="10" height="10"/><rect x="570" y="290" width="10" height="10"/><rect x="580" y="290" width="10" height="10"/><rect x="580" y="300" width="10" height="10"/><rect x="590" y="300" width="10" height="10"/><rect x="590" y="310" width="10" height="10"/><rect x="600" y="310" width="10" height="10"/></g>
      <g class="ras-cells ras-cells--mid" aria-hidden="true"><rect x="60" y="90" width="30" height="30"/><rect x="60" y="120" width="30" height="30"/><rect x="90" y="120" width="30" height="30"/><rect x="120" y="120" width="30" height="30"/><rect x="120" y="150" width="30" height="30"/><rect x="150" y="120" width="30" height="30"/><rect x="150" y="150" width="30" height="30"/><rect x="180" y="120" width="30" height="30"/><rect x="210" y="120" width="30" height="30"/><rect x="240" y="120" width="30" height="30"/><rect x="240" y="150" width="30" height="30"/><rect x="270" y="150" width="30" height="30"/><rect x="300" y="150" width="30" height="30"/><rect x="300" y="180" width="30" height="30"/><rect x="330" y="180" width="30" height="30"/><rect x="330" y="210" width="30" height="30"/><rect x="360" y="210" width="30" height="30"/><rect x="390" y="210" width="30" height="30"/><rect x="420" y="210" width="30" height="30"/><rect x="420" y="240" width="30" height="30"/><rect x="450" y="240" width="30" height="30"/><rect x="480" y="240" width="30" height="30"/><rect x="510" y="240" width="30" height="30"/><rect x="540" y="240" width="30" height="30"/><rect x="540" y="270" width="30" height="30"/><rect x="570" y="270" width="30" height="30"/><rect x="570" y="300" width="30" height="30"/><rect x="600" y="300" width="30" height="30"/></g>
      <g class="ras-cells ras-cells--coarse" aria-hidden="true"><rect x="60" y="90" width="90" height="90"/><rect x="150" y="90" width="90" height="90"/><rect x="240" y="90" width="90" height="90"/><rect x="240" y="180" width="90" height="90"/><rect x="330" y="180" width="90" height="90"/><rect x="420" y="180" width="90" height="90"/><rect x="510" y="180" width="90" height="90"/><rect x="510" y="270" width="90" height="90"/><rect x="600" y="270" width="90" height="90"/></g>
      <path class="ras-truth" d="M60,110 L150,152 L240,142 L330,198 L420,238 L510,248 L600,312"/>
      <text class="ras-key" x="60" y="398">true course of the stream</text>
      <text class="ras-key ras-key--cells" x="320" y="398">cells that record it</text>
      <g class="ras-size">
        <text class="ras-size__n ras-s--fine" x="640" y="62">10 m</text>
        <text class="ras-size__n ras-s--mid" x="640" y="62">30 m</text>
        <text class="ras-size__n ras-s--coarse" x="640" y="62">90 m</text>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>10 m cells:</strong> the stream is about as wide as one cell, so its course survives. This is the finest claim the data can support.</p>
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

**With 30 metre cells you cannot say anything about a 10 metre feature; the data does not contain it.** Resampling to 5 metre cells produces a smoother picture and no new information, which makes it a way to manufacture false precision.

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
