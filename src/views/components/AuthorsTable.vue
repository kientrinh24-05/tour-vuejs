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
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Hình ảnh</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên Tour</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Loại hình du lịch</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Điểm đến</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Thời gian du lịch</th>
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
            <tr v-for="product in allTours" :key="product.id">
              <td class="align-center">
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      :src="product.image"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div>
                </div>
              </td>
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
                <p class="text-xs font-weight-bold mb-0">
                  <span v-for="(category, index) in product.categories" :key="index">
                    {{ category.name }}
                  </span>
                </p>
              </td>
              <td class="align-center">
                <p class="text-xs font-weight-bold mb-0">
                  <span v-for="(places, index) in product.places" :key="index">
                    {{ places.name }} {{ places.city }}
                  </span>
                </p>
              </td>
              <td class="align-center text-center">
                <p class="text-xs font-weight-bold mb-0">{{product.duration}}</p>
              </td>

              <td class="align-center">
                <p class="text-xs font-weight-bold mb-0">{{product.price}}</p>
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
                
                  class="text-secondary font-weight-bold text-xs text-edit"
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
import formatCurrencyVN from "../../utils/helper"
// import { mapGetters } from 'vuex';
export default {
  name: "authors-table",
  components: {
    ArgonButton,
  },
  props: {
    tour: Object,
    allTours: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  // mounted() {
  //   console.log(this.products)
  // },
  // created() {
  //   this.$store.dispatch('fetchProducts');
  // },
  computed: {
    // ...mapGetters({
    //   products: 'allProducts',
    // }),

    formattedPrice() {
      return this.products.map(item => {
        return {
          formattedPrice: formatCurrencyVN(item.price)
        }
      });
    }
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