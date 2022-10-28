<template>
  <div class="menu-items-container">
    <ul :class="isAboutActive ? 'drop-active' : 'drop-deactive'">
      <li
        v-for="(menu, idx) in items"
        :key="idx"
        :class="{ 'active-menu-item': menu.url == $route.path }"
      >
        <router-link :to="menu.url">{{ menu.name }}</router-link>
      </li>
    </ul>

    <div class="active-item" @click="aboutActive">
      <p>{{ activeMenu.name }}</p>
      <img :class="isAboutActive ? 'img-active' : 'img-deactive'" src="@/assets/Items/Vector.svg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "menu-items",
  data() {
    return {
      activeItem: null,
      isAboutActive: false,
    };
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    activeMenu: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    aboutActive() {
      this.isAboutActive = !this.isAboutActive;
    },
  },
};
</script>
<style lang="scss">
.menu-items-container {
  width: 25%;
  height: auto;
  position: fixed;
  bottom: 0;
  left: 60px;
  z-index: 50;

  ul {
    width: 100%;
    padding: 0;
    height: 0;
    list-style: none;
    margin: 0;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 0 10px 15px;
    box-sizing: border-box;
    transition: height 1s ease-out;

    &.drop-deactive {
      padding: 0;
      overflow: hidden;
    }

    &.drop-active {
      height: auto;
      transition: height 1s ease-in;
    }

    li {
      width: 100%;
      height: 24px;

      &.active-menu-item a {
        font-weight: 700;
        background: linear-gradient(180deg, #a56935 0%, #6f5539 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      a {
        text-decoration: none;
        font-size: 1rem;
        line-height: 20px;
        font-weight: 400;
        background: linear-gradient(
          180deg,
          rgba(165, 105, 53, 0.6) 0%,
          rgba(111, 85, 57, 0.6) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .active-item {
    width: 100%;
    height: 52px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    padding: 10px 0 10px 10px;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px 20px 0 0;
    cursor: pointer;

    p {
      width: 65%;
      font-size: 1rem;
      line-height: 20px;
      font-weight: 700;
      background: linear-gradient(180deg, #a56935 0%, #6f5539 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    img {
      width: 16px;
      height: 10px;
      margin-left: 50px;
      transition: transform 0.5s ease-out;

      &.img-active{
        transform: rotate(-180deg);
        transition: transform 0.5s ease-in;
      }
    }
  }
}

@media screen and(min-width: 320px) and (max-width: 540px) {
  .menu-items-container{
    width: 50%;
  }
  .menu-items-container .active-item{
    height: 65px;
  }
  .menu-items-container .active-item img.img-active{
    margin-left: 10px;
  }
  .menu-items-container .active-item img.img-deactive{
    margin-left: 10px;
  }
  .menu-items-container ul{
    row-gap: 10px;
  }
  .menu-items-container ul li{
    height: 35px;
  }
}
</style>
