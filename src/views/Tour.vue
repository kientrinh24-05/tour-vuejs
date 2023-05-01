<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <form-tour 
          :show="showModal" 
          :tour="editingTour"
          :title="editingTour ? 'Edit Tour' : 'Create Tour'" 
          :Secondtitle="'Info Tour'" 
          @close="closeForm()" 
          @save="saveForm($event)"
          >
        </form-tour>
        <authors-table :allTours="allTours" @open="oepnModal()" @edit="editTour($event)" @remove="removeTour($event)"/>
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
import AuthorsTable from "./components/AuthorsTable.vue";
import FormTour from "./components/FormTour.vue";
import ConfirmModal from './components/ConfirmModal.vue';
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapGetters } = createNamespacedHelpers('tour')

export default {
  name: "tour",
  components: {
    AuthorsTable,
    FormTour,
    ConfirmModal
  },
  data() {
    return {
      showModal: false,
      editingTour: null,
      isShowConfirmModal: false,
      currentIdRemove: "",
    };
  },
  computed: {
    ...mapGetters(['allTours'])
  },
  methods: {
    ...mapActions(['createTour', 'updateTour', 'getAllTour', 'deleteTour']),
    handleSubmit(data) {
      // Do something with the data
      console.log(data, 'tour')
    },

    closeForm() {
      this.showModal = false;
      this.editingTour = null;
    },

    oepnModal() {
      this.showModal = true;
    },

    editTour(tour) {
      if(tour) {
        this.editingTour = tour;
        this.showModal = true;
      }  
    },
    saveForm(body) {
      const id = this.editingTour?.id;
      if (this.editingTour) {
        this.updateTour({id: id, data: body});
      } else {
        this.createTour(body);
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
      this.deleteTour(this.currentIdRemove)
      this.isShowConfirmModal = false;
    },
  
  },
  created() {
    this.getAllTour();
  }
};
</script>
