export enum SurveyOptionType {
  text,
  select,
  radio
}

export interface SurveyOption {
  type: SurveyOptionType
  label: string
  name: string
  option: any[]
  required: boolean
  value?: any
}
export const enum AgeGroup {
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

export interface BigQ {
  label: string
  idx: string
  questions: Question[]
  ageArea: AgeGroup[]
}

export class Question {
  /**
   * 題號
   */
  idx: string
  type: string
  question: string
  option: string[]
  require: { idx: string; ansIdx: string | string[] } | null = null

  constructor(
    idx: string,
    type: string,
    question: string,
    option: string[],
    require?: { idx: string; ansIdx: string | string[] }
  ) {
    this.idx = idx
    this.type = type
    this.question = question
    this.option = option
    this.require = require ?? null
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
      '有吃一周約%&input{"type":"number","class":"days","max":"6","min":"1"}%天',
      '幾乎沒吃'
    ]),
    new Question('1-2', 'single', '午餐', [
      '都吃',
      '有吃一周約%&input{"type":"number","class":"days","max":"6","min":"1"}%天',
      '幾乎沒吃'
    ]),
    new Question('1-3', 'single', '晚餐', [
      '都吃',
      '有吃一周約%&input{"type":"number","class":"days","max":"6","min":"1"}%天',
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
      '有吃一周約%&input{"type":"number","class":"days","max":"6","min":"1"}%天',
      '幾乎沒吃'
    ]),
    new Question('2-2', 'single', '午餐', [
      '都吃',
      '有吃一周約%&input{"type":"number","class":"days","max":"6","min":"1"}%天',
      '幾乎沒吃'
    ]),
    new Question('2-3', 'single', '晚餐', [
      '都吃',
      '有吃一周約%&input{"type":"number","class":"days","max":"6","min":"1"}%天',
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
  ageArea: [AgeGroup.ELEMENTARY, AgeGroup.JUNIOR_HIGH, AgeGroup.HIGH_SCHOOL, AgeGroup.COLLEGE],
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
const q5: BigQ = {
  /**
   * 題號
   */
  idx: '5',
  label: '兒少感到困擾時通常會和誰討論？ 【可複選】',
  ageArea: [AgeGroup.ELEMENTARY, AgeGroup.JUNIOR_HIGH, AgeGroup.HIGH_SCHOOL, AgeGroup.COLLEGE],
  questions: [
    new Question('5-1', 'multiple', '', [
      '父母親',
      '同學朋友',
      '兄弟姊妹',
      '老師',
      '網友',
      '社工',
      '專業輔導人員',
      '不跟任何人談',
      '宗教團體',
      '親戚',
      '男/女朋友',
      '其他(請說明)%&input%'
    ])
  ]
}
const q6: BigQ = {
  /**
   * 題號
   */
  idx: '6',
  label:
    '兒少現在或過去一年內出現顯著負向情緒或想法，並致使行為改變（ex: 變得頻頻哭泣、鬱鬱寡歡、足不出戶、用文字/語言表達自憐、不接觸人群、產生偷竊行為等）',
  ageArea: [
    AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [new Question('6-1', 'single', '', ['有', '無'])]
}
const q7: BigQ = {
  /**
   * 題號
   */
  idx: '7',
  label: '兒童目前實際托育安排【可複選】',
  ageArea: [AgeGroup.PRESCHOOL],
  questions: [new Question('7-1', 'multiple', '', ['有', '無'])]
}
const q8: BigQ = {
  /**
   * 題號
   */
  idx: '8',
  label: '兒少每天放學後的時間如何安排？【可複選】',
  ageArea: [
    AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('8-1', 'multiple', '', [
      '在家，有大人照顧',
      '在家，由未成年人照顧',
      '在家，沒有人照顧',
      '回宿舍/租屋處',
      '到父母/主要照顧者上班地方(含自家農地、自營店面等)',
      '協助父母/主要照顧者工作(含自家農地、自營店面等)',
      '到親戚/朋友/鄰居家',
      '送托育人員( 保母)',
      '參加校內課後照顧/課輔班或社團',
      '參加校外課後照顧/課輔、補習班、才藝班或安親班',
      '參加宗教活動',
      '實習',
      '夜間上課(夜校生)',
      '從事志願服務工作',
      '到圖書館念書',
      '和朋友在外玩',
      '打工',
      '未就學不適用',
      '其他(請說明)：%&input%'
    ])
  ]
}
const q9: BigQ = {
  /**
   * 題號
   */
  idx: '9',
  label: '兒少寒暑假如何安排？【可複選】',
  ageArea: [
    AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('9-1', 'multiple', '', [
      '在家，有大人照顧',
      '在家，由未成年人照顧',
      '在家，沒有人照顧',
      '到父母/主要照顧者上班地方(含自家農地、自營店面等)',
      '協助父母/主要照顧者工作(含自家農地、自營店面等)',
      '到親戚/朋友/鄰居家',
      '送托育人員(保母) /幼兒園',
      '參加校內寒/暑輔或社團',
      '參加校外課輔、補習班、才藝班或安親班',
      '參加校外營隊/活動( 例如：展望會、救國團、國內/外營隊等)',
      '參加宗教活動',
      '實習',
      '到國外遊學',
      '從事志願服務工作',
      '到圖書館念書',
      '和朋友在外玩',
      '打工',
      '未就學不適用',
      '其他(請說明)：%&input%'
    ])
  ]
}
const q10: BigQ = {
  /**
   * 題號
   */
  idx: '10',
  label: '兒少週末假日最常與父母/主要照顧者一起做那些休閒活動？【可複選】',
  ageArea: [
    AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('10-1', 'multiple', '', [
      '出外用餐',
      '線上/手機遊戲',
      '看電視/影片',
      '運動',
      '逛街(例如:逛夜市、逛賣場等)',
      '旅遊',
      '參加社區/部落活動',
      '參加宗教活動(例如:去教會)',
      '在家玩玩具',
      '去公園/戶外活動場所玩',
      '都沒有',
      '其他(請說明)：%&input%'
    ])
  ]
}
const q11: BigQ = {
  /**
   * 題號
   */
  idx: '11',
  label: '兒少是否有可以經常一起玩的朋友？',
  ageArea: [AgeGroup.ELEMENTARY, AgeGroup.JUNIOR_HIGH, AgeGroup.HIGH_SCHOOL, AgeGroup.COLLEGE],
  questions: [new Question('11-1', 'single', '', ['有(續答下題)', '沒有'])]
}
const q12: BigQ = {
  /**
   * 題號
   */
  idx: '12',
  label: '兒少最常和朋友一起做的事【可複選】',
  ageArea: [AgeGroup.ELEMENTARY, AgeGroup.JUNIOR_HIGH, AgeGroup.HIGH_SCHOOL, AgeGroup.COLLEGE],
  questions: [
    new Question(
      '12-1',
      'multiple',
      '',
      [
        '聊天',
        '看電視電影',
        '運動',
        '吃東西',
        '參加文藝活動',
        '逛街',
        '跳舞',
        '唱KTV',
        '參加公益性服務活動',
        '研習功課',
        '閱讀書報',
        '上網、Facebook、LINE',
        '郊遊/戶外活動',
        '參加演唱會或藝人簽唱會',
        '線上遊戲',
        '參加宗教活動',
        '其他(請說明)：%&input%'
      ],
      { idx: '11-1', ansIdx: '1' }
    )
  ]
}
const q13: BigQ = {
  /**
   * 題號
   */
  idx: '13',
  label: '兒少目前有無正在交往中的男 / 女朋友？',
  ageArea: [AgeGroup.ELEMENTARY, AgeGroup.JUNIOR_HIGH, AgeGroup.HIGH_SCHOOL, AgeGroup.COLLEGE],
  questions: [new Question('13-1', 'single', '', ['有(續答下題)', '沒有'])]
}
const q14: BigQ = {
  /**
   * 題號
   */
  idx: '14',
  label: '14 兒少是否與交往中男/女朋友發生衝突？',
  ageArea: [AgeGroup.ELEMENTARY, AgeGroup.JUNIOR_HIGH, AgeGroup.HIGH_SCHOOL, AgeGroup.COLLEGE],
  questions: [
    new Question('14-1', 'single', '', ['從未', '很少', '有時候', '經常', '不確定'], {
      idx: '13-1',
      ansIdx: '1'
    })
  ]
}
const q15: BigQ = {
  /**
   * 題號
   */
  idx: '15',
  label: '兒童最常與誰一起遊戲？【可複選】',
  ageArea: [
    AgeGroup.PRESCHOOL
    // AgeGroup.ELEMENTARY,
    // AgeGroup.JUNIOR_HIGH,
    // AgeGroup.HIGH_SCHOOL,
    // AgeGroup.COLLEGE
  ],
  questions: [
    new Question('15-1', 'multiple', '', [
      '父母親',
      '兄弟姊妹',
      '幼兒園老師',
      '幼兒園同學',
      '托育人員( 保母) 或托嬰中心之托育人員、兒童',
      '親戚之小孩',
      '鄰居小孩',
      '自己獨自玩',
      '祖父母/ 外祖父母',
      '其他（請說明）：%&input%'
    ])
  ]
}

const q16: BigQ = {
  /**
   * 題號
   */
  idx: '16',
  label: '兒童常使用的遊戲設施為何？【可複選】',
  ageArea: [
    AgeGroup.PRESCHOOL
    // AgeGroup.ELEMENTARY,
    // AgeGroup.JUNIOR_HIGH,
    // AgeGroup.HIGH_SCHOOL,
    // AgeGroup.COLLEGE
  ],
  questions: [
    new Question('16-1', 'multiple', '', [
      '在住家內空間玩耍（客廳、餐廳或遊戲室）',
      '所居住之社區大樓公共設施',
      '在鄰近的公園、學校、幼兒園設施',
      '使用政府提供設施（婦幼館、兒福中心、托育資源中心、親子館)',
      '私人企業提供，但需付費（湯姆熊、健兒園）',
      '私人企業提供，不需任何花費（麥當勞、大賣場、百貨公司）',
      '部落活動中心',
      '教會廣場/球場',
      '其他(請說明)：%&input%'
    ])
  ]
}
const q17: BigQ = {
  /**
   * 題號
   */
  idx: '17',
  label: '兒少平均每天有多少時間從事休閒活動？',
  ageArea: [
    // AgeGroup.PRESCHOOL
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('17-1', 'single', '', [
      '幾乎不參與',
      '未滿2 小時 ',
      '2 至未滿4 小時',
      '4 至未滿6 小時',
      '6 至未滿8 小時 ',
      '8 小時以上'
    ])
  ]
}
const q18: BigQ = {
  /**
   * 題號
   */
  idx: '18',
  label: '兒少平均每天花多少時間上網？',
  ageArea: [
    AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('18-1', 'single', '', [
      '完全沒有',
      '未滿1 小時',
      '1 至未滿4 小時',
      '4 至未滿8 小時',
      '8 至未滿12 小時 ',
      '12 小時以上'
    ])
  ]
}
const q19: BigQ = {
  /**
   * 題號
   */
  idx: '19',
  label: '兒少最常使用3C 產品，如手機、平板電腦做什麼？【可複選】',
  ageArea: [
    AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('19-1', 'multiple', '', [
      '未使用3C產品',
      '上社群網站(例如FACEBOOK、Instagram)',
      '聽音樂',
      '拍照',
      '發送即時訊息(WECHAT、LINE、MESSENGER)',
      '查看MAIL ',
      ' 玩遊戲(含線上遊戲、App 下載的遊戲)',
      '看影片',
      '網路購物',
      '數位學習 ',
      '蒐尋資料( 含寫作業)',
      '看新聞 ',
      '線上預約及網路訂票',
      '查交通訊息/電子地圖服務',
      '電子書、漫畫、小說',
      '直播平台( 如17、UP 直播)',
      '唱歌(如全民party)',
      '其他，請說明%&input%'
    ])
  ]
}
const q20: BigQ = {
  /**
   * 題號
   */
  idx: '20',
  label: '兒少家中是否有下列物品或設施？【可複選】',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('20-1', 'multiple', '', [
      '書桌',
      '安靜的讀書空間',
      '檯燈',
      '參考書',
      '個人可使用的電腦/手機/平板',
      '家人共用的電腦/手機/平板',
      '家中有安裝網路(WIFI)',
      '家中網路需靠父母分享',
      '都沒有'
    ])
  ]
}
const q21: BigQ = {
  /**
   * 題號
   */
  idx: '21',
  label:
    '兒少「上學期期末成績」，有國、英、數（國小、國高中）／必修科目（專科大學）單科不及格的情形（ 60 分以下為不及格）',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL
    // AgeGroup.COLLEGE
  ],
  questions: [new Question('21-1', 'single', '', ['有', '沒有', '未就學不適用'])]
}

const q22: BigQ = {
  /**
   * 題號
   */
  idx: '22',
  label: '兒少平均每天課後花多少時間在家自主學習（包括做作業、複習功課、準備學校考試等）？',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    // AgeGroup.COLLEGE
  ],
  questions: [
    new Question('22-1', 'single', '', [
      '完全沒有',
      '0~未滿1小時',
      '1~未滿2小時',
      '2~未滿3小時',
      '3~未滿4小時',
      '4小時以上',
      '未就學不適用'
    ])
  ]
}
const q23: BigQ = {
  /**
   * 題號
   */
  idx: '23',
  label: '承上題，兒少在家自主學習若遇到困難會向誰尋求協助？【可複選】',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL
    // AgeGroup.COLLEGE
  ],
  questions: [
    new Question('23-1', 'multiple', '', [
      '父母',
      '兄弟姊妹',
      '其他同住家人',
      '學校老師',
      '學校同學',
      '補習班/安親班/課輔班老師 ',
      '補習班/安親班/課輔班同學',
      '社工',
      '朋友',
      '鄰居',
      '自己上網找資料',
      '其他，請說明%&input%'
    ])
  ]
}

