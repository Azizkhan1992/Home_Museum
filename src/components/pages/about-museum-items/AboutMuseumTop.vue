<template>
    <div class="museum-content-header">
        <div class="museum-top-content">
            <h1>{{getMenu.name}}</h1>
        </div>

    </div>
</template>
<script>
export default {
    name: 'museum-top', 
    computed:{
        getMenu(){
            let menu = this.$store?.getters && this.$store.getters?.getMenuItems && this.$store.getters.getMenuItems
            let menuItems

            menu.forEach(element => {
                if(element.id == 2){
                    menuItems = element
                }
            });
            return menuItems;
        }
    }
}
</script>