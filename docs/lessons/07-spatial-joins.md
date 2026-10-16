---
title: Spatial Join
---

<section class="lesson-hero lesson-hero--relationships">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 06 · Spatial Relationships & Joins</p>
    <h1>Spatial Join</h1>
    <p class="lesson-deck">Move information through location—then decide whether that location tells a convincing story.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>60–75</strong> minutes</span>
      <span><strong>Intermediate</strong> level</span>
      <span><strong>2 outputs</strong> to compare</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="intersect">
    <div class="spatial-demo__controls" aria-label="Try three spatial join questions">
      <button type="button" data-spatial-mode="intersect" aria-pressed="true">Inside</button>
      <button type="button" data-spatial-mode="closest" aria-pressed="false">Closest</button>
      <button type="button" data-spatial-mode="reverse" aria-pressed="false">Count</button>
    </div>
    <svg class="spatial-demo__map" viewBox="0 0 700 430" role="img" aria-labelledby="join-map-title join-map-description">
      <title id="join-map-title">Interactive conceptual map of spatial joins</title>
      <desc id="join-map-description">Points represent schools and colored polygons represent districts. The controls reveal different spatial relationships.</desc>
      <defs>
        <pattern id="join-grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M 36 0 L 0 0 0 36" fill="none" stroke="currentColor" stroke-opacity=".09" stroke-width="1"/>
        </pattern>
      </defs>
      <rect class="join-map__grid" width="700" height="430" fill="url(#join-grid)" rx="24"/>
      <g class="district-polygons">
        <path class="district district--a" d="M58,72 C132,40 226,50 288,102 L270,202 C216,230 126,218 66,176 Z"/>
        <path class="district district--b" d="M306,62 C398,34 538,56 628,116 L610,220 C508,252 400,232 314,180 Z"/>
        <path class="district district--c" d="M122,238 C232,204 374,224 462,286 L420,384 C316,414 192,390 106,328 Z"/>
      </g>
      <g class="join-links join-links--intersect" aria-hidden="true">
        <path d="M126,126 L170,142"/><path d="M238,166 L210,148"/><path d="M408,126 L470,138"/><path d="M542,178 L504,150"/><path d="M286,310 L330,304"/>
      </g>
      <g class="join-links join-links--closest" aria-hidden="true">
        <path d="M126,126 L96,93"/><path d="M238,166 L267,193"/><path d="M408,126 L361,91"/><path d="M542,178 L608,214"/><path d="M286,310 L216,354"/>
      </g>
      <g class="district-labels" aria-hidden="true">
        <text x="164" y="142">A</text><text x="466" y="146">B</text><text x="286" y="318">C</text>
      </g>
      <g class="reverse-counts" aria-hidden="true">
        <circle cx="164" cy="142" r="30"/><text x="164" y="151">2</text>
        <circle cx="466" cy="146" r="30"/><text x="466" y="155">2</text>
        <circle cx="286" cy="318" r="30"/><text x="286" y="327">1</text>
      </g>
      <g class="school-points" aria-hidden="true">
        <circle cx="126" cy="126" r="10"/><circle cx="238" cy="166" r="10"/><circle cx="408" cy="126" r="10"/><circle cx="542" cy="178" r="10"/><circle cx="286" cy="310" r="10"/>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>Inside:</strong> each school receives the district it falls within.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Spatial Join lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts & choices</small></a>
  <a href="../../slides/spatial-join/"><span>02</span><strong>Slides</strong><small>Visual walkthrough</small></a>
  <a href="../../labs/spatial-join/"><span>03</span><strong>Lab</strong><small>Schools & districts</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

A spatial join can look like a mechanical operation: choose two layers, select a relationship, run the tool. The real work happens one step earlier. **What does it mean for these features to belong together?**

This lesson treats the join as an argument. You will define a spatial relationship, inspect what it includes and excludes, and decide whether the result answers the question you meant to ask.

</div>

## Learning goals

By the end of this lesson, you can:

- Explain how a spatial join differs from a table join, and when each is the right tool.
- Choose a match option that matches the question being asked.
- Set a merge rule when several features match one, and justify the choice.
- Read an output table for unmatched records and implausible match distances.

