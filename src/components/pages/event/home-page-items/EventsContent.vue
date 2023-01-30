<template>
  <div class="events-content-container">
    <div class="events-content">
      <div class="events-content-bg"></div>
      <div class="events-left-items">
        <div class="event-items" v-for="(item, idx) in list" :key="idx">
          <router-link :to="`/events/${item.id}`" class="items-wrapper">
            <img
              :src="require('@/assets/Items/Events/EventsHome/' + item.img)"
              alt=""
            />
            <h3>{{ item.title }}</h3>
            <p>{{ item.descript | filteredDesc }}</p>
            <div class="item-bottom">
              <div class="bottom-left">
                <div class="item-one">
                  <img
                    src="@/assets/Items/Events/EventsHome/Vector.svg"
                    alt=""
                  />
                  <span>{{ item.date }}</span>
                </div>
                <div class="item-one">
                  <img src="@/assets/Items/Events/EventsHome/img4.png" alt="" />
                  <span>посмотрели {{ item.seen }}</span>
                </div>
              </div>
              <div class="bottom-right">
                <router-link to="#">
                  <svg
                    width="11"
                    height="21"
                    viewBox="0 0 11 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.09524 4.2C2.09524 1.8804 3.97138 0 6.28571 0H9.42856C10.0071 0 10.4762 0.470101 10.4762 1.05V4.2C10.4762 4.7799 10.0071 5.25 9.42856 5.25H7.33333V6.3H9.95237C10.2603 6.3 10.5527 6.4358 10.7517 6.67131C10.9508 6.90681 11.0364 7.21817 10.9857 7.52262L10.4619 10.6726C10.3777 11.1789 9.94068 11.55 9.42856 11.55H7.33333V19.95C7.33333 20.5299 6.86429 21 6.28571 21H3.14285C2.56427 21 2.09524 20.5299 2.09524 19.95V11.55H1.04762C0.469035 11.55 0 11.0799 0 10.5V7.35C0 6.7701 0.469035 6.3 1.04762 6.3H2.09524V4.2ZM2.09524 8.4V9.45H3.14285C3.72144 9.45 4.19047 9.9201 4.19047 10.5V18.9H5.23809V10.5C5.23809 9.9201 5.70713 9.45 6.28571 9.45H8.5411L8.7157 8.4H6.28571C5.70713 8.4 5.23809 7.9299 5.23809 7.35V4.2C5.23809 3.6201 5.70713 3.15 6.28571 3.15H8.38095V2.1H6.28571C5.12854 2.1 4.19047 3.0402 4.19047 4.2V7.35C4.19047 7.9299 3.72144 8.4 3.14285 8.4H2.09524Z"
                      fill="currentcolor"
                      fill-opacity="0.6"
                    />
                  </svg>
                </router-link>
                <router-link to="#">
                  <svg
                    width="30"
                    height="21"
                    viewBox="0 0 30 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.7 4.6C29.7 4.6 29.4 2.5 28.5 1.6C27.4 0.4 26.1 0.4 25.5 0.3C21.3 1.78814e-07 15 0 15 0C15 0 8.7 1.78814e-07 4.5 0.3C3.9 0.4 2.6 0.4 1.5 1.6C0.6 2.5 0.3 4.6 0.3 4.6C0.3 4.6 0 7 0 9.4V11.6C0 14 0.3 16.5 0.3 16.5C0.3 16.5 0.6 18.6 1.5 19.5C2.6 20.7 4.1 20.7 4.8 20.8C7.2 20.9 15 21 15 21C15 21 21.3 21 25.5 20.7C26.1 20.6 27.4 20.6 28.5 19.4C29.4 18.5 29.7 16.4 29.7 16.4C29.7 16.4 30 14 30 11.6V9.4C30 7 29.7 4.6 29.7 4.6ZM11.9 14.4V6L20 10.2L11.9 14.4Z"
                      fill="currentcolor"
                      fill-opacity="0.6"
                    />
                  </svg>
                </router-link>
                <router-link to="#">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 6.3C0 2.82061 2.82061 0 6.3 0H14.7C18.1794 0 21 2.82061 21 6.3V14.7C21 18.1794 18.1794 21 14.7 21H6.3C2.82061 21 0 18.1794 0 14.7V6.3ZM6.3 2.1C3.9804 2.1 2.1 3.9804 2.1 6.3V14.7C2.1 17.0196 3.9804 18.9 6.3 18.9H14.7C17.0196 18.9 18.9 17.0196 18.9 14.7V6.3C18.9 3.9804 17.0196 2.1 14.7 2.1H6.3ZM8.4 10.5C8.4 11.6598 9.3402 12.6 10.5 12.6C11.6598 12.6 12.6 11.6598 12.6 10.5C12.6 9.3402 11.6598 8.4 10.5 8.4C9.3402 8.4 8.4 9.3402 8.4 10.5ZM10.5 6.3C8.1804 6.3 6.3 8.1804 6.3 10.5C6.3 12.8196 8.1804 14.7 10.5 14.7C12.8196 14.7 14.7 12.8196 14.7 10.5C14.7 8.1804 12.8196 6.3 10.5 6.3ZM15.225 4.2C14.3552 4.2 13.65 4.90515 13.65 5.775C13.65 6.64485 14.3552 7.35 15.225 7.35C16.0948 7.35 16.8 6.64485 16.8 5.775C16.8 4.90515 16.0948 4.2 15.225 4.2Z"
                      fill="currentcolor"
                      fill-opacity="0.6"
                    />
                  </svg>
                </router-link>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div class="content-right-items">
        <button>Запланированные</button>
        <button>Проведенные</button>
        <div class="event-year">
          <year-page />
        </div>
        <div class="event-month">
          <month-page />
        </div>
      </div>
    </div>

    <app-pagination :data="getEvents" :limit="4" @paginate="paginateData" />
  </div>
</template>
<script>
import AppPagination from "@/components/pages/common/AppPagination.vue";
import YearPage from "../../common/YearPage.vue";
import MonthPage from "../../common/MonthPage.vue";
export default {
  components: { AppPagination, YearPage, MonthPage },
  data() {
    return {
      list: [],
      isYearActive: false,
      date: new Date().getFullYear(),
      years: [],
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
      isMonthActive: false,
    };
  },
  mounted() {
    this.getYears();
    this.getMonth();
    this.getData();
  },
  computed: {
    getEvents() {
      let events =
        this.$store?.getters &&
        this.$store.getters?.getEvents &&
        this.$store.getters.getEvents;
      let event;
      events.forEach((element) => {
        if (element.id == 2) {
          event = element.events;
        }
      });
      return event;
    },
  },
  methods: {
    getData() {
      this.list = this.getEvents.slice(0, 4);
    },
    paginateData(data) {
      this.list = data;
    },
    yearActive() {
      this.isYearActive = !this.isYearActive;
    },
    monthActive() {
      this.isMonthActive = !this.isMonthActive;
    },
    getYears() {
      let year = new Date().getFullYear();

      for (let i = year - 20; i <= year; i++) {
        this.years.push(i);
      }
    },
    selectYear(e) {
      this.date = e;
    },
    selectMonth(e) {
      this.month = e;
    },
    getMonth() {
      let month = new Date().getMonth();
      for (let i = 0; i < this.months.length; i++) {
        if (i == month) {
          this.month = this.months[i];
        }
      }
    },
  },
  filters: {
    filteredDesc(value) {
      return value.slice(0, 88) + " ...";
    },
  },
};
</script>
