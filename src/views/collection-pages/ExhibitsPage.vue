<template>
  <div class="exhibits-container">
    <div class="exhibits-content">
      <div class="exhibits-header">
        <h1>{{ getExhibitsHeader.title }}</h1>
        <img
          :src="
            require('@/assets/Items/Collection/Exhibits/' +
              getExhibitsHeader.img)
          "
          alt=""
        />
      </div>

      <div class="exhibits-wrapper">
        <div class="exhibits-bg-one"></div>
        <div class="exhibits-bg-two"></div>
        <div class="exhibits-bg-three"></div>
        <router-link
          :to="`/exhibits/${item.id}`"
          class="exhibit-items"
          v-for="(item, idx) in list"
          :key="idx"
          :id="idx + 1"
          :class="{
            reverse:
              idx + 1 == 5 ||
              idx + 1 == 6 ||
              idx + 1 == 7 ||
              idx + 1 == 8 ||
              idx + 1 == 13 ||
              idx + 1 == 14 ||
              idx + 1 == 15 ||
              idx + 1 == 16,
              'horizontall': idx+1 == 9 ||
              idx+1 == 10 ||
              idx+1 == 11 ||
              idx+1 == 12 ||
              idx+1 == 13 ||
              idx+1 == 14 ||
              idx+1 == 15 ||
              idx+1 == 16
          }"
        >
          <div class="img-wrapper">
            <img
              :src="require('@/assets/Items/Collection/Exhibits/' + item.img)"
              alt=""
            />
          </div>
          <div class="wrapper-title">
            <h3>{{ item.title }}</h3>

            <div class="wrapper-bottom">
              <div class="bottom-left">
                <img
                  src="@/assets/Items/Collection/Exhibits/Vector.png"
                  alt=""
                />
                <p>{{ item.date }}</p>
              </div>
              <div class="bottom-right">
                <img src="@/assets/Items/Collection/Exhibits/img1.svg" alt="" />
                <p>посмотрели {{ item.seen }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <app-pagination
        :data="getExhibits"
        :limit="16"
        @paginate="getPaginateItems"
      />
    </div>
  </div>
</template>
<script>
import AppPagination from "@/components/pages/common/AppPagination.vue";
export default {
  name: "museum-exhibits",
  components: { AppPagination },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.getItems();
  },
  computed: {
    getExhibitsHeader() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getExhibits &&
        this.$store.getters.getExhibits;
      let header;

      items.forEach((element) => {
        if (element.id == 1) {
          header = element;
        }
      });
      return header;
    },
    getExhibits() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getExhibits &&
        this.$store.getters.getExhibits;

      let item;
      items.forEach((element) => {
        if (element.id == 2) {
          item = element.exhibits;
        }
      });
      return item;
    },
  },
  methods: {
    getItems() {
      this.list = this.getExhibits.slice(0, 16);
    },
    getPaginateItems(data) {
      this.list = data;
    },
  },
};
</script>
