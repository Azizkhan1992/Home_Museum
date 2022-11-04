<template>
  <div class="slider-container">
    <button class="btn-left" @click="slideLeft">
      <img src="@/assets/Items/Common/Items/Left.png" alt="" />
    </button>
    <button class="btn-right" @click="slideRight">
      <img src="@/assets/Items/Common/Items/RightBtn.png" alt="" />
    </button>
    <div class="slider-content">
      <div
        class="slider-wrapper"
        :style="{
          width: sliderItems.length * 100 + '%',
          transform: `translateX(${-33}%)`,
        }"
      >
        <div
          class="slide-items"
          v-for="(item, idx) in sliderItems"
          :key="item"
          :id="idx"
          :style="{'transition': 'all 1s ease-in'}"
          :class="{
            'item-left': idx == 0,
            'item-center': idx == 1,
            'item-right': idx == 2,
          }"
        >
          <img
            :src="require('@/assets/Items/Service/Magazine/' + item)"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "one-slider",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      sliderItems: [],
    };
  },
  mounted() {
    this.getSliderItems();
  },
  methods: {
    getSliderItems() {
      this.sliderItems = this.data;
    },
    slideLeft() {
      if (this.sliderItems.length > 0) {
        let item = this.sliderItems.shift();
        this.sliderItems.push(item);
      }
    },
    slideRight() {
      if (this.sliderItems.length > 0) {
        let item = this.sliderItems.pop();
        this.sliderItems.unshift(item);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.slider-container {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;

  button {
    width: 38px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 40%;
    background: transparent;
    border: 0;
    cursor: pointer;
    z-index: 50;

    &.btn-left {
      left: 10px;
    }
    &.btn-right {
      right: 10px;
    }
  }

  .slider-content {
    width: 85%;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;

    .slider-wrapper {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      .slide-items {
        width: 33%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        &.item-left {
            position: absolute;
            margin-left: -75%;
        }
        &.item-center {
            position: absolute;
            margin: 0;
        }
        &.item-right {
            position: absolute;
            margin-right: -75%;
        }

        img {
          width: 55%;
          height: 85%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
