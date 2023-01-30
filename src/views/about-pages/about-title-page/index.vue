<template>
  <div class="about-title-container">
    <about-title-header />
    <about-title-content />
  </div>
</template>
<script>
import AboutTitleHeader from "@/components/pages/about/about-title-items/AboutTitleHeader.vue";
import AboutTitleContent from "@/components/pages/about/about-title-items/AboutTitleContent.vue";
export default {
  name: "about-title",
  components: { AboutTitleHeader, AboutTitleContent },
};
</script>
