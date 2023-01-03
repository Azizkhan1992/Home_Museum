<template>
  <div class="home-carousel-container">
    <div class="home-carousel-content">
      <div
        class="home-carousel-wrapper"
        :style="{
          width: Items.length * 100 + '%',
          transform: `translateX(${
            (Items.length * 10)/6
          }%)`,
        }"
      >
        <div
          class="home-carousel-items"
          v-for="item, idx in Items"
          :key="item.id"
          :id="idx+1"
          :class="item.id == Items[0].id ? 'hidden-left' : '' || item.id == Items[1].id ? 'active' : '' ||item.id == Items[3].id ? 'right-active': '' || item.id !== Items[0].id && item.id !== Items[1].id && item.id !== Items[2].id && item.id !== Items[3].id ? 'hidden-right' : ''"
        >
          <div class="items-wrapper">
            <div class="item-shadow">
              <span class="active-header">{{ item.title }}</span>
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
      playInterval : ''
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
        // console.log(this.Items)
        
        this.play()
    },
    play(){
      this.playInterval = setInterval(() => {
        this.animate()
      }, 5000)
    },
    animate(){
      let temp = this.Items.shift()
      this.Items.push(temp)
    }
  },
  beforeDestroy(){
    clearInterval(this.playInterval)
  }
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
      height: fit-content;
      position: relative;
      display: flex;
      flex-direction: row;
      //   column-gap: 10px;

      .home-carousel-items {
        height: fit-content;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        position: absolute;
        left: 0;
        transition: 1s ease-in-out;

        &.hidden-left{
          left: -15%;
          transition: 1s ease-in-out;

          .items-wrapper{

            .item-shadow{
              left: -200%;
              top: 15%;
              background: transparent;
              transform: scaleY(1.15);
              transition: 1s ease-in-out;

              span.active-header{
                display: inline-block;
                font-size: 3rem;
                line-height: 115%;
                font-weight: 700;
                letter-spacing: 0.004em;
              }

              p{
                color: #000;
              }

              button{
                box-shadow: 0px 4px rgba(0, 0, 0, 0.25);

                &:hover{
                  border: 0;
                }
              }
            }
          }
        }

        &.active{
          left: -4%;
          transform-origin: bottom;
          transition: 1s ease-in-out;

          .items-wrapper{
            transition: 1s ease-in-out;
            transform-origin: bottom  ;

            .item-shadow{
              left: -140%;
              top: 15%;
              width: fit-content;
              // transform: scale(1.25);
              background: transparent;
              padding: 8px;
              align-items: flex-start;
              transform: scaleY(1.15);
              transform-origin: bottom;
              transition: 1s ease-in-out;

              span.active-header{
                display: inline-block;
                font-size: 3rem;
                line-height: 115%;
                font-weight: 700;
                letter-spacing: 0.004em;
              }

              p{
                color: #000;
              }

              button{
                box-shadow: 0px 4px rgba(0, 0, 0, 0.25);

                &:hover{
                  border: 0;
                }
              }
            }
          }
        } 
        &.right-active{
          left: 4%;

          .items-wrapper{

            .item-shadow{
              transition: 1s ease-in-out;
            }
          }
        }

        &.hidden-right{
          left: 8.5%;
        }

        .items-wrapper {
          width: 95%;
          height: fit-content;
          position: relative;
          transition: 1s ease-in-out;

          .item-shadow {
            max-width: 100%;
            height: fit-content;
            padding: 24px;
            box-sizing: border-box;
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
            transform: scaleY(1);
            transform-origin: bottom;

            span.active-header{
              display: none;
            }

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
            object-fit: cover;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 539px) and (min-width: 320px) {
  .home-carousel-container{
    height: 700px !important;

    .home-carousel-content{
    left: -12% !important;

      .home-carousel-wrapper{
        height: 100% !important ;

        .home-carousel-items{
          width: 176px !important;
          bottom: 10%;
          left: calc(5% - 150px) !important;

          .items-wrapper{

            .item-shadow{
              padding: 8px !important;
            }
          }

          &.hidden-left{
            left: -25% !important;

            .items-wrapper{

.item-shadow{
  top: -100% !important;
  left: calc(25% - 25px) !important;
  width: 200% !important;
  max-width: 200%;

  span.active-header{
    font-size: 2.25rem !important;
  }
}
}
          }

          &.active{
            left: -8.5% !important;


            .items-wrapper{

              .item-shadow{
                top: -100% !important;
                left: calc(25% - 25px) !important;
                width: 200% !important;
                max-width: 200%;

                span.active-header{
                  font-size: 2.25rem !important;
                }
              }
            }
          }
          &.right-active{
            left: 10% !important;
          }

          &.hidden-right{
            left: 25% !important;

            p{
              font-size: 1rem !important;
            }

            button{
              width: fit-content !important;
              border-radius: 100px !important;
              padding: 4px !important;
              box-sizing: border-box;

              span{
                font-size: 0.85rem !important;
              }
            }
          }
        }
      }
  }
  }
}

@media screen and (max-width: 899px) and (min-width: 540px) {
  .home-carousel-container{
    height: 700px !important;

    .home-carousel-content{
    left: -12% !important;

      .home-carousel-wrapper{
        height: 100% !important ;

        .home-carousel-items{
          width: 176px !important;
          bottom: 10%;
          left: calc(5% - 350px) !important;

          .items-wrapper{

            .item-shadow{
              padding: 8px !important;

              p{
              font-size: 1rem !important;
            }

            button{
              width: fit-content !important;
              border-radius: 100px !important;
              padding: 4px !important;
              box-sizing: border-box;

              span{
                font-size: 0.85rem !important;
              }
            }
            }
          }

          &.hidden-left{
            left: -20% !important;

            .items-wrapper{

.item-shadow{
  top: -100% !important;
  left: calc(25% - 25px) !important;
  width: 200% !important;
  max-width: 200%;

  span.active-header{
    font-size: 2.25rem !important;
  }
}
}
          }

          &.active{
            left: -8.5% !important;


            .items-wrapper{

              .item-shadow{
                top: -100% !important;
                left: calc(25% - 25px) !important;
                width: 200% !important;
                max-width: 200%;

                span.active-header{
                  font-size: 2.25rem !important;
                }
              }
            }
          }
          &.right-active{
            left: 10% !important;

            p{
              font-size: 1rem !important;
            }

            button{
              width: fit-content !important;
              border-radius: 100px !important;
              padding: 4px !important;
              box-sizing: border-box;

              span{
                font-size: 0.85rem !important;
              }
            }
          }

          &.hidden-right{
            left: 20% !important;

            p{
              font-size: 1rem !important;
            }

            button{
              width: fit-content !important;
              border-radius: 100px !important;
              padding: 4px !important;
              box-sizing: border-box;

              span{
                font-size: 0.85rem !important;
              }
            }
          }
        }
      }
  }
  }
}

@media screen and (min-width: 900px) and (max-width: 1160px) {
  .home-carousel-container{

    .home-carousel-content{

      .home-carousel-wrapper{

        .home-carousel-items{
          width: 294px !important;
          left: 1% !important;

          &.hidden-left{
            left: -20% !important;
          }

          &.active{
            left: -4% !important;

            .items-wrapper{

              .item-shadow{
                left: -125%;
              }
            }
          }

          &.right-active{
            left: 6% !important;
          }

          &.hidden-right{
            left: 10% !important;
          }
        }
      }
    }
  }
}
</style>
