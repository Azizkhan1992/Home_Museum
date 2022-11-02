<template>
  <div class="inner-container">
    <div class="inner-wrapper">
      <div
        v-for="(header, idx) in tabHeaders"
        :key="idx"
        :class="header.active ? 'header-active' : 'header-deactive'"
      >
        <button
          @click="
            setActiveTab(header.value, idx);
            sendActiveTab();
          "
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

      <div class="mobile-dropdown">
        <div class="drop-visible" @click="isDrop = !isDrop">
          {{ mobileActive }}
          <img src="@/assets/Items/Common/Items/Vector6.png" alt="" :class="isDrop ? 'img-active' : ''">
        </div>

        <div class="drop-hidden" :class="isDrop ? 'active' : 'deactive'">
          <div
            class="drop-items"
            v-for="(header, idy) in tabHeaders"
            :key="idy"
            @click="changeMobileActive(header.title), setActiveTab(header.value, idx);
            sendActiveTab();"
          >
          {{header.title}}

          </div>
        </div>
      </div>
    </div>
    <slot :active="activeTab" />
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
      isDrop: false,
      mobileActive: "",
    };
  },
  mounted() {
    this.initHeaders();
    this.setMobileActive();
  },
  computed: {
    activeTab() {
      let active;
      if (this.tabHeaders.length > 0) {
        active = this.tabHeaders.find((item) => item.active).value;
      }
      return active;
    },
    activeMobileTab() {
      let active;
      if (this.tabHeaders.length > 0) {
        active = this.tabHeaders.find((item) => item.active);
      }
      return active;
    },
  },
  methods: {
    setMobileActive() {
      this.mobileActive = this.activeMobileTab.title;
    },
    changeMobileActive(val) {
      this.mobileActive = val;
    },
    sendActiveTab() {
      this.$store.commit("setActiveTab", {
        active: this.activeTab,
      });
    },
    initHeaders() {
      this.tabHeaders = this.headers.map((item) => {
        item.active = !!item.active;
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

  .inner-wrapper {
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

    .mobile-dropdown {
      display: none;
    }

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

@media screen and (min-width: 320px) and (max-width: 540px) {
  .inner-container .inner-wrapper .header-deactive {
    display: none;
  }
  .inner-container .inner-wrapper .header-active {
    display: none;
  }
  .inner-container .inner-wrapper .bg {
    display: none;
  }
  .inner-container .inner-wrapper .mobile-dropdown {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;

    .drop-visible {
      width: 100%;
      height: 100%;
      cursor: pointer;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      background: linear-gradient(180deg, #A56935 0%, #6F5539 100%);
      font-size: 1rem;
      line-height: 20px;
      font-weight: 700;
      color: #fff;

      img{
        transition: all 0.5s ease-in-out;

        &.img-active{
          transform: rotate(180deg);
          transition: all 0.5s ease-in-out;
        }
      }
    }

    .drop-hidden {
      width: 100%;
      height: 0;
      position: absolute;
      top: 100px;
      left: 0;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.6);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
      transition: height 0.5s ease-in-out;
      z-index: 20;

      &.deactive {
        height: 0;
        overflow: hidden;
      }

      &.active {
        height: 140px;
        transition: all 0.5s ease-in-out;
      }

      .drop-items {
        height: 20px;
        width: 100%;
        margin-top: 5px;
        padding-left: 20px;
        box-sizing: border-box;
        cursor: pointer;
      }
    }
  }
}
</style>
