---
title: Getting Started
---

<section class="lesson-hero lesson-hero--workspace">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 02 · The ArcGIS Pro Workspace</p>
    <h1>Getting Started</h1>
    <p class="lesson-deck">A project does not contain your data. Understanding what it does contain prevents the first failure everyone meets.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>45–60</strong> minutes</span>
      <span><strong>Beginner</strong> level</span>
      <span><strong>1 project</strong> to set up</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="linked">
    <div class="spatial-demo__controls" aria-label="What a project stores, and what breaks it">
      <button type="button" data-spatial-mode="linked" aria-pressed="true"
        data-caption="&lt;strong&gt;Linked:&lt;/strong&gt; the project stores a path to each dataset. The data itself lives on disk, outside the project.">Linked</button>
      <button type="button" data-spatial-mode="broken" aria-pressed="false"
        data-caption="&lt;strong&gt;Renamed:&lt;/strong&gt; the folder moved. The paths still point where the data used to be, so every layer breaks at once.">Renamed</button>
      <button type="button" data-spatial-mode="repaired" aria-pressed="false"
        data-caption="&lt;strong&gt;Repaired:&lt;/strong&gt; set each layer's source to the new location. Nothing about the data changed—only the instruction that finds it.">Repaired</button>
    </div>
    <svg class="spatial-demo__map wk-demo" viewBox="0 0 700 430" role="img" aria-labelledby="wk-title wk-desc">
      <title id="wk-title">What an ArcGIS Pro project stores</title>
      <desc id="wk-desc">A project file on the left holds layers that point at data files on the right. Renaming the folder breaks the links; repointing the layer source restores them.</desc>

      <g class="wk-card">
        <rect x="24" y="48" width="268" height="334" rx="14"/>
        <text class="wk-card__title" x="48" y="88">project.aprx</text>
        <text class="wk-card__sub" x="48" y="112">maps · layouts · symbology · paths</text>
        <path class="wk-divider" d="M24,132 H292"/>
        <g class="wk-row">
          <rect x="44" y="156" width="228" height="48" rx="8"/>
          <text x="64" y="186">schools</text>
          <text class="wk-flag wk-flag--ok" x="250" y="186">✓</text>
          <text class="wk-flag wk-flag--bad" x="250" y="186">!</text>
        </g>
        <g class="wk-row">
          <rect x="44" y="220" width="228" height="48" rx="8"/>
          <text x="64" y="250">roads</text>
          <text class="wk-flag wk-flag--ok" x="250" y="250">✓</text>
          <text class="wk-flag wk-flag--bad" x="250" y="250">!</text>
        </g>
        <text class="wk-note" x="48" y="330">stores where the data is,</text>
        <text class="wk-note" x="48" y="354">never the data itself</text>
      </g>

      <g class="wk-card">
        <rect x="408" y="48" width="268" height="334" rx="14"/>
        <text class="wk-card__title wk-folder wk-folder--a" x="432" y="88">data/raw/</text>
        <text class="wk-card__title wk-folder wk-folder--b" x="432" y="88">archive/raw/</text>
        <text class="wk-card__sub" x="432" y="112">on disk</text>
        <path class="wk-divider" d="M408,132 H676"/>
        <g class="wk-row wk-row--file">
          <rect x="428" y="156" width="228" height="48" rx="8"/>
          <text x="448" y="186">schools.shp</text>
        </g>
        <g class="wk-row wk-row--file">
          <rect x="428" y="220" width="228" height="48" rx="8"/>
          <text x="448" y="250">roads.shp</text>
        </g>
      </g>

      <g class="wk-link wk-link--ok" aria-hidden="true">
        <path d="M296,180 H418"/><path d="M406,174 L420,180 L406,186 Z"/>
        <path d="M296,244 H418"/><path d="M406,238 L420,244 L406,250 Z"/>
      </g>
      <g class="wk-link wk-link--cut" aria-hidden="true">
        <path d="M296,180 H330"/><path d="M382,180 H418"/>
        <path d="M296,244 H330"/><path d="M382,244 H418"/>
        <text class="wk-cross" x="356" y="188">✕</text>
        <text class="wk-cross" x="356" y="252">✕</text>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>Linked:</strong> the project stores a path to each dataset. The data itself lives on disk, outside the project.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Getting Started lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/arcgis-pro-ui-tour/"><span>02</span><strong>Slides</strong><small>Two decks</small></a>
  <a class="dock-empty" aria-disabled="true"><span>03</span><strong>Lab</strong><small>No lab in this lesson</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

The commonest beginner failure in ArcGIS Pro is not a tool used wrongly. It is a folder renamed. Every layer turns into a red exclamation mark, the map goes blank, and nothing in the error explains why.

It happens because of a distinction worth getting straight before anything else. **If the project does not hold your data, what exactly is in it?**

</div>

## Learning goals

By the end of this lesson, you can:

- Explain what an ArcGIS Pro project contains and why it is not simply a map file.
- Identify the ribbon, map view, Contents pane, Catalog pane and Geoprocessing pane, and say what each is for.
- Distinguish a layer from the data it draws, and explain why that distinction causes most beginner confusion.
- Set up a project folder that will still make sense in three months.

## Key concepts

<div class="concept-lead" markdown="1">

### A project is a workspace, not a document

**An `.aprx` file holds maps, layouts, toolboxes, database connections, folder connections and layer symbology.** What it does not hold is your data. This surprises people, and it is the source of the failure in the demo above: move or rename a folder the project points at, reopen, and every layer is broken. The project stored a path, and the path no longer leads anywhere.

</div>

### A layer is a set of instructions for drawing data

When you add a shapefile to a map you create a layer that says: read from this location, draw it in this colour, label it with this field, show it between these scales.

- Delete the layer and the shapefile is untouched.
- Delete the shapefile and the layer becomes a broken reference.
- Change the symbology and you have changed the instructions, not the values.

Once this distinction is solid, a large amount of otherwise mysterious behaviour becomes obvious.

### Four panes do most of the work

| Pane | What it is for |
| --- | --- |
| **Contents** | What is in this map, in draw order, and how it is symbolized |
| **Catalog** | What exists on disk and in your databases, whether or not it is in a map |
| **Geoprocessing** | Finding and running tools |
| **Map view** | The map itself |

The distinction that matters is Contents against Catalog. Contents answers *what am I looking at*. Catalog answers *what do I have*. Beginners often hunt through Contents for a dataset they have not added yet.

### Folder structure is analysis infrastructure

A predictable layout separates what you downloaded from what you made, which means you can always rebuild an output and never overwrite a source.

```text
project-name/
  data/raw/        downloaded, never edited
  data/processed/  outputs you generated
  project.gdb      geodatabase for working feature classes
  exports/         maps and figures for submission
  project.aprx
```

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · Saving into Downloads

It will be tidied away by you or by the operating system, and the project will break with it.

</div>

<div markdown="1">

### 02 · Editing in `data/raw/`

Once a source has been edited you can no longer tell what the original was, or rebuild from it.

</div>

<div markdown="1">

### 03 · Renaming after the fact

Settle the folder structure before you add data. Repair through the layer's source properties when you must.

</div>

<div markdown="1">

### 04 · "I saved the project"

Saving the project saves the instructions. Exported feature classes are what actually persist.

</div>

</div>

## Practice task

Create your course project using the folder structure above. Add one spatial layer from `data/raw/`.

Then deliberately break it: close ArcGIS Pro, rename the folder holding your data, and reopen the project. Observe what happens in the Contents pane, then repair the link through the layer's properties.

<div class="deliverable-card" markdown="1">

## Deliverable

- A screenshot showing the map, the Contents pane and the Catalog pane together.
- A screenshot of your folder structure.
- Two to three sentences describing what the Contents pane showed after you renamed the folder, and how you repaired it.

</div>

!!! tip "Why break it on purpose"
    Every GIS user meets the broken-link exclamation mark eventually. Meeting it now, deliberately, on a layer you do not care about, is much cheaper than meeting it the night before a deadline.

## Slide decks {: #decks }

<div class="deck-cards" markdown="1">

<a href="../../slides/arcgis-pro-ui-tour/" class="deck-card">
  <span>Deck</span>
  <strong>ArcGIS Pro UI Tour</strong>
  <small>The ribbon, the panes, and where each one lives.</small>
</a>

<a href="../../slides/project-map-geodatabase-feature-class-shapefile-layer/" class="deck-card">
  <span>Deck</span>
  <strong>Project, Map, Geodatabase, Layer</strong>
  <small>The container vocabulary, from project down to feature class.</small>
</a>

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://doc.esri.com/en/arcgis-pro/latest/get-started/get-started.html" class="reading-card">
  <span>Documentation</span>
  <strong>Esri · Introduction to ArcGIS Pro</strong>
  <small>The official tour of the interface and the project model.</small>
</a>

<a href="https://mlpp.pressbooks.pub/flexiblegisworkbookpro/chapter/chapter-1/" class="reading-card">
  <span>Workbook</span>
  <strong>Flexible GIS Workbook · 1.1 Start a New Project</strong>
  <small>Creating a project step by step, with the folder decisions made explicit.</small>
</a>

<a href="https://slcc.pressbooks.pub/maps/chapter/5-3/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 5.3 Geodatabases</strong>
  <small>Why a geodatabase beats a folder of shapefiles for working data.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the course</p>
  <a href="../02-data-layers-coordinate-systems/"><span>Next lesson</span><strong>Data, Layers &amp; Coordinates →</strong></a>
</aside>
