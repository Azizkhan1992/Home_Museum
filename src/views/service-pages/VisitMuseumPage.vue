<template>
    <div class="visit-museum-container">
        <div class="visit-museum-content">
            <div class="visit-museum-header">
                <h1>{{getVisitMuseum.header}}</h1>
            </div>

            <div class="visit-museum-wrapper">
                <div class="visit-museum-bg"></div>
                <button>Запланировать визит</button>
                <p>Директор музея : {{getVisitMuseum.directorMuseum}}</p>
                <p>Вопросы и предложения вы можете направить на почту: {{getVisitMuseum.mail}}</p>
                <p>Контакты по организации мероприятий: {{getVisitMuseum.phone}}</p>
                <p>Организация экскурсий: {{getVisitMuseum.phone}}</p>
                <p>Контакты для СМИ: {{getVisitMuseum.contact}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'visit-museum',
    computed: {
        getVisitMuseum() {
            let items = this.$store?.getters && this.$store.getters?.getVisit && this.$store.getters.getVisit

            return items
        }
    }
}
</script>