<template>
  <div class="museum-content-header">
    <div class="museum-top-content">
      <h1>{{ getAboutTop.topHeader }}</h1>
      <img
        :src="
          require('@/assets/Items/About/AboutMuseum/' + getAboutTop.topImage)
        "
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "museum-top",
  data() {
    return {
      menuItems: null,
    };
  },
  computed: {
    getAboutTop() {
      let topItems =
        this.$store?.getters &&
        this.$store.getters?.getAboutMuseum &&
        this.$store.getters.getAboutMuseum;

      let topItem;
      topItems.forEach((element) => {
        if (element.id == 1) {
          topItem = element;
        }
      });
      return topItem;
    },
  },
};
</script>
