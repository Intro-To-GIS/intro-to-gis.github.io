---
title: Data Management
---

<section class="lesson-hero lesson-hero--data" style="--hero-title-measure: 10ch; --hero-title-size: clamp(2.2rem, 5.4vw, 3.9rem)">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 03 · Spatial Data &amp; Reference Systems</p>
    <h1>Data Management</h1>
    <p class="lesson-deck">Finding data you can defend, judging it in two minutes, and storing it so it still works next month.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>60</strong> minutes</span>
      <span><strong>Beginner</strong> level</span>
      <span><strong>7 items</strong> in the source note</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="complete">
    <div class="spatial-demo__controls" aria-label="A shapefile with pieces missing">
      <button type="button" data-spatial-mode="complete" aria-pressed="true"
        data-caption="&lt;strong&gt;Complete:&lt;/strong&gt; four files sharing one name. Together they are a shapefile; individually they are nothing.">Complete</button>
      <button type="button" data-spatial-mode="fragment" aria-pressed="false"
        data-caption="&lt;strong&gt;Fragment:&lt;/strong&gt; the .shp was moved on its own. Geometry with no index and no attribute table will not open at all.">Moved .shp</button>
      <button type="button" data-spatial-mode="noprj" aria-pressed="false"
        data-caption="&lt;strong&gt;No .prj:&lt;/strong&gt; it opens and it draws, and the software has no idea where on earth it is. This is the missing spatial reference from Lesson 02.">No .prj</button>
    </div>
    <svg class="spatial-demo__map sf-demo" viewBox="0 0 700 430" role="img" aria-labelledby="sf-title sf-desc">
      <title id="sf-title">A shapefile is several files sharing one name</title>
      <desc id="sf-desc">Four component files on the left and the result on the right. Moving the geometry file alone makes the dataset unopenable; losing the projection file makes it unlocatable.</desc>

      <text class="sf-heading" x="30" y="58">parcels.*</text>
      <g class="sf-chip sf-chip--shp">
        <rect x="30" y="80" width="290" height="52" rx="9"/>
        <text class="sf-chip__ext" x="52" y="112">.shp</text>
        <text class="sf-chip__role" x="134" y="112">geometry</text>
      </g>
      <g class="sf-chip sf-chip--shx">
        <rect x="30" y="146" width="290" height="52" rx="9"/>
        <text class="sf-chip__ext" x="52" y="178">.shx</text>
        <text class="sf-chip__role" x="134" y="178">index</text>
      </g>
      <g class="sf-chip sf-chip--dbf">
        <rect x="30" y="212" width="290" height="52" rx="9"/>
        <text class="sf-chip__ext" x="52" y="244">.dbf</text>
        <text class="sf-chip__role" x="134" y="244">attributes</text>
      </g>
      <g class="sf-chip sf-chip--prj">
        <rect x="30" y="278" width="290" height="52" rx="9"/>
        <text class="sf-chip__ext" x="52" y="310">.prj</text>
        <text class="sf-chip__role" x="134" y="310">spatial reference</text>
      </g>
      <text class="sf-foot" x="30" y="366">move them together, or use Catalog to copy</text>

      <path class="sf-divider" d="M356,60 V370"/>

      <g class="sf-out sf-out--complete" aria-hidden="true">
        <g class="sf-parcels">
          <path d="M408,120 L492,104 L508,168 L424,186 Z"/>
          <path d="M508,168 L592,150 L608,214 L524,232 Z"/>
          <path d="M424,186 L508,168 L524,232 L440,250 Z"/>
        </g>
        <text class="sf-out__title" x="408" y="300">Opens and draws</text>
        <text class="sf-out__line" x="408" y="328">NAD83 / UTM zone 18N</text>
        <text class="sf-out__line" x="408" y="352">341 features · 12 fields</text>
      </g>

      <g class="sf-out sf-out--fragment" aria-hidden="true">
        <g class="sf-void">
          <rect x="408" y="104" width="200" height="146" rx="10"/>
          <path d="M448,144 L568,210"/><path d="M568,144 L448,210"/>
        </g>
        <text class="sf-out__title sf-out__title--bad" x="408" y="300">Will not open</text>
        <text class="sf-out__line" x="408" y="328">the index and the table</text>
        <text class="sf-out__line" x="408" y="352">travelled without it</text>
      </g>

      <g class="sf-out sf-out--noprj" aria-hidden="true">
        <g class="sf-parcels sf-parcels--adrift">
          <path d="M408,120 L492,104 L508,168 L424,186 Z"/>
          <path d="M508,168 L592,150 L608,214 L524,232 Z"/>
          <path d="M424,186 L508,168 L524,232 L440,250 Z"/>
        </g>
        <text class="sf-out__title sf-out__title--warn" x="408" y="300">Draws, but adrift</text>
        <text class="sf-out__line" x="408" y="328">unknown spatial reference</text>
        <text class="sf-out__line" x="408" y="352">every distance is a guess</text>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>Complete:</strong> four files sharing one name. Together they are a shapefile; individually they are nothing.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Data Management lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/data-management/"><span>02</span><strong>Slides</strong><small>Two decks</small></a>
  <a class="dock-empty" aria-disabled="true"><span>03</span><strong>Lab</strong><small>No lab in this lesson</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

Downloading a dataset takes thirty seconds. Deciding whether it can carry the weight of your conclusion takes about two minutes, and almost nobody spends them.

