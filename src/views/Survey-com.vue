<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, reactive, type UnwrapNestedRefs, h, computed, ref, provide } from 'vue'
// import { api } from '@/utils/api'
import sSelect from '@/components/options/s-select.vue'
import sOption from '@/components/options/s-option.vue'

const route = useRoute()
const form: UnwrapNestedRefs<{ name: string; template: SurveyOption[] }> = reactive(
  {} as { name: string; template: SurveyOption[] }
)
enum AgeGroup {
  /**
   * 學齡前
   */
  PRESCHOOL = 'PRESCHOOL',
  /**
   * 小學
   * */
  ELEMENTARY = 'ELEMENTARY',
  /**
   * 國學
   */
  JUNIOR_HIGH = 'JUNIOR_HIGH',
  /**
   * 高中
   */
  HIGH_SCHOOL = 'HIGH_SCHOOL',
  /**
   * 大專
   */
  COLLEGE = 'COLLEGE'
}

enum SurveyOptionType {
  text,
  select,
  radio
}
interface SurveyOption {
  type: SurveyOptionType
  label: string
  name: string
  option: any[]
  required: boolean
  value?: any
}

onMounted(async () => {})

interface BigQ {
  label: string
  idx: string
  questions: Question[]
  ageArea: AgeGroup[]
}

class Question {
  /**
   * 題號
   */
  idx: string
  type: string
  question: string
  option: string[]

  constructor(idx: string, type: string, question: string, option: string[]) {
    this.idx = idx
    this.type = type
    this.question = question
    this.option = option
  }
}
const q1: BigQ = {
  /**
   * 題號
   */
  idx: '1',
  label: '兒少在[平日/開學期間]用餐情形',
  ageArea: [
    AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('1-1', 'single', '早餐', [
      '都吃',
      '有吃一周約%&input{"type":"number","class":"days"}%天',
      '幾乎沒吃'
    ]),
    new Question('1-2', 'single', '午餐', [
      '都吃',
      '有吃一周約%&input{"type":"number","class":"days"}%天',
      '幾乎沒吃'
    ]),
    new Question('1-3', 'single', '晚餐', [
      '都吃',
      '有吃一周約%&input{"type":"number","class":"days"}%天',
      '幾乎沒吃'
    ]),
    new Question('1-4', 'multiple', '兒少未吃三餐的主要原因[可複選]', [
      '都有吃，不適用',
      '沒有時間吃',
      '沒有習慣吃',
      '吃不下',
      '家裡沒有準備',
      '減肥',
      '為了省錢',
      '其他(請說明)%&input%'
    ]),
    new Question('1-5', 'multiple', '兒少三餐通常如何獲取', [
      '同住家人準備',
      '到親戚家吃',
      '自己煮',
      '自己買',
      '學校/名間團體提供',
      '不固定，有甚麼吃甚麼',
      '其他(請說明)%&input%'
    ]),
    new Question('1-6', 'single', '兒少是否經常(一周超過三天)吃不具營養價值的食物當作正餐', [
      '否',
      '是 (請勾選下列項目，可複選)%&select{"options":["泡麵、罐頭食品","速食類","炸物","含糖飲料","零食、點心","其他"]}%'
    ])
  ]
}

const q2: BigQ = {
  /**
   * 題號
   */
  idx: '2',
  label: '兒少在[寒暑假]用餐情形',
  ageArea: [
    AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('2-1', 'single', '早餐', [
      '都吃',
      '有吃一周約%&input{"type":"number","class":"days"}%天',
      '幾乎沒吃'
    ]),
    new Question('2-2', 'single', '午餐', [
      '都吃',
      '有吃一周約%&input{"type":"number","class":"days"}%天',
      '幾乎沒吃'
    ]),
    new Question('2-3', 'single', '晚餐', [
      '都吃',
      '有吃一周約%&input{"type":"number","class":"days"}%天',
      '幾乎沒吃'
    ]),
    new Question('2-4', 'multiple', '兒少未吃三餐的主要原因[可複選]', [
      '都有吃，不適用',
      '沒有時間吃',
      '沒有習慣吃',
      '吃不下',
      '家裡沒有準備',
      '減肥',
      '為了省錢',
      '其他(請說明)%&input%'
    ]),
    new Question('2-5', 'multiple', '兒少三餐通常如何獲取', [
      '同住家人準備',
      '到親戚家吃',
      '自己煮',
      '自己買',
      '學校/名間團體提供',
      '不固定，有甚麼吃甚麼',
      '其他(請說明)%&input%'
    ]),
    new Question('2-6', 'single', '兒少是否經常(一周超過三天)吃不具營養價值的食物當作正餐', [
      '否',
      '是 (請勾選下列項目，可複選)%&select{"options":["泡麵、罐頭食品","速食類","炸物","含糖飲料","零食、點心","其他"]}%'
    ])
  ]
}
const q3: BigQ = {
  /**
   * 題號
   */
  idx: '3',
  label: '兒少每天平均睡眠時間',
  ageArea: [
    AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [new Question('3-1', 'single', '', ['少於5小時', '5-7小時', '8-10小時', '超過10小時'])]
}
const q4: BigQ = {
  /**
   * 題號
   */
  idx: '4',
  label: '兒少目前生活，感到困擾的事情有哪些[可複選]',
  ageArea: [
    AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('4-1', 'multiple', '', [
      '完全沒有',
      '學校課業',
      '健康疾病',
      '選擇就讀學校',
      '親子關係',
      '手足互動',
      '師生互動',
      '交友人際',
      '感情問題',
      '容貌外表',
      '未來前途',
      '選擇或尋找工作',
      '同儕欺凌',
      '家庭經濟問題',
      '零用錢不夠',
      '父母親感情不佳',
      '其他(請說明)%&input%'
    ])
  ]
}

const allQ: BigQ[] = [q1, q2, q3, q4]
const name = ref('')
const selectAgeArea = ref('')
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
  const form = {
    name: name.value,
    ans2: ans
  }
  console.log(form)
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
        <label class="big-title">{{ bigQ.label }}</label>
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
