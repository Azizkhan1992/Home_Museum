<template>
    <div class="museum-top-container">
        <div class="museum-top-content">
            <h1>{{getMenu.name}}</h1>
        </div>

        <menu-items :menuItems="getMenu.subMenu"/>
    </div>
</template>
<script>
    import MenuItems from '../common/MenuItems.vue';
export default {
    name: 'museum-top',
    components: {MenuItems},
    computed:{
        getMenu(){
            let menu = this.$store?.getters && this.$store.getters?.getMenuItems && this.$store.getters.getMenuItems
            let menuItems

            menu.forEach(element => {
                if(element.id == 2){
                    menuItems = element
                    console.log(menuItems)
                }
            });
            return menuItems;
        }
    }
}
</script>