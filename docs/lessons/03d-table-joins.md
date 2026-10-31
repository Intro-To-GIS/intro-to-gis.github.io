---
title: Table Joins
---

<section class="lesson-hero lesson-hero--relationships">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 06 · Spatial Relationships &amp; Joins</p>
    <h1>Table Joins</h1>
    <p class="lesson-deck">Most of the interesting data in the world has no geometry. A join is how it reaches the map—and how it quietly fails to.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>60–75</strong> minutes</span>
      <span><strong>Beginner+</strong> level</span>
      <span><strong>1 join</strong> to break on purpose</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="names">
    <div class="spatial-demo__controls" aria-label="One join, three outcomes">
      <button type="button" data-spatial-mode="names" aria-pressed="true"
        data-caption="&lt;strong&gt;Joined on name:&lt;/strong&gt; text on both sides, spelled the same way. Every county receives its rate.">Matched</button>
      <button type="button" data-spatial-mode="types" aria-pressed="false"
        data-caption="&lt;strong&gt;Joined on a code:&lt;/strong&gt; the shapefile stores it as text, the CSV was read as a number. Nothing matches, and nothing warns you.">Type clash</button>
      <button type="button" data-spatial-mode="partial" aria-pressed="false"
        data-caption="&lt;strong&gt;Four of six:&lt;/strong&gt; two spellings disagree. The map draws, and two counties will be shown as having no data when the data exists.">Partial</button>
    </div>
    <svg class="spatial-demo__map tj-demo" viewBox="0 0 700 430" role="img" aria-labelledby="tj-title tj-desc">
      <title id="tj-title">One join under three conditions</title>
      <desc id="tj-desc">A boundary layer on the left and a spreadsheet on the right. Joining on names matches every county, joining on a code of the wrong type matches none, and two disagreeing spellings match four of six.</desc>

      <text class="tj-head" x="26" y="42">counties (layer)</text>
      <text class="tj-head tj-head--right" x="674" y="42">health.csv</text>
      <text class="tj-type tj-type--a" x="26" y="64">key: NAME · Text</text>
      <text class="tj-type tj-type--b" x="26" y="64">key: FIPS · Text</text>
      <text class="tj-type tj-type--right tj-type--a" x="674" y="64">key: NAME · Text</text>
      <text class="tj-type tj-type--right tj-type--b tj-type--warn" x="674" y="64">key: FIPS · Long integer</text>

      <g class="tj-rows">
        <g class="tj-row is-match">
          <rect class="tj-left" x="26" y="86" width="310" height="46" rx="7"/>
          <text class="tj-key tj-key--name" x="44" y="115">Douglas</text>
          <text class="tj-key tj-key--fips" x="44" y="115">"31055"</text>
          <text class="tj-got tj-end" x="320" y="115">14.2</text>
          <text class="tj-null tj-end" x="320" y="115">&lt;null&gt;</text>
          <rect class="tj-right" x="440" y="86" width="234" height="46" rx="7"/>
          <text class="tj-key tj-key--name" x="458" y="115">Douglas</text>
          <text class="tj-key tj-key--fips" x="458" y="115">31055</text>
          <text class="tj-rate tj-end" x="658" y="115">14.2</text>
        </g>
        <g class="tj-row is-match">
          <rect class="tj-left" x="26" y="142" width="310" height="46" rx="7"/>
          <text class="tj-key tj-key--name" x="44" y="171">Lancaster</text>
          <text class="tj-key tj-key--fips" x="44" y="171">"31109"</text>
          <text class="tj-got tj-end" x="320" y="171">11.8</text>
          <text class="tj-null tj-end" x="320" y="171">&lt;null&gt;</text>
          <rect class="tj-right" x="440" y="142" width="234" height="46" rx="7"/>
          <text class="tj-key tj-key--name" x="458" y="171">Lancaster</text>
          <text class="tj-key tj-key--fips" x="458" y="171">31109</text>
          <text class="tj-rate tj-end" x="658" y="171">11.8</text>
        </g>
        <g class="tj-row is-match">
          <rect class="tj-left" x="26" y="198" width="310" height="46" rx="7"/>
          <text class="tj-key tj-key--name" x="44" y="227">Sarpy</text>
          <text class="tj-key tj-key--fips" x="44" y="227">"31153"</text>
          <text class="tj-got tj-end" x="320" y="227">9.4</text>
          <text class="tj-null tj-end" x="320" y="227">&lt;null&gt;</text>
          <rect class="tj-right" x="440" y="198" width="234" height="46" rx="7"/>
          <text class="tj-key tj-key--name" x="458" y="227">Sarpy</text>
          <text class="tj-key tj-key--fips" x="458" y="227">31153</text>
          <text class="tj-rate tj-end" x="658" y="227">9.4</text>
        </g>
        <g class="tj-row is-match">
          <rect class="tj-left" x="26" y="254" width="310" height="46" rx="7"/>
          <text class="tj-key tj-key--name" x="44" y="283">Hall</text>
          <text class="tj-key tj-key--fips" x="44" y="283">"31079"</text>
          <text class="tj-got tj-end" x="320" y="283">16.1</text>
          <text class="tj-null tj-end" x="320" y="283">&lt;null&gt;</text>
          <rect class="tj-right" x="440" y="254" width="234" height="46" rx="7"/>
          <text class="tj-key tj-key--name" x="458" y="283">Hall</text>
          <text class="tj-key tj-key--fips" x="458" y="283">31079</text>
          <text class="tj-rate tj-end" x="658" y="283">16.1</text>
        </g>
        <g class="tj-row is-spelling">
          <rect class="tj-left" x="26" y="310" width="310" height="46" rx="7"/>
          <text class="tj-key tj-key--name" x="44" y="339">Buffalo</text>
          <text class="tj-key tj-key--fips" x="44" y="339">"31019"</text>
          <text class="tj-got tj-end" x="320" y="339">12.7</text>
          <text class="tj-null tj-end" x="320" y="339">&lt;null&gt;</text>
          <rect class="tj-right" x="440" y="310" width="234" height="46" rx="7"/>
          <text class="tj-key tj-key--name" x="458" y="339">Buffalo</text>
          <text class="tj-key tj-key--alt" x="458" y="339">Buffalo Co.</text>
          <text class="tj-key tj-key--fips" x="458" y="339">31019</text>
          <text class="tj-rate tj-end" x="658" y="339">12.7</text>
        </g>
        <g class="tj-row is-spelling">
          <rect class="tj-left" x="26" y="366" width="310" height="46" rx="7"/>
          <text class="tj-key tj-key--name" x="44" y="395">Dodge</text>
          <text class="tj-key tj-key--fips" x="44" y="395">"31053"</text>
          <text class="tj-got tj-end" x="320" y="395">15.3</text>
          <text class="tj-null tj-end" x="320" y="395">&lt;null&gt;</text>
          <rect class="tj-right" x="440" y="366" width="234" height="46" rx="7"/>
          <text class="tj-key tj-key--name" x="458" y="395">Dodge</text>
          <text class="tj-key tj-key--alt" x="458" y="395">Dodge County</text>
          <text class="tj-key tj-key--fips" x="458" y="395">31053</text>
          <text class="tj-rate tj-end" x="658" y="395">15.3</text>
        </g>
      </g>

      <g class="tj-links" aria-hidden="true">
        <path class="tj-link tj-link--1" d="M344,109 H432"/>
        <path class="tj-link tj-link--2" d="M344,165 H432"/>
        <path class="tj-link tj-link--3" d="M344,221 H432"/>
        <path class="tj-link tj-link--4" d="M344,277 H432"/>
        <path class="tj-link tj-link--5" d="M344,333 H432"/>
        <path class="tj-link tj-link--6" d="M344,389 H432"/>
      </g>
      <text class="tj-score tj-score--names" x="388" y="422">6 of 6</text>
      <text class="tj-score tj-score--types" x="388" y="422">0 of 6</text>
      <text class="tj-score tj-score--partial" x="388" y="422">4 of 6</text>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>Joined on name:</strong> text on both sides, spelled the same way. Every county receives its rate.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Table Joins lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/table-join/"><span>02</span><strong>Slides</strong><small>Visual walkthrough</small></a>
  <a href="../../labs/table-join/"><span>03</span><strong>Lab</strong><small>Nebraska county health</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

