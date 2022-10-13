<template>
  <div class="person-docs-container">
    <div class="person-docs-content">
      <div class="person-docs-header">
        <h1>{{ getDocsHeader.title }}</h1>
        <img
          :src="
            require('@/assets/Items/About/AboutDocuments/' + getDocsHeader.img)
          "
          alt=""
        />
      </div>

      <div class="person-docs-wrapper">
        <div
          class="person-docs-items"
          v-for="(doc, idx) in list"
          :key="idx"
        >
          <div class="items-top">
            <img src="@/assets/Items/About/AboutDocuments/Vector.png" alt="" />
            <h3>{{ doc.docName }}</h3>
          </div>
          <div class="items-bottom">
            <div class="items-date items">
              <img
                src="@/assets/Items/About/AboutDocuments/Vector1.png"
                alt=""
              />
              <span>{{ doc.date }}</span>
            </div>

            <div class="items-downloaded items">
              <img
                src="@/assets/Items/About/AboutDocuments/Vector2.png"
                alt=""
              />
              <span>скачено {{ doc.downloaded }}</span>
            </div>

            <div class="item-download">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.003 10.1753C16.003 9.76106 15.6672 9.42528 15.253 9.42528C14.8388 9.42528 14.503 9.76106 14.503 10.1753H16.003ZM1.78125 10.1753C1.78125 9.76106 1.44546 9.42528 1.03125 9.42528C0.617036 9.42528 0.28125 9.76106 0.28125 10.1753H1.78125ZM13.0519 7.36085C13.3448 7.06795 13.3448 6.59308 13.0519 6.30019C12.759 6.00729 12.2841 6.00729 11.9912 6.30019L13.0519 7.36085ZM8.16877 11.1833L7.63844 11.7136C7.93134 12.0065 8.40621 12.0065 8.6991 11.7136L8.16877 11.1833ZM4.34634 6.30019C4.05345 6.00729 3.57858 6.00729 3.28568 6.30019C2.99279 6.59308 2.99279 7.06795 3.28568 7.36085L4.34634 6.30019ZM8.91877 1.04004C8.91877 0.625825 8.58299 0.290039 8.16877 0.290039C7.75456 0.290039 7.41877 0.625825 7.41877 1.04004H8.91877ZM7.41877 11.1703C7.41877 11.5845 7.75456 11.9203 8.16877 11.9203C8.58299 11.9203 8.91877 11.5845 8.91877 11.1703H7.41877ZM14.503 10.1753V12.4968H16.003V10.1753H14.503ZM14.503 12.4968C14.503 13.3451 13.8155 14.0325 12.9673 14.0325V15.5325C14.6439 15.5325 16.003 14.1735 16.003 12.4968H14.503ZM12.9673 14.0325H3.31696V15.5325H12.9673V14.0325ZM3.31696 14.0325C2.4687 14.0325 1.78125 13.3451 1.78125 12.4968H0.28125C0.28125 14.1735 1.64027 15.5325 3.31696 15.5325V14.0325ZM1.78125 12.4968V10.1753H0.28125V12.4968H1.78125ZM11.9912 6.30019L7.63844 10.6529L8.6991 11.7136L13.0519 7.36085L11.9912 6.30019ZM8.6991 10.6529L4.34634 6.30019L3.28568 7.36085L7.63844 11.7136L8.6991 10.6529ZM7.41877 1.04004V11.1703H8.91877V1.04004H7.41877Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <app-pagination
      :data="getPersonDocs"
      :limit="9"
      @paginate="paginateDocs"
      />
    </div>
  </div>
</template>
<script>
import AppPagination from '@/components/pages/common/AppPagination.vue'
export default {
  name: "person-documents",
  components: {AppPagination},
  data(){
    return{
        list: []
    }
  },
  mounted(){
    this.getDocs()
  },
  computed: {
    getDocsHeader() {
      let docs =
        this.$store?.getters && this.$store.getters?.getPersonDocuments;

      let doc;

      docs.forEach((element) => {
        if (element.id == 1) {
          doc = element;
        }
      });
      return doc;
    },
    getPersonDocs() {
      let docs =
        this.$store?.getters &&
        this.$store.getters?.getPersonDocuments &&
        this.$store.getters.getPersonDocuments;
      let doc;
      docs.forEach((element) => {
        if (element.id == 2) {
          doc = element.documents;
        }
      });
      return doc;
    },
  },
  methods:{
    getDocs(){
        this.list = this.getPersonDocs.slice(0,9)
    },
    paginateDocs(data){
        this.list = data
    }
  }
};
</script>
