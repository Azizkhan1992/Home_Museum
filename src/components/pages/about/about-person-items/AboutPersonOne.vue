<template>
    <div class="person-one-container">
        <div class="person-one-content">
            <div class="person-one-top">
                <img :src="require('@/assets/Items/About/AboutPerson/' + getAboutPersonOne.content_img1)" alt="">
                <p>{{getAboutPersonOne.content_title1}}</p>
                <p>{{getAboutPersonOne.content_title2}}</p>
            </div>
            <div class="person-one-bottom">
                <img :src="require('@/assets/Items/About/AboutPerson/' + getAboutPersonOne.content_img2)" alt="" class="images">
                <img :src="require('@/assets/Items/About/AboutPerson/' + getAboutPersonOne.content_img3)" alt="" class="images">
                <img :src="require('@/assets/Items/About/AboutPerson/' + getAboutPersonOne.content_img4)" alt="" class="image-bottom">
                <p>{{getAboutPersonOne.content_title3}}</p>
                <p>{{getAboutPersonOne.content_title4}}</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'person-one',
    computed:{
        getAboutPersonOne(){
            let persons = this.$store?.getters && this.$store.getters?.getAboutPerson && this.$store.getters.getAboutPerson
            let person;
            // console.log(persons)

            persons.forEach(element => {
                if(element.id == 2){
                    person = element
                }
            });

            return person
        }
    }
}
</script>