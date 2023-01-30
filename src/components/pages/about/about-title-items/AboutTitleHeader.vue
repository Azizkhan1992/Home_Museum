<template>
    <div class="title-top-container">
        <div class="title-top-content">
            <h1>{{getAboutTitle.topHeader}}</h1>
        </div>
    </div>
</template>
<script>
export default {
    name: 'title-header',
    computed: {
        getAboutTitle(){
            let title = this.$store?.getters && this.$store.getters?.getAboutTitle && this.$store.getters.getAboutTitle
            let item

            title.forEach(element => {
                if(element.id == 1){
                    item = element
                }
            });
            return item
        }
    }
}
</script>