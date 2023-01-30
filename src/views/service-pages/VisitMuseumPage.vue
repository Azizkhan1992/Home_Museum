<template>
  <div class="visit-museum-container" @click="modalDeactive">
    <div class="visit-museum-content">
      <div class="visit-museum-header">
        <h1>{{ getVisitMuseum.header }}</h1>
      </div>

      <div class="visit-museum-wrapper" :class="{ 'modal-bg': isModal }">
        <div class="visit-museum-bg"></div>
        <div class="modal-container" v-if="isModal">
          <div class="visit-museum-modal" @click.stop="modalActive">
            <div class="exit" @click="modalDeactive">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.95163 21.5072C0.615332 21.162 0.429966 20.6973 0.436308 20.2153C0.442651 19.7334 0.640183 19.2737 0.985449 18.9374L8.79643 11.3293L1.18837 3.51837C0.852075 3.1731 0.666708 2.70838 0.673051 2.22644C0.679392 1.7445 0.876925 1.28483 1.22219 0.94853C1.56746 0.612232 2.03218 0.426864 2.51412 0.433207C2.99605 0.439549 3.45573 0.637082 3.79203 0.98235L11.4001 8.79333L19.2111 1.18527C19.5563 0.848974 20.021 0.663607 20.503 0.669949C20.9849 0.676291 21.4446 0.873825 21.7809 1.21909C22.1172 1.56436 22.3026 2.02908 22.2962 2.51102C22.2899 2.99295 22.0923 3.45263 21.7471 3.78893L13.9361 11.397L21.5442 19.208C21.8805 19.5532 22.0658 20.0179 22.0595 20.4999C22.0531 20.9818 21.8556 21.4415 21.5103 21.7778C21.1651 22.1141 20.7004 22.2995 20.2184 22.2931C19.7365 22.2868 19.2768 22.0892 18.9405 21.744L11.3324 13.933L3.52147 21.5411C3.1762 21.8774 2.71148 22.0627 2.22954 22.0564C1.74761 22.05 1.28793 21.8525 0.95163 21.5072Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <h3>Заполните заявку для посещения визита</h3>

            <div class="modal-wrapper">
              <div class="modal-date-picker">
                <div class="date-visible" @click.stop="pickerActive">
                  <p>{{ visitDate }}</p>
                  <img src="@/assets/Items/Common/Items/Vector2.png" alt="" />
                </div>
                <app-datepicker
                  :datepicker-active="isPicker"
                  @date="getActiveDate"
                />
              </div>
              <div class="input-time">
                <input type="text" placeholder="Время посещения" />
                <img src="@/assets/Items/Common/Items/Vector.png" alt="" />
              </div>
              <input type="text" placeholder="Количество посетителей" />
              <input type="text" placeholder="Фамилия" />
              <input
                type="text"
                placeholder="Контактные данные
"
              />
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Отчество" />
              <button class="submit-btn" @click.stop="submitActive">
                Отправить заявку
              </button>
            </div>
            <div class="modal-bg"></div>
          </div>
        </div>

        <div class="submitted-modal" v-if="isSubmit">
          
          <div class="submitted-modal-wrapper" @click.stop="submitActive">
            <div class="exit" @click="modalDeactive">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.95163 21.5072C0.615332 21.162 0.429966 20.6973 0.436308 20.2153C0.442651 19.7334 0.640183 19.2737 0.985449 18.9374L8.79643 11.3293L1.18837 3.51837C0.852075 3.1731 0.666708 2.70838 0.673051 2.22644C0.679392 1.7445 0.876925 1.28483 1.22219 0.94853C1.56746 0.612232 2.03218 0.426864 2.51412 0.433207C2.99605 0.439549 3.45573 0.637082 3.79203 0.98235L11.4001 8.79333L19.2111 1.18527C19.5563 0.848974 20.021 0.663607 20.503 0.669949C20.9849 0.676291 21.4446 0.873825 21.7809 1.21909C22.1172 1.56436 22.3026 2.02908 22.2962 2.51102C22.2899 2.99295 22.0923 3.45263 21.7471 3.78893L13.9361 11.397L21.5442 19.208C21.8805 19.5532 22.0658 20.0179 22.0595 20.4999C22.0531 20.9818 21.8556 21.4415 21.5103 21.7778C21.1651 22.1141 20.7004 22.2995 20.2184 22.2931C19.7365 22.2868 19.2768 22.0892 18.9405 21.744L11.3324 13.933L3.52147 21.5411C3.1762 21.8774 2.71148 22.0627 2.22954 22.0564C1.74761 22.05 1.28793 21.8525 0.95163 21.5072Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
            <div class="submit-bg-top"></div>
            <div class="submit-bg-bottom"></div>
            <h1>
              Спасибо что запольныли заявку постараемся в скором времени с вами
              связаться!
            </h1>
          </div>
        </div>
        <button @click.stop="modalActive" class="visit-btn">
          Запланировать визит
        </button>
        <p>Директор музея : {{ getVisitMuseum.directorMuseum }}</p>
        <p>
          Вопросы и предложения вы можете направить на почту:
          {{ getVisitMuseum.mail }}
        </p>
        <p>Контакты по организации мероприятий: {{ getVisitMuseum.phone }}</p>
        <p>Организация экскурсий: {{ getVisitMuseum.phone }}</p>
        <p>Контакты для СМИ: {{ getVisitMuseum.contact }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import AppDatepicker from "@/components/pages/common/AppDatepicker.vue";
export default {
  name: "visit-museum",
  components: { AppDatepicker },
  data() {
    return {
      isModal: false,
      visitDate: "Дата посещения",
      isPicker: false,
      isSubmit: false,
    };
  },
  computed: {
    getVisitMuseum() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getVisit &&
        this.$store.getters.getVisit;

      return items;
    },
  },
  methods: {
    modalActive() {
      this.isModal = true;
    },
    modalDeactive() {
      this.isModal = false;
      this.isSubmit = false;
    },
    pickerActive() {
      this.isPicker = !this.isPicker;
    },
    getActiveDate(val) {
      this.visitDate = val;
    },
    submitActive() {
      this.isModal = false;
      this.isSubmit = true;
    },
  },
};
</script>
