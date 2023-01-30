<template>
    <div class="about-museum-container">
        <about-museum-top/>
        <about-museum-content/>
    </div>
</template>
<script>
    import AboutMuseumTop from '@/components/pages/about/about-museum-items/AboutMuseumTop.vue';
    import AboutMuseumContent from '@/components/pages/about/about-museum-items/AboutMuseumContent.vue'
export default {
    name: 'about-museum',
    components: {
        AboutMuseumTop,
        AboutMuseumContent
    }
}
</script>