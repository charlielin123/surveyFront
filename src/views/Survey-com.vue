<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, reactive, type UnwrapNestedRefs, h, computed, ref, provide } from 'vue'
import { api } from '@/utils/api'
import sSelect from '@/components/options/s-select.vue'
import { allQ, type BigQ, type Question, AgeGroup } from '@/static/QQ'
const name = ref('')
const selectAgeArea = ref<AgeGroup>('' as AgeGroup)
provide('selectAgeArea', selectAgeArea)
const ans = reactive<{ [key: string]: any }>({})
allQ.forEach((item: BigQ) => {
  ans[item.idx] = {}
  item.questions.forEach((q: Question) => {
    if (q.type == 'multiple') {
      ans[item.idx][q.idx] = []
    } else {
      ans[item.idx][q.idx] = ''
    }
  })
})

const nameInput = ref<HTMLInputElement | null>(null)

const doCheck = (val: string) => {
  let newVal
  if (val.includes('%&')) {
    newVal = val.split('%')
    newVal.forEach((item) => {
      if (item.includes('&select')) {
        item = item.replace('&select', '')
        try {
          if (!(JSON.parse(item)?.length > 0)) {
            console.log(JSON.parse(item))
            throw new Error()
          }
        } catch (error) {
          throw new Error('請勾選額外項目')
        }
      } else if (item.includes('&')) {
        item = item.replace('&', '')
        item = item.trim()
        if (!item) {
          throw new Error('請填寫輸入框內容')
        }
      }
    })
  } else {
    val = val.trim()
    if (val.length == 0) {
      throw new Error('未勾選任何項目')
    }
  }
}
/**
 *
 * @param q
 * @returns 是否需要檢查
 */
const checkRequire = (q: Question) => {
  if (!q.require) return true

  const reqBigIdx = q.require?.idx.split('-')?.[0] ?? ''

  const reqSmallIdx = q.require?.idx ?? ''
  if (!reqSmallIdx || !reqBigIdx) {
    return true
  }

  if (Array.isArray(q.require?.ansIdx)) {
    for (const item of q.require.ansIdx) {
      if (ans[reqBigIdx][reqSmallIdx].split('-')?.[0] == item) {
        return true
      }
    }
  } else {
    if (ans[reqBigIdx][reqSmallIdx].split('-')?.[0] == q.require?.ansIdx) {
      return true
    }
  }
}

class CustomError extends Error {
  idx: string
  constructor(message: string, idx: string) {
    super(message)
    this.name = 'CustomError'
    this.idx = idx
  }
}

const checkValue = (q: Question) => {
  const bigIdx = q.idx.split('-')?.[0]
  const smallIdx = q.idx
  const val = ans[bigIdx][smallIdx]
  if (!checkRequire(q)) {
    return
  }
  try {
    if (val instanceof Array) {
      if (val.length == 0) {
        throw new CustomError('未勾選任何項目', q.idx)
      }
      val.forEach((item) => {
        doCheck(item)
      })
    } else if (typeof val === 'string') {
      doCheck(val)
    }
  } catch (error: any) {
    throw new CustomError(error.message, q.idx)
  }
}



const submit = () => {
  let reqAns: { [key: string]: any } = {}

  if (!name.value) {
    alert('請輸入姓名')
    nameInput.value?.focus()
    return
  }

  if (!selectAgeArea.value) {
    alert('請選擇年齡層')
    return
  }

  for (const i in ans) {
    for (const j in ans[i]) {
      const val = ans[i][j]
      if (val instanceof Array && val.length > 0) {
        reqAns[j] = val
      } else if (val && Object.keys(val).length > 0) {
        reqAns[j] = val
      }
    }
  }

  try {
    allQ.forEach((item: BigQ) => {
      item.ageArea.includes(selectAgeArea.value) &&
        item.questions.forEach((q: Question) => {
          checkValue(q)
        })
    })
  } catch (error: any) {
    const { idx, message } = error as { idx: string; message: string }
    const targetQuestion = document.getElementById('q' + idx)
    const top = targetQuestion?.offsetTop ?? 0

    document.querySelector('html')?.scroll({
      top: top - 80,
      behavior: 'smooth'
    })

    alert('題號' + idx + ':' + message)
    return
  }

  const form = {
    userName: name.value,
    answer: reqAns
  }

  api.post('/survey', form).then((res) => {
    alert('送出成功')
    location.reload()
  })
}
</script>

<template>
  <div class="container">
    <div class="reqBox">
      <h2>兒少生活樣態訪視檢視清單</h2>
      <div class="name-box">
        <label for="name">姓名：</label>
        <input type="text" id="name" v-model="name" ref="nameInput" />
      </div>
      <div class="name-box">
        <label for="">年齡層：</label>
        <select name="" id="" v-model="selectAgeArea">
          <option value="">請選擇年齡層</option>
          <option value="PRESCHOOL">幼兒園</option>
          <option value="ELEMENTARY">國小</option>
          <option value="JUNIOR_HIGH">國中</option>
          <option value="HIGH_SCHOOL">高中</option>
          <option value="COLLEGE">大專/大學</option>
        </select>
      </div>
    </div>
    <div class="big">
      <template v-for="bigQ in allQ" :key="'big' + bigQ.idx">
        <template v-if="bigQ.ageArea.includes(selectAgeArea)">
          <div class="big-q">
            <h3 class="big-title">{{ bigQ.label }}</h3>
            <template v-for="smallQ in bigQ.questions" :key="smallQ.idx">
              <s-select
                v-model="ans[bigQ.idx][smallQ.idx]"
                :type="smallQ.type"
                :options="smallQ.option"
                :questionNum="smallQ.idx"
                :question="smallQ.question"
                :multiple="smallQ.type == 'multiple'"
                v-if="checkRequire(smallQ)"
              ></s-select>
              <template v-else>不需填寫</template>
            </template>
          </div>
        </template>
      </template>
    </div>
    <div class="button-box">
      <button class="btn btn-submit" @click="submit">送出</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.reqBox {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 1.5rem;
    padding: 1rem;
  }
}
.button-box {
  display: flex;
  justify-content: center;
}
.btn {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  font-weight: 600;
  border-radius: 8px;
  background-color: rgba(128, 255, 0, 0.33);
  border: solid rgba(132, 201, 63, 0.33);
}
.container {
  border-radius: 5px;
  position: relative;
  .name-box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    label {
      font-weight: 600;
      font-size: 1.5rem;
    }
    input {
      font-size: 1rem;
      padding: 0.2rem;
    }
    select {
      font-size: 1rem;
      padding: 0.2rem;
    }
  }
  .big {
    padding: 0.5rem 2rem;
    .big-title {
      font-weight: 600;
      font-size: 1.5rem;
      position: sticky;
      top: 0;
      background-color: white;
    }
    border-radius: 10px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    label {
      font-weight: 600;
    }
  }
  .big-q {
    &:not(:has(.small-q)) {
      display: none;
    }
    & > div {
      border: solid rgba(128, 128, 128, 0.53);
      border-radius: 10px;
      overflow: hidden;
      margin: 1rem 0;
    }
  }
}
</style>
