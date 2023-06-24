---
layout: image
image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
image-filter: 'blur(3px) grayscale(60%)'
image-transform: scale(1.01)
color: var(--slidev-theme-primary)
disabled: true
---

# Questions

<div class="icons">
  <IconTeach />
  <IconSatellite />
  <IconFusion />
  <IconPlane />
  <IconSpeed />
</div>

<style>
  h1 {
    @apply mt-48 text-center text-28l;
  }
  
  .icons {
    @apply flex-(~ row justify-between items-center) w-[45%];
    position: absolute;
    left: 50%;
    bottom: 2rem;
    transform: translateX(-50%);
    gap: 2rem;

    svg {
      opacity: 0.6;
      width: 60%;
      fill: white !important;
      margin: 0 auto;
    }
  }
</style>
