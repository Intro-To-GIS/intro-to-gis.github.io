---
title: Home
hide:
  - toc
---

<div class="home-portal">

<section class="atlas-hero atlas-hero--home" aria-labelledby="home-title">
  <div class="atlas-hero__copy">
    <p class="atlas-kicker">Intro to GIS</p>
    <h1 id="home-title">Make sense of place.</h1>
    <p class="atlas-deck">A free, open learning atlas for understanding geographic information, working in ArcGIS Pro, and asking better questions with spatial data.</p>
    <div class="atlas-actions">
      <a class="atlas-button atlas-button--primary" href="lessons/">Explore lessons</a>
      <a class="atlas-button" href="lessons/course-index/">View the course index</a>
    </div>
  </div>
  <div class="atlas-hero__map atlas-hero__map--demo">
    <div class="home-slot" data-home-slot="crs" style="--lesson-accent: var(--collection-data)">
      <p class="home-slot__label">One degree, two distances</p>
      <div class="home-slot__card">
      <div class="spatial-demo" data-spatial-demo data-mode="degrees">
          <div class="spatial-demo__controls" aria-label="One buffer, measured two ways">
            <button type="button" data-spatial-mode="degrees" aria-pressed="true"
              data-caption="&lt;strong&gt;One degree:&lt;/strong&gt; a round buffer on screen. It reaches 111 km north but only 84 km east, because a degree of longitude shrinks towards the poles.">Degrees</button>
            <button type="button" data-spatial-mode="metres" aria-pressed="false"
              data-caption="&lt;strong&gt;One hundred kilometres:&lt;/strong&gt; the same buffer in a projected system. True on the ground—and no longer a circle on a map drawn in degrees.">Kilometres</button>
            <button type="button" data-spatial-mode="compare" aria-pressed="false"
              data-caption="&lt;strong&gt;The gap:&lt;/strong&gt; both at once. Nothing on screen looks broken, and the east–west reach is out by sixteen percent.">Compare</button>
          </div>
          <svg class="spatial-demo__map crs-demo" viewBox="0 0 700 430" role="img" aria-labelledby="crs-title crs-desc">
            <title id="crs-title">A buffer measured in degrees against the same buffer in kilometres</title>
            <desc id="crs-desc">On a map drawn in degrees at 41 degrees north, a one-degree buffer is a circle that reaches 111 km north and 84 km east. A true 100 km buffer is an ellipse.</desc>

            <g class="crs-grid" aria-hidden="true">
              <path d="M62,20 V400"/><path d="M134,20 V400"/><path d="M206,20 V400"/><path d="M278,20 V400"/>
              <path class="crs-grid__axis" d="M350,20 V400"/>
              <path d="M422,20 V400"/><path d="M494,20 V400"/><path d="M566,20 V400"/><path d="M638,20 V400"/>
              <path d="M62,66 H638"/><path d="M62,138 H638"/>
              <path class="crs-grid__axis" d="M62,210 H638"/>
              <path d="M62,282 H638"/><path d="M62,354 H638"/>
            </g>
            <g class="crs-labels" aria-hidden="true">
              <text x="70" y="60">43°N</text>
              <text x="70" y="132">42°N</text>
              <text x="70" y="204">41°N</text>
              <text x="70" y="276">40°N</text>
              <text x="70" y="348">39°N</text>
              <text class="crs-labels__foot" x="350" y="392">one grid square = one degree</text>
            </g>

            <g class="crs-shape crs-shape--deg" aria-hidden="true">
              <circle cx="350" cy="210" r="72"/>
            </g>
            <g class="crs-shape crs-shape--km" aria-hidden="true">
              <ellipse cx="350" cy="210" rx="86" ry="65"/>
            </g>

            <circle class="crs-city" cx="350" cy="210" r="7"/>

            <g class="crs-note crs-note--deg" aria-hidden="true">
              <text x="350" y="122">111 km north</text>
              <text class="crs-note__side" x="436" y="206">84 km east</text>
            </g>
            <g class="crs-note crs-note--km" aria-hidden="true">
              <text x="350" y="129">100 km north</text>
              <text class="crs-note__side" x="450" y="216">100 km east</text>
            </g>
            <g class="crs-gap" aria-hidden="true">
              <path class="crs-key crs-key--deg" d="M470,318 H510"/>
              <text x="520" y="324">1° buffer · 84 km east</text>
              <path class="crs-key crs-key--km" d="M470,352 H510"/>
              <text x="520" y="358">100 km buffer · true</text>
            </g>
          </svg>
          <p class="spatial-demo__caption" data-spatial-caption><strong>One degree:</strong> a round buffer on screen. It reaches 111 km north but only 84 km east, because a degree of longitude shrinks towards the poles.</p>
        </div>
        <p class="home-slot__foot">Every lesson opens with one of these.
          <a href="lessons/02-data-layers-coordinate-systems/">Data, Layers &amp; Coordinates &rarr;</a></p>
      </div>
    </div>
    <div class="home-slot" data-home-slot="ras" style="--lesson-accent: var(--collection-raster)" hidden>
      <p class="home-slot__label">Drag the cell size</p>
      <div class="home-slot__card">
      <div class="spatial-demo ras-demo-wrap" data-raster-demo data-cell="30">
          <div class="ras-slider">
            <label for="ras-cell">Cell size</label>
            <input id="ras-cell" type="range" min="8" max="96" step="2" value="30"
                   aria-describedby="ras-readout">
            <output id="ras-readout" for="ras-cell"><strong data-raster-size>30</strong> m</output>
          </div>
          <svg class="spatial-demo__map ras-demo" viewBox="0 0 700 430" role="img" aria-labelledby="ras-title ras-desc">
            <title id="ras-title">One lake recorded at a cell size you choose</title>
            <desc id="ras-desc">A lake with a narrow inlet, and the grid cells that would record it. Drag the cell size and the coastline becomes a staircase; past about 45 metres the inlet is narrower than a single cell.</desc>
            <g class="ras-grid" data-raster-grid aria-hidden="true"></g>
            <g class="ras-cells" data-raster-cells aria-hidden="true"></g>
            <path class="ras-truth" data-raster-shape
                  d="M146,160 C168,126 214,110 262,114 C300,117 332,132 352,154 C368,172 380,186 398,192 L524,192 L524,236 L404,240 C396,262 374,284 344,298 C318,308 300,286 272,292 C246,298 226,316 196,300 C150,279 124,240 128,206 C130,186 136,172 146,160 Z"/>
            <text class="ras-key" x="60" y="404">true shoreline</text>
            <text class="ras-key ras-key--cells" x="230" y="404">cells that record it</text>
            <text class="ras-key ras-inlet-note" data-raster-note x="430" y="404">the 44 m inlet survives</text>
          </svg>
          <p class="spatial-demo__caption" data-raster-caption aria-live="polite"><strong>30 m cells:</strong> the shoreline is already a staircase, and the inlet is down to a single cell.</p>
        </div>
        <p class="home-slot__foot">Every lesson opens with one of these.
          <a href="lessons/06-raster-analysis/">Raster Analysis &rarr;</a></p>
      </div>
    </div>
    <div class="home-slot" data-home-slot="cls" style="--lesson-accent: var(--collection-cartography)" hidden>
      <p class="home-slot__label">Same data, three stories</p>
      <div class="home-slot__card">
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
        <p class="home-slot__foot">Every lesson opens with one of these.
          <a href="lessons/04-symbology-map-design/">Symbology &amp; Map Design &rarr;</a></p>
      </div>
    </div>
  </div>

  <script>
    /* One of the three, chosen on arrival. Run inline so the choice is made
       before first paint rather than swapped in afterwards. */
    (function () {
      var slots = document.querySelectorAll("[data-home-slot]");
      if (slots.length < 2) return;
      var pick = Math.floor(Math.random() * slots.length);
      for (var i = 0; i < slots.length; i++) { slots[i].hidden = (i !== pick); }
    })();
  </script>
