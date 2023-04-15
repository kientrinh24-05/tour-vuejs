<template>
  <div class="modal" v-if="show">
    <div class="py-4 container-fluid">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="text-uppercase text-sm">{{ contentTitle }}</p>
                <!-- <argon-button color="success" size="sm" class="ms-auto" @click="closeModal()"
                  >X</argon-button
                > -->
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="group-button d-flex align-items-center justify-content-end">
                  <argon-button color="primary" size="sm" class="btn-common-cancel" @click="closeModal()"
                  >Hủy bỏ</argon-button>
                  <argon-button color="success" size="sm" class="btn-common" @click="saveData()"
                  >Xác nhận</argon-button>
                </div>
              </div>
              <hr class="horizontal dark" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <profile-card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArgonButton from "@/components/ArgonButton.vue";

export default {
  name: "confirm-modal",
  components: {
    ArgonButton,
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    contentTitle: {
      type: String,
      default: "Bạn có chắc chắn muốn xóa không?"
    },
  },
  methods: {
    closeModal() {
      this.$emit("close", "");
    },
    saveData() {
      this.$emit("save");
    },
  }
}
</script>
<style>
.btn-common-cancel {
  margin-right: 10px;
}
</style>