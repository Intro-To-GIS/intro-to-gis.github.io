---
title: Lessons
hide:
  - toc
---

<div class="learning-atlas">

<section class="atlas-hero" aria-labelledby="atlas-title">
  <div class="atlas-hero__copy">
    <p class="atlas-kicker">An open learning atlas</p>
    <h1 id="atlas-title">Learn to think spatially.</h1>
    <p class="atlas-deck">Explore GIS as a way of seeing, a practical craft, and a set of analytical tools. Start anywhere; every lesson connects concepts, slides, practice, and readings.</p>
    <div class="atlas-actions">
      <a class="atlas-button atlas-button--primary" href="#learning-landscape">Explore the lessons</a>
      <a class="atlas-button" href="course-index/">Open the course index</a>
    </div>
  </div>
  <div class="atlas-hero__map" aria-hidden="true">
    <svg viewBox="0 0 620 500" role="presentation">
      <defs>
        <pattern id="atlas-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" stroke-width="1" />
        </pattern>
      </defs>
      <rect class="atlas-grid" width="620" height="500" fill="url(#atlas-grid)" />
      <path class="atlas-contour atlas-contour--one" d="M45 316C87 211 184 158 274 196c83 35 108 123 194 116 49-4 78-35 111-76" />
      <path class="atlas-contour atlas-contour--two" d="M42 360c55-91 131-122 206-95 91 33 119 128 213 124 57-2 93-34 126-80" />
      <path class="atlas-contour atlas-contour--three" d="M72 403c62-62 124-76 184-50 83 37 119 105 204 104 58 0 98-20 132-50" />
      <g class="atlas-route">
        <path d="M92 373C154 317 173 222 259 226c94 5 108 121 205 102 42-8 68-35 91-76" />
        <circle cx="92" cy="373" r="9" />
        <circle cx="259" cy="226" r="9" />
        <circle cx="464" cy="328" r="9" />
        <circle cx="555" cy="252" r="9" />
      </g>
      <g class="atlas-north">
        <path d="M535 70l15 42-15-9-15 9z" />
        <text x="535" y="56" text-anchor="middle">N</text>
      </g>
    </svg>
  </div>
</section>

<section class="atlas-intro" aria-labelledby="choose-route">
  <div>
    <p class="atlas-kicker">Choose your route</p>
    <h2 id="choose-route">Three acts. Nine connected collections.</h2>
  </div>
  <p>The collections are conceptual rather than semester-based. They give the site a coherent visual language without forcing you into a fixed calendar.</p>
</section>

<div class="atlas-toolbar">
  <label for="lesson-filter">Find a topic or skill</label>
  <div class="atlas-search">
    <span aria-hidden="true">⌕</span>
    <input id="lesson-filter" type="search" placeholder="Try spatial join, projections, raster…" autocomplete="off" data-lesson-filter>
  </div>
  <p class="atlas-results" aria-live="polite" data-lesson-results>Showing all nine collections.</p>
</div>

<div id="learning-landscape" class="learning-landscape">

<section class="learning-act learning-act--orient" aria-labelledby="act-orient">
  <header class="learning-act__header">
    <span>Act I</span>
    <h2 id="act-orient">Orient</h2>
    <p>Understand what GIS is, how its workspace is organized, and what spatial data actually represents.</p>
  </header>
  <div class="collection-grid">
    <article class="collection-card collection-card--thinking" data-collection data-keywords="history applications maps ethics power gis geographic information science">
      <div class="collection-signal" aria-hidden="true"><i></i><i></i><i></i></div>
      <p class="collection-number">01</p>
      <h3>GIS as a Way of Seeing</h3>
      <p>Discover how location changes a question—and how maps shape the answers we accept.</p>
      <ul class="lesson-link-list">
        <li><a href="00-introduction-to-gis/">Introduction to GIS</a></li>
      </ul>
      <p class="collection-topics">History · applications · map power · ethics</p>
    </article>

    <article class="collection-card collection-card--workspace" data-collection data-keywords="software installation interface arcgis pro project map geodatabase layers files troubleshooting">
      <div class="collection-signal" aria-hidden="true"><i></i><i></i><i></i></div>
      <p class="collection-number">02</p>
      <h3>The ArcGIS Pro Workspace</h3>
      <p>Build a clean project and understand the interface, files, layers, and containers around your work.</p>
      <ul class="lesson-link-list">
        <li><a href="01-getting-started/">Getting Started</a></li>
        <li><a href="02-data-layers-coordinate-systems/">Projects, Maps, and Layers</a></li>
      </ul>
      <p class="collection-topics">Interface · projects · geodatabases · file management</p>
    </article>

    <article class="collection-card collection-card--data" data-collection data-keywords="vector raster data types sources acquisition coordinate systems projections add data">
      <div class="collection-signal" aria-hidden="true"><i></i><i></i><i></i></div>
      <p class="collection-number">03</p>
      <h3>Spatial Data &amp; Reference Systems</h3>
      <p>Learn what your layers are, where they come from, and how coordinates place them correctly.</p>
      <ul class="lesson-link-list">
        <li><a href="02-data-layers-coordinate-systems/">Data, Layers, and Coordinates</a></li>
        <li><a href="02b-data-management/">Data Acquisition and Management</a></li>
      </ul>
      <p class="collection-topics">Vector · raster · data sources · projections</p>
    </article>
  </div>
