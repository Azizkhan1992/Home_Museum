<template>
  <div class="museum-footer-container">
    <div class="museum-footer-bg">
      <div class="museum-footer-content">
        <div class="footer-header">
          <img src="@/assets/Items/Footer/img1.png" alt="" />
          <div class="header-title">
            <h1>tamara hanum</h1>
            <p>uy muzeyi</p>
          </div>
        </div>
        <div class="footer-content">
          <div class="content-left">
            <div class="left-address">
              <h3>Адрес</h3>
              <p>{{ getFooterInfo.address }}</p>
            </div>
            <div class="left-work">
              <h3>График работы</h3>
              <p>{{ getFooterInfo.word_days }}</p>
              <p>{{ getFooterInfo.day_off }}</p>
            </div>
            <div class="left-contacts">
              <h3>Контакты</h3>
              <span>{{ getFooterInfo.phone }}</span>
              <span>{{ getFooterInfo.facs }}</span>
              <span>{{ getFooterInfo.mail }}</span>
            </div>

            <div class="mobile-items">
              <p>Наши социальные сети</p>
              <link-items :twit-active="true"/> 
            </div>


          </div>
          <div class="content-right">
            <div
              class="items"
              v-for="(item, idx) in getMenuItems"
              :key="idx"
              v-show="item.category == 'section'"
              :id="idx + 1"
              :class="{
                'about-museum': idx + 1 == 2,
                services: idx + 1 == 6,
                'press-service': idx + 1 == 4,
                media: idx + 1 == 5,
                collection: idx + 1 == 3,
              }"
            >
              <h3>{{ item.name }}</h3>

              <div
                class="menu-items"
                v-for="(menu, idy) in item.subMenu"
                :key="idy"
              >
                <router-link :to="menu.url">{{ menu.name }}</router-link>
              </div>
            </div>
          </div>
          <div class="content-footer">
            <p>
              © 2022 Все права защищены. При использовании материалов веб-сайта,
              ссылка на источник обязательна.
            </p>
            <p>
              Нашли в тексте ошибку? Выделите её и нажмите <i>Ctrl+Enter</i>, а
              затем отправьте нам для уведомления администрации
            </p>

            <div class="museum-social">
              <p>Наши социальные сети</p>
              <div class="social-items">
                <div
                  class="social"
                  v-for="(item, idy) in getSocial"
                  :key="idy"
                  v-show="item.mediaType !== 'telegram'"
                >
                  <router-link :to="item.url">
                    <img
                      :src="
                        item.mediaType == 'twitter'
                          ? require('@/assets/Items/Footer/Icon.png')
                          : item.mediaType == 'facebook'
                          ? require('@/assets/Items/Footer/Icon2.png')
                          : item.mediaType == 'instagram'
                          ? require('@/assets/Items/Footer/Icon4.png')
                          : item.mediaType == 'you-tube'
                          ? require('@/assets/Items/Footer/Icon1.png')
                          : ''
                      "
                      alt=""
                  /></router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-footer">
          <div class="footer-left-items">
            <p>Файлы cookie</p>
            <p>Карта сайта</p>
            <p>Политика конфиденциальности</p>
            <p>Главное на сегодня</p>
          </div>
          <div class="footer-right-items">
            <p>Разработка сайта</p>
            <router-link :to="getFooterInfo.our_url">
              <img
                :src="require('@/assets/Items/Footer/' + getFooterInfo.img)"
                alt=""
              />
            </router-link>
          </div>
        </div>
      </div>


      <!-- Gorizontal Screen Items -->
      <div class="horizontal-footer-content">
        <div class="footer-header">
          <div class="footer-logo">
            <img src="@/assets/Items/Footer/img1.png" alt="" />
          <div class="header-title">
            <h1>tamara hanum</h1>
            <p>uy muzeyi</p>
          </div>
          </div>

          <div class="mobile-items">
              <p>Наши социальные сети</p>
              <link-items :twit-active="true"/> 
            </div>
        </div>
        <div class="footer-content">
          
          <div class="content-right">
            <div
              class="items"
              v-for="(item, idx) in getMenuItems"
              :key="idx"
              v-show="item.category == 'section'"
              :id="idx + 1"
              :class="{
                'about-museum': idx + 1 == 2,
                services: idx + 1 == 6,
                'press-service': idx + 1 == 4,
                media: idx + 1 == 5,
                collection: idx + 1 == 3,
              }"
            >
              <h3>{{ item.name }}</h3>

              <div
                class="menu-items"
                v-for="(menu, idy) in item.subMenu"
                :key="idy"
              >
                <router-link :to="menu.url">{{ menu.name }}</router-link>
              </div>
            </div>
          </div>
          <div class="content-footer">
            <p>
              © 2022 Все права защищены. При использовании материалов веб-сайта,
              ссылка на источник обязательна.
            </p>
            <div class="footer-left-items">
            <p>Файлы cookie</p>
            <p>Карта сайта</p>
            <p>Главное на сегодня</p>
            <p>Политика конфиденциальности</p>
          </div>

            
          </div>

          <div class="content-left">
            <div class="left-address">
              <h3>Адрес</h3>
              <p>{{ getFooterInfo.address }}</p>
            </div>
            <div class="left-work">
              <h3>График работы</h3>
              <p>{{ getFooterInfo.word_days }}</p>
              <p>{{ getFooterInfo.day_off }}</p>
            </div>
            <div class="left-contacts">
              <h3>Контакты</h3>
              <span>{{ getFooterInfo.phone }}</span>
              <span>{{ getFooterInfo.facs }}</span>
              <span>{{ getFooterInfo.mail }}</span>
            </div>

            


          </div>
        </div>
        <div class="footer-footer">
          
          <div class="footer-right-items">
            <p>Разработка сайта</p>
            <router-link :to="getFooterInfo.our_url">
              <img
                :src="require('@/assets/Items/Footer/' + getFooterInfo.img)"
                alt=""
              />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LinkItems from '../pages/common/LinkItems.vue';
export default {
  name: "museum-footer",
  components: {LinkItems},
  data() {
    return {};
  },
  computed: {
    getFooterInfo() {
      let footerInfo =
        this.$store?.getters &&
        this.$store.getters?.getFooterInfo &&
        this.$store.getters.getFooterInfo;
      return footerInfo;
    },
    getMenuItems() {
      let menu =
        this.$store?.getters &&
        this.$store.getters?.getMenuItems &&
        this.$store.getters.getMenuItems;

      return menu;
    },
    getSocial() {
      let media =
        this.$store?.getters &&
        this.$store.getters?.getSocialMedia &&
        this.$store.getters.getSocialMedia;
      return media;
    },
  },
};
</script>
