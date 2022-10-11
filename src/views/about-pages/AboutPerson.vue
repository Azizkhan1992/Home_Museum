<template>
  <div class="about-person-container">
    <about-person-top />
    <about-person-one />
    <about-person-two />
  </div>
</template>
<script>
import AboutPersonTop from "@/components/pages/about/about-person-items/AboutPersonTop.vue";
import AboutPersonOne from "@/components/pages/about/about-person-items/AboutPersonOne.vue";
import AboutPersonTwo from "@/components/pages/about/about-person-items/AboutPersonTwo.vue";
export default {
  name: "about-person",
  components: { AboutPersonTop, AboutPersonOne, AboutPersonTwo },
};
</script>
