<template>
  <div class="magazine-inner-container">
    <div class="magazine-inner-content">
      <div class="inner-header">
        <h1>Сувенир</h1>
        <img
          :src="
            require('@/assets/Items/Service/Magazine/' + getInnerHeader.img)
          "
          alt=""
        />
      </div>

      <div class="inner-wrapper">
        <div class="wrapper-header">
          <h2>{{ getInnerHeader.name }}</h2>
          <div class="header-right">
            <p>Поделиться:</p>
            <link-items :share-active="true" />
          </div>
        </div>

        <div class="wrapper-content">
          <div class="inner-bg"></div>
          <div class="content-left">
            <div class="left-slider">
              <one-itemous-slider :data="getMagazineSlide" />
            </div>
          </div>
          <div class="content-right">
            <p>
              Тамара Петросян родилась 16 (29) марта 1906 года в Новом Маргилане
              (ныне — Фергана, Узбекистан)[1] (по другим источникам — в посёлке
              железнодорожной станции Горчаково Маргиланского горсовета)[2]). По
              национальности армянка[2][3]. С 1919 года выступала в составе
              агитбригады под руководством Хамзы Ниязи.
            </p>
            <div class="price-wrapper">
              <div class="right-center">
              <span>Доставка: <i>бесплатно</i></span>
              <span>Где можно преобрести: <i>Ташкент</i></span>
              <span>В наличии: <i>есть </i></span>
            </div>
            <div class="right-bottom">
              <p class="price">{{ getInnerHeader.price }}</p>
              <button>Купить</button>
            </div>
            </div>
          </div>

          <!-- Horizontal Items Start 1 -->
          <div class="horizontall-right-center">
            <span>Доставка: <i>бесплатно</i></span>
              <span>Где можно преобрести: <i>Ташкент</i></span>
              <span>В наличии: <i>есть </i></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LinkItems from "@/components/pages/common/LinkItems.vue";
import OneItemousSlider from "@/components/pages/common/OneItemousSlider.vue";
export default {
  components: { LinkItems, OneItemousSlider },
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
        this.$store.getters?.getMagazine &&
        this.$store.getters.getMagazine;
      let item;
      items.forEach((element) => {
        if (element.id == 2) {
          element.magazine.forEach((elem) => {
            if (elem.id == this.getId) {
              item = elem;
            }
          });
        }
      });
      return item;
    },
    getMagazineInner() {
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
    getMagazineSlide(){
      return this.$store?.getters && this.$store.getters?.getMagazineSlide && this.$store.getters.getMagazineSlide
    }
  },
};
</script>
