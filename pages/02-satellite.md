---
title: Satellite Project
---

# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Provide a tool to automatically detect and classify  
objects in satellite imagery

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/sadl.png" class="w-[20%]" />
<img src="/logo/hexagon.png" class="w-[20%]" />
<img src="/logo/satcen.png" class="w-[10%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>

---
title: Satellite Data
---

# Satellite Detection

::content::

|            | Vehicles    | Vessels     |
|-----------:|:-----------:|:-----------:|
| Region     | 641 km²     | 676 km²     |
| Resolution | 0.3m - 0.5m | 0.3m - 0.5m |
| Objects    | 4075        | 1096        |

<img class="examples" alt="satellite examples" src="/02-satellite/anno_examples.png" />
<img class="sizes" alt="object sizes" src="/02-satellite/annotation_size.svg?url" v-click />

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[45%_1fr] rows-[45%_55%]);
        @apply mb-11 mt-6 mx-12;
    }

    table {
        @apply w-auto text-3s;
        place-self: start center;
    }
    th, td { @apply px-8; }
    tr th:first-child, tr td:first-child { @apply border-r; }

    .examples {
        grid-area: 1 / 2 / -1 / -1;
        height: 100%;
        place-self: center end;
    }

    .sizes {
        height: 100%;
        place-self: start center;
    }
</style>

---
title: Satellite Methodology
---

# Methodology

::content::

<Sat-Patches v-animattr />

<figure v-click>
    <img src="/02-satellite/architecture-yolov2.png" />
    <figcaption>Yolo II</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-yolov3.png" />
    <figcaption>Yolo III</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-dyolo.png" />
    <figcaption>DYolo</figcaption>
</figure>
<figure v-after>
    <img src="/02-satellite/architecture-yolt.png" />
    <figcaption>Yolt</figcaption>
</figure>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-[1fr_14%_14%_14%_14%] gap-4);
        @apply mb-11 mt-6 mx-12;
    }

    svg {
        place-self: center start;
        height: 80%;
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

    figure.slidev-vclick-prior:nth-child(3) { transition-delay: 100ms; }
    figure.slidev-vclick-prior:nth-child(4) { transition-delay: 200ms; }
    figure.slidev-vclick-prior:nth-child(5) { transition-delay: 300ms; }
</style>

---
title: Satellite Results
clicks: 8
---

# Results

::content::

<Sat-PRFinetune class="finetune" height="100%" v-animattr v-click-hide="7"/>

<div class="ap imagenet flex-(~ col items-center justify-between) h-full" v-click="3" >
    <Sat-APVehicleImagenet class="vehicle" v-animattr :start="4" />
    <Sat-APVesselImagenet class="vessel" v-animattr :start="4" />
    <img src="/02-satellite/ap_legend.svg?url" />
</div>

<div class="ap dota flex-(~ col items-center justify-between) h-full" v-after="7" >
    <Sat-APVehicleDota class="vehicle" v-animattr :start="8" />
    <Sat-APVesselDota class="vessel" v-animattr :start="8" />
    <img src="/02-satellite/ap_legend.svg?url" />
</div>

<style>
    :deep(.slot-content) {
        @apply grid-(~ cols-2 rows-1) place-items-center;
        @apply mb-6 mt-6 mx-12;
    }

    .finetune { grid-area: 1 / 1; }
    .imagenet { grid-area: 1 / 2; }
    .dota { grid-area: 1 / 1; }
    .ap * { width: 82%;}
</style>

---
title: Satellite Contributions
---

# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How can we adapt detection algorithms to work on remote sensing data?
</Block>

<v-clicks>

- We developed a sliding window technique
- Pretrained weights from similar data improves the results
- D-Yolo works the best on this data

</v-clicks>
</div>
</div>

1. T. Ophoff, S. Puttemans, V. Kalogirou, J.-P. Robin, and T. Goedemé.
“Vehicle and Vessel Detection on Satellite Imagery: A Comparative Study on Single-Shot Detectors”.
In: _Remote Sensing_ 12.7 (2020).

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