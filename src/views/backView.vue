<script setup lang="ts">
import { allQ } from '@/static/QQ'
import { api } from '@/utils/api'
import { onMounted, reactive } from 'vue'

const state = reactive({
  list: [] as { id: number; userName: string; createdAt: string; answer: Array<string|[]> }[],
  selected: {} as { [key: string]: any }
})

const getDateStr = (dateStr: string) => {
  const d = new Date(dateStr)
  return (
    d.getFullYear() +
    '-' +
    (d.getMonth() + 1) +
    '-' +
    d.getDate() +
    ' ' +
    d.getHours() +
    ':' +
    d.getMinutes()
  )
}

const fix = (target: string | Array<string>): string | Array<string> => {
  if (!target) {
    return ''
  }
  if (Array.isArray(target)) {
    return target
      .map((item) => {
        const r = fix(item) + '</br>'
        console.log(r)
        return r
      })
      .sort((a, b) => {
        return Number.parseInt(a.split('-')[0]) - Number.parseInt(b.split('-')[0])
      })
  }
  const arr = target.split('%')
  let res = ''
  arr.forEach((item, index) => {
    if (item.includes('&select')) {
      let temp = item.replace('&select', '')
      temp = "<span class='highlight'>" + temp
      temp += '</span>'
      res += temp
    } else if (item.includes('&')) {
      let temp = item.replace('&', '')
      temp = "<span class='highlight'>" + temp
      temp += '</span>'
      res += temp
    } else {
      res += item
    }
  })

  return res
}

onMounted(() => {
  api.get('/survey/pickList').then((res) => {
    state.list = res.data
  })
})
</script>

<template>
  <div>
    <select name="" id="" v-model="state.selected">
      <template v-for="item in state.list" :key="item.id">
        <option :value="item.answer[0]">
          {{ item.userName + '-' + getDateStr(item.createdAt) }}
        </option>
      </template>
    </select>
  </div>

  <div class="contain">
    <div v-for="bq in allQ" :key="bq.idx" class="bg">
      <h3>{{ bq.label }}</h3>
      <div v-for="sq in bq.questions" :key="sq.idx" class="sq">
        <template v-if="state.selected[sq.idx]">
          <h4>{{ sq.idx }} {{ sq.question }}</h4>
          <template v-if="Array.isArray(state.selected[sq.idx])" >
            <div v-for="i in fix(state.selected[sq.idx])" class="answer" v-html="i" :key="i"></div>
          </template>
          <div v-else class="answer" v-html="fix(state.selected[sq.idx])"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contain {
  padding: 3rem;
}
.bg {
  border-bottom: solid 2px;
  padding-bottom: 2rem;
  h3 {
    margin-bottom: 1rem;
  }
}
.sq {
  .answer {
    padding-left: 2rem;
    .highlight {
      // color: yellow;
      padding: 2px 4px;
      border-radius: 4px;
      border: solid 1px;
      // background-color: blue;
      margin: 0 0.5rem;
    }
  }
}
</style>
