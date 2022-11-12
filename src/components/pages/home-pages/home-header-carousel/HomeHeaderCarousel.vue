<template>
  <div class="home-carousel-container">
    <div class="home-carousel-content">
      <div
        class="home-carousel-wrapper"
        :style="{
          width: clonedCarouselItems.length * 100 + '%',
          transform: `translateX(${
            (clonedCarouselItems.length * 100) / (Items.length * 100) +
            (clonedCarouselItems.length * 100) / (Items.length * 100 * 5)
          }%)`,
        }"
      >
        <div
          class="home-carousel-items"
          v-for="(item, idx) in clonedCarouselItems"
          :key="idx"
          :style="{
            width:
              (clonedCarouselItems.length * 100) / (Items.length * 100) + '%',
          }"
        >
          <div class="items-wrapper">
            <div class="item-shadow">
              <p>{{ item.descript }}</p>
              <button><span>Подробнее</span></button>
            </div>
            <img
              :src="require(`@/assets/Items/Home/HomeCarousel/` + item.img)"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "home-carousel",
  data() {
    return {
      Items: [],
      clonedCarouselItems: [],
      isItems: false,
    };
  },
  created() {
    this.getCarouselItems();
  },
  methods: {
    getCarouselItems() {
      this.Items =
        this.$store?.getters &&
        this.$store.getters?.getHeaderCarousel &&
        this.$store.getters.getHeaderCarousel;
      console.log(this.Items);
      this.cloneCarousel();
    },
    cloneCarousel() {
      let cloned = JSON.parse(JSON.stringify(this.Items));
      this.clonedCarouselItems = [...cloned, ...this.Items, ...cloned];
    },
  },
};
</script>
<style scoped lang="scss">
.home-carousel-container {
  position: relative;
  .home-carousel-content {
    width: 100vw;
    height: 100%;
    position: absolute;
    left: -6%;
    overflow: hidden;

    .home-carousel-wrapper {
      height: 100%;
      display: flex;
      flex-direction: row;
      //   column-gap: 10px;

      .home-carousel-items {
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;

        .items-wrapper {
          width: 95%;
          height: 85%;
          position: relative;

          .item-shadow {
            width: 100%;
            height: 35%;
            position: absolute;
            bottom: 0;
            left: 0;
            background: linear-gradient(180deg, #a56935 0%, #6f5539 100%);
            border-radius: 0px 0px 250px 250px;
            opacity: 0.8;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            p {
                width: 85%;
                text-align: center;
              font-size: 1.15rem;
              line-height: 135%;
              font-weight: 700;
              color: #fff;
              text-overflow: ellipsis;
              display: -webkit-box;
              max-height: 75px;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
              overflow: hidden;
              word-break: break-all;
            }

            button{
                width: 45%;
                height: 48px;
                border-radius: 200px;
                background: #fff;
                border: 0;
                padding: 0;
                cursor: pointer;

                &:hover{
                    background: linear-gradient(180deg, #A56935 0%, #6F5539 100%);
                    border: 2px solid #fff;

                    span{
                        -webkit-text-fill-color: #fff;
                    }
                }
                
                span{
                    font-size: 1.15rem;
                line-height: 20px;
                font-weight: 700;
                background: linear-gradient(180deg, #A56935 0%, #6F5539 100%);
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
                }
            }
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }
  }
}
</style>
