---
title: Symbology & Map Design
---

<section class="lesson-hero lesson-hero--cartography" style="--hero-title-measure: 9ch; --hero-title-size: clamp(2.2rem, 6.1vw, 4.4rem)">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 05 · Cartographic Design</p>
    <h1>Symbology &amp; Map Design</h1>
    <p class="lesson-deck">Eight values, one variable, three defensible maps that say different things. Classification is where the argument gets made.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>75–90</strong> minutes</span>
      <span><strong>Intermediate</strong> level</span>
      <span><strong>2 maps</strong> to compare</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="equal">
    <div class="spatial-demo__controls" aria-label="One variable, three classification methods">
      <button type="button" data-spatial-mode="equal" aria-pressed="true"
        data-caption="&lt;strong&gt;Equal interval:&lt;/strong&gt; equal value ranges. The long tail drags the breaks outward, and six of the eight counties land in one class.">Equal</button>
      <button type="button" data-spatial-mode="quantile" aria-pressed="false"
        data-caption="&lt;strong&gt;Quantile:&lt;/strong&gt; two counties per class. Every class is visible—and 11 and 14 now sit a class apart from 7 and 9.">Quantile</button>
      <button type="button" data-spatial-mode="jenks" aria-pressed="false"
        data-caption="&lt;strong&gt;Natural breaks:&lt;/strong&gt; the breaks follow the gaps in the data. Honest here, and recalculated per dataset, so two maps made this way cannot be compared.">Natural</button>
    </div>
    <svg class="spatial-demo__map cls-demo" viewBox="0 0 700 430" role="img" aria-labelledby="cls-title cls-desc">
      <title id="cls-title">The same eight values under three classification methods</title>
      <desc id="cls-desc">Eight counties shaded by one variable. Equal interval puts six of them in the lowest class, quantile spreads them evenly, and natural breaks follows the gaps in the distribution.</desc>

      <g class="cls-map">
        <g class="cls-unit eq-1 qt-2 nb-2"><rect x="44" y="52" width="72" height="168" rx="7"/><text x="80" y="144">9</text></g>
        <g class="cls-unit eq-4 qt-4 nb-4"><rect x="121" y="52" width="72" height="168" rx="7"/><text x="157" y="144">46</text></g>
        <g class="cls-unit eq-1 qt-1 nb-1"><rect x="198" y="52" width="72" height="168" rx="7"/><text x="234" y="144">6</text></g>
        <g class="cls-unit eq-1 qt-3 nb-2"><rect x="275" y="52" width="72" height="168" rx="7"/><text x="311" y="144">14</text></g>
        <g class="cls-unit eq-1 qt-1 nb-1"><rect x="352" y="52" width="72" height="168" rx="7"/><text x="388" y="144">4</text></g>
        <g class="cls-unit eq-3 qt-4 nb-3"><rect x="429" y="52" width="72" height="168" rx="7"/><text x="465" y="144">28</text></g>
        <g class="cls-unit eq-1 qt-2 nb-1"><rect x="506" y="52" width="72" height="168" rx="7"/><text x="542" y="144">7</text></g>
        <g class="cls-unit eq-1 qt-3 nb-2"><rect x="583" y="52" width="72" height="168" rx="7"/><text x="619" y="144">11</text></g>
      </g>

      <text class="cls-axis__caption" x="60" y="266">the distribution, and where each method cuts it</text>
      <path class="cls-axis" d="M60,318 H644"/>
      <g class="cls-ticks" aria-hidden="true">
        <path d="M106,306 V330"/><path d="M130,306 V330"/><path d="M141,306 V330"/>
        <path d="M164,306 V330"/><path d="M188,306 V330"/><path d="M222,306 V330"/>
        <path d="M385,306 V330"/><path d="M594,306 V330"/>
        <text x="60" y="352">0</text><text x="644" y="352">50</text>
      </g>

      <g class="cls-breaks cls-breaks--equal" aria-hidden="true">
        <path d="M228,292 V344"/><text x="228" y="382">14.5</text>
        <path d="M350,292 V344"/><text x="350" y="382">25</text>
        <path d="M472,292 V344"/><text x="472" y="382">35.5</text>
      </g>
      <g class="cls-breaks cls-breaks--quantile" aria-hidden="true">
        <path d="M135,292 V344"/><text x="135" y="382">6.5</text>
        <path d="M176,292 V344"/><text x="176" y="382">10</text>
        <path d="M304,292 V344"/><text x="304" y="382">21</text>
      </g>
      <g class="cls-breaks cls-breaks--jenks" aria-hidden="true">
        <path d="M153,292 V344"/><text x="153" y="382">8</text>
        <path d="M292,292 V344"/><text x="292" y="382">21</text>
        <path d="M489,292 V344"/><text x="489" y="382">37</text>
      </g>
      <g class="cls-verdict" aria-hidden="true">
        <text class="cls-v--equal" x="60" y="412">six counties share the lowest class</text>
        <text class="cls-v--quantile" x="60" y="412">two counties in every class, by construction</text>
        <text class="cls-v--jenks" x="60" y="412">breaks sit in the gaps, not at round numbers</text>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>Equal interval:</strong> equal value ranges. The long tail drags the breaks outward, and six of the eight counties land in one class.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Symbology and Map Design lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/symbology-map-classification/"><span>02</span><strong>Slides</strong><small>Two decks</small></a>
  <a href="../../labs/data-classification-and-layout-design/"><span>03</span><strong>Lab</strong><small>Classify &amp; lay out</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

