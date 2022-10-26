<template>
  <div class="volunteers-container" @click="isModal = false, isSubmit = false">
    <div class="volunteers-content">
      <div class="volunteers-header">
        <h1>{{ getVolunteersHeader.title }}</h1>
        <img
          :src="
            require('@/assets/Items/Service/Volunteers/' +
              getVolunteersHeader.img)
          "
          alt=""
        />
      </div>

      <div class="volunteers-wrapper">
        <div class="volunteers-bg-top"></div>
        <div class="volunteers-bg-bottom"></div>

        <div class="volunteers-descript">
          <p>{{ getDescript.descript_one }}</p>
          <h3>{{ getDescript.title1 }}</h3>
          <p>{{ getDescript.descript_two }}</p>
          <h3>{{ getDescript.title2 }}</h3>
          <p>{{ getDescript.descript_three }}</p>
        </div>

        <div class="volunteers-museum">
          <h1>Мероприятия</h1>
          <div
            class="volunteers-items"
            v-for="(item, idx) in getVolunteers"
            :key="idx"
            v-show="isEvents"
          >
            <p>{{ item.title }}</p>
            <div class="item-center">
              <div class="item-one">
                <div class="one-left">
                  <img src="@/assets/Items/Common/Items/Vector.svg" alt="" />
                  <span>{{ item.date_start }}</span>
                </div>
                <img src="@/assets/Items/Common/Items/Vector3.png" alt="" />
                <span>{{ item.date_end }}</span>
              </div>
              <div class="item-two">
                <img src="@/assets/Items/Common/Items/Location.png" alt="" />
                <span>{{ item.location }}</span>
              </div>
            </div>
            <button @click.stop="isModal = true" class="submit-btn">
              Стать волонтёром
            </button>

            <div class="volunteers-modal" v-if="isModal">
              <div class="modal-wrapper" @click.stop="isModal = true">
                <div class="modal-bg"></div>
                <h2>Заполните заявку волонтера</h2>
                <div class="modal-items">
                  <input type="text" placeholder="Название мероприятия" />
                  <input type="text" placeholder="Фамилия" />
                  <input
                    type="text"
                    placeholder="Контактные данные
"
                  />
                  <input type="text" placeholder="Имя" />
                  <input type="text" placeholder="Email" />
                  <input type="text" placeholder="Отчество" />

                  <textarea name="" id="" cols="30" rows="10"></textarea>
                  <button @click.stop="(isSubmit = true), (isModal = false)">
                    Отправить заявку
                  </button>
                </div>
              </div>
            </div>

            <div class="submitted-modal" v-if="isSubmit">
              <div class="submitted-modal-wrapper">
                <div class="submitted-bg"></div>
                <p>
                  Спасибо что заполнили завку постраемся в скором времени с вами
                  связаться!
                </p>
              </div>
            </div>
          </div>

          <div class="not-volunteers" v-show="!isEvents">
            <p>
              В данный момент мероприятий нет и волонтёры не требуются, ждите
              дольнейших новостей.
              <br />

              <br />
              Спасибо за ваше понимание с уважением администрация музея!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "museum-volunteers",
  data() {
    return {
      isEvents: true,
      isModal: false,
      isSubmit: false,
    };
  },
  computed: {
    getVolunteersHeader() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getVolunteers &&
        this.$store.getters.getVolunteers;
      let header;
      items.forEach((element) => {
        if (element.id == 1) {
          header = element;
        }
      });
      return header;
    },
    getDescript() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getVolunteers &&
        this.$store.getters.getVolunteers;
      let descript;
      items.forEach((element) => {
        if (element.id == 2) {
          descript = element;
        }
      });
      return descript;
    },
    getVolunteers() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getVolunteers &&
        this.$store.getters.getVolunteers;
      let volunteers;
      items.forEach((element) => {
        if (element.id == 3) {
          volunteers = element.events;
        }
      });
      return volunteers;
    },
  },
};
</script>
