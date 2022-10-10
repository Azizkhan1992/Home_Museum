<template>
    <div class="museum-top-container">

        <menu-items :menuItems="$store.state.activeSubmenuItem"/>
    </div>
</template>
<script>
import MenuItems from '@/components/common/MenuItems.vue';
export default {
    name: 'SubmenuItems',
    components: {MenuItems},
    computed: {
        getMenu() {
            let menu = this.$store.state.menuItems;
            
            return menu;
        }
    }
}
</script>
<style>
.museum-top-container{
    width: 25%;
    height: auto;
    position: fixed;
    bottom: 0;
    left: 60px;
    z-index: 5  
}
</style>