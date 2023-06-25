---
title: Plane Project
---
# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Automatically detect objects in aerial imagery,  
whilst combining data from multiple sources and sensors

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/vstl.png" class="h-[40%]" />
<img src="/logo/vlaio.png" class="h-[40%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>

---
---
# Plane Detection

::content::

<figure>
    <figcaption>Solar Panels</figcaption>
    <img src="/04-plane/anno-examples-solar.png" />
</figure>

<div class="text">

**RGB**  
3cm GSD

**DEPTH**  
25cm GSD

</div>

<figure>
    <figcaption>Swimming Pools</figcaption>
    <img src="/04-plane/anno-examples-pool.png" />
</figure>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-6 items-center);
        @apply mb-10 mt-10 mx-24;
    }

    figure {
        @apply flex-(~ col justify-between);
        width: 40%;
        height: 100%;
        text-align: center;
    }
    img {
        width: 100%;
    }
    figcaption {
        height: 3rem;
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    .text {
        @apply flex-(~ col nowrap items-center justify-between) h-full;
        flex-grow: 1;
        text-align: center;
        padding-top: 7.5rem;
        padding-bottom: 3.5rem;
    }
</style>

---
title: Plane Dataset
---
# Dataset

::content::

|         | Solar Panels | Swimming Pools |
|--------:|:------------:|:--------------:|
| Region  | 10.1 km²     | 17.3 km²       |
| Objects | 32970        | 3000           |

<img src="/04-plane/annotation_size.svg?url" v-click />

<style>
    :deep(.slot-content) {
        @apply flex-(~ justify-between items-center);
        @apply mb-11 mt-6 mx-12;
    }

    table {
        @apply text-3s;
        width: 45%;
    }
    th, td { @apply px-8; }
    tr th:first-child, tr td:first-child { @apply border-r; }

    img { width: 50%; }
</style>

---
title: Plane Baseline
---
# Baseline

::content::

<figure v-click>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>

<v-click>

|          | Solar Panels | Swimming Pools |
|---------:|:------------:|:--------------:|
| DYOLO    | 59.67%       | **25.08%**     |
| YOLO III | **62.96%**   | 23.73%         |

</v-click>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[15%_15%_1fr] gap-6);
        @apply mb-11 mt-6 mx-20;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
    table {
        @apply place-self-center w-[80%] text-1s;
    }
    tr th:first-child, tr td:first-child { @apply border-r; }
</style>

---
title: Plane Models
---
# Models

::content::

<figure v-click>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>
<figure v-click>
    <img src="/04-plane/architecture-resnetyolo.svg?url" />
    <figcaption>ResnetYolo</figcaption>
</figure>
<figure v-click>
    <img src="/04-plane/architecture-resnetyolo-fusion.svg?url" />
    <figcaption>ResnetYolo Fusion</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[1fr_1fr_1fr_2fr] gap-6);
        @apply w-[71%] mb-11 mt-6 mx-auto;
    }

    figure {
        @apply flex-(~ col items-center) text-2s;
        width: 100%;
        place-self: end;
    }
    img {
        width: 100%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
</style>


---
title: Plane PostProcessing
---
# Post Processing

::content::

<div class="grid-(~ cols-[1fr_1fr_1fr] rows-[1fr_1fr] gap-4) place-items-center w-full h-full grid-hidden">

<img v-click src="/04-plane/nms-example-local.png" />
<img v-click src="/04-plane/nms-neighbour-diagram.svg?url" />
<img v-click src="/04-plane/nms-example-neighbour.png" />

<img class="ioa-example" v-click src="/04-plane/ioa-example.png" />
<img class="ioa-diagram" v-click src="/04-plane/ioa-diagram.svg?url" />

</div>

<style>
    :deep(.slot-content) {
        @apply mb-11 mt-6 mx-20;
    }
    img {
        height: 100%;
    }
    .ioa-example {
        height: 90.44%;
        place-self: end center;
    }
    .ioa-diagram {
        width: 84%;
        height: auto;
        grid-column-end: span 2;
        place-self: end center;
    }
</style>

---
title: Plane Results
---
# Results

::content::

<Plane-APsolar height="100%" v-animattr :start="0" :length="1" />
<img src="/04-plane/det-examples-solar.svg?url" />

<Plane-APpool height="100%" v-animattr :start="0" :length="1" />
<img src="/04-plane/det-examples-pool.svg?url" />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-2 cols-[31%_69%]) place-items-center;
        @apply mb-11 mt-6 px-[5%];
        row-gap: 1rem;
    }
    
    img {
        height: 100%;
    }

    svg {
        place-self: center start;
    }

    svg[data-animattr] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"], [fill="#b55d60"], [fill="#857aab"])) {
        transform: scaleX(0);
    }

    svg[data-animattr~="0"] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"], [fill="#b55d60"], [fill="#857aab"])) {
        transform: scaleX(1);
        transition: transform 250ms ease-in-out 100ms;
    }
</style>


---
title: Plane Contributions
---
# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we adapt detection algorithms to work on remote sensing data?
</Block>

<v-clicks>

- We further increased our results with scene-specific post-processing
- Deeper networks work well with enough data
- ResnetYolo with selectable heads is a prime candidate for remote sensing detection

</v-clicks>
</div>
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How to combine color and depth data to improve detection models?
</Block>

<v-clicks>

- Our RGBD fusion technique transfers perfectly to remote sensing
- The technique works with deeper networks as well

</v-clicks>
</div>
</div>

4. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Improving Object Detection in VHR Aerial Orthomosaics”.
In: _ECCV Workshops_ (2022).

<style>
    ul {
        @apply text-2s ml-8;
    }

    ol {
        @apply text-4s;
        list-style: decimal outside;
        max-width: 90%;
        position: absolute;
        bottom: 5px;
        left: 85px;
    }
</style>