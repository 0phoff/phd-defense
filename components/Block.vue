<script setup>
const props = defineProps({
    color: {
        type: String,
        default: 'var(--slidev-theme-primary)',
    },
    colorOpacity: Number,
    image: String,
    imageFilter: String,
    imageTransform: String,
})
</script>

<template>
    <div :class="['block', image ? 'image-block' : '']" :style="{'--color': color}">
        <slot />
    </div>
</template>

<style scoped>
.block {
    position: relative;
    overflow: hidden;
    isolation: isolate;

    &::after {
        content: '';
        position: absolute;
        inset: -5px;
        z-index: -1;
        background-color: var(--color);
        opacity: v-bind('props.colorOpacity');
    }

    & > :deep(*:first-child) {
        padding-top: 0;
        margin-top: 0;
    }

    & > :deep(*:last-child) {
        padding-bottom: 0;
        margin-bottom: 0;
    }
}

.image-block::before {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    z-index: -2;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: v-bind('props.image');
    filter: v-bind('props.imageFilter');
    transform: v-bind('props.imageTransform');
}
</style>