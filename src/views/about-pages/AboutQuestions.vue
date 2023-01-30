<template>
  <div class="questions-container">
    <div class="questions-content">
      <div class="questions-header">
        <h1>{{ getQuestionHeader.title }}</h1>
        <img
          :src="
            require('@/assets/Items/About/AboutQuestions/' +
              getQuestionHeader.img)
          "
          alt=""
        />
      </div>

      <div class="questions-content">
        <div class="questions-content-bg"></div>
        <div
          class="questions-items"
          v-for="(item, idx) in getQuestions"
          :key="idx"
        >
          <h3 class="question">{{ item.question }}</h3>
          <button
            v-show="!isAnswer || checkId !== item.id"
            @click="answerActive(item.id)"
          >
            -
          </button>
          <button
            v-show="isAnswer && checkId == item.id"
            @click="answerActive(item.id)"
          >
            +
          </button>

          <h4 v-show="isAnswer && checkId == item.id" :id="item.id">
            {{ item.answer }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about-questions",
  data() {
    return {
      isAnswer: false,
      checkId: null,
    };
  },
  computed: {
    getQuestionHeader() {
      let items =
        this.$store?.getters &&
        this.$store.getters?.getQuestions &&
        this.$store.getters.getQuestions;

      let item;
      items.forEach((element) => {
        if (element.id == 1) {
          item = element;
        }
      });
      return item;
    },
    getQuestions() {
      let questions =
        this.$store?.getters &&
        this.$store.getters?.getQuestions &&
        this.$store.getters.getQuestions;
      let question;
      questions.forEach((element) => {
        if (element.id == 2) {
          question = element.questions;
        }
      });
      return question;
    },
  },
  methods: {
    answerActive(e) {
      this.getQuestions.forEach((element) => {
        if (element.id == e) {
          this.isAnswer = !this.isAnswer;
          this.checkId = e;
        }
      });
    },
  },
};
</script>
