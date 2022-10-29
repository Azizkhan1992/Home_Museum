<template>
    <div class="news-container">
        <div class="news-content">
            <div class="news-header">
                <h1>{{getNewsHeader.title}}</h1>
                <img :src="require('@/assets/Items/Events/News/' + getNewsHeader.img)" alt="">
            </div>

            <div class="news-wrapper">
                <div class="news-wrapper-bg"></div>
                <div class="news-left">
                    <router-link :to="`/news/${item.id}`" class="news-items" v-for="item, idx in list" :key="idx">
                        <img :src="require('@/assets/Items/Events/News/' + item.img)" alt="">
                        <div class="item-wrapper">
                            <p>{{item.name}}</p>
                            <h2>{{item.title}}</h2>
                            <div class="item-bottom">
                                <div class="left">
                                    <div class="item-date">
                                        <img src="@/assets/Items/Events/News/Vector.png" alt="">
                                        <span>{{item.date}}</span>
                                    </div>
                                    <div class="item-seen">
                                        <img src="@/assets/Items/Events/News/Group.png" alt="">
                                        <span>посмотрели {{item.seen}}</span>
                                    </div>
                                </div>
                                <div class="right">
                                    <link-items/>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div class="news-right">
                    <div class="right-top">
                        <router-link to="#">все</router-link>
                        <router-link to="#">Стихи</router-link>
                        <router-link to="#">Мероприятия</router-link>
                        <router-link to="#">Литература</router-link>
                        <router-link to="#">День Ойбека</router-link>
                    </div>
                    <div class="right-center">
                        <month-page/>
                        <year-page/>
                    </div>
                    <button>Оставить контакты для рассылки</button>
                </div>
            </div>

            <app-pagination
            :data="getNewsItems"
            :limit="4"
            @paginate="paginateItems"
            />

        </div>
    </div>
</template>
<script>
import YearPage from '@/components/pages/common/YearPage.vue'
import MonthPage from '@/components/pages/common/MonthPage.vue'
import AppPagination from '@/components/pages/common/AppPagination.vue'
import LinkItems from '@/components/pages/common/LinkItems.vue'
export default {
    name: 'museum-news',
    components: {YearPage, MonthPage, AppPagination, LinkItems},
    data(){
        return{
            list: []
        }
    },
    mounted(){
        this.getList()
    },
    computed:{
        getNewsHeader(){
            let news = this.$store?.getters && this.$store.getters?.getNews && this.$store.getters.getNews
            let header
            news.forEach(element => {
                if(element.id == 1){
                    header = element
                }
            });
            return header
        },

        getNewsItems(){
            let news = this.$store?.getters && this.$store.getters?.getNews && this.$store.getters.getNews
            let item
            news.forEach(element=>{
                if(element.id == 2){
                    item = element.news
                }
            })
            return item
        }
    },
    methods:{
        getList(){
            this.list = this.getNewsItems.slice(0, 4)
        },
        paginateItems(val){
            this.list = val
        }
    }
}
</script>