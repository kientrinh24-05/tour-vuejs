<template>
  <div class="py-4 container-fluid">
    <div class=" row">
      <div class="col-12">
        <user-table :allUser="allUser" @row="selectItem($event)"/>
      </div>
    </div>
  </div>
</template> 

<script>
import UserTable from "./components/UserTable.vue";
import { createNamespacedHelpers } from 'vuex';
const { mapActions, mapGetters } = createNamespacedHelpers('auth')

export default {
  name: "User",
  components: {
    UserTable,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['allUser'])
  },
  methods: {
    ...mapActions(['getAllUser']),
    selectItem(data) {
      console.log(data, 'user');
      this.$router.push({ path: '/profile', query: { id: data.id } }).catch();
      localStorage.setItem('userID', data.id)
    }
  },
  created(){
    this.getAllUser()
  }
};
</script>
