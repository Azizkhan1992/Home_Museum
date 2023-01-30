<template>
  <div class="pagination-container">
    <div class="pagination-content">
      <div class="pagination-left">
        <button class="prev" @click="prevPage">Предыдущая страница</button>
        <button class="next" @click="nextPage">Следующая страница</button>

        <button class="horizontall-prev" @click="prevPage">Пред. стр</button>
        <button class="horizontall-next" @click="nextPage">След. стр</button>
      </div>
      <div class="pagination-right">
        <span>Страница</span>
        <input type="text" :value="pageNumber" />
        <span>из {{ currentPages }}</span>
        <button>
          <img src="@/assets/Items/Common/Items/arrow-right.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-pagination",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    limit: {
      type: [Number, String],
      default: 8,
    },
  },
  data() {
    return {
      pageNumber: 1,
    };
  },
  computed: {
    currentPages() {
      let currentRequestPages;
      if (this.data) {
        let x = this.data.length;
        let y = this.limit;
        currentRequestPages = Math.ceil(x / y);
      }
      return currentRequestPages;
    },
  },
  methods: {
    prevPage() {
      if (this.pageNumber > 1) {
        this.pageNumber--;
      }
    },
    nextPage() {
      if (this.pageNumber < this.currentPages) {
        this.pageNumber++;
      }
    },

    paginationData() {
      let pagination;
      if (this.data) {
        const start = (this.pageNumber - 1) * this.limit,
          end = start + this.limit;
        pagination = this.data.slice(start, end);
        // console.log(start, end)

        return this.$emit("paginate", pagination);
      }

      return [];
    },
  },

  watch: {
    pageNumber() {
      this.paginationData();
    },
  },
};
</script>

<style lang="scss">
.pagination-container {
  width: 100%;
  height: 100px;
  margin-top: 75px;
  margin-bottom: 25px;

  .pagination-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .pagination-left {
      width: 49%;
      height: 75px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      button {
        width: 310px;
        height: 100%;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1.25rem;
        line-height: 26px;
        font-weight: 700;
        border: 2px solid #a98855;
        background: linear-gradient(180deg, #8f7f6f 0%, #a98855 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        &.horizontall-prev,
        &.horizontall-next {
          display: none;
        }

        &:hover {
          background: linear-gradient(180deg, #8f7f6f 0%, #a98855 100%);
          color: #fff;
          border: none;
          -webkit-text-fill-color: #fff;
          transition: all 0.5s ease-in;
        }
      }
    }

    .pagination-right {
      width: 40%;
      height: 75px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      column-gap: 20px;

      button {
        width: 90px;
        height: 100%;
        border-radius: 25px;
        border: 2px solid #a98855;
        cursor: pointer;
        background: transparent;
      }

      input {
        width: 90px;
        height: 100%;
        border-radius: 25px;
        border: 2px solid #a98855;
        margin: 0 20px;
        padding: 10px 20px;
        box-sizing: border-box;
        font-size: 1.5rem;
        line-height: 30px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.5);

        &:hover {
          border: 2px solid #000;
        }

        &:focus {
          outline: none;
          border: 2px solid #a98855;
        }
      }

      span {
        font-size: 1.5rem;
        line-height: 30px;
        font-weight: 400;
        color: #000;
      }
    }
  }
}

@media screen and (min-width: 1160px) and (max-width: 1440px) {
  .pagination-container .pagination-content .pagination-left button {
    width: 225px;

    &.horizontall-prev,
    &.horizontall-next {
      display: none;
    }
  }

  .pagination-container .pagination-content .pagination-right input {
    width: 60px;
    height: 65%;
    border-radius: 15px;
    margin: 0 10px;
  }
  .pagination-container .pagination-content .pagination-right button {
    width: 60px;
    height: 65%;
    border-radius: 15px;
  }
}

@media screen and (min-width: 320px) and (max-width: 540px) {
  .pagination-container {
    height: 200px;
  }
  .pagination-container .pagination-content {
    flex-direction: column;
    justify-content: space-around;
  }
  .pagination-container .pagination-content .pagination-left {
    width: 100%;
  }

  .pagination-container .pagination-content .pagination-left button {
    width: 135px;
    height: 50px;
    border-radius: 15px;
    font-size: 0.85rem;
    line-height: 20px;

    &.horizontall-prev,
    &.horizontall-next {
      display: none;
    }
  }
  .pagination-container .pagination-content .pagination-right {
    width: 100%;
    justify-content: space-between;
  }
  .pagination-container .pagination-content .pagination-right span {
    font-size: 1rem;
  }
  .pagination-container .pagination-content .pagination-right input {
    width: 60px;
    height: 75%;
    border-radius: 15px;
  }
  .pagination-container .pagination-content .pagination-right button {
    width: 60px;
    height: 75%;
    border-radius: 15px;
  }
  .museum-home-container
    .museum-main-container
    .about-title-container
    .about-title-container
    .about-title-content
    .title-review-content
    .title-review-header
    h1 {
    font-size: 2.25rem;
    line-height: 34px;
  }
  .museum-home-container
    .museum-main-container
    .about-title-container
    .about-title-container
    .about-title-content
    .title-review-content
    .title-review-header
    span {
    width: 100%;
    font-size: 1rem;
    line-height: 20px;
  }
  .museum-home-container
    .museum-main-container
    .about-title-container
    .about-title-container
    .about-title-content
    .title-review-content
    .title-review-header
    span.title {
    width: 95%;
  }
  .museum-home-container
    .museum-main-container
    .about-title-container
    .about-title-container
    .about-title-content
    .title-review-content
    .title-review-items {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .museum-home-container
    .museum-main-container
    .about-title-container
    .about-title-container
    .about-title-content
    .title-review-content
    .title-review-items
    .input-name {
    width: 100%;
  }
  .museum-home-container
    .museum-main-container
    .about-title-container
    .about-title-container
    .about-title-content
    .title-review-content
    .title-review-items
    .input-lastname {
    width: 100%;
  }
  .museum-home-container
    .museum-main-container
    .about-title-container
    .about-title-container
    .about-title-content
    .title-review-content {
    width: 100%;
    height: 900px;
  }
  .museum-home-container
    .museum-main-container
    .about-title-container
    .about-title-container
    .about-title-content
    .title-review-content
    .title-review-items
    button {
    width: 100%;
  }
}

@media screen and (min-width: 900px) and (max-width: 1160px) {
  .pagination-container .pagination-content .pagination-left {
    width: 51%;
    height: 65px;

    button {
      &.prev,
      &.next {
        display: none;
      }

      &.horizontall-prev,
      &.horizontall-next {
        display: block;
        width: 180px;
        padding: 0;
        border-radius: 15px;
      }
    }
  }

  .pagination-container .pagination-content .pagination-right {
    width: 45%;
    column-gap: 10px;

    span {
      font-size: 1.15rem;
    }

    input {
      width: 40px;
      height: 75%;
      border-radius: 15px;
      margin: 0 10px;
      padding: 5px 10px;
      font-size: 1.25rem;
    }

    button {
      width: 40px;
      height: 75%;
      border-radius: 15px;
    }
  }

  .museum-home-container
    .museum-main-container
    .about-title-container
    .about-title-container
    .about-title-content
    .title-review-content {
    width: 100%;

    .title-review-header {
      h1 {
        font-size: 3rem;
        line-height: 50px;
      }

      span {
        font-size: 1.15rem;
      }
    }
  }
}
</style>
