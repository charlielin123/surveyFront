<script setup lang="ts">
import { computed, h, inject, nextTick, ref } from 'vue'
import sOption from './s-option.vue'

const selectAgeArea = inject('selectAgeArea', ref(''))
const props = defineProps({
  modelValue: {
    type: [String, Array<string>]
  },
  type: {
    type: String,
    default: 'single',
    validate: (val: string) => ['single', 'multiple'].includes(val)
  },
  /**
   * 問題
   */
  question: { type: String },
  /**
   * 選項
   */
  options: { type: Array<string> },
  /**
   * 是否必填
   */
  required: { type: Boolean },
  /**
   * 題號
   */
  questionNum: { type: String },
  /**
   * 適合年齡層
   */
  ageArea: { type: String },
  multiple: {
    type: Boolean
  }
})

const emit = defineEmits(['update:modelValue'])

const middleValue = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <div>
    <h3 class="small-q" :id="'q'+questionNum">{{ (questionNum ?? '') + question }}</h3>
    <template v-for="(option, index) in options" :key="option">
      <div class="option">
        <sOption
          :type="multiple ? 'checkbox' : 'radio'"
          :name="questionNum"
          :option-num="index + 1 + ''"
          :label="option"
          v-model="middleValue"
        />
      </div>
    </template>
  </div>
</template>

<style lang="scss">
.small-q {
  top: 2rem;
  z-index: 2;
  background-color: rgba(128, 128, 128, 0.607);
  // border-radius: 10px 10px 0 0;
  padding: 0.5rem 0;
}
.option {
  padding: 0.5rem 0;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  label {
    font-size: 1.2rem;
    display: flex;
    gap: 0.5rem;

    align-items: center;
  }
  input {
    height: 1.5rem;
    border: solid 1px orange;
    border-radius: 5px;
  }
  input.days {
    width: 2rem;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .option {
    padding-left: 0.5rem;
  }
}
</style>
