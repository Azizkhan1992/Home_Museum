<template>
  <div class="title-items-container">
    <div class="title-items-content">
      <div class="title-items-header">
        <h1>{{ data.title }}</h1>
      </div>
      <div class="title-item-content">
        <div class="title-bg-top"></div>
        <div class="items-header">
          <h3>{{ data.header }}</h3>
          <div class="header-right">
            <div class="item-name">
              <img src="@/assets/Items/About/AboutTitleItems/img.svg" alt="" />
              <p>{{ data.name }}</p>
            </div>
            <div class="item-date">
              <img
                src="@/assets/Items/About/AboutTitleItems/Vector.svg"
                alt=""
              />
              <p>{{ data.date }}</p>
            </div>
            <div class="item-seen">
              <img src="@/assets/Items/About/AboutTitleItems/img1.svg" alt="" />
              <p>{{ data.seen }}</p>
            </div>
          </div>
        </div>
        <div class="items-wrapper">
          <h5>{{ data.partName }}</h5>
          <p>{{ data.descript_one }}</p>
          <div class="wrapper-bg-one"></div>
          <p>{{ data.descript_two }}</p>
          <div class="wrapper-bg-two"></div>
          <p>{{ data.descript_three }}</p>
          <div class="wrapper-bg-three"></div>
          <p>{{ data.descript_four }}</p>
          <div class="wrapper-bg-four"></div>
          <br />
          <p>{{ data.descript_five }}</p>
          <p>* * *</p>
          <p>{{ data.descript_six }}</p>
        </div>
      </div>


      <div class="read-more">
        <div class="read-more-left">
          <button>Читать далее</button>
        </div>
        <div class="read-more-right">
          <div class="right-one">
            <img src="@/assets/Items/About/AboutTitleItems/img.svg" alt="" />
            <p>{{ data.name }}</p>
          </div>
          <div class="right-two">
            <img src="@/assets/Items/About/AboutTitleItems/Vector.svg" alt="" />
            <p>{{ data.date }}</p>
          </div>
          <div class="right-three">
            <img src="@/assets/Items/About/AboutTitleItems/img1.svg" alt="" />
            <p>{{ data.seen }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "title-items",
  data() {
    return {
      currentRoute: this.$route.path,
      checkId: null,
      data: {},
    };
  },
  mounted() {
    this.getId(), this.getItemData();
  },
  computed: {
    getTitleItems() {
      let titleTitle =
        this.$store?.getters &&
        this.$store.getters?.getTitleItems &&
        this.$store.getters.getTitleItems;
      return titleTitle;
    },
  },
  methods: {
    getId() {
      let id = this.currentRoute.split("/");
      this.checkId = id[2];
    },
    getItemData() {
      this.getTitleItems.forEach((element) => {
        if (element.id == this.checkId) {
          this.data = element;
        //   console.log(this.data);
        }
      });
    },
  },
};
</script>
