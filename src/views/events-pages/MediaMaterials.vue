<template>
    <div class="media-container">
        <div class="media-content">
            <div class="media-header">
                <h1>{{getMediaHeader.title}}</h1>
                <img :src="require('@/assets/Items/Events/Media/' + getMediaHeader.img)" alt="">
            </div>

            <div class="media-wrapper">
                <div class="wrapper-top">
                    <div class="item-one">
                        <div class="item-logo">
                            <img src="@/assets/Items/Events/Media/img1.svg" alt="">
                            <div class="logo-title">
                                <h2>tamara hanum</h2>
                            <p>uy muzeyi</p>
                            </div>
                        </div>

                        <div class="logo-items" v-for="item, idx in getMediaMaterials" :key="idx">
                            <div class="items">
                                <img src="@/assets/Items/Events/Media/img1.png" alt="">
                                <p>{{item}}</p>
                            </div>
                        </div>
                    </div>

                    <div class="item-two">
                        <div class="item-logo">
                            <img src="@/assets/Items/Events/Media/img1.svg" alt="">
                            <div class="logo-title">
                                <h2>tamara hanum</h2>
                            <p>uy muzeyi</p>
                            </div>
                        </div>

                        <div class="logo-items" v-for="item, idx in getMediaMaterials" :key="idx">
                            <div class="items">
                                <img src="@/assets/Items/Events/Media/img1.png" alt="">
                                <p>{{item}}</p>
                            </div>
                        </div>
                    </div>

                    <div class="item-three">
                        <div class="item-logo">
                            <img src="@/assets/Items/Events/Media/img1.svg" alt="">
                            <div class="logo-title">
                                <h2>tamara hanum</h2>
                            <p>uy muzeyi</p>
                            </div>
                        </div>

                        <div class="logo-items" v-for="item, idx in getMediaMaterials" :key="idx">
                            <div class="items">
                                <img src="@/assets/Items/Events/Media/img1.png" alt="">
                                <p>{{item}}</p>
                            </div>
                        </div>
                    </div>

                    <div class="item-four">
                        <div class="item-logo">
                            <img src="@/assets/Items/Events/Media/img1.svg" alt="">
                            <div class="logo-title">
                                <h2>tamara hanum</h2>
                            <p>uy muzeyi</p>
                            </div>
                        </div>

                        <div class="logo-items" v-for="item, idx in getMediaMaterials" :key="idx">
                            <div class="items">
                                <img src="@/assets/Items/Events/Media/img1.png" alt="">
                                <p>{{item}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button>Ещё...</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'media-materials',
    computed: {
        getMediaHeader(){
            let items = this.$store?.getters && this.$store.getters?.getMedia && this.$store.getters.getMedia
            let header
            items.forEach(element => {
                if(element.id == 1){
                    header = element
                }
            });
            return header
        },
        getMediaMaterials(){
            let materials = this.$store?.getters && this.$store.getters?.getMedia && this.$store.getters.getMedia
            let item
            materials.forEach(element=>{
                if(element.id == 2){
                    item = element.materials
                }
            })
            return item
        }
    }
}
</script>