</section>

<section class="home-route" aria-labelledby="home-route-title">
  <div>
    <p class="atlas-kicker">Begin anywhere</p>
    <h2 id="home-route-title">An evergreen guide—not a semester timetable.</h2>
  </div>
  <p>Move through concepts in order or follow your curiosity. Each lesson brings together explanation, slides, practice, and carefully chosen readings.</p>
</section>

<div class="portal-grid">
  <a class="portal-card" href="lessons/">
    <span>01</span>
    <h2>Browse Lessons</h2>
    <p>Explore nine connected collections spanning GIS foundations, cartography, analysis, and automation.</p>
    <strong>Enter the learning atlas →</strong>
  </a>
  <a class="portal-card" href="lessons/course-index/">
    <span>02</span>
    <h2>Use the Course Index</h2>
    <p>Find every topic, slide deck, lab, and reading in one compact reference table.</p>
    <strong>Open the complete matrix →</strong>
  </a>
  <a class="portal-card" href="resources/">
    <span>03</span>
    <h2>Find Resources</h2>
    <p>Return to datasets, reading materials, and practical references when you need them.</p>
    <strong>Browse resources →</strong>
  </a>
</div>

<section class="home-capabilities" aria-labelledby="capabilities-title">
  <p class="atlas-kicker">What you will learn</p>
  <h2 id="capabilities-title">From opening a project to designing a spatial model.</h2>
  <div class="capability-list">
    <p><span>01</span> Organize projects, data, coordinate systems, and layers with confidence.</p>
    <p><span>02</span> Query tables and connect information through keys, proximity, and overlap.</p>
    <p><span>03</span> Design maps that make analytical choices visible and understandable.</p>
    <p><span>04</span> Transform vector and raster data into reproducible spatial evidence.</p>
  </div>
</section>

</div>
