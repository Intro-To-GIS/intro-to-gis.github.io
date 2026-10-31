---
title: Geospatial Programming
---

<section class="lesson-hero lesson-hero--future" style="--hero-title-measure: 11ch; --hero-title-size: clamp(2.2rem, 5.2vw, 3.7rem)">
  <div class="lesson-hero__copy">
    <p class="lesson-collection">Collection 09 · Automation &amp; GIS Futures</p>
    <h1>Geospatial Programming</h1>
    <p class="lesson-deck">Scripting is not about speed. It is about being able to say, six months later, exactly what you did.</p>
    <div class="lesson-meta-strip" aria-label="Lesson details">
      <span><strong>90</strong> minutes</span>
      <span><strong>Intermediate</strong> level</span>
      <span><strong>1 script</strong> to break on purpose</span>
    </div>
  </div>
  <div class="spatial-demo" data-spatial-demo data-mode="byhand">
    <div class="spatial-demo__controls" aria-label="Six datasets, three ways to process them">
      <button type="button" data-spatial-mode="byhand" aria-pressed="true"
        data-caption="&lt;strong&gt;By hand:&lt;/strong&gt; six datasets, fourteen clicks each, and no record afterwards of which buffer distance you actually used.">By hand</button>
      <button type="button" data-spatial-mode="loop" aria-pressed="false"
        data-caption="&lt;strong&gt;Looped:&lt;/strong&gt; three lines run over all six. The script is the record—every parameter is visible in it, and it can be rerun on new data.">Loop</button>
      <button type="button" data-spatial-mode="caught" aria-pressed="false"
        data-caption="&lt;strong&gt;Caught:&lt;/strong&gt; one input is missing. Wrapped in a try block, the loop reports which one and finishes the other five.">Error caught</button>
    </div>
    <svg class="spatial-demo__map gp-demo" viewBox="0 0 700 430" role="img" aria-labelledby="gp-title gp-desc">
      <title id="gp-title">Six datasets processed by hand, in a loop, and with errors caught</title>
      <desc id="gp-desc">Six feature classes on the left and a console on the right. Processing by hand leaves no record; a loop prints each result; a try block reports the one failure and continues.</desc>

      <text class="gp-heading" x="30" y="46">project.gdb</text>
      <g class="gp-chip gp-chip--1"><rect x="30" y="62" width="230" height="40" rx="7"/><text x="50" y="88">schools_01</text></g>
      <g class="gp-chip gp-chip--2"><rect x="30" y="112" width="230" height="40" rx="7"/><text x="50" y="138">schools_02</text></g>
      <g class="gp-chip gp-chip--3"><rect x="30" y="162" width="230" height="40" rx="7"/><text x="50" y="188">schools_03</text></g>
      <g class="gp-chip gp-chip--4"><rect x="30" y="212" width="230" height="40" rx="7"/><text x="50" y="238">schools_04</text></g>
      <g class="gp-chip gp-chip--5"><rect x="30" y="262" width="230" height="40" rx="7"/><text x="50" y="288">schools_05</text></g>
      <g class="gp-chip gp-chip--6"><rect x="30" y="312" width="230" height="40" rx="7"/><text x="50" y="338">schools_06</text></g>
      <text class="gp-foot gp-foot--byhand" x="30" y="386">84 clicks, nothing written down</text>
      <text class="gp-foot gp-foot--loop" x="30" y="386">3 lines, rerunnable on new data</text>
      <text class="gp-foot gp-foot--caught" x="30" y="386">one bad input, five good outputs</text>

      <rect class="gp-console" x="300" y="56" width="370" height="312" rx="10"/>

      <g class="gp-lines gp-lines--byhand" aria-hidden="true">
        <text class="gp-comment" x="322" y="100"># no output, because nothing ran</text>
        <text class="gp-comment" x="322" y="130"># which distance did you use?</text>
        <text class="gp-comment" x="322" y="160"># was it the same every time?</text>
      </g>

      <g class="gp-lines gp-lines--loop" aria-hidden="true">
        <text x="322" y="100">buffered schools_01</text>
        <text x="322" y="130">buffered schools_02</text>
        <text x="322" y="160">buffered schools_03</text>
        <text x="322" y="190">buffered schools_04</text>
        <text x="322" y="220">buffered schools_05</text>
        <text x="322" y="250">buffered schools_06</text>
        <text class="gp-done" x="322" y="292">done — 6 of 6</text>
      </g>

      <g class="gp-lines gp-lines--caught" aria-hidden="true">
        <text x="322" y="96">buffered schools_01</text>
        <text x="322" y="124">buffered schools_02</text>
        <text x="322" y="152">buffered schools_03</text>
        <text class="gp-err" x="322" y="180">failed on schools_04:</text>
        <text class="gp-err gp-err--detail" x="322" y="206">ERROR 000732 input does not exist</text>
        <text x="322" y="234">buffered schools_05</text>
        <text x="322" y="262">buffered schools_06</text>
        <text class="gp-done" x="322" y="300">done — 5 of 6, 1 reported</text>
      </g>
    </svg>
    <p class="spatial-demo__caption" data-spatial-caption><strong>By hand:</strong> six datasets, fourteen clicks each, and no record afterwards of which buffer distance you actually used.</p>
  </div>
