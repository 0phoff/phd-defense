---
theme: eavise
addons:
  - slidev-addon-animattr
transition: fade

author: Tanguy Ophoff
date: 26 June 2023
image: /earthobservation.jpg
image-transform: scale(1.1) 
image-filter: grayscale(0.4)
color-opacity: 0.5
---
# Aerial Object Detection
## PhD Defense

<div class="quote">

**1052**

satellites  
observing  
earth

</div>

<style>

.quote {
  @apply text-8l;
  line-height: 1.3;
  text-transform: uppercase;
  font-weight: 300;
  text-align: center;

  @apply flex-(~ col align-center justify-center gap-1);
  position: absolute;
  inset: 0 50% 0 0;

  & p:first-child {
    @apply text-12l;
  }
}

</style>

---
layout: none
---
<div class="!w-full !h-full bg-black grid-(~ rows-[1fr_1fr_1fr] gap-4) grid-hidden text-white">

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80)"
  imageFilter="grayscale(0.9)"
  v-click
>

How can we adapt detection algorithms  
to work on remote sensing data?

</Block>

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1506373823672-c9071ba1e864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)"
  imageFilter="grayscale(0.9)"
  v-click
>

How to combine color and depth data  
to improve detection models?

</Block>

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80)"
  imageFilter="grayscale(0.9)"
  v-click
>

How much can we speed up our models  
whilst maintaining the accuracy?

</Block>

<div v-click style="display:none" />

</div>

<style>
  .block p {
    @apply text-(center 20l);
    line-height: 1.2;
  }

  .slidev-vclick-target {
    transition: translate 200ms ease-in;
  }
  .block::after {
    transition: background-color 200ms;
  }

  .slidev-vclick-hidden {
    translate: 100% 0;
  }
  .block:has(+ .slidev-vclick-prior), .block:has(+ .slidev-vclick-current) {
    --color: black !important;
    color: rgb(150,150,150);
  }
</style>

---
title: Section Teach
layout: section
number: 1
---

---
src: pages/01-teach.md
color: var(--sns-desat-0)
icon: teach
---

---
title: Section Satellite
layout: section
number: 2
---

---
src: pages/02-satellite.md
color: var(--sns-desat-1)
icon: satellite
---

---
title: Section Fusion
layout: section
number: 3
---

---
src: pages/03-fusion.md
color: var(--sns-desat-2)
icon: fusion
---

---
title: Section Plane
layout: section
number: 4
---

---
src: pages/04-plane.md
color: var(--sns-desat-3)
icon: plane
---

---
title: Section Speed
layout: section
number: 5
---

---
src: pages/05-speed.md
color: var(--sns-desat-4)
icon: speed
---

---
title: Section Conclusion
layout: section
---

---
layout: none
clicks: 7
---
<div class="!w-full !h-full bg-black grid-(~ rows-[1fr_1fr_1fr] gap-4) grid-hidden text-white">

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80)"
  imageFilter="grayscale(0.9)"
  v-click="1"
>

<div v-click-hide="2">

How can we adapt detection algorithms  
to work on remote sensing data?

</div>

<div class="answer" v-click="2">
<span>sliding<br/>window</span>
<span>scene-specific<br/>processing</span>
<span>ResnetYolo</span>
</div>

</Block>

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1506373823672-c9071ba1e864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)"
  imageFilter="grayscale(0.9)"
  v-click="3"
>

<div v-click-hide="4">

How to combine color and depth data  
to improve detection models?

</div>

<div class="answer" v-click="4">
<span>transparent<br/>fuse layer</span>
<span>mid-late<br/>fusion</span>
<span>different<br/>use cases</span>
<span>remote<br/>sensing</span>
</div>

</Block>

<Block
  class="w-full h-full flex-(~ items-center justify-center) p-5"
  :color-opacity="0.6"
  image="url(https://images.unsplash.com/photo-1517953377824-516f2dca803b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80)"
  imageFilter="grayscale(0.9)"
  v-click="5"
>

<div v-click-hide="6">

How much can we speed up our models  
whilst maintaining the accuracy?

</div>

<div class="answer" v-click="6">
<span>careful<br/>selection</span>
<span>constrainedness</span>
<span>academic<br/>4x</span>
<span>industrial<br/>15x</span>
</div>

</Block>

<div v-click="7" style="display:none" />

</div>

<style>
  .block p {
    @apply text-(center 20l);
    line-height: 1.2;
  }

  .block.slidev-vclick-target {
    transition: translate 200ms ease-in;
  }
  .block.slidev-vclick-hidden {
    translate: 100% 0;
  }
  .block::after {
    transition: background-color 200ms;
  }
  .block:has(+ .slidev-vclick-prior), .block:has(+ .slidev-vclick-current) {
    --color: black !important;
    color: rgb(200,200,200);
  }

  .answer {
    @apply absolute !p-5 flex-(~ justify-around items-center);
    inset: 0;

    span {
        @apply text-16l text-center;
        display: block;
        text-transform: lowercase;
        font-variant: small-caps;
    }
  }
</style>
