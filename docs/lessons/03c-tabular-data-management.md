---
title: Tabular Data Management
---

<section class="lesson-hero lesson-hero--tables" style="--hero-title-measure: 10ch; --hero-title-size: clamp(2.2rem, 5.4vw, 3.9rem)">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 04 · Tables &amp; Attribute Intelligence</p>
    <h1>Tabular Data Management</h1>
    <p class="lesson-deck">A field type is a decision. Choose it badly and the damage is silent, permanent, and discovered three lessons later.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>60–75</strong> minutes</span>
      <span><strong>Beginner+</strong> level</span>
      <span><strong>2 fields</strong> to calculate</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="text">
    <div class="spatial-demo__controls" aria-label="The same table under three field type choices">
      <button type="button" data-spatial-mode="text" aria-pressed="true"
        data-caption="&lt;strong&gt;Chosen well:&lt;/strong&gt; the identifier is text and the rate is a double. Nothing has been lost.">Correct</button>
      <button type="button" data-spatial-mode="intid" aria-pressed="false"
        data-caption="&lt;strong&gt;Identifier as a number:&lt;/strong&gt; two leading zeros are gone, and they do not come back. A join against a boundary layer will now match nothing at all.">ID as integer</button>
      <button type="button" data-spatial-mode="intrate" aria-pressed="false"
        data-caption="&lt;strong&gt;Rate into an integer field:&lt;/strong&gt; every value is truncated to a whole number. The arithmetic ran, the field populated, and the detail is gone.">Rate as integer</button>
    </div>
    <svg class="spatial-demo__map td-demo" viewBox="0 0 700 430" role="img" aria-labelledby="td-title td-desc">
      <title id="td-title">One table under three field type choices</title>
      <desc id="td-desc">Four county records. Storing the FIPS identifier as an integer drops its leading zeros; calculating a density into an integer field truncates every value.</desc>

      <g class="td-head">
        <text x="40" y="44">FIPS</text>
        <text class="td-end" x="366" y="44">POPULATION</text>
        <text class="td-end" x="500" y="44">AREA KM²</text>
        <text class="td-end" x="664" y="44">DENSITY</text>
      </g>
      <g class="td-type">
        <text class="td-t td-t-fips-a" x="40" y="68">Text</text>
        <text class="td-t td-t-fips-b" x="40" y="68">Long integer</text>
        <text class="td-end td-t td-t-den-a" x="664" y="68">Double</text>
        <text class="td-end td-t td-t-den-b" x="664" y="68">Long integer</text>
      </g>
      <path class="td-rule" d="M26,82 H674"/>

      <g class="td-row">
        <rect x="26" y="96" width="648" height="52" rx="7"/>
        <text class="td-fips td-fips--text" x="44" y="128">01001</text>
        <text class="td-fips td-fips--int td-damaged" x="44" y="128">1001</text>
        <text class="td-end" x="366" y="128">58,805</text>
        <text class="td-end" x="500" y="128">1,540</text>
        <text class="td-end td-den td-den--dbl" x="664" y="128">38.18</text>
        <text class="td-end td-den td-den--int td-damaged" x="664" y="128">38</text>
      </g>
      <g class="td-row">
        <rect x="26" y="156" width="648" height="52" rx="7"/>
        <text class="td-fips td-fips--text" x="44" y="188">06075</text>
        <text class="td-fips td-fips--int td-damaged" x="44" y="188">6075</text>
        <text class="td-end" x="366" y="188">873,965</text>
        <text class="td-end" x="500" y="188">121</text>
        <text class="td-end td-den td-den--dbl" x="664" y="188">7,222.02</text>
        <text class="td-end td-den td-den--int td-damaged" x="664" y="188">7,222</text>
      </g>
      <g class="td-row">
        <rect x="26" y="216" width="648" height="52" rx="7"/>
        <text class="td-fips td-fips--text" x="44" y="248">36061</text>
        <text class="td-fips td-fips--int" x="44" y="248">36061</text>
        <text class="td-end" x="366" y="248">1,694,251</text>
        <text class="td-end" x="500" y="248">59</text>
        <text class="td-end td-den td-den--dbl" x="664" y="248">28,715.27</text>
        <text class="td-end td-den td-den--int td-damaged" x="664" y="248">28,715</text>
      </g>
      <g class="td-row">
        <rect x="26" y="276" width="648" height="52" rx="7"/>
        <text class="td-fips td-fips--text" x="44" y="308">48201</text>
        <text class="td-fips td-fips--int" x="44" y="308">48201</text>
        <text class="td-end" x="366" y="308">4,731,145</text>
        <text class="td-end" x="500" y="308">4,602</text>
        <text class="td-end td-den td-den--dbl" x="664" y="308">1,028.06</text>
        <text class="td-end td-den td-den--int td-damaged" x="664" y="308">1,028</text>
      </g>

      <g class="td-verdict">
        <text class="td-verdict__ok td-v--a" x="26" y="364">Alabama 01001 and San Francisco 06075 keep their leading zero.</text>
        <text class="td-verdict__bad td-v--b" x="26" y="364">Two identifiers have silently become different identifiers.</text>
        <text class="td-verdict__bad td-v--c" x="26" y="364">Every density is now a whole number, and the pattern has flattened.</text>
        <text class="td-verdict__note" x="26" y="394">you will never add two FIPS codes together, so nothing is lost by storing them as text</text>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>Chosen well:</strong> the identifier is text and the rate is a double. Nothing has been lost.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Tabular Data Management lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/tabular-data-management/"><span>02</span><strong>Slides</strong><small>Visual walkthrough</small></a>
  <a href="../../labs/attribute-table-and-field/"><span>03</span><strong>Lab</strong><small>Fields &amp; calculation</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

