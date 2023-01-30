<template>
    <div class="bank-cards-container">
        <div class="bank-cards-content">
            <div class="bank-cards-header">
                <h1>{{getCardsHeader.title}}</h1>
                <img :src="require('@/assets/Items/Service/BankCards/' + getCardsHeader.img)" alt="">
            </div>

            <div class="bank-cards-progress">
                <div class="bank-cards-bg"></div>
                <progress-bar :progress-items="getProgressItems" :is-header="false"/>
                
            </div>
        </div>
    </div>
</template>
<script>
import ProgressBar from '@/components/pages/common/ProgressBar.vue'
export default {
    name: 'bank-cards',
    components: {ProgressBar},
    computed: {
        getCardsHeader(){
            let items = this.$store?.getters && this.$store.getters?.getCards && this.$store.getters.getCards
            let header
            items.forEach(element => {
                if(element.id == 1){
                    header = element
                }
            });
            return header
        },
        getProgressItems(){
            let items = this.$store?.getters && this.$store.getters?.getCards && this.$store.getters.getCards
            let item
            items.forEach(element => {
                if(element.id == 2){
                    item = element.cards
                }
            })
            return item
        }
    }
}
</script>