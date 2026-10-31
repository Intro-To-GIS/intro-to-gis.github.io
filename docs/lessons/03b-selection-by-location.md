---
title: Selection by Location
---

<section class="lesson-hero lesson-hero--relationships" style="--hero-title-measure: 9ch; --hero-title-size: clamp(2.2rem, 6.1vw, 4.4rem)">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 06 · Spatial Relationships &amp; Joins</p>
    <h1>Selection by Location</h1>
    <p class="lesson-deck">Fourteen parcels, one floodplain, three defensible answers to "which parcels are affected?"</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>45–60</strong> minutes</span>
      <span><strong>Beginner+</strong> level</span>
      <span><strong>3 counts</strong> to compare</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="intersect">
    <div class="spatial-demo__controls" aria-label="Three spatial relationships against one floodplain">
      <button type="button" data-spatial-mode="intersect" aria-pressed="true"
        data-caption="&lt;strong&gt;Intersect:&lt;/strong&gt; any shared space counts, so three parcels that only straddle the edge are included. This is the loosest reading of &lsquo;affected&rsquo;.">Intersect</button>
      <button type="button" data-spatial-mode="within" aria-pressed="false"
        data-caption="&lt;strong&gt;Within:&lt;/strong&gt; wholly inside, and nothing else. The three straddlers drop out, and the count falls from seven to four.">Within</button>
      <button type="button" data-spatial-mode="distance" aria-pressed="false"
        data-caption="&lt;strong&gt;Within 500 m:&lt;/strong&gt; a real-world measurement, so this is the relationship that needs a projected coordinate system. In degrees it would be meaningless.">Within 500 m</button>
    </div>
    <svg class="spatial-demo__map loc-demo" viewBox="0 0 700 430" role="img" aria-labelledby="loc-title loc-desc">
      <title id="loc-title">Parcels against a floodplain under three spatial relationships</title>
      <desc id="loc-desc">Fourteen parcels and one floodplain. Intersect selects seven, Within selects the four that fall wholly inside, and a 500 metre search selects eleven.</desc>

      <g class="loc-buffer" aria-hidden="true">
        <path d="M168,96 C295,44 458,70 548,132 C628,188 602,302 490,342 C382,380 230,360 172,298 C118,242 106,140 168,96 Z"/>
      </g>
      <path class="loc-flood" d="M190,120 C300,80 430,100 510,150 C580,195 560,285 470,315 C380,345 250,330 200,280 C155,235 140,160 190,120 Z"/>
      <text class="loc-label" x="350" y="222">floodplain</text>

      <g class="loc-parcels">
        <rect class="loc-parcel is-int is-win is-dist" x="162" y="172" width="34" height="24" rx="3"/>
        <rect class="loc-parcel is-int is-win is-dist" x="516" y="208" width="34" height="24" rx="3"/>
        <rect class="loc-parcel is-int is-win is-dist" x="330" y="286" width="34" height="24" rx="3"/>
        <rect class="loc-parcel is-int is-win is-dist" x="354" y="106" width="34" height="24" rx="3"/>

        <rect class="loc-parcel is-int is-dist" x="132" y="130" width="34" height="24" rx="3"/>
        <rect class="loc-parcel is-int is-dist" x="546" y="250" width="34" height="24" rx="3"/>
        <rect class="loc-parcel is-int is-dist" x="300" y="328" width="34" height="24" rx="3"/>

        <rect class="loc-parcel is-dist" x="546" y="166" width="34" height="24" rx="3"/>
        <rect class="loc-parcel is-dist" x="240" y="76" width="34" height="24" rx="3"/>
        <rect class="loc-parcel is-dist" x="354" y="334" width="34" height="24" rx="3"/>
        <rect class="loc-parcel is-dist" x="420" y="328" width="34" height="24" rx="3"/>

        <rect class="loc-parcel" x="30" y="40" width="34" height="24" rx="3"/>
        <rect class="loc-parcel" x="648" y="376" width="34" height="24" rx="3"/>
        <rect class="loc-parcel" x="432" y="40" width="34" height="24" rx="3"/>
      </g>

      <g class="loc-score">
        <text class="loc-score__n loc-s--intersect" x="40" y="400">7</text>
        <text class="loc-score__n loc-s--within" x="40" y="400">4</text>
        <text class="loc-score__n loc-s--distance" x="40" y="400">11</text>
        <text class="loc-score__of" x="92" y="400">of 14 parcels selected</text>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>Intersect:</strong> any shared space counts, so three parcels that only straddle the edge are included. This is the loosest reading of ‘affected’.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Selection by Location lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/select-by-location/"><span>02</span><strong>Slides</strong><small>Visual walkthrough</small></a>
  <a href="../../labs/select-by-location/"><span>03</span><strong>Lab</strong><small>Chicago robbery points</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

