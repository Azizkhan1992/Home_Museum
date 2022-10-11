<template>
    <div class="person-two-container">
        <div class="person-two-content">
            <div class="person-two-top">
                <img :src="require('@/assets/Items/About/AboutPerson/' + getAboutPerson.content_img1)" alt="" class="img-top">
                <img :src="require('@/assets/Items/About/AboutPerson/' + getAboutPerson.content_img2)" alt="" class="images">
                <img :src="require('@/assets/Items/About/AboutPerson/' + getAboutPerson.content_img3)" alt="" class="images">
            </div>
            <div class="person-two-bottom">
                <div class="person-bg-one bg"></div>
                <div class="person-bg-two bg"></div>
                <p>{{getAboutPerson.content_title1}}</p>
                <p>{{getAboutPerson.content_title2}}</p>
                <p>{{getAboutPerson.content_title3}}</p>
                <p>{{getAboutPerson.content_title4}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'about-person-two',
    computed:{
        getAboutPerson(){
            let persons = this.$store?.getters && this.$store.getters?.getAboutPerson && this.$store.getters.getAboutPerson
            let person

            persons.forEach(element => {
                if(element.id == 3){
                    person = element
                }
            });
            return person
        }
    }
}
</script>