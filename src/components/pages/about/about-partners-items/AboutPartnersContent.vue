<template>
  <div class="partners-content-container">
    <div class="partners-content">
        <div class="partners-bg"></div>
      <p>{{ getPartnersTitle }}</p>

      <div class="partners-wrapper">
        <div class="partner-items" v-for="item, idx in list" :key="idx">
        <div class="item-circle">
            <img src="@/assets/Items/About/AboutPartners/img1.svg" alt="">
        </div>
        <div class="partners-data">
            <p>{{item.name}}</p>
            <div class="partner-mail items">
                <img src="@/assets/Items/About/AboutPartners/Vector.png" alt="">
                <span>{{item.mail}}</span>
            </div>
            <div class="partner-phone items">
                <img src="@/assets/Items/About/AboutPartners/Vector1.png" alt="">
                <span>{{item.phone}}</span>
            </div>
            <div class="partner-web items">
                <img src="@/assets/Items/About/AboutPartners/Vector2.png" alt="">
                <span>{{item.web}}</span>
            </div>
        </div>
        </div>
      </div>

      <app-pagination
      :data="getPartners"
      :limit="3"
      @paginate="paginateData"
      />


    </div>
  </div>
</template>
<script>
import AppPagination from '@/components/pages/common/AppPagination.vue'
export default {
    components: {AppPagination},
    data(){
        return {
            list: []
        }
    },
    mounted(){
        this.getPageData();
    },
  computed: {
    getPartnersTitle() {
      let partners =
        this.$store?.getters &&
        this.$store.getters?.getPartners &&
        this.$store.getters.getPartners;

      let item;

      partners.forEach((element) => {
        if (element.id == 1) {
          item = element.title;
        }
      });
      return item;
    },

    getPartners(){
        let partners = this.$store?.getters && this.$store.getters?.getPartners && this.$store.getters.getPartners
        let item

        partners.forEach(element=>{
            if(element.id == 2){
                item = element.partners_items
            }
        })
        return item
    }
  },
  methods: {
    getPageData(){
        this.list = this.getPartners.slice(0, 3)
    },
    paginateData(data){
      this.list = data
    }
  }
};
</script>