## Key concepts

<div class="concept-lead" markdown="1">

### Location becomes the key

**A spatial join transfers attributes using location instead of a shared field.** Lesson 03d joined a health spreadsheet to counties because both held a county name. A spatial join needs no such field: it matches features because of where they are. This is what makes it powerful, and also what makes it quietly risky. Every feature may be assigned something whether or not that assignment is meaningful.

</div>

### Direction changes the answer

**Target and join layer are not interchangeable.** The target layer keeps its geometry and gains columns. The join layer contributes attributes and is otherwise discarded.

<div class="direction-comparison" markdown="1">

<div markdown="1">

#### Schools → districts

Schools remain as points. Each school gains the name and attributes of its district. The result has one row per school.

</div>

<div markdown="1">

#### Districts → schools

Districts remain as polygons. Each district can gain a school count or a summary of school attributes. The result has one row per district.

</div>

</div>

Decide which features you want to end up with before you open the tool.

### The match option is an analytical decision

| Match option | Matches when | Use for |
| --- | --- | --- |
| **Intersect** | Features share any space | The general case for point-in-polygon |
| **Within a distance** | Features fall inside a stated radius | Access and proximity |
| **Closest** | The nearest feature, at any distance | When every target must get a value |
| **Contains / Within** | One feature wholly encloses the other | Strict containment |

!!! warning "Closest always answers—even when it should not"
    Intersect leaves unmatched records wherever nothing overlaps, which is honest but produces nulls you must handle. Closest always finds something. It can match a rural clinic to a hospital 200 kilometres away and call it “nearest.” Always output the distance field, then examine its distribution.

### Many matches need a rule

Joining crime points to neighbourhoods means many points per polygon. The tool must reduce those matches to one value per output row.

- **Count** answers *how many?*
- **Sum** answers *how much in total?*
- **Mean** answers *what is typical?*—but only when an average is meaningful.

The mean of rates from areas with very different populations is not a combined rate. The mean of a category code is nonsense. Choose the rule by asking what the resulting number is supposed to mean.

!!! info "One-to-one or one-to-many?"
    A one-to-one join produces a single row per target feature with the merge rule applied. A one-to-many join produces one row per matching pair, so the output can have far more rows than the target. Use it when you need every pairing, and verify the record count.

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · Reversed direction

The commonest error. The output often looks reasonable, so it survives review.

</div>

<div markdown="1">

### 02 · Invisible distance

Using Closest without a distance field makes good and absurd matches look identical.

</div>

<div markdown="1">

### 03 · Default merge rule

The software default is not an answer to your analytical question.

</div>

<div markdown="1">

### 04 · Null equals zero

An unmatched polygon has no data; it does not have zero. Mapping them identically is a real error.

</div>

</div>

## Practice task

Using one target layer and one join layer:

1. Run a spatial join with the **Intersect** match option. Record the output row count and the number of unmatched features.
2. Run the same join with **Closest**, outputting the distance field. Record the row count and the minimum, maximum, and median match distance.
3. Where several features match one, run the join twice with two different merge rules—such as Count and Mean—and compare.

<div class="deliverable-card" markdown="1">

## Your deliverable

- Both output attribute tables, with record counts visible.
- The distance statistics from the Closest join, plus one or two sentences identifying any implausible match and why.
- Three or four sentences explaining which match option you would use for your question, and what the two merge rules revealed differently.

[Open the Spatial Join lab →](../labs/spatial-join.md){ .atlas-button .atlas-button--primary }

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://giscommons.org/analysis/" class="reading-card">
  <span>Open text</span>
  <strong>GIS Commons · Spatial Analysis</strong>
  <small>Connect overlay and proximity tools to the questions they are designed to answer.</small>
</a>

<a href="https://pro.arcgis.com/en/pro-app/latest/tool-reference/analysis/spatial-join.htm" class="reading-card">
  <span>Tool reference</span>
  <strong>ArcGIS Pro · Spatial Join</strong>
  <small>Review relationship types, field mapping, join operations, and distance behavior.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the collection</p>
  <a href="../08-spatial-auto/"><span>Next lesson</span><strong>Spatial Autocorrelation →</strong></a>
</aside>
