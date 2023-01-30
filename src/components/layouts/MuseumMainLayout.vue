<template>
<div class="museum-home-container">
    <museum-header-layout />
    <div class="museum-main-container">

    <menu-items 
      v-if="isMenuActive" 
      :activeMenu="activeItem"
      :items="submenuItems"
    ></menu-items>
    <router-view />
    <breadcrumbs-page v-if="isBreadActive && currentPath !== '/' && currentPath !== '/contacts'" :path="breadItems"/>
    </div>
    <museum-footer-layout />
</div>
</template>

<script>
import MuseumHeaderLayout from "./MuseumHeaderLayout.vue";
import MuseumFooterLayout from "./MuseumFooterLayout.vue";
import MenuItems from "@/components/pages/common/MenuItems.vue";
import BreadcrumbsPage from '@/components/pages/common/BreadcrumbsPage.vue'

export default {
    name: "main-layout",
    components: {
        MuseumHeaderLayout,
        MuseumFooterLayout,
        MenuItems,
        BreadcrumbsPage
    },
    data() {
        return {
            isMenuActive: false,
            currentPath: null,
            activeItem: null,
            submenuItems: [],
            breadItems: '',
            isBreadActive: false
        };
    },
    mounted() {
      this.currentRoute();
      this.setBreadItems()
    },
    methods: {
        currentRoute() {
          this.$store.state.menuItems.forEach((element) => {
                if (element.subMenu.length > 0) {
                    element.subMenu.forEach(elem => {
                        const anyPath = this.currentPath ? this.currentPath : this.$route.path;
                        if (elem.url == anyPath) {
                            this.activeItem = elem
                            this.submenuItems = element.subMenu;
                            this.isMenuActive = true;
                        }
                    })
                }
            });
        },

        setBreadItems(){
            if(this.currentPath){
                this.$store.state.menuItems.forEach(element => {
                if(element.subMenu.length > 0){
                    element.subMenu.forEach(elem=>{
                        if(elem.url == this.currentPath){
                            this.breadItems = elem.name
                            this.isBreadActive = true
                        }
                    })
                }
            });
            }else{
                this.currentPath = this.$route.path
                if(this.currentPath !== '/' && this.currentPath !== '/contacts'){
                    this.$store.state.menuItems.forEach(element => {
                if(element.subMenu.length > 0){
                    element.subMenu.forEach(elem=>{
                        if(elem.url == this.currentPath){
                            this.breadItems = elem.name
                            this.isBreadActive = true
                        }
                    })
                }
            });
                }
            }
        },
    },

    watch: {
        '$route': function (val) {
          this.currentPath = val.path 
            if (this.currentPath !== '/' && this.currentPath !== '/contacts') {
                this.currentRoute()
                this.setBreadItems()
            }
            
            else {
                this.isMenuActive = false
            }
        }
    }
};
</script>