const q24: BigQ = {
  /**
   * 題號
   */
  idx: '24',
  label: '兒少的生活費主要來源為何？【可複選】',
  ageArea: [
    AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('24-1', 'multiple', '', [
      '父母親或家人供給',
      '自己工作所得',
      '補助收入（包括政府、民間團體等補助）',
      '獎學金（含校內/外獎學金、運動競賽獎金等）',
      '其他，請說明%&input%'
    ])
  ]
}

const q25: BigQ = {
  /**
   * 題號
   */
  idx: '25',
  label: '兒少平均每個月的零用錢大約多少：',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('25-1', 'single', '', [
      '完全沒有',
      '1-499 元',
      '500-999 元',
      '1,000-1,999 元',
      '2,000-2,999 元',
      '3,000-3,999 元',
      '4,000-4,999 元',
      '5,000 元以上'
    ])
  ]
}

const q26: BigQ = {
  /**
   * 題號
   */
  idx: '26',
  label: '兒少平常如何運用零用錢（不含三餐及交通費開銷）？【可複選】',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('26-1', 'multiple', '', [
      '無零用錢',
      '購買學用品',
      '購買書籍',
      '購買三C用品',
      '用於休閒娛樂',
      '吃零食喝飲料',
      '購買衣服、鞋子、飾品等',
      '上網、手機通話費用',
      '社交用途',
      '儲蓄',
      '其他，請說明%&input%'
    ])
  ]
}

