<template>
  <div class="carousel-container">
    <button class="btn-left" v-if="isLeftBtn">Left</button>
    <button class="btn-right" v-if="isRightBtn">Right</button>
    <div
      class="carousel-wrapper"
      :class="{ active: carouselLeft }"
      :style="{
        width: (100 * clonedData.length) / items + '%',
        transform: `translateX(${-(
          (100 / carouselItems.length) * items +
          3.3
        )}%)`,
      }"
    >
      <div
        class="carousel-items"
        v-for="(item, idx) in clonedData"
        :key="item.id"
        :id="item.id"
        :style="{
          width: 100 / items - 2 + '%',
        }"
      >
        {{ idChecker }}
        {{idx+1}}
        <div class="item-top" :class="istopActive ? 'top-active' : ''">
          <img
            :src="require('@/assets/Items/Collection/Tools/' + item.img)"
            alt=""
          />
        </div>

        <h1 class="carousel-header">{{ item.name }}</h1>
        <p class="descript">{{ item.descript | filteredDescript }}</p>

        <button v-if="isButtonActive">Подробнее</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-carousel",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    items: {
      type: [Number, String],
      default: 3,
    },
    istopActive: {
      type: Boolean,
      default: false,
    },
    isButtonActive: {
      type: Boolean,
      default: false,
    },
    isLeftBtn: {
      type: Boolean,
      default: false,
    },
    isRightBtn: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      carouselItems: [],
      carouselLeft: false,
      idChecker: 10,
    };
  },
  mounted() {
    this.getCarouselItems();
    setInterval(() =>{
        this.moveCarousel();
    },2500)
  },
  computed: {
    cloned() {
      return JSON.parse(JSON.stringify(this.carouselItems));
    },
    clonedData() {
      return [...this.cloned, ...this.carouselItems, ...this.cloned];
    },
  },
  methods: {
    getCarouselItems() {
      this.carouselItems = this.data;
    },
    moveCarousel() {
      let item = this.clonedData.shift();
      this.clonedData.push(item);

      if (this.idChecker == this.clonedData.length-1) {
        this.idChecker = 10;
      } else {
        this.idChecker++;
      }
    },
  },
  filters: {
    filteredDescript(val) {
      let desc = val.slice(0, 167) + " ...";
      return desc;
    },
  },
};
</script>
<style scoped lang="scss">
.carousel-container {
  width: 100%;
  height: 85%;
  position: relative;
  overflow: hidden;

  button {
    width: 55px;
    height: 35px;
    z-index: 1;
    cursor: pointer;
    font-size: 1.15rem;
    line-height: 20px;

    &.btn-left {
      position: absolute;
      top: 50%;
      left: 0;
      border: 2px solid #a56935;
      color: #a56935;
      border-radius: 5px;
    }

    &.btn-right {
      position: absolute;
      top: 50%;
      right: 0;
      border: 2px solid #a56935;
      border-radius: 5px;
      color: #a56935;
    }

    &:hover {
      background: #a56935;
      color: #fff;
      border: 0;
    }
  }

  .carousel-wrapper {
    height: 100%;
    display: flex;
    flex-direction: row;
    column-gap: 20px;

    // @keyframes CarouselLeft {
    //     0%{
    //         margin-left: 0;
    //     }
    //     100%{
    //         margin-left: -33%;
    //     }
    // }

    // &.active{
    //     animation: CarouselLeft 2.51s ease-in;
    // }

    .carousel-items {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .item-top {
        width: 100%;
        height: 45%;

        &.top-active {
          background: rgba(255, 255, 255, 0.6);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }

        img {
          width: 50%;
          height: 60%;
        }
      }

      .carousel-header {
        font-size: 1.85rem;
        line-height: 40px;
        font-weight: 700;
        margin: 0;
        background: linear-gradient(180deg, #a56935 0%, #6f5539 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        width: 75%;
      }
      .descript {
        font-size: 1.25rem;
        line-height: 160%;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.8);
      }

      button {
        width: 75%;
        height: 75px;
        border: 2px solid #a56935;
        border-radius: 20px;
        font-size: 1.25rem;
        line-height: 26px;
        font-weight: 700;
        color: #a56935;
        cursor: pointer;
        padding: 0;
        transition: all 0.25s ease-out;

        &:hover {
          background: linear-gradient(180deg, #a56935 0%, #6f5539 100%);
          color: #fff;
          border: 0;
          transition: all 0.25s ease-in;
        }
      }
    }
  }
}
</style>
