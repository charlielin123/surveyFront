<script setup lang="ts">
import { computed, h, nextTick, onMounted, reactive, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Array<string>]
  },
  // 選項號
  optionNum: {
    type: String
  },
  label: {
    type: String
  },
  type: {
    type: String
  },
  /**
   * 題號
   */
  name: {
    type: String
  },
  value: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
const checkBox = ref<null | HTMLInputElement>(null)
const isChecked = computed(() => {
  return props.modelValue === lastValue.value
})
const state = reactive({
  isChecked: isChecked,
  inputValue: '',
  hasInput: false,
  labelSplit: [''],
  selected: [] as string[]
})

const middle = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emit('update:modelValue', val)
  }
})

const lastValue = computed(() => {
  let output = ''
  state.labelSplit.forEach((s: string) => {
    if (s.includes('&input')) {
      output += `%&${state.inputValue}%`
    } else if (s.includes('&select')) {
      output += '%&select' + JSON.stringify(state.selected) + '%'
    } else {
      output += s
    }
  })
  // if (state.selected.length > 0) {
  //   output = output + '%&select' + JSON.stringify(state.selected) + '%'
  // }

  return props.optionNum + '-' + output
})
const convertJSON = (str: string) => {
  try {
    if (str.startsWith('{') && str.endsWith('}')) {
      return JSON.parse(str)
    } else {
      return str
    }
  } catch (error) {
    console.warn('convertJSON error', error)
  }
}
const updateValue = async () => {
  const val = lastValue.value
  if (props.type === 'checkbox' && Array.isArray(middle.value)) {
    if (checkBox?.value?.checked) {
      middle.value = middle.value.filter((i: string) => {
        if (!i.startsWith(props.optionNum + '-')) return i
      })
      await nextTick()
      middle.value.push(val)
    } else {
      middle.value = middle.value.filter((i: string) => {
        if (!i.startsWith(props.optionNum + '-')) return i
      })
    }
  } else {
    middle.value = val
  }
}

const inputId = generateId()

const customLabel = computed(() => {
  return () =>
    state.labelSplit.map((l) => {
      if (l.startsWith('&input')) {
        const objStr = l.replace('&input', '')
        const obj = convertJSON(objStr)
        return h('input', {
          type: 'text',
          value: state.inputValue,
          ...obj,
          onInput: (e: Event) => {
            const element: HTMLInputElement = e.target as HTMLInputElement
            state.inputValue = element.value
            if (checkBox?.value) {
              checkBox.value.checked = true
              updateValue()
            }
          }
        })
      } else if (l.startsWith('&select')) {
        const objStr = l.replace('&select', '')
        const obj = convertJSON(objStr)
        return isChecked.value
          ? h(
              'div',
              { class: 'dS' },
              obj?.options?.map((i: string) => {
                const id = generateId()
                return h('div', [
                  h('input', {
                    type: 'checkbox',
                    value: i,
                    id: id,
                    onInput: (e: Event) => {
                      const target = e.target as HTMLInputElement
                      if (target.checked) {
                        state.selected.push(i)
                      } else {
                        state.selected = state.selected.filter((s) => {
                          return s !== i
                        })
                      }
                      updateValue()
                    }
                  }),
                  h('label', { for: id }, i)
                ])
              })
            )
          : ''
      } else {
        return l
      }
    })
})

onMounted(() => {
  state.labelSplit = props.label?.split('%') ?? []
  state.labelSplit?.forEach((i) => {
    if (i.startsWith('&input')) {
      state.hasInput = true
    }
  })
})
</script>

<template>
  <div class="select">
    <input :type="type" :id="inputId" :name="name" @input="updateValue" ref="checkBox" />
    <label :for="inputId">({{ optionNum }}) <customLabel /></label>
  </div>
</template>

<style lang="scss">
.select {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  label {
    &:has(.dS) {
      flex-direction: column;
    }
  }
}

.dS {
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
  }
}

input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
