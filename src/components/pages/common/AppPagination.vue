<template>
  <div class="pagination-container">
    <div class="pagination-content">
      <div class="pagination-left">
        <button class="prev" @click="prevPage">Предыдущая страница</button>
        <button class="next" @click="nextPage">cледующая страница</button>
      </div>
      <div class="pagination-right">
        <span>Страница</span>
            <input type="text" :value="pageNumber" />
            <span>из {{currentPages}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app-pagination',
  props:{
    data:{
        type: Array,
        default: () => []
    },
    limit: {
        type: [Number, String],
        default: 8
    }
  },
  data(){
    return{
        pageNumber: 1
    }
  },
  computed:{
    currentPages(){
        let currentRequestPages;
        if(this.data){
            let x= this.data.length;
            let y = this.limit
            currentRequestPages = Math.ceil(x/y)
        }
        return currentRequestPages
    }
  },
  methods:{
    prevPage(){
        if(this.pageNumber>1){
            this.pageNumber--
        }
    },
    nextPage(){
        if(this.pageNumber<this.currentPages){
            this.pageNumber++
        }
    },

    paginationData(){
        let pagination;
        if(this.data){
            const start = (this.pageNumber-1) * this.limit,
            end = start + this.limit
            pagination = this.data.slice(start, end)
            // console.log(start, end)

            return this.$emit('paginate', pagination)
        }

        return []
    }
  },

  watch:{
    pageNumber(){
        this.paginationData()
    }
  }
}
</script>

<style lang="scss">
.pagination-container {
  width: 100%;
  height: 100px;
  margin-top: 75px;
  margin-bottom: 25px;

  .pagination-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .pagination-left {
      width: 49%;
      height: 75px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      button {
        width: 310px;
        height: 100%;
        border-radius: 25px;
        cursor: pointer;
        font-size: 1.25rem;
        line-height: 26px;
        font-weight: 700;
        border: 2px solid #a98855;
        background: linear-gradient(180deg, #8f7f6f 0%, #a98855 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        &:hover {
          background: linear-gradient(180deg, #8f7f6f 0%, #a98855 100%);
          color: #fff;
          border: none;
          -webkit-text-fill-color: #fff;
          transition: all 0.5s ease-in;
        }
      }
    }

    .pagination-right {
      width: 35%;
      height: 75px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      input{
        width: 90px;
        height: 100%;
        border-radius: 25px;
        border: 2px solid #a98855;
        margin: 0 20px;
        padding: 10px 20px;
        box-sizing: border-box;
        font-size: 1.5rem;
        line-height: 30px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.5);

        &:hover{
            border: 2px solid #000;
        }

        &:focus{
            outline: none;
            border: 2px solid #a98855;
        }
      }

      span{
        font-size: 1.5rem;
        line-height: 30px;
        font-weight: 400;
        color: #000;
      }
    }
  }
}
</style>
