<template>
  <div class="visit-museum-container" @click="modalDeactive">
    <div class="visit-museum-content">
      <div class="visit-museum-header">
        <h1>{{ getVisitMuseum.header }}</h1>
      </div>

      <div class="visit-museum-wrapper" :class="{ 'modal-bg': isModal }">
        <div class="visit-museum-bg"></div>
        <div class="modal-container" v-if="isModal">
          <div class="visit-museum-modal">
            <h3>Заполните заявку для посещения визита</h3>

            <div class="modal-wrapper">
              <div class="modal-date-picker">
                <div class="date-visible" @click.stop="pickerActive">
                  <p>{{ visitDate }}</p>
                  <img src="@/assets/Items/Common/Items/Vector.svg" alt="" />
                </div>
                <app-datepicker :datepicker-active="isPicker" @date="getActiveDate"/>
              </div>
              <input type="text" placeholder="Время посещения" />
              <input type="text" placeholder="Количество посетителей" />
              <input type="text" placeholder="Фамилия" />
              <input
                type="text"
                placeholder="Контактные данные
"
              />
              <input type="text" placeholder="Имя">
              <input type="text" placeholder="Email">
              <input type="text" placeholder="Отчество">
            </div>
            <div class="modal-bg"></div>
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
    },
    pickerActive() {
      this.isPicker = !this.isPicker;
    },
    getActiveDate(val){
        this.visitDate = val
    }
  },
};
</script>
