---
title: Selection by Attribute
---

<section class="lesson-hero lesson-hero--tables">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 04 · Tables &amp; Attribute Intelligence</p>
    <h1>Selection by Attribute</h1>
    <p class="lesson-deck">Asking a question of the table, in a language that is never rude and never forgiving.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>60</strong> minutes</span>
      <span><strong>Beginner+</strong> level</span>
      <span><strong>3 queries</strong> to write</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="single">
    <div class="spatial-demo__controls" aria-label="Four queries against the same eight rows">
      <button type="button" data-spatial-mode="single" aria-pressed="true"
        data-caption="&lt;strong&gt;One condition:&lt;/strong&gt; four rows match. Everything that follows is a change to this number.">One</button>
      <button type="button" data-spatial-mode="and" aria-pressed="false"
        data-caption="&lt;strong&gt;AND narrows:&lt;/strong&gt; both conditions must be true of the same row, so adding one can only ever take rows away.">AND</button>
      <button type="button" data-spatial-mode="or" aria-pressed="false"
        data-caption="&lt;strong&gt;OR widens:&lt;/strong&gt; any one condition is enough, so adding one can only ever bring rows in.">OR</button>
      <button type="button" data-spatial-mode="null" aria-pressed="false"
        data-caption="&lt;strong&gt;Null is not zero:&lt;/strong&gt; row 7 is excluded by POPULATION &gt; 0 and by POPULATION &lt;= 0 alike. It has to be asked for by name.">NULL</button>
    </div>
    <svg class="spatial-demo__map q-demo" viewBox="0 0 700 430" role="img" aria-labelledby="q-title q-desc">
      <title id="q-title">Four queries run against the same eight rows</title>
      <desc id="q-desc">An attribute table of eight parcels. A single condition matches four rows, AND narrows it to two, OR widens it to six, and a null test matches one.</desc>

      <g class="q-head">
        <text x="44" y="46">BOROUGH</text>
        <text x="250" y="46">LANDUSE</text>
        <text class="q-num" x="650" y="46">POPULATION</text>
      </g>

      <g class="q-row is-single is-and is-or">
        <rect x="26" y="58" width="648" height="34" rx="6"/>
        <text x="44" y="81">Queens</text><text x="250" y="81">Residential</text>
        <text class="q-num" x="650" y="81">142,000</text>
      </g>
      <g class="q-row is-single is-or">
        <rect x="26" y="98" width="648" height="34" rx="6"/>
        <text x="44" y="121">Queens</text><text x="250" y="121">Mixed</text>
        <text class="q-num" x="650" y="121">88,500</text>
      </g>
      <g class="q-row is-single is-or">
        <rect x="26" y="138" width="648" height="34" rx="6"/>
        <text x="44" y="161">Queens</text><text x="250" y="161">Industrial</text>
        <text class="q-num" x="650" y="161">12,300</text>
      </g>
      <g class="q-row is-or">
        <rect x="26" y="178" width="648" height="34" rx="6"/>
        <text x="44" y="201">Brooklyn</text><text x="250" y="201">Residential</text>
        <text class="q-num" x="650" y="201">210,400</text>
      </g>
      <g class="q-row">
        <rect x="26" y="218" width="648" height="34" rx="6"/>
        <text x="44" y="241">Brooklyn</text><text x="250" y="241">Mixed</text>
        <text class="q-num" x="650" y="241">96,000</text>
      </g>
      <g class="q-row is-or">
        <rect x="26" y="258" width="648" height="34" rx="6"/>
        <text x="44" y="281">Bronx</text><text x="250" y="281">Residential</text>
        <text class="q-num" x="650" y="281">75,900</text>
      </g>
      <g class="q-row is-single is-and is-or is-null">
        <rect x="26" y="298" width="648" height="34" rx="6"/>
        <text x="44" y="321">Queens</text><text x="250" y="321">Residential</text>
        <text class="q-num q-null" x="650" y="321">&lt;null&gt;</text>
      </g>
      <g class="q-row">
        <rect x="26" y="338" width="648" height="34" rx="6"/>
        <text x="44" y="361">Bronx</text><text x="250" y="361">Industrial</text>
        <text class="q-num" x="650" y="361">31,200</text>
      </g>

      <g class="q-sql" aria-hidden="true">
        <text class="q-sql__text q-sql--single" x="26" y="406">BOROUGH = 'Queens'</text>
        <text class="q-sql__text q-sql--and" x="26" y="406">BOROUGH = 'Queens' AND LANDUSE = 'Residential'</text>
        <text class="q-sql__text q-sql--or" x="26" y="406">BOROUGH = 'Queens' OR LANDUSE = 'Residential'</text>
        <text class="q-sql__text q-sql--null" x="26" y="406">POPULATION IS NULL</text>
        <text class="q-count q-sql--single" x="674" y="406">4 of 8</text>
        <text class="q-count q-sql--and" x="674" y="406">2 of 8</text>
        <text class="q-count q-sql--or" x="674" y="406">6 of 8</text>
        <text class="q-count q-sql--null" x="674" y="406">1 of 8</text>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>One condition:</strong> four rows match. Everything that follows is a change to this number.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Selection by Attribute lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/select-by-attributes/"><span>02</span><strong>Slides</strong><small>Visual walkthrough</small></a>
  <a href="../../labs/select-by-attributes/"><span>03</span><strong>Lab</strong><small>Query a real table</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

