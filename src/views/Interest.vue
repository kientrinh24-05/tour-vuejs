<template>
  <div class="py-4 container-fluid">    
    <div class=" row">
      <div class="col-12">
        <form-interest 
          :show="showModal" 
          :category="editingTour"
          :title="editingTour ? 'Cập nhật sở thích' : 'Tạo mới sở thích'" 
          :Secondtitle="'Thông tin sở thích'" 
          @close="closeForm()" 
          @save="saveForm($event)"
          >
        </form-interest>
        <interest-table :interestAll="interestAll" @open="oepnModal()" @edit="editTour($event)" @remove="removeTour($event)"/>
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
import InterestTable from "./components/InterestTable.vue";
import FormInterest from "./components/FormInterest.vue";
import ConfirmModal from './components/ConfirmModal.vue';
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapGetters } = createNamespacedHelpers('interest')

export default {
  name: "interest",
  components: {
    InterestTable,
    ConfirmModal,
    FormInterest
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
    ...mapGetters(['interestAll'])
  },
  methods: {
    ...mapActions(['createInterest', 'updateInterest', 'getAllInterest', 'deleteInterest']),
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
        console.log(tour, 'tour');
        this.editingTour = tour;
        this.showModal = true;
      }
    },
 
    saveForm(body) {
      const id = this.editingTour?.id;
      if (this.editingTour) {
        this.updateInterest({id: id, data: body});
      } else {
        this.createInterest(body);
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
      this.deleteInterest(this.currentIdRemove);
      this.isShowConfirmModal = false;
    },
  
  },
  created() {
    this.getAllInterest()
  }
};
</script>
