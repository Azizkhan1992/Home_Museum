import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // Header
        menuItems: [
            {
              id: 1,
              name: "Главная страница",
              category: "home",
              subMenu: [],
              url: "/",
            },
            {
              id: 2,
              name: "О Музее",
              category: "section",
              subMenu: [
                {
                  id: 1,
                  name: "Информация о музее",
                  url: "/about-museum",
                },
                {
                  id: 2,
                  name: "Информация о персоне",
                  url: "/about-person",
                },
                {
                  id: 3,
                  name: "Рубрика “Я Ойбек”",
                  url: "/about-title",
                },
                {
                  id: 4,
                  name: "Посетители о нас",
                  url: "/about-us",
                },
                {
                  id: 5,
                  name: "Схема музея",
                  url: "/scheme-museum",
                },
                {
                  id: 6,
                  name: "Партнеры",
                  url: "/partners",
                },
                {
                  id: 7,
                  name: "Команда музея",
                  url: "/group-museum",
                },
                {
                  id: 8,
                  name: "Документы",
                  url: "/documentation",
                },
                {
                  id: 9,
                  name: "Часто задаваемые вопросы",
                  url: "/questions",
                },
              ],
              ownQuote: "Тамара Ханум",
              quote:
                "Я осознала, что моя любовь к национальной музыке и танцу  - не “ болезнь” , от которой следует излечиться,а достойное чувство любви к творчеству народа, воспитавшего и вскормившего меня. ",
              url: "",
            },
            {
              id: 3,
              name: "Коллекция",
              category: "section",
              subMenu: [
                {
                  id: 1,
                  name: "Экспонаты",
                  url: "/exhibits",
                },
                {
                  id: 2,
                  name: "Книги, рукописи",
                  url: "/books",
                },
                {
                  id: 3,
                  name: "Инструменты",
                  url: "/tools",
                },
              ],
              ownQuote: "Т. Комар, польский литературовед",
              quote: "“Вы — дочь всех тех народов, песни которых поёте.”",
              url: "",
            },
            {
              id: 4,
              name: "Пресс-служба",
              category: "section",
              subMenu: [
                {
                  id: 1,
                  name: "Мероприятия",
                  url: "/events",
                },
                {
                  id: 2,
                  name: "Новости",
                  url: "/news",
                },
                {
                  id: 3,
                  name: "Материалы для СМИ",
                  url: "/materials",
                },
              ],
              ownQuote: "Майя Плисецкая",
              quote: "“Тамара Ханум — путеводная звезда Востока.”",
              url: "",
            },
            {
              id: 5,
              name: "Галерея",
              category: "section",
              subMenu: [
                {
                  id: 1,
                  name: "Фотографии",
                  url: "/photos",
                },
                {
                  id: 2,
                  name: "3D файлы",
                  url: "/3d-files",
                },
                {
                  id: 3,
                  name: "Видео",
                  url: "/videos",
                },
              ],
              ownQuote: "Юнус Раджаби",
              quote:
                "“Тамара — редкое явление в нашем искусстве, и в искусстве вообще”",
              url: "",
            },
            {
              id: 6,
              name: "Услуги",
              category: "section",
              subMenu: [
                {
                  id: 1,
                  name: "Магазин",
                  url: "/magazine",
                },
                {
                  id: 2,
                  name: "Посещение музея",
                  url: "/visit-museum",
                },
                {
                  id: 3,
                  name: "Волонтерам",
                  url: "/volunteers",
                },
                {
                  id: 4,
                  name: "Банковские карты",
                  url: "/bank-cards",
                },
              ],
              ownQuote: "Радж Капур",
              quote:
                "“Мы очень любим Вас. И наша любовь рождена теми индийскими танцами, которые родились в Индии и исполнены Вами. С тех пор Вы — наша.”",
              url: "",
            },
            {
                id: 7,
                name: "Контакты",
                category: "page",
                subMenu: [],
                url: "/contacts",
              },
          ],

        //   Footer
          footerInfo: {
            id: 2,
            address: "100000, г. Ташкент, проспект Амира Темура, 1",
            word_days: "Рабочие дни: Вт – Вс, 9:00 -18:00",
            day_off: "День отдыха: Понедельник",
            phone: "Тел: +998 71 232 02 08",
            facs: "Факс: +998 71 232 02 08",
            mail: "Э-почта: info@oybekmuseum.uz",
            img: 'img5.png',
            our_url: '#',
            our_visible: true
          },
          socialMedia: [
            {
                id: 1,
                mediaType: 'twitter',
                url: '#'
            },
            {
                id: 2,
                mediaType: 'facebook',
                url: '#'
            },
            {
                id: 3,
                mediaType: 'instagram',
                url: '#'
            },
            {
                id: 4,
                mediaType: 'you-tube',
                url: '#'
            },
            {
                id: 5,
                mediaType: 'telegram',
                url: '#'
            }
          ]
    },
    actions:{},
    mutations: {},
    getters: {
        // Header
        getMenuItems(state){
            return state.menuItems
        },

        // Footer
        getFooterInfo(state){
            return state.footerInfo
        },
        getSocialMedia(state){
            return state.socialMedia
        }
    }
});

export default store;