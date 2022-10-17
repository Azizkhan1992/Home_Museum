<template>
    <div class="news-inner-container">
        <div class="news-inner-content">
            <div class="news-inner-header">
                <h1>{{getHeader}}</h1>
            </div>

            <div class="news-inner-wrapper">
                <div class="wrapper-top">
                    <div class="top-left">
                        <link-items :share-active="true"/>
                    </div>

                    <div class="top-right">
                        <div class="item-date">
                            <img src="@/assets/Items/Events/News/InnerPage/Vector.png" alt="">
                            <p>{{getContentItems.date}}</p>
                        </div>
                        <div class="item-seen">
                            <img src="@/assets/Items/Events/News/InnerPage/Group.png" alt="">
                            <p>посмотрели {{getContentItems.seen}}</p>
                        </div>
                    </div>
                </div>

                <div class="wrapper-title-content">
                    <img :src="require('@/assets/Items/Events/News/InnerPage/' + getContentItems.img)" alt="">

                    <p>{{getContentItems.descript_one}}</p>
                    <p>{{getContentItems.descript_two}}</p>
                </div>

                <div class="wrapper-modal">
                    <div class="modal-visible">
                        <iframe src="https://www.youtube.com/embed/ehPma0dim2I" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                </div>

                <div class="wrapper-bottom">
                    <img :src="require('@/assets/Items/Events/News/InnerPage/' + img)" alt="" v-for="img, idx in getContentItems.images" :key="idx">
                    <img :src="require('@/assets/Items/Events/News/InnerPage/' + img)" alt="" v-for="img, idy in getContentItems.images" :key="idy+3">
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
        return {
            newsId: this.$route.path
        }
    },
    computed: {
        getNewsId(){
            let id = this.newsId.split('/')
            return id[2]
        },
        getHeader(){
            let items = this.$store?.getters && this.$store.getters?.getNewsPage && this.$store.getters.getNewsPage
            let header
            items.forEach(element => {
                if(element.id == this.getNewsId){
                    element.items.forEach(elem =>{
                        if(elem.id == 1){
                            header = elem.title
                        }
                    })
                }
            });
            return header
        },
        getContentItems(){
            let items = this.$store?.getters && this.$store.getters?.getNewsPage && this.$store.getters.getNewsPage
            let item
            items.forEach(element=>{
                if(element.id == this.getNewsId){
                    element.items.forEach(elem=>{
                        if(elem.id == 2){
                            item = elem
                        }
                    })
                }
            })
            return item
        }
    }
}   
</script>