const q27: BigQ = {
  /**
   * 題號
   */
  idx: '27',
  label: '兒少現在有工作嗎（含打工、建教合作等）：',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    // AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [new Question('27-1', 'single', '', ['有（續答下面5題）', '沒有'])]
}

const q28: BigQ = {
  /**
   * 題號
   */
  idx: '28',
  label: '兒少的工作型態？【可複選】',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    // AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question(
      '28-1',
      'multiple',
      '',
      [
        '全職工作',
        '學期中課餘時間打工',
        '寒暑假打工',
        '無固定上班時間',
        '建教合作',
        '其他，請說明%&input%'
      ],
      { idx: '27-1', ansIdx: '1' }
    )
  ]
}
const q29: BigQ = {
  /**
   * 題號
   */
  idx: '29',
  label: '兒少現在的工作內容類別？【可複選】',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    // AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question(
      '29-1',
      'multiple',
      '',
      [
        '行政類（如：文書處理、總機等',
        '服務類（如：收銀員、接待、加油站、餐飲等',
        '勞務類（如：體力工、清潔工、農林漁牧類工作等',
        '教學類（如：家教、補習班老師等',
        '其他 ( 請說明 )%&input%'
      ],
      { idx: '27-1', ansIdx: '1' }
    )
  ]
}