A selection is a sentence you have written about your data, and the software will honour it exactly. When the result is wrong, the sentence was wrong — which makes this one of the few places in GIS where the error is always findable.

**If a query returns nothing, what did you actually ask for?**

</div>

## Learning goals

By the end of this lesson, you can:

- Write SQL queries against an attribute table, including compound conditions.
- Predict what `AND` and `OR` will return before running them.
- Handle null values, which do not behave like other values.
- Explain why a selection must be exported before it becomes a dataset.
- Debug a query that returns nothing, or returns everything.

## Key concepts

<div class="concept-lead" markdown="1">

### This is a question about the table, not the map

**The geometry is irrelevant to the operation.** You are filtering rows, and the map redraws to show which features those rows belong to. Everything that is true of querying a spreadsheet or a database is true here, which also means everything you already know about spreadsheets transfers.

</div>

### SQL is aggressively literal

Three rules cover most of what goes wrong.

- Text values need quotes; numbers do not. `BOROUGH = 'Queens'` and `POPULATION > 100000`.
- Text comparison is exact, including case, spacing and punctuation. `'Queens'` does not match `'queens'` or `'Queens '`.
- Field names come from the table, not from the column header on screen. An alias can differ from the real field name.

### AND narrows, OR widens

**Confusing them is the most common error in this lesson, and the demo above is the proof.** The same four-row result becomes two rows with `AND` and six rows with `OR`, from the same two conditions.

`AND` requires every condition to be true of the same row, so each addition can only reduce the result. `OR` requires any one condition, so each addition can only increase it. If a query returns nothing, suspect an `AND` that cannot be satisfied. If it returns everything, suspect an `OR` that is trivially true.

Compound conditions need parentheses to be unambiguous:

```sql
BOROUGH = 'Queens' AND (LANDUSE = 'Residential' OR LANDUSE = 'Mixed')
```

Without the parentheses the logic changes meaning entirely.

### Null is not zero, and not an empty string

Null means no value was recorded. It is not equal to anything, and it is not unequal to anything either, so `POPULATION > 0` silently excludes every null row and `POPULATION <= 0` excludes them too. Test for them explicitly with `IS NULL` or `IS NOT NULL`.

When a count comes up short and the arithmetic seems right, nulls are the usual explanation.

### A selection is not a dataset

Selected features are highlighted state in the current session. Clear the selection and it is gone. To turn a question into something you can analyse, symbolize or share, use **Export Features** to write the selected rows to a new feature class. This is the same principle as the temporary join in Lesson 03d: the working state and the persisted result are different things.

## When a query returns nothing

Work down the list in order.

1. Remove all conditions but one. If that returns rows, add the others back one at a time until it breaks.
2. Check for `AND` where you meant `OR`.
3. Check the field's actual values. Sort the column and look. Trailing spaces and inconsistent capitalisation are common in hand-entered data.
4. Check the field type. A number stored as text will not answer a numeric comparison.
5. Check for nulls.

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · Comparing to a value that is not there

Look at the column before writing the query, not after it returns zero.

</div>

<div markdown="1">

### 02 · A selection left active

Later tools operate on the selection rather than the whole layer. Sometimes exactly what you wanted; often a source of baffling results.

</div>

<div markdown="1">

### 03 · Exporting without checking

Confirm the number of exported features matches the number selected.

</div>

<div markdown="1">

### 04 · Treating null as zero

A null population is not a population of nobody. Decide what it means before you map it.

</div>

</div>

## Practice task

Build three queries against one layer:

1. A single-condition query.
2. A compound query using `AND`, and the same conditions using `OR`. Record both counts and explain the difference.
3. A query that isolates rows with null values in a field of your choice.

Export the result of the compound `AND` query to a new feature class.

<div class="deliverable-card" markdown="1">

## Deliverable

- Each of the three queries as text, with the feature count each returned.
- Two to three sentences explaining why the `AND` and `OR` counts differ, referring to the specific data.
- A screenshot of the exported layer's attribute table, with the record count visible.

</div>

## Labs {: #labs }

<div class="lab-cards" markdown="1">

<a href="../../labs/select-by-attributes/" class="lab-card">
  <span>Lab</span>
  <strong>Select by Attributes</strong>
  <small>Writing and debugging queries against a real attribute table.</small>
</a>

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://slcc.pressbooks.pub/maps/chapter/6-3/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 6.3 Searches and Queries</strong>
  <small>Query logic across attribute and spatial selection, with worked examples.</small>
</a>

<a href="https://pro.arcgis.com/en/pro-app/latest/help/mapping/navigation/sql-reference-for-elements-used-in-query-expressions.htm" class="reading-card">
  <span>Tool reference</span>
  <strong>ArcGIS Pro · SQL Reference</strong>
  <small>What the query language accepts, including operators and date handling.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the collection</p>
  <a href="../03c-tabular-data-management/"><span>Next lesson</span><strong>Tabular Data Management →</strong></a>
</aside>
