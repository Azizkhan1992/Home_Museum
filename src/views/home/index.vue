<template>
    <div class="home-container">
        <home-header-carousel/>
        <home-about-m/>
    </div>
</template>
<script>
import HomeHeaderCarousel from '@/components/pages/home-pages/home-header-carousel/HomeHeaderCarousel.vue';
import HomeAboutM from '@/components/pages/home-pages/HomeAboutM.vue';
export default {
    name: 'museum-home',
    components: {
        HomeHeaderCarousel,
        HomeAboutM
    }
}
</script>