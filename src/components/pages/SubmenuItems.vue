<template>
    <div class="museum-top-container">
        <div class="museum-top-content">
            <h1>{{getMenu.name}}</h1>
        </div>

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