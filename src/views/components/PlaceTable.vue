<template>
  <div class="card">
    <div class="card-header pb-0 d-flex">
      <h6>Quản lý địa điểm</h6>
      <argon-button color="success" size="sm" class="ms-auto" @click="openModal()"
         >Thêm mới</argon-button
      >
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tên địa điểm</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Tỉnh</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Thành Phố</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Đường dẫn map</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Hình ảnh</th>
              <th class="text-secondary ext-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in allPlaces" :key="product.id">
              <td class="align-center">
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{product.name}}</h6>
                  </div>
                </div>
              </td>
              <td class="align-center">
                <p class="text-xs font-weight-bold mb-0">{{product.city}}</p>
              </td>
              <td class="align-center text-center">
                <p class="text-xs font-weight-bold mb-0">{{product.province}}</p>
              </td>
              <td class="align-center text-center">
                <a :href="product.mapLink ? product.mapLink : 'https://www.google.com/maps/place/Ph%C3%BA+Qu%E1%BB%91c/@10.2231901,103.9266019,10.84z/data=!4m6!3m5!1s0x31a78c62b49eda17:0x8aa79fbbdd72cdb!8m2!3d10.289879!4d103.98402!16zL20vMDVtcG43?authuser=0'" class="align-center text-xs font-weight-bold mb-0 link-text">Link map </a>
              </td>
              <td class="align-center d-flex align-items-center justify-content-center">
                <div>
                    <img
                      :src="'http://localhost:8080' + product.image"
                      class="avatar avatar-lg me-3"
                      alt="user1"
                    />
                  </div>
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
import VueLinkify from 'vue-linkify'
// import { mapGetters } from 'vuex';
export default {
  name: "place-table",
  components: {
    ArgonButton,
  },
  directives: {
    linkified: VueLinkify.directive
  },
  data() {
    return {
      message: 'Đây là một ví dụ về link: https://example.com'
    }
  },
  props: {
    tour: Object,
    allPlaces: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted() {
    // console.log(this.products)
  },
  created() {
    // this.$store.dispatch('fetchProducts');
  },
  computed: {
    // ...mapGetters({
    //   products: 'allProducts',
    // })
  },
  methods: {
    openModal() {
      this.$emit("open", "");
    },

    redirectLink(link) {
      console.log(link);
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
.text-center {
  text-align: center;
}

.link-text {
  text-decoration: underline;
}
</style>