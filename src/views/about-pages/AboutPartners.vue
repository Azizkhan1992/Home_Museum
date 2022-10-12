<template>
  <div class="about-partners-container">
    <about-partners-header />
    <about-partners-content />
  </div>
</template>
<script>
import AboutPartnersHeader from "@/components/pages/about/about-partners-items/AboutPartnersHeader.vue";
import AboutPartnersContent from "@/components/pages/about/about-partners-items/AboutPartnersContent.vue";
export default {
  name: "about-partners",
  components: { AboutPartnersHeader, AboutPartnersContent },
};
</script>
