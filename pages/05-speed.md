---
title: Speed Project
---

# Project

::content::

<div class="flex-(~ col justify-between items-center) w-[80%] h-full m-auto pb-3 pt-40">

<Block class="rounded text-(center white) w-[85%] py-3">

##### Objective
Design faster and smaller object detection networks  
without deteriorating the accuracy

</Block>

<div class="flex-(~ justify-center items-end gap-30) w-full">
<img src="/logo/eavise.png" class="w-[20%]" />
<img src="/logo/omnidrone.png" class="w-[20%]" />
</div>

</div>

<style>
    h5 {
        @apply mb-2 font-bold;
        letter-spacing: 2px;
    }
</style>

---

# Speed Optimizations

::content::

<div class="grid-(~ rows-[1fr_1fr] cols-[40fr_50fr] gap-[5%_10%]) w-full h-full place-items-center grid-hidden">

<img class="jetson" src="/05-speed/jetson.png" />

<v-click>
<figure>
    <figcaption>Pascal VOC</figcaption>
    <img src="/05-speed/voc-1.jpg" />
    <img src="/05-speed/voc-2.jpg" />
</figure>

<figure>
    <figcaption>IR Surveillance</figcaption>
    <img src="/05-speed/flir-1.jpg" />
    <img src="/05-speed/flir-2.jpg" />
</figure>
</v-click>

</div>

<style>
    :deep(.slot-content) {
        @apply mb-12 mt-6 px-30;
    }

    .jetson {
        grid-area: 1 / 1 / -1 / 2;
        height: 90%;
        place-self: end center;
    }

    figure {
        @apply w-full flex-(~ row wrap justify-between items-center);

        figcaption {
            text-transform: lowercase;
            font-variant: small-caps;
            font-size: 1.25em;
            width: 100%;
            text-align: center;
        }

        img {
            width: 47%;
        }
    }
</style>

---
title: Speed Convolutions
---

# Mobile Convolutions

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-MobileConv v-animattr />

</div>

---
title: Speed Results 1
---

# Results

::content::

<Speed-APTimeVOC-1 v-animattr />
<Speed-APTimeLWIR-1 v-animattr />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-1 cols-[1fr_1fr]) place-items-center;
        @apply mb-6 mt-6 px-16;
        col-gap: 2rem;
    }

    svg {
        height: 100%;
    }
</style>

---
title: Speed Upsample
---

# Upsample

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-Upsample v-animattr />

</div>

---
title: Speed Results 2
---

# Results

::content::

<Speed-APTimeVOC-2 v-animattr />
<Speed-APTimeLWIR-2 v-animattr />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-1 cols-[1fr_1fr]) place-items-center;
        @apply mb-6 mt-6 px-16;
        col-gap: 2rem;
    }

    svg {
        height: 100%;
    }
</style>

---
title: Speed Pruning
---

# Pruning

::content::

<div class="flex-(~ col justify-center items-center) h-full w-[85%] mx-auto">

<Speed-Pruning v-animattr />

</div>

---
title: Speed Results 3
---

# Results

::content::

<Speed-APTimeVOC-3 v-animattr />
<Speed-APTimeLWIR-3 v-animattr />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-1 cols-[1fr_1fr]) place-items-center;
        @apply mb-6 mt-6 px-16;
        col-gap: 2rem;
    }

    svg {
        height: 100%;
    }
</style>

---
title: Speed Quantisation
---

# Quantisation

::content::

<div class="flex-(~ col justify-center items-center gap-10) h-full w-[85%] mx-auto pb-8">

<Speed-QuantNumber width="50%" v-animattr />

<Speed-QuantBit v-click />

</div>

---
title: Speed Results 4
---

# Results

::content::

<Speed-APTimeVOC-4 v-animattr />
<Speed-APTimeLWIR-4 v-animattr />

<style>
    :deep(.slot-content) {
        @apply grid-(~ rows-1 cols-[1fr_1fr]) place-items-center;
        @apply mb-6 mt-6 px-16;
        col-gap: 2rem;
    }

    svg {
        height: 100%;
    }
</style>

---
title: Speed Contributions
---

# Contributions

::content::

<div class="flex-(~ col justify-evenly align-center) w-[85%] h-full m-auto pb-14">
<div>
<Block :color-opacity="0.9" class="text-(white center) rounded p-1 mb-2" v-click>
How much can we speed up our models whilst maintaining the accuracy?
</Block>

<v-clicks>

- Blindly applying all optimizations does not yield the best results
- On Pascal VOC, we managed to make our model 4x faster
- On LWIR, we made our model 15x faster
- More constrained problems allow for more reduction in complexity

</v-clicks>
</div>
</div>

5. T. Ophoff, C. Gullentops, K. Van Beeck, and T. Goedemé.
“Investigating the Potential of Network Optimization for a Constrained Object Detection Problem”.
In: _Journal of Imaging_ 7.4 (2021).

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