const q30: BigQ = {
  /**
   * 題號
   */
  idx: '30',
  label: '兒少現在平均每周的工作時數：',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    // AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question(
      '30-1',
      'single',
      '',
      ['10小時以下', '10-20小時', '20-30小時', '30-40小時', '40小時以上'],
      { idx: '27-1', ansIdx: '1' }
    )
  ]
}
const q31: BigQ = {
  /**
   * 題號
   */
  idx: '31',
  label: '兒少現在平均每小時的工資：',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    // AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('31-1', 'single', '', ['%&input{"type": "number"}%元'], {
      idx: '27-1',
      ansIdx: '1'
    })
  ]
}
const q32: BigQ = {
  /**
   * 題號
   * */
  idx: '32',
  label: '兒少現在工作的原因是什麼？【可複選】',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    // AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question(
      '32-1',
      'multiple',
      '',
      [
        '貼補家用',
        '用在學雜費',
        '用於生活上的基本開銷(食宿、交通等)',
        '買自己想要的東西',
        '做自己想做的事',
        '儲蓄',
        '增加社會經驗',
        '其他(請說明)%&input%'
      ],
      { idx: '27-1', ansIdx: '1' }
    )
  ]
}

const q33: BigQ = {
  /**
   * 題號
   */
  idx: '33',
  label: '兒少現在希望最高讀到哪一個教育階段：',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('33-1', 'single', '', [
      '國中畢業',
      '高中或高職畢業',
      '專科畢業',
      '大學或技術學院畢業',
      '碩士畢業',
      '博士畢業',
      '不知道',
      '其他(請說明)%&input%'
    ])
  ]
}
const q34: BigQ = {
  /**
   * 題號
   */
  idx: '34',
  label: '承上題,—為達成上述期望,—兒少目前「缺乏」哪些資源協助【可複選】',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('34-1', 'multiple', '', [
      '學費補助',
      '學用品補助',
      '安靜的學習空間',
      '課業輔導',
      '生涯規劃諮詢',
      '數位工具(例如電腦/平板/手機/網路等)',
      '以上皆不需要',
      '其他(請說明)%&input%'
    ])
  ]
}
const q35: BigQ = {
  /**
   * 題號
   */
  idx: '35',
  label: '兒少將來最想從事那些類型的職業？【可複選】',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    // AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('35-1', 'multiple', '', [
      '教師',
      '工程師',
      '建築/室內設計師',
      '司法官/律師',
      '會計/保險/財務管理人員',
      '醫護人員',
      '社工',
      '記者',
      '導遊/領隊',
      '美髮師/彩妝師/造型師',
      '廚師/烘焙/西點師傅',
      '維修員/技師',
      '物流/運輸業從業人員',
      '演藝人員/網紅/模特兒/直播主',
      '運動員/教練/選手',
      '軍人/警察/消防人員',
      '公務員',
      '百貨專櫃/賣場/便利商店等服務人員',
      '政治人物',
      '藝文工作者(音樂家、舞蹈家等)',
      '宗教從業人員(例如：牧師)',
      '不知道',
      '其他(請說明)%&input%'
    ])
  ]
}
const q36: BigQ = {
  /**
   * 題號
   */
  idx: '36',
  label: '兒少目前「缺乏」哪些資源協助：【可複選】',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    // AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question('36-1', 'multiple', '', [
      '學費/生活費用補助',
      '證照考試輔導',
      '生/職涯規劃諮詢',
      '求職相關知能指導',
      '職場體驗機會(如參訪、見習、實習等)',
      '以上皆不需要',
      '其他(請說明)%&input%'
    ])
  ]
}
const q37: BigQ = {
  /**
   * 題號
   */
  idx: '37',
  label: '兒少畢業後是否繼續升學：',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    // AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [new Question('37-1', 'single', '', ['是', '否(續答下題)', '尚未決定(續答下題)'])]
}
const q38: BigQ = {
  /**
   * 題號
   */
  idx: '38',
  label: '兒少不繼續升學/尚未決定是否升學最主要的原因：',
  ageArea: [
    // AgeGroup.PRESCHOOL,
    // AgeGroup.ELEMENTARY,
    AgeGroup.JUNIOR_HIGH,
    AgeGroup.HIGH_SCHOOL,
    AgeGroup.COLLEGE
  ],
  questions: [
    new Question(
      '38-1',
      'single',
      '',
      [
        '經濟因素',
        '健康因素',
        '對念書沒有興趣',
        '不知道自己要讀甚麼樣的學校/科系',
        '想先出社會累積經驗',
        '現正就讀大專，無意升學就讀研究所',
        '其他(請說明)%&input%'
      ],
      { idx: '37-1', ansIdx: ['2', '3'] }
    )
  ]
}

export const allQ: BigQ[] = [
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10,
  q11,
  q12,
  q13,
  q14,
  q15,
  q16,
  q17,
  q18,
  q19,
  q20,
  q21,
  q22,
  q23,
  q24,
  q25,
  q26,
  q27,
  q28,
  q29,
  q30,
  q31,
  q32,
  q33,
  q34,
  q35,
  q36,
  q37,
  q38
]
