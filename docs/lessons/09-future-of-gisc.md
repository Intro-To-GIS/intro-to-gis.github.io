---
title: The Future of GISc
---

<section class="lesson-hero lesson-hero--future">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 09 · Automation &amp; GIS Futures</p>
    <h1>The Future of GISc</h1>
    <p class="lesson-deck">Three shifts reshaping the field, and the part of your judgement that none of them replaces.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>60</strong> minutes</span>
      <span><strong>All levels</strong></span>
      <span><strong>250–400</strong> words</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="realtime">
    <div class="spatial-demo__controls" aria-label="Three shifts, and what each does not change">
      <button type="button" data-spatial-mode="realtime" aria-pressed="true"
        data-caption="&lt;strong&gt;Real-time:&lt;/strong&gt; the pause in which someone used to inspect the data has gone. Quality control has to move into the pipeline.">Real-time</button>
      <button type="button" data-spatial-mode="cloud" aria-pressed="false"
        data-caption="&lt;strong&gt;Cloud:&lt;/strong&gt; distribution changed far more than analysis did. Responsibility scales with reach.">Cloud</button>
      <button type="button" data-spatial-mode="ml" aria-pressed="false"
        data-caption="&lt;strong&gt;Machine learning:&lt;/strong&gt; very good at extracting patterns, and indifferent to whether a pattern means anything.">Machine learning</button>
    </div>
    <svg class="spatial-demo__map fut-demo" viewBox="0 0 700 430" role="img" aria-labelledby="fut-title fut-desc">
      <title id="fut-title">What each shift changes, and what it does not</title>
      <desc id="fut-desc">For real-time data, cloud platforms and machine learning, the capability each one adds alongside the judgement it still requires, and the lesson that judgement comes from.</desc>

      <text class="fut-col fut-col--a" x="30" y="52">WHAT CHANGED</text>
      <text class="fut-col fut-col--b" x="372" y="52">WHAT DID NOT</text>
      <path class="fut-divider" d="M352,34 V352"/>
      <path class="fut-rule" d="M30,66 H322"/>
      <path class="fut-rule" d="M372,66 H670"/>

      <g class="fut-state fut-state--realtime" aria-hidden="true">
        <text x="30" y="110">Data arrives as a stream,</text>
        <text x="30" y="140">not as a file once a year.</text>
        <text x="30" y="194">Flow, timing and change</text>
        <text x="30" y="224">become answerable.</text>
        <text class="fut-b" x="372" y="110">Someone still has to check it.</text>
        <text class="fut-b" x="372" y="140">That now has to happen inside</text>
        <text class="fut-b" x="372" y="170">the pipeline, because nobody</text>
        <text class="fut-b" x="372" y="200">is looking at a table any more.</text>
      </g>

      <g class="fut-state fut-state--cloud" aria-hidden="true">
        <text x="30" y="110">A web map needs no desktop</text>
        <text x="30" y="140">software and no training.</text>
        <text x="30" y="194">The audience is everyone.</text>
        <text class="fut-b" x="372" y="110">The classification was chosen</text>
        <text class="fut-b" x="372" y="140">once, by you. Now it reaches</text>
        <text class="fut-b" x="372" y="170">people who cannot see that</text>
        <text class="fut-b" x="372" y="200">a choice was made at all.</text>
      </g>

      <g class="fut-state fut-state--ml" aria-hidden="true">
        <text x="30" y="110">Segmenting buildings and</text>
        <text x="30" y="140">classifying land cover now</text>
        <text x="30" y="170">beat manual work outright.</text>
        <text x="30" y="224">These are real labour savers.</text>
        <text class="fut-b" x="372" y="110">A model trained on past</text>
        <text class="fut-b" x="372" y="140">decisions reproduces them.</text>
        <text class="fut-b" x="372" y="194">A prediction looks exactly as</text>
        <text class="fut-b" x="372" y="224">authoritative as a measurement.</text>
      </g>

      <g class="fut-back">
        <text class="fut-back__label" x="30" y="392">comes back to</text>
        <text class="fut-back__to fut-to--realtime" x="172" y="392">Lesson 02b · judging a source before you build on it</text>
        <text class="fut-back__to fut-to--cloud" x="172" y="392">Lesson 04 · classification is where the argument is made</text>
        <text class="fut-back__to fut-to--ml" x="172" y="392">Lesson 00 · every map is an argument</text>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>Real-time:</strong> the pause in which someone used to inspect the data has gone. Quality control has to move into the pipeline.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="The Future of GISc lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/future-of-gis/"><span>02</span><strong>Slides</strong><small>Visual walkthrough</small></a>
  <a class="dock-empty" aria-disabled="true"><span>03</span><strong>Lab</strong><small>No lab in this lesson</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

