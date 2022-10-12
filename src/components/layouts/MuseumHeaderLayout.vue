<template>
  <div class="museum-header-container">
    <div class="museum-header-content">
      <ul>
        <li v-for="(item, idx) in getMenuItems" :key="idx">
          <div class="items" v-if="item.category !== 'section'" @click="dropDeactive();">
            <router-link :to="item.url">{{ item.name }}</router-link>
          </div>

          <div
            class="drop-items"
            v-if="item.category == 'section'"
            @click="dropActive(item.id)"
          >
            <p>{{ item.name }}</p>
            <img src="@/assets/Items/Header/Vector.png" alt="" />
          </div>
        </li>
        <div class="dropdown-hidden" :class="isActive ? 'active' : 'deactive'">
            
          <div class="drop-content">

            <div class="drop-wrapper">
                <div
              class="dropdown-items"
              v-for="(drop, idy) in subItems?.subMenu"
              :key="idy"
              :id="idy + 1"
            >
              <router-link :to="drop.url">{{ drop.name }}</router-link>
            </div>
            </div>

            <div
              class="quote-content"
              
            >
              <p>{{ subItems?.quote }}</p>
              <span>{{ subItems?.ownQuote }}</span>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "museum-header",
  data() {
    return {
      isActive: false,
      subItems: null,
    };
  },
  computed:{
    getMenuItems(){
      let menuItems = this.$store?.getters && this.$store.getters?.getMenuItems && this.$store.getters.getMenuItems;
      return menuItems
    }
  },
  methods: {
    dropActive(e) {
      this.isActive = !this.isActive;
      this.getMenuItems.forEach((elem) => {
        if (elem.id == e) {
          this.subItems = elem;
        }
      });
    },
    dropDeactive(){
        this.isActive = false
    }
  },
};
</script>
