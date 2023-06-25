---
title: Fusion Project
---
# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Improve the accuracy of object detection networks  
by combining color and depth images

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/omnidrone.png" class="w-[20%]" />
<img src="/logo/stdl.png" class="w-[20%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>

---
title: Fusion Data
---
# RGBD Fusion

::content::

<v-clicks>
<figure>
    <figcaption>EPFL Relabeled</figcaption>
    <img src="/03-fusion/epfl_rgb.png" />
    <img src="/03-fusion/epfl_d.png" />
</figure>
<figure>
    <figcaption>KITTI</figcaption>
    <img src="/03-fusion/kitti_rgb.png" />
    <img src="/03-fusion/kitti_d.png" />
</figure>
<figure>
    <figcaption>PCB screws</figcaption>
    <img src="/03-fusion/screws_rgb.png" />
    <img src="/03-fusion/screws_d.png" />
</figure>
</v-clicks>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-3 rows-1) place-items-center;
        @apply mb-6 mt-6 mx-12;
    }

    figure {
        @apply flex-(~ col items-center justify-around) h-full;
    }
    figure img {
        width: 60%;
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }

    .slidev-vclick-hidden {
        opacity: 1 !important;

        img {
            opacity: 0 !important;
        }
    }

    .slidev-vclick-current img {
        transition: opacity 500ms ease-in-out;
    }
</style>

---
title: Fusion Methodology
clicks: 3
---
# Methodology

::content::

<Fusion-Network class="fusion" v-animattr :start="2" />
<img class="fusion" src="/03-fusion/fuse_layer.svg?url" v-click="1" />
<figure v-click="3">
    <img src="/03-fusion/architecture-yolov2.png" />
    <figcaption>Yolo II</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-12 items-center);
        @apply mb-11 mt-6 mx-12;
    }

    .fusion {
        width: 0;
        flex-grow: 1;
    }

    figure {
        @apply flex-(~ col items-center justify-center) text-2s h-full;
        img { height: 75%; }
    }
    figcaption {
        text-transform: lowercase;
        font-variant: small-caps;
        font-size: 1.25em;
    }
</style>

---
title: Fusion Results
---
# Results

::content::

<Fusion-APepfl v-animattr :start="0" :length="1"/>
<Fusion-APkitti v-animattr :start="0" :length="1"/>
<Fusion-APscrews v-animattr :start="0" :length="1"/>

<style>
    :deep(.slot-content) {
        @apply flex-(~ row nowrap gap-6 items-center);
        @apply mb-11 mt-6 mx-12;
    }

    img, svg {
        width: 0;
        flex-grow: 1;
    }

    svg[data-animattr] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"])) {
        transform: scaleX(0);
    }

    svg[data-animattr~="0"] :deep(:where([fill="#5875a4"], [fill="#cc8963"], [fill="#5f9e6e"])) {
        transform: scaleX(1);
        transition: transform 500ms ease-in-out 100ms;
    }
</style>

---
title: Fusion Contributions
---
# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How to combine color and depth data to improve detection models?
</Block>

<v-clicks>

- We developed a transparent fuse layer
- RGBD improved the results on 3 different datasets
- Midway to late fusion is optimal

</v-clicks>
</div>
</div>

2. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Improving Real-Time Pedestrian Detectors with RGB+Depth Fusion”.
In: 15th _AVSS_ (2018).
3. T. Ophoff, K. Van Beeck, and T. Goedemé.
“Exploring RGB+Depth Fusion for Real-Time Object Detection”.
In: _Sensors_ 19.4 (2019).

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