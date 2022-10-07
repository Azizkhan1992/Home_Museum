<template>
    <div class="museum-main-container">
        <museum-header-layout/>
        <router-view/>
        <museum-footer-layout/> 
    </div>
</template>
<script>
    import MuseumHeaderLayout from './MuseumHeaderLayout.vue';
    import MuseumFooterLayout from './MuseumFooterLayout.vue'
export default {
    name: 'main-layout',
    components: {MuseumHeaderLayout, MuseumFooterLayout}
}
</script>