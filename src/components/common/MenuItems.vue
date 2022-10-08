<template>
    <div class="menu-items-container">

    </div>
</template>
<script>
export default {
    name: 'menu-items',
    data(){
        return{
            Items: []
        }
    },
    props:{
        menuItems: {
            type: Array,
            default: ()=>[]
        }
    },
    mounted(){
        this.getItems()
    },
    methods:{
        getItems(){
            this.Items = this.menuItems
        }
    }
}
</script>
<style lang="scss">
.menu-items-container{
    width: 25%;
    height: 500px;
    position: fixed;
    bottom: 0;
    left: 60px;
}
</style>