<template>
  <div class="magazine-container">
    <div class="magazine-content">
      <div class="magazine-header">
        <h1>{{ getMagazineHeader.title }}</h1>
        <img
          :src="
            require('@/assets/Items/Service/Magazine/' + getMagazineHeader.img)
          "
          alt=""
        />
      </div>

      <div class="magazine-wrapper">
        <div class="magazine-bg-top"></div>
        <div class="magazine-bg-bottom"></div>
        <router-link :to="`/magazine/${item.id}`" class="magazine-items" v-for="(item, idx) in list" :key="idx">
          <img
            :src="require('@/assets/Items/Service/Magazine/' + item.img)"
            alt=""
          />
          <h3>{{ item.name }}</h3>
          <p>{{ item.descript }}</p>
          <span>{{ item.price }}</span>
        </router-link>
      </div>

      <app-pagination
        :data="getMagazineItems"
        :limit="12"
        @paginate="paginatedMagazine"
      />
    </div>
  </div>
</template>
<script>
import AppPagination from "@/components/pages/common/AppPagination.vue";
export default {
  name: "museum-magazine",
  components: { AppPagination },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getData();
  },
  computed: {
    getMagazineHeader() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getMagazine &&
        this.$store.getters.getMagazine;
      let header;
      items.forEach((element) => {
        if (element.id == 1) {
          header = element;
        }
      });
      return header;
    },
    getMagazineItems() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getMagazine &&
        this.$store.getters.getMagazine;
      let item;
      items.forEach((element) => {
        if (element.id == 2) {
          item = element.magazine;
        }
      });
      return item;
    },
  },
  methods: {
    getData() {
      this.list = this.getMagazineItems.slice(0, 12);
    },
    paginatedMagazine(val) {
      this.list = val;
    },
  },
};
</script>