Seven, four or eleven — all three are correct answers to "how many parcels are affected by the floodplain", and they differ by a factor of nearly three.

The tool cannot choose for you, because the choice is not a technical one. **What are you going to claim the word "affected" means?**

</div>

## Learning goals

By the end of this lesson, you can:

- Choose the spatial relationship that matches the question you are asking.
- Explain the difference between Intersect, Within, Contains and Within a Distance, and predict how their results differ.
- Recognise when a distance-based selection is being distorted by the coordinate system.
- Combine attribute and spatial selection in a single workflow.

## Key concepts

<div class="concept-lead" markdown="1">

### This asks where, not what

**Instead of filtering on values in a table, you filter on the geometric relationship between two layers.** The question always has the same shape: select features from *this* layer that have *this relationship* to features in *that* layer.

Getting the direction right matters as much as getting the relationship right. "Parcels that intersect the floodplain" and "floodplain polygons that intersect parcels" are different questions with different answers and different row counts. Decide which layer you want features **from** before you open the tool.

</div>

### The relationships are not interchangeable

| Relationship | Selects features that | Typical use |
| --- | --- | --- |
| **Intersect** | Share any space at all, including a touching edge | The general-purpose default |
| **Within** | Fall entirely inside another feature | Schools inside a district |
| **Contains** | Entirely enclose another feature | Districts holding at least one school |
| **Within a distance** | Fall within a stated distance | Anything about proximity or access |

Intersect is the loosest and will include features that merely graze the boundary. When a parcel touches a floodplain at one corner, Intersect counts it and Within does not. Which is correct depends entirely on what you are going to claim, so decide what "affected" means before you choose.

### Within a Distance is where the coordinate system reappears

**A search distance is a real-world measurement**, so it depends on the data being in a projected coordinate system with linear units. Run a one-mile selection on data stored in degrees and the result will be wrong in a way that looks entirely plausible.

This is the same failure described in Lesson 02, and it surfaces here more often than anywhere else in the course, because proximity questions are so common.

### Spatial and attribute selection compose

Real questions usually need both: not "schools near a park" but "public elementary schools within half a mile of a park larger than two acres".

Selecting by attribute first, exporting, then selecting by location against that subset is usually clearer than trying to express everything at once, and it leaves an auditable trail of intermediate layers.

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · Selecting from the wrong layer

Check the top of the dialog. This is the single most frequent error with this tool.

</div>

<div markdown="1">

### 02 · Intersect where the claim says "inside"

A feature touching a boundary is included by Intersect. If your sentence says inside, use Within.

</div>

<div markdown="1">

### 03 · A distance on unprojected data

Check the units before you type a number into the search distance box.

</div>

<div markdown="1">

### 04 · Reporting a count unchecked

If a proximity selection returns nearly every feature, the distance is too large for the question to mean anything.

</div>

</div>

## Practice task

Using a target layer and a reference layer:

1. Run the same selection twice, once with Intersect and once with Within. Record both counts.
2. Run a Within a Distance selection at two different distances. Record both counts.
3. Combine an attribute selection with a spatial one to answer a question you write yourself, in one sentence, before you start.

Export the result of the combined query.

<div class="deliverable-card" markdown="1">

## Deliverable

- The counts from the Intersect and Within comparison, and two to three sentences explaining which features account for the difference.
- The counts at both search distances.
- Your written question, and a screenshot of the exported result.

</div>

!!! note "Attributes against location"
    Select By Attributes asks questions about values in a table. Select By Location asks questions about where things are relative to each other. Real work almost always uses both.

## Labs {: #labs }

<div class="lab-cards" markdown="1">

<a href="../../labs/select-by-location/" class="lab-card">
  <span>Lab</span>
  <strong>Select by Location</strong>
  <small>Chicago robbery points against park boundaries and police stations.</small>
</a>

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://slcc.pressbooks.pub/maps/chapter/6-3/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 6.3 Searches and Queries</strong>
  <small>Attribute and spatial selection side by side.</small>
</a>

<a href="https://pro.arcgis.com/en/pro-app/latest/tool-reference/analysis/select-layer-by-location.htm" class="reading-card">
  <span>Tool reference</span>
  <strong>ArcGIS Pro · Select Layer By Location</strong>
  <small>Every relationship the tool offers, defined precisely.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the collection</p>
  <a href="../07-spatial-joins/"><span>Next lesson</span><strong>Spatial Join →</strong></a>
</aside>
