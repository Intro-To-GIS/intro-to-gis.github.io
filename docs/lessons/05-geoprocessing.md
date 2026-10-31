---
title: Geoprocessing
---

<section class="lesson-hero lesson-hero--vector" style="--hero-title-measure: 13ch; --hero-title-size: clamp(2.4rem, 4.8vw, 3.5rem)">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 07 · Vector Geoprocessing</p>
    <h1>Geoprocessing</h1>
    <p class="lesson-deck">Four tools reshape the same two layers in four different ways. Knowing which one you meant is the whole skill.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>75–90</strong> minutes</span>
      <span><strong>Intermediate</strong> level</span>
      <span><strong>4 tools</strong> to tell apart</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="buffer">
    <div class="spatial-demo__controls" aria-label="Try four geoprocessing tools">
      <button type="button" data-spatial-mode="buffer" aria-pressed="true"
        data-caption="&lt;strong&gt;Buffer:&lt;/strong&gt; a zone of a stated distance around each parcel. Nothing is cut; something new is added.">Buffer</button>
      <button type="button" data-spatial-mode="clip" aria-pressed="false"
        data-caption="&lt;strong&gt;Clip:&lt;/strong&gt; the parcels are trimmed to the study area. Only the parcels' own fields come out the other side.">Clip</button>
      <button type="button" data-spatial-mode="dissolve" aria-pressed="false"
        data-caption="&lt;strong&gt;Dissolve:&lt;/strong&gt; the shared boundaries disappear and three parcels become one. The unit of analysis has changed.">Dissolve</button>
      <button type="button" data-spatial-mode="overlay" aria-pressed="false"
        data-caption="&lt;strong&gt;Intersect:&lt;/strong&gt; the same geometry as Clip, but each record now carries fields from both layers. That is the only difference, and it is the important one.">Intersect</button>
    </div>
    <svg class="spatial-demo__map" viewBox="0 0 700 430" role="img" aria-labelledby="geo-title geo-desc">
      <title id="geo-title">Interactive comparison of four geoprocessing tools</title>
      <desc id="geo-desc">Three adjacent parcels overlap a dashed study area. The controls show what Buffer, Clip, Dissolve and Intersect each do to them.</desc>
      <defs>
        <pattern id="geo-grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M 36 0 L 0 0 0 36" fill="none" stroke="currentColor" stroke-opacity=".09" stroke-width="1"/>
        </pattern>
        <clipPath id="geo-studyarea">
          <path d="M300,96 C420,64 560,78 648,122 L640,330 C520,368 390,352 300,316 Z"/>
        </clipPath>
      </defs>
      <rect width="700" height="430" fill="url(#geo-grid)" rx="24"/>

      <path class="geo-area" d="M300,96 C420,64 560,78 648,122 L640,330 C520,368 390,352 300,316 Z"/>
      <text class="geo-area-label" x="470" y="392" text-anchor="middle"
        style="fill:var(--night-muted);font:500 18px var(--md-text-font-family)">Study area</text>

      <g class="geo-layer geo-layer--buffer" aria-hidden="true">
        <rect class="geo-buffer" x="46" y="128" width="498" height="184" rx="30"/>
      </g>

      <rect class="geo-base" x="70" y="152" width="150" height="136"/>
      <rect class="geo-base" x="220" y="152" width="150" height="136"/>
      <rect class="geo-base" x="370" y="152" width="150" height="136"/>
      <g class="geo-seam" aria-hidden="true">
        <path d="M220,152 V288"/><path d="M370,152 V288"/>
      </g>

      <g class="geo-layer geo-layer--cut" clip-path="url(#geo-studyarea)" aria-hidden="true">
        <rect class="geo-cut" x="70" y="152" width="150" height="136"/>
        <rect class="geo-cut" x="220" y="152" width="150" height="136"/>
        <rect class="geo-cut" x="370" y="152" width="150" height="136"/>
      </g>

      <g class="geo-layer geo-layer--dissolve" aria-hidden="true">
        <rect class="geo-dissolved" x="70" y="152" width="450" height="136"/>
      </g>

      <g class="geo-fields geo-fields--clip" aria-hidden="true">
        <g class="geo-field"><rect x="70" y="330" width="118" height="30"/><text x="80" y="351">PARCEL_ID</text></g>
        <g class="geo-field"><rect x="196" y="330" width="78" height="30"/><text x="206" y="351">AREA</text></g>
      </g>
      <g class="geo-fields geo-fields--overlay" aria-hidden="true">
        <g class="geo-field"><rect x="70" y="330" width="118" height="30"/><text x="80" y="351">PARCEL_ID</text></g>
        <g class="geo-field"><rect x="196" y="330" width="78" height="30"/><text x="206" y="351">AREA</text></g>
        <g class="geo-field geo-field--extra"><rect x="282" y="330" width="86" height="30"/><text x="292" y="351">ZONING</text></g>
        <g class="geo-field geo-field--extra"><rect x="376" y="330" width="120" height="30"/><text x="386" y="351">DISTRICT</text></g>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>Buffer:</strong> a zone of a stated distance around each parcel. Nothing is cut; something new is added.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Geoprocessing lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/geoprocessing-tools/"><span>02</span><strong>Slides</strong><small>Visual walkthrough</small></a>
  <a href="#labs"><span>03</span><strong>Lab</strong><small>Four tool labs</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

