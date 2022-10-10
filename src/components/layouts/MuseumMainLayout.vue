<template>
  <div class="museum-main-container">
    <museum-header-layout />
    <menu-items v-if="isMenuActive" :activeMenu="activeItem" :activeSubmenu="activeSubmenu"></menu-items>>
    <router-view />
    <museum-footer-layout />
  </div>
</template>
<script>
import MuseumHeaderLayout from "./MuseumHeaderLayout.vue";
import MuseumFooterLayout from "./MuseumFooterLayout.vue";
import MenuItems from "@/components/pages/common/MenuItems.vue";
export default {
  name: "main-layout",
  components: { MuseumHeaderLayout, MuseumFooterLayout, MenuItems },
  data() {
    return {
      isMenuActive: false,
      currentPath: null,
      activeItem: null,
      activeSubMenu: null
    };
  },
  computed: {       
    getMenuItems() {
      let menuItems =
        this.$store?.getters &&
        this.$store.getters?.getMenuItems &&
        this.$store.getters.getMenuItems;
      return menuItems;
    },
  },
  methods: {
    currentRoute() {
        this.getMenuItems.forEach((element) => {
          if (element.subMenu.length > 0) {
            element.subMenu.forEach(elem=>{
                let url = elem.url.split('/')
                if(url[1] == this.currentPath[1]){
                    this.activeItem = elem
                    this.activeSubMenu = element
                }
            })
          }
        });
    },
  },

  watch: {
    '$route'(){
        this.currentPath = window.location.pathname.split('/')
        
      if(this.currentPath[1] !== '' && this.currentPath[1] !== 'contacts' && this.currentPath.length == 2){
        this.isMenuActive = true
        this.currentRoute()
      }else{
        this.isMenuActive = false
      }
    }
  }
};
</script>
