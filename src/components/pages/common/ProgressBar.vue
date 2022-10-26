<template>
    <div class="progress-container">
        <progress-inner :headers="progressItems">
        
        </progress-inner>
    </div>
</template>
<script>
import ProgressInner from '@/components/pages/common/inner-pages/ProgressInner.vue'
export default {
    name: 'progress-bar',
    components: {ProgressInner},
    props: {
        progressItems: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style scoped lang="scss">
.progress-container{
    width: 100%;
    height: auto;
}
</style>