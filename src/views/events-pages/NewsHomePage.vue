<template>
  <div class="news-container">
    <div class="news-content">
      <div class="news-header">
        <h1>{{ getNewsHeader.title }}</h1>
        <img
          :src="require('@/assets/Items/Events/News/' + getNewsHeader.img)"
          alt=""
        />
      </div>

      <div class="news-wrapper">
        <div class="news-wrapper-bg"></div>
        <div class="news-left">
          <router-link
            :to="`/news/${item.id}`"
            class="news-items"
            v-for="(item, idx) in list"
            :key="idx"
          >
            <img
              :src="require('@/assets/Items/Events/News/' + item.img)"
              alt=""
            />
            <div class="item-wrapper">
              <p>{{ item.name }}</p>
              <h2>{{ item.title }}</h2>
              <div class="item-bottom">
                <div class="left">
                  <div class="item-date">
                    <img src="@/assets/Items/Events/News/Vector.png" alt="" />
                    <span>{{ item.date }}</span>
                  </div>
                  <div class="item-seen">
                    <img src="@/assets/Items/Events/News/Group.png" alt="" />
                    <span>посмотрели {{ item.seen }}</span>
                  </div>
                </div>
                <div class="right">
                  <link-items />
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="news-right">

          <!-- Gorizontall Page Items Start 1 -->
          <div class="horizontall-right-center">
            <month-page />
            <year-page />
          </div>
          <button @click="newsModal = true" class="horizontall-right-btn">
            Оставить контакты для рассылки
          </button>
          <!-- Gorizontall Page Items End 1 -->

          <div class="right-top">
            <router-link to="#">все</router-link>
            <router-link to="#">Стихи</router-link>
            <router-link to="#">Мероприятия</router-link>
            <router-link to="#">Литература</router-link>
            <router-link to="#">День Ойбека</router-link>
          </div>

          <!-- Gorizontall Page Items Start 2 -->
          <div class="horizontall-right-top">
            <router-link to="#">все</router-link>
            <router-link to="#">Литература</router-link>
            <router-link to="#">Стихи</router-link>
            <router-link to="#">День Ойбека</router-link>
            <router-link to="#">Мероприятия</router-link>
          </div>
          <!-- Gorizontall Page Items End 2 -->

          <div class="right-center">
            <month-page />
            <year-page />
          </div>
          <button @click="newsModal = true" class="right-btn">
            Оставить контакты для рассылки
          </button>

          <div class="news-modal-wrapper" :class="newsModal ? 'active' : ''">
            <div class="modal-content">
              <div class="exit" @click="newsModal = false">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.95163 21.5072C0.615332 21.162 0.429966 20.6973 0.436308 20.2153C0.442651 19.7334 0.640183 19.2737 0.985449 18.9374L8.79643 11.3293L1.18837 3.51837C0.852075 3.1731 0.666708 2.70838 0.673051 2.22644C0.679392 1.7445 0.876925 1.28483 1.22219 0.94853C1.56746 0.612232 2.03218 0.426864 2.51412 0.433207C2.99605 0.439549 3.45573 0.637082 3.79203 0.98235L11.4001 8.79333L19.2111 1.18527C19.5563 0.848974 20.021 0.663607 20.503 0.669949C20.9849 0.676291 21.4446 0.873825 21.7809 1.21909C22.1172 1.56436 22.3026 2.02908 22.2962 2.51102C22.2899 2.99295 22.0923 3.45263 21.7471 3.78893L13.9361 11.397L21.5442 19.208C21.8805 19.5532 22.0658 20.0179 22.0595 20.4999C22.0531 20.9818 21.8556 21.4415 21.5103 21.7778C21.1651 22.1141 20.7004 22.2995 20.2184 22.2931C19.7365 22.2868 19.2768 22.0892 18.9405 21.744L11.3324 13.933L3.52147 21.5411C3.1762 21.8774 2.71148 22.0627 2.22954 22.0564C1.74761 22.05 1.28793 21.8525 0.95163 21.5072Z"
                    fill="currentcolor"
                  />
                </svg>
              </div>

              <h3>Ввидите ваш Email, чтобы подписаться на новости</h3>

              <input type="text" name="email" placeholder="Email" />

              <button class="modal-btn" @click="submitted = true, newsModal = false">Подписаться</button>
            </div>
          </div>

          <div class="news-submitted-modal" :class="submitted ? 'active' : ''">
            <div class="submitted-content">
                <div class="exit" @click="submitted = false">
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.95163 21.5072C0.615332 21.162 0.429966 20.6973 0.436308 20.2153C0.442651 19.7334 0.640183 19.2737 0.985449 18.9374L8.79643 11.3293L1.18837 3.51837C0.852075 3.1731 0.666708 2.70838 0.673051 2.22644C0.679392 1.7445 0.876925 1.28483 1.22219 0.94853C1.56746 0.612232 2.03218 0.426864 2.51412 0.433207C2.99605 0.439549 3.45573 0.637082 3.79203 0.98235L11.4001 8.79333L19.2111 1.18527C19.5563 0.848974 20.021 0.663607 20.503 0.669949C20.9849 0.676291 21.4446 0.873825 21.7809 1.21909C22.1172 1.56436 22.3026 2.02908 22.2962 2.51102C22.2899 2.99295 22.0923 3.45263 21.7471 3.78893L13.9361 11.397L21.5442 19.208C21.8805 19.5532 22.0658 20.0179 22.0595 20.4999C22.0531 20.9818 21.8556 21.4415 21.5103 21.7778C21.1651 22.1141 20.7004 22.2995 20.2184 22.2931C19.7365 22.2868 19.2768 22.0892 18.9405 21.744L11.3324 13.933L3.52147 21.5411C3.1762 21.8774 2.71148 22.0627 2.22954 22.0564C1.74761 22.05 1.28793 21.8525 0.95163 21.5072Z"
                    fill="currentcolor"
                  />
                </svg>
              </div>

              <h3>Спасибо что заполнили что подписались на новости!</h3>
              <p>Не будем рассылать спам или ложную информацию.</p>

            </div>
          </div>
        </div>
      </div>

      <app-pagination
        :data="getNewsItems"
        :limit="4"
        @paginate="paginateItems"
      />
    </div>
  </div>
</template>
<script>
import YearPage from "@/components/pages/common/YearPage.vue";
import MonthPage from "@/components/pages/common/MonthPage.vue";
import AppPagination from "@/components/pages/common/AppPagination.vue";
import LinkItems from "@/components/pages/common/LinkItems.vue";
export default {
  name: "museum-news",
  components: { YearPage, MonthPage, AppPagination, LinkItems },
  data() {
    return {
      list: [],
      newsModal: false,
      submitted: false
    };
  },
  mounted() {
    this.getList();
  },
  computed: {
    getNewsHeader() {
      let news =
        this.$store?.getters &&
        this.$store.getters?.getNews &&
        this.$store.getters.getNews;
      let header;
      news.forEach((element) => {
        if (element.id == 1) {
          header = element;
        }
      });
      return header;
    },

    getNewsItems() {
      let news =
        this.$store?.getters &&
        this.$store.getters?.getNews &&
        this.$store.getters.getNews;
      let item;
      news.forEach((element) => {
        if (element.id == 2) {
          item = element.news;
        }
      });
      return item;
    },
  },
  methods: {
    getList() {
      this.list = this.getNewsItems.slice(0, 4);
    },
    paginateItems(val) {
      this.list = val;
    },
  },
};
</script>
