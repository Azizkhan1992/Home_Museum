<template>
    <div class="museum-content-header">
        <div class="museum-top-content">
            <h1>{{getMenu.name}}</h1>
        </div>

    </div>
</template>
<script>
    import { menuItems } from '@/statics/testData';
export default {
    name: 'museum-top', 
    data() {
        return {
            menuItems
        }
    },
    computed:{
        getMenu(){
            let menu = this.menuItems
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