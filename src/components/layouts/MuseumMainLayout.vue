<template>
<div class="museum-main-container">
    <museum-header-layout />
    <menu-items 
      v-if="isMenuActive" 
      :activeMenu="activeItem"
      :items="submenuItems"
    ></menu-items>
    <router-view />
    <museum-footer-layout />
</div>
</template>

<script>
import MuseumHeaderLayout from "./MuseumHeaderLayout.vue";
import MuseumFooterLayout from "./MuseumFooterLayout.vue";
import MenuItems from "@/components/pages/common/MenuItems.vue";
import {menuItems as viewMenuItems } from '@/statics/testData'

export default {
    name: "main-layout",
    components: {
        MuseumHeaderLayout,
        MuseumFooterLayout,
        MenuItems
    },
    data() {
        return {
            isMenuActive: false,
            currentPath: null,
            activeItem: null,
            submenuItems: [],
            viewMenuItems
        };
    },
    mounted() {
      this.currentRoute();
    },
    methods: {
        currentRoute() {
          console.log('route', this.viewMenuItems)
          this.viewMenuItems.forEach((element) => {
                if (element.subMenu.length > 0) {
                    element.subMenu.forEach(elem => {
                        // let url = elem.url.split('/')
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
    },

    watch: {
        '$route': function (val) {
          this.currentPath = val.path
            console.log(val)
            if (this.currentPath !== '/' && this.currentPath !== '/contacts') {
                this.currentRoute()
            } else {
                this.isMenuActive = false
            }
        }
    }
};
</script>