Every geoprocessing tool reports success the moment it finishes. It will not tell you that you ran the wrong one. **When two tools produce the same shape, what is it that actually differs?**

This lesson is about telling near-identical tools apart. You will predict an output before running it, read the record count as evidence, and learn why Clip and Intersect can return the same geometry and still answer different questions.

</div>

## Learning goals

By the end of this lesson, you can:

- Choose the right tool for a question, particularly among the overlay tools that look similar.
- Read a tool's dialog well enough to predict its output before running it.
- Set geoprocessing environments, and explain what they silently change.
- Chain tools into a workflow whose result you can defend and reproduce.
- Diagnose a tool that succeeded but produced the wrong answer.

## Key concepts

<div class="concept-lead" markdown="1">

### Every tool has the same anatomy

**Inputs, parameters, an output, and environments.** Inputs are the data. Parameters are the decisions. The output is a new dataset, because these tools do not modify inputs. Environments are settings applied across tools, including output coordinate system, processing extent and cell size. Environments are the ones that catch people out, because they change results without appearing anywhere in the dialog you are looking at.

</div>

### The core tools, and what distinguishes them

| Tool | Does | Reach for it when |
| --- | --- | --- |
| Buffer | Zone of a stated distance around features | Proximity, access, setbacks |
| Clip | Cuts one layer to another's boundary, keeping the first layer's attributes | You want a study area subset |
| Dissolve | Merges features sharing an attribute value | Aggregating tracts to counties |
| Intersect | Keeps only overlapping areas, combining attributes of both | You need where both conditions hold |
| Union | Keeps everything from both, splitting at overlaps | You need the full picture including non-overlap |
| Spatial Join | Transfers attributes by location, geometry unchanged | You want to enrich a layer, not reshape it |

### Clip against Intersect

**This is the distinction most worth getting right**, and the demo above is built around it. Both cut geometry by another layer, and both return the same shape. Clip is a cookie cutter: only the input layer's attributes come through. Intersect is analytical: the output carries attributes from both layers, and every combination of overlapping features becomes its own record.

If you want a subset, Clip. If you want to know what overlaps what, Intersect.

!!! warning "The same picture, a different table"
    Because the geometry is identical, the map will not tell you which tool you ran. The attribute table will. Check the field list and the record count before you build anything on top of the result.

### Dissolve changes the unit of analysis

Dissolving tracts into counties changes what a row means, and any statistic you had per tract must be re-derived, not carried over. Summing populations is valid. Averaging percentages is not, unless you weight them, because a percentage from a tract of 400 people cannot be averaged with one from a tract of 12,000 as though they were equivalent.

### Buffer distance is only as good as the coordinate system

Same warning as Lessons 02 and 03b, and geoprocessing is where it does the most damage, because the output looks entirely convincing. Check units before buffering. Note also the dissolve option inside Buffer: leaving overlapping buffers separate double-counts anything that falls in two of them.

