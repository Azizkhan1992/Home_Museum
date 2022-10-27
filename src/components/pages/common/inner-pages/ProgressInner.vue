<template>
  <div class="inner-container">
    <div class="inner-wrapper">
        <div
      v-for="(header, idx) in tabHeaders"
      :key="idx"
      :class="header.active ? 'header-active' : 'header-deactive'"
    >
      <button
        @click="setActiveTab(header.value, idx); sendActiveTab()"
        class="active-btn"
      >
        {{ header.title }}
      </button>
    </div>
    <div
      class="bg"
      :style="{
        left: `${2.5 + leftValue * 20}%`,
        transition: 'all 0.35s ease-in',
      }"
    ></div>
    </div>
    <slot :active="activeTab"/>
  </div>
</template>
<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tabHeaders: [],
      leftValue: 0,
    };
  },
  mounted() {
    this.initHeaders();
  },
  computed: {
    activeTab() {
      let active;
      if (this.tabHeaders.length > 0) {
        active = this.tabHeaders.find((item) => 
          item.active
        ).value;
      }
      return active;
    },
  },
  methods: {
    sendActiveTab(){
        // console.log(this.activeTab, 'OOOO')
        this.$store.commit('setActiveTab', {
            active: this.activeTab
        })
    },
    initHeaders() {
      this.tabHeaders = this.headers.map((item) => {
        item.active = !!item.active;
        // console.log(!!undefined)
        return item;
      });
    },
    setActiveTab(val, e) {
      this.tabHeaders = this.tabHeaders.map((item) => {
        item.active = false;
        this.leftValue = e;

        if (item.value === val) {
          item.active = true;
        }
        return item;
      });
    },
  },
};
</script>
<style lang="scss">
.inner-container {
  width: 100%;
  height: auto;
  margin-bottom: 50px;

  .inner-wrapper{
    width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  background: #d9d9d9;
  border-radius: 20px;
  margin-bottom: 25px;
  align-items: center;
  justify-content: space-around;
  position: relative;

    .bg {
    width: 15%;
    height: 75%;
    position: absolute;
    background: linear-gradient(180deg, #a56935 0%, #6f5539 100%);
    border-radius: 12px;
    z-index: 1;
  }

  .header-active {
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 10;

    .active-btn {
      width: 100%;
      height: 75%;
      border: 0;
      padding: 0;
      font-size: 1.5rem;
      line-height: 30px;
      font-weight: 700;
      color: #fff;
      cursor: pointer;
      background: transparent;
    }
  }
  .header-deactive {
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;

    button {
      width: 100%;
      height: 75%;
      border: 0;
      padding: 0;
      font-size: 1.5rem;
      line-height: 30px;
      font-weight: 700;
      background: linear-gradient(180deg, #a56935 0%, #6f5539 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      cursor: pointer;
    }
  }
  }
}
</style>
