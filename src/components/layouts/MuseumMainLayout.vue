<template>
    <div class="museum-main-container">
        <museum-header-layout/>
        <submenu-items v-if="$store.state.activeSubmenu"></submenu-items>
        <router-view/>
        <museum-footer-layout/> 
    </div>
</template>
<script>
    import MuseumHeaderLayout from './MuseumHeaderLayout.vue';
    import MuseumFooterLayout from './MuseumFooterLayout.vue';
    import SubmenuItems from '@/components/pages/SubmenuItems';
export default {
    name: 'main-layout',
    components: {MuseumHeaderLayout, MuseumFooterLayout, SubmenuItems},
    methods: {
        
    }
}
</script>