**What would you need to know about this file to defend a result built on it?**

</div>

## Learning goals

By the end of this lesson, you can:

- Find authoritative data at the right geographic scale for a question.
- Evaluate a dataset's fitness before building analysis on it.
- Explain why some GIS formats break when files are moved individually.
- Record enough about a source that your work can be reproduced or defended.

## Key concepts

<div class="concept-lead" markdown="1">

### Start as local as your question allows

**A city open data portal will usually hold more detail, and more recent updates, than a national dataset covering the same ground.** Move up a scale only when the question forces you to, because breadth of coverage is generally paid for in resolution and currency. The [Data Resources table](../../resources/#data-resources) is organised on exactly this principle, from NYC through to global sources.

</div>

### Four questions decide whether a dataset is usable

They take about two minutes to answer, and they are the two minutes that save a project.

1. **Who published it?** A government agency or university carries different weight from an anonymous re-upload of unclear provenance. Prefer the original publisher over a mirror.
2. **When was it last updated?** A five-year-old parcel layer is not a current parcel layer. Currency requirements vary: coastlines change slowly, business licences change weekly.
3. **What is it, exactly?** Read the metadata or data dictionary before the analysis, not after a result surprises you. Attribute names are frequently opaque and occasionally misleading.
4. **What are you allowed to do with it?** Public domain, a Creative Commons licence and "contact us for permission" are three different situations.

### Some formats are several files pretending to be one

**A shapefile is a minimum of three files sharing a name and differing only in extension** — `.shp`, `.shx` and `.dbf` — usually alongside `.prj` for the spatial reference, and others. Move the `.shp` alone and you have moved a fragment. The `.prj` in particular is easy to leave behind, and its absence is exactly the missing-spatial-reference problem from Lesson 02.

A file geodatabase is a folder that behaves as a database: copy the whole `.gdb` folder, or none of it.

This is a strong argument for working in a geodatabase rather than in loose shapefiles. It travels as one object, enforces field types properly, does not truncate field names to ten characters, and does not carry the shapefile's other historical limitations.

### Separate what you downloaded from what you made

Raw data is evidence and should never be edited in place. Processed data is your work and should be reproducible from the raw. Keeping them apart means you can always start again, and that you can always answer the question *where did this number come from*.

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · Re-saving a CSV in Excel

It silently changes field types, drops leading zeros from identifiers and reformats dates. Lesson 03d shows exactly what this breaks.

</div>

<div markdown="1">

### 02 · No record of the source

By the time someone asks, the portal has been redesigned and the link is dead. Record the URL and the date at the moment of download.

</div>

<div markdown="1">

### 03 · Trusting a field name

A field called `POP` might be population, a population estimate for another year, or a percentage. Check the data dictionary.

</div>

<div markdown="1">

### 04 · Moving one file at a time

Move every file with the same base name together, or copy the dataset through Catalog rather than the operating system.

</div>

</div>

## Practice task

Acquire one dataset relevant to a project area you care about, from a source you can defend. Set up the folder structure from Lesson 01 and place the download in `data/raw/`.

Then write a short source note recording: the publisher, the URL, the download date, the coordinate system, the number of features, the last update date given by the publisher, and the licence.

Finally, examine the attribute table and identify at least one field whose meaning is not obvious from its name. Find out what it means and record that too.

<div class="deliverable-card" markdown="1">

## Deliverable

- A screenshot of the map with your data added and drawing correctly.
- A screenshot of your folder structure.
- Your source note, covering all seven items above.
- One to two sentences on the ambiguous field: what you thought it meant, and what it actually means.

</div>

## Slide decks {: #decks }

<div class="deck-cards" markdown="1">

<a href="../../slides/data-management/" class="deck-card">
  <span>Deck</span>
  <strong>Data Acquisition &amp; Management</strong>
  <small>Where to look for data, and how to judge what you find.</small>
</a>

<a href="../../slides/file-types-management-troubleshooting/" class="deck-card">
  <span>Deck</span>
  <strong>File Types &amp; Troubleshooting</strong>
  <small>The ArcGIS file ecosystem, and what breaks when you move things.</small>
</a>

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://slcc.pressbooks.pub/maps/chapter/5-2/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 5.2 Data Acquisition</strong>
  <small>Where spatial data comes from, and what each origin implies about quality.</small>
</a>

<a href="https://slcc.pressbooks.pub/maps/chapter/5-4/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 5.4 File Formats</strong>
  <small>Shapefiles, geodatabases and the rest, with their limitations named.</small>
</a>

<a href="https://saylordotorg.github.io/text_essentials-of-geographic-information-systems/s07-data-information-and-where-to-.html" class="reading-card">
  <span>Open text</span>
  <strong>Essentials of GIS · Ch. 3 Data &amp; Where to Find Them</strong>
  <small>Evaluating a source before you build on it.</small>
</a>

<a href="https://mlpp.pressbooks.pub/flexiblegisworkbookpro/back-matter/appendix/" class="reading-card">
  <span>Workbook</span>
  <strong>Flexible GIS Workbook · GIS Data Repositories</strong>
  <small>A working list of portals, from municipal through to global.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the course</p>
  <a href="../03-selection-by-attribute/"><span>Next collection</span><strong>Selection by Attribute →</strong></a>
</aside>
