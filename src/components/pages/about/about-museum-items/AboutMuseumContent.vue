<template>
    <div class="about-museum-content">
        <div class="about-museum-wrapper">
            <div class="content-header">
                <img :src="require('@/assets/Items/About/AboutMuseum/' + getContentItems.headerImage)" alt="">
            </div>
            <div class="content-one items">
                <div class="content-one-bg"></div>
                <p>{{getContentItems.title1}}</p>
                <img :src="require('@/assets/Items/About/AboutMuseum/' + getContentItems.img1)" alt="">
            </div>
            <div class="content-two items">
                <div class="content-two-bg"></div>
                <p>{{getContentItems.title2}}</p>
                <img :src="require('@/assets/Items/About/AboutMuseum/' + getContentItems.img2)" alt="">
            </div>
            <div class="content-three items">
                <div class="content-three-bg"></div>
                <p>{{getContentItems.title3}}</p>
                <img :src="require('@/assets/Items/About/AboutMuseum/' + getContentItems.img3)" alt="">
            </div>
            <div class="content-four items">
                <div class="content-four-bg"></div>
                <p>{{getContentItems.title4}}</p>
                <img :src="require('@/assets/Items/About/AboutMuseum/' + getContentItems.img4)" alt="">
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'about-museum-content',
    computed:{
        getContentItems(){
            let items = this.$store?.getters && this.$store.getters?.getAboutMuseum && this.$store.getters.getAboutMuseum
            let item
            items.forEach(element => {
                if(element.id == 2){
                    item = element
                }
            });
            return item
        }
    }
}
</script>