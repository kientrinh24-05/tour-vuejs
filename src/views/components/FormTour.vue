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
                  <argon-input type="text" :value="formData.name" @input="formData.name = $event.target.value" />
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Điểm đến thứ nhất</label
                  >
                  <argon-input type="email"  :value="formData.firstDestination" @input="formData.firstDestination = $event.target.value"/>
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Điểm đến thứ hai</label
                  >
                  <input class="form-control" type="text" :value="formData.secondDestination" @input="formData.secondDestination = $event.target.value"/>
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Điểm đến thứ ba</label
                  >
                  <argon-input type="text" :value="formData.thirdDestination" @input="formData.thirdDestination = $event.target.value" />
                </div>

                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Tỉnh</label
                  >
                  <argon-input type="text" :value="formData.province" @input="formData.province = $event.target.value" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >Thành phố</label
                  >
                  <argon-input type="text" :value="formData.city" @input="formData.city = $event.target.value" />
                </div>

                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Giá tiền</label
                  >
                  <argon-input type="text" :value="formData.price" @input="formData.price = $event.target.value"/>
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Thể loại du lịch</label
                  >
                  <argon-select :options="tours" :selected-option="formData.selectedOption" :value="formData.selectedOption" @input="selectedOption = $event.target.value"  />
    
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Đánh giá </label
                  >
                  <argon-input type="text" :value="formData.rating" @input="formData.rating = $event.target.value" />
                </div>
               

                <div class="col-md-12">
                  <argon-textarea type="text" :id="1" :value="formData.description" @input="formData.description = $event.target.value"  :placeholder="'Mời bạn nhập text vào'">
                    Nội dung
                  </argon-textarea>
                </div>

                <div class="group-button d-flex align-items-center justify-content-end">
                  <argon-button color="primary" size="sm" class="btn-common-cancel" @click="closeModal()"
                  >Hủy bỏ</argon-button>
                  <argon-button color="success" size="sm" class="btn-common" @click="saveData()"
                  >{{tour ? 'Lưu' : 'Tạo' }}</argon-button>
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
import ArgonSelect from "../../components/ArgonSelect.vue";
import ArgonTextarea from "../../components/ArgonTextarea.vue";

export default {
  name: "form-tour",
  components: {
    ArgonInput,
    ArgonButton,
    ArgonSelect,
    ArgonTextarea
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    tour: Object,
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
      formData: {
        name: '',
        firstDestination: '',
        secondDestination: '',
        thirdDestination: '',
        province: '',
        city: '',
        price: '',
        selectedOption: '',
        description: ''
     },
      tours: [
        { id: 1, value: 'TOUR_SEA', text: 'Du lịch biển'},
        { id: 2, value: 'TOUR_CUISINE', text: 'Du lịch ẩm thực' },
        { id: 3, value: 'TOUR_EXPLORE', text: 'Khám phá'},
        { id: 4, value: 'TOUR_ADVENTURE', text: 'Phiêu lưu' },
        { id: 5, value: 'TOUR_CONVALESCENCE', text: 'Hồi phục sức khỏe' },
        { id: 6, value: 'TOUR_SIGHTSEEING', text: 'Tham quan' },
        { id: 7, value: 'TOUR_CAMPING', text: 'Cắm trại' }
      ],
      selectedOption: "",
    }
  },
  watch: {
    tour: {
      handler(newVal) {
        console.log(newVal);
        if (newVal) { 
          // this.name = newVal.name;
          this.formData = {...newVal};
        } else {
          this.resetForm();
        }
      },
      immediate: true
    }
  },
  methods: {
    closeModal() {
      this.$emit("close", "");
    },
    saveData() {
      const data = {
        name: this.formData.name,
        firstDestination: this.formData.firstDestination,
        secondDestination: this.formData.secondDestination,
        thirdDestination: this.formData.thirdDestination,
        province: this.formData.province,
        city: this.formData.city,
        price: this.formData.price,
        rating: this.formData.rating,
        type: this.formData.selectedOption,
        description: this.formData.description
      };
  
      this.$emit("save", data);
    },
    resetForm() {
      this.formData = {
        name: '',
        firstDestination: '',
        secondDestination: '',
        thirdDestination: '',
        province: '',
        city: '',
        price: '',
        selectedOption: '',
        description: ''
     }
    }
  }
}
</script>
<style>
.btn-common-cancel {
  margin-right: 10px;
}
</style>