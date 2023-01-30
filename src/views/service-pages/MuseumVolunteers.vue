<template>
  <div
    class="volunteers-container"
    @click="(isModal = false), (isSubmit = false)"
  >
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
                <img src="@/assets/Items/Common/Items/Vector5.png" alt="" />
                <div class="one-right">
                  <img src="@/assets/Items/Common/Items/Vector.svg" alt="" />
                  <span>{{ item.date_end }}</span>
                </div>
              </div>
              <div class="item-two">
                <img src="@/assets/Items/Common/Items/Location.png" alt="" />
                <span>{{ item.location }}</span>
              </div>
            </div>
            <button @click.stop="isModal = true" class="submit-btn">
              Стать волонтёром
            </button>

            <!-- Gorizontall Items Start 1 -->
            <div class="horizontall-items">
              <div class="item-one">
                <div class="one-left">
                  <img src="@/assets/Items/Common/Items/Vector.svg" alt="" />
                  <span>{{ item.date_start }}</span>
                </div>
                <img src="@/assets/Items/Common/Items/Vector3.png" alt="" />
                <div class="one-right">
                  <img src="@/assets/Items/Common/Items/Vector.svg" alt="" />
                  <span>{{ item.date_end }}</span>
                </div>
              </div>
              <div class="item-two">
                <img src="@/assets/Items/Common/Items/Location.png" alt="" />
                <span>{{ item.location }}</span>
              </div>
              <button @click.stop="isModal = true" class="submit-btn">
              Стать волонтёром
            </button>
            </div>

            <div class="volunteers-modal" v-if="isModal">
              <div class="modal-wrapper" @click.stop="isModal = true">
                <div class="exit" @click="isModal = false">
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
                <div class="exit">
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
