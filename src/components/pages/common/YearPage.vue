<template>
    <div class="year-container">
        <div class="year-visible" @click="isYear = !isYear">
            <p>{{year}}</p>
            <img src="@/assets/Items/Vector2.svg" alt="" :class="{'img-active' : isYear}" />
        </div>

        <div class="year-hidden" :class="isYear? 'active' : 'deactive'">
            <div class="year-items" v-for="year, idx in years" :key="idx">
                <span>{{year}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'museum-year',
    data(){
        return{
            isYear: false,
            year: new Date().getFullYear(),
            years: []
        }
    },
    mounted(){
        this.getYears()
    },
    methods:{
        getYears(){
            let year = new Date().getFullYear()
            for(let i=year-20; i<=year; i++){
                this.years.push(i)
            }
        }
    }
}
</script>
<style scoped lang="scss">
.year-container{
    width: 45%;
    height: 48px;
    background: #fff;
    border-radius: 10px;
    position: relative;

    .year-visible{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        img{
            transition: transform 0.5s ease-out;

            &.img-active{
                transform: rotate(180deg);
                transition: transform 0.5s ease-in;
            }
        }

        p{
            font-size: 1rem;
            font-weight: 500;
            line-height: 20px;
            width: 25%;
            margin-right: 10px;
        }
    }

    .year-hidden{
        width: 100%;
        height: 0;
        background: #fff;
        border-radius: 10px;
        position: absolute;
        top: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        transition: height 0.5s ease-out;
        

        &.deactive{
            overflow: hidden;
        }

        &.active{
            height: 200px;
            overflow-y: scroll;
            transition: height 0.5s ease-in;
            padding: 10px 0;
            box-sizing: border-box;
        }

        .year-items{
            width: 100%;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            span{
                font-size: 1rem;
            font-weight: 500;
            line-height: 20px;
            width: 25%;
            }
        }
    }
}
</style>