<template>
  <div class="card">
    <div class="card-header pb-0 d-flex">
      <h6>Quản lý người dùng</h6>
      <!-- <argon-button color="success" size="sm" class="ms-auto" @click="openModal()"
         >Thêm mới</argon-button
      > -->
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Avatar</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Họ tên</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Địa chỉ</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Số điện thoại</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Trạng thái</th>
              <!-- <th class="text-secondary ext-uppercase text-secondary text-xxs font-weight-bolder opacity-7"> Action</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in allUser" :key="product.id" @click="selectRow(product)">
              <td class="align-center">
                <div class="d-flex px-2 py-1">
                  <div>
                   <img
                      src="../../assets/img/team-2.jpg"
                      class="avatar avatar-sm me-3"
                      alt="user1"
                    />
                  </div>
                </div>
              </td>
              <td class="align-center">
                <div class="d-flex px-2 py-1">
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{product.name}}</h6>
                  </div>
                </div>
              </td>
              <td class="align-center"> 
                <p class="text-xs font-weight-bold mb-0">{{product.address}}</p>
              </td>
              <td class="align-center"> 
                <p class="text-xs font-weight-bold mb-0">{{product.phone}}</p>
              </td>
              <td class="align-center"> 
              <span class="badge" :class="[product.status ? 'bg-primary' : 'bg-secondary']">{{product.status ? 'Active' : 'No Active'}}</span>
              </td> 
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-table",
  components: {
    // ArgonButton,
  },
  props: {
    tour: Object,
    allUser: {
      type: Array,
      default () {
        return []
      }
    }

  },
  data() {
    return {
    }
  },
  methods: {
    selectRow(event) {
      this.$emit('row', event);
    },
  },
};
</script>

<style>
.text-edit {
  margin-right: 10px;
  cursor: pointer;
}
table tbody tr {
  cursor: pointer;
}
</style>