</section>

<nav class="resource-dock" aria-label="Geospatial Programming lesson resources">
  <a href="#learning-goals"><span>01</span><strong>Learn</strong><small>Concepts &amp; choices</small></a>
  <a href="../../slides/geospatial-programming-intro/"><span>02</span><strong>Slides</strong><small>Visual walkthrough</small></a>
  <a href="../../labs/intro-to-geospatial-programming/"><span>03</span><strong>Lab</strong><small>Build a working script</small></a>
  <a href="#further-reading"><span>04</span><strong>Read</strong><small>Go further</small></a>
</nav>

<div class="lesson-prologue" markdown="1">

## The question beneath the tool

A sequence of clicks leaves no record. Six months later nobody can reconstruct which buffer distance was actually used, including you.

So the question is not whether code is faster. **Could you prove what you did?**

</div>

## Learning goals

By the end of this lesson, you can:

- Explain what scripting gives you that clicking does not, and where it is not worth the effort.
- Run geoprocessing tools through ArcPy and read the errors it returns.
- Set a workspace and use it to control where outputs land.
- Loop a tool over many inputs.
- Recognise when a workflow should be a script rather than a sequence of clicks.

## Key concepts

<div class="concept-lead" markdown="1">

### Repeatability, not speed

**A script is a written record of exactly what was done, in order, with every parameter visible.** It can be rerun on new data, corrected and rerun, handed to a colleague, or attached to a paper so a reviewer can check the method.

The reasonable threshold: if you will do it more than about three times, if you must be able to prove what you did, or if the input will change and the analysis must be rerun, write it down as code.

</div>

### ArcPy exposes ArcGIS Pro's tools to Python

Every tool in the Geoprocessing pane is available as a function, and the parameters are the same ones in the dialog, in the same order.

```python
import arcpy

arcpy.env.workspace = r"C:\gis\project\project.gdb"
arcpy.env.overwriteOutput = True

arcpy.analysis.Buffer("schools", "schools_800m", "800 Meters",
                      dissolve_option="ALL")
```

Two details there matter more than the tool call. The `r` before the path makes it a raw string, so Windows backslashes are not read as escape characters — the first error most people hit. And `env.workspace` sets the default location for inputs and outputs, so names can be used instead of full paths.

### The Python window is for trying things; a file is for keeping them

The window inside ArcGIS Pro runs against your open project, which makes it ideal for testing a single call. Once it works, move it into a `.py` file, because the window's history is not a deliverable.

### Loops are where the payoff arrives

