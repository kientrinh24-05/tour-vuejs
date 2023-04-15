<template>
  <div class="py-4 container-fluid">
    
    <div class=" row">
      <div class="col-12">
        <form-category 
          :show="showModal" 
          :category="editingCategory"
          :title="editingCategory ? 'Sửa thể loại' : 'Tạo mới thể loại'" 
          :Secondtitle="'Thông tin thể loại'" 
          @close="closeForm()" 
          @save="saveForm($event)"
          >
        </form-category>
        <category-tables @open="oepnModal()" @edit="editTour($event)" @remove="removeTour($event)"/>
        <confirm-modal
          :show="isShowConfirmModal"
          @close="cancelRemove()" 
          @save="confirmRemove()"
        >
        </confirm-modal>
      </div>
    </div>
  </div>
</template> 

<script>
import CategoryTables from "./components/CategoryTables.vue";
import FormCategory from "./components/FormCategory.vue";
import ConfirmModal from './components/ConfirmModal.vue';

export default {
  name: "category",
  components: {
    CategoryTables,
    FormCategory,
    ConfirmModal
  },
  data() {
    return {
      showModal: false,
      editingCategory: null,
      isShowConfirmModal: false,
      currentIdRemove: "",
    };
  },
  methods: {
    handleSubmit(data) {
      // Do something with the data
      console.log(data)
    },

    closeForm() {
      this.showModal = false;
      this.editingCategory = null;
    },

    oepnModal() {
      this.showModal = true;
    },

    editTour(tour) {
      console.log(tour);
      this.editingCategory = tour;
      this.showModal = true;
    },

    saveForm(body) {
      console.log(body);
      const id = this.editingCategory?.id;
      if (this.editingCategory) {
        console.log("!#1");
        this.$store.dispatch('updateCategory',{id, body});
      } else {
        this.$store.dispatch('addCategory', body);
      }
      this.showModal = false;
    },

    removeTour(id) {
      if (id) {
        this.currentIdRemove = id;
        this.isShowConfirmModal = true;
      }
    },

    cancelRemove() {
      this.isShowConfirmModal = false;
    },
    confirmRemove() {
      this.$store.dispatch('deleteCategory', this.currentIdRemove);
      this.isShowConfirmModal = false;
    },
  
  }
};
</script>
