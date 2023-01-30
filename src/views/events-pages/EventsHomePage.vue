<template>
  <div class="events-page-container">
    <events-header />
    <events-content />
  </div>
</template>
<script>
import EventsHeader from "@/components/pages/event/home-page-items/EventsHeader.vue";
import EventsContent from "@/components/pages/event/home-page-items/EventsContent.vue";
export default {
  name: "events-page",
  components: { EventsHeader, EventsContent },
};
</script>
