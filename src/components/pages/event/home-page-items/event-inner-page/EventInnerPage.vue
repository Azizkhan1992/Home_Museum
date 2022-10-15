<template>
  <div class="event-inner-page">
    <div class="inner-page-title">
      <img
        :src="require('@/assets/Items/Events/EventsHome/Items/' + event.img)"
        alt=""
      />

      <p>{{ event.descript_one }}</p>
      <p>{{ event.descript_two }}</p>
    </div>

    <div class="images-wrapper">
      <div class="left-wrapper">
        <div
          class="left-img-items"
          v-for="(item, idx) in leftImages"
          :key="idx"
          :class="{
            'top-fat': idx + 1 == 1,
            'top-long': idx + 1 == 2,
            'bottom-long': idx + 1 == 3,
            'bottom-fat': idx + 1 == 4,
          }"
        >
          <img
            :src="require('@/assets/Items/Events/EventsHome/Items/' + item)"
            alt=""
          />
          <div class="box-shadow">
            <router-link to="#">Галерея</router-link>
            <img src="@/assets/Items/Events/EventsHome/Items/img5.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="right-wrapper">
        <div
          class="right-img-items"
          v-for="(item, idy) in rightImages"
          :key="idy"
          :class="{
            'top-fat': idy + 1 == 1,
            'top-long': idy + 1 == 2,
            'bottom-long': idy + 1 == 3,
            'bottom-fat': idy + 1 == 4,
          }"
        >
          <img
            :src="require('@/assets/Items/Events/EventsHome/Items/' + item)"
            alt=""
          />
          <div class="box-shadow">
            <router-link to="#">Галерея</router-link>
            <img src="@/assets/Items/Events/EventsHome/Items/img5.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    leftImages() {
      let img = this.event.images.slice(0, 4);
      return img;
    },
    rightImages() {
      let img = this.event.images.slice(4, 8);
      return img;
    },
  },
};
</script>
