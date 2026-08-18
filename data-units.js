// Data Lengkap HAN YU 3 (汉语 第三册)
// 3 Unit - 15 Pelajaran (课)

const HAN_YU_3_UNITS = [
  {
    unitId: 1,
    unitTitle: "第一单元 (Unit 1): Waktu, Kalender & Cuaca",
    unitDesc: "Mempelajari tanggal, hari dalam seminggu, waktu/jam, cuaca, dan 4 musim di Beijing.",
    dinoMascot: "🦖 Rexy Si Penjelajah Waktu",
    lessons: [
      {
        id: 1,
        unitId: 1,
        title: "第一课 今天几月几日",
        titlePinyin: "Dì yī kè: Jīntiān jǐ yuè jǐ rì",
        titleId: "Pelajaran 1: Hari Ini Tanggal Berapa Bulan Berapa?",
        themeIcon: "📅",
        sentences: [
          { zh: "今天几月几日？", py: "Jīntiān jǐ yuè jǐ rì?", id: "Hari ini tanggal berapa bulan berapa?" },
          { zh: "今天一月一日。", py: "Jīntiān yī yuè yī rì.", id: "Hari ini tanggal 1 Januari." },
          { zh: "今天是元旦。", py: "Jīntiān shì Yuándàn.", id: "Hari ini adalah Tahun Baru Masehi." },
          { zh: "昨天是几月几日？", py: "Zuótiān shì jǐ yuè jǐ rì?", id: "Kemarin tanggal berapa bulan berapa?" },
          { zh: "昨天是十二月二十五日。", py: "Zuótiān shì shí'èr yuè èrshíwǔ rì.", id: "Kemarin tanggal 25 Desember." },
          { zh: "昨天是圣诞节。", py: "Zuótiān shì Shèngdàn Jié.", id: "Kemarin adalah Hari Natal." },
          { zh: "明天是几月几日？", py: "Míngtiān shì jǐ yuè jǐ rì?", id: "Besok tanggal berapa bulan berapa?" },
          { zh: "明天是十月一日。", py: "Míngtiān shì shí yuè yī rì.", id: "Besok tanggal 1 Oktober." },
          { zh: "明天是中国的国庆节。", py: "Míngtiān shì Zhōngguó de Guóqìng Jié.", id: "Besok adalah Hari Nasional Tiongkok." }
        ],
        readingText: {
          title: "今天几月几日",
          paragraphs: [
            {
              zh: "今天四月六日，假期结束了，学校开学了。",
              py: "Jīntiān sì yuè liù rì, jiàqī jiéshù le, xuéxiào kāi xué le.",
              id: "Hari ini tanggal 6 April, liburan telah usai, sekolah mulai masuk."
            },
            {
              zh: "去年，我上小学一年级。今年，我上二年级了，弟弟也上学了。",
              py: "Qùnián, wǒ shàng xiǎoxué yī niánjí. Jīnnián, wǒ shàng èr niánjí le, dìdi yě shàngxué le.",
              id: "Tahun lalu, saya duduk di kelas 1 SD. Tahun ini, saya sudah kelas 2, adik laki-laki juga mulai bersekolah."
            },
            {
              zh: "新学期，我们发了很多新书，我和弟弟都很高兴。",
              py: "Xīn xuéqī, wǒmen fā le hěn duō xīn shū, wǒ hé dìdi dōu hěn gāoxìng.",
              id: "Semester baru, kami dibagikan banyak buku baru, saya dan adik sangat gembira."
            }
          ]
        },
        dialogueActivity: {
          type: "game",
          title: "你知道这些日子是几月几日吗？",
          titleId: "Tahukah kamu tanggal berapa hari-hari ini?",
          items: [
            { zh: "劳动节", py: "Láodòng Jié", id: "Hari Buruh (5月1日)" },
            { zh: "元旦", py: "Yuándàn", id: "Tahun Baru Masehi (1月1日)" },
            { zh: "圣诞节", py: "Shèngdàn Jié", id: "Hari Natal (12月25日)" },
            { zh: "国庆节", py: "Guóqìng Jié", id: "Hari Nasional (10月1日)" }
          ]
        },
        vocabulary: [
          { zh: "月", py: "yuè", id: "bulan" },
          { zh: "日", py: "rì", id: "hari / tanggal" },
          { zh: "元旦", py: "Yuándàn", id: "Tahun Baru Masehi" },
          { zh: "昨天", py: "zuótiān", id: "kemarin" },
          { zh: "圣诞节", py: "Shèngdàn Jié", id: "Hari Natal" },
          { zh: "国庆节", py: "Guóqìng Jié", id: "Hari Nasional" },
          { zh: "假期", py: "jiàqī", id: "liburan" },
          { zh: "结束", py: "jiéshù", id: "selesai / berakhir" },
          { zh: "开学", py: "kāi xué", id: "mulai masuk sekolah" },
          { zh: "年", py: "nián", id: "tahun" },
          { zh: "去年", py: "qùnián", id: "tahun lalu" },
          { zh: "小学", py: "xiǎoxué", id: "sekolah dasar (SD)" },
          { zh: "学期", py: "xuéqī", id: "semester" },
          { zh: "发", py: "fā", id: "membagikan" }
        ]
      },
      {
        id: 2,
        unitId: 1,
        title: "第二课 明天星期一",
        titlePinyin: "Dì èr kè: Míngtiān xīngqīyī",
        titleId: "Pelajaran 2: Besok Hari Senin",
        themeIcon: "🗓️",
        sentences: [
          { zh: "今天星期几？", py: "Jīntiān xīngqījǐ?", id: "Hari ini hari apa?" },
          { zh: "明天星期几？", py: "Míngtiān xīngqījǐ?", id: "Besok hari apa?" },
          { zh: "后天星期几？", py: "Hòutiān xīngqījǐ?", id: "Lusa hari apa?" },
          { zh: "今天星期三。", py: "Jīntiān xīngqīsān.", id: "Hari ini hari Rabu." },
          { zh: "昨天星期二。", py: "Zuótiān xīngqī'èr.", id: "Kemarin hari Selasa." },
          { zh: "前天星期一。", py: "Qiántiān xīngqīyī.", id: "Kemarin lusa hari Senin." },
          { zh: "星期三有中文课。", py: "Xīngqīsān yǒu Zhōngwén kè.", id: "Hari Rabu ada pelajaran bahasa Mandarin." },
          { zh: "星期四有数学课。", py: "Xīngqīsì yǒu shùxué kè.", id: "Hari Kamis ada pelajaran matematika." },
          { zh: "星期五有美术课。", py: "Xīngqīwǔ yǒu měishù kè.", id: "Hari Jumat ada pelajaran kesenian/melukis." }
        ],
        readingText: {
          title: "明天星期一",
          paragraphs: [
            {
              zh: "星期天上午，妈妈问小明：“明天你有体育课吗？”",
              py: "Xīngqītiān shàngwǔ, māma wèn Xiǎomíng: “Míngtiān nǐ yǒu tǐyù kè ma?”",
              id: "Minggu pagi, ibu bertanya kepada Xiao Ming: “Besok kamu ada pelajaran olahraga?”"
            },
            {
              zh: "小明说：“明天是星期一，我们班有中文课和美术课，没有体育课。后天星期二，有体育课。”",
              py: "Xiǎomíng shuō: “Míngtiān shì xīngqīyī, wǒmen bān yǒu Zhōngwén kè hé měishù kè, méiyǒu tǐyù kè. Hòutiān xīngqī'èr, yǒu tǐyù kè.”",
              id: "Xiao Ming menjawab: “Besok hari Senin, kelas kami ada pelajaran Mandarin dan kesenian, tidak ada olahraga. Lusa hari Selasa baru ada pelajaran olahraga.”"
            }
          ]
        },
        vocabulary: [
          { zh: "星期", py: "xīngqī", id: "minggu / pekan" },
          { zh: "星期一", py: "xīngqīyī", id: "Senin" },
          { zh: "星期二", py: "xīngqī'èr", id: "Selasa" },
          { zh: "星期三", py: "xīngqīsān", id: "Rabu" },
          { zh: "星期四", py: "xīngqīsì", id: "Kamis" },
          { zh: "星期五", py: "xīngqīwǔ", id: "Jumat" },
          { zh: "星期六", py: "xīngqīliù", id: "Sabtu" },
          { zh: "星期天", py: "xīngqītiān", id: "Minggu" },
          { zh: "后天", py: "hòutiān", id: "lusa" },
          { zh: "前天", py: "qiántiān", id: "kemarin lusa" },
          { zh: "数学", py: "shùxué", id: "matematika" },
          { zh: "美术", py: "měishù", id: "seni rupa / melukis" },
          { zh: "上午", py: "shàngwǔ", id: "pagi menjelang siang" },
          { zh: "体育", py: "tǐyù", id: "olahraga" }
        ]
      },
      {
        id: 3,
        unitId: 1,
        title: "第三课 现在八点半",
        titlePinyin: "Dì sān kè: Xiànzài bā diǎn bàn",
        titleId: "Pelajaran 3: Sekarang Pukul Delapan Tiga Puluh",
        themeIcon: "⏰",
        sentences: [
          { zh: "现在几点？", py: "Xiànzài jǐ diǎn?", id: "Sekarang jam berapa?" },
          { zh: "现在八点。", py: "Xiànzài bā diǎn.", id: "Sekarang jam 8 tepat." },
          { zh: "现在十一点零五分。", py: "Xiànzài shíyī diǎn líng wǔ fēn.", id: "Sekarang jam 11 lewat 5 menit." },
          { zh: "现在十一点一刻。", py: "Xiànzài shíyī diǎn yī kè.", id: "Sekarang jam 11 lewat 15 menit (seperempat)." },
          { zh: "现在十一点半。", py: "Xiànzài shíyī diǎn bàn.", id: "Sekarang jam 11 lewat 30 menit (setengah 12)." },
          { zh: "现在差十分十二点。", py: "Xiànzài chà shí fēn shí'èr diǎn.", id: "Sekarang jam 12 kurang 10 menit." },
          { zh: "你几点洗澡？", py: "Nǐ jǐ diǎn xǐ zǎo?", id: "Kamu jam berapa mandi?" },
          { zh: "我早上七点十分洗澡。", py: "Wǒ zǎoshang qī diǎn shí fēn xǐ zǎo.", id: "Saya mandi jam 7 lewat 10 menit pagi." },
          { zh: "你几点睡觉？", py: "Nǐ jǐ diǎn shuì jiào?", id: "Kamu jam berapa tidur?" },
          { zh: "我晚上八点四十睡觉。", py: "Wǒ wǎnshang bā diǎn sìshí shuì jiào.", id: "Saya tidur jam 8 lewat 40 menit malam." }
        ],
        readingText: {
          title: "现在八点半",
          paragraphs: [
            {
              zh: "我早上七点十分起床，七点半吃早饭。",
              py: "Wǒ zǎoshang qī diǎn shí fēn qǐchuáng, qī diǎn bàn chī zǎofàn.",
              id: "Saya bangun pukul 7:10 pagi, pukul 7:30 sarapan pagi."
            },
            {
              zh: "差十分八点，我和弟弟一起去学校。我们八点半开始上课，中午十二点吃午饭。",
              py: "Chà shí fēn bā diǎn, wǒ hé dìdi yīqǐ qù xuéxiào. Wǒmen bā diǎn bàn kāishǐ shàngkè, zhōngwǔ shí'èr diǎn chī wǔfàn.",
              id: "Pukul 8 kurang 10, saya dan adik pergi ke sekolah bersama. Kami mulai belajar pukul 8:30, makan siang pukul 12:00."
            },
            {
              zh: "下午三点，我和弟弟一起回家。",
              py: "Xiàwǔ sān diǎn, wǒ hé dìdi yīqǐ huí jiā.",
              id: "Pukul 3 sore, saya dan adik pulang ke rumah bersama."
            }
          ]
        },
        vocabulary: [
          { zh: "现在", py: "xiànzài", id: "sekarang" },
          { zh: "点", py: "diǎn", id: "jam / pukul / titik" },
          { zh: "半", py: "bàn", id: "setengah (30 menit)" },
          { zh: "零", py: "líng", id: "nol" },
          { zh: "分", py: "fēn", id: "menit" },
          { zh: "刻", py: "kè", id: "seperempat jam (15 menit)" },
          { zh: "差", py: "chà", id: "kurang" },
          { zh: "洗澡", py: "xǐ zǎo", id: "mandi" },
          { zh: "睡觉", py: "shuì jiào", id: "tidur" },
          { zh: "起床", py: "qǐ chuáng", id: "bangun tidur" },
          { zh: "开始", py: "kāishǐ", id: "mulai" }
        ]
      },
      {
        id: 4,
        unitId: 1,
        title: "第四课 今天的天气怎么样",
        titlePinyin: "Dì sì kè: Jīntiān de tiānqì zěnmeyàng",
        titleId: "Pelajaran 4: Bagaimana Cuaca Hari Ini?",
        themeIcon: "⛅",
        sentences: [
          { zh: "今天的天气怎么样？", py: "Jīntiān de tiānqì zěnmeyàng?", id: "Bagaimana cuaca hari ini?" },
          { zh: "今天的天气非常好。", py: "Jīntiān de tiānqì fēicháng hǎo.", id: "Cuaca hari ini sangat baik." },
          { zh: "这条裙子怎么样？", py: "Zhè tiáo qúnzi zěnmeyàng?", id: "Bagaimana dengan rok ini?" },
          { zh: "这条裙子很好看。", py: "Zhè tiáo qúnzi hěn hǎokàn.", id: "Rok ini sangat bagus dipandang." },
          { zh: "这件衣服不大也不小，很合适。", py: "Zhè jiàn yīfu bù dà yě bù xiǎo, hěn héshì.", id: "Baju ini tidak terlalu besar dan tidak terlalu kecil, sangat pas." },
          { zh: "今天的天气不冷也不热，很舒服。", py: "Jīntiān de tiānqì bù lěng yě bù rè, hěn shūfu.", id: "Cuaca hari ini tidak dingin dan tidak panas, sangat nyaman." }
        ],
        readingText: {
          title: "今天的天气怎么样",
          paragraphs: [
            {
              zh: "中国一年有四个季节：春天、夏天、秋天和冬天。",
              py: "Zhōngguó yī nián yǒu sì gè jìjié: chūntiān, xiàtiān, qiūtiān hé dōngtiān.",
              id: "Tiongkok dalam setahun memiliki 4 musim: musim semi, musim panas, musim gugur, dan musim dingin."
            },
            {
              zh: "春天很暖和，夏天很热，秋天很凉快，冬天很冷。",
              py: "Chūntiān hěn nuǎnhuo, xiàtiān hěn rè, qiūtiān hěn liángkuai, dōngtiān hěn lěng.",
              id: "Musim semi sangat hangat, musim panas sangat panas, musim gugur sangat sejuk, musim dingin sangat dingin."
            },
            {
              zh: "现在是春天，天气很好，不冷也不热。",
              py: "Xiànzài shì chūntiān, tiānqì hěn hǎo, bù lěng yě bù rè.",
              id: "Sekarang adalah musim semi, cuacanya sangat bagus, tidak dingin dan tidak panas."
            }
          ]
        },
        vocabulary: [
          { zh: "怎么样", py: "zěnmeyàng", id: "bagaimana" },
          { zh: "合适", py: "héshì", id: "cocok / pas" },
          { zh: "冷", py: "lěng", id: "dingin" },
          { zh: "热", py: "rè", id: "panas" },
          { zh: "舒服", py: "shūfu", id: "nyaman" },
          { zh: "季节", py: "jìjié", id: "musim" },
          { zh: "春天", py: "chūntiān", id: "musim semi" },
          { zh: "夏天", py: "xiàtiān", id: "musim panas" },
          { zh: "秋天", py: "qiūtiān", id: "musim gugur" },
          { zh: "冬天", py: "dōngtiān", id: "musim dingin" },
          { zh: "暖和", py: "nuǎnhuo", id: "hangat" },
          { zh: "凉快", py: "liángkuai", id: "sejuk" }
        ]
      },
      {
        id: 5,
        unitId: 1,
        title: "第五课 北京的四季",
        titlePinyin: "Dì wǔ kè: Běijīng de sìjì",
        titleId: "Pelajaran 5: Empat Musim di Beijing",
        themeIcon: "🍁",
        readingText: {
          title: "北京的四季",
          paragraphs: [
            {
              zh: "北京是中国的首都，它是一个美丽的城市。",
              py: "Běijīng shì Zhōngguó de shǒudū, tā shì yí gè měilì de chéngshì.",
              id: "Beijing adalah ibu kota Tiongkok, ia adalah sebuah kota yang indah."
            },
            {
              zh: "那儿有四个季节：三月、四月、五月是春天；六月、七月、八月是夏天；九月、十月、十一月是秋天；十二月、一月、二月是冬天。",
              py: "Nàr yǒu sì gè jìjié: sān yuè, sì yuè, wǔ yuè shì chūntiān; liù yuè, qī yuè, bā yuè shì xiàtiān; jiǔ yuè, shí yuè, shíyī yuè shì qiūtiān; shí'èr yuè, yī yuè, èr yuè shì dōngtiān.",
              id: "Di sana ada 4 musim: Maret, April, Mei adalah musim semi; Juni, Juli, Agustus adalah musim panas; September, Oktober, November adalah musim gugur; Desember, Januari, Februari adalah musim dingin."
            },
            {
              zh: "北京的春天常常刮风。夏天非常热。秋天很凉快，不冷也不热。冬天很冷，有时候下雪。",
              py: "Běijīng de chūntiān chángcháng guā fēng. Xiàtiān fēicháng rè. Qiūtiān hěn liángkuai, bù lěng yě bù rè. Dōngtiān hěn lěng, yǒu shíhou xià xuě.",
              id: "Musim semi di Beijing sering berangin. Musim panas sangat panas. Musim gugur sangat sejuk, tidak dingin dan tidak panas. Musim dingin sangat dingin, kadang-kadang turun salju."
            }
          ]
        },
        dialogueActivity: {
          type: "dialogue",
          title: "说一说 (Percakapan)",
          sentences: [
            { role: "小玲", zh: "小华，你的生日是几月几号？", py: "Xiǎohuá, nǐ de shēngrì shì jǐ yuè jǐ hào?", id: "Xiao Hua, ulang tahunmu tanggal berapa bulan berapa?" },
            { role: "小华", zh: "五月六号。", py: "Wǔ yuè liù hào.", id: "Tanggal 6 Mei." },
            { role: "小玲", zh: "今天是五月五号，明天就是你的生日！", py: "Jīntiān shì wǔ yuè wǔ hào, míngtiān jiù shì nǐ de shēngrì!", id: "Hari ini tanggal 5 Mei, besok adalah hari ulang tahunmu!" },
            { role: "小华", zh: "是啊！姐姐，明天和我一起去游乐场，好吗？", py: "Shì a! Jiějie, míngtiān hé wǒ yīqǐ qù yóulèchǎng, hǎo ma?", id: "Iya! Kakak, besok pergi ke taman hiburan bersamaku, mau ya?" },
            { role: "小玲", zh: "好啊！几点去？", py: "Hǎo a! Jǐ diǎn qù?", id: "Boleh! Jam berapa perginya?" },
            { role: "小华", zh: "九点半怎么样？", py: "Jiǔ diǎn bàn zěnmeyàng?", id: "Pukul 9:30 bagaimana?" },
            { role: "小玲", zh: "好的！", py: "Hǎo de!", id: "Baiklah!" }
          ]
        },
        vocabulary: [
          { zh: "首都", py: "shǒudū", id: "ibu kota" },
          { zh: "美丽", py: "měilì", id: "indah / cantik" },
          { zh: "城市", py: "chéngshì", id: "kota" },
          { zh: "刮", py: "guā", id: "bertiup / berhembus (angin)" },
          { zh: "有时候", py: "yǒu shíhou", id: "kadang-kadang" },
          { zh: "下", py: "xià", id: "turun (hujan/salju)" },
          { zh: "雪", py: "xuě", id: "salju" },
          { zh: "生日", py: "shēngrì", id: "ulang tahun" },
          { zh: "号", py: "hào", id: "tanggal / nomor" },
          { zh: "就", py: "jiù", id: "maka / langsung" },
          { zh: "北京", py: "Běijīng", id: "Beijing" }
        ]
      }
    ]
  },
  {
    unitId: 2,
    unitTitle: "第二单元 (Unit 2): Pelajaran, Hadiah & Kegemaran",
    unitDesc: "Mempelajari aktivitas sekolah, memberi hadiah, masakan lezat, hobi, dan pesta ulang tahun.",
    dinoMascot: "🦕 Bronto Si Penjelajah Kata",
    lessons: [
      {
        id: 6,
        unitId: 2,
        title: "第六课 陈老师教我们中文课",
        titlePinyin: "Dì liù kè: Chén lǎoshī jiāo wǒmen Zhōngwén kè",
        titleId: "Pelajaran 6: Guru Chen Mengajar Pelajaran Mandarin Kami",
        themeIcon: "👨‍🏫",
        sentences: [
          { zh: "爸爸教弟弟书法。", py: "Bàba jiāo dìdi shūfǎ.", id: "Ayah mengajari adik kaligrafi." },
          { zh: "妈妈教妹妹中文歌。", py: "Māma jiāo mèimei Zhōngwén gē.", id: "Ibu mengajari adik perempuan lagu Mandarin." },
          { zh: "体育老师教我们中国功夫。", py: "Tǐyù lǎoshī jiāo wǒmen Zhōngguó gōngfu.", id: "Guru olahraga mengajari kami kungfu Tiongkok." },
          { zh: "叔叔常上网，还常看电视。", py: "Shūshu cháng shàngwǎng, hái cháng kàn diànshì.", id: "Paman sering berinternet, juga sering menonton TV." },
          { zh: "箱子里有一些衣服，还有一些日用品。", py: "Xiāngzi lǐ yǒu yīxiē yīfu, hái yǒu yīxiē rìyòngpǐn.", id: "Di dalam koper ada sejumlah pakaian, juga ada sejumlah kebutuhan harian." },
          { zh: "妹妹喜欢甜的，还喜欢酸的。", py: "Mèimei xǐhuan tián de, hái xǐhuan suān de.", id: "Adik perempuan suka yang manis, juga suka yang masam." }
        ],
        readingText: {
          title: "陈老师教我们中文课",
          paragraphs: [
            {
              zh: "这学期，陈老师教我们中文课，李老师教我们音乐课。",
              py: "Zhè xuéqī, Chén lǎoshī jiāo wǒmen Zhōngwén kè, Lǐ lǎoshī jiāo wǒmen yīnyuè kè.",
              id: "Semester ini, Guru Chen mengajari kami pelajaran Mandarin, Guru Li mengajari kami pelajaran musik."
            },
            {
              zh: "今天星期一，上午我们班有中文课。陈老师教我们生词，还教我们句子和课文。",
              py: "Jīntiān xīngqīyī, shàngwǔ wǒmen bān yǒu Zhōngwén kè. Chén lǎoshī jiāo wǒmen shēngcí, hái jiāo wǒmen jùzi hé kèwén.",
              id: "Hari ini Senin, pagi hari kelas kami ada pelajaran Mandarin. Guru Chen mengajari kami kosakata baru, juga kalimat dan teks bacaan."
            },
            {
              zh: "下午我们有音乐课，李老师教我们中文歌。大家都很开心。",
              py: "Xiàwǔ wǒmen yǒu yīnyuè kè, Lǐ lǎoshī jiāo wǒmen Zhōngwén gē. Dàjiā dōu hěn kāixīn.",
              id: "Sore hari kami ada pelajaran musik, Guru Li mengajari kami lagu Mandarin. Semua orang sangat gembira."
            }
          ]
        },
        poemActivity: {
          title: "月之故乡 (Kampung Halaman Rembulan)",
          lines: [
            { zh: "天上一个月亮，水里一个月亮，", py: "Tiān shang yí gè yuèliang, shuǐ li yí gè yuèliang," },
            { zh: "一个在水里，一个在天上。", py: "Yí gè zài shuǐ li, yí gè zài tiān shang." },
            { zh: "低头看水里，抬头看天上，", py: "Dī tóu kàn shuǐ li, tái tóu kàn tiān shang," },
            { zh: "看月亮，思故乡，", py: "Kàn yuèliang, sī gùxiāng," },
            { zh: "一个在水里，一个在天上。", py: "Yí gè zài shuǐ li, yí gè zài tiān shang." }
          ]
        },
        vocabulary: [
          { zh: "书法", py: "shūfǎ", id: "kaligrafi" },
          { zh: "功夫", py: "gōngfu", id: "kungfu" },
          { zh: "上网", py: "shàng wǎng", id: "berselancar di internet" },
          { zh: "还", py: "hái", id: "masih / juga" },
          { zh: "箱子", py: "xiāngzi", id: "koper / peti" },
          { zh: "日用品", py: "rìyòngpǐn", id: "keperluan sehari-hari" },
          { zh: "甜", py: "tián", id: "manis" },
          { zh: "酸", py: "suān", id: "asam / masam" },
          { zh: "音乐", py: "yīnyuè", id: "musik" },
          { zh: "生词", py: "shēngcí", id: "kosakata baru" },
          { zh: "句子", py: "jùzi", id: "kalimat" },
          { zh: "课文", py: "kèwén", id: "teks bacaan" },
          { zh: "大家", py: "dàjiā", id: "semua orang" },
          { zh: "开心", py: "kāixīn", id: "senang / gembira" }
        ]
      },
      {
        id: 7,
        unitId: 2,
        title: "第七课 我给妈妈一件礼物",
        titlePinyin: "Dì qī kè: Wǒ gěi māma yí jiàn lǐwù",
        titleId: "Pelajaran 7: Saya Memberi Ibu Sebuah Hadiah",
        themeIcon: "🎁",
        sentences: [
          { zh: "爸爸给妈妈一件礼物。", py: "Bàba gěi māma yí jiàn lǐwù.", id: "Ayah memberi ibu sebuah hadiah." },
          { zh: "我们给老师一束鲜花。", py: "Wǒmen gěi lǎoshī yí shù xiānhuā.", id: "Kami memberi guru seikat bunga segar." },
          { zh: "我问老师一个问题。", py: "Wǒ wèn lǎoshī yí gè wèntí.", id: "Saya menanyakan guru sebuah pertanyaan." },
          { zh: "他问我今天星期几。", py: "Tā wèn wǒ jīntiān xīngqījǐ.", id: "Dia bertanya kepada saya hari ini hari apa." },
          { zh: "他告诉我一个秘密。", py: "Tā gàosu wǒ yí gè mìmì.", id: "Dia memberitahu saya sebuah rahasia." },
          { zh: "姑姑告诉我一件事情。", py: "Gūgu gàosu wǒ yí jiàn shìqing.", id: "Bibi memberitahu saya suatu hal." }
        ],
        readingText: {
          title: "我给妈妈一件礼物",
          paragraphs: [
            {
              zh: "今天有中文课，老师教同学们三个汉字。",
              py: "Jīntiān yǒu Zhōngwén kè, lǎoshī jiāo tóngxuémen sān gè hànzì.",
              id: "Hari ini ada pelajaran Mandarin, guru mengajari teman-teman tiga karakter Hanzi."
            },
            {
              zh: "晚上，小明给妈妈一封信。他对妈妈说：“妈妈，这是我给您的礼物！”",
              py: "Wǎnshang, Xiǎomíng gěi māma yì fēng xìn. Tā duì māma shuō: “Māma, zhè shì wǒ gěi nín de lǐwù!”",
              id: "Malam hari, Xiao Ming memberi ibu sepucuk surat. Dia berkata kepada ibu: “Mama, ini hadiah dari saya untuk Ibu!”"
            },
            {
              zh: "信上有三个汉字：我爱你！",
              py: "Xìn shang yǒu sān gè hànzì: Wǒ ài nǐ!",
              id: "Di dalam surat ada tiga karakter Hanzi: Aku cinta padamu (我爱你)!"
            }
          ]
        },
        vocabulary: [
          { zh: "给", py: "gěi", id: "memberi" },
          { zh: "礼物", py: "lǐwù", id: "hadiah / kado" },
          { zh: "束", py: "shù", id: "ikat / buket" },
          { zh: "鲜花", py: "xiānhuā", id: "bunga segar" },
          { zh: "问题", py: "wèntí", id: "pertanyaan / masalah" },
          { zh: "告诉", py: "gàosu", id: "memberitahu" },
          { zh: "秘密", py: "mìmì", id: "rahasia" },
          { zh: "姑姑", py: "gūgu", id: "bibi (saudari ayah)" },
          { zh: "事情", py: "shìqing", id: "hal / urusan" },
          { zh: "封", py: "fēng", id: "pucuk (kata satuan surat)" },
          { zh: "信", py: "xìn", id: "surat" },
          { zh: "您", py: "nín", id: "Anda / Beliau (sopan)" }
        ]
      },
      {
        id: 8,
        unitId: 2,
        title: "第八课 奶奶请我们吃中国菜",
        titlePinyin: "Dì bā kè: Nǎinai qǐng wǒmen chī Zhōngguó cài",
        titleId: "Pelajaran 8: Nenek Mengundang Kami Makan Masakan Tiongkok",
        themeIcon: "🥟",
        sentences: [
          { zh: "爷爷教小华写汉字。", py: "Yéye jiāo Xiǎohuá xiě hànzì.", id: "Kakek mengajari Xiao Hua menulis Hanzi." },
          { zh: "李老师教我们唱歌。", py: "Lǐ lǎoshī jiāo wǒmen chàng gē.", id: "Guru Li mengajari kami bernyanyi." },
          { zh: "小玲请小华吃水果。", py: "Xiǎolíng qǐng Xiǎohuá chī shuǐguǒ.", id: "Xiao Ling mempersilakan Xiao Hua makan buah." },
          { zh: "姑姑请我们看杂技。", py: "Gūgu qǐng wǒmen kàn zájì.", id: "Bibi mentraktir kami menonton akrobat." },
          { zh: "老师让我回答问题。", py: "Lǎoshī ràng wǒ huídá wèntí.", id: "Guru menyuruh saya menjawab pertanyaan." },
          { zh: "妈妈让我洗袜子。", py: "Māma ràng wǒ xǐ wàzi.", id: "Ibu menyuruh saya mencuci kaos kaki." },
          { zh: "祝你生日快乐！", py: "Zhù nǐ shēngrì kuàilè!", id: "Selamat ulang tahun untukmu!" },
          { zh: "祝你中秋节快乐！", py: "Zhù nǐ Zhōngqiū Jié kuàilè!", id: "Selamat Hari Festival Musim Gugur!" },
          { zh: "祝你新年快乐！", py: "Zhù nǐ xīnnián kuàilè!", id: "Selamat Tahun Baru untukmu!" }
        ],
        readingText: {
          title: "奶奶请我们吃中国菜",
          paragraphs: [
            {
              zh: "今天中秋节，我们和奶奶一起过。",
              py: "Jīntiān Zhōngqiū Jié, wǒmen hé nǎinai yīqǐ guò.",
              id: "Hari ini Festival Musim Gugur, kami merayakannya bersama nenek."
            },
            {
              zh: "奶奶非常高兴，她请我们吃中国菜。妈妈和爸爸送给奶奶一盒茶叶，我和弟弟妹妹送给奶奶一条围巾。",
              py: "Nǎinai fēicháng gāoxìng, tā qǐng wǒmen chī Zhōngguó cài. Māma hé bàba sòng gěi nǎinai yì hé cháyè, wǒ hé dìdi mèimei sòng gěi nǎinai yì tiáo wéijīn.",
              id: "Nenek sangat senang, beliau mentraktir kami makan masakan Tiongkok. Ibu dan ayah menghadiahkan sekotak daun teh untuk nenek, saya dan adik-adik menghadiahkan sehelai syal."
            },
            {
              zh: "我们一起祝她中秋节快乐！",
              py: "Wǒmen yīqǐ zhù tā Zhōngqiū Jié kuàilè!",
              id: "Kami bersama-sama mengucapkan Selamat Festival Musim Gugur untuknya!"
            }
          ]
        },
        vocabulary: [
          { zh: "请", py: "qǐng", id: "silakan / mengundang / mentraktir" },
          { zh: "菜", py: "cài", id: "sayuran / hidangan / lauk" },
          { zh: "唱", py: "chàng", id: "bernyanyi" },
          { zh: "杂技", py: "zájì", id: "akrobat" },
          { zh: "让", py: "ràng", id: "menyuruh / membiarkan" },
          { zh: "洗", py: "xǐ", id: "mencuci" },
          { zh: "袜子", py: "wàzi", id: "kaos kaki" },
          { zh: "祝", py: "zhù", id: "mendoakan / selamat" },
          { zh: "快乐", py: "kuàilè", id: "gembira / bahagia" },
          { zh: "中秋节", py: "Zhōngqiū Jié", id: "Festival Musim Gugur (Kue Bulan)" },
          { zh: "新年", py: "xīnnián", id: "Tahun Baru" },
          { zh: "过", py: "guò", id: "merayakan / melewati" },
          { zh: "送", py: "sòng", id: "mengantar / menghadiahkan" },
          { zh: "茶叶", py: "cháyè", id: "daun teh" },
          { zh: "围巾", py: "wéijīn", id: "syal / selendang" }
        ]
      },
      {
        id: 9,
        unitId: 2,
        title: "第九课 小红喜欢看电影",
        titlePinyin: "Dì jiǔ kè: Xiǎohóng xǐhuan kàn diànyǐng",
        titleId: "Pelajaran 9: Xiao Hong Suka Menonton Film",
        themeIcon: "🎬",
        sentences: [
          { zh: "奶奶喜欢听京剧。", py: "Nǎinai xǐhuan tīng jīngjù.", id: "Nenek suka mendengarkan Opera Beijing." },
          { zh: "小强喜欢看电影。", py: "Xiǎoqiáng xǐhuan kàn diànyǐng.", id: "Xiao Qiang suka menonton film." },
          { zh: "姐姐爱唱歌。", py: "Jiějie ài chàng gē.", id: "Kakak perempuan gemar bernyanyi." },
          { zh: "弟弟爱吃糖。", py: "Dìdi ài chī táng.", id: "Adik laki-laki gemar makan permen." },
          { zh: "妹妹爱画画儿，不爱写字。", py: "Mèimei ài huà huàr, bú ài xiě zì.", id: "Adik perempuan gemar menggambar, tidak gemar menulis huruf." },
          { zh: "爷爷喜欢喝茶，不喜欢喝可乐。", py: "Yéye xǐhuan hē chá, bù xǐhuan hē kělè.", id: "Kakek suka minum teh, tidak suka minum kola." }
        ],
        readingText: {
          title: "小红喜欢看电影",
          paragraphs: [
            {
              zh: "小红喜欢看电影，她特别爱看中国电影，小华也喜欢看。",
              py: "Xiǎohóng xǐhuan kàn diànyǐng, tā tèbié ài kàn Zhōngguó diànyǐng, Xiǎohuá yě xǐhuan kàn.",
              id: "Xiao Hong suka menonton film, dia terutama gemar menonton film Tiongkok, Xiao Hua juga suka menonton."
            },
            {
              zh: "今天电影院演中国电影，听说很有意思。小红很高兴，她打算请小华一起去看电影。",
              py: "Jīntiān diànyǐngyuàn yǎn Zhōngguó diànyǐng, tīngshuō hěn yǒu yìsi. Xiǎohóng hěn gāoxìng, tā dǎsuàn qǐng Xiǎohuá yīqǐ qù kàn diànyǐng.",
              id: "Hari ini bioskop memutar film Tiongkok, kabarnya sangat menarik. Xiao Hong sangat senang, ia berencana mengajak Xiao Hua menonton film bersama."
            }
          ]
        },
        vocabulary: [
          { zh: "电影", py: "diànyǐng", id: "film" },
          { zh: "京剧", py: "jīngjù", id: "Opera Beijing" },
          { zh: "糖", py: "táng", id: "gula / permen" },
          { zh: "画", py: "huà", id: "melukis / gambar" },
          { zh: "画儿", py: "huàr", id: "lukisan / gambar" },
          { zh: "可乐", py: "kělè", id: "minuman kola" },
          { zh: "特别", py: "tèbié", id: "sangat / istimewa / spesial" },
          { zh: "电影院", py: "diànyǐngyuàn", id: "bioskop" },
          { zh: "演", py: "yǎn", id: "memutar / memainkan peran" },
          { zh: "听说", py: "tīngshuō", id: "kabarnya / dengar-dengar" },
          { zh: "有意思", py: "yǒu yìsi", id: "menarik" },
          { zh: "打算", py: "dǎsuàn", id: "berencana" }
        ]
      },
      {
        id: 10,
        unitId: 2,
        title: "第十课 祝你生日快乐",
        titlePinyin: "Dì shí kè: Zhù nǐ shēngrì kuàilè",
        titleId: "Pelajaran 10: Selamat Ulang Tahun Untukmu",
        themeIcon: "🎂",
        readingText: {
          title: "祝你生日快乐",
          paragraphs: [
            {
              zh: "小猫、小兔子和小山羊是好朋友。今天是小山羊的生日，他请朋友们吃饭。",
              py: "Xiǎomāo, xiǎo tùzi hé xiǎo shānyáng shì hǎo péngyou. Jīntiān shì xiǎo shānyáng de shēngrì, tā qǐng péngyoumen chīfàn.",
              id: "Kucing kecil, kelinci kecil, dan kambing kecil adalah sahabat baik. Hari ini ulang tahun kambing kecil, ia mengundang sahabat-sahabatnya makan."
            },
            {
              zh: "小猫爱吃鱼，小山羊给他准备了一条鱼。小兔子爱吃胡萝卜，小山羊给他准备了一个胡萝卜。",
              py: "Xiǎomāo ài chī yú, xiǎo shānyáng gěi tā zhǔnbèi le yì tiáo yú. Xiǎo tùzi ài chī húluóbo, xiǎo shānyáng gěi tā zhǔnbèi le yí gè húluóbo.",
              id: "Kucing kecil gemar makan ikan, kambing kecil menyiapkannya seekor ikan. Kelinci kecil gemar makan wortel, kambing kecil menyiapkannya sebatang wortel."
            },
            {
              zh: "小猫和小兔子送给小山羊一篮青菜，他们一起对他说：“祝你生日快乐！”",
              py: "Xiǎomāo hé xiǎo tùzi sòng gěi xiǎo shānyáng yì lán qīngcài, tāmen yīqǐ duì tā shuō: “Zhù nǐ shēngrì kuàilè!”",
              id: "Kucing kecil dan kelinci kecil menghadiahkan sekeranjang sayuran hijau untuk kambing kecil, mereka serentak berkata: “Selamat ulang tahun untukmu!”"
            }
          ]
        },
        dialogueActivity: {
          type: "dialogue",
          title: "说一说 (Dialog Perayaan)",
          sentences: [
            { role: "小山羊", zh: "今天是我的生日，我请朋友们吃饭。", py: "Jīntiān shì wǒ de shēngrì, wǒ qǐng péngyoumen chīfàn.", id: "Hari ini ulang tahunku, aku mentraktir teman-teman makan." },
            { role: "小猫", zh: "小山羊，小山羊，我来了！我送给你一篮青菜！", py: "Xiǎo shānyáng, xiǎo shānyáng, wǒ lái le! Wǒ sòng gěi nǐ yì lán qīngcài!", id: "Kambing kecil, aku datang! Aku menghadiahkanmu sekeranjang sayur!" },
            { role: "小山羊", zh: "啊，青菜！我爱吃青菜。谢谢！", py: "A, qīngcài! Wǒ ài chī qīngcài. Xièxie!", id: "Ah, sayuran! Aku suka makan sayur. Terima kasih!" },
            { role: "小兔子", zh: "小山羊，小山羊，我来了！我送给你一个胡萝卜！", py: "Xiǎo shānyáng, xiǎo shānyáng, wǒ lái le! Wǒ sòng gěi nǐ yí gè húluóbo!", id: "Kambing kecil, aku datang! Aku menghadiahkanmu sebuah wortel!" },
            { role: "小山羊", zh: "啊，胡萝卜！我也爱吃胡萝卜。谢谢你！", py: "A, húluóbo! Wǒ yě ài chī húluóbo. Xièxie nǐ!", id: "Ah, wortel! Aku juga suka makan wortel. Terima kasih!" },
            { role: "小猫小兔", zh: "祝你生日快乐！", py: "Zhù nǐ shēngrì kuàilè!", id: "Selamat ulang tahun untukmu!" }
          ]
        },
        vocabulary: [
          { zh: "兔子", py: "tùzi", id: "kelinci" },
          { zh: "山羊", py: "shānyáng", id: "kambing" },
          { zh: "鱼", py: "yú", id: "ikan" },
          { zh: "准备", py: "zhǔnbèi", id: "mempersiapkan" },
          { zh: "胡萝卜", py: "húluóbo", id: "wortel" },
          { zh: "篮", py: "lán", id: "keranjang" },
          { zh: "青菜", py: "qīngcài", id: "sayuran hijau" },
          { zh: "来", py: "lái", id: "datang" }
        ]
      }
    ]
  },
  {
    unitId: 3,
    unitTitle: "第三单元 (Unit 3): Pantai, Tamasya & Olahraga",
    unitDesc: "Mempelajari liburan di pantai, membantu orang tua, kebun binatang, olahraga taman, dan piknik alam.",
    dinoMascot: "🌴 Tricey Si Petualang Alam",
    lessons: [
      {
        id: 11,
        unitId: 3,
        title: "第十一课 我们在海边玩沙子",
        titlePinyin: "Dì shíyī kè: Wǒmen zài hǎibiān wán shāzi",
        titleId: "Pelajaran 11: Kami Bermain Pasir di Tepi Pantai",
        themeIcon: "🏖️",
        sentences: [
          { zh: "我们在海边玩沙子。", py: "Wǒmen zài hǎibiān wán shāzi.", id: "Kami bermain pasir di tepi pantai." },
          { zh: "哥哥在中国学汉语。", py: "Gēge zài Zhōngguó xué Hànyǔ.", id: "Kakak laki-laki belajar bahasa Mandarin di Tiongkok." },
          { zh: "你爸爸在哪儿工作？", py: "Nǐ bàba zài nǎr gōngzuò?", id: "Di mana ayahmu bekerja?" },
          { zh: "你妹妹在哪儿上学？", py: "Nǐ mèimei zài nǎr shàngxué?", id: "Di mana adik perempuanmu bersekolah?" },
          { zh: "中国菜好吃极了！", py: "Zhōngguó cài hǎochī jí le!", id: "Masakan Tiongkok enak sekali!" },
          { zh: "这幅画儿好看极了！", py: "Zhè fú huàr hǎokàn jí le!", id: "Lukisan ini indah sekali!" },
          { zh: "爸爸不在公司工作。", py: "Bàba bú zài gōngsī gōngzuò.", id: "Ayah tidak bekerja di kantor perusahaan." },
          { zh: "今天我不在家吃晚饭。", py: "Jīntiān wǒ bú zài jiā chī wǎnfàn.", id: "Hari ini saya tidak makan malam di rumah." }
        ],
        readingText: {
          title: "我们在海边玩沙子",
          paragraphs: [
            {
              zh: "昨天是星期天，爸爸妈妈不上班。我们全家一起去海边玩。",
              py: "Zuótiān shì xīngqītiān, bàba māma bù shàngbān. Wǒmen quánjiā yīqǐ qù hǎibiān wán.",
              id: "Kemarin adalah hari Minggu, ayah dan ibu tidak bekerja. Kami sekeluarga pergi bermain ke pantai bersama."
            },
            {
              zh: "海边的风景美极了！天很蓝，海也很蓝，很多人在海里游泳。",
              py: "Hǎibiān de fēngjǐng měi jí le! Tiān hěn lán, hǎi yě hěn lán, hěn duō rén zài hǎi li yóuyǒng.",
              id: "Pemandangan pantai indah sekali! Langit sangat biru, laut juga sangat biru, banyak orang berenang di laut."
            },
            {
              zh: "爸爸和妈妈在海边打排球，我和弟弟在海边玩沙子，妹妹在海边晒太阳。这一天好玩极了！",
              py: "Bàba hé māma zài hǎibiān dǎ páiqiú, wǒ hé dìdi zài hǎibiān wán shāzi, mèimei zài hǎibiān shài tàiyáng. Zhè yì tiān hǎowán jí le!",
              id: "Ayah dan ibu bermain voli di pantai, saya dan adik bermain pasir di pantai, adik perempuan berjemur di bawah sinar matahari. Hari itu sangat menyenangkan!"
            }
          ]
        },
        vocabulary: [
          { zh: "海", py: "hǎi", id: "laut" },
          { zh: "玩", py: "wánr", id: "bermain" },
          { zh: "沙子", py: "shāzi", id: "pasir" },
          { zh: "工作", py: "gōngzuò", id: "bekerja / pekerjaan" },
          { zh: "…极了", py: "…jí le", id: "amat sangat…" },
          { zh: "幅", py: "fú", id: "lembar (kata satuan lukisan)" },
          { zh: "公司", py: "gōngsī", id: "kantor perusahaan" },
          { zh: "上班", py: "shàng bān", id: "berangkat kerja" },
          { zh: "全", py: "quán", id: "seluruh / semua" },
          { zh: "风景", py: "fēngjǐng", id: "pemandangan" },
          { zh: "美", py: "měi", id: "indah / cantik" },
          { zh: "游泳", py: "yóuyǒng", id: "berenang" },
          { zh: "晒", py: "shài", id: "berjemur / terpapar sinar matahari" },
          { zh: "太阳", py: "tàiyáng", id: "matahari" }
        ]
      },
      {
        id: 12,
        unitId: 3,
        title: "第十二课 小花猫给外婆送鱼",
        titlePinyin: "Dì shí'èr kè: Xiǎohuāmāo gěi wàipó sòng yú",
        titleId: "Pelajaran 12: Kucing Belang Mengantar Ikan untuk Nenek",
        themeIcon: "🐱",
        sentences: [
          { zh: "姐姐给外公打电话。", py: "Jiějie gěi wàigōng dǎ diànhuà.", id: "Kakak perempuan menelepon kakek luar." },
          { zh: "奶奶给我讲故事。", py: "Nǎinai gěi wǒ jiǎng gùshi.", id: "Nenek menceritakan dongeng kepada saya." },
          { zh: "我跟妈妈去商店。", py: "Wǒ gēn māma qù shāngdiàn.", id: "Saya ikut ibu pergi ke toko." },
          { zh: "妹妹跟姐姐去植物园。", py: "Mèimei gēn jiějie qù zhíwùyuán.", id: "Adik perempuan ikut kakak pergi ke kebun raya." },
          { zh: "小华跟小红一起下棋。", py: "Xiǎohuá gēn Xiǎohóng yīqǐ xià qí.", id: "Xiao Hua bermain catur bersama Xiao Hong." },
          { zh: "哥哥跟弟弟一起打乒乓球。", py: "Gēge gēn dìdi yīqǐ dǎ pīngpāngqiú.", id: "Kakak dan adik laki-laki bermain tenis meja bersama." }
        ],
        readingText: {
          title: "小花猫给外婆送鱼",
          paragraphs: [
            {
              zh: "猫妈妈让小花猫去外婆家，给外婆送两条鱼。",
              py: "Māo māma ràng xiǎohuāmāo qù wàipó jiā, gěi wàipó sòng liǎng tiáo yú.",
              id: "Mama kucing menyuruh kucing belang pergi ke rumah nenek mengantarkan dua ekor ikan."
            },
            {
              zh: "小花猫说：“妈妈，我不敢自己去，你跟我一起去吧。”",
              py: "Xiǎohuāmāo shuō: “Māma, wǒ bù gǎn zìjǐ qù, nǐ gēn wǒ yīqǐ qù ba.”",
              id: "Kucing belang berkata: “Mama, aku tidak berani pergi sendiri, pergilah bersamaku.”"
            },
            {
              zh: "妈妈说：“你是个勇敢的孩子，你已经长大了，自己去吧。妈妈在家洗衣服。”",
              py: "Māma shuō: “Nǐ shì gè yǒnggǎn de háizi, nǐ yǐjīng zhǎngdà le, zìjǐ qù ba. Māma zài jiā xǐ yīfu.”",
              id: "Mama berkata: “Kamu anak yang pemberani, kamu sudah tumbuh besar, pergilah sendiri. Mama mencuci pakaian di rumah.”"
            },
            {
              zh: "小花猫说：“好吧。妈妈，再见！”",
              py: "Xiǎohuāmāo shuō: “Hǎo ba. Māma, zàijiàn!”",
              id: "Kucing belang berkata: “Baiklah. Mama, selamat tinggal!”"
            }
          ]
        },
        poemActivity: {
          title: "谁跟谁好 (Siapa Berteman Dengan Siapa)",
          lines: [
            { zh: "白云跟风好，风往哪里刮，云往哪里跑；", py: "Bái yún gēn fēng hǎo, fēng wǎng nǎli guā, yún wǎng nǎli pǎo;" },
            { zh: "蜜蜂跟花好，蜜蜂来采蜜，小花抬头笑；", py: "Mìfēng gēn huā hǎo, mìfēng lái cǎi mì, xiǎo huā tái tóu xiào;" },
            { zh: "我跟同学好，大家唱着歌，一起上学校。", py: "Wǒ gēn tóngxué hǎo, dàjiā chàng zhe gē, yīqǐ shàng xuéxiào." }
          ]
        },
        vocabulary: [
          { zh: "外婆", py: "wàipó", id: "nenek (pihak ibu)" },
          { zh: "外公", py: "wàigōng", id: "kakek (pihak ibu)" },
          { zh: "故事", py: "gùshi", id: "cerita / dongeng" },
          { zh: "跟", py: "gēn", id: "bersama / dengan" },
          { zh: "商店", py: "shāngdiàn", id: "toko" },
          { zh: "植物园", py: "zhíwùyuán", id: "kebun raya / botani" },
          { zh: "下棋", py: "xià qí", id: "bermain catur" },
          { zh: "敢", py: "gǎn", id: "berani" },
          { zh: "自己", py: "zìjǐ", id: "sendiri" },
          { zh: "勇敢", py: "yǒnggǎn", id: "pemberani" },
          { zh: "孩子", py: "háizi", id: "anak-anak" },
          { zh: "已经", py: "yǐjīng", id: "sudah" },
          { zh: "长大", py: "zhǎngdà", id: "tumbuh dewasa / besar" }
        ]
      },
      {
        id: 13,
        unitId: 3,
        title: "第十三课 爷爷去公园打太极拳",
        titlePinyin: "Dì shísān kè: Yéye qù gōngyuán dǎ tàijíquán",
        titleId: "Pelajaran 13: Kakek Pergi ke Taman Berlatih Taichi",
        themeIcon: "🥋",
        sentences: [
          { zh: "我去动物园看熊猫。", py: "Wǒ qù dòngwùyuán kàn xióngmāo.", id: "Saya pergi ke kebun binatang melihat panda." },
          { zh: "妈妈去商店买东西。", py: "Māma qù shāngdiàn mǎi dōngxi.", id: "Ibu pergi ke toko membeli barang." },
          { zh: "小红来我家看电视。", py: "Xiǎohóng lái wǒ jiā kàn diànshì.", id: "Xiao Hong datang ke rumahku menonton TV." },
          { zh: "爸爸来学校接我。", py: "Bàba lái xuéxiào jiē wǒ.", id: "Ayah datang ke sekolah menjemputku." },
          { zh: "他到邮局取包裹。", py: "Tā dào yóujú qǔ bāoguǒ.", id: "Dia pergi ke kantor pos mengambil paket." },
          { zh: "她到办公室找王老师。", py: "Tā dào bàngōngshì zhǎo Wáng lǎoshī.", id: "Dia pergi ke kantor mencari Guru Wang." },
          { zh: "我回教室拿钥匙。", py: "Wǒ huí jiàoshì ná yàoshi.", id: "Saya kembali ke kelas mengambil kunci." },
          { zh: "我回家换衣服。", py: "Wǒ huí jiā huàn yīfu.", id: "Saya pulang ke rumah ganti baju." }
        ],
        readingText: {
          title: "爷爷去公园打太极拳",
          paragraphs: [
            {
              zh: "爷爷和爸爸都很喜欢锻炼身体。",
              py: "Yéye hé bàba dōu hěn xǐhuan duànliàn shēntǐ.",
              id: "Kakek dan ayah sangat suka berolahraga menjaga kebugaran tubuh."
            },
            {
              zh: "爷爷爱打太极拳，早上他常常去公园打太极拳。",
              py: "Yéye ài dǎ tàijíquán, zǎoshang tā chángcháng qù gōngyuán dǎ tàijíquán.",
              id: "Kakek gemar bermain taichi, pagi hari beliau sering pergi ke taman berlatih taichi."
            },
            {
              zh: "爸爸喜欢跑步，周末我常常跟他一起到海边跑步。我们的身体都很健康。",
              py: "Bàba xǐhuan pǎobù, zhōumò wǒ chángcháng gēn tā yīqǐ dào hǎibiān pǎobù. Wǒmen de shēntǐ dōu hěn jiànkāng.",
              id: "Ayah suka berlari, akhir pekan saya sering ikut lari bersamanya ke tepi pantai. Tubuh kami semuanya sangat sehat."
            }
          ]
        },
        vocabulary: [
          { zh: "太极拳", py: "tàijíquán", id: "taichi" },
          { zh: "熊猫", py: "xióngmāo", id: "panda" },
          { zh: "买", py: "mǎi", id: "membeli" },
          { zh: "东西", py: "dōngxi", id: "barang / benda" },
          { zh: "接", py: "jiē", id: "menjemput / menerima" },
          { zh: "到", py: "dào", id: "tiba / menuju ke" },
          { zh: "取", py: "qǔ", id: "mengambil" },
          { zh: "包裹", py: "bāoguǒ", id: "paket / bungkusan" },
          { zh: "找", py: "zhǎo", id: "mencari" },
          { zh: "拿", py: "ná", id: "mengambil / memegang" },
          { zh: "钥匙", py: "yàoshi", id: "kunci" },
          { zh: "换", py: "huàn", id: "mengganti / menukar" },
          { zh: "跑步", py: "pǎo bù", id: "lari pagi / jogging" },
          { zh: "健康", py: "jiànkāng", id: "sehat" }
        ]
      },
      {
        id: 14,
        unitId: 3,
        title: "第十四课 我们坐车去动物园",
        titlePinyin: "Dì shísì kè: Wǒmen zuò chē qù dòngwùyuán",
        titleId: "Pelajaran 14: Kami Naik Kendaraan ke Kebun Binatang",
        themeIcon: "🐘",
        sentences: [
          { zh: "妈妈坐火车去外婆家。", py: "Māma zuò huǒchē qù wàipó jiā.", id: "Ibu naik kereta api ke rumah nenek." },
          { zh: "哥哥坐飞机去香港。", py: "Gēge zuò fēijī qù Xiānggǎng.", id: "Kakak naik pesawat terbang ke Hong Kong." },
          { zh: "我们用筷子吃饭。", py: "Wǒmen yòng kuàizi chī fàn.", id: "Kami makan nasi menggunakan sumpit." },
          { zh: "叔叔用手机上网。", py: "Shūshu yòng shǒujī shàng wǎng.", id: "Paman berinternet menggunakan telepon seluler." },
          { zh: "我帮老师擦黑板。", py: "Wǒ bāng lǎoshī cā hēibǎn.", id: "Saya membantu guru menghapus papan tulis." },
          { zh: "姐姐帮妈妈洗碗。", py: "Jiějie bāng māma xǐ wǎn.", id: "Kakak membantu ibu mencuci mangkuk." }
        ],
        readingText: {
          title: "我们坐车去动物园",
          paragraphs: [
            {
              zh: "今天，我们坐车去动物园。动物园里有很多种动物。",
              py: "Jīntiān, wǒmen zuò chē qù dòngwùyuán. Dòngwùyuán lǐ yǒu hěn duō zhǒng dòngwù.",
              id: "Hari ini, kami naik mobil pergi ke kebun binatang. Di dalam kebun binatang ada beraneka ragam satwa."
            },
            {
              zh: "大猴子教小猴子爬山，老虎妈妈帮小老虎洗脸，大象用长鼻子吸水，大熊猫在草地上吃竹子。",
              py: "Dà hóuzi jiāo xiǎo hóuzi pá shān, lǎohǔ māma bāng xiǎo lǎohǔ xǐ liǎn, dàxiàng yòng cháng bízi xī shuǐ, dàxióngmāo zài cǎodì shang chī zhúzi.",
              id: "Monyet besar mengajari monyet kecil memanjat gunung, induk harimau membantu anak harimau membasuh muka, gajah menyedot air dengan belalainya yang panjang, panda raksasa memakan bambu di padang rumput."
            },
            {
              zh: "同学们都很喜欢它们，大家说：“动物是我们的好朋友。”",
              py: "Tóngxuémen dōu hěn xǐhuan tāmen, dàjiā shuō: “Dòngwù shì wǒmen de hǎo péngyou.”",
              id: "Semua teman sangat menyukai mereka, semuanya berkata: “Hewan adalah sahabat baik kita.”"
            }
          ]
        },
        vocabulary: [
          { zh: "车", py: "chē", id: "mobil / kendaraan" },
          { zh: "火车", py: "huǒchē", id: "kereta api" },
          { zh: "飞机", py: "fēijī", id: "pesawat terbang" },
          { zh: "手机", py: "shǒujī", id: "telepon genggam / HP" },
          { zh: "帮", py: "bāng", id: "membantu / menolong" },
          { zh: "擦", py: "cā", id: "mengusap / menghapus" },
          { zh: "种", py: "zhǒng", id: "jenis / macam" },
          { zh: "老虎", py: "lǎohǔ", id: "harimau" },
          { zh: "脸", py: "liǎn", id: "wajah / muka" },
          { zh: "大象", py: "dàxiàng", id: "gajah" },
          { zh: "吸", py: "xī", id: "menghisap / menyedot" },
          { zh: "水", py: "shuǐ", id: "air" },
          { zh: "草地", py: "cǎodì", id: "padang rumput" },
          { zh: "竹子", py: "zhúzi", id: "bambu" },
          { zh: "香港", py: "Xiānggǎng", id: "Hong Kong" }
        ]
      },
      {
        id: 15,
        unitId: 3,
        title: "第十五课 大家去郊游",
        titlePinyin: "Dì shíwǔ kè: Dàjiā qù jiāoyóu",
        titleId: "Pelajaran 15: Semua Orang Pergi Berpiknik",
        themeIcon: "🏕️",
        readingText: {
          title: "大家去郊游",
          paragraphs: [
            {
              zh: "星期天，天气非常晴朗，学校组织我们去郊游。",
              py: "Xīngqītiān, tiānqì fēicháng qínglǎng, xuéxiào zǔzhī wǒmen qù jiāoyóu.",
              id: "Hari Minggu, cuaca amat cerah, sekolah mengorganisir kami untuk bertamasya ke pinggiran kota."
            },
            {
              zh: "早上，我们坐车到了郊外。那儿的风景特别美，有山也有水。",
              py: "Zǎoshang, wǒmen zuò chē dào le jiāowài. Nàr de fēngjǐng tèbié měi, yǒu shān yě yǒu shuǐ.",
              id: "Pagi hari, kami naik mobil tiba di luar kota. Pemandangan di sana sangat indah, ada gunung dan juga ada air sungai."
            },
            {
              zh: "上午，我们爬山、放风筝。下午，我们在山下唱歌、跳舞、捉迷藏，大家开心极了！",
              py: "Shàngwǔ, wǒmen pá shān, fàng fēngzheng. Xiàwǔ, wǒmen zài shān xià chàng gē, tiào wǔ, zhuō mícáng, dàjiā kāixīn jí le!",
              id: "Pagi hingga siang kami mendaki gunung, menerbangkan layang-layang. Siang hingga sore kami bernyanyi di kaki gunung, menari, dan bermain petak umpet, semuanya gembira sekali!"
            }
          ]
        },
        poemActivity: {
          title: "古诗: 一望二三里 (Puisi: Menatap 2-3 Li)",
          lines: [
            { zh: "一望二三里，", py: "Yí wàng èr sān lǐ,", id: "Memandang sejauh dua tiga li," },
            { zh: "烟村四五家。", py: "Yān cūn sì wǔ jiā.", id: "Desa berasap empat lima rumah." },
            { zh: "亭台六七座，", py: "Tíng tái liù qī zuò,", id: "Paviliun peristirahatan enam tujuh buah," },
            { zh: "八九十枝花。", py: "Bā jiǔ shí zhī huā.", id: "Delapan sembilan sepuluh tangkai bunga." }
          ]
        },
        vocabulary: [
          { zh: "郊游", py: "jiāoyóu", id: "tamasya / piknik" },
          { zh: "晴朗", py: "qínglǎng", id: "cerah" },
          { zh: "组织", py: "zǔzhī", id: "mengorganisir / menyelenggarakan" },
          { zh: "郊外", py: "jiāowài", id: "pinggiran luar kota" },
          { zh: "放", py: "fàng", id: "melepas / menerbangkan" },
          { zh: "风筝", py: "fēngzheng", id: "layang-layang" },
          { zh: "跳舞", py: "tiào wǔ", id: "menari" },
          { zh: "捉迷藏", py: "zhuō mícáng", id: "petak umpet" }
        ]
      }
    ]
  }
];

window.HAN_YU_3_UNITS = HAN_YU_3_UNITS;