Lesson 00 claimed that every map is an argument. This is the lesson where you make one on purpose.

Turning continuous values into a handful of classes requires deciding where the breaks fall, and those breaks determine what a reader sees. **Which of these three maps would you publish, and could you say why?**

</div>

## Learning goals

By the end of this lesson, you can:

- Choose a classification method deliberately, and justify the choice against the data's distribution.
- Explain how the same values classified differently produce different conclusions.
- Select a colour scheme whose structure matches the structure of the data.
- Normalise a count before mapping it, and explain why raw counts mislead.
- Assemble a layout with the elements a reader needs to interpret it.

## Key concepts

<div class="concept-lead" markdown="1">

### Classification is where the argument gets made

**The same county health data can show a sharp divide or a gentle gradient depending on nothing but the method.** This is not a flaw to be avoided; it is a choice to be made responsibly and disclosed. The demo above is one variable under three methods, and all three are defensible.

</div>

### The methods, and what each is for

| Method | How it breaks | Suits | Watch out for |
| --- | --- | --- | --- |
| **Equal interval** | Equal value ranges | Evenly spread data, familiar units like percentages | Skewed data piles into one class |
| **Quantile** | Equal count per class | Ranking; ensuring every class is visible | Arbitrary break positions; can split near-identical values |
| **Natural breaks** | Minimises within-class variance | Data with genuine clusters | Breaks differ per dataset, so maps are not comparable |
| **Standard deviation** | Distance from the mean | Showing deviation from typical | Needs roughly normal data; readers find it hard |
| **Manual** | Wherever you decide | Meaningful thresholds — a poverty line, a regulatory limit | Must be justified |

**Look at the histogram before choosing.** ArcGIS Pro shows the distribution in the Symbology pane. Skewed data with a long tail defeats equal interval. Data with visible clumps rewards natural breaks. Data with an externally meaningful threshold calls for manual breaks. Choosing without looking is guessing.

### Comparability is the argument for manual breaks

If two maps are meant to be compared — side by side, or across years — they must share a classification. Natural breaks recalculates per dataset, so the same colour means different values on each map, and the comparison is void.

### Never map a raw count on a polygon

**A choropleth of total population reproduces a map of how big the polygons are.** Larger areas hold more of almost everything, so the pattern is geography, not the phenomenon.

Normalise: divide by area for density, by population for a rate, or by a relevant total for a share. ArcGIS Pro has a Normalization field in the Symbology pane for exactly this. Counts belong in graduated symbols, where the mark size carries the value and area does not distort it.

