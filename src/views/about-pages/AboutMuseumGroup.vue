<template>
  <div class="museum-group-container">
    <div class="museum-group-content">
      <div class="museum-group-header">
        <h1>{{ getHeaderItems.title }}</h1>
        <img
          :src="
            require('@/assets/Items/About/AboutGroup/' + getHeaderItems.img)
          "
          alt=""
        />
      </div>
      <div class="museum-group-wrapper">
        <h2>Административный аппарат</h2>
        <div class="group-items-wrapper">
          <div
            class="group-items"
            v-for="(item, idx) in getMuseumGroup"
            :key="idx"
          >
            <img
              :src="require('@/assets/Items/About/AboutGroup/' + item.img)"
              alt=""
            />
            <h5>{{ item.name }}</h5>
            <p>{{ item.position }}</p>
            <div class="item-mail group">
              <img src="@/assets/Items/About/AboutGroup/Vector.png" alt="" />
              <span>{{ item.mail }}</span>
            </div>
            <div class="item-phone group">
              <img src="@/assets/Items/About/AboutGroup/Vector1.png" alt="" />
              <span>{{ item.phone }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "museum-group",
  computed: {
    getHeaderItems() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getMuseumGroup &&
        this.$store.getters.getMuseumGroup;

      let item;

      items.forEach((element) => {
        if (element.id == 1) {
          item = element;
        }
      });
      return item;
    },

    getMuseumGroup() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getMuseumGroup &&
        this.$store.getters.getMuseumGroup;

      let item;

      items.forEach((element) => {
        if (element.id == 2) {
          item = element.group;
        }
      });

      return item;
    },
  },
};
</script>
