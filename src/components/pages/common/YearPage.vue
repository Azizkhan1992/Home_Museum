<template>
  <div class="year-container">
    <div class="year-visible" @click="isYear = !isYear">
      <p>{{ year }}</p>
      <img
        src="@/assets/Items/Vector2.svg"
        alt=""
        :class="{ 'img-active': isYear }"
      />
    </div>

    <div class="year-hidden" :class="isYear ? 'active' : 'deactive'">
      <div class="year-items" v-for="(year, idx) in years" :key="idx">
        <span @click="selectYear(year)">{{ year }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "museum-year",
  data() {
    return {
      isYear: false,
      year: new Date().getFullYear(),
      years: [],
    };
  },
  mounted() {
    this.getYears();
  },
  methods: {
    getYears() {
      let year = new Date().getFullYear();
      for (let i = year - 20; i <= year; i++) {
        this.years.push(i);
      }
    },
    selectYear(year){
      this.year = year
    }
  },
};
</script>
<style scoped lang="scss">
.year-container {
  width: 45%;
  height: 48px;
  background: #fff;
  border-radius: 10px;
  position: relative;

  .year-visible {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 2px solid #a56935;
    border-radius: 10px;
    box-sizing: border-box;

    img {
      transition: transform 0.5s ease-out;

      &.img-active {
        transform: rotate(180deg);
        transition: transform 0.5s ease-in;
      }
    }

    p {
      font-size: 1rem;
      font-weight: 500;
      line-height: 20px;
      width: 25%;
      margin-right: 10px;
    }
  }

  .year-hidden {
    width: 100%;
    // height: 0;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    row-gap: 5px;
    transition: height 0.5s ease-out;
    z-index: 10;

    &::-webkit-scrollbar {
      width: 16px;
    }
    &::-webkit-scrollbar-thumb {
      background: linear-gradient(
        rgba(85, 87, 89, 0.2) 1%,
        #a56935 50%,
        #6f5539 180%
      );
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      border-radius: 15px;
    }

    &.deactive {
      height: 0;
      overflow: hidden;

      .year-items {
        width: 100%;
        height: 45px;
        padding: 5px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }
    }

    &.active {
      height: 250px;
      overflow-y: scroll;
      transition: height 0.5s ease-in;
      box-sizing: border-box;
      border-radius: 10px;

      .year-items {
        width: 100%;
        height: 45px;
        padding: 5px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover {
          background: linear-gradient(180deg, #a56935 0%, #6f5539 100%);
          span {
            color: #fff;
          }
        }

        span {
          font-size: 1rem;
          font-weight: 500;
          line-height: 20px;
          width: 25%;
        }
      }
    }
  }
}

@media screen and (max-width: 1440px) and (min-width: 1160px) {
  .year-container .year-visible p[data-v-198d7185] {
    width: 40%;
  }
}
</style>
