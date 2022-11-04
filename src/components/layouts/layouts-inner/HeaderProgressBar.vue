<template>
  <div class="progress-container">
    <div class="progress-wrapper">
      <div
        class="lang-items"
        v-for="(lang, idx) in langs"
        :key="idx"
        :class="lang.active ? 'active' : ''"
        @click.stop="setActiveLang(lang.name)"
      >
        {{ lang.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      langs: [],
    };
  },
  mounted() {
    this.initLang();
  },
  methods: {
    initLang() {
      this.langs = this.data.map((item) => {
        item.active = !!item.active;

        return item;
      });
    },
    setActiveLang(lang) {
      this.langs = this.langs.map((item) => {
        item.active = false;

        if (item.name == lang) {
          item.active = true;
        }
        return item;
      });
    },
  },
};
</script>
<style scoped lang="scss">
.progress-container {
  width: 100%;
  height: 100%;

  .progress-wrapper {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    .lang-items {
      width: 25%;
      height: 85%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 1rem;
      line-height: 22px;
      font-weight: 600;
      background: linear-gradient(180deg, #a56935 0%, #6f5539 100%);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;

      &.active {
        background: linear-gradient(180deg, #a56935 0%, #6f5539 100%);
        border-radius: 10px;
        -webkit-text-fill-color: #fff;
      }
    }
  }
}

@media screen and (min-width: 1160px) and (max-width: 1440px) {
  .progress-container[data-v-f87a92d4] {
    width: 100%;

    .progress-wrapper {
      width: 100%;
      height: 200px;
      flex-direction: column;
      z-index: 100;

      .lang-items {
        width: 85%;
        height: 25%;
        z-index: 100;
      }
    }
  }
}
</style>
