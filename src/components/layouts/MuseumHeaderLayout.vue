<template>
  <div class="museum-header-container" v-on:mouseleave="dropDeactive">
    <div class="museum-header-content">
      <div class="desctop-content">
        <div class="header-top">
          <div class="header-logo">
            <img src="@/assets/Items/Header/img.png" alt="" />
            <div class="logo-title">
              <h1>tamara hanum</h1>
              <p>uy muzeyi</p>
            </div>
          </div>

          <div class="top-center">
            <div class="center-input">
              <img src="@/assets/Items/Header/Vector1.svg" alt="" />
              <input type="text" placeholder="Поиск..." />
            </div>
            <button>
              <img src="@/assets/Items/Header/img1.png" alt="" />
            </button>
            <button>
              <img src="@/assets/Items/Header/img3.png" alt="" />
            </button>
            <button>
              <img src="@/assets/Items/Header/img2.png" alt="" />
            </button>
            <button>
              <img src="@/assets/Items/Header/img4.png" alt="" />
            </button>
          </div>

          <div class="top-right">
            <img
              src="@/assets/Items/Header/img.svg"
              alt=""
              class="menu-img"
              @click="isMobile = true"
            />
            <button class="btn-one">Забронировать</button>
            <button class="btn-two">
              <img src="@/assets/Items/Header/phone.png" alt="" />
              <p>99 123 45 67</p>
            </button>
          </div>
        </div>

        <ul>
          <li v-for="(item, idx) in getMenuItems" :key="idx">
            <div class="items" v-if="item.category !== 'section'">
              <router-link :to="item.url">{{ item.name }}</router-link>
            </div>

            <div
              class="drop-items"
              v-if="item.category == 'section'"
              @click="dropActive(item.id)"
            >
              <p>{{ item.name }}</p>
              <img src="@/assets/Items/Header/Vector.png" alt="" />
            </div>
          </li>
          <div
            class="dropdown-hidden"
            :class="isActive ? 'active' : 'deactive'"
          >
            <div class="drop-content">
              <div class="drop-wrapper">
                <div
                  class="dropdown-items"
                  v-for="(drop, idy) in subItems?.subMenu"
                  :key="idy"
                  :id="idy + 1"
                >
                  <router-link :to="drop.url">{{ drop.name }}</router-link>
                </div>
              </div>

              <div class="quote-content">
                <p>{{ subItems?.quote }}</p>
                <span>{{ subItems?.ownQuote }}</span>
              </div>
            </div>
          </div>

          <li class="li-drop">
            <div class="drop-visible" @click="isLangActive = !isLangActive">
              <img src="@/assets/Items/Header/global.png" alt="" />
              <p>{{ lang }}</p>
              <img
                src="@/assets/Items/Header/Vector.png"
                alt=""
                :class="isLangActive ? 'lang-img-active' : ''"
              />
            </div>
            <div
              class="lang-drop-hidden"
              :class="isLangActive ? 'active' : 'deactive'"
            >
              <div
                class="lang-drop-items"
                v-for="(lang, idz) in languages"
                :key="idz"
                @click="selectLang(lang)"
              >
                <span>{{ lang }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="mobile-content" :class="isMobile ? 'active' : ''">
        <div class="mobile-header-visible">
          <div class="header-logo">
            <img src="@/assets/Items/Header/img.png" alt="" />
            <div class="logo-title">
              <h1>tamara hanum</h1>
              <p>uy muzeyi</p>
            </div>
          </div>

          <img
            src="@/assets/Items/Header/img.svg"
            alt=""
            @click="isMobile = true"
          />
        </div>

        <div
          class="mobile-header-hidden"
          :class="isMobile ? 'mobile-active' : 'mobile-deactive'"
          @click="isMobile = false"
        >
          <div class="exit" @click="isMobile = false">
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

          <div class="mobile-header-wrapper" @click.stop="">
            <div class="mobile-lang">
              <header-progress-bar :data="mobileLang" />
            </div>

            <div class="top-center">
              <button>
                <img src="@/assets/Items/Header/img1.png" alt="" />
              </button>
              <button>
                <img src="@/assets/Items/Header/img3.png" alt="" />
              </button>
              <button>
                <img src="@/assets/Items/Header/img2.png" alt="" />
              </button>
              <button>
                <img src="@/assets/Items/Header/img4.png" alt="" />
              </button>
              <div class="center-input">
                <img src="@/assets/Items/Header/Vector1.svg" alt="" />
                <input type="text" placeholder="Поиск..." />
              </div>
            </div>

            <div class="top-right">
              <button class="btn-one">Забронировать</button>
              <button class="btn-two">
                <img src="@/assets/Items/Header/call.png" alt="" />
                <p>99 123 45 67</p>
              </button>
            </div>

            <ul>
              <li v-for="(item, idz) in getMobileMenuItems" :key="idz">
                <div class="not-sub-menu" v-if="item.category !== 'section'">
                  <router-link :to="item.url">{{ item.name }}</router-link>
                </div>

                <div class="mobile-sub-menu" v-if="item.category == 'section'">
                  <div class="mobile-visible" @click="mobileActive(item.name)">
                    <span>{{ item.name }}</span>
                    <img
                      src="@/assets/Items/Header/Vector1.png"
                      alt=""
                      :class="isMobileActive && random == item.name ? 'img-active' : ''"
                    />
                  </div>

                  <div
                    class="mobile-hidden"
                    :class="
                      isMobileActive && random == item.name
                        ? 'hidden-active'
                        : 'hidden-deactive'
                    "
                  >
                    <div
                      class="sub-items"
                      v-for="(menu, idk) in item.subMenu"
                      :key="idk"
                    >
                      <router-link :to="menu.url">{{ menu.name }}</router-link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Scroll from "@/others/scrollPosition";
import HeaderProgressBar from "./layouts-inner/HeaderProgressBar.vue";
export default {
  name: "museum-header",
  components: { HeaderProgressBar },
  data() {
    return {
      isActive: false,
      isMobileActive: false,
      random: "",
      subItems: null,
      lang: "Uz",
      languages: ["Uz", "Eng", "Ru"],
      isLangActive: false,
      isMobile: false,
      mobileLang: [
        { name: "Uz", val: 1, active: true },
        { name: "Eng", val: 2 },
        { name: "Ru", val: 3 },
      ],
    };
  },
  mixins: [Scroll("scrollX")],
  computed: {
    getMenuItems() {
      let menuItems =
        this.$store?.getters &&
        this.$store.getters?.getMenuItems &&
        this.$store.getters.getMenuItems;
      return menuItems;
    },
    getMobileMenuItems() {
      let menuItems =
        this.$store?.getters &&
        this.$store.getters?.getMenuItems &&
        this.$store.getters.getMenuItems;
      return menuItems;
    },
  },
  methods: {
    dropActive(e) {
      this.isActive = true;
      this.getMenuItems.forEach((elem) => {
        if (elem.id == e) {
          this.subItems = elem;
        }
      });
    },
    mobileActive(val) {
      this.random = val;
      this.isMobileActive = !this.isMobileActive;
    },
    mobileDropActive(val) {
      this.isActive = !this.isActive;
      this.random = val;
      this.getMobileMenuItems.forEach((elem) => {
        if (elem.id == val) {
          this.subItems = elem.subMenu;
          // console.log(elem)
        }
      });
    },
    dropDeactive() {
      this.isActive = false;
    },
    selectLang(lang) {
      this.lang = lang;
    },
  },

  watch: {
    $route: function (val) {
      this.route = val.path;
    },

    // 'scrollX': function(val){
    //   console.log(val)

    // }
  },
};
</script>
