<template>
  <div class="books-container">
    <div class="books-content">
      <div class="books-header">
        <h1>{{ getBooksHeader.title }}</h1>
        <img
          :src="
            require('@/assets/Items/Collection/Books/' + getBooksHeader.img)
          "
          alt=""
        />
      </div>

      <div class="books-wrapper">
        <div class="wrapper-top">
          <button class="btn-one btn">Книги</button>
          <button class="btn-two btn">Рукописи</button>
          <button class="btn-three btn">Все</button>
        </div>

        <div class="wrapper-content">
            <router-link :to="`/books/${book.id}`" class="book-items" v-for="book, idx in getBooks" :key="idx">
                <img :src="require('@/assets/Items/Collection/Books/' + book.img)" alt="">
                <div class="book-title">
                    <span>{{book.date}}</span>
                    <span class="dot"></span>
                    <p>{{book.title}}</p>
                </div>

                <h2>{{book.name}}</h2>
                <span>{{book.descript}}</span>
            </router-link>  
        </div>
        <button>Ещё...</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "museum-books",
  computed: {
    getBooksHeader() {
      let books =
        this.$store?.getters &&
        this.$store.getters?.getBooks &&
        this.$store.getters.getBooks;
      let header;

      books.forEach((element) => {
        if (element.id == 1) {
          header = element;
        }
      });
      return header;
    },
    getBooks(){
        let books =
        this.$store?.getters &&
        this.$store.getters?.getBooks &&
        this.$store.getters.getBooks;
        let book
        books.forEach(element=>{
            if(element.id == 2){
                book = element.books
            }
        })
        return book
    }
  },
};
</script>