</section>

<section class="learning-act learning-act--work" aria-labelledby="act-work">
  <header class="learning-act__header">
    <span>Act II</span>
    <h2 id="act-work">Interrogate &amp; Communicate</h2>
    <p>Ask precise questions, connect records through space, and design maps that communicate clearly.</p>
  </header>
  <div class="collection-grid">
    <article class="collection-card collection-card--tables" data-collection data-keywords="attribute table fields csv calculate field query select attributes tabular data">
      <div class="collection-signal" aria-hidden="true"><i></i><i></i><i></i></div>
      <p class="collection-number">04</p>
      <h3>Tables &amp; Attribute Intelligence</h3>
      <p>Turn rows and fields into questions, selections, and defensible new information.</p>
      <ul class="lesson-link-list">
        <li><a href="03-selection-by-attribute/">Selection by Attribute</a></li>
        <li><a href="03c-tabular-data-management/">Tabular Data Management</a></li>
      </ul>
      <p class="collection-topics">Attributes · CSV · calculations · queries</p>
    </article>

    <article class="collection-card collection-card--cartography" data-collection data-keywords="cartography symbology classification map design layout export legend labels communication">
      <div class="collection-signal" aria-hidden="true"><i></i><i></i><i></i></div>
      <p class="collection-number">05</p>
      <h3>Cartographic Design</h3>
      <p>Shape hierarchy, classification, color, and layout into maps people can understand.</p>
      <ul class="lesson-link-list">
        <li><a href="04-symbology-map-design/">Symbology and Map Design</a></li>
      </ul>
      <p class="collection-topics">Symbology · classification · layout · export</p>
    </article>

    <article class="collection-card collection-card--relationships" data-collection data-keywords="table join spatial join select by location relationship proximity intersect closest">
      <div class="collection-signal" aria-hidden="true"><i></i><i></i><i></i></div>
      <p class="collection-number">06</p>
      <h3>Spatial Relationships &amp; Joins</h3>
      <p>Connect records by a shared key—or connect features because of where they are.</p>
      <ul class="lesson-link-list">
        <li><a href="03d-table-joins/">Table Joins</a></li>
        <li><a href="03b-selection-by-location/">Selection by Location</a></li>
        <li><a href="07-spatial-joins/">Spatial Joins <span>Featured</span></a></li>
      </ul>
      <p class="collection-topics">Keys · proximity · intersection · transferred attributes</p>
    </article>
  </div>
</section>

<section class="learning-act learning-act--analyze" aria-labelledby="act-analyze">
  <header class="learning-act__header">
    <span>Act III</span>
    <h2 id="act-analyze">Analyze &amp; Extend</h2>
    <p>Transform features, model continuous space, and move toward repeatable, programmable workflows.</p>
  </header>
  <div class="collection-grid">
    <article class="collection-card collection-card--vector" data-collection data-keywords="vector geoprocessing buffer clip dissolve overlay union intersect analysis">
      <div class="collection-signal" aria-hidden="true"><i></i><i></i><i></i></div>
      <p class="collection-number">07</p>
      <h3>Vector Geoprocessing</h3>
      <p>Transform boundaries and features to answer questions about reach, overlap, and extent.</p>
      <ul class="lesson-link-list">
        <li><a href="05-geoprocessing/">Geoprocessing</a></li>
      </ul>
      <p class="collection-topics">Buffer · clip · dissolve · overlay</p>
    </article>

    <article class="collection-card collection-card--raster" data-collection data-keywords="raster surface slope aspect hillshade map algebra suitability modeling weighted overlay">
      <div class="collection-signal" aria-hidden="true"><i></i><i></i><i></i></div>
      <p class="collection-number">08</p>
      <h3>Raster &amp; Suitability Modeling</h3>
      <p>Read continuous surfaces, combine criteria, and make the assumptions in a model visible.</p>
      <ul class="lesson-link-list">
        <li><a href="06-raster-analysis/">Raster Analysis</a></li>
      </ul>
      <p class="collection-topics">Surface analysis · map algebra · suitability</p>
    </article>

    <article class="collection-card collection-card--future" data-collection data-keywords="python arcpy programming automation future gis geospatial code workflow">
      <div class="collection-signal" aria-hidden="true"><i></i><i></i><i></i></div>
      <p class="collection-number">09</p>
      <h3>Automation &amp; GIS Futures</h3>
      <p>Scale a repeated workflow with code and consider where geospatial practice is moving next.</p>
      <ul class="lesson-link-list">
        <li><a href="08-geospatial-programming/">Geospatial Programming</a></li>
        <li><a href="09-future-of-gisc/">The Future of GISc</a></li>
      </ul>
      <p class="collection-topics">ArcPy · automation · emerging practice</p>
    </article>
  </div>
</section>

</div>

<p class="atlas-empty" data-lesson-empty hidden>No collection matches that search. Try a broader term or use the complete index.</p>

<section class="index-callout">
  <div>
    <p class="atlas-kicker">Reference view</p>
    <h2>Want the entire course at a glance?</h2>
    <p>The original matrix remains available with every topic, slide deck, lab, and reading in one place.</p>
  </div>
  <a class="atlas-button atlas-button--primary" href="course-index/">Open Course Index</a>
</section>

</div>
