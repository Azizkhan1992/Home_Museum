<template>
    <div class="videos-container">
        <div class="videos-content">
            <div class="videos-header">
                <h1>{{getVideosHeader.title}}</h1>
                <img :src="require('@/assets/Items/Gallery/Videos/' + getVideosHeader.img)" alt="">
            </div>

            <div class="videos-wrapper">
                <div class="videos-bg"></div>
                <div class="wrapper-left">
                    <div class="left-items" v-for="item, idx in list" :key="idx">
                        <div class="items">
                            <div class="item-img">
                                <img :src="require('@/assets/Items/Gallery/Videos/' + item.img)" alt="">
                                <div class="item-shadow">
                                    <img src="@/assets/Items/Gallery/Videos/img3.png" alt="">
                                </div>
                            </div>
                            <div class="item-title">
                                <p>{{item.title}}</p>
                                <h1>{{item.name}}</h1>

                                <div class="title-items">
                                    <div class="title-left">
                                        <div class="item-date">
                                            <img src="@/assets/Items/Common/Items/Vector.svg" alt="">
                                            <span>{{item.date}}</span>
                                        </div>
                                        <div class="item-seen">
                                            <img src="@/assets/Items/Common/Items/img1.svg" alt="">
                                            <span>посмотрели {{item.seen}}</span>
                                        </div>
                                    </div>

                                    <div class="title-right">
                                        <link-items/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="wrapper-right">
                    <div class="right-top">
                        <button>все</button>
                        <button>Стихи</button>
                        <button>Мероприятия</button>
                        <button>Литература</button>
                        <button>День Ойбека</button>
                    </div>

                    <!-- Gorizontall Items Start 1 -->
                    <div class="horizontall-right-top">
                        <button>все</button>
                        <button>Литература</button>
                        <button>Стихи</button>
                        <button>День Ойбека</button>
                        <button>Мероприятия</button>
                    </div>
                    <!-- Gorizontall Items End 1 -->

                    <div class="right-bottom">
                        <month-page/>
                        <year-page/>
                    </div>
                </div>
            </div>

            <app-pagination
            :data="getVideos"
            :limit="6"
            @paginate="paginatedVideos"
            />


        </div>
    </div>
</template>
<script>
import LinkItems from '@/components/pages/common/LinkItems.vue'
import MonthPage from '@/components/pages/common/MonthPage.vue'
import YearPage from '@/components/pages/common/YearPage.vue'
import AppPagination from '@/components/pages/common/AppPagination.vue'
export default {
    name: 'museum-videos',
    components: {LinkItems, MonthPage, YearPage, AppPagination},
    data(){
        return {
            list: []
        }
    },
    mounted(){
        this.getData()
    },
    computed:{
        getVideosHeader(){
            let videos = this.$store?.getters && this.$store.getters?.getVideos && this.$store.getters.getVideos
            let header
            videos.forEach(element => {
                if(element.id == 1){
                    header = element
                }
            });
            return header
        },
        getVideos(){
            let videos = this.$store?.getters && this.$store.getters?.getVideos && this.$store.getters.getVideos
            let video
            videos.forEach(element => {
                if(element.id == 2){
                    video = element.videos
                }
            })
            return video
        }
    },
    methods: {
        getData(){
            this.list = this.getVideos.slice(0, 6)
        },
        paginatedVideos(val){
            this.list = val
        }
    }
}
</script>