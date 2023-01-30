<template>
    <div class="tools-container">
        <div class="tools-content">
            <div class="tools-header">
                <h1>{{getToolsHeader.title}}</h1>
                <img :src="require('@/assets/Items/Collection/Tools/' + getToolsHeader.img)" alt="">
            </div>

            <div class="tools-wrapper">
                <router-link :to="`/tools/${tool.id}`" class="tool-items" v-for="tool, idx in list" :key="idx">
                    <div class="tool-item-left">
                        <h1>{{tool.name}}</h1>
                        <p>{{tool.descript | filteredDesc}}</p>
                        <div class="tool-seen">
                            <img src="@/assets/Items/Collection/Tools/Group.png" alt="">
                            <span>посмотрели {{tool.seen}}</span>
                        </div>

                        <button>Подробнее</button>
                    </div>
                    <div class="tool-right-img">
                        <img :src="require('@/assets/Items/Collection/Tools/' + tool.img)" alt="">
                    </div>
                </router-link>
            </div>

            <app-pagination
            :data="getTools"
            :limit="5"
            @paginate="paginateData"
            />

        </div>
    </div>
</template>
<script>
import AppPagination from '@/components/pages/common/AppPagination.vue'
export default {
    name: 'museum-tools',
    components: {AppPagination},
    data(){
        return{
            list: []
        }
    },
    mounted(){
        this.getData()
    },
    computed: {
        getToolsHeader(){
            let tools = this.$store?.getters && this.$store.getters?.getTools && this.$store.getters.getTools
            let tool
            tools.forEach(element => {
                if(element.id == 1){
                    tool = element
                }
            });
            return tool
        },
        getTools(){
            let tools = this.$store?.getters && this.$store.getters?.getTools && this.$store.getters.getTools
            let tool
            tools.forEach(element=>{
                if(element.id == 2){
                    tool = element.tools
                }
            })
            return tool
        }
    },
    methods: {
        getData(){
            this.list = this.getTools.slice(0, 5)
        },
        paginateData(val){
            this.list = val
        }
    },
    filters: {
        filteredDesc(val){
            let descript = val.slice(0, 304) + ' ...'
            return descript
        }
    }
}
</script>