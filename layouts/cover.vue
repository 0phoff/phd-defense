<script setup>
import ImageLayout from '../node_modules/slidev-theme-eavise/layouts/image.vue';
import LogoEaviseKUL from '../node_modules/slidev-theme-eavise/components/LogoEaviseKUL.vue';

const props = defineProps({
    image: String,
    imageFilter: String,
    imageTransform: String,
    textColor: {type: String, default: 'white'},
    color: {type: String, default: 'var(--slidev-theme-primary)'},
    colorOpacity: Number,

    author: String,
    date: {
        type: String,
        default() {
          const date = new Date();
          const y = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
          const m = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
          const d = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(date);
          return `${d} ${m} ${y}`;
        },
    },
})
</script>

<template>
    <ImageLayout
        :image="props.image"
        :imageFilter="props.imageFilter"
        :imageTransform="props.imageTransform"
        :textColor="props.textColor"
        :color="props.color"
        :colorOpacity="props.colorOpacity"
        class="cover"
        v-animattr
            :length="2"
    >
        <slot />

        <div class="meta">
            {{ author }}
            <br />
            {{ date }}
        </div>

        <div class="logo">
            <LogoEaviseKUL />
        </div>
    </ImageLayout>
</template>

<style scoped>
.cover :deep(.quote) {
    opacity: 0;
}

.cover[data-animattr]::after {
    transition: opacity 750ms ease-in-out;
    opacity: 0;
}
.cover[data-animattr] :deep(:where(.meta, .logo, h1, h2, .quote)) {
    transition: opacity 750ms ease-in-out;
    opacity: 0;
}

.cover[data-animattr~="0"] :deep(.quote) { opacity: 1; }
.cover[data-animattr~="1"] :deep(.quote) { opacity: 0; }

.cover[data-animattr~="1"]::after {
    transition-delay: 750ms;
    opacity: var(--color-opacity);
}
.cover[data-animattr~="1"] :deep(:where(.meta, .logo, h1, h2)) { 
    transition-delay: 750ms;
    opacity: 1;
}
</style>