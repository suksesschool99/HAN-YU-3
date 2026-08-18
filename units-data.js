/**
 * HAN YU 3 (汉语 3) - Database Materi Unit 1-10
 * Dilengkapi Pinyin, Terjemahan Bahasa Indonesia, Kosakata, dan Tata Bahasa
 */

const HAN_YU_UNITS = [
  {
    id: 1,
    unitNumber: 1,
    title: "第一课：在学校",
    titlePinyin: "Dì yī kè: Zài xuéxiào",
    titleIndo: "Pelajaran 1: Di Sekolah",
    themeDino: "Rexy si T-Rex 🦖",
    dinoBio: "Rexy sangat senang menyapa teman-teman baru di Sekolah Dinosaurus!",
    coverBadge: "🏫 Sekolah & Perkenalan",
    readingSections: [
      {
        id: "u1_s1",
        title: "课文一：早上好 (Percakapan: Selamat Pagi)",
        sentences: [
          { hanzi: "早上好，王老师！", pinyin: "Zǎoshang hǎo, Wáng lǎoshī!", indo: "Selamat pagi, Guru Wang!" },
          { hanzi: "同学们好！请进。", pinyin: "Tóngxuémen hǎo! Qǐng jìn.", indo: "Halo anak-anak/teman-teman sekalian! Silakan masuk." },
          { hanzi: "今天我们班来了一位新同学。", pinyin: "Jīntiān wǒmen bān lái le yí wèi xīn tóngxué.", indo: "Hari ini kelas kita kedatangan seorang teman baru." },
          { hanzi: "大家好，我叫大明，认识你们很高兴！", pinyin: "Dàjiā hǎo, wǒ jiào Dàmíng, rènshi nǐmen hěn gāoxìng!", indo: "Halo semuanya, saya bernama Daming, sangat senang berkenalan dengan kalian!" },
          { hanzi: "欢迎你来到我们的学校！", pinyin: "Huānyíng nǐ lái dào wǒmen de xuéxiào!", indo: "Selamat datang di sekolah kami!" }
        ]
      },
      {
        id: "u1_s2",
        title: "课文二：我们的教室 (Teks Bacaan: Ruang Kelas Kami)",
        sentences: [
          { hanzi: "我们的学校很大，教室也很干净。", pinyin: "Wǒmen de xuéxiào hěn dà, jiàoshì yě hěn gānjìng.", indo: "Sekolah kami sangat besar, ruang kelasnya juga sangat bersih." },
          { hanzi: "教室里有黑板、桌子和椅子。", pinyin: "Jiàoshì lǐ yǒu hēibǎn, zhuōzi hé yǐzi.", indo: "Di dalam kelas ada papan tulis hitam, meja, dan kursi." },
          { hanzi: "我们每天在教室里学习汉语。", pinyin: "Wǒmen měitiān zài jiàoshì lǐ xuéxí Hànyǔ.", indo: "Kami setiap hari belajar bahasa Mandarin di dalam kelas." },
          { hanzi: "老师教我们读生词、写汉字。", pinyin: "Lǎoshī jiāo wǒmen dú shēngcí, xiě hànzì.", indo: "Guru mengajari kami membaca kosakata dan menulis karakter Hanzi." },
          { hanzi: "我和同学们一起快乐地学习。", pinyin: "Wǒ hé tóngxuémen yìqǐ kuàilè de xuéxí.", indo: "Saya dan teman-teman sekelas belajar bersama dengan gembira." }
        ]
      }
    ],
    vocabulary: [
      { hanzi: "学校", pinyin: "xuéxiào", indo: "sekolah", type: "kata benda", strokeTarget: "学" },
      { hanzi: "老师", pinyin: "lǎoshī", indo: "guru", type: "kata benda", strokeTarget: "老" },
      { hanzi: "同学", pinyin: "tóngxué", indo: "teman sekelas", type: "kata benda", strokeTarget: "同" },
      { hanzi: "教室", pinyin: "jiàoshì", indo: "ruang kelas", type: "kata benda", strokeTarget: "室" },
      { hanzi: "学习", pinyin: "xuéxí", indo: "belajar", type: "kata kerja", strokeTarget: "习" },
      { hanzi: "汉语", pinyin: "Hànyǔ", indo: "bahasa Mandarin", type: "kata benda", strokeTarget: "汉" },
      { hanzi: "朋友", pinyin: "péngyou", indo: "teman / sahabat", type: "kata benda", strokeTarget: "朋" },
      { hanzi: "高兴", pinyin: "gāoxìng", indo: "senang / gembira", type: "kata sifat", strokeTarget: "高" }
    ],
    grammarNotes: [
      { pattern: "在 + Tempat + Kata Kerja", explanation: "Menunjukkan tempat terjadinya suatu aktivitas. Contoh: 我在学校学习 (Saya belajar di sekolah)." },
      { pattern: "认识你很高兴", explanation: "Ungkapan sopan saat pertama kali berkenalan: 'Senang berkenalan denganmu'." }
    ]
  },
  {
    id: 2,
    unitNumber: 2,
    title: "第二课：我的书包",
    titlePinyin: "Dì èr kè: Wǒ de shūbāo",
    titleIndo: "Pelajaran 2: Tas Sekolahku",
    themeDino: "Cera si Triceratops 🛡️",
    dinoBio: "Cera menyiapkan alat-alat tulis ajaib di tas dinosaurus kesayangannya!",
    coverBadge: "🎒 Alat Tulis & Benda",
    readingSections: [
      {
        id: "u2_s1",
        title: "课文一：这是谁的书包 (Percakapan: Tas Siapakah Ini?)",
        sentences: [
          { hanzi: "这是你的书包吗？", pinyin: "Zhè shì nǐ de shūbāo ma?", indo: "Apakah ini tas sekolahmu?" },
          { hanzi: "是的，这是我的新书包。", pinyin: "Shì de, zhè shì wǒ de xīn shūbāo.", indo: "Ya, ini tas sekolah baruku." },
          { hanzi: "你的书包是什么颜色的？", pinyin: "Nǐ de shūbāo shì shénme yánsè de?", indo: "Tas sekolahmu warnanya apa?" },
          { hanzi: "我的书包是蓝色的，很漂亮。", pinyin: "Wǒ de shūbāo shì lánsè de, hěn piàoliang.", indo: "Tas sekolahku berwarna biru, sangat indah." },
          { hanzi: "书包里面有什么东西？", pinyin: "Shūbāo lǐmiàn yǒu shénme dōngxi?", indo: "Di dalam tas ada barang apa saja?" }
        ]
      },
      {
        id: "u2_s2",
        title: "课文二：书包里的文具 (Teks Bacaan: Alat Tulis di Dalam Tas)",
        sentences: [
          { hanzi: "我的书包里有很多东西。", pinyin: "Wǒ de shūbāo lǐ yǒu hěn duō dōngxi.", indo: "Di dalam tas sekolahku ada banyak sekali barang." },
          { hanzi: "里面有三本汉语书和两个本子。", pinyin: "Lǐmiàn yǒu sān běn Hànyǔ shū hé liǎng ge běnzi.", indo: "Di dalamnya ada tiga buku Mandarin dan dua buku catatan." },
          { hanzi: "铅笔盒里有五支铅笔、一把尺子和一块橡皮。", pinyin: "Qiānbǐhé lǐ yǒu wǔ zhī qiānbǐ, yì bǎ chǐzi hé yí kuài xiàngpí.", indo: "Di kotak pensil ada 5 pensil, 1 penggaris, dan 1 penghapus." },
          { hanzi: "我每天自己整理书包。", pinyin: "Wǒ měitiān zìjǐ zhěnglǐ shūbāo.", indo: "Saya setiap hari merapikan tas sekolah sendiri." },
          { hanzi: "我非常爱护我的书包和文具。", pinyin: "Wǒ fēicháng àihù wǒ de shūbāo hé wénjù.", indo: "Saya sangat merawat tas dan alat-alat tulis saya." }
        ]
      }
    ],
    vocabulary: [
      { hanzi: "书包", pinyin: "shūbāo", indo: "tas sekolah", type: "kata benda", strokeTarget: "包" },
      { hanzi: "课本", pinyin: "kèběn", indo: "buku pelajaran", type: "kata benda", strokeTarget: "本" },
      { hanzi: "铅笔", pinyin: "qiānbǐ", indo: "pensil", type: "kata benda", strokeTarget: "笔" },
      { hanzi: "尺子", pinyin: "chǐzi", indo: "penggaris", type: "kata benda", strokeTarget: "尺" },
      { hanzi: "橡皮", pinyin: "xiàngpí", indo: "penghapus karet", type: "kata benda", strokeTarget: "皮" },
      { hanzi: "里面", pinyin: "lǐmiàn", indo: "di dalam", type: "kata arah", strokeTarget: "里" },
      { hanzi: "颜色", pinyin: "yánsè", indo: "warna", type: "kata benda", strokeTarget: "色" },
      { hanzi: "多少", pinyin: "duōshao", indo: "berapa banyak", type: "kata tanya", strokeTarget: "多" }
    ],
    grammarNotes: [
      { pattern: "Kata Bilangan + Kata Bantu Bilangan (量词) + Kata Benda", explanation: "三本书 (3 buku: běn untuk buku), 两支笔 (2 pena: zhī untuk benda berbentuk batang), 一把尺子 (1 penggaris: bǎ untuk benda bergagang)." },
      { pattern: "...里面有...", explanation: "Menyatakan keberadaan benda di dalam tempat: 书包里有课本 (Di dalam tas ada buku pelajaran)." }
    ]
  },
  {
    id: 3,
    unitNumber: 3,
    title: "第三课：现在几点",
    titlePinyin: "Dì sān kè: Xiànzài jǐ diǎn",
    titleIndo: "Pelajaran 3: Sekarang Jam Berapa",
    themeDino: "Brachy si Brachiosaurus 🦕",
    dinoBio: "Brachy yang tinggi selalu melihat jam matahari purba untuk tepat waktu!",
    coverBadge: "⏰ Waktu & Jam",
    readingSections: [
      {
        id: "u3_s1",
        title: "课文一：请问现在几点了 (Percakapan: Permisi Jam Berapa Sekarang)",
        sentences: [
          { hanzi: "请问，现在几点了？", pinyin: "Qǐngwèn, xiànzài jǐ diǎn le?", indo: "Permisi, sekarang sudah jam berapa?" },
          { hanzi: "现在是早上八点半。", pinyin: "Xiànzài shì zǎoshang bā diǎn bàn.", indo: "Sekarang jam 8 lewat 30 menit pagi (setengah sembilan pagi)." },
          { hanzi: "我们几点上课？", pinyin: "Wǒmen jǐ diǎn shàngkè?", indo: "Kita jam berapa mulai pelajaran?" },
          { hanzi: "我们八点四十五分上课。", pinyin: "Wǒmen bā diǎn sìshíwǔ fēn shàngkè.", indo: "Kita mulai pelajaran jam 8 lewat 45 menit." },
          { hanzi: "那我们快走吧！", pinyin: "Nà wǒmen kuài zǒu ba!", indo: "Kalau begitu ayo kita lekas jalan!" }
        ]
      },
      {
        id: "u3_s2",
        title: "课文二：我的一天时间表 (Teks Bacaan: Jadwal Waktuku)",
        sentences: [
          { hanzi: "我每天早上六点起床。", pinyin: "Wǒ měitiān zǎoshang liù diǎn qǐchuáng.", indo: "Saya setiap pagi bangun tidur pukul 06.00." },
          { hanzi: "七点一刻我和哥哥一起吃早饭。", pinyin: "Qī diǎn yí kè wǒ hé gēge yìqǐ chī zǎofàn.", indo: "Pukul 07.15 saya dan kakak laki-laki sarapan bersama." },
          { hanzi: "中午十二点在学校吃午饭。", pinyin: "Zhōngwǔ shí'èr diǎn zài xuéxiào chī wǔfàn.", indo: "Siang hari pukul 12.00 makan siang di sekolah." },
          { hanzi: "下午四点放学回家做作业。", pinyin: "Xiàwǔ sì diǎn fàngxué huíjiā zuò zuòyè.", indo: "Sore pukul 16.00 pulang sekolah dan mengerjakan PR di rumah." },
          { hanzi: "晚上九点半准时上床睡觉。", pinyin: "Wǎnshang jiǔ diǎn bàn zhǔnshí shàngchuáng shuìjiào.", indo: "Malam pukul 21.30 tidur tepat waktu." }
        ]
      }
    ],
    vocabulary: [
      { hanzi: "现在", pinyin: "xiànzài", indo: "sekarang", type: "kata keterangan", strokeTarget: "现" },
      { hanzi: "几点", pinyin: "jǐ diǎn", indo: "jam berapa", type: "frasa tanya", strokeTarget: "点" },
      { hanzi: "分钟", pinyin: "fēnzhōng", indo: "menit", type: "kata benda", strokeTarget: "分" },
      { hanzi: "半", pinyin: "bàn", indo: "setengah / 30 menit", type: "kata bilangan", strokeTarget: "半" },
      { hanzi: "起床", pinyin: "qǐchuáng", indo: "bangun tidur", type: "kata kerja", strokeTarget: "床" },
      { hanzi: "睡觉", pinyin: "shuìjiào", indo: "tidur", type: "kata kerja", strokeTarget: "睡" },
      { hanzi: "早上", pinyin: "zǎoshang", indo: "pagi hari", type: "kata waktu", strokeTarget: "早" },
      { hanzi: "晚上", pinyin: "wǎnshang", indo: "malam hari", type: "kata waktu", strokeTarget: "晚" }
    ],
    grammarNotes: [
      { pattern: "Jam + 点 + Menit + 分", explanation: "Contoh: 八点二十分 (08.20). Jika menit 30 gunakan 半 (bàn): 八点半 (08.30)." },
      { pattern: "Keterangan Waktu + Subjek + Kata Kerja", explanation: "早上六点我起床 (Pagi jam 6 saya bangun) atau 我早上六点起床." }
    ]
  },
  {
    id: 4,
    unitNumber: 4,
    title: "第四课：今天天气怎么样",
    titlePinyin: "Dì sì kè: Jīntiān tiānqì zěnmeyàng",
    titleIndo: "Pelajaran 4: Bagaimana Cuaca Hari Ini",
    themeDino: "Ptero si Pterodactyl 🦅",
    dinoBio: "Ptero terbang tinggi di langit untuk melihat awan, hujan, dan sinar matahari!",
    coverBadge: "☀️ Cuaca & Musim",
    readingSections: [
      {
        id: "u4_s1",
        title: "课文一：今天天气好吗 (Percakapan: Apakah Cuaca Hari Ini Bagus?)",
        sentences: [
          { hanzi: "今天天气怎么样？", pinyin: "Jīntiān tiānqì zěnmeyàng?", indo: "Bagaimana cuaca hari ini?" },
          { hanzi: "今天是晴天，太阳很大，天气很热。", pinyin: "Jīntiān shì qíngtiān, tàiyáng hěn dà, tiānqì hěn rè.", indo: "Hari ini cerah, matahari bersinar terik, cuaca sangat panas." },
          { hanzi: "明天会下雨吗？", pinyin: "Míngtiān huì xiàyǔ ma?", indo: "Apakah besok akan turun hujan?" },
          { hanzi: "天气预报说，明天是阴天，有大风。", pinyin: "Tiānqì yùbào shuō, míngtiān shì yīntiān, yǒu dàfēng.", indo: "Ramalan cuaca mengatakan besok mendung dan berangin kencang." },
          { hanzi: "出门记得带雨伞！", pinyin: "Chūmén jìde dài yǔsǎn!", indo: "Saat keluar rumah ingatlah membawa payung!" }
        ]
      },
      {
        id: "u4_s2",
        title: "课文二：四季的天气 (Teks Bacaan: Cuaca Empat Musim)",
        sentences: [
          { hanzi: "一年有四个季节：春、夏、秋、冬。", pinyin: "Yì nián yǒu sì ge jìjié: chūn, xià, qiū, dōng.", indo: "Satu tahun ada 4 musim: semi, panas, gugur, dan dingin." },
          { hanzi: "春天很暖和，花儿都开了。", pinyin: "Chūntiān hěn nuǎnhuo, huār dōu kāi le.", indo: "Musim semi sangat hangat, bunga-bunga bermekaran." },
          { hanzi: "夏天经常下大雨，天气很热。", pinyin: "Xiàtiān jīngcháng xià dàyǔ, tiānqì hěn rè.", indo: "Musim panas sering turun hujan lebat, cuaca sangat panas." },
          { hanzi: "秋天天气很凉快，树叶变黄了。", pinyin: "Qiūtiān tiānqì hěn liángkuai, shùyè biàn huáng le.", indo: "Musim gugur cuacanya sejuk, daun-daun pohon menguning." },
          { hanzi: "冬天非常冷，有时候会下雪。", pinyin: "Dōngtiān fēicháng lěng, yǒushíhou huì xiàxuě.", indo: "Musim dingin sangat dingin, kadang-kadang turun salju." }
        ]
      }
    ],
    vocabulary: [
      { hanzi: "天气", pinyin: "tiānqì", indo: "cuaca", type: "kata benda", strokeTarget: "气" },
      { hanzi: "晴天", pinyin: "qíngtiān", indo: "hari cerah", type: "kata benda", strokeTarget: "晴" },
      { hanzi: "阴天", pinyin: "yīntiān", indo: "hari mendung", type: "kata benda", strokeTarget: "阴" },
      { hanzi: "下雨", pinyin: "xiàyǔ", indo: "turun hujan", type: "kata kerja", strokeTarget: "雨" },
      { hanzi: "下雪", pinyin: "xiàxuě", indo: "turun salju", type: "kata kerja", strokeTarget: "雪" },
      { hanzi: "冷", pinyin: "lěng", indo: "dingin", type: "kata sifat", strokeTarget: "冷" },
      { hanzi: "热", pinyin: "rè", indo: "panas", type: "kata sifat", strokeTarget: "热" },
      { hanzi: "刮风", pinyin: "guāfēng", indo: "berangin", type: "frasa", strokeTarget: "风" }
    ],
    grammarNotes: [
      { pattern: "...怎么样？ (Zěnmeyàng?)", explanation: "Digunakan untuk menanyakan kondisi/keadaan: 今天天气怎么样？ (Bagaimana cuaca hari ini?)" },
      { pattern: "会 + Kata Kerja", explanation: "Menyatakan kemungkinan masa depan: 明天会下雨 (Besok akan/kemungkinan turun hujan)." }
    ]
  },
  {
    id: 5,
    unitNumber: 5,
    title: "第五课：你喜欢什么运动",
    titlePinyin: "Dì wǔ kè: Nǐ xǐhuan shénme yùndòng",
    titleIndo: "Pelajaran 5: Kamu Suka Olahraga Apa",
    themeDino: "Spike si Stegosaurus ⚽",
    dinoBio: "Spike suka berolahraga sepak bola bersama kawanan dinosaurus!",
    coverBadge: "🏃 Olahraga & Hobi",
    readingSections: [
      {
        id: "u5_s1",
        title: "课文一：你喜欢运动吗 (Percakapan: Apakah Kamu Suka Olahraga?)",
        sentences: [
          { hanzi: "你最喜欢什么运动？", pinyin: "Nǐ zuì xǐhuan shénme yùndòng?", indo: "Olahraga apa yang paling kamu sukai?" },
          { hanzi: "我最喜欢踢足球，你呢？", pinyin: "Wǒ zuì xǐhuan tī zúqiú, nǐ ne?", indo: "Saya paling suka bermain sepak bola, kalau kamu?" },
          { hanzi: "我喜欢游泳，每个星期六都去。", pinyin: "Wǒ xǐhuan yóuyǒng, měi ge xīngqīliù dōu qù.", indo: "Saya suka berenang, setiap hari Sabtu selalu pergi." },
          { hanzi: "你会打篮球吗？", pinyin: "Nǐ huì dǎ lánqiú ma?", indo: "Apakah kamu bisa bermain bola basket?" },
          { hanzi: "我会打，星期天我们一起去操场打球吧！", pinyin: "Wǒ huì dǎ, xīngqītiān wǒmen yìqǐ qù cāochǎng dǎqiú ba!", indo: "Saya bisa main, hari Minggu ayo kita bersama ke lapangan bermain basket!" }
        ]
      },
      {
        id: "u5_s2",
        title: "课文二：运动让我们健康 (Teks Bacaan: Olahraga Membuat Kita Sehat)",
        sentences: [
          { hanzi: "运动对身体非常好。", pinyin: "Yùndòng duì shēntǐ fēicháng hǎo.", indo: "Berolahraga sangat bagus untuk kesehatan tubuh." },
          { hanzi: "我和爸爸经常在早上跑步。", pinyin: "Wǒ hé bàba jīngcháng zài zǎoshang pǎobù.", indo: "Saya dan ayah sering berlari di pagi hari." },
          { hanzi: "姐姐喜欢打羽毛球和跳舞。", pinyin: "Jiějie xǐhuan dǎ yǔmáoqiú hé tiàowǔ.", indo: "Kakak perempuan suka bermain bulu tangkis dan menari." },
          { hanzi: "学校的运动场上有很多人在玩球。", pinyin: "Xuéxiào de yùndòngchǎng shang yǒu hěn duō rén zài wán qiú.", indo: "Di lapangan olahraga sekolah ada banyak orang sedang bermain bola." },
          { hanzi: "大家身体都很强壮，心情也很愉快。", pinyin: "Dàjiā shēntǐ dōu hěn qiángzhuàng, xīnqíng yě hěn yúkuài.", indo: "Semua orang badannya kuat dan perasaannya pun sangat senang." }
        ]
      }
    ],
    vocabulary: [
      { hanzi: "运动", pinyin: "yùndòng", indo: "olahraga", type: "kata benda", strokeTarget: "运" },
      { hanzi: "喜欢", pinyin: "xǐhuan", indo: "suka", type: "kata kerja", strokeTarget: "喜" },
      { hanzi: "踢足球", pinyin: "tī zúqiú", indo: "bermain sepak bola", type: "frasa kerja", strokeTarget: "足" },
      { hanzi: "打篮球", pinyin: "dǎ lánqiú", indo: "bermain bola basket", type: "frasa kerja", strokeTarget: "打" },
      { hanzi: "游泳", pinyin: "yóuyǒng", indo: "berenang", type: "kata kerja", strokeTarget: "游" },
      { hanzi: "跑步", pinyin: "pǎobù", indo: "berlari", type: "kata kerja", strokeTarget: "跑" },
      { hanzi: "会", pinyin: "huì", indo: "bisa / mampu", type: "kata bantu", strokeTarget: "会" },
      { hanzi: "身体", pinyin: "shēntǐ", indo: "badan / tubuh", type: "kata benda", strokeTarget: "身" }
    ],
    grammarNotes: [
      { pattern: "打 (Dǎ) vs 踢 (Tī)", explanation: "打 untuk olahraga dengan tangan (打篮球 basket, 打羽毛球 bulutangkis), sedangkan 踢 untuk olahraga dengan kaki (踢足球 sepak bola)." },
      { pattern: "会 + Kata Kerja", explanation: "Menunjukkan kemampuan yang dipelajari: 我会游泳 (Saya bisa berenang)." }
    ]
  },
  {
    id: 6,
    unitNumber: 6,
    title: "第六课：在水果店",
    titlePinyin: "Dì liù kè: Zài shuǐguǒ diàn",
    titleIndo: "Pelajaran 6: Di Toko Buah (Berbelanja)",
    themeDino: "Rexy si T-Rex 🍎",
    dinoBio: "Rexy suka makan buah segar yang manis dan kaya vitamin!",
    coverBadge: "🍉 Buah & Belanja",
    readingSections: [
      {
        id: "u6_s1",
        title: "课文一：买苹果 (Percakapan: Membeli Apel)",
        sentences: [
          { hanzi: "您好，请问苹果怎么卖？", pinyin: "Nín hǎo, qǐngwèn píngguǒ zěnme mài?", indo: "Halo, permisi apel ini bagaimana jualnya (berapa harganya)?" },
          { hanzi: "苹果一斤五块钱。", pinyin: "Píngguǒ yì jīn wǔ kuài qián.", indo: "Apel satu jin (500g) harganya 5 kuai (yuan)." },
          { hanzi: "这西瓜甜不甜？", pinyin: "Zhè xīguā tián bu tián?", indo: "Semangka ini manis atau tidak?" },
          { hanzi: "很甜，不甜不要钱！", pinyin: "Hěn tián, bù tián bú yào qián!", indo: "Sangat manis, kalau tidak manis tidak usah bayar!" },
          { hanzi: "那我买一个大西瓜和两斤香蕉。", pinyin: "Nà wǒ mǎi yí ge dà xīguā hé liǎng jīn xiāngjiāo.", indo: "Kalau begitu saya beli satu semangka besar dan 2 jin pisang." }
        ]
      },
      {
        id: "u6_s2",
        title: "课文二：超市里的各种水果 (Teks Bacaan: Aneka Buah di Supermarket)",
        sentences: [
          { hanzi: "今天我和妈妈去水果超市。", pinyin: "Jīntiān wǒ hé māma qù shuǐguǒ chāoshì.", indo: "Hari ini saya dan ibu pergi ke supermarket buah." },
          { hanzi: "这里的各种水果又新鲜又便宜。", pinyin: "Zhèlǐ de gèzhǒng shuǐguǒ yòu xīnxiān yòu piányi.", indo: "Aneka buah di sini segar dan juga murah." },
          { hanzi: "红色的苹果、黄色的香蕉、绿色的西瓜都很好看。", pinyin: "Hóngsè de píngguǒ, huángsè de xiāngjiāo, lǜsè de xīguā dōu hěn hǎokàn.", indo: "Apel merah, pisang kuning, dan semangka hijau semuanya terlihat bagus." },
          { hanzi: "妈妈买了很多我最爱吃的水果。", pinyin: "Māma mǎi le hěn duō wǒ zuì ài chī de shuǐguǒ.", indo: "Ibu membeli banyak buah yang paling suka saya makan." },
          { hanzi: "一共花了五十块钱。", pinyin: "Yígòng huā le wǔshí kuài qián.", indo: "Total menghabiskan uang 50 yuan." }
        ]
      }
    ],
    vocabulary: [
      { hanzi: "水果", pinyin: "shuǐguǒ", indo: "buah-buahan", type: "kata benda", strokeTarget: "果" },
      { hanzi: "苹果", pinyin: "píngguǒ", indo: "apel", type: "kata benda", strokeTarget: "苹" },
      { hanzi: "香蕉", pinyin: "xiāngjiāo", indo: "pisang", type: "kata benda", strokeTarget: "香" },
      { hanzi: "西瓜", pinyin: "xīguā", indo: "semangka", type: "kata benda", strokeTarget: "西" },
      { hanzi: "买", pinyin: "mǎi", indo: "membeli", type: "kata kerja", strokeTarget: "买" },
      { hanzi: "卖", pinyin: "mài", indo: "menjual", type: "kata kerja", strokeTarget: "卖" },
      { hanzi: "多少钱", pinyin: "duōshao qián", indo: "berapa harganya", type: "frasa tanya", strokeTarget: "钱" },
      { hanzi: "块", pinyin: "kuài", indo: "satuan mata uang (Yuan)", type: "kata penggolong", strokeTarget: "块" }
    ],
    grammarNotes: [
      { pattern: "Kata Benda + 多少钱？ / ...怎么卖？", explanation: "Cara menanyakan harga: 苹果多少钱？ (Berapa harga apel?)" },
      { pattern: "又...又... (Yòu... yòu...)", explanation: "Menyatakan dua sifat sekaligus: 又大又甜 (Sudah besar, manis pula)." }
    ]
  },
  {
    id: 7,
    unitNumber: 7,
    title: "第七课：在动物园",
    titlePinyin: "Dì qī kè: Zài dòngwùyuán",
    titleIndo: "Pelajaran 7: Di Kebun Binatang",
    themeDino: "Brachy si Brachiosaurus 🐼",
    dinoBio: "Brachy senang melihat panda yang lucu dan gajah yang besar!",
    coverBadge: "🦁 Hewan & Deskripsi",
    readingSections: [
      {
        id: "u7_s1",
        title: "课文一：看大熊猫 (Percakapan: Melihat Panda)",
        sentences: [
          { hanzi: "快看，那边有一只大熊猫！", pinyin: "Kuài kàn, nàbiān yǒu yì zhī dàxióngmāo!", indo: "Cepat lihat, di sebelah sana ada seekor panda raksasa!" },
          { hanzi: "大熊猫胖胖的，黑白相间，真可爱！", pinyin: "Dàxióngmāo pàngpàng de, hēibái xiāngjiàn, zhēn kě'ài!", indo: "Panda itu gemuk-gemuk, berbulu hitam putih, sungguh imut!" },
          { hanzi: "它正在吃竹子呢。", pinyin: "Tā zhèngzài chī zhúzi ne.", indo: "Ia sedang asyik memakan bambu." },
          { hanzi: "你还喜欢看什么动物？", pinyin: "Nǐ hái xǐhuan kàn shénme dòngwù?", indo: "Kamu masih suka melihat hewan apa lagi?" },
          { hanzi: "我还想看聪明的小猴子和高大的长颈鹿。", pinyin: "Wǒ hái xiǎng kàn cōngmíng de xiǎohóuzi hé gāodà de chángjǐnglù.", indo: "Saya juga ingin melihat monyet kecil yang cerdas dan jerapah yang jangkung." }
        ]
      },
      {
        id: "u7_s2",
        title: "课文二：动物园真热闹 (Teks Bacaan: Kebun Binatang Ramai)",
        sentences: [
          { hanzi: "周末动物园里有很多游客。", pinyin: "Zhōumò dòngwùyuán lǐ yǒu hěn duō yóukè.", indo: "Akhir pekan di kebun binatang ada banyak sekali pengunjung." },
          { hanzi: "老虎威风凛凛地在草地上走来走去。", pinyin: "Lǎohǔ wēifēng lǐnlǐn de zài cǎodì shang zǒu lái zǒu qù.", indo: "Harimau berjalan kian kemari di atas rumput dengan gagah." },
          { hanzi: "大象的鼻子长长的，耳朵像大扇子。", pinyin: "Dàxiàng de bízi chángcháng de, ěrduo xiàng dà shànzi.", indo: "Belalai gajah panjang sekali, telinganya seperti kipas besar." },
          { hanzi: "树上的小鸟在欢快地唱歌。", pinyin: "Shù shang de xiǎoniǎo zài huānkuài de chànggē.", indo: "Burung-burung kecil di atas pohon sedang bernyanyi dengan riang." },
          { hanzi: "动物是人类的好朋友，我们要保护它们。", pinyin: "Dòngwù shì rénlèi de hǎo péngyou, wǒmen yào bǎohù tāmen.", indo: "Hewan adalah sahabat baik manusia, kita harus melindungi mereka." }
        ]
      }
    ],
    vocabulary: [
      { hanzi: "动物", pinyin: "dòngwù", indo: "hewan / binatang", type: "kata benda", strokeTarget: "动" },
      { hanzi: "熊猫", pinyin: "xióngmāo", indo: "panda", type: "kata benda", strokeTarget: "猫" },
      { hanzi: "猴子", pinyin: "hóuzi", indo: "monyet", type: "kata benda", strokeTarget: "猴" },
      { hanzi: "大象", pinyin: "dàxiàng", indo: "gajah", type: "kata benda", strokeTarget: "象" },
      { hanzi: "老虎", pinyin: "lǎohǔ", indo: "harimau", type: "kata benda", strokeTarget: "虎" },
      { hanzi: "可爱", pinyin: "kě'ài", indo: "lucu / imut", type: "kata sifat", strokeTarget: "爱" },
      { hanzi: "只", pinyin: "zhī", indo: "ekor (kata bantu bilangan hewan)", type: "kata penggolong", strokeTarget: "只" },
      { hanzi: "条", pinyin: "tiáo", indo: "ekor (hewan panjang: ikan, ular)", type: "kata penggolong", strokeTarget: "条" }
    ],
    grammarNotes: [
      { pattern: "Kata Sifat Reduplikasi (AA de)", explanation: "胖胖的 (gemuk-gemuk), 长长的 (panjang-panjang) untuk mempertegas sifat." },
      { pattern: "正在 + Kata Kerja + 呢", explanation: "Menyatakan perbuatan yang sedang berlangsung: 它正在吃竹子呢 (Ia sedang makan bambu)." }
    ]
  },
  {
    id: 8,
    unitNumber: 8,
    title: "第八课：你的生日是几月几号",
    titlePinyin: "Dì bā kè: Nǐ de shēngrì shì jǐ yuè jǐ hào",
    titleIndo: "Pelajaran 8: Ulang Tahunmu Tanggal Berapa",
    themeDino: "Cera si Triceratops 🎂",
    dinoBio: "Cera merayakan pesta ulang tahun dinosaurus dengan kue manis dan lilin!",
    coverBadge: "🎉 Tanggal & Ulang Tahun",
    readingSections: [
      {
        id: "u8_s1",
        title: "课文一：祝你生日快乐 (Percakapan: Selamat Ulang Tahun)",
        sentences: [
          { hanzi: "你的生日是几月几号？", pinyin: "Nǐ de shēngrì shì jǐ yuè jǐ hào?", indo: "Ulang tahunmu tanggal berapa bulan berapa?" },
          { hanzi: "我的生日是九月二十八号。", pinyin: "Wǒ de shēngrì shì jiǔ yuè èrshíbā hào.", indo: "Ulang tahun saya tanggal 28 September." },
          { hanzi: "你今年几岁了？", pinyin: "Nǐ jīnnián jǐ suì le?", indo: "Tahun ini kamu berapa tahun usianya?" },
          { hanzi: "我今年十岁了。", pinyin: "Wǒ jīnnián shí suì le.", indo: "Tahun ini saya berusia 10 tahun." },
          { hanzi: "祝你生日快乐，这是送给你的礼物！", pinyin: "Zhù nǐ shēngrì kuàilè, zhè shì sòng gěi nǐ de lǐwù!", indo: "Selamat ulang tahun untukmu, ini kado yang kuberikan untukmu!" }
        ]
      },
      {
        id: "u8_s2",
        title: "课文二：生日聚会 (Teks Bacaan: Pesta Ulang Tahun)",
        sentences: [
          { hanzi: "今天是小华的十岁生日。", pinyin: "Jīntiān shì Xiǎohuá de shí suì shēngrì.", indo: "Hari ini adalah ulang tahun Xiaohua yang ke-10." },
          { hanzi: "很多好朋友都来到他家里祝贺。", pinyin: "Hěn duō hǎo péngyou dōu lái dào tā jiā lǐ zhùhè.", indo: "Banyak teman baik datang ke rumahnya memberi ucapan selamat." },
          { hanzi: "桌子上放着一个大大的巧克力蛋糕。", pinyin: "Zhuōzi shang fàng zhe yí ge dàdà de qiǎokèlì dàngāo.", indo: "Di atas meja terletak sebuah kue cokelat yang besar." },
          { hanzi: "大家一起唱中文生日歌，吃蛋糕。", pinyin: "Dàjiā yìqǐ chàng Zhōngwén shēngrì gē, chī dàngāo.", indo: "Semua orang bersama-sama menyanyikan lagu ulang tahun bahasa Mandarin dan makan kue." },
          { hanzi: "小华今天过得非常开心。", pinyin: "Xiǎohuá jīntiān guò de fēicháng kāixīn.", indo: "Xiaohua melewati hari ini dengan sangat gembira." }
        ]
      }
    ],
    vocabulary: [
      { hanzi: "生日", pinyin: "shēngrì", indo: "ulang tahun", type: "kata benda", strokeTarget: "生" },
      { hanzi: "月", pinyin: "yuè", indo: "bulan (kalender)", type: "kata benda", strokeTarget: "月" },
      { hanzi: "号", pinyin: "hào", indo: "tanggal / nomor", type: "kata benda", strokeTarget: "号" },
      { hanzi: "岁", pinyin: "suì", indo: "tahun (usia / umur)", type: "kata penggolong", strokeTarget: "岁" },
      { hanzi: "快乐", pinyin: "kuàilè", indo: "gembira / bahagia", type: "kata sifat", strokeTarget: "乐" },
      { hanzi: "蛋糕", pinyin: "dàngāo", indo: "kue tar", type: "kata benda", strokeTarget: "糕" },
      { hanzi: "礼物", pinyin: "lǐwù", indo: "hadiah / kado", type: "kata benda", strokeTarget: "礼" },
      { hanzi: "送", pinyin: "sòng", indo: "memberi / mengantar", type: "kata kerja", strokeTarget: "送" }
    ],
    grammarNotes: [
      { pattern: "Bulan + 月 + Tanggal + 号", explanation: "Urutan penanggalan Mandarin selalu dari besar ke kecil: 2026年9月28号." },
      { pattern: "几岁 (Jǐ suì) vs 多大 (Duō dà)", explanation: "几岁 digunakan untuk menanyakan usia anak-anak (di bawah 10 tahun), 多大 untuk usia umum/dewasa." }
    ]
  },
  {
    id: 9,
    unitNumber: 9,
    title: "第九课：我们去公园",
    titlePinyin: "Dì jiǔ kè: Wǒmen qù gōngyuán",
    titleIndo: "Pelajaran 9: Kita Pergi ke Taman (Arah & Transportasi)",
    themeDino: "Ptero si Pterodactyl 🚲",
    dinoBio: "Ptero menunjukkan arah jalan dari atas langit: depan, belakang, kiri, dan kanan!",
    coverBadge: "🌳 Taman & Penunjuk Jalan",
    readingSections: [
      {
        id: "u9_s1",
        title: "课文一：去公园怎么走 (Percakapan: Menuju ke Taman Lewat Mana?)",
        sentences: [
          { hanzi: "请问，去恐龙公园怎么走？", pinyin: "Qǐngwèn, qù kǒnglóng gōngyuán zěnme zǒu?", indo: "Permisi, bagaimana cara pergi ke Taman Dinosaurus?" },
          { hanzi: "往前一直走，在十字路口向左拐。", pinyin: "Wǎng qián yìzhí zǒu, zài shízìlùkǒu xiàng zuǒ guǎi.", indo: "Lurus terus ke depan, di perempatan belok ke kiri." },
          { hanzi: "公园离这里远不远？", pinyin: "Gōngyuán lí zhèlǐ yuǎn bu yuǎn?", indo: "Apakah taman dari sini jauh atau tidak?" },
          { hanzi: "不远，走路大约十分钟就到了。", pinyin: "Bù yuǎn, zǒulù dàyuē shí fēnzhōng jiù dào le.", indo: "Tidak jauh, jalan kaki kira-kira 10 menit sudah sampai." },
          { hanzi: "太谢谢您了！不用谢。", pinyin: "Tài xièxie nín le! Bú yòng xiè.", indo: "Terima kasih banyak! Sama-sama." }
        ]
      },
      {
        id: "u9_s2",
        title: "课文二：在公园玩耍 (Teks Bacaan: Bermain di Taman)",
        sentences: [
          { hanzi: "今天天气晴朗，我和朋友骑自行车去公园。", pinyin: "Jīntiān tiānqì qínglǎng, wǒ hé péngyou qí zìxíngchē qù gōngyuán.", indo: "Hari ini cuaca cerah, saya dan kawan naik sepeda pergi ke taman." },
          { hanzi: "公园的前面有一个大湖，湖里有很多小鱼。", pinyin: "Gōngyuán de qiánmiàn yǒu yí ge dà hú, hú lǐ yǒu hěn duō xiǎoyú.", indo: "Di bagian depan taman ada sebuah danau besar, di dalamnya ada banyak ikan kecil." },
          { hanzi: "湖的左边是一片绿色的草地。", pinyin: "Hú de zuǒbiān shì yí piàn lǜsè de cǎodì.", indo: "Di sebelah kiri danau adalah hamparan padang rumput hijau." },
          { hanzi: "大家在草地上踢球、放风筝，开心极了。", pinyin: "Dàjiā zài cǎodì shang tīqiú, fàng fēngzheng, kāixīn jí le.", indo: "Semua orang di atas rumput bermain bola dan bermain layangan, sangat senang." },
          { hanzi: "夕阳西下，我们才依依不舍地回家。", pinyin: "Xīyáng xīxià, wǒmen cái yīyībùshě de huíjiā.", indo: "Matahari terbenam di barat, barulah kami pulang dengan enggan." }
        ]
      }
    ],
    vocabulary: [
      { hanzi: "公园", pinyin: "gōngyuán", indo: "taman", type: "kata benda", strokeTarget: "园" },
      { hanzi: "坐车", pinyin: "zuòchē", indo: "naik mobil / kendaraan", type: "frasa kerja", strokeTarget: "坐" },
      { hanzi: "自行车", pinyin: "zìxíngchē", indo: "sepeda", type: "kata benda", strokeTarget: "车" },
      { hanzi: "前面", pinyin: "qiánmiàn", indo: "depan / di depan", type: "kata arah", strokeTarget: "前" },
      { hanzi: "后面", pinyin: "hòumiàn", indo: "belakang / di belakang", type: "kata arah", strokeTarget: "后" },
      { hanzi: "左边", pinyin: "zuǒbiān", indo: "sebelah kiri", type: "kata arah", strokeTarget: "左" },
      { hanzi: "右边", pinyin: "yòubiān", indo: "sebelah kanan", type: "kata arah", strokeTarget: "右" },
      { hanzi: "离", pinyin: "lí", indo: "dari / berjarak dari", type: "kata depan", strokeTarget: "远" }
    ],
    grammarNotes: [
      { pattern: "往 + Arah + 走/拐 (Wǎng ... zǒu/guǎi)", explanation: "往左拐 (belok kiri), 往前走 (jalan ke depan)." },
      { pattern: "Tempat A + 离 + Tempat B + 远 / 近", explanation: "学校离我家很近 (Sekolah sangat dekat dari rumah saya)." }
    ]
  },
  {
    id: 10,
    unitNumber: 10,
    title: "第十课：我的一天",
    titlePinyin: "Dì shí kè: Wǒ de yì tiān",
    titleIndo: "Pelajaran 10: Keseharianku (Evaluasi Komprehensif)",
    themeDino: "Rexy si T-Rex 🌟",
    dinoBio: "Rexy telah menyelesaikan semua pelajaran dan siap menjadi Master Bahasa Mandarin!",
    coverBadge: "🏆 Rutinitas & Ulasan",
    readingSections: [
      {
        id: "u10_s1",
        title: "课文一：充实的一天 (Percakapan: Hari yang Produktif)",
        sentences: [
          { hanzi: "你今天都做了什么？", pinyin: "Nǐ jīntiān dōu zuò le shénme?", indo: "Hari ini kamu sudah melakukan apa saja?" },
          { hanzi: "我上午在学校上了汉语课和数学课。", pinyin: "Wǒ shàngwǔ zài xuéxiào shàng le Hànyǔ kè hé shùxué kè.", indo: "Saya pagi hari di sekolah mengikuti pelajaran Mandarin dan matematika." },
          { hanzi: "下午放学以后呢？", pinyin: "Xiàwǔ fàngxué yǐhòu ne?", indo: "Setelah pulang sekolah di sore hari bagaimana?" },
          { hanzi: "我帮妈妈做家务，然后写完作业。", pinyin: "Wǒ bāng māma zuò jiāwù, ránhòu xiě wán zuòyè.", indo: "Saya membantu ibu mengerjakan pekerjaan rumah, lalu menyelesaikan PR." },
          { hanzi: "你真是个既懂事又勤奋的好孩子！", pinyin: "Nǐ zhēn shì ge jì dǒngshì yòu qínfèn de hǎo háizi!", indo: "Kamu sungguh anak baik yang pengertian dan rajin!" }
        ]
      },
      {
        id: "u10_s2",
        title: "课文二：快乐的成长 (Teks Bacaan: Tumbuh Berkembang dengan Bahagia)",
        sentences: [
          { hanzi: "时间过得真快，学期就要结束了。", pinyin: "Shíjiān guò de zhēn kuài, xuéqī jiù yào jiéshù le.", indo: "Waktu berlalu begitu cepat, semester akan segera berakhir." },
          { hanzi: "在这一学期里，我学会了很多汉字和汉语会话。", pinyin: "Zài zhè yì xuéqī lǐ, wǒ xuéhuì le hěn duō hànzì hé Hànyǔ huìhuà.", indo: "Di satu semester ini, saya telah menguasai banyak huruf Hanzi dan percakapan Mandarin." },
          { hanzi: "我认识了许多恐龙好朋友，大家互相帮助。", pinyin: "Wǒ rènshi le xǔduō kǒnglóng hǎo péngyou, dàjiā hùxiāng bāngzhù.", indo: "Saya mengenal banyak teman baik dinosaurus, semua saling membantu." },
          { hanzi: "老师夸我进步很大，我心里高兴极了。", pinyin: "Lǎoshī kuā wǒ jìnbù hěn dà, wǒ xīnlǐ gāoxìng jí le.", indo: "Guru memuji kemajuan saya sangat besar, hati saya sungguh sangat gembira." },
          { hanzi: "未来我会继续努力，把汉语学得更好！", pinyin: "Wèilái wǒ huì jìxù nǔlì, bǎ Hànyǔ xué de gèng hǎo!", indo: "Di masa depan saya akan terus berusaha keras, belajar bahasa Mandarin dengan lebih baik lagi!" }
        ]
      }
    ],
    vocabulary: [
      { hanzi: "吃饭", pinyin: "chīfàn", indo: "makan nasi / makan", type: "kata kerja", strokeTarget: "饭" },
      { hanzi: "做作业", pinyin: "zuò zuòyè", indo: "mengerjakan PR", type: "frasa kerja", strokeTarget: "作" },
      { hanzi: "看电视", pinyin: "kàn diànshì", indo: "menonton TV", type: "frasa kerja", strokeTarget: "视" },
      { hanzi: "听音乐", pinyin: "tīng yīnyuè", indo: "mendengarkan musik", type: "frasa kerja", strokeTarget: "听" },
      { hanzi: "帮", pinyin: "bāng", indo: "membantu", type: "kata kerja", strokeTarget: "帮" },
      { hanzi: "做家务", pinyin: "zuò jiāwù", indo: "mengerjakan pekerjaan rumah", type: "frasa kerja", strokeTarget: "家" },
      { hanzi: "开心", pinyin: "kāixīn", indo: "gembira / bahagia", type: "kata sifat", strokeTarget: "开" },
      { hanzi: "努力", pinyin: "nǔlì", indo: "rajin / berusaha giat", type: "kata kerja/sifat", strokeTarget: "力" }
    ],
    grammarNotes: [
      { pattern: "先...然后... (Xiān... ránhòu...)", explanation: "Menyatakan urutan perbuatan: 我先做作业，然后看电视 (Saya mengerjakan PR dulu, setelah itu menonton TV)." },
      { pattern: "...极了 (... jí le)", explanation: "Sangat / luar biasa: 高兴极了 (Gembira luar biasa), 好吃极了 (Enak sekali)." }
    ]
  }
];
