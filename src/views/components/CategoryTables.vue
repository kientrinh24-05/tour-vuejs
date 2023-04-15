<template>
  <div class="card">
    <div class="card-header pb-0 d-flex">
      <h6>Quản lý thể loại</h6>
      <argon-button color="success" size="sm" class="ms-auto" @click="openModal()">Thêm mới</argon-button>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên Thể Loại</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Hình ảnh</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Danh sách tour</th>
              <th class="text-secondary ext-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categorys" :key="category.id">
              <td class="align-center">
                <div class="d-flex px-2 py-1">
        
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ category.name }}</h6>
                  </div>
                </div>
              </td>
              <td class="align-center">
                      <div>
                    <img
                      :src="category.image"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    /> 
                  </div>
              </td>
              <td class="align-center">
                <div class="d-flex px-2 py-1 justify-content-center align-item-center">
                  <div class="d-flex flex-column justify-content-center" v-for="tour in category.tours" :key="tour.id">
                    <h6 class="mb-0 text-sm text-edit">{{ tour.name }}</h6>
                  </div>
               </div>
              </td>
              <td class="align-middle">
                <a href="javascript:;" class="text-secondary font-weight-bold text-xs text-edit" data-toggle="tooltip"
                  data-original-title="Edit user" @click="handleEdit(category)">Edit</a>
                <a class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user"
                  @click="handleRemove(category?.id)">Remove</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";
import { mapGetters } from 'vuex';
export default {
  name: "category-tables",
  components: {
    ArgonButton,
  },
  props: {
    category: Object
  },
  data() {
    return {}
  },
  mounted() {
    console.log(this.products)
  },
  created() {
    console.log(this.categoryFake);
    this.$store.dispatch('fetchCategorys');
  },
  computed: {
    ...mapGetters({
      categorys: 'allCategorys',
    })
  },
  methods: {
    openModal() {
      this.$emit("open", "");
    },

    handleEdit(category) {
      this.$emit('edit', category);
    },
    handleRemove(id) {
      this.$emit('remove', id);
    }
  },
};
</script>

<style>
.text-edit {
  margin-right: 10px;
  cursor: pointer;
}
</style>