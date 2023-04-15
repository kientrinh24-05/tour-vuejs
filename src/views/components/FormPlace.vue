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
                <div class="col-md-4">
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
                </div>

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

                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Giá tiền</label
                  >
                  <argon-input type="text" :value="price" @input="price = $event.target.value"/>
                </div>
                <div class="col-md-4">
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
                </div>

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
import ArgonSelect from "../../components/ArgonSelect.vue";
import ArgonTextarea from "../../components/ArgonTextarea.vue";

export default {
  name: "form-place",
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
      firstDestination: "",
      secondDestination: "",
      thirdDestination: "",
      province: "",
      city: "",
      price: "",
      rating: "",
      type: "",
      description:"",
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
  methods: {
    closeModal() {
      this.$emit("close", "");
    },
    saveData() {
      const data = {
        name: this.name,
        firstDestination: this.firstDestination,
        secondDestination: this.secondDestination,
        thirdDestination: this.thirdDestination,
        province: this.province,
        city: this.city,
        price: this.price,
        rating: this.rating,
        type: this.selectedOption,
        description: this.description
      };

      console.log(data);
      // return;
      // this.$emit("save", data);
      // this.closeModal();
    }
  }
}
</script>
<style>
.btn-common-cancel {
  margin-right: 10px;
}
</style>