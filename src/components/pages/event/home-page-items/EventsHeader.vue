<template>
  <div class="events-header-container">
    <div class="events-header-content">
      <h1>{{ getHeaderItems.title }}</h1>
      <img
        :src="require('@/assets/Items/Events/EventsHome/' + getHeaderItems.img)"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    getHeaderItems() {
      let events =
        this.$store?.getters &&
        this.$store.getters?.getEvents &&
        this.$store.getters.getEvents;
      let event;
      events.forEach((element) => {
        if (element.id == 1) {
          event = element;
        }
      });
      return event;
    },
  },
};
</script>
