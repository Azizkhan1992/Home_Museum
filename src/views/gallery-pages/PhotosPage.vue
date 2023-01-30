<template>
  <div class="photos-container">
    <div class="photos-content">
      <div class="photos-header">
        <h1>{{ getPhotosHeader.title }}</h1>
        <div class="header-photos">
          <img
            :src="
              require('@/assets/Items/Gallery/Photos/' + getPhotosHeader.img)
            "
            alt=""
            class="img-one"
          />
          <img
            :src="
              require('@/assets/Items/Gallery/Photos/' + getPhotosHeader.img1)
            "
            alt=""
            class="img-two"
          />
        </div>
      </div>

      <div class="photos-wrapper">
        <img
          :src="require('@/assets/Items/Gallery/Photos/' + item)"
          alt=""
          v-for="(item, idx) in list"
          :key="idx+1"
            :class="{'fat-images' : idx+1 == 1 || idx+1 == 2 || idx+1 == 3 || idx+1 == 7 || idx+1 == 8 || idx+1 == 9}"
        />
      </div>


      <app-pagination
      :data="getPhotos"
      :limit="12"
      @paginate="paginatedPhotos"
      />

    </div>
  </div>
</template>
<script>
import AppPagination from '@/components/pages/common/AppPagination.vue'
export default {
  name: "museum-photos",
  components: {AppPagination},
  data(){
    return {
        list: []
    }
  },
  mounted(){
    this.getPhotosList()
  },
  computed: {
    getPhotosHeader() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getPhotos &&
        this.$store.getters.getPhotos;
      let header;
      items.forEach((element) => {
        if (element.id == 1) {
          header = element;
        }
      });
      return header;
    },
    getPhotos() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getPhotos &&
        this.$store.getters.getPhotos;
      let photos;
      items.forEach((element) => {
        if (element.id == 2) {
          photos = element.images;
        }
      });
      return photos;
    },
  },

  methods: {
    getPhotosList(){
        this.list = this.getPhotos.slice(0, 12)
    },
    paginatedPhotos(val){
        this.list = val
    }
  }
};
</script>
