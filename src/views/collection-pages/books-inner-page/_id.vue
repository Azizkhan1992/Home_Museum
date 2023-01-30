<template>
    <div class="books-inner-container">
        <div class="books-inner-content">
            <div class="inner-page-header">
                <h1>Книга</h1>
                <img :src="require('@/assets/Items/Collection/Books/' + getBooks.img)" alt="">
            </div>

            <div class="inner-page-content">
                <div class="inner-page-bg"></div>
                <div class="inner-content-top">
                    <img :src="require('@/assets/Items/Collection/Books/' + getBooks.img)" alt="" class="top-img">

                    <div class="content-top-right">
                        <div class="top-right-header">
                            <div class="left">
                                <span>{{getBooks.date}}</span>
                                <span class="dot"></span>
                                <p>{{getBooks.title}}</p>
                            </div>

                            <div class="right">
                                <p>Поделиться:</p>
                                <link-items
                                :share-active="true"
                                />
                            </div>
                        </div>

                        <h1>{{getBooks.name}}</h1>
                        <p>Жанр: {{getBookItems.genre}}</p>
                        <span class="descript">{{getBookItems.descript | filteredDesc}}</span>
                    </div>
                </div>

                <div class="inner-content-bottom">
                    <p>Автор: <i>{{getBookItems.author}}</i></p>
                    <p>Переводы: <i>{{getBookItems.translated}}</i></p>
                    <p>Год: <i>{{getBookItems.year}}</i></p>
                    <p>Заглавие: <i>{{getBookItems.header}}</i></p>
                    <p>Жанр: <i>{{getBookItems.genre}}</i></p>
                    <p>Каталоги Книги: <i>{{getBookItems.catalog}}</i></p>
                    <p>Выходные данные Ташкент: {{getBookItems.outData}}</p>
                    <p>Дата поступления в ЭК: <i>{{getBookItems.inputDate}}</i></p>
                    <p>Физическое описание: <i>{{getBookItems.phisicalWrite}}</i></p>
                    <p>Сведения об ответственности: <i>{{getBookItems.liabilitiesData}}</i></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LinkItems from '@/components/pages/common/LinkItems.vue'
export default {
    components: {LinkItems},
    data(){
        return{
            checkId: this.$route.path
        }
    },
    computed:{
        getCheckedId(){
            let id = this.checkId.split('/')
            return id[2]
        },
        getBooks(){
            let books = this.$store?.getters && this.$store.getters?.getBooks && this.$store.getters.getBooks
            let book
            books.forEach(element => {
                if(element.id == 2){
                    element.books.forEach(elem=>{
                        if(elem.id == this.getCheckedId){
                            book = elem
                        }
                    })
                }
            });
            return book
        },
        getBookItems(){
            let items = this.$store?.getters && this.$store.getters?.getBookPage && this.$store.getters.getBookPage
            let item

            items.forEach(elem=>{
                item = elem
            })
            return item
        }
    },
    filters: {
        filteredDesc(val){
            let desc = val.slice(0, 842)+ ' ...'
            return desc
        }
    }
}
</script>