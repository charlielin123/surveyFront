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

const submit = () => {
  let reqAns: { [key: string]: any } = {}

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
  const form = {
    userName: name.value,
    answer: reqAns
  }
  api.post('/survey', form).then((res) => {
    console.log(res)
  })
  // console.log(form)
}
</script>

<template>
  <div class="container">
    <div class="name-box">
      <label for="name">姓名：</label>
      <input type="text" id="name" v-model="name" />
    </div>
    <div class="name-box">
      <label for="">年齡層：</label>
      <select name="" id="" v-model="selectAgeArea">
        <option value="PRESCHOOL">學齡前</option>
        <option value="ELEMENTARY">國小</option>
        <option value="JUNIOR_HIGH">國中</option>
        <option value="HIGH_SCHOOL">高中</option>
        <option value="COLLEGE">大專</option>
      </select>
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
              ></s-select>
            </template>
          </div>
        </template>
      </template>
    </div>
    <div class="button-box">
      <button class="btn btn-submit" @click="submit">送出</button>
    </div>
    <div>
      {{ ans }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
  background-color: bisque;
  box-shadow: inset 0 0 1rem 0 rgba(0, 0, 0, 0.2);
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
      font-size: 1.5rem;
      padding: 0rem;
      width: 8rem;
    }
    select {
      font-size: 1.5rem;
      padding: 0rem;
      width: 8rem;
    }
  }
  .big {
    .big-title {
      font-weight: 600;
      font-size: 1.5rem;
      position: sticky;
      top: 0;
      background-color: rgb(174, 255, 0);
    }
    border-radius: 8px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 1rem;
    label {
      font-weight: 600;
    }
  }
}
</style>
