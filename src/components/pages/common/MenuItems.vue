<template>
    <div class="menu-items-container">
        <ul :class="isAboutActive ? 'drop-active' : 'drop-deactive'">
            <li v-for="(menu, idx) in items" :key="idx" :class="{'active-menu-item': menu.url == $route.path}">
                <router-link :to="menu.url">{{menu.name}}</router-link>
            </li>
        </ul>

        <div class="active-item" @click="aboutActive">
            <p>{{activeItem}}</p>
            <img src="@/assets/Items/Vector.svg" alt="">
        </div>
    </div>
</template>
<script>

export default {
    name: 'menu-items',
    data(){
        return{
            activeItem: null,
            isAboutActive: false,
        }
    },
    props:{
        items: {
            type: Array,
            default: ()=>[]
        },
        activeMenu: {
            type: Object,
            default: ()=>{}
        }
    },
    methods:{
        aboutActive(){
            this.isAboutActive =! this.isAboutActive
        }
    }
}
</script>
<style lang="scss">
.menu-items-container{
    width: 25%;
    height: auto;
    position: fixed;
    bottom: 0;
    left: 60px;
    z-index: 5;

    ul{
        width: 100%;
        padding: 0;
        height: 0;
        list-style: none;
        margin: 0;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px 0 10px 15px;
        box-sizing: border-box;
        transition: height 1s ease-out;

        &.drop-deactive{
            padding: 0;
            overflow: hidden;
        }

        &.drop-active{
            height: auto;
            transition: height 1s ease-in;
        }

        li{
            width: 100%;
            height: 24px;

            &.active-menu-item a{
                font-weight: 700;
                background: linear-gradient(180deg, #A56935 0%, #6F5539 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            a{
                text-decoration: none;
                font-size: 1rem;
                line-height: 20px;
                font-weight: 400;
                background: linear-gradient(180deg, rgba(165, 105, 53, 0.6) 0%, rgba(111, 85, 57, 0.6) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
    .active-item{
        width: 100%;
        height: 52px;
        margin-top: 15px;
        display: flex;
        align-items: center;
        padding: 10px 0 10px 10px;
        box-sizing: border-box;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 20px 20px 0 0;
        cursor: pointer;

        p{
            font-size: 1rem;
            line-height: 20px;
            font-weight: 700;
            background: linear-gradient(180deg, #A56935 0%, #6F5539 100%);
            -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
        }

        img{
            width: 16px;
            height: 10px;
            margin-left: 50px;
        }
    }
}
</style>