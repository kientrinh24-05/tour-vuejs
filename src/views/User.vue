<template>
  <div class="py-4 container-fluid">
    
    <div class=" row">
      <div class="col-12">
        <user-table @open="oepnModal()" @edit="editTour($event)" @remove="removeTour($event)"/>
      </div>
    </div>
  </div>
</template> 

<script>
import UserTable from "./components/UserTable.vue";

export default {
  name: "User",
  components: {
    UserTable,
  },
  data() {
    return {
      showModal: false,
      editingTour: null,
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
      this.editingTour = null;
    },

    oepnModal() {
      this.showModal = true;
    },

    editTour(tour) {
      this.editingTour = tour;
      this.showModal = true;
    },

    saveForm(body) {
      const id = this.editingTour?.id;
      if (this.editingTour) {
        this.$store.dispatch('updateInterest',{id, body});
      } else {
        this.$store.dispatch('addInterest', body);
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
      this.$store.dispatch('deleteProduct', this.currentIdRemove);
      this.isShowConfirmModal = false;
    },
  
  }
};
</script>
