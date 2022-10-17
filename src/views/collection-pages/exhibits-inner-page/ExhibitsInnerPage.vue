<template>
    <div class="exhibit-inner-container">
        <div class="exhibit-inner-content">
            <div class="inner-header">
                <h1>{{getInnerHeader.title}}</h1>
                <img :src="require('@/assets/Items/Collection/Exhibits/' + getInnerHeader.img)" alt="">
            </div>

            <div class="inner-wrapper">
                <img :src="require('@/assets/Items/Collection/Exhibits/InnerPage/' + getItems.img)" alt="" class="title-img">
                <div class="inner-title">
                    <p>{{getItems.title}}</p>
                    <h2>{{getItems.name}}</h2>
                </div>

                <div class="inner-descript">
                    <p>{{getItems.title}}</p>
                    <p>{{getItems.title}}</p>
                </div>

                <h1>{{getItems.name}}</h1>

                <div class="inner-bottom">
                    <img :src="require('@/assets/Items/Collection/Exhibits/' + getInnerHeader.img)" alt="">
                    <div class="bottom-right">
                        <p>{{getItems.title}}</p>
                        <img :src="require('@/assets/Items/Collection/Exhibits/InnerPage/' + getItems.img)" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checkId: this.$route.path
        }
    },
    computed:{
        getCheckId(){
            let id = this.checkId.split('/')
            return id[2]
        },
        getInnerHeader(){
            let inner = this.$store?.getters && this.$store.getters?.getExhibits && this.$store.getters.getExhibits
            let item

            inner.forEach(element => {
                if(element.id == 2){
                    element.exhibits.forEach(elem =>{
                        if(elem.id == this.getCheckId){
                            item = elem
                        }
                    })
                }
            });
            return item
        },
        getItems(){
            let items = this.$store?.getters && this.$store.getters?.getExhibitItems && this.$store.getters.getExhibitItems
            let item
            items.forEach(element=>{
                item = element
            })

            return item
        }
    }
}
</script>