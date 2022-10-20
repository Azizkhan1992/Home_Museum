<template>
  <div class="file-inner-container">
    <div class="file-inner-content">
      <div class="file-inner-header">
        <h1>Экспонат</h1>
        <img
          :src="require('@/assets/Items/Gallery/3D/' + getInnerHeader.img)"
          alt=""
        />
      </div>

      <div class="file-inner-wrapper">
        <div class="inner-title">
          <div class="title-top">
            <h3>Подаренная картина для Тамары Ханум</h3>
            <div class="title-right">
                <p>Поделиться:</p>
              <link-items :share-active="true" />
            </div>
          </div>

          <span>{{getInnerHeader.descript}}</span>
        </div>

        <div class="inner-3d-wrapper">
            
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LinkItems from "@/components/pages/common/LinkItems.vue";
export default {
  components: { LinkItems },
  data() {
    return {
      id: this.$route.path,
    };
  },
  computed: {
    getId() {
      let id = this.id.split("/");
      return id[2];
    },
    getInnerHeader() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.get3DFiles &&
        this.$store.getters.get3DFiles;
      let item;
      items.forEach((element) => {
        if (element.id == 2) {
          element.files.forEach((elem) => {
            if (elem.id == this.getId) {
              item = elem;
            }
          });
        }
      });
      return item;
    },
  },
};
</script>
