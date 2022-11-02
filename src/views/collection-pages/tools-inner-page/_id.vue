<template>
  <div class="tools-inner-container">
    <div class="tools-inner-content">
      <div class="tools-inner-header">
        <h1>Печатная машинка</h1>
        <img
          :src="require('@/assets/Items/Collection/Tools/' + getHeader)"
          alt=""
        />
      </div>

      <div class="tools-inner-wrapper">
        <div class="tools-inner-title">
          <div class="title-top">
            <div class="top-left">
              <img src="@/assets/Items/Common/Items/img1.svg" alt="" />
              <p>посмотрели {{ getToolItems.seen }}</p>
            </div>

            <div class="top-right">
              <p>Поделиться:</p>
              <link-items :share-active="true" />
            </div>
          </div>

          <h1>{{ getToolItems.name }}</h1>

          <span>{{ getToolItems.descript }}</span>
        </div>

        <div class="tools-inner-carousel">
          <h1 class="tools-header">Посмотреть также</h1>

          <div class="inner-mobile-items">
            <div class="mobile-wrapper">
              <div class="mobile-items" v-for="item, idx in mobile" :key="idx">
              <div class="mobile-top-img">
                <img :src="require('@/assets/Items/Collection/Tools/' + item.img)" alt="">
              </div>
              <p>{{item.name}}</p>
              <span>{{item.descript | filteredDesc}}</span>
              </div>
            </div>
          </div>

          <app-carousel
            :data="getCarouselData"
            :istop-active="true"
            :isButtonActive="true"
            :url="'@/assets/Items/Collection/Tools/InnerPage/'"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LinkItems from "@/components/pages/common/LinkItems.vue";
import AppCarousel from "@/components/pages/common/AppCarousel.vue";
export default {
  components: { LinkItems, AppCarousel },
  data() {
    return {
      checkId: this.$route.path,
      mobile: null
    };
  },
  mounted(){
    this.getMobileItems()
  },
  computed: {
    getCheckId() {
      let id = this.checkId.split("/");
      return id[2];
    },
    getHeader() {
      let tools =
        this.$store?.getters &&
        this.$store.getters?.getTools &&
        this.$store.getters.getTools;
      let tool;
      tools.forEach((element) => {
        if (element.id == 2) {
          element.tools.forEach((elem) => {
            if (elem.id == this.getCheckId) {
              tool = elem.img;
            }
          });
        }
      });
      return tool;
    },
    getCarouselData() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getTools &&
        this.$store.getters.getTools;
      let data;
      items.forEach((element) => {
        if (element.id == 2) {
          data = element.tools;
        }
      });
      return data;
    },
    getToolItems() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getToolPage &&
        this.$store.getters.getToolPage;
      let item;
      items.forEach((element) => {
        item = element;
      });
      return item;
    },
  },
  methods: {
    getMobileItems(){
      this.mobile = this.getCarouselData.slice(0,3)
      // console.log(this.mobile)
    }
  },
  filters: {
    filteredDesc(val){
      return val.slice(0, 250) + ' ...'
    }
  }
};
</script>
