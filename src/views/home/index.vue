<template>
    <div class="home-container">
        <home-header-carousel/>
    </div>
</template>
<script>
import HomeHeaderCarousel from '@/components/pages/home-pages/home-header-carousel/HomeHeaderCarousel.vue';
export default {
    name: 'museum-home',
    components: {
        HomeHeaderCarousel
    }
}
</script>