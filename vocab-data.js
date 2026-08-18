/**
 * HAN YU 3 - Database Kosakata & Guratan Hanzi per Unit
 * Berisi detail karakter, radikal, jumlah guratan, nama urutan guratan, dan contoh kalimat
 */

const HANZI_STROKE_DATA = {
  // Unit 1
  "学": {
    pinyin: "xué",
    meaning: "Belajar / Menuntut ilmu",
    unit: 1,
    radical: "子 (Zǐ / Anak)",
    strokeCount: 8,
    strokeNames: ["点 (Diǎn)", "点 (Diǎn)", "撇 (Piě)", "点 (Diǎn)", "横撇 (Héngpiě)", "横撇/弯钩 (Wāngōu)", "竖钩 (Shùgōu)", "横 (Héng)"],
    example: "我们在学校学习汉语。(Kami belajar bahasa Mandarin di sekolah.)"
  },
  "老": {
    pinyin: "lǎo",
    meaning: "Tua / Guru / Senior",
    unit: 1,
    radical: "老 (Lǎo)",
    strokeCount: 6,
    strokeNames: ["横 (Héng)", "竖 (Shù)", "横 (Héng)", "撇 (Piě)", "撇 (Piě)", "竖弯钩 (Shùwāngōu)"],
    example: "王老师教我们汉字。(Guru Wang mengajari kami karakter Hanzi.)"
  },
  "同": {
    pinyin: "tóng",
    meaning: "Sama / Bersama",
    unit: 1,
    radical: "口 (Kǒu / Mulut)",
    strokeCount: 6,
    strokeNames: ["竖 (Shù)", "横折钩 (Héngzhégōu)", "横 (Héng)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)"],
    example: "我和同学们一起玩。(Saya bermain bersama teman sekelas.)"
  },
  "室": {
    pinyin: "shì",
    meaning: "Ruangan / Kamar",
    unit: 1,
    radical: "宀 (Mián / Atap)",
    strokeCount: 9,
    strokeNames: ["点 (Diǎn)", "点 (Diǎn)", "横撇 (Héngpiě)", "横 (Héng)", "竖 (Shù)", "横 (Héng)", "撇折 (Piězhé)", "点 (Diǎn)", "横 (Héng)"],
    example: "我们的教室非常明亮。(Ruang kelas kami sangat terang.)"
  },
  "习": {
    pinyin: "xí",
    meaning: "Berlatih / Mengulang",
    unit: 1,
    radical: "乙 (Yǐ)",
    strokeCount: 3,
    strokeNames: ["横折钩 (Héngzhégōu)", "点 (Diǎn)", "提 (Tí)"],
    example: "每天要复习生词。(Setiap hari harus mengulang kosakata baru.)"
  },
  "汉": {
    pinyin: "hàn",
    meaning: "Suku Han / Mandarin",
    unit: 1,
    radical: "氵 (Sān Diǎn Shuǐ / Air)",
    strokeCount: 5,
    strokeNames: ["点 (Diǎn)", "点 (Diǎn)", "提 (Tí)", "横撇 (Héngpiě)", "捺 (Nà)"],
    example: "汉语很有趣。(Bahasa Mandarin sangat menarik.)"
  },
  "朋": {
    pinyin: "péng",
    meaning: "Teman / Sahabat",
    unit: 1,
    radical: "月 (Yuè / Bulan)",
    strokeCount: 8,
    strokeNames: ["撇 (Piě)", "横折钩 (Héngzhégōu)", "横 (Héng)", "横 (Héng)", "撇 (Piě)", "横折钩 (Héngzhégōu)", "横 (Héng)", "横 (Héng)"],
    example: "他是我最好的朋友。(Dia adalah teman terbaik saya.)"
  },
  "高": {
    pinyin: "gāo",
    meaning: "Tinggi / Senang",
    unit: 1,
    radical: "高 (Gāo)",
    strokeCount: 10,
    strokeNames: ["点 (Diǎn)", "横 (Héng)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "竖 (Shù)", "横折钩 (Héngzhégōu)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)"],
    example: "认识你很高兴。(Senang berkenalan denganmu.)"
  },

  // Unit 2
  "包": {
    pinyin: "bāo",
    meaning: "Tas / Membungkus",
    unit: 2,
    radical: "勹 (Bāozìtóu)",
    strokeCount: 5,
    strokeNames: ["撇 (Piě)", "横折钩 (Héngzhégōu)", "横折 (Héngzhé)", "横 (Héng)", "竖弯钩 (Shùwāngōu)"],
    example: "这是我的新书包。(Ini adalah tas sekolah baruku.)"
  },
  "本": {
    pinyin: "běn",
    meaning: "Buku (akar / jilid)",
    unit: 2,
    radical: "木 (Mù / Kayu)",
    strokeCount: 5,
    strokeNames: ["横 (Héng)", "竖 (Shù)", "撇 (Piě)", "捺 (Nà)", "横 (Héng)"],
    example: "我有三本课本。(Saya mempunyai tiga buku pelajaran.)"
  },
  "笔": {
    pinyin: "bǐ",
    meaning: "Pena / Pensil / Alat tulis",
    unit: 2,
    radical: "⺮ (Zhúzìtóu / Bambu)",
    strokeCount: 10,
    strokeNames: ["撇 (Piě)", "横 (Héng)", "点 (Diǎn)", "撇 (Piě)", "横 (Héng)", "点 (Diǎn)", "横 (Héng)", "竖 (Shù)", "横 (Héng)", "竖弯钩 (Shùwāngōu)"],
    example: "这支铅笔很好写。(Pensil ini sangat enak dipakai menulis.)"
  },
  "尺": {
    pinyin: "chǐ",
    meaning: "Penggaris / Ukuran panjang",
    unit: 2,
    radical: "尸 (Shī)",
    strokeCount: 4,
    strokeNames: ["横折 (Héngzhé)", "横 (Héng)", "撇 (Piě)", "捺 (Nà)"],
    example: "请借我一把尺子。(Tolong pinjamkan saya satu penggaris.)"
  },
  "皮": {
    pinyin: "pí",
    meaning: "Karet / Kulit",
    unit: 2,
    radical: "皮 (Pí)",
    strokeCount: 5,
    strokeNames: ["横钩 (Hénggōu)", "撇 (Piě)", "竖 (Shù)", "横撇 (Héngpiě)", "捺 (Nà)"],
    example: "我有白色橡皮。(Saya memiliki penghapus putih.)"
  },
  "里": {
    pinyin: "lǐ",
    meaning: "Di dalam / Li (jarak)",
    unit: 2,
    radical: "里 (Lǐ)",
    strokeCount: 7,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)", "竖 (Shù)", "横 (Héng)", "横 (Héng)"],
    example: "书包里面有很多文具。(Di dalam tas ada banyak alat tulis.)"
  },
  "色": {
    pinyin: "sè",
    meaning: "Warna",
    unit: 2,
    radical: "色 (Sè)",
    strokeCount: 6,
    strokeNames: ["撇 (Piě)", "横撇 (Héngpiě)", "横折 (Héngzhé)", "竖 (Shù)", "横 (Héng)", "竖弯钩 (Shùwāngōu)"],
    example: "书包是什么颜色的？(Tas itu warnanya apa?)"
  },
  "多": {
    pinyin: "duō",
    meaning: "Banyak",
    unit: 2,
    radical: "夕 (Xī / Senja)",
    strokeCount: 6,
    strokeNames: ["撇 (Piě)", "横撇 (Héngpiě)", "点 (Diǎn)", "撇 (Piě)", "横撇 (Héngpiě)", "点 (Diǎn)"],
    example: "教室里有很多学生。(Di kelas ada banyak murid.)"
  },

  // Unit 3
  "现": {
    pinyin: "xiàn",
    meaning: "Kini / Muncul",
    unit: 3,
    radical: "王 (Wáng / Giok)",
    strokeCount: 8,
    strokeNames: ["横 (Héng)", "横 (Héng)", "竖 (Shù)", "提 (Tí)", "竖 (Shù)", "横折 (Héngzhé)", "撇 (Piě)", "竖弯钩 (Shùwāngōu)"],
    example: "现在是八点半。(Sekarang jam 8 lewat 30 menit.)"
  },
  "点": {
    pinyin: "diǎn",
    meaning: "Pukul / Titik / Sedikit",
    unit: 3,
    radical: "灬 (Huǒ / Api)",
    strokeCount: 9,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "竖 (Shù)", "横 (Héng)", "点 (Diǎn)", "点 (Diǎn)", "点 (Diǎn)", "点 (Diǎn)"],
    example: "现在几点了？(Sekarang jam berapa?)"
  },
  "分": {
    pinyin: "fēn",
    meaning: "Menit / Membagi",
    unit: 3,
    radical: "刀 (Dāo / Pisau)",
    strokeCount: 4,
    strokeNames: ["撇 (Piě)", "捺 (Nà)", "横折钩 (Héngzhégōu)", "撇 (Piě)"],
    example: "差五分九点。(Kurang 5 menit jam 9.)"
  },
  "半": {
    pinyin: "bàn",
    meaning: "Setengah / Separuh",
    unit: 3,
    radical: "十 (Shí / Sepuluh)",
    strokeCount: 5,
    strokeNames: ["点 (Diǎn)", "撇 (Piě)", "横 (Héng)", "横 (Héng)", "竖 (Shù)"],
    example: "我们七点半上学。(Kami berangkat sekolah jam 7.30.)"
  },
  "早": {
    pinyin: "zǎo",
    meaning: "Pagi / Awal",
    unit: 3,
    radical: "日 (Rì / Matahari)",
    strokeCount: 6,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)", "横 (Héng)", "竖 (Shù)"],
    example: "早上好，王老师。(Selamat pagi, Guru Wang.)"
  },
  "晚": {
    pinyin: "wǎn",
    meaning: "Malam / Terlambat",
    unit: 3,
    radical: "日 (Rì / Matahari)",
    strokeCount: 11,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)", "撇 (Piě)", "横折钩 (Héngzhégōu)", "撇 (Piě)", "横撇 (Héngpiě)", "点 (Diǎn)", "撇 (Piě)", "竖弯钩 (Shùwāngōu)"],
    example: "我晚上九点睡觉。(Saya tidur jam 9 malam.)"
  },
  "床": {
    pinyin: "chuáng",
    meaning: "Tempat tidur / Ranjang",
    unit: 3,
    radical: "广 (Guǎng / Atap Luas)",
    strokeCount: 7,
    strokeNames: ["点 (Diǎn)", "横 (Héng)", "撇 (Piě)", "横 (Héng)", "竖 (Shù)", "撇 (Piě)", "捺 (Nà)"],
    example: "早上六点起床。(Bangun tidur jam 6 pagi.)"
  },
  "睡": {
    pinyin: "shuì",
    meaning: "Tidur",
    unit: 3,
    radical: "目 (Mù / Mata)",
    strokeCount: 13,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)", "横 (Héng)", "撇 (Piě)", "横 (Héng)", "竖 (Shù)", "竖 (Shù)", "横 (Héng)", "横 (Héng)", "竖 (Shù)", "横 (Héng)"],
    example: "快去睡觉吧。(Cepatlah pergi tidur.)"
  },

  // Unit 4
  "气": {
    pinyin: "qì",
    meaning: "Udara / Nafas / Cuaca",
    unit: 4,
    radical: "气 (Qì)",
    strokeCount: 4,
    strokeNames: ["撇 (Piě)", "横 (Héng)", "横 (Héng)", "横折弯钩 (Héngzhéwāngōu)"],
    example: "今天天气真好。(Hari ini cuacanya sangat bagus.)"
  },
  "晴": {
    pinyin: "qíng",
    meaning: "Cerah (hari tanpa awan)",
    unit: 4,
    radical: "日 (Rì / Matahari)",
    strokeCount: 12,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)", "横 (Héng)", "横 (Héng)", "竖 (Shù)", "横 (Héng)", "竖 (Shù)", "横折钩 (Héngzhégōu)", "横 (Héng)", "横 (Héng)"],
    example: "今天是晴天。(Hari ini hari cerah.)"
  },
  "阴": {
    pinyin: "yīn",
    meaning: "Mendung / Teduh / Yin",
    unit: 4,
    radical: "阝 (Shuāng'ěrdāo)",
    strokeCount: 6,
    strokeNames: ["横撇弯钩 (Héngpiěwāngōu)", "竖 (Shù)", "撇 (Piě)", "点 (Diǎn)", "横折钩 (Héngzhégōu)", "撇 (Piě)"],
    example: "明天是阴天。(Besok mendung.)"
  },
  "雨": {
    pinyin: "yǔ",
    meaning: "Hujan",
    unit: 4,
    radical: "雨 (Yǔ)",
    strokeCount: 8,
    strokeNames: ["横 (Héng)", "竖 (Shù)", "横折钩 (Héngzhégōu)", "竖 (Shù)", "点 (Diǎn)", "点 (Diǎn)", "点 (Diǎn)", "点 (Diǎn)"],
    example: "外面正在下雨。(Di luar sedang turun hujan.)"
  },
  "雪": {
    pinyin: "xuě",
    meaning: "Salju",
    unit: 4,
    radical: "雨 (Yǔ / Hujan)",
    strokeCount: 11,
    strokeNames: ["横 (Héng)", "点 (Diǎn)", "横撇 (Héngpiě)", "竖 (Shù)", "点 (Diǎn)", "点 (Diǎn)", "点 (Diǎn)", "点 (Diǎn)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)"],
    example: "冬天下雪了。(Musim dingin turun salju.)"
  },
  "冷": {
    pinyin: "lěng",
    meaning: "Dingin",
    unit: 4,
    radical: "冫 (Liǎng Diǎn Shuǐ / Es)",
    strokeCount: 7,
    strokeNames: ["点 (Diǎn)", "提 (Tí)", "撇 (Piě)", "捺 (Nà)", "点 (Diǎn)", "横折 (Héngzhé)", "点 (Diǎn)"],
    example: "冬天非常冷。(Musim dingin sangat dingin.)"
  },
  "热": {
    pinyin: "rè",
    meaning: "Panas",
    unit: 4,
    radical: "灬 (Huǒ / Api)",
    strokeCount: 10,
    strokeNames: ["横 (Héng)", "竖 (Shù)", "横 (Héng)", "撇 (Piě)", "竖弯钩 (Shùwāngōu)", "点 (Diǎn)", "点 (Diǎn)", "点 (Diǎn)", "点 (Diǎn)", "点 (Diǎn)"],
    example: "夏天天气很热。(Musim panas cuacanya sangat panas.)"
  },
  "风": {
    pinyin: "fēng",
    meaning: "Angin",
    unit: 4,
    radical: "风 (Fēng)",
    strokeCount: 4,
    strokeNames: ["撇 (Piě)", "横折弯钩 (Héngzhéwāngōu)", "撇 (Piě)", "点 (Diǎn)"],
    example: "今天刮大风。(Hari ini berangin kencang.)"
  },

  // Unit 5
  "运": {
    pinyin: "yùn",
    meaning: "Gerak / Olahraga / Angkut",
    unit: 5,
    radical: "辶 (Zǒuzhīdǐ)",
    strokeCount: 7,
    strokeNames: ["横 (Héng)", "横 (Héng)", "撇折 (Piězhé)", "点 (Diǎn)", "点 (Diǎn)", "横折折撇 (Héngzhézhépiě)", "捺 (Nà)"],
    example: "我们要多做运动。(Kita harus sering berolahraga.)"
  },
  "喜": {
    pinyin: "xǐ",
    meaning: "Suka / Gembira",
    unit: 5,
    radical: "口 (Kǒu / Mulut)",
    strokeCount: 12,
    strokeNames: ["横 (Héng)", "竖 (Shù)", "横 (Héng)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "点 (Diǎn)", "撇 (Piě)", "横 (Héng)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)"],
    example: "我喜欢游泳。(Saya suka berenang.)"
  },
  "足": {
    pinyin: "zú",
    meaning: "Kaki / Cukup",
    unit: 5,
    radical: "足 (Zú)",
    strokeCount: 7,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "竖 (Shù)", "横 (Héng)", "撇 (Piě)", "捺 (Nà)"],
    example: "弟弟喜欢踢足球。(Adik laki-laki suka bermain sepak bola.)"
  },
  "打": {
    pinyin: "dǎ",
    meaning: "Memukul / Memainkan (tangan)",
    unit: 5,
    radical: "扌 (Tíshǒupáng / Tangan)",
    strokeCount: 5,
    strokeNames: ["横 (Héng)", "竖钩 (Shùgōu)", "提 (Tí)", "横 (Héng)", "竖钩 (Shùgōu)"],
    example: "你会打篮球吗？(Apakah kamu bisa bermain bola basket?)"
  },
  "游": {
    pinyin: "yóu",
    meaning: "Berenang / Berkelana",
    unit: 5,
    radical: "氵 (Sān Diǎn Shuǐ)",
    strokeCount: 12,
    strokeNames: ["点 (Diǎn)", "点 (Diǎn)", "提 (Tí)", "点 (Diǎn)", "横 (Héng)", "横折钩 (Héngzhégōu)", "撇 (Piě)", "撇 (Piě)", "横 (Héng)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)"],
    example: "小鱼在水里游。(Ikan-ikan kecil berenang di air.)"
  },
  "跑": {
    pinyin: "pǎo",
    meaning: "Lari / Berlari",
    unit: 5,
    radical: "𧾷 (Zúzìpáng / Kaki)",
    strokeCount: 12,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "竖 (Shù)", "横 (Héng)", "撇 (Piě)", "提 (Tí)", "撇 (Piě)", "横折钩 (Héngzhégōu)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)"],
    example: "我和爸爸一起跑步。(Saya berlari bersama ayah.)"
  },
  "会": {
    pinyin: "huì",
    meaning: "Bisa / Mampu / Rapat",
    unit: 5,
    radical: "人 (Rén / Orang)",
    strokeCount: 6,
    strokeNames: ["撇 (Piě)", "捺 (Nà)", "横 (Héng)", "横 (Héng)", "撇折 (Piězhé)", "点 (Diǎn)"],
    example: "我会说汉语。(Saya bisa berbicara bahasa Mandarin.)"
  },
  "身": {
    pinyin: "shēn",
    meaning: "Badan / Tubuh",
    unit: 5,
    radical: "身 (Shēn)",
    strokeCount: 7,
    strokeNames: ["撇 (Piě)", "竖 (Shù)", "横折钩 (Héngzhégōu)", "横 (Héng)", "横 (Héng)", "撇 (Piě)", "提 (Tí)"],
    example: "祝你身体健康！(Semoga badanmu selalu sehat!)"
  },

  // Unit 6
  "果": {
    pinyin: "guǒ",
    meaning: "Buah / Hasil",
    unit: 6,
    radical: "木 (Mù / Kayu)",
    strokeCount: 8,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)", "横 (Héng)", "竖 (Shù)", "撇 (Piě)", "捺 (Nà)"],
    example: "我爱吃水果。(Saya suka makan buah-buahan.)"
  },
  "苹": {
    pinyin: "píng",
    meaning: "Apel",
    unit: 6,
    radical: "艹 (Cǎozìtóu / Rumput)",
    strokeCount: 8,
    strokeNames: ["横 (Héng)", "竖 (Shù)", "竖 (Shù)", "横 (Héng)", "点 (Diǎn)", "撇 (Piě)", "横 (Héng)", "竖 (Shù)"],
    example: "红苹果很甜。(Apel merah sangat manis.)"
  },
  "香": {
    pinyin: "xiāng",
    meaning: "Harum / Wangi / Pisang",
    unit: 6,
    radical: "香 (Xiāng)",
    strokeCount: 9,
    strokeNames: ["撇 (Piě)", "横 (Héng)", "竖 (Shù)", "撇 (Piě)", "捺 (Nà)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)"],
    example: "这根香蕉很好吃。(Pisang ini sangat lezat.)"
  },
  "西": {
    pinyin: "xī",
    meaning: "Barat / Semangka",
    unit: 6,
    radical: "西 (Xī)",
    strokeCount: 6,
    strokeNames: ["横 (Héng)", "竖 (Shù)", "横折 (Héngzhé)", "撇 (Piě)", "竖弯 (Shùwān)", "横 (Héng)"],
    example: "买一个大西瓜。(Membeli satu buah semangka besar.)"
  },
  "买": {
    pinyin: "mǎi",
    meaning: "Membeli",
    unit: 6,
    radical: "乛 (Hénggōu)",
    strokeCount: 6,
    strokeNames: ["横撇 (Héngpiě)", "点 (Diǎn)", "点 (Diǎn)", "横折钩 (Héngzhégōu)", "撇 (Piě)", "点 (Diǎn)"],
    example: "我想买铅笔。(Saya ingin membeli pensil.)"
  },
  "卖": {
    pinyin: "mài",
    meaning: "Menjual",
    unit: 6,
    radical: "十 (Shí / Sepuluh)",
    strokeCount: 8,
    strokeNames: ["横 (Héng)", "竖 (Shù)", "横撇 (Héngpiě)", "点 (Diǎn)", "点 (Diǎn)", "横折钩 (Héngzhégōu)", "撇 (Piě)", "点 (Diǎn)"],
    example: "苹果怎么卖？(Bagaimana jual apel ini?)"
  },
  "钱": {
    pinyin: "qián",
    meaning: "Uang",
    unit: 6,
    radical: "钅 (Jīnzìpáng / Logam)",
    strokeCount: 10,
    strokeNames: ["撇 (Piě)", "横 (Héng)", "横 (Héng)", "提 (Tí)", "横 (Héng)", "斜钩 (Xiégōu)", "撇 (Piě)", "点 (Diǎn)", "撇 (Piě)", "点 (Diǎn)"],
    example: "一共多少钱？(Totalnya berapa harganya?)"
  },
  "块": {
    pinyin: "kuài",
    meaning: "Bongkah / Yuan (uang)",
    unit: 6,
    radical: "土 (Tǔ / Tanah)",
    strokeCount: 7,
    strokeNames: ["横 (Héng)", "竖 (Shù)", "提 (Tí)", "横折 (Héngzhé)", "横 (Héng)", "撇 (Piě)", "捺 (Nà)"],
    example: "这块蛋糕五块钱。(Kue ini harganya 5 kuai.)"
  },

  // Unit 7
  "动": {
    pinyin: "dòng",
    meaning: "Gerak / Hewan",
    unit: 7,
    radical: "力 (Lì / Tenaga)",
    strokeCount: 6,
    strokeNames: ["横 (Héng)", "横 (Héng)", "竖折 (Shùzhé)", "横 (Héng)", "横折钩 (Héngzhégōu)", "撇 (Piě)"],
    example: "动物园里有很多动物。(Di kebun binatang ada banyak hewan.)"
  },
  "猫": {
    pinyin: "māo",
    meaning: "Kucing / Panda",
    unit: 7,
    radical: "犭 (Fǎnyuánpáng / Hewan)",
    strokeCount: 11,
    strokeNames: ["撇 (Piě)", "弯钩 (Wāngōu)", "撇 (Piě)", "横 (Héng)", "竖 (Shù)", "竖 (Shù)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "竖 (Shù)", "横 (Héng)"],
    example: "大熊猫胖胖的。(Panda raksasa itu gemuk-gemuk.)"
  },
  "猴": {
    pinyin: "hóu",
    meaning: "Monyet / Kera",
    unit: 7,
    radical: "犭 (Fǎnyuánpáng)",
    strokeCount: 12,
    strokeNames: ["撇 (Piě)", "弯钩 (Wāngōu)", "撇 (Piě)", "撇 (Piě)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)", "撇 (Piě)", "横 (Héng)", "横 (Héng)", "捺 (Nà)"],
    example: "小猴子真聪明。(Monyet kecil sungguh cerdas.)"
  },
  "象": {
    pinyin: "xiàng",
    meaning: "Gajah / Rupa",
    unit: 7,
    radical: "豕 (Shǐ)",
    strokeCount: 11,
    strokeNames: ["撇 (Piě)", "横撇 (Héngpiě)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "撇 (Piě)", "弯钩 (Wāngōu)", "撇 (Piě)", "撇 (Piě)", "撇 (Piě)", "捺 (Nà)"],
    example: "大象的鼻子很长。(Belalai gajah sangat panjang.)"
  },
  "虎": {
    pinyin: "hǔ",
    meaning: "Harimau",
    unit: 7,
    radical: "虍 (Hūzìtóu)",
    strokeCount: 8,
    strokeNames: ["竖 (Shù)", "横 (Héng)", "横折 (Héngzhé)", "撇 (Piě)", "横 (Héng)", "竖弯钩 (Shùwāngōu)", "撇 (Piě)", "横折 (Héngzhé)"],
    example: "老虎在草地上跑。(Harimau berlari di atas rumput.)"
  },
  "爱": {
    pinyin: "ài",
    meaning: "Cinta / Sayang / Lucu",
    unit: 7,
    radical: "爫 (Zhuǎzìtóu)",
    strokeCount: 10,
    strokeNames: ["撇 (Piě)", "点 (Diǎn)", "点 (Diǎn)", "撇 (Piě)", "点 (Diǎn)", "横撇 (Héngpiě)", "横 (Héng)", "撇 (Piě)", "弯钩 (Wāngōu)", "捺 (Nà)"],
    example: "小兔子很可爱。(Kelinci kecil sangat imut.)"
  },
  "只": {
    pinyin: "zhī",
    meaning: "Ekor (satuan hewan) / Hanya",
    unit: 7,
    radical: "口 (Kǒu / Mulut)",
    strokeCount: 5,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "撇 (Piě)", "点 (Diǎn)"],
    example: "这里有一只小鸟。(Di sini ada seekor burung kecil.)"
  },
  "条": {
    pinyin: "tiáo",
    meaning: "Helai / Ekor (panjang)",
    unit: 7,
    radical: "木 (Mù / Kayu)",
    strokeCount: 7,
    strokeNames: ["撇 (Piě)", "横撇 (Héngpiě)", "捺 (Nà)", "横 (Héng)", "竖 (Shù)", "撇 (Piě)", "点 (Diǎn)"],
    example: "水里有三条鱼。(Di air ada tiga ekor ikan.)"
  },

  // Unit 8
  "生": {
    pinyin: "shēng",
    meaning: "Lahir / Hidup / Mentah",
    unit: 8,
    radical: "生 (Shēng)",
    strokeCount: 5,
    strokeNames: ["撇 (Piě)", "横 (Héng)", "横 (Héng)", "竖 (Shù)", "横 (Héng)"],
    example: "今天是我的生日。(Hari ini adalah hari ulang tahunku.)"
  },
  "月": {
    pinyin: "yuè",
    meaning: "Bulan (kalender / langit)",
    unit: 8,
    radical: "月 (Yuè)",
    strokeCount: 4,
    strokeNames: ["撇 (Piě)", "横折钩 (Héngzhégōu)", "横 (Héng)", "横 (Héng)"],
    example: "九月二十八号。(Tanggal 28 September.)"
  },
  "号": {
    pinyin: "hào",
    meaning: "Tanggal / Nomor",
    unit: 8,
    radical: "口 (Kǒu / Mulut)",
    strokeCount: 5,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横折弯钩 (Héngzhéwāngōu)", "竖 (Shù)"],
    example: "今天几号？(Hari ini tanggal berapa?)"
  },
  "岁": {
    pinyin: "suì",
    meaning: "Tahun usia / Umur",
    unit: 8,
    radical: "山 (Shān / Gunung)",
    strokeCount: 6,
    strokeNames: ["竖 (Shù)", "竖折 (Shùzhé)", "竖 (Shù)", "撇 (Piě)", "横撇弯钩 (Héngpiěwāngōu)", "点 (Diǎn)"],
    example: "我今年十岁了。(Tahun ini saya berusia 10 tahun.)"
  },
  "乐": {
    pinyin: "lè / yuè",
    meaning: "Gembira / Musik",
    unit: 8,
    radical: "丿 (Piě)",
    strokeCount: 5,
    strokeNames: ["撇 (Piě)", "竖折 (Shùzhé)", "竖 (Shù)", "撇 (Piě)", "点 (Diǎn)"],
    example: "祝你生日快乐！(Selamat ulang tahun untukmu!)"
  },
  "糕": {
    pinyin: "gāo",
    meaning: "Kue / Pastry",
    unit: 8,
    radical: "米 (Mǐ / Beras)",
    strokeCount: 16,
    strokeNames: ["点 (Diǎn)", "撇 (Piě)", "横 (Héng)", "竖 (Shù)", "撇 (Piě)", "点 (Diǎn)", "点 (Diǎn)", "撇 (Piě)", "横 (Héng)", "竖 (Shù)", "横 (Héng)", "点 (Diǎn)", "点 (Diǎn)", "点 (Diǎn)", "点 (Diǎn)", "横 (Héng)"],
    example: "我们一起吃蛋糕。(Kami makan kue bersama.)"
  },
  "礼": {
    pinyin: "lǐ",
    meaning: "Hadiah / Sopan santun",
    unit: 8,
    radical: "礻 (Shìzìpáng)",
    strokeCount: 5,
    strokeNames: ["点 (Diǎn)", "横撇 (Héngpiě)", "竖 (Shù)", "点 (Diǎn)", "竖弯钩 (Shùwāngōu)"],
    example: "这是送给你的礼物。(Ini hadiah untukmu.)"
  },
  "送": {
    pinyin: "sòng",
    meaning: "Memberi / Mengantar",
    unit: 8,
    radical: "辶 (Zǒuzhīdǐ)",
    strokeCount: 9,
    strokeNames: ["点 (Diǎn)", "撇 (Piě)", "横 (Héng)", "横 (Héng)", "撇 (Piě)", "点 (Diǎn)", "点 (Diǎn)", "横折折撇 (Héngzhézhépiě)", "捺 (Nà)"],
    example: "妈妈送我一个书包。(Ibu menghadiahi saya sebuah tas sekolah.)"
  },

  // Unit 9
  "园": {
    pinyin: "yuán",
    meaning: "Taman / Kebun",
    unit: 9,
    radical: "囗 (Dàkǒukuāng)",
    strokeCount: 7,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "横 (Héng)", "撇 (Piě)", "竖弯钩 (Shùwāngōu)", "横 (Héng)"],
    example: "我们去公园玩吧。(Ayo kita pergi main ke taman.)"
  },
  "坐": {
    pinyin: "zuò",
    meaning: "Duduk / Naik kendaraan",
    unit: 9,
    radical: "土 (Tǔ / Tanah)",
    strokeCount: 7,
    strokeNames: ["撇 (Piě)", "点 (Diǎn)", "撇 (Piě)", "点 (Diǎn)", "横 (Héng)", "竖 (Shù)", "横 (Héng)"],
    example: "我们坐汽车去学校。(Kami naik mobil pergi ke sekolah.)"
  },
  "车": {
    pinyin: "chē",
    meaning: "Mobil / Kendaraan / Kereta",
    unit: 9,
    radical: "车 (Chē)",
    strokeCount: 4,
    strokeNames: ["横 (Héng)", "撇折 (Piězhé)", "横 (Héng)", "竖 (Shù)"],
    example: "我有一辆新自行车。(Saya memiliki sebuah sepeda baru.)"
  },
  "前": {
    pinyin: "qián",
    meaning: "Depan / Dahulu",
    unit: 9,
    radical: "刂 (Dāozìpáng / Pisau)",
    strokeCount: 9,
    strokeNames: ["点 (Diǎn)", "撇 (Piě)", "横 (Héng)", "竖 (Shù)", "横折钩 (Héngzhégōu)", "横 (Héng)", "横 (Héng)", "竖 (Shù)", "竖钩 (Shùgōu)"],
    example: "公园的前面是湖。(Di depan taman adalah danau.)"
  },
  "后": {
    pinyin: "hòu",
    meaning: "Belakang / Nanti",
    unit: 9,
    radical: "口 (Kǒu / Mulut)",
    strokeCount: 6,
    strokeNames: ["撇 (Piě)", "撇 (Piě)", "横 (Héng)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)"],
    example: "学校的后面有操场。(Di belakang sekolah ada lapangan.)"
  },
  "左": {
    pinyin: "zuǒ",
    meaning: "Kiri / Sebelah kiri",
    unit: 9,
    radical: "工 (Gōng / Kerja)",
    strokeCount: 5,
    strokeNames: ["横 (Héng)", "撇 (Piě)", "横 (Héng)", "竖 (Shù)", "横 (Héng)"],
    example: "向左拐。(Belok ke kiri.)"
  },
  "右": {
    pinyin: "yòu",
    meaning: "Kanan / Sebelah kanan",
    unit: 9,
    radical: "口 (Kǒu / Mulut)",
    strokeCount: 5,
    strokeNames: ["横 (Héng)", "撇 (Piě)", "竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)"],
    example: "往右边看。(Lihat ke arah kanan.)"
  },
  "远": {
    pinyin: "yuǎn",
    meaning: "Jauh",
    unit: 9,
    radical: "辶 (Zǒuzhīdǐ)",
    strokeCount: 7,
    strokeNames: ["横 (Héng)", "横 (Héng)", "撇 (Piě)", "竖弯钩 (Shùwāngōu)", "点 (Diǎn)", "横折折撇 (Héngzhézhépiě)", "捺 (Nà)"],
    example: "公园离这里不远。(Taman dari sini tidak jauh.)"
  },

  // Unit 10
  "饭": {
    pinyin: "fàn",
    meaning: "Nasi / Makanan",
    unit: 10,
    radical: "饣 (Shízìpáng / Makanan)",
    strokeCount: 7,
    strokeNames: ["撇 (Piě)", "横撇 (Héngpiě)", "竖提 (Shùtí)", "撇 (Piě)", "撇 (Piě)", "横撇 (Héngpiě)", "捺 (Nà)"],
    example: "我们一起吃午饭。(Kami makan siang bersama.)"
  },
  "作": {
    pinyin: "zuò",
    meaning: "Membuat / Pekerjaan",
    unit: 10,
    radical: "亻 (Dānrénpáng / Orang)",
    strokeCount: 7,
    strokeNames: ["撇 (Piě)", "竖 (Shù)", "撇 (Piě)", "横 (Héng)", "竖 (Shù)", "横 (Héng)", "横 (Héng)"],
    example: "回家做作业。(Pulang ke rumah mengerjakan PR.)"
  },
  "视": {
    pinyin: "shì",
    meaning: "Melihat / Pandangan / Televisi",
    unit: 10,
    radical: "礻 (Shìzìpáng)",
    strokeCount: 8,
    strokeNames: ["点 (Diǎn)", "横撇 (Héngpiě)", "竖 (Shù)", "点 (Diǎn)", "竖 (Shù)", "横折 (Héngzhé)", "撇 (Piě)", "竖弯钩 (Shùwāngōu)"],
    example: "我喜欢看电视。(Saya suka menonton televisi.)"
  },
  "听": {
    pinyin: "tīng",
    meaning: "Mendengar",
    unit: 10,
    radical: "口 (Kǒu / Mulut)",
    strokeCount: 7,
    strokeNames: ["竖 (Shù)", "横折 (Héngzhé)", "横 (Héng)", "撇 (Piě)", "撇 (Piě)", "横 (Héng)", "竖 (Shù)"],
    example: "听中文歌学汉语。(Mendengarkan lagu Mandarin belajar bahasa.)"
  },
  "帮": {
    pinyin: "bāng",
    meaning: "Membantu / Tolong",
    unit: 10,
    radical: "巾 (Jīn / Kain)",
    strokeCount: 9,
    strokeNames: ["横 (Héng)", "横 (Héng)", "横 (Héng)", "撇 (Piě)", "竖 (Shù)", "横折钩 (Héngzhégōu)", "竖 (Shù)", "横折钩 (Héngzhégōu)", "竖 (Shù)"],
    example: "我帮妈妈做家务。(Saya membantu ibu mengerjakan pekerjaan rumah.)"
  },
  "家": {
    pinyin: "jiā",
    meaning: "Rumah / Keluarga",
    unit: 10,
    radical: "宀 (Mián / Atap)",
    strokeCount: 10,
    strokeNames: ["点 (Diǎn)", "点 (Diǎn)", "横撇 (Héngpiě)", "横 (Héng)", "撇 (Piě)", "弯钩 (Wāngōu)", "撇 (Piě)", "撇 (Piě)", "撇 (Piě)", "捺 (Nà)"],
    example: "我的家很温暖。(Keluarga/rumah saya sangat hangat.)"
  },
  "开": {
    pinyin: "kāi",
    meaning: "Buka / Menyetir / Senang",
    unit: 10,
    radical: "廾 (Gǒng)",
    strokeCount: 4,
    strokeNames: ["横 (Héng)", "横 (Héng)", "撇 (Piě)", "竖 (Shù)"],
    example: "大家都非常开心。(Semua orang sangat gembira.)"
  },
  "力": {
    pinyin: "lì",
    meaning: "Tenaga / Kekuatan / Rajin",
    unit: 10,
    radical: "力 (Lì)",
    strokeCount: 2,
    strokeNames: ["横折钩 (Héngzhégōu)", "撇 (Piě)"],
    example: "努力学习汉语！(Berusaha giat belajar bahasa Mandarin!)"
  }
};
