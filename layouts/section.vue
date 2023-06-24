<script setup>
import IconTeach from '../components/icons/IconTeach.svg'
import IconSatellite from '../components/icons/IconSatellite.svg'
import IconFusion from '../components/icons/IconFusion.svg'
import IconPlane from '../components/icons/IconPlane.svg'
import IconSpeed from '../components/icons/IconSpeed.svg'
import IconConclusion from '../components/icons/IconConclusion.svg'

const props = defineProps({ number: {type: Number, default: NaN} })

const backgrounds = [
  {
    '--image': 'url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80)',
    '--filter': 'grayscale(1)',
    '--color': 'var(--sns-desat-0)',
  },
  {
    '--image': 'url(https://images.unsplash.com/photo-1540198163009-7afda7da2945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80)',
    '--filter': 'grayscale(1) brightness(0.8)',
    '--color': 'var(--sns-desat-1)',
  },
  {
    '--image': 'url(https://images.unsplash.com/photo-1613685877679-57222e9e8170?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80)',
    '--filter': 'grayscale(1) brightness(0.6)',
    '--color': 'var(--sns-desat-2)',
  },
  {
    '--image': 'url(https://images.unsplash.com/photo-1574980362852-67795d06a31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80)',
    '--filter': 'grayscale(1) brightness(0.6)',
    '--color': 'var(--sns-desat-3)',
  },
  {
    '--image': 'url(https://images.unsplash.com/photo-1624880272692-f4c017b2b9ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80)',
    '--filter': 'grayscale(1) brightness(1.1)',
    '--color': 'var(--sns-desat-4)',
  },
  {
    '--image': 'url(https://images.unsplash.com/photo-1585521607120-182732851afe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80)',
    '--filter': 'grayscale(1) brightness(0.5)',
    '--color': 'var(--sns-desat-8)',
  },
]

</script>

<template>
  <div class="slidev-layout custom-section" v-animattr :length="number >= 0 ? 1 : 0">
    <div :class="['pilar', number == 1 ? 'current' : '', number < 1 ? 'next': '']" :style="backgrounds[0]">
      <IconTeach class="icon" />
    </div>

    <div :class="['pilar', number == 2 ? 'current' : '', number < 2 ? 'next': '']" :style="backgrounds[1]">
      <IconSatellite class="icon" />
    </div>

    <div :class="['pilar', number == 3 ? 'current' : '', number < 3 ? 'next': '']" :style="backgrounds[2]">
      <IconFusion class="icon" />
    </div>

    <div :class="['pilar', number == 4 ? 'current' : '', number < 4 ? 'next': '']" :style="backgrounds[3]">
      <IconPlane class="icon" />
    </div>

    <div :class="['pilar', number == 5 ? 'current' : '', number < 5 ? 'next': '']" :style="backgrounds[4]">
      <IconSpeed class="icon" />
    </div>

    <!-- <div :class="['pilar', number == 6 ? 'current' : '', number < 6 ? 'next': '']" :style="backgrounds[5]">
      <IconConclusion class="icon" />
    </div> -->
  </div>
</template>