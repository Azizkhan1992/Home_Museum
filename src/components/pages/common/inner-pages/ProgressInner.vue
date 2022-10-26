<template>
    <div class="inner-container">
        <div v-for="header, idx in tabHeaders" :key="idx" :class="header.active ? 'header-active' : 'header-deactive'">
            <button @click="setActiveTab(header.value, idx)" :class="header.active ? 'default-active' : 'default-deactive'">
                {{header.title}}
            </button>
        </div>
        <div class="bg" :style="{'left': `${2.5 + leftValue*20}%`, transition: 'all 0.5s ease-in'}"></div>
    </div>
</template>
<script>
export default {
    props: {
        headers: {
            type: Array,
            default: () =>[]
        }
    },
    data(){
        return{
            tabHeaders: [],
            leftValue: 0
        }
    },
    mounted(){
        this.initHeaders()
    },
    methods: {
        initHeaders(){
            this.tabHeaders = this.headers.map((item) => {
                item.active = !!item.active
                return item
            })
        },
        setActiveTab(val, e){
            this.tabHeaders = this.tabHeaders.map((item) => {
                item.active = false
                this.leftValue = e

                if(item.value === val){
                    item.active = true
                }
                return item
            })
            // console.log(this.tabHeaders)
        }
    }
}
</script>
<style lang="scss">
.inner-container{
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    background: #d9d9d9;
    border-radius: 20px;
    align-items: center;
    justify-content: space-around;
    position: relative;

    .bg{
        width: 15%;
        height: 75%;
        position: absolute;
        background: linear-gradient(180deg, #A56935 0%, #6F5539 100%);
        border-radius: 12px;
        z-index: 1;
    }

    .header-active{
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;
        z-index: 10;

        button{
            width: 100%;
            height: 75%;
            border: 0;
            padding: 0;
            font-size: 1.5rem;
            line-height: 30px;
            font-weight: 700;
            color: #fff;
            cursor: pointer;
            background: transparent;
        }

    }
    .header-deactive{
        width: 15%;
        height: 100%;
        display: flex;
        align-items: center;

        button{
            width: 100%;
            height: 75%;
            border: 0;
            padding: 0;
            font-size: 1.5rem;
            line-height: 30px;
            font-weight: 700;
            background: linear-gradient(180deg, #A56935 0%, #6F5539 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            cursor: pointer;
        }
    }
}
</style>