Health statistics, census counts, election results, inspection records and school enrolments all arrive as spreadsheets with no geometry at all. The boundaries you would want to map them on arrive with almost no attributes beyond a name and an identifier. A join marries the two.

It also fails without an error message, which makes one question worth asking every single time. **Did every feature actually get a value?**

</div>

## Learning goals

By the end of this lesson, you can:

- Explain what a table join does and when a dataset needs one.
- Choose a key field that will actually match, and recognise the field types that quietly break joins.
- Distinguish a one-to-one join from a one-to-many relationship, and know which tool each needs.
- Verify a join matched every record before building anything on top of it.
- Make a join permanent, and explain why that step is not optional.

## Key concepts

<div class="concept-lead" markdown="1">

### A join attaches columns using a value both tables already hold

**Nothing moves and nothing is copied at first.** The join tells ArcGIS Pro that row 47 of the spreadsheet belongs with polygon 47 on the map. That common value is the **key field**, and choosing it well is most of the skill.

A key field has to satisfy three conditions at once: it must exist in both tables, it must be unique in the table being joined, and it must be stored as the same data type on both sides. The first two are obvious once stated. The third is where joins usually fail, and it fails silently.

</div>

### A code looks more rigorous and is often riskier

A FIPS code such as `31055` is a string of digits, but it is not a number. It is an identifier that happens to be spelled with digits, and leading zeros matter: Alabama's state code is `01`, not `1`.

