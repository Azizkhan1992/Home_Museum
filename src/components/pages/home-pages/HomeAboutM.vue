<template>
    <div class="about-con">
        <h1 class="m-title">{{ $t('about') }}</h1>
    </div>
</template>
<script>

export default{
    name: 'home-about',
    data(){
        return{
            about: this.$store.state.aboutMuseumItems,
            aboutItem: null
        }
    },
    mounted(){
        this.getAboutItem()
    },
    methods: {
        getAboutItem(){
            this.aboutItem = this.about[1]
            console.log(this.aboutItem)
        }   
    }
}
</script>
<style lang="scss">
.about-con{
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin-top: 64px;
    align-items: center;

    h1{
        font-size: 3rem;
        line-height: 64px;
    }
}
</style>