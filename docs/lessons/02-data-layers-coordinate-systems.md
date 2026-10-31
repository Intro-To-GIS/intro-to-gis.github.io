---
title: Data, Layers & Coordinates
---

<section class="lesson-hero lesson-hero--data" style="--hero-title-measure: 11ch; --hero-title-size: clamp(2.2rem, 6vw, 4.3rem)">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 03 · Spatial Data &amp; Reference Systems</p>
    <h1>Data, Layers &amp; Coordinates</h1>
    <p class="lesson-deck">Layers that line up perfectly can still produce measurements that are wrong. This is why.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>60–75</strong> minutes</span>
      <span><strong>Beginner</strong> level</span>
      <span><strong>2 measurements</strong> to compare</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="degrees">
    <div class="spatial-demo__controls" aria-label="One buffer, measured two ways">
      <button type="button" data-spatial-mode="degrees" aria-pressed="true"
        data-caption="&lt;strong&gt;One degree:&lt;/strong&gt; a round buffer on screen. It reaches 111 km north but only 84 km east, because a degree of longitude shrinks towards the poles.">Degrees</button>
      <button type="button" data-spatial-mode="metres" aria-pressed="false"
        data-caption="&lt;strong&gt;One hundred kilometres:&lt;/strong&gt; the same buffer in a projected system. True on the ground—and no longer a circle on a map drawn in degrees.">Kilometres</button>
      <button type="button" data-spatial-mode="compare" aria-pressed="false"
        data-caption="&lt;strong&gt;The gap:&lt;/strong&gt; both at once. Nothing on screen looks broken, and the east–west reach is out by sixteen percent.">Compare</button>
    </div>
    <svg class="spatial-demo__map crs-demo" viewBox="0 0 700 430" role="img" aria-labelledby="crs-title crs-desc">
      <title id="crs-title">A buffer measured in degrees against the same buffer in kilometres</title>
      <desc id="crs-desc">On a map drawn in degrees at 41 degrees north, a one-degree buffer is a circle that reaches 111 km north and 84 km east. A true 100 km buffer is an ellipse.</desc>

      <g class="crs-grid" aria-hidden="true">
        <path d="M62,20 V400"/><path d="M134,20 V400"/><path d="M206,20 V400"/><path d="M278,20 V400"/>
        <path class="crs-grid__axis" d="M350,20 V400"/>
        <path d="M422,20 V400"/><path d="M494,20 V400"/><path d="M566,20 V400"/><path d="M638,20 V400"/>
        <path d="M62,66 H638"/><path d="M62,138 H638"/>
        <path class="crs-grid__axis" d="M62,210 H638"/>
        <path d="M62,282 H638"/><path d="M62,354 H638"/>
      </g>
      <g class="crs-labels" aria-hidden="true">
        <text x="70" y="60">43°N</text>
        <text x="70" y="132">42°N</text>
        <text x="70" y="204">41°N</text>
        <text x="70" y="276">40°N</text>
        <text x="70" y="348">39°N</text>
        <text class="crs-labels__foot" x="350" y="392">one grid square = one degree</text>
      </g>

      <g class="crs-shape crs-shape--deg" aria-hidden="true">
        <circle cx="350" cy="210" r="72"/>
      </g>
      <g class="crs-shape crs-shape--km" aria-hidden="true">
        <ellipse cx="350" cy="210" rx="86" ry="65"/>
      </g>

      <circle class="crs-city" cx="350" cy="210" r="7"/>

      <g class="crs-note crs-note--deg" aria-hidden="true">
        <text x="350" y="122">111 km north</text>
        <text class="crs-note__side" x="436" y="206">84 km east</text>
      </g>
      <g class="crs-note crs-note--km" aria-hidden="true">
        <text x="350" y="129">100 km north</text>
        <text class="crs-note__side" x="450" y="216">100 km east</text>
      </g>
      <g class="crs-gap" aria-hidden="true">
        <path class="crs-key crs-key--deg" d="M470,318 H510"/>
        <text x="520" y="324">1° buffer · 84 km east</text>
        <path class="crs-key crs-key--km" d="M470,352 H510"/>
        <text x="520" y="358">100 km buffer · true</text>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>One degree:</strong> a round buffer on screen. It reaches 111 km north but only 84 km east, because a degree of longitude shrinks towards the poles.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Data, Layers and Coordinates lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/projection/"><span>02</span><strong>Slides</strong><small>Two decks</small></a>
  <a class="dock-empty" aria-disabled="true"><span>03</span><strong>Lab</strong><small>No lab in this lesson</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

Layers drawing neatly on top of one another is the most reassuring thing a GIS can show you, and it is nearly meaningless. It tells you the display is working. It tells you nothing about whether a distance you measure is real.

**If the map looks right, what could still be wrong underneath it?**

</div>

## Learning goals

By the end of this lesson, you can:

- Explain when vector suits a problem and when raster does.
- Read a spatial reference and say what kind of coordinate system it is.
- Explain why layers can appear to line up correctly and still produce wrong measurements.
- Choose a projection appropriate to the analysis you intend to run.
- Diagnose the two distinct reasons layers fail to overlay.

## Key concepts

<div class="concept-lead" markdown="1">

### Two answers to one question

**Vector and raster are both attempts to store continuous reality in discrete numbers.** Vector stores objects with boundaries — points, lines and polygons, each carrying attributes — and suits things that genuinely have edges: parcels, roads, administrative boundaries, sample sites. Raster stores a grid of cells, each holding one value, and suits things that vary continuously and have no natural edges: elevation, temperature, rainfall, land cover.

The practical consequence is that each format makes different questions cheap. *Total area of parcels zoned residential* is trivial in vector and awkward in raster. *Average slope across this watershed* is trivial in raster and awkward in vector. Choosing the wrong representation does not make an analysis impossible, only laborious and lossy.

</div>

### A coordinate system is a claim about how the earth was flattened

Geographic coordinate systems such as WGS 84 give positions in degrees of latitude and longitude on a model of the earth's shape. They are positions on a globe, not on a plane. Projected coordinate systems such as UTM or a State Plane zone give positions in linear units — metres or feet — on a flat surface produced by a specific mathematical transformation.

### Degrees are not a unit of distance

**This is the point most students miss, and the demo above is the whole of it.** One degree of longitude is about 111 kilometres at the equator and about 84 kilometres at the latitude of New York. One degree of latitude stays at 111 kilometres everywhere.

Run a buffer, calculate an area or measure a distance while your data sits in a geographic coordinate system, and the result is distorted — in some cases meaningless — while the map looks perfectly normal.

### Every projection distorts something

Flattening a sphere is impossible without cost, so each projection preserves some properties and sacrifices others. The choice should follow the analysis:

| If your analysis depends on | Choose |
| --- | --- |
| Area, such as land cover totals or density | An equal-area projection |
| Distance and buffering | A projection suited to your region, such as the local UTM zone |
| Shape and direction, such as navigation | A conformal projection |
| Nothing measured, display only | Whatever reads clearly at your scale |

### Failing to overlay has two different causes

**They look identical on screen and need different fixes.**

If a layer's spatial reference is defined correctly but differs from the map's, ArcGIS Pro reprojects on the fly and the layer lines up. That is a display setting, and nothing is wrong.

If a layer's spatial reference is missing or wrongly defined, no amount of reprojection helps, because the software has been told the wrong thing about what the coordinates mean. That requires the **Define Projection** tool and actual knowledge of what the data is. Guessing here is how quiet, permanent errors enter a project.

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · Measuring in degrees

Check the layer's units before any distance operation. If they are degrees, project first.

</div>

<div markdown="1">

### 02 · Project vs Define Projection

Project transforms coordinates. Define Projection changes the label and touches nothing. Using the second when you needed the first corrupts the data silently.

</div>

<div markdown="1">

### 03 · Trusting on-the-fly

It fixes display only. The stored data is unchanged, and geoprocessing tools may still use the source.

</div>

<div markdown="1">

### 04 · Taking a projection on trust

Check a downloaded layer against its metadata, especially data assembled by a third party.

</div>

</div>

## Practice task

Add two vector layers and one raster layer covering the same area, drawn from different sources so their spatial references are likely to differ. For each, record the data type, the file or service type, the coordinate system name and its linear or angular unit.

Then measure one distance twice: once with the map in a geographic coordinate system, and once in the appropriate projected system for that area. Record both numbers.

<div class="deliverable-card" markdown="1">

## Deliverable

- A table listing each layer with its data type, source type, coordinate system and units.
- The two distance measurements, with the coordinate system used for each.
- Two to three sentences explaining which measurement you would report, and why.

</div>

!!! note "The lining-up test is not enough"
    Layers drawing on top of each other correctly tells you the display is working. It tells you nothing about whether your measurements are valid.

## Slide decks {: #decks }

<div class="deck-cards" markdown="1">

<a href="../../slides/projection/" class="deck-card">
  <span>Deck</span>
  <strong>Projections</strong>
  <small>Datums, coordinate systems, and what each projection gives up.</small>
</a>

<a href="../../slides/vector-vs-raster-data/" class="deck-card">
  <span>Deck</span>
  <strong>Vector vs Raster</strong>
  <small>The two data models and the questions each one makes cheap.</small>
</a>

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://slcc.pressbooks.pub/maps/chapter/2-3/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 2.3 Datums &amp; Projections</strong>
  <small>Where coordinate systems come from, and why a datum matters as much as a projection.</small>
</a>

<a href="https://slcc.pressbooks.pub/maps/chapter/4-3/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 4.3 Vector Data Models</strong>
  <small>Points, lines and polygons, and how topology is stored.</small>
</a>

<a href="https://slcc.pressbooks.pub/maps/chapter/4-2/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 4.2 Raster Data Models</strong>
  <small>The grid model, cell values, and what resolution costs.</small>
</a>

<a href="https://mlpp.pressbooks.pub/flexiblegisworkbookpro/chapter/1-4-change-the-map-projection/" class="reading-card">
  <span>Workbook</span>
  <strong>Flexible GIS Workbook · 1.4 Change the Map Projection</strong>
  <small>Setting a map's projection in ArcGIS Pro, step by step.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the collection</p>
  <a href="../02b-data-management/"><span>Next lesson</span><strong>Data Acquisition &amp; Management →</strong></a>
</aside>
