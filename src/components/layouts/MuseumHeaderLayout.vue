<template>
  <div class="museum-header-container">
    <div class="museum-header-content">
      <ul>
        <li v-for="(item, idx) in getMenuItems" :key="idx">
          <div class="items" v-if="item.category !== 'section'" @click="dropDeactive(); setActiveSubmenu(item)">
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
        <div class="dropdown-hidden" :class="isActive ? 'active' : 'deactive'">
            
          <div class="drop-content">

            <div class="drop-wrapper">
                <div
              class="dropdown-items"
              v-for="(drop, idy) in subItems?.subMenu"
              :key="idy"
              :id="idy + 1"
              @click="setActiveSubmenu(drop)"
            >
              <router-link :to="drop.url">{{ drop.name }}</router-link>
            </div>
            </div>

            <div
              class="quote-content"
              
            >
              <p>{{ subItems?.quote }}</p>
              <span>{{ subItems?.ownQuote }}</span>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "museum-header",
  data() {
    return {
      // menuItems: [
      //   {
      //     id: 1,
      //     name: "Главная страница",
      //     category: "home",
      //     subMenu: [],
      //     url: "/",
      //   },
      //   {
      //     id: 2,
      //     name: "Контакты",
      //     category: "page",
      //     subMenu: [],
      //     url: "/contacts",
      //   },
      //   {
      //     id: 3,
      //     name: "О Музее",
      //     category: "section",
      //     subMenu: [
      //       {
      //         id: 1,
      //         name: "Информация о музее",
      //         url: "/about-museum",
      //       },
      //       {
      //         id: 2,
      //         name: "Информация о персоне",
      //         url: "/about-person",
      //       },
      //       {
      //         id: 3,
      //         name: "Рубрика “Я Ойбек”",
      //         url: "/about-title",
      //       },
      //       {
      //         id: 4,
      //         name: "Посетители о нас",
      //         url: "/about-us",
      //       },
      //       {
      //         id: 5,
      //         name: "Схема музея",
      //         url: "/scheme-museum",
      //       },
      //       {
      //         id: 6,
      //         name: "Партнеры",
      //         url: "/partners",
      //       },
      //       {
      //         id: 7,
      //         name: "Команда музея",
      //         url: "/group-museum",
      //       },
      //       {
      //         id: 8,
      //         name: "Документы",
      //         url: "/documentation",
      //       },
      //       {
      //         id: 9,
      //         name: "Часто задаваемые вопросы",
      //         url: "/questions",
      //       },
      //     ],
      //     ownQuote: "Тамара Ханум",
      //     quote:
      //       "Я осознала, что моя любовь к национальной музыке и танцу  - не “ болезнь” , от которой следует излечиться,а достойное чувство любви к творчеству народа, воспитавшего и вскормившего меня. ",
      //     url: "",
      //   },
      //   {
      //     id: 4,
      //     name: "Коллекция",
      //     category: "section",
      //     subMenu: [
      //       {
      //         id: 1,
      //         name: "Экспонаты",
      //         url: "/exhibits",
      //       },
      //       {
      //         id: 2,
      //         name: "Книги, рукописи",
      //         url: "/books",
      //       },
      //       {
      //         id: 3,
      //         name: "Инструменты",
      //         url: "/tools",
      //       },
      //     ],
      //     ownQuote: "Т. Комар, польский литературовед",
      //     quote: "“Вы — дочь всех тех народов, песни которых поёте.”",
      //     url: "",
      //   },
      //   {
      //     id: 5,
      //     name: "Пресс-служба",
      //     category: "section",
      //     subMenu: [
      //       {
      //         id: 1,
      //         name: "Мероприятия",
      //         url: "/events",
      //       },
      //       {
      //         id: 2,
      //         name: "Новости",
      //         url: "/news",
      //       },
      //       {
      //         id: 3,
      //         name: "Материалы для СМИ",
      //         url: "/materials",
      //       },
      //     ],
      //     ownQuote: "Майя Плисецкая",
      //     quote: "“Тамара Ханум — путеводная звезда Востока.”",
      //     url: "",
      //   },
      //   {
      //     id: 6,
      //     name: "Галерея",
      //     category: "section",
      //     subMenu: [
      //       {
      //         id: 1,
      //         name: "Фотографии",
      //         url: "/photos",
      //       },
      //       {
      //         id: 2,
      //         name: "3D файлы",
      //         url: "/3d-files",
      //       },
      //       {
      //         id: 3,
      //         name: "Видео",
      //         url: "/videos",
      //       },
      //     ],
      //     ownQuote: "Юнус Раджаби",
      //     quote:
      //       "“Тамара — редкое явление в нашем искусстве, и в искусстве вообще”",
      //     url: "",
      //   },
      //   {
      //     id: 7,
      //     name: "Услуги",
      //     category: "section",
      //     subMenu: [
      //       {
      //         id: 1,
      //         name: "Магазин",
      //         url: "/magazine",
      //       },
      //       {
      //         id: 2,
      //         name: "Посещение музея",
      //         url: "/visit-museum",
      //       },
      //       {
      //         id: 3,
      //         name: "Волонтерам",
      //         url: "/volunteers",
      //       },
      //       {
      //         id: 4,
      //         name: "Банковские карты",
      //         url: "/bank-cards",
      //       },
      //     ],
      //     ownQuote: "Радж Капур",
      //     quote:
      //       "“Мы очень любим Вас. И наша любовь рождена теми индийскими танцами, которые родились в Индии и исполнены Вами. С тех пор Вы — наша.”",
      //     url: "",
      //   },
      // ],
      isActive: false,
      subItems: null,
    };
  },
  computed:{
    getMenuItems(){
      let menuItems = this.$store?.getters && this.$store.getters?.getMenuItems && this.$store.getters.getMenuItems;
      return menuItems
    }
  },
  methods: {
    setActiveSubmenu(menuItem) {
      let url = menuItem.url;
      url = this.findMenu(this.$store.state.menuItems, menuItem.url);
      this.$store.commit('setActiveSubmenu', url);
    },
    findMenu(menu, url) {
      // debugger;
      for (let i in menu) {
        if (menu[i].subMenu.length > 0) {
          for (let j in menu[i].subMenu) {
            if (menu[i].subMenu[j].url == url) {
              this.$store.commit('setActiveSubmenuItem', menu[i].subMenu)
              return url;
            }
          }
        }
      }
    },
    dropActive(e) {
      this.isActive = !this.isActive;
      this.getMenuItems.forEach((elem) => {
        if (elem.id == e) {
          this.subItems = elem;
        }
      });
    },
    dropDeactive(){
        this.isActive = false
    }
  },
};
</script>
