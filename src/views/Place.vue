<template>
  <div class="py-4 container-fluid">
    
    <div class=" row">
      <div class="col-12">
        <form-place 
          :show="showModal" 
          :tour="editingTour"
          :title="editingTour ? 'Edit Tour' : 'Create Tour'" 
          :Secondtitle="'Info Tour'" 
          @close="closeForm()" 
          @save="saveForm($event)"
          >
        </form-place>
        <place-table :allPlaces="allPlaces" @open="oepnModal()" @edit="editTour($event)" @remove="removeTour($event)"/>
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
import PlaceTable from "./components/PlaceTable.vue";
import FormPlace from "./components/FormPlace.vue";
import ConfirmModal from './components/ConfirmModal.vue';
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapGetters } = createNamespacedHelpers('places')

export default {
  name: "place",
  components: {
    PlaceTable,
    FormPlace,
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
    ...mapGetters(['allPlaces'])
  },
  methods: {
    ...mapActions(['createPlaces', 'updatePlaces', 'getAllPlaces', 'deletePlaces']),
    handleSubmit(data) {
      // Do something with the data
      console.log(data)
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
        this.updatePlaces({id: id, data: body});
      } else {
        this.createPlaces(body);
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
      this.deletePlaces(this.currentIdRemove);
      this.isShowConfirmModal = false;
    },
  
  },
  created() {
    this.getAllPlaces();
  }
};
</script>
