<template>
  <div class="about-title-container">
    <div class="about-title-content">
      <div
        class="paginate-items"
        v-for="(item, idx) in getAboutTitle"
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about-title",
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
};
</script>
