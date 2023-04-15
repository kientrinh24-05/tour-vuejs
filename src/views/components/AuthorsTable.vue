<template>
  <div class="card">
    <div class="card-header pb-0 d-flex">
      <h6>Quản lý Tour</h6>
      <argon-button color="success" size="sm" class="ms-auto" @click="openModal()"
         >Thêm mới</argon-button
      >
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên Tour</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Điểm đến thứ nhất</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Điểm đến thứ hai</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Điểm đến thứ ba</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Tỉnh</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Giá tiền</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Đánh giá</th>
              <th class="text-secondary ext-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td class="align-center">
                <div class="d-flex px-2 py-1">
                  <div>
                    <!-- <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    /> -->
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{product.name}}</h6>
                  </div>
                </div>
              </td>
              <td class="align-center">
                <p class="text-xs font-weight-bold mb-0">{{product.firstDestination}}</p>
              </td>
              <td class="align-center">
                <p class="text-xs font-weight-bold mb-0">{{product.secondDestination}}</p>
              </td>
              <td class="align-center">
                <p class="text-xs font-weight-bold mb-0">{{product.thirdDestination}}</p>
              </td>

              <td class="align-center">
                <p class="text-xs font-weight-bold mb-0">{{product.province}} {{product.city}}</p>
              </td>
              <td class="align-center text-center text-sm">
                <span class="badge badge-sm bg-gradient-success">{{product.type}}</span>
              </td>
              <td class="align-center"> 
                <p class="text-xs font-weight-bold mb-0">{{product.rating}}</p>
              </td>
        
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs text-edit"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  @click="handleEdit(product)"
                >Edit</a>
                <a
                
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  @click="handleRemove(product?.id)"
                >Remove</a>
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
  name: "authors-table",
  components: {
    ArgonButton,
  },
  props: {
    tour: Object
  },
  mounted() {
    console.log(this.products)
  },
  created() {
    this.$store.dispatch('fetchProducts');
  },
  computed: {
    ...mapGetters({
      products: 'allProducts',
    })
  },
  methods: {
    openModal() {
      this.$emit("open", "");
    },

    handleEdit(tour) {
      this.$emit('edit', tour);
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