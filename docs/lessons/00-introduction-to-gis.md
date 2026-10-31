---
title: Introduction to GIS
---

<section class="lesson-hero lesson-hero--thinking" style="--hero-title-measure: 12ch; --hero-title-size: clamp(2.2rem, 5.9vw, 4.3rem)">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 01 · GIS as a Way of Seeing</p>
    <h1>Introduction to GIS</h1>
    <p class="lesson-deck">Before the software: what this field is for, and how to tell when a question actually needs a map.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>60–90</strong> minutes</span>
      <span><strong>No experience</strong> needed</span>
      <span><strong>2 parts</strong> to the task</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="table">
    <div class="spatial-demo__controls" aria-label="Three ways to ask the same question">
      <button type="button" data-spatial-mode="table" aria-pressed="true"
        data-caption="&lt;strong&gt;Sorted:&lt;/strong&gt; a spreadsheet answers which counties have the fewest doctors. No map is needed for this.">Sort</button>
      <button type="button" data-spatial-mode="map" aria-pressed="false"
        data-caption="&lt;strong&gt;Mapped:&lt;/strong&gt; the same twelve values, placed. Now you can see where the shortage is, not only that it exists.">Map</button>
      <button type="button" data-spatial-mode="cluster" aria-pressed="false"
        data-caption="&lt;strong&gt;Adjacent:&lt;/strong&gt; the four worst-served counties share borders. Only location could have told you that.">Cluster</button>
    </div>
    <svg class="spatial-demo__map ways-demo" viewBox="0 0 700 430" role="img" aria-labelledby="ways-title ways-desc">
      <title id="ways-title">Twelve counties, three ways of asking the same question</title>
      <desc id="ways-desc">Physicians per ten thousand residents, shown first as a sorted list, then as a shaded map, then with the lowest four counties linked to show that they are neighbours.</desc>

      <g class="ways-table" aria-hidden="true">
        <text class="ways-table__head" x="26" y="52">PHYSICIANS / 10K</text>
        <text x="26" y="92">6.0</text><text x="26" y="120">8.2</text>
        <text x="26" y="148">9.4</text><text x="26" y="176">11.1</text>
        <text x="26" y="204">18.0</text><text x="26" y="232">20.3</text>
        <text x="26" y="260">22.5</text><text x="26" y="288">24.1</text>
        <text x="26" y="316">25.6</text><text x="26" y="344">27.0</text>
        <text x="26" y="372">29.2</text><text x="26" y="400">31.4</text>
        <text class="ways-table__note" x="26" y="424">sorted, ascending</text>
      </g>

      <g class="ways-grid">
        <g class="ways-cell ways-cell--high"><rect x="226" y="48" width="104" height="104" rx="8"/><text x="278" y="106">18.0</text></g>
        <g class="ways-cell ways-cell--high"><rect x="340" y="48" width="104" height="104" rx="8"/><text x="392" y="106">22.5</text></g>
        <g class="ways-cell ways-cell--high"><rect x="454" y="48" width="104" height="104" rx="8"/><text x="506" y="106">25.6</text></g>
        <g class="ways-cell ways-cell--high"><rect x="568" y="48" width="104" height="104" rx="8"/><text x="620" y="106">31.4</text></g>

        <g class="ways-cell ways-cell--low"><rect x="226" y="162" width="104" height="104" rx="8"/><text x="278" y="220">9.4</text></g>
        <g class="ways-cell ways-cell--low"><rect x="340" y="162" width="104" height="104" rx="8"/><text x="392" y="220">11.1</text></g>
        <g class="ways-cell ways-cell--high"><rect x="454" y="162" width="104" height="104" rx="8"/><text x="506" y="220">24.1</text></g>
        <g class="ways-cell ways-cell--high"><rect x="568" y="162" width="104" height="104" rx="8"/><text x="620" y="220">29.2</text></g>

        <g class="ways-cell ways-cell--low"><rect x="226" y="276" width="104" height="104" rx="8"/><text x="278" y="334">6.0</text></g>
        <g class="ways-cell ways-cell--low"><rect x="340" y="276" width="104" height="104" rx="8"/><text x="392" y="334">8.2</text></g>
        <g class="ways-cell ways-cell--mid"><rect x="454" y="276" width="104" height="104" rx="8"/><text x="506" y="334">20.3</text></g>
        <g class="ways-cell ways-cell--high"><rect x="568" y="276" width="104" height="104" rx="8"/><text x="620" y="334">27.0</text></g>
      </g>

      <g class="ways-cluster" aria-hidden="true">
        <rect class="ways-ring" x="212" y="148" width="246" height="246" rx="18"/>
        <g class="ways-link">
          <path d="M335,170 V372"/><path d="M228,271 H442"/>
        </g>
        <text class="ways-cluster__label" x="335" y="418">four neighbours, all short of doctors</text>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>Sorted:</strong> a spreadsheet answers which counties have the fewest doctors. No map is needed for this.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Introduction to GIS lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/introduction-to-gis/"><span>02</span><strong>Slides</strong><small>Three decks</small></a>
  <a class="dock-empty" aria-disabled="true"><span>03</span><strong>Lab</strong><small>No lab in this lesson</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

Almost every dataset has a location in it somewhere. That is not the same as every question being a spatial one, and the difference is the first judgement this field asks of you. **When does a question actually need a map?**

The test is whether location, distance or adjacency does real work in the answer. When it does, mapping reveals something a table cannot. When it does not, a map is a decorative chart with better production values.

