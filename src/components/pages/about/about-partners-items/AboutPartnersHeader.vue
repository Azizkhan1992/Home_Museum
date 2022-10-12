<template>
    <div class="partners-header-container">
        <div class="partners-header-content">
            <h1>{{getPartnerItems.name}}</h1>
            <img :src="require('@/assets/Items/About/AboutPartners/' + getPartnerItems.img)" alt="">
        </div>
    </div>
</template>
<script>
export default {
    computed:{
        getPartnerItems(){
            let partner = this.$store?.getters && this.$store.getters?.getPartners && this.$store.getters.getPartners
            let item

            partner.forEach(element => {
                if(element.id == 1){
                    item = element
                }
            });
            return item
        }
    }
}
</script>