import {
  FoodImg1,
  FoodImg21,
  FoodImg22,
  FoodImg3,
  FoodImg4,
  FoodImg5,
  FoodImg6,
  FoodImg71,
  FoodImg72,
  FoodImg73,
  FoodImg81,
  FoodImg82,
  FoodImg83,
  FoodImg9,
  FoodImg10,
} from "../assets/img/importImg";
export const RestaurantInfo = [
  {
    id: crypto.randomUUID(),
    rstrName: "美天餐室",
    rstrLoc: "台北市中山區中山北路二段84巷6號1樓",
    rstrImg: { img1: FoodImg21, img2: FoodImg22 },
    category: "中式",
    rstrTime: {
      weekday: "週一~週五 12:00 - 15:00 & 17:00 - 20:00",
      weekend: "週六&日 12:00 - 21:00",
    },
    rstrPhone: "(02) 2521-6482",
    foods: {
      food1: {
        foodName: "泰味豬肉炒公仔麵",
        foodScore: "3.5",
        foodCmt: `是一道鹹味十足的炒泡麵，吃得當下回想到園遊會常出現的炒泡麵，不過園遊會的當然比不上這裡的，味道很夠，不過單吃炒泡麵的情況下沒有感受到什麼"泰味"，估計旁邊的醬料是泰味的精隨，醬料有點酸酸的感覺，聞起來有股難以形容的味道，不過個人不愛，所以可惜沒體驗到泰味的部分，雖然沒有泰味但也還行。`,
      },
      food2: {
        foodName: "oreo西多士 $120",
        foodScore: "3.5",
        foodCmt: `oreo粉把西多士整個蓋住，吐司滿軟嫩的，看到灑滿的oreo粉原本還怕太甜，但意外地不會，甜度剛剛好(飲料喝半糖或微堂的人應該能接受)，雖然好吃但記憶點不大(華嫂和華興比較讓我印象深刻)，另外有一個小缺點是甜點不能後上，所以當天變成甜點主餐反著吃的情形😅。`,
      },
    },
  },
  {
    id: crypto.randomUUID(),
    rstrName: "CAFE ACME",
    rstrLoc: "台北市信義區信義路五段150巷11弄1號",
    rstrImg: { img1: FoodImg1 },
    category: "下午茶",
    rstrTime: {
      same: "10:00 - 18:00 (週一休息)",
    },
    rstrPhone: "(02) 6617 - 7557",
    foods: {
      food1: {
        foodName: "松露嫩蛋三明治 $180",
        foodScore: "4.1",
        foodCmt: `吐司的外皮與吐司邊烤的微酥，加上誠意滿滿的松露塞滿在三明治夾層內，用刀切開時可以看到滿滿的松露傾瀉而出，松露的香味與蛋香還有帶著外酥內軟的吐司，真的是有夠讚！🤤`,
      },
      food2: { foodName: "拿鐵 $130" },
    },
  },
  {
    id: crypto.randomUUID(),
    rstrName: "Okaeri拉麵",
    rstrLoc: "台北市大安區延吉街60號",
    rstrImg: { img1: FoodImg4 },
    category: "日式",
    rstrTime: { same: "11:30 - 15:00 & 17:30 - 21:00 (週一、二休息)" },
    rstrPhone: "(02) 8772-7832",
    foods: {
      food1: {
        foodName: "黑蒜豚骨拉麵 $320",
        foodScore: "4.5",
        foodCmt: `如果要用三個字形容這碗拉麵，那就是"濃醇香"，湯頭充斥著豚骨和蒜頭的香味與濃郁的口感，麵條(選擇細麵)的軟硬剛剛好，帶有些微的嚼勁，叉燒共有三種，分別為油花比較多的五花肉、煙燻梅花肉以及網格炙燒的里肌肉，三種肉的口感皆不同，為整碗麵增添了層次，絕對值得回訪，喜歡豚骨湯頭的人必愛🥰。`,
      },
      food2: {
        foodName: "白飯 $20",
        foodScore: "4.1",
        foodCmt: `米飯粒粒分明，不會太濕也不會太乾，淋上濃郁的湯頭一起食用可說是絕妙的享受。`,
      },
    },
  },
  {
    id: crypto.randomUUID(),
    rstrName: "woosa洋食",
    rstrLoc: "台北市大同區承德路一段1號京站時尚廣場二樓",
    rstrImg: { img1: FoodImg5 },
    category: "下午茶",
    rstrTime: { same: "11:00-21:30" },
    rstrPhone: "(02) 2559-4846",
    foods: {
      food1: {
        foodName: "新鮮草莓冰淇淋鬆餅 $330",
        foodScore: "4.0",
        foodCmt: `再次來訪到我的舒芙蕾愛店，估計已經來訪快10次有了，舒芙蕾本體亦如往常的鬆軟綿密，入口即可感受到其融化並散布在嘴中，一旁的草莓鮮甜帶點酸味，被草莓藏住的草莓冰淇淋也好吃，草莓位挺重的，不過這次來訪覺得舒芙蕾的份量感覺縮水了，有些難過。`,
      },
    },
  },
  {
    id: crypto.randomUUID(),
    rstrName: "野菜家",
    rstrLoc: "台北市中山區林森北路119巷74號",
    rstrImg: { img1: FoodImg71, img2: FoodImg72, img3: FoodImg73 },
    category: "日式",
    rstrTime: {
      weekday: "週一～週六18:00 - 01:00",
      weekend: "週日 18:00 - 22:00",
    },
    rstrPhone: "(02) 2541-9068",
    foods: {
      food1: {
        foodName: "西班牙式烤蝦子 $280",
        foodScore: " 5.0",
        foodCmt: `最滿意的一道，蝦肉扎實還會有點彈牙，味道上更是讓人無可挑惕的香，一旁的麵包烤的脆脆的，沾著充滿蒜片與泡著蝦的橄欖油吃真的只能用一個字形容，超級爽🤣，雖然知道吃起來有點油，但還是無法停止手將食物送入嘴中。`,
      },
      food2: {
        foodName: "和風雞肉漢堡排 $280",
        foodScore: "4.0",
        foodCmt: `雞肉漢堡排切開時還可以看到肉汁流出，肉的口感很嫩，沾點日式醬油吃讓味道更香，一旁還附點沙拉和蘿蔔泥可以配著吃，讓整道吃完給人清爽的感覺。`,
      },
      food3: {
        foodName: "和風炸雞 $180",
        foodScore: "4.1",
        foodCmt: `炸雞非常的單純，就是好吃，無論是口感上的軟嫩，或是外皮的酥脆都很讚，一旁的美乃滋還可以減少炸雞帶來的油膩感，也讓炸雞的味道更豐富。`,
      },
    },
  },
  {
    id: crypto.randomUUID(),
    rstrName: "FIKA FIKA CAFE",
    rstrLoc: "台北市信義區松仁路58號B3",
    rstrImg: { img1: FoodImg3 },
    category: "下午茶",
    rstrTime: {
      weekday: "週日~週四 11:00 - 21:30",
      weekend: " 週五~週六 11:00 - 22:00",
    },
    rstrPhone: "(02) 8789 - 0633",
    foods: {
      food1: {
        foodName: "Fika Fika 焦糖核桃肉桂捲 $200",
        foodScore: " 4.5",
        foodCmt: `熱騰騰的肉桂捲外層偏酥，屬於偏濕的肉桂捲，盤子內滿滿的醬，肉桂捲本體十分柔軟，上面還有附上數顆大大的堅果，配著吃很搭，肉桂香味非常足，份量也很足，雖說$200以肉桂捲來說應該算偏高，但考量到份量和品質很可以，會想回訪。`,
      },
      food2: {
        foodName: "拿鐵🧊 $150",
      },
    },
  },
  {
    id: crypto.randomUUID(),
    rstrName: "交易室 TRADERS' SOCIETY",
    rstrLoc: "台北市松山區市民大道四段15號1樓",
    rstrImg: { img1: FoodImg81, img2: FoodImg82, img3: FoodImg83 },
    category: "美式",
    rstrTime: { same: "19:00 - 02:00 (週一&二公休)" },
    rstrPhone: "(02) 2721-6077",
    foods: {
      food1: {
        foodName: "澳洲和牛牛舌漢堡 $560",
        foodScore: " 4.5",
        foodCmt: `漢堡麵包的外皮烤的有點酥，內部則是鬆軟的；肉的部分真的是太讚了，非常的柔軟，雖然厚厚的一塊，但是卻一點都不柴，是近期除了Lay Back外吃過最優的漢堡。`,
      },
      food2: {
        foodName: "黑松露脆薯 $200",
        foodScore: " 3.8",
        foodCmt: `首先份量很多超讚，部分薯條帶有微微的松露香氣，酥脆且厚實的口感，是好吃的薯條，不過比較適合多人吃，對兩個人來說可能有點多。`,
      },
      food3: {
        foodName: "松露滷肉飯 $220",
        foodScore: " 3.6",
        foodCmt: `期待最大的一道，不過表現卻沒有如想像中高，松露的香味並不重，雖說拌在一起厚和滷肉不會不搭調，但兩者有點在互相搶戲的感覺，好吃但表現不突出。`,
      },
    },
  },
  {
    id: crypto.randomUUID(),
    rstrName: "PASTAIO",
    rstrLoc: "台北市大安區光復南路290巷32號1樓",
    rstrImg: { img1: FoodImg9 },
    category: "義式",
    rstrTime: { same: "12:00 - 22:00" },
    rstrPhone: "0979163859",
    foods: {
      food1: {
        foodName: "經典肉醬 (水管麵) $320",
        foodScore: " 4.1",
        foodCmt: `本人不愛吃肉醬口味的義大利麵，依然覺得好吃，濃厚的肉醬麵淋在水管麵上，水管麵軟硬剛好，咬起來不會太爛，與螺旋麵不同，這道推薦給喜歡味道重一些的人。`,
      },
    },
  },
  {
    id: crypto.randomUUID(),
    rstrName: "Ariel lee 李氏 Cafe",
    rstrLoc: "台北市大安區忠孝東路四段205巷29弄7號",
    rstrImg: { img1: FoodImg6, img2: FoodImg10 },
    category: "義式",
    rstrTime: { same: "12:30-21:00" },
    rstrPhone: "(02) 8771 - 8006",
    foods: {
      food1: {
        foodName: "奶油青醬鮭魚麵 $280",
        foodScore: " 4.0",
        foodCmt: `是整餐我最推的一道，平常我其實不太會點青醬的，但這家的青醬好好吃，還帶有一點甜味，鮭魚肉也不會難咬～。`,
      },
      food2: {
        foodName: "培根火腿蛋奶麵 $280",
        foodScore: "4.3",
        foodCmt: `招牌人氣必點！首先一定要先把上面的蛋黃戳破🥓，濃郁的白醬配上生蛋黃，絕配😍也是醬汁收到剛剛好，完全不會膩！是少數能在咖啡廳吃到好吃的義大利麵🍝。`,
      },
    },
  },
];