</div>

## Learning goals

By the end of this lesson, you can:

- Describe what GIS and GIScience are, and explain how the two differ.
- Place ArcGIS Pro in the wider ecosystem of GIS tools, and say what it is and is not good at.
- Identify spatial questions in your own field, and recognise questions that are not really spatial.
- Explain how a map's construction shapes what a reader concludes from it.
- Install ArcGIS Pro and confirm it launches and licenses correctly.

## Key concepts

<div class="concept-lead" markdown="1">

### GIS and GIScience are not the same thing

**A Geographic Information System is software and technical practice: the thing you open, the tools you run, the files you manage.** Geographic Information Science is the discipline underneath, concerned with how space can be represented at all, what is lost when you do, and what conclusions the representation will and will not support. You can be fluent in the software and still reach a wrong answer, because the interesting failures in this field are conceptual rather than technical. That is why this course keeps returning to why a tool works the way it does rather than only where its button is.

</div>

### Not every question is a spatial question

**"Which counties have the fewest physicians per capita" is answerable with a spreadsheet and a sort.** It becomes a spatial question when you ask whether those counties are clustered, whether they sit far from the nearest hospital, or whether the pattern follows a highway corridor.

That is exactly the progression in the demo above. The sorted list answers *which*. The map answers *where*. Adjacency answers *is this a region or a coincidence* — and only the third of those needed GIS at all.

### ArcGIS Pro is one tool among several

It is a desktop application with deep analytical toolboxes, strong cartographic output and an institutional licence most employers already hold. QGIS does much of the same work as free and open source software. PostGIS handles spatial data at a scale desktop software cannot. Python libraries such as GeoPandas suit repeatable, scriptable analysis.

This course teaches ArcGIS Pro because it is what you are most likely to meet professionally, but the concepts transfer, and the concepts are the part worth carrying.

### Every map is an argument

**A map is not a photograph of the world.** Somebody chose which features to include, how to classify the values, which colours to assign, which projection to use, and where to cut the frame. Each of those choices moves what a reader notices. The same county-level data, classified two different ways, can make a pattern look severe or negligible.

This is not a warning about dishonest mapmakers; it is a description of what mapmaking is. The obligation is to make the choices deliberately and to say what they were. Lesson 04 returns to this with the tools in hand.

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · The map as the analysis

Producing a map is not answering a question. State the question first, and be able to say what result would have changed your conclusion.

</div>

<div markdown="1">

### 02 · Default classification

The software has to pick something in order to draw your data at all. Its default is a starting point, not a finding.

</div>

<div markdown="1">

### 03 · Mapping what did not need mapping

If the answer is a ranking, publish the ranking. A map that adds no spatial insight costs the reader effort and returns nothing.

</div>

<div markdown="1">

### 04 · Skipping the licence check

Every semester, people install successfully and discover in week three that the licence never activated. Confirm it now.

</div>

</div>

## Practice task

Two parts.

1. Find a published map in your own field of interest, from a news outlet, an agency or a journal. Identify one choice its makers made in data, classification, symbology or framing, and describe how a different choice would have changed the impression it gives.
2. Write down one question from your field that is genuinely spatial, and one that sounds spatial but is not. Say what distinguishes them.

<div class="deliverable-card" markdown="1">

## Deliverable

- A screenshot showing ArcGIS Pro open, with your licence status visible.
- Five to eight sentences covering both parts of the practice task. Name the map you examined and link to it.

</div>

!!! tip "Do the install now"
    Licensing problems are slow to resolve because they usually involve someone else's IT department. Getting ArcGIS Pro launching cleanly this week protects the rest of the course.

## Slide decks {: #decks }

<div class="deck-cards" markdown="1">

<a href="../../slides/introduction-to-gis/" class="deck-card">
  <span>Deck</span>
  <strong>Introduction to GIS</strong>
  <small>What the field is, where it came from, and what it gets used for.</small>
</a>

<a href="../../slides/power-of-maps-map-types/" class="deck-card">
  <span>Deck</span>
  <strong>The Power of Maps</strong>
  <small>Map types, and what each kind of map is able to claim.</small>
</a>

<a href="../../slides/politics-ethics-of-mapping/" class="deck-card">
  <span>Deck</span>
  <strong>Politics &amp; Ethics of Mapping</strong>
  <small>Who draws the map, who is counted, and who is left off it.</small>
</a>

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://slcc.pressbooks.pub/maps/chapter/1-1/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 1.1 Introduction</strong>
  <small>A short orientation to the field and the vocabulary it uses.</small>
</a>

<a href="https://saylordotorg.github.io/text_essentials-of-geographic-information-systems/s05-introduction.html" class="reading-card">
  <span>Open text</span>
  <strong>Essentials of GIS · Ch. 1 Introduction</strong>
  <small>GIS and GIScience side by side, with the distinction drawn carefully.</small>
</a>

<a href="https://slcc.pressbooks.pub/maps/chapter/1-5/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 1.5 Map Fundamentals</strong>
  <small>The anatomy of a map, and what each element does for the reader.</small>
</a>

<a href="https://learn.arcgis.com/en/paths/try-arcgis-pro/" class="reading-card">
  <span>Tutorial path</span>
  <strong>Esri · Try ArcGIS Pro</strong>
  <small>Install, licence and first launch, for getting the software running this week.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the course</p>
  <a href="../01-getting-started/"><span>Next lesson</span><strong>Getting Started →</strong></a>
</aside>
