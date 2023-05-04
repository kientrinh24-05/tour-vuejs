<template>
  <div class="modal" v-if="show">
    <div class="py-4 container-fluid">
      <div class="row align-items-center justify-content-center">
        <div class="col-md-6 offset-md-3">
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
                    >Hình ảnh</label
                  >
                  <argon-input type="file" :value="formData.file" @input="formData.file = $event.target.files[0]" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Thể loại tour</label
                  >
                  <argon-select :options="tours" :selectedOption="formData.key" @change="formData.key = $event.target.value"  />
    
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >Tên thể loại </label
                  >
                  <argon-input type="text" :value="formData.name" @input="formData.name = $event.target.value" />
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

export default {
  name: "form-category",
  components: {
    ArgonInput,
    ArgonButton,
    ArgonSelect
  },
  props: {
    category: Object,
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
      formData: {
        name: "",
        key:"",
        file: null
      },
      tours: [
        { id: 1, value: 'CULTURE_AND_HISTORY', text: 'Du lịch biển'},
        { id: 2, value: 'UNDERGROUND_CATACOMBS', text: 'Du lịch ẩm thực' },
        { id: 3, value: 'NATURE_AND_ADVANTURE', text: 'Khám phá'},
        { id: 4, value: 'DAY_TRIP', text: 'Phiêu lưu' },
        { id: 5, value: 'ARCHAOELOGY', text: 'Hồi phục sức khỏe' },
        { id: 6, value: 'EXTREM_SPORTS', text: 'Tham quan' }
      ],
      
    }
  },
  watch: {
    category: {
      handler(newVal) {
        console.log(newVal, 'new');
        if (newVal) { 
          this.formData = {...newVal};
          console.log(this.formData, 'this.formData');
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
      const formData = new FormData();
      formData.append('name', this.formData.name);
      formData.append('key', this.formData.key);
      formData.append('file', this.formData.file);

      this.$emit("save", formData);
      this.closeModal();
      this.resetForm();
    },

    resetForm() {
      this.formData = {
        name: '',
        key: ''
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