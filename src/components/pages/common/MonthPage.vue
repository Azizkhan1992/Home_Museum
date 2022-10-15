<template>
  <div class="month-container">
    <div class="month-visible" @click="isMonth = !isMonth">
      <p>{{ month }}</p>
      <img src="@/assets/Items/Vector2.svg" alt="" :class="{'img-active' : isMonth}" />
    </div>

    <div class="month-hidden" :class="isMonth ? 'active' : 'deactive'">
      <div
        class="month-items"
        v-for="(item, idx) in months"
        :key="idx"
        @click="selectMonth(item)"
      >
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "museum-month",
  data() {
    return {
      isMonth: false,
      month: null,
      months: [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentabr",
        "Oktabr",
        "Noyabr",
        "Dekabr",
      ],
    };
  },
  mounted() {
    this.getMonth();
  },
  methods: {
    getMonth() {
      let month = new Date().getMonth();
      for (let i = 0; i <= this.months.length; i++) {
        if (i == month) {
          this.month = this.months[i];
        }
      }
    },
    selectMonth(val) {
      this.month = val;
    },
  },
};
</script>
<style scoped lang="scss">
.month-container {
  width: 45%;
  height: 48px;
  background: #fff;
  border-radius: 10px;
  position: relative;

  .month-visible {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img{
        transition: transform 0.5s ease-out;
        
        &.img-active{
            transform: rotate(180deg);
            transition: transform 0.5s ease-in;
        }
    }

    p {
      font-size: 1rem;
      line-height: 20px;
      font-weight: 500;
      width: 40%;
      letter-spacing: 0.15em;
      margin-right: 10px;
    }
  }
  .month-hidden {
    width: 100%;
    height: 0;
    position: absolute;
    top: 60px;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 7px;
    transition: height 0.5s ease-out;
    padding: 10px 0;
    box-sizing: border-box;

    &.deactive {
      overflow: hidden;
      padding: 0;
    }

    &.active {
      height: 200px;
      overflow-y: scroll;
      transition: height 0.5s ease-in;
    }

    .month-items {
      width: 100%;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      span {
        font-size: 1rem;
        line-height: 20px;
        font-weight: 500;
        width: 40%;
        letter-spacing: 0.15em;
      }
    }
  }
}
</style>