The same three lines that buffer one layer will buffer thirty.

```python
import arcpy

arcpy.env.workspace = r"C:\gis\project\project.gdb"

for fc in arcpy.ListFeatureClasses("schools_*"):
    arcpy.analysis.Buffer(fc, f"{fc}_800m", "800 Meters")
    print(f"buffered {fc}")
```

`ListFeatureClasses` returns what is in the workspace, so the script adapts to whatever is there rather than needing a hand-written list. **The `print` is not decoration**: when a loop runs for several minutes, output is the only evidence of progress, and it tells you which item failed when one does.

### Read the errors properly

ArcPy raises `arcpy.ExecuteError` when a tool fails, and `arcpy.GetMessages(2)` returns why. Wrapping a loop in a try block means one bad input does not abandon the other twenty-nine — the third state of the demo above.

```python
for fc in arcpy.ListFeatureClasses():
    try:
        arcpy.analysis.Buffer(fc, f"{fc}_buf", "500 Meters")
    except arcpy.ExecuteError:
        print(f"failed on {fc}: {arcpy.GetMessages(2)}")
```

### Automation does not fix a wrong method

A script that runs a flawed analysis simply runs it flawlessly, thirty times, faster than before. Everything earlier in this course about checking record counts, coordinate systems and selections applies with more force here, because there is no map redrawing in front of you to make the mistake visible.

## Common mistakes

<div class="mistake-grid" markdown="1">

<div markdown="1">

### 01 · Unescaped Windows paths

Use a raw string or forward slashes. This is the first error almost everyone meets.

</div>

<div markdown="1">

### 02 · Forgetting `overwriteOutput`

The first run works, the second fails because the output already exists.

</div>

<div markdown="1">

### 03 · Silent loops

Without printing, a failure part way through is invisible until you go looking for the outputs.

</div>

<div markdown="1">

### 04 · Scripting a one-off

The dialog is faster for genuinely single-use work. Code earns its keep on repetition.

</div>

</div>

## Practice task

Take a geoprocessing operation you already performed manually earlier in the course.

1. Reproduce it in the Python window as a single ArcPy call. Confirm the output matches what you produced by hand, by comparing record counts.
2. Move the code into a `.py` file, set the workspace explicitly, and run it again.
3. Extend it into a loop that runs over at least three input datasets, printing progress.
4. Break it deliberately — point it at a dataset that does not exist — and capture the error message ArcPy returns.

<div class="deliverable-card" markdown="1">

## Deliverable

- Your final script, commented well enough that a classmate could run it.
- A screenshot of the console output from the loop.
- The error message from the deliberate failure, with one to two sentences on what it told you.
- Two to three sentences on where in this course scripting would have saved you time, and where it would not have been worth it.

</div>

## Labs {: #labs }

<div class="lab-cards" markdown="1">

<a href="../../labs/intro-to-geospatial-programming/" class="lab-card">
  <span>Lab</span>
  <strong>Intro to Geospatial Programming</strong>
  <small>Building a working ArcPy script step by step.</small>
</a>

</div>

## Further reading

<div class="reading-cards" markdown="1">

<a href="https://doc.esri.com/en/arcgis-pro/latest/arcpy/main/arcgis-pro-arcpy-reference.html" class="reading-card">
  <span>Documentation</span>
  <strong>Esri · ArcPy Reference</strong>
  <small>Every tool as a function, with its parameters and return values.</small>
</a>

<a href="https://learn.arcgis.com/en/paths/analysis-in-arcgis-pro/" class="reading-card">
  <span>Tutorial path</span>
  <strong>Esri · Analysis in ArcGIS Pro</strong>
  <small>Analysis workflows that are worth automating once you can.</small>
</a>

</div>

<aside class="lesson-next">
  <p>Continue the collection</p>
  <a href="../09-future-of-gisc/"><span>Next lesson</span><strong>The Future of GISc →</strong></a>
</aside>
