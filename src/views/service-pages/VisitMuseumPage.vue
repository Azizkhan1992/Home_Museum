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
