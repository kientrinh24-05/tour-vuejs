<template>
  <div class="base-select">
    <select v-model="selectedValue" :disabled="disabled" :multiple="multiple" v-on:change="$emit('change', $event)">
      <option v-for="(option, key) in options" :value="option.value" :key="key">{{ option.text }}</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "argon-select",
  props: {
    options: {
      type: Array,
      required: true
    },
    selectedOption: {
      type: [String, Number, Array],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selectedValue: this.selectedOption
    }
  },
  watch: {
    selectedValue(newValue) {
      this.selectedValue = newValue
    }
  }
}
</script>

<style scoped>
.base-select {
  position: relative;
}

select option {
  border: 1px solid gray;
  padding: 10px;
}

select option:hover {
  background-color: lightgray;
}

.base-select select {
  display: block;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  background-color: #fff;
  background-image: none;
}
</style>