When a CSV is read into ArcGIS Pro, an all-digit column is interpreted as an integer. The shapefile stores the same identifier as text. The join compares `"31055"` against `31055`, finds nothing, and reports zero joined records with no error — which is the middle state of the demo above. Opening the CSV in Excel and saving it again does the same damage.

County and place names are unambiguously text on both sides, which is why this course joins on names where it can. Names have their own hazard: punctuation, abbreviations and spelling must agree exactly, and "St. Louis" will not match "Saint Louis".

**The general rule is to look at the actual values in both tables before you join**, not to trust that a field with a promising name will behave.

### A join is temporary

Until you export, what you are looking at is a live view, not a dataset. Close the project, or remove the source table, and the columns vanish. The map still looks right while you are working, which is exactly what makes this trap effective.

### One-to-one and one-to-many need different tools

**Add Join** assumes one match per feature. Give it a join table where the key repeats and it will attach the first matching row it encounters and quietly ignore the rest. Three inspection records for the same restaurant become one, and nobody is told which two were discarded.

When the relationship is genuinely one-to-many, use **Add Relate**, which preserves the full set and lets you step through related records from a selected feature — or summarise the many side first, one row per feature, and join that.

### Verifying the join

Do this every time, before you symbolize anything.

1. Open the attribute table and confirm the joined columns are present.
2. Check the record count. If the layer had 93 counties, 93 rows should now carry health data.
3. Sort a joined column ascending. Nulls collect at one end, and unmatched features show up immediately as a block of empty cells.
4. If matches are missing, compare the two key fields directly: their data types first, then their actual values.

**A join that matched 60 of 93 records is not a partial success.** It is a map that will show 33 counties as having no data when the data exists, which is more damaging than a map that fails outright.

### Making it permanent

Once verified, use **Export Features** to write a new feature class. The exported layer holds the joined columns as real fields of its own, independent of the source table. Symbolize, analyse and share from the exported layer, never from the live join.

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · Joining on a code

Then not checking the match count when the types differ. Zero matched looks the same as not having run it.

</div>

<div markdown="1">

### 02 · Symbolizing before verifying

A partial join produces a map that looks finished and reports missing data as absence.

</div>

<div markdown="1">

### 03 · Leaving it temporary

Close the project and the columns are gone. Export before you build anything on top.

</div>

<div markdown="1">

### 04 · Add Join on a one-to-many table

Records are discarded without a word. Use Add Relate, or summarise first.

</div>

</div>

## Practice task

Join a non-spatial table to a boundary layer and verify the result. Then deliberately break it: change the key field on one side to a different data type, or introduce a mismatch in a handful of values, and observe what ArcGIS Pro reports. Note whether it warns you.

<div class="deliverable-card" markdown="1">

## Deliverable

- A screenshot of the Add Join dialog showing your input field and join field.
- A screenshot of the joined attribute table, with the record count visible.
- Three to four sentences describing how you verified that every feature matched, and what happened when you broke the join on purpose.

</div>

## Labs {: #labs }

<div class="lab-cards" markdown="1">

<a href="../../labs/table-join/" class="lab-card">
  <span>Lab</span>
  <strong>Table Join</strong>
  <small>Nebraska county health data, including the FIPS code trap.</small>
</a>

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://slcc.pressbooks.pub/maps/chapter/5-3/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 5.3 Geodatabases</strong>
  <small>How tables and feature classes are stored, and why types are enforced.</small>
</a>

<a href="https://pro.arcgis.com/en/pro-app/latest/help/data/tables/joins-and-relates.htm" class="reading-card">
  <span>Tool reference</span>
  <strong>ArcGIS Pro · Joins and Relates</strong>
  <small>The difference between the two, with cardinality spelled out.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the collection</p>
  <a href="../03b-selection-by-location/"><span>Next lesson</span><strong>Selection by Location →</strong></a>
</aside>