Every shift in this lesson makes something faster. None of them makes anything more correct, and a few of them make incorrectness harder to notice.

**What specifically got better, on what evidence, and what are the failure modes?**

</div>

## Learning goals

By the end of this lesson, you can:

- Describe the shifts reshaping geospatial work, and separate the substantial ones from the marketing.
- Explain what changes and what does not when analysis moves to the cloud or is assisted by machine learning.
- Apply the critical habits from this course to tools that produce answers faster than they can be checked.
- Articulate what remains durably valuable in your own skill set.

## Key concepts

<div class="concept-lead" markdown="1">

### Data arrives continuously now, and that changes the questions

**Sensors, GPS devices and connected infrastructure stream location data rather than delivering a dataset once a year.** This makes genuinely new questions answerable — about flow, timing and change — but it also removes the pause in which someone used to check the data.

A static dataset can be inspected before use. A live feed is used as it arrives, so quality control has to be built into the pipeline rather than performed by a person looking at a table.

</div>

### Cloud platforms changed distribution more than analysis

Publishing a web map or dashboard means the audience needs no desktop software and no training, which is a real democratisation.

What it also means is that people who have never seen the underlying data now make decisions from a simplified view of it. The classification choices from Lesson 04 do not disappear; they get made once, by you, and then reach a much larger audience who cannot see that a choice was made at all. **Responsibility scales with reach.**

### Machine learning is indifferent to whether a pattern means anything

Segmenting buildings from imagery, classifying land cover, flagging change between dates: these are tasks where models now outperform manual work by a wide margin, and they are legitimate labour savers.

The difficulties are the familiar ones wearing new clothes. A model trained on one city's imagery may perform poorly on another's. A model trained on historical decisions reproduces the assumptions in those decisions, which for anything touching housing, policing or lending is a serious problem rather than a technical footnote. And a prediction surface looks exactly as authoritative as a measurement, while resting on far less.

### What does not change is the part worth investing in

Knowing whether a question is spatial. Knowing that degrees are not distance. Knowing that a raw count on a polygon maps the polygons. Knowing that a join matching 60 of 93 records has failed. Knowing that a suitability model is an argument about thresholds.

No platform removes the need for these, and every tool that produces results faster raises the value of someone who can tell whether the results are any good.

### How to read a claim about the field

Ask what specifically got better, on what evidence, and what the failure modes are. A tool that produces an answer in seconds has not necessarily produced a better answer than one that took a week; it has produced it faster, which is only an improvement if it is also correct.

## Practice task

Choose one development in geospatial technology that genuinely interests you: real-time GIS, cloud platforms, machine learning applied to imagery, indoor or 3D GIS, open source alternatives to commercial software, or another you can defend.

Research one real organisation or product using it. Then work out three things:

1. What it actually does, in concrete terms rather than promotional language.
2. What could go wrong with it, and who would be affected if it did.
3. Which concept from earlier in this course applies to it, named specifically.

<div class="deliverable-card" markdown="1">

## Deliverable

- A discussion post of 250 to 400 words covering all three points, with at least one cited source that is not the vendor's own marketing material.
- Two sentences at the end on what you would want to learn next, and why.

</div>

!!! note "Where this comes back to Lesson 00"
    Lesson 00 argued that every map is an argument. That claim gets harder to see, and more consequential, as maps are produced faster, by more automated means, for larger audiences. The habit of asking what choices were made is the most portable thing in this course.

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://slcc.pressbooks.pub/maps/chapter/1-7/" class="reading-card">
  <span>Open text</span>
  <strong>GIS &amp; Cartography · 1.7 Future of Mapping</strong>
  <small>Where the technology is heading, written without the vendor gloss.</small>
</a>

<a href="https://doc.esri.com/en/arcgis-pro/latest/get-started/whats-new-in-arcgis-pro.html" class="reading-card">
  <span>Documentation</span>
  <strong>Esri · What's New in ArcGIS Pro</strong>
  <small>What has actually shipped, as opposed to what has been announced.</small>
</a>

</div>

<aside class="lesson-next">
  <p>That is the course</p>
  <a href="../"><span>Back to</span><strong>The Lessons atlas →</strong></a>
</aside>
