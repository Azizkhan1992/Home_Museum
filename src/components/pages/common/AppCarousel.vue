<template>
  <div class="carousel-container">
    <button class="btn-left" v-if="isLeftBtn">Left</button>
    <button class="btn-right" v-if="isRightBtn">Right</button>
    <div
      class="carousel-wrapper"
      :class="{ active: carouselLeft }"
      :style="{
        width: (100 * carouselItems.length) / items + '%',
        transform: `transformX(${-9.5}%)`,
      }"
    >
      <div
        class="carousel-items"
        v-for="item, idx in carouselItems"
        :key="item.id"
        :id="item.id"
        :style="{
          width: (100 / carouselItems.length)-0.25 + '%',
        }"
        :class="{
          'left-item': idx == 0,
          'last-item': idx >= items+1,
          active: idx == 1 || idx == 2 || idx == 3,
        }"
      >
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

    <div class="carousel-dots" v-if="isDotsActive">
      <button v-for="btn in carouselItems" :key="btn.id" :id="btn.id"></button>
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
    isDotsActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      carouselItems: [],
      carouselLeft: false,
      idChecker: 1,
      lastId: 0,
      checkBtn: 1,
    };
  },
  mounted() {
    this.getCarouselItems();
    setInterval(() => {
      this.moveCarousel(); 
    }, 3000);
  },
  methods: {
    getCarouselItems() {
      this.carouselItems = this.data;
    },
    moveCarousel() {
        let item = this.carouselItems.shift();
        this.carouselItems.push(item);

        if (this.checkBtn == this.carouselItems.length) {
          this.checkBtn = 1;
        } else {
          this.checkBtn++;
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
    height: 90%;
    display: flex;
    flex-direction: row;
    // column-gap: 20px;

    .carousel-items {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 0;
      margin-right: 10px;
      transition:  3s ease-in-out;


      &.left-item {
        margin-left: -9.75%;
        margin-right: 0;
        // animation: RunCarousel 0.9999s ease-in-out;
      }

      &.last-item {
        position: absolute;
        right: -30%;
      }

      @keyframes RunCarousel {
        0% {
          margin-left: 0;
        }
        100% {
          margin-left: -10%;
        }
      }
      // &.active {
      //   animation: RunCarousel 1.9999s ease-in-out;
      // }

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
          width: 75%;
          height: 65%;
          object-fit: contain;
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

  .carousel-dots {
    width: auto;
    height: 40px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    button {
      width: 16px;
      height: 16px;
      background: #a56935;
      margin-right: 16px;
      border-radius: 50%;
      padding: 0;
      border: none;
    }
  }
}


@media screen and (min-width: 1160px) and (max-width: 1440px) {
  .carousel-container .carousel-wrapper .carousel-items .carousel-header{
    font-size: 1.5rem;
    line-height: 30px;
  }
  .carousel-container .carousel-wrapper .carousel-items .descript[data-v-68a15ed0]{
    font-size: 1rem;
    width: 95%;
  }
  .carousel-container .carousel-wrapper .carousel-items button[data-v-68a15ed0]{
    height: 60px;
  }
}

@media screen and (min-width: 320px) and (max-width: 540px) {
  .carousel-container{
    display: none;
  }
}

@media screen and (min-width: 900px) and (max-width: 1160px) {
  .carousel-container .carousel-wrapper .carousel-items[data-v-68a15ed0]{
    width: 14.8% !important;

    &.left-item{
      margin-left: -14.8%;
    }
  }
}
</style>