Field types feel like paperwork. They are the single most consequential set of small decisions in this course, because nothing warns you when one is wrong: the import succeeds, the table fills, the map draws, and the failure appears two lessons later as a join that matches nothing.

**What is this column actually for — a quantity, or a label made of digits?**

</div>

## Learning goals

By the end of this lesson, you can:

- Turn a table of coordinates into a permanent point feature class.
- Choose an appropriate field type, and explain what goes wrong when you choose badly.
- Populate a field with the Field Calculator, including conditional logic.
- Recognise the ways a CSV can be damaged before it ever reaches ArcGIS Pro.

## Key concepts

<div class="concept-lead" markdown="1">

### A table with coordinates is a map waiting to happen

**If a spreadsheet holds X and Y columns, ArcGIS Pro can plot it directly.** The critical detail is that plotting produces a temporary *event layer*, not a dataset. It draws, it can be symbolized, and it disappears when the source table moves or the project closes. Export it to a feature class in your geodatabase and it becomes real: independently stored, editable, and usable by every geoprocessing tool.

You must also tell the software what the coordinates mean. Latitude and longitude values are not self-describing, and choosing the wrong spatial reference at import puts your points confidently in the wrong hemisphere.

</div>

### Field types are a decision, not a formality

The type controls what can be stored, how values sort, what calculations are possible, and how much space is used.

| Type | Use for | Trap |
| --- | --- | --- |
| **Text** | Names, codes, identifiers | Sorts alphabetically, so "10" comes before "9" |
| **Short / Long integer** | Whole numbers, counts | Cannot hold decimals; division truncates |
| **Float / Double** | Measurements, rates, percentages | Small rounding differences are normal |
| **Date** | Dates and times | Requires a real date, not a string that looks like one |

### Identifiers belong in text fields, always

**A FIPS code, a ZIP code or a parcel number is a label made of digits, not a quantity.** Stored as an integer, `06075` becomes `6075` and the leading zero is gone permanently — exactly what the demo above does to two of its four rows.

You will never add two ZIP codes together, so nothing is lost by storing them as text, and a great deal is preserved.

### The Field Calculator operates on every row at once

It can copy values, do arithmetic across fields, manipulate strings, and apply conditional logic through Python expressions. Two habits make it safe: add a new field rather than overwriting an existing one, so the original survives a wrong expression; and check whether a selection is active, because the calculation applies only to selected rows.

Deriving a rate is the standard case, and it carries the standard trap:

```python
!POPULATION! / !AREA_SQKM!
```

If the target field is an integer, every result is truncated to a whole number. Store it as Double.

### Most CSV problems are inflicted before import

Excel is the usual culprit: it strips leading zeros from identifiers, reformats anything resembling a date, and converts long numbers to scientific notation. Once saved, the damage is in the file. If you must inspect a CSV, open it in a text editor, or open it in Excel and close it without saving.

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · Stopping at the event layer

If you have not exported, you do not have data. Close the project and it is gone.

</div>

<div markdown="1">

### 02 · Identifiers as numbers

Leading zeros do not come back, and the join that needed them fails without an error.

</div>

<div markdown="1">

### 03 · A rate in an integer field

Every value becomes whole, the variation collapses, and the map looks plausible.

</div>

<div markdown="1">

### 04 · Assuming X is latitude

X is longitude, Y is latitude. Swapping them puts North American data in the Indian Ocean.

</div>

</div>

## Practice task

Starting from a CSV containing coordinates and at least two numeric columns:

1. Import it, assign the correct spatial reference, and plot the points.
2. Export to a permanent feature class in your geodatabase.
3. Add a Double field and calculate a rate from two existing columns.
4. Add a Text field and populate it with a category label using conditional logic — high, medium or low against thresholds you choose and state.

<div class="deliverable-card" markdown="1">

## Deliverable

- A screenshot of the attribute table showing both new fields populated, with the record count visible.
- The two Field Calculator expressions you used.
- Two to three sentences justifying the field type you chose for each new field, and the thresholds you set for the category.

</div>

!!! note "Do not re-save a CSV in Excel"
    It changes field types silently. The consequences usually appear later, during a join, when the cause is hardest to find.

## Labs {: #labs }

<div class="lab-cards" markdown="1">

<a href="../../labs/attribute-table-and-field/" class="lab-card">
  <span>Lab</span>
  <strong>Attribute Table and Field</strong>
  <small>CSV to point feature class, then adding and calculating fields.</small>
</a>

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://mlpp.pressbooks.pub/flexiblegisworkbookpro/chapter/2-2-create-point-features-from-a-table/" class="reading-card">
  <span>Workbook</span>
  <strong>Flexible GIS Workbook · 2.2 Points from a Table</strong>
  <small>Plotting XY data and exporting it to something permanent.</small>
</a>

<a href="https://slcc.pressbooks.pub/maps/chapter/6-2/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 6.2 Descriptions and Summaries</strong>
  <small>What attribute tables hold and how values are summarised.</small>
</a>

<a href="https://mlpp.pressbooks.pub/flexiblegisworkbookpro/part/work-with-data/" class="reading-card">
  <span>Workbook</span>
  <strong>Flexible GIS Workbook · Ch. 3 Work With Data</strong>
  <small>Fields, calculation and editing, worked through end to end.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the course</p>
  <a href="../04-symbology-map-design/"><span>Next collection</span><strong>Symbology &amp; Map Design →</strong></a>
</aside>
