<template>
    <div class="person-top-container">
        <div class="person-top-content">
            <h1>{{getAboutPerson.topHeader}}</h1>
            <img :src="require('@/assets/Items/About/AboutPerson/' + getAboutPerson.topImage)" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'about-person-top',
    computed:{
        getAboutPerson(){
            let persons = this.$store?.getters && this.$store.getters?.getAboutPerson && this.$store.getters.getAboutPerson
            let person;

            persons.forEach(element => {
                if(element.id == 1){
                    person = element
                }
            });

            return person
        }
    }
}
</script>