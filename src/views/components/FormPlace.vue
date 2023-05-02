<template>
  <div class="modal" v-if="show">
    <div class="py-4 container-fluid">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">{{ title }}</p>
                <argon-button color="success" size="sm" class="ms-auto" @click="closeModal()"
                  >X</argon-button
                >
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">{{ Secondtitle }}</p>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Tên địa điểm</label
                  >
                  <argon-input type="text" :value="name" @input="name = $event.target.value" />
                </div>
                <!-- <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Điểm đến thứ nhất</label
                  >
                  <argon-input type="email"  :value="firstDestination" @input="firstDestination = $event.target.value"/>
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Điểm đến thứ hai</label
                  >
                  <input class="form-control" type="text" :value="secondDestination" @input="secondDestination = $event.target.value"/>
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Điểm đến thứ ba</label
                  >
                  <argon-input type="text" :value="thirdDestination" @input="thirdDestination = $event.target.value" />
                </div> -->

                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Tỉnh</label
                  >
                  <argon-input type="text" :value="province" @input="province = $event.target.value" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Thành phố</label
                  >
                  <argon-input type="text" :value="city" @input="city = $event.target.value" />
                </div>

                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Đường dẫn map</label
                  >
                  <argon-input type="text" :value="link" @input="link = $event.target.value"/>
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Hình ảnh</label
                  >
                  <argon-input type="file" :value="image" @input="image = $event.target.value" />
                </div>
                <!-- <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Thể loại du lịch</label
                  >
                  <argon-select :options="tours" :selected-option="selectedOption" :value="selectedOption" @input="selectedOption = $event.target.value"  />
    
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Đánh giá </label
                  >
                  <argon-input type="text" :value="rating" @input="rating = $event.target.value" />
                </div>
               

                <div class="col-md-12">
                  <argon-textarea type="text" :id="1" :value="description" @input="description = $event.target.value"  :placeholder="'Mời bạn nhập text vào'">
                    Nội dung
                  </argon-textarea>
                </div> -->

                <div class="group-button d-flex align-items-center justify-content-end">
                  <argon-button color="primary" size="sm" class="btn-common-cancel" @click="closeModal()"
                  >Hủy bỏ</argon-button>
                  <argon-button color="success" size="sm" class="btn-common" @click="saveData()"
                  >Lưu</argon-button>
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
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
// import ArgonSelect from "../../components/ArgonSelect.vue";
// import ArgonTextarea from "../../components/ArgonTextarea.vue";

export default {
  name: "form-place",
  components: {
    ArgonInput,
    ArgonButton,
    // ArgonSelect,
    // ArgonTextarea
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "Modal Title"
    },
    Secondtitle: {
      type: String,
      default: "Modal Title"
    }
  },
  data() {
    return {
      name: "",
      province: "",
      city: "",
      link: "",
      image: "",
    }
  },
  methods: {
    closeModal() {
      this.$emit("close", "");
    },
    saveData() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('city', this.city);
      formData.append('province', this.province);
      formData.append('link', this.rating);
      formData.append('image', this.duration);
      this.$emit("save", formData);
      this.closeModal();
    }
  }
}
</script>
<style>
.btn-common-cancel {
  margin-right: 10px;
}
</style>