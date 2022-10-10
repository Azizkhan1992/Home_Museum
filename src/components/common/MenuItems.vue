<template>
    <div class="menu-items-container">
        <ul>
            <li v-for="(menu, idx) in menuItems" :key="idx" :class="{'active-menu': menu.url == $store.state.activeSubmenu}">
                <router-link :to="menu.url">{{menu.name}}</router-link>
            </li>
        </ul>
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
            console.log(this.Items)
        }
    }
}
</script>
<style lang="scss">
.menu-items-container{
    width: 25%;
    height: 500px;
    position: fixed;
    top: 0;
    left: 60px;
}
.active-menu a {
    color: rgb(49, 211, 79);
    font-size: 16px;
}
</style>