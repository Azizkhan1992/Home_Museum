<template>
  <div class="files-container">
    <div class="files-content">
      <div class="files-header">
        <h1>{{ get3DHeader.title }}</h1>
        <div class="header-items">
          <img
            :src="require('@/assets/Items/Gallery/3D/' + img)"
            alt=""
            v-for="(img, idx) in get3DHeader.images"
            :key="idx + 1"
            :class="{'one' : idx+1==1, 'two': idx+1== 2, 'three': idx+1==3}"
          />
        </div>
      </div>

      <div class="files-wrapper">
        <router-link :to="`/files/${item.id}`" class="file-items" v-for="item, idx in list" :key="idx">
          <div class="items-left">
            <img :src="require('@/assets/Items/Gallery/3D/' + item.img)" alt="">
          </div>

          <div class="item-right">
            <h3>{{item.title}}</h3>
            <p>{{item.descript | filteredDesc}}</p>
            <button>Подробнее</button>
          </div>
        </router-link>
      </div>

      <app-pagination
      :data="getFiles"
      :limit="6"
      @paginate="paginateFiles"
      />

    </div>
  </div>
</template>
<script>
import AppPagination from '@/components/pages/common/AppPagination.vue'
export default {
  name: "museum-files",
  components: {AppPagination},
  data(){
    return{
      list: []
    }
  },
  mounted(){
    this.getFileItems()
  },
  computed: {
    get3DHeader() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.get3DFiles &&
        this.$store.getters.get3DFiles;
      let item;
      items.forEach((element) => {
        if (element.id == 1) {
          item = element;
        }
      });
      return item;
    },
    getFiles(){
      let items =
        this.$store?.getters &&
        this.$store.getters?.get3DFiles &&
        this.$store.getters.get3DFiles;
        let item
        items.forEach(element=>{
          if(element.id == 2){
            item = element.files
          }
        })
        return item
    }
  },
  methods: {
    getFileItems(){
      this.list = this.getFiles.slice(0, 6)
    },
    paginateFiles(val){
      this.list = val
    }
  },
  filters: {
    filteredDesc(val){
      let desc = val.slice(0, 95)
      return desc
    }
  }
};
</script>
