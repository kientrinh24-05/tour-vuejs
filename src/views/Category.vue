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
        <category-tables :allCategory="categoryAll" @open="oepnModal()" @edit="editTour($event)" @remove="removeTour($event)"/>
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
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapGetters } = createNamespacedHelpers('category')

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
  computed: {
    ...mapGetters(['categoryAll'])
  },
  methods: {
    ...mapActions(['createCategory', 'updateCategory', 'getAllCategory', 'deleteCategory']),
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
      if(tour) {
        this.editingCategory = tour;
        this.showModal = true;
      }
    },

    saveForm(body) {
      const id = this.editingCategory?.id;
      if (this.editingCategory) {
        this.updateCategory({id: id, data: body});
      } else {
        this.createCategory(body);
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
      this.deleteCategory(this.currentIdRemove);
      this.isShowConfirmModal = false;
    }
  },
  created() {
    this.getAllCategory();
  },
};
</script>
