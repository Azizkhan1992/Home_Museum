<template>
  <div class="breadcrumbs-container">
    <router-link to="/">Главная</router-link>
    <img src="@/assets/Items/Vector1.svg" alt="" />
    <p class="active">{{ path }}</p>
  </div>
</template>
<script>
export default {
  name: "breadcrumbs-page",
  props: {
    path: {
      path: {
        type: String,
        default: "",
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    // this.setBreadItems()
  },
  computed: {
    getMenuItems() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getMenuItems &&
        this.$store.getters.getMenuItems;
      return items;
    },
  },
  methods: {},
};
</script>
<style lang="scss">
.breadcrumbs-container {
  width: 100%;
  height: 78px;
  margin: 50px auto;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding-left: 35px;
  box-sizing: border-box;

  a {
    margin-right: 10px;
    font-size: 1.15rem;
    line-height: 24px;
    font-weight: 500;
    background: linear-gradient(
      180deg,
      rgba(165, 105, 53, 0.6) 0%,
      rgba(111, 85, 57, 0.6) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    &.active {
      font-size: 1.15rem;
      line-height: 24px;
      font-weight: 700;
      background: linear-gradient(180deg, #a56935 0%, #6f5539 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  img {
    margin-right: 10px;
  }
}

@media screen and (min-width: 320px) and (max-width: 540px) {
  .breadcrumbs-container a{
    font-size: 0.85rem;
  }
  .breadcrumbs-container p.active{
    font-size: 0.95rem;
  }
}
</style>
