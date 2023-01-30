<template>
  <div class="cards-inner-container">
    <div class="cards-inner-content">
      <div class="cards-inner-header">
        <h1>{{ getActiveItems.title }}</h1>
        <img
          :src="require('@/assets/Items/Service/BankCards/' + getElement.img)"
          alt=""
        />
      </div>

      <div class="cards-inner-wrapper">
        <div class="cards-bg-top"></div>
        <div class="cards-bg-bottom"></div>
        <div class="wrapper-title">
          <h3>Описание карты</h3>
          <p>
            Тамара Петросян родилась 16 (29) марта 1906 года в Новом Маргилане
            (ныне — Фергана, Узбекистан)[1] (по другим источникам — в посёлке
            железнодорожной станции Горчаково Маргиланского горсовета)[2]). По
            национальности армянка[2][3]. С 1919 года выступала в составе
            агитбригады под руководством Хамзы Ниязи.
          </p>
        </div>

        <div class="banks-wrapper">
            <h3>Выбери банк и закажи карту</h3>
            <div class="bank-items">
                <router-link to="#" v-for="bank, idx in getBankItems" :key="idx">
                <img :src="require('@/assets/Items/Service/BankCards/InnerPage/' + bank)" alt="">
            </router-link>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.path,
    };
  },
  computed: {
    getActiveId() {
      let id = this.id.split("/");
      return id[2];
    },
    getAllItems() {
      let all =
        this.$store?.getters &&
        this.$store.getters?.getCards &&
        this.$store.getters.getCards;
      let item;
      all.forEach((element) => {
        if (element.id == 2) {
          item = element.cards;
        }
      });
      return item;
    },
    getActive() {
      let active =
        this.$store?.getters &&
        this.$store.getters?.getActiveTab &&
        this.$store.getters.getActiveTab.active;
      return active;
    },
    getActiveItems() {
      let ActiveItems;
      this.getAllItems.forEach((element) => {
        if (element.value == this.getActive) {
          ActiveItems = element;
        }
      });
      return ActiveItems;
    },
    getElement() {
      let item;
      this.getActiveItems.cards.forEach((element) => {
        if (element.id == this.getActiveId) {
          item = element;
        }
      });
      // console.log(this.getActiveItems)
      return item;
    },
    getBankItems(){
        return this.$store?.getters && this.$store.getters?.getBanks && this.$store.getters.getBanks
    }
  },
};
</script>