### The colour scheme should mirror the data's structure

- **Sequential** — light to dark in one hue, for values running low to high.
- **Diverging** — two hues meeting at a neutral middle, for data with a meaningful midpoint such as change from zero.
- **Qualitative** — distinct hues of similar lightness, for categories with no order.

Using a diverging scheme on data with no midpoint invents a division that is not there. Using a rainbow on ordered data destroys the sense of progression, because the hues carry no inherent ranking. Around one in twelve men has some form of colour vision deficiency, so red–green pairs should be avoided; the colourblind-safe ramps are a reliable default.

### A layout is a document, not a screenshot

A reader who was not present needs a title stating what is shown, where and when; a legend with intelligible class labels and units; a scale bar if distance matters; a north arrow if the orientation is not obvious; and a source credit naming the data and its date. Anything that does not help a reader interpret the map should be removed.

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · The default classification

The software chose something so that it could draw. That is not a finding.

</div>

<div markdown="1">

### 02 · Counts on polygons

Normalise, or use graduated symbols. Otherwise you have mapped the polygons.

</div>

<div markdown="1">

### 03 · Too many classes

Beyond about seven, readers cannot distinguish steps reliably. Five is often plenty.

</div>

<div markdown="1">

### 04 · Software legend labels

`1023.4457 – 2891.2213` should read `1,000 to 2,900`, with units.

</div>

</div>

## Practice task

Take one numeric variable and produce two maps of it that support different impressions, using two different classification methods and nothing else changed. Record the class breaks each method produced.

Then normalise a raw count and map it both ways, once as the count and once as the rate, and compare the geographic patterns.

Build a finished layout for whichever map you consider the most honest, with title, legend, scale bar, north arrow and source.

<div class="deliverable-card" markdown="1">

## Deliverable

- The two classification maps, with the class breaks listed for each.
- The count map and the normalised map.
- The exported layout.
- Four to six sentences: which classification you would publish and why, and what changed when you normalised.

</div>

## Labs {: #labs }

<div class="lab-cards" markdown="1">

<a href="../../labs/data-classification-and-layout-design/" class="lab-card">
  <span>Lab</span>
  <strong>Classification &amp; Layout Design</strong>
  <small>Classification methods, map elements and export, step by step.</small>
</a>

</div>

## Slide decks {: #decks }

<div class="deck-cards" markdown="1">

<a href="../../slides/symbology-map-classification/" class="deck-card">
  <span>Deck</span>
  <strong>Symbology &amp; Classification</strong>
  <small>Methods, colour schemes and the effect each has on the reader.</small>
</a>

<a href="../../slides/cartographic-principles/" class="deck-card">
  <span>Deck</span>
  <strong>Cartographic Principles</strong>
  <small>Map elements, layout and export for a finished document.</small>
</a>

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://slcc.pressbooks.pub/maps/chapter/6-4/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 6.4 Data Classification</strong>
  <small>Each method worked through on the same dataset.</small>
</a>

<a href="https://saylordotorg.github.io/text_essentials-of-geographic-information-systems/s13-cartographic-principles.html" class="reading-card">
  <span>Open text</span>
  <strong>Essentials of GIS · Ch. 9 Cartographic Principles</strong>
  <small>Visual hierarchy, symbol design and the grammar of a map.</small>
</a>

<a href="https://mlpp.pressbooks.pub/flexiblegisworkbookpro/chapter/1-8-add-map-elements/" class="reading-card">
  <span>Workbook</span>
  <strong>Flexible GIS Workbook · 1.8 Add Map Elements</strong>
  <small>Building a layout with every element a reader needs.</small>
</a>

<a href="https://learn.arcgis.com/en/paths/mapping-and-visualization-in-arcgis-pro/" class="reading-card">
  <span>Tutorial path</span>
  <strong>Esri · Mapping and Visualization</strong>
  <small>A guided sequence through symbology and layout in ArcGIS Pro.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the course</p>
  <a href="../03d-table-joins/"><span>Next collection</span><strong>Table Joins →</strong></a>
</aside>