### Workflows should be reproducible

Real analysis is a chain, and each step needs a name that says what it is. `schools_buffer_800m` survives a week away from the project; `schools_Buffer1` does not. Keep intermediate outputs until the work is finished. When a result surprises you, being able to inspect step three is the difference between finding the error and starting again.

## When a tool runs but the answer is wrong

The tool reporting success means it did what you asked. It says nothing about whether you asked the right thing.

1. **Check the output record count.** Wildly more records than expected usually means Intersect where you wanted Clip, or a one-to-many relationship you did not anticipate.
2. **Check for an active selection.** Tools operate on selected features when a selection exists. This silently narrows every input.
3. **Check the coordinate system and units**, especially after anything involving distance or area.
4. **Check the environments.** A processing extent set earlier in the session may still be clipping your outputs.
5. **Open the attribute table.** Nulls, zeros and duplicated rows are visible there and nowhere else.

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · Union for Intersect

Union keeps everything, so the output includes areas where only one layer is present.

</div>

<div markdown="1">

### 02 · Averaging after Dissolve

Weight the rates, or recompute them from the underlying counts.

</div>

<div markdown="1">

### 03 · Undissolved buffers

Overlapping buffers left separate double-count every feature that falls in two.

</div>

<div markdown="1">

### 04 · Unnamed outputs

`Buffer3` tells you nothing tomorrow, and nothing at all to anyone else.

</div>

</div>

## Practice task

Answer a question that needs at least three chained tools. For example: which schools lie within 800 metres of a park larger than two acres, and how many students does that represent.

1. Document each step: tool, inputs, parameters, output name, and output record count. Name every output meaningfully.
2. Run the Clip step again as an Intersect. Compare the two attribute tables field by field and record what differs.
3. Introduce one deliberate error, run the chain again, and record what changed and where you would have caught it.

<div class="deliverable-card" markdown="1">

## Deliverable

- A workflow table with one row per step: tool, inputs, key parameters, output name, record count.
- The field lists from the Clip and the Intersect, with one or two sentences on what the extra fields would let you ask.
- A screenshot of the final map.
- Three to four sentences on the deliberate error: what you changed, what it did to the result, and which check would have caught it.

</div>

## Labs {: #labs }

Each tool has its own lab, with a real scenario and public data.

<div class="lab-cards" markdown="1">

<a href="../../labs/buffer/" class="lab-card">
  <span>Lab</span>
  <strong>Buffer</strong>
  <small>Walkable school access in Denver, Colorado.</small>
</a>

<a href="../../labs/clip/" class="lab-card">
  <span>Lab</span>
  <strong>Clip</strong>
  <small>Extracting African provinces from a world boundary file.</small>
</a>

<a href="../../labs/dissolve/" class="lab-card">
  <span>Lab</span>
  <strong>Dissolve</strong>
  <small>Aggregating census tract social vulnerability to counties.</small>
</a>

<a href="../../labs/overlay/" class="lab-card">
  <span>Lab</span>
  <strong>Overlay</strong>
  <small>Intersect and union across countries and provinces.</small>
</a>

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://saylordotorg.github.io/text_essentials-of-geographic-information-systems/s11-geospatial-analysis-i-vector-o.html" class="reading-card">
  <span>Open text</span>
  <strong>Essentials of GIS · Vector Operations</strong>
  <small>The overlay family explained one tool at a time, with worked examples.</small>
</a>

<a href="https://slcc.pressbooks.pub/maps/chapter/7-3/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · Single Layer Analysis</strong>
  <small>Buffer and dissolve in the context of the questions they answer.</small>
</a>

<a href="https://pro.arcgis.com/en/pro-app/latest/tool-reference/analysis/an-overview-of-the-overlay-toolset.htm" class="reading-card">
  <span>Tool reference</span>
  <strong>ArcGIS Pro · Overlay toolset</strong>
  <small>Parameter-level detail on Clip, Intersect, Union and their differences.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the collection</p>
  <a href="../06-raster-analysis/"><span>Next collection</span><strong>Raster Analysis →</strong></a>
</aside>
