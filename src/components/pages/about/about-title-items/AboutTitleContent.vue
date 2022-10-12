<template>
  <div class="about-title-container">
    <div class="about-title-content">
      <router-link :to="`about-title/${item.id}`"
        class="paginate-items"
        v-for="(item, idx) in list"
        :key="idx"
        :id="idx + 1"
      >
        <div class="title-bg">
          <img src="@/assets/Items/About/AboutTitle/bgImg.svg" alt="" />
        </div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.descript }}</p>

        <div class="title-items">
          <div class="left-items">
            <div class="title-name item">
              <img src="@/assets/Items/About/AboutTitle/Vector.svg" alt="" />
              <span>{{ item.name }}</span>
            </div>
            <div class="title-date item">
              <img src="@/assets/Items/About/AboutTitle/Vector.png" alt="" />
              <span>{{ item.date }}</span>
            </div>
          </div>
          <div class="right-items">
            <div class="title-seen item">
              <img src="@/assets/Items/About/AboutTitle/Vector1.svg" alt="" />
              <span>{{ item.seen }}</span>
            </div>
            <div class="empty item"></div>
          </div>
        </div>
      </router-link>

      <app-pagination
        :data="title"
        :limit="8"
        @paginate="requestPaginationData"
      />

      <div class="title-review-content">
        <div class="title-review-header">
          <h1>Добавить отзыв</h1>
          <span>Ваш адрес электронной почты не будет опубликован.</span>
          <span class="title">Обязательные поля отмечены</span>
          <span class="item">*</span>
        </div>
        <div class="title-review-items">
          <div class="input-name">
            <input type="text" placeholder="Имя">
            <span>*</span>
          </div>
          <div class="input-lastname">
            <input type="text" placeholder="Фамилия">
            <span>*</span>
          </div>
          <input type="text" class="input-web" placeholder="Website">

          <textarea name="" id="" cols="50" rows="20" placeholder="Ввидите текст"></textarea>

          <button>Поделиться</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppPagination from "@/components/pages/common/AppPagination.vue";
export default {
  name: "about-title",
  components: { AppPagination },
  data() {
    return {
      title: null,
      list: [],
    };
  },
  mounted() {
    this.getTitleData();
  },
  computed: {
    getAboutTitle() {
      let title =
        this.$store?.getters &&
        this.$store.getters?.getAboutTitle &&
        this.$store.getters.getAboutTitle;
      let item;
      title.forEach((element) => {
        if (element.id == 2) {
          item = element.paginationItems;
        }
      });
      return item;
    },
  },
  methods: {
    requestPaginationData(data) {
      this.list = data;
    },
    getTitleData() {
      this.title = this.getAboutTitle;
      this.list = this.title.slice(0, 8);
    },
  },
};
</script>
