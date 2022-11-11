<template>
    <div class="progress-container">
        <progress-inner :headers="progressItems" v-slot="slotProps">
        <div v-for="item in progressItems" :key="item.id">
            <div class="active-card" v-if="slotProps.active == item.value">
                <div class="card-items"  v-for="card, idy in list" :key="idy">
                    <img :src="require('@/assets/Items/Service/BankCards/' + card.img)" alt="">
                    <div class="card-right">
                        <h2>{{card.title}}</h2>
                        <p>{{card.descript}}</p>
                        <router-link :to="`/bank-cards/${card.id}`" class="active-btn">Подробнее</router-link>
                    </div>
                </div>
            </div>
        </div>
        </progress-inner>
        <app-pagination
        v-if="!isHeader"
        :data="ActiveList"
        :limit="4"
        @paginate="paginatedList"
        />
    </div>
</template>
<script>
import ProgressInner from '@/components/pages/common/inner-pages/ProgressInner.vue'
import AppPagination from './AppPagination.vue';
export default {
    name: 'progress-bar',
    components: {ProgressInner, AppPagination},
    props: {
        progressItems: {
            type: Array,
            default: () => []
        },
        isHeader: {
            type: Boolean,
            default: false
        } 
    },
    data(){
        return {
            list: [],
            Items: [],
            ActiveList: []
        }
    },
    mounted(){
        this.initProgressItems()
        this.getListDefault();
        this.getList()
    },
    computed:{
        getActiveValue(){
            return this.$store?.getters && this.$store.getters?.getActiveTab && this.$store.getters.getActiveTab.active
        }
    },
    methods:{
        initProgressItems(){
            this.Items = this.progressItems
        },
        getListDefault(){
            this.Items.forEach(element => {
                if(element.active === true){
                    this.ActiveList = element.cards
                }
            })
        },
        getList(){
            this.list = this.ActiveList.slice(0,4)
        },
        paginatedList(val){
            this.list = val
        }
    },
    watch: {
        'getActiveValue' : function(){
            this.getListDefault()
        }
    }
}
</script>
<style scoped lang="scss">
.progress-container{
    width: 100%;
    height: auto;

    .active-card{
        width: 100%;
        height: auto;
        margin-top: 80px;
        display: flex;
        flex-direction: column;

        .card-items{
            width: 100%;
            height: 350px;
            display: flex;
            flex-direction: row;
            align-items: center;
            border-bottom: 2px solid rgba(0, 0, 0, 0.3);
            z-index: 10;

            img{
                object-fit: cover;
            }

            &:last-child{
                border-bottom: 0;
            }

            .card-right{
                width: 65%;
                height: 90%;
                margin-left: 20px;
                display: flex;
                flex-direction: column;

                h2{
                    font-size: 1.85rem;
                    line-height: 40px;
                    font-weight: 700;
                    letter-spacing: 0.025em;
                    width: 65%;
                    background: linear-gradient(180deg, #A56935 0%, #6F5539 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                p{
                    font-size: 1.25rem;
                    line-height: 26px;
                    font-weight: 500;
                    color: rgba(0, 0, 0, 0.5);
                    width: 75%;
                    margin: 0;
                }

                .active-btn{
                    width: 250px;
                    height: 50px;
                    margin-top: 50px;
                    border-radius: 12px;
                    text-decoration: none;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid #A56935;
                    font-size: 1.25rem;
                    line-height: 26px;
                    font-weight: 700;
                    letter-spacing: 0.025em;
                    background: linear-gradient(180deg, #A56935 0%, #6F5539 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    cursor: pointer;

                    &:hover{
                        background: #A56935;
                        -webkit-text-fill-color: #fff;
                        border: 0;
                    }
                }
            }
        }
    }
}

@media screen and (min-width: 1160px) and (max-width: 1440px) {
    .progress-container .active-card .card-items[data-v-601aa3c6]{

        img{
            width: 40%;
        }

        .card-right{

            h2{
                font-size: 1.5rem;
                line-height: 30px;
            }

            p{
                font-size: 1.15rem;
            }
        }
    }
}

@media screen and (min-width: 320px) and (max-width: 540px) {
    .progress-container .active-card[data-v-601aa3c6]{
        margin-top: 50px;
        row-gap: 20px;

        .card-items{
            height: 520px;
            flex-direction: column;

            img{
                width: 100%;
            }

            .card-right{
                width: 100%;
                margin-left: 0;
                

                h2{
                    font-size: 1.15rem;
                    line-height: 25px;
                }

                p{
                    font-size: 1rem;
                    line-height: 20px;
                }
                a{
                    width: 100%;
                    padding: 0;
                }
            }
        }
    }
}

@media screen and (min-width: 900px) and (max-width: 1160px) {
    .progress-container .active-card .card-items .card-right h2{
        font-size: 1.5rem;
        line-height: 30px;
        margin-bottom: 5px;
    }
    .progress-container .active-card .card-items .card-right p{
        font-size: 1.15rem;
    }
    .progress-container .active-card .card-items .card-right .active-btn{
        margin-top: 20px;
    }
    .inner-container .inner-wrapper .bg{
        width: 15.5%;
    }
}
</style>