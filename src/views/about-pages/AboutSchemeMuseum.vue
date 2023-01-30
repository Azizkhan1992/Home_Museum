<template>
  <div class="scheme-museum-container">
    <div class="scheme-museum-content">
      <div class="scheme-museum-header">
        <h1>{{ getScheme.name }}</h1>
        <img
          :src="require('@/assets/Items/About/AboutScheme/' + getScheme.img)"
          alt=""
        />
      </div>
      <div class="scheme-museum-wrapper">
        <div class="img-wrapper">
            <img
          :src="require('@/assets/Items/About/AboutScheme/' + getScheme.img)"
          alt=""
        />
        </div>

        <div class="part-one">
          <button>Двор музея</button>
        <button>Литературная комната</button>
        <button>Исторический дом</button>
        </div>
        <div class="part-two">
          <button>Двор музея</button>
        <button>Литературная комната</button>
        <button>Исторический дом</button>
        </div>
      </div>
      <div class="part-bottom">
        <div class="download">
          <img src="@/assets/Items/About/AboutScheme/img2.svg" alt="" />
          <span>Схема музея</span>
          <button>
            <img src="@/assets/Items/About/AboutScheme/img3.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "scheme-museum",
  computed: {
    getScheme() {
      let scheme =
        this.$store?.getters &&
        this.$store.getters?.getSchemeMuseum &&
        this.$store.getters.getSchemeMuseum;
      return scheme;
    },
  },
};
</script>
