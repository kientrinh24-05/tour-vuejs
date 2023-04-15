<template>
  <div class="modal" v-if="showModal">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <div class="box">
        <h1 class="title">{{ title }}</h1>
        <form @submit.prevent="saveData">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" v-model="data.name" required>
            </div>
          </div>
          <div class="field">
            <label class="label">First Destination</label>
            <div class="control">
              <input class="input" type="text" v-model="data.firstDestination" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Second Destination</label>
            <div class="control">
              <input class="input" type="text" v-model="data.secondDestination" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Third Destination</label>
            <div class="control">
              <input class="input" type="text" v-model="data.thirdDestination" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Province</label>
            <div class="control">
              <input class="input" type="text" v-model="data.province" required>
            </div>
          </div>
          <div class="field">
            <label class="label">City</label>
            <div class="control">
              <input class="input" type="text" v-model="data.city" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Rating</label>
            <div class="control">
              <input class="input" type="number" min="1" max="5" v-model="data.rating" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Type</label>
            <div class="control">
              <input class="input" type="text" v-model="data.type" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea class="textarea" v-model="data.description" required></textarea>
            </div>
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link" type="submit">Save</button>
            </div>
            <div class="control">
              <button class="button is-link is-light" @click="closeModal">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button class="modal-close is-large" @click="closeModal"></button>
  </div>
</template>

<script>
export default {
  props: {
    modalTitle: {
      type: String,
      default: "Modal Title",
    },
    showModal: {
      type: Boolean,
      default: false,
    },
    closeModalText: {
      type: String,
      default: "Close",
    },
    showOkButton: {
      type: Boolean,
      default: false,
    },
    okButtonText: {
      type: String,
      default: "OK",
    },
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
    okClicked() {
      this.$emit("ok-clicked");
    },
  },
};
</script>

<style>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  position: relative;
  z-index: 1;
  max-width: 500px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  opacity: 0.3;
  transition: opacity 0.3s;
  cursor: pointer;
}

.modal-close:hover {
  opacity: 1;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.field {
  margin-bottom: 20px;
}

.label {
  font-weight: bold;
  display: block;
  margin-bottom: 5px;
}

.control {
  position: relative;
}

.input,
.textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 3px;
  transition: border-color 0.3s;
}

.input:focus,
.textarea:focus {
  outline: none;
  border-color: #3273dc;
}

.button {
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button.is-link {
  background-color: #3273dc;
  color: #fff;
  border: none;
}

.button.is-link:hover {
  background-color: #276dc3;
}

.button.is-link.is-light {
  background-color: #fff;
  color: #3273dc;
  border: 1px solid #3273dc;
}

.button.is-link.is-light:hover {
  background-color: #f0f0f0;
}

</style>
