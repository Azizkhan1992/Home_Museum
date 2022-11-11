<template>
  <div class="contacts-container">
    <div class="contacts-content">
      <div class="contacts-header">
        <h1>Контакты</h1>
        <img src="@/assets/Items/Contacts/img1.png" alt="" />
      </div>

      <div class="contacts-wrapper">
        <div class="contacts-left">
          <div class="contact-address contact">
            <p>Адрес</p>
            <div class="address-items">
              <img src="@/assets/Items/Common/Items/Location.png" alt="" />
              <span>{{ getContacts.address }}</span>
            </div>
          </div>
          <div class="grafic-work contact">
            <p>График работы</p>
            <div class="address-items">
              <img src="@/assets/Items/Common/Items/Vector.png" alt="" />
              <span>{{ getContacts.work_days }}</span>
            </div>
          </div>
          <div class="contact">
            <p>Контакты</p>
            <div class="address-items phone">
              <img src="@/assets/Items/Common/Items/phone.png" alt="" />
              <div class="items">
                <span>{{ getContacts.phone }}</span>
                <span>{{ getContacts.facs }}</span>
                <span>{{ getContacts.mail }}</span>
              </div>
            </div>
          </div>
          <div class="location">
            <img src="@/assets/Items/Common/Items/bus.png" alt="" />
            <span>{{ getContacts.buses }}</span>
          </div>
          <div class="location">
            <img src="@/assets/Items/Common/Items/metro.png" alt="" />
            <span>{{ getContacts.metro }}</span>
          </div>
          <div class="location">
            <img src="@/assets/Items/Common/Items/Vector4.png" alt="" />
            <span>{{ getContacts.orientation }}</span>
          </div>

          <!-- Gorizontall Page Items Start -->
          <div class="location-items">
            <div class="location">
            <img src="@/assets/Items/Common/Items/bus.png" alt="" />
            <span>{{ getContacts.buses }}</span>
          </div>
          <div class="location">
            <img src="@/assets/Items/Common/Items/metro.png" alt="" />
            <span>{{ getContacts.metro }}</span>
          </div>
          <div class="location">
            <img src="@/assets/Items/Common/Items/Vector4.png" alt="" />
            <span>{{ getContacts.orientation }}</span>
          </div>
          </div>
        </div>

        <div class="contacts-right">
          <div class="right-bg"></div>
          <div class="right-wrapper">
            <h2>Здравствуйте, давайте свяжемся с вами.</h2>
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Фамилия" />
            <input type="email" class="mail" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button>Поделиться</button>
          </div>
        </div>

        <div class="contacts-bottom">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.47843884386!2d69.29526485112865!3d41.32020860801792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4cfd73a01b5%3A0xecda3d6058da9752!2z0JzRg9C30LXQuSDQodC10YDQs9C10Y8g0JXRgdC10L3QuNC90LA!5e0!3m2!1sru!2s!4v1666876826300!5m2!1sru!2s"
            width="100%"
            height="480"
            style="border: 0; border-radius: 20px;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div class="contact-breadcrumb">
        <div class="bread-items">
            <router-link to="/">Главная</router-link>
            <img src="@/assets/Items/Common/Items/Right.png" alt="">
            <span>Контакты</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "museum-contacts",
  computed: {
    getContacts() {
      return (
        this.$store?.getters &&
        this.$store.getters?.getContacts &&
        this.$store.getters.getContacts
      );
    },
  },
};
</script>
