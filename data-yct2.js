// Bank Soal Latihan Standar YCT Level 2 (Youth Chinese Test 2)
// Sesuai materi kurikulum HAN YU 3 (Unit 1, Unit 2, Unit 3)

const YCT2_QUIZ_DATA = {
  // UNIT 1: Waktu, Kalender & Cuaca (Unit 1: Lessons 1-5)
  "unit1": [
    {
      id: "u1_q1",
      unit: 1,
      part: "listening_tf",
      partName: "听力 - 判断对错 (Listening: Benar / Salah)",
      imageEmoji: "🎄",
      audioZh: "昨天是圣诞节，十二月二十五日。",
      audioPy: "Zuótiān shì Shèngdàn Jié, shí'èr yuè èrshíwǔ rì.",
      promptZh: "昨天是十二月二十五日 (圣诞节)。",
      promptPy: "Zuótiān shì shí'èr yuè èrshíwǔ rì (Shèngdàn Jié).",
      promptId: "Dengarkan audio! Apakah audio sesuai dengan gambar Hari Natal (25 Desember)?",
      correctAnswer: true,
      explanation: "Audio menyebutkan '昨天是圣诞节，十二月二十五日' (Kemarin adalah hari Natal, 25 Desember), sesuai dengan gambar dan teks."
    },
    {
      id: "u1_q2",
      unit: 1,
      part: "listening_tf",
      partName: "听力 - 判断对错 (Listening: Benar / Salah)",
      imageEmoji: "❄️",
      audioZh: "今天天气非常热，没有风。",
      audioPy: "Jīntiān tiānqì fēicháng rè, méiyǒu fēng.",
      promptZh: "冬天很冷，常常下雪。",
      promptPy: "Dōngtiān hěn lěng, chángcháng xià xuě.",
      promptId: "Dengarkan audio! Apakah audio cuaca panas sesuai dengan gambar musim dingin bersalju?",
      correctAnswer: false,
      explanation: "Audio menyatakan '今天天气非常热' (hari ini sangat panas), sedangkan gambar menunjukkan musim dingin bersalju (下雪)."
    },
    {
      id: "u1_q3",
      unit: 1,
      part: "listening_choice",
      partName: "听力 - 听音选图 (Listening: Pilih Gambar yang Tepat)",
      imageEmoji: "🎧",
      audioZh: "现在差十分八点，我和弟弟去学校。",
      audioPy: "Xiànzài chà shí fēn bā diǎn, wǒ hé dìdi qù xuéxiào.",
      promptZh: "现在几点去学校？",
      promptPy: "Xiànzài jǐ diǎn qù xuéxiào?",
      promptId: "Dengarkan audio! Jam berapa mereka pergi ke sekolah?",
      options: [
        { label: "A", textZh: "7:50 (差十分八点)", textId: "Pukul 07:50 (Jam 8 kurang 10)" },
        { label: "B", textZh: "8:30 (八点半)", textId: "Pukul 08:30 (Jam 8 lewat 30)" },
        { label: "C", textZh: "12:00 (十二点)", textId: "Pukul 12:00 (Jam 12 tepat)" }
      ],
      correctAnswer: 0,
      explanation: "'差十分八点' (chà shí fēn bā diǎn) artinya jam 8 kurang 10 menit, yaitu pukul 07:50."
    },
    {
      id: "u1_q4",
      unit: 1,
      part: "reading_tf",
      partName: "阅读 - 看图判断 (Reading: Benar / Salah)",
      imageEmoji: "🍁",
      promptZh: "秋天很凉快，不冷也不热。",
      promptPy: "Qiūtiān hěn liángkuai, bù lěng yě bù rè.",
      promptId: "Apakah kalimat '秋天很凉快' (Musim gugur sangat sejuk) sesuai dengan gambar daun musim gugur?",
      correctAnswer: true,
      explanation: "Gambar daun maple gugur melambangkan '秋天' (musim gugur) yang udaranya sejuk (凉快)."
    },
    {
      id: "u1_q5",
      unit: 1,
      part: "fill_blank",
      partName: "阅读 - 选词填空 (Reading: Melengkapi Kalimat)",
      imageEmoji: "🗓️",
      promptZh: "昨天是星期一，今天是星期二，明天是____。",
      promptPy: "Zuótiān shì xīngqīyī, jīntiān shì xīngqī'èr, míngtiān shì ____.",
      promptId: "Pilihlah kata yang tepat untuk melengkapi urutan hari di atas!",
      options: [
        { label: "A", textZh: "星期天 (xīngqītiān)", textId: "Hari Minggu" },
        { label: "B", textZh: "星期三 (xīngqīsān)", textId: "Hari Rabu" },
        { label: "C", textZh: "星期五 (xīngqīwǔ)", textId: "Hari Jumat" }
      ],
      correctAnswer: 1,
      explanation: "Setelah Senin (星期一) dan Selasa (星期二), besoknya (明天) adalah hari Rabu (星期三)."
    },
    {
      id: "u1_q6",
      unit: 1,
      part: "dialogue",
      partName: "阅读 - 情景对话 (Reading: Dialog Sehari-hari)",
      imageEmoji: "💬",
      promptZh: "问：“今天几月几号？”\n答：“____”",
      promptPy: "Wèn: “Jīntiān jǐ yuè jǐ hào?”\n Dá: “____”",
      promptId: "Bagaimana jawaban yang tepat untuk pertanyaan menanyakan tanggal hari ini?",
      options: [
        { label: "A", textZh: "今天五月六号。", textId: "Hari ini tanggal 6 Mei." },
        { label: "B", textZh: "现在八点半。", textId: "Sekarang pukul 08:30." },
        { label: "C", textZh: "今天天气很好。", textId: "Hari ini cuaca sangat baik." }
      ],
      correctAnswer: 0,
      explanation: "Pertanyaan '几月几号' menanyakan bulan dan tanggal, sehingga dijawab dengan format tanggal '五月六号'."
    }
  ],

  // UNIT 2: Pelajaran, Hadiah & Kegemaran (Unit 2: Lessons 6-10)
  "unit2": [
    {
      id: "u2_q1",
      unit: 2,
      part: "listening_tf",
      partName: "听力 - 判断对错 (Listening: Benar / Salah)",
      imageEmoji: "🎵",
      audioZh: "李老师教我们唱歌，我们都很开心。",
      audioPy: "Lǐ lǎoshī jiāo wǒmen chàng gē, wǒmen dōu hěn kāixīn.",
      promptZh: "李老师教我们唱歌。",
      promptPy: "Lǐ lǎoshī jiāo wǒmen chàng gē.",
      promptId: "Dengarkan audio! Apakah audio sesuai dengan gambar bernyanyi musik?",
      correctAnswer: true,
      explanation: "Audio menyatakan Guru Li mengajari kami bernyanyi (教我们唱歌), sesuai dengan gambar not balok musik."
    },
    {
      id: "u2_q2",
      unit: 2,
      part: "listening_choice",
      partName: "听力 - 听音选图 (Listening: Pilihan Ganda)",
      imageEmoji: "🎁",
      audioZh: "小明给妈妈一封信，信上写着：我爱你！",
      audioPy: "Xiǎomíng gěi māma yì fēng xìn, xìn shang xiě zhe: Wǒ ài nǐ!",
      promptZh: "小明给妈妈什么礼物？",
      promptPy: "Xiǎomíng gěi māma shénme lǐwù?",
      promptId: "Dengarkan audio! Hadiah apa yang diberikan Xiao Ming kepada ibunya?",
      options: [
        { label: "A", textZh: "一封信 (yì fēng xìn)", textId: "Sepucuk surat bertuliskan '我爱你'" },
        { label: "B", textZh: "一盒茶叶 (yì hé cháyè)", textId: "Sekotak daun teh" },
        { label: "C", textZh: "一条围巾 (yì tiáo wéijīn)", textId: "Sehelai syal" }
      ],
      correctAnswer: 0,
      explanation: "Di bab 7, Xiao Ming memberikan surat (一封信) yang bertuliskan tiga huruf '我爱你' kepada ibunya."
    },
    {
      id: "u2_q3",
      unit: 2,
      part: "reading_tf",
      partName: "阅读 - 看图判断 (Reading: Benar / Salah)",
      imageEmoji: "🥕",
      promptZh: "小山羊给小兔子准备了一条鱼。",
      promptPy: "Xiǎo shānyáng gěi xiǎo tùzi zhǔnbèi le yì tiáo yú.",
      promptId: "Apakah kambing kecil menyiapkan ikan untuk kelinci kecil?",
      correctAnswer: false,
      explanation: "Salah! Kelinci kecil suka wortel (胡萝卜), sedangkan yang disiapkan seekor ikan (一条鱼) adalah untuk kucing kecil (小猫)."
    },
    {
      id: "u2_q4",
      unit: 2,
      part: "fill_blank",
      partName: "阅读 - 选词填空 (Reading: Melengkapi Kalimat)",
      imageEmoji: "🎂",
      promptZh: "今天是小华的生日，我们一起祝他生日____！",
      promptPy: "Jīntiān shì Xiǎohuá de shēngrì, wǒmen yīqǐ zhù tā shēngrì ____!",
      promptId: "Pilihlah kata yang tepat untuk ucapan selamat ulang tahun!",
      options: [
        { label: "A", textZh: "好看 (hǎokàn)", textId: "Bagus / cantik" },
        { label: "B", textZh: "快乐 (kuàilè)", textId: "Bahagia / gembira" },
        { label: "C", textZh: "暖和 (nuǎnhuo)", textId: "Hangat" }
      ],
      correctAnswer: 1,
      explanation: "Ucapan selamat ulang tahun dalam bahasa Mandarin adalah '祝你生日快乐' (Zhù nǐ shēngrì kuàilè!)."
    },
    {
      id: "u2_q5",
      unit: 2,
      part: "dialogue",
      partName: "阅读 - 情景对话 (Reading: Respon Dialog)",
      imageEmoji: "🎬",
      promptZh: "问：“听说今天电影院演中国电影，你打算去吗？”\n答：“____”",
      promptPy: "Wèn: “Tīngshuō jīntiān diànyǐngyuàn yǎn Zhōngguó diànyǐng, nǐ dǎsuàn qù ma?”\n Dá: “____”",
      promptId: "Manakah respon yang paling tepat untuk ajakan menonton bioskop?",
      options: [
        { label: "A", textZh: "我想去，电影很有意思！", textId: "Saya mau pergi, filmnya sangat menarik!" },
        { label: "B", textZh: "我正在洗袜子呢。", textId: "Saya sedang mencuci kaos kaki." },
        { label: "C", textZh: "现在是差十分十二点。", textId: "Sekarang jam 12 kurang 10." }
      ],
      correctAnswer: 0,
      explanation: "Pertanyaan menanyakan rencana menonton film Mandarin di bioskop, jawaban tepat menyatakan ketertarikan menonton film yang menarik."
    }
  ],

  // UNIT 3: Pantai, Tamasya & Satwa (Unit 3: Lessons 11-15)
  "unit3": [
    {
      id: "u3_q1",
      unit: 3,
      part: "listening_tf",
      partName: "听力 - 判断对错 (Listening: Benar / Salah)",
      imageEmoji: "🏖️",
      audioZh: "我们全家一起去海边玩，我们在海边玩沙子。",
      audioPy: "Wǒmen quánjiā yīqǐ qù hǎibiān wán, wǒmen zài hǎibiān wán shāzi.",
      promptZh: "我们在海边玩沙子。",
      promptPy: "Wǒmen zài hǎibiān wán shāzi.",
      promptId: "Dengarkan audio! Apakah benar mereka sekeluarga bermain pasir di pantai?",
      correctAnswer: true,
      explanation: "Audio dan teks menyatakan '我们在海边玩沙子' (Kami bermain pasir di pantai)."
    },
    {
      id: "u3_q2",
      unit: 3,
      part: "listening_choice",
      partName: "听力 - 听音选图 (Listening: Pilihan Ganda)",
      imageEmoji: "🐼",
      audioZh: "动物园里，大熊猫在草地上吃竹子。",
      audioPy: "Dòngwùyuán lǐ, dàxióngmāo zài cǎodì shang chī zhúzi.",
      promptZh: "大熊猫在做什么？",
      promptPy: "Dàxióngmāo zài zuò shénme?",
      promptId: "Dengarkan audio! Apa yang sedang dilakukan panda raksasa?",
      options: [
        { label: "A", textZh: "在草地上吃竹子", textId: "Makan bambu di atas padang rumput" },
        { label: "B", textZh: "用长鼻子吸水", textId: "Menghisap air dengan belalainya" },
        { label: "C", textZh: "在山下捉迷藏", textId: "Bermain petak umpet di kaki gunung" }
      ],
      correctAnswer: 0,
      explanation: "Audio menyatakan dengan jelas bahwa panda raksasa sedang makan bambu di padang rumput (在草地上吃竹子)."
    },
    {
      id: "u3_q3",
      unit: 3,
      part: "reading_tf",
      partName: "阅读 - 看图判断 (Reading: Benar / Salah)",
      imageEmoji: "🥋",
      promptZh: "爷爷每天早上常常去公园打太极拳。",
      promptPy: "Yéye měitiān zǎoshang chángcháng qù gōngyuán dǎ tàijíquán.",
      promptId: "Apakah kakek sering berlatih taichi di taman pada pagi hari?",
      correctAnswer: true,
      explanation: "Sesuai Bab 13, kakek gemar menjaga kesehatan dengan berlatih taichi di taman setiap pagi."
    },
    {
      id: "u3_q4",
      unit: 3,
      part: "fill_blank",
      partName: "阅读 - 选词填空 (Reading: Melengkapi Kalimat)",
      imageEmoji: "🚗",
      promptZh: "今天天气晴朗，我们坐____去动物园看动物。",
      promptPy: "Jīntiān tiānqì qínglǎng, wǒmen zuò ____ qù dòngwùyuán kàn dòngwù.",
      promptId: "Pilihlah alat transportasi yang tepat untuk kalimat di atas!",
      options: [
        { label: "A", textZh: "车 (chē)", textId: "Kendaraan / Mobil (坐车)" },
        { label: "B", textZh: "筷子 (kuàizi)", textId: "Sumpit" },
        { label: "C", textZh: "风筝 (fēngzheng)", textId: "Layang-layang" }
      ],
      correctAnswer: 0,
      explanation: "Kata kerja '坐' (naik) berpasangan dengan alat transportasi kendaraan yaitu '车' (zuò chē = naik kendaraan/mobil)."
    },
    {
      id: "u3_q5",
      unit: 3,
      part: "dialogue",
      partName: "阅读 - 情景对话 (Reading: Respon Dialog)",
      imageEmoji: "🪁",
      promptZh: "问：“星期天去郊游，你们在郊外做了什么？”\n答：“____”",
      promptPy: "Wèn: “Xīngqītiān qù jiāoyóu, nǐmen zài jiāowài zuò le shénme?”\n Dá: “____”",
      promptId: "Manakah kegiatan piknik luar kota yang sesuai dengan Bab 15?",
      options: [
        { label: "A", textZh: "我们爬山、放风筝，还唱歌跳舞！", textId: "Kami mendaki gunung, main layang-layang, menyanyi & menari!" },
        { label: "B", textZh: "我们在教室里做数学题。", textId: "Kami mengerjakan soal matematika di kelas." },
        { label: "C", textZh: "我们在家洗衣服呢。", textId: "Kami mencuci pakaian di rumah." }
      ],
      correctAnswer: 0,
      explanation: "Di bab 15 saat pergi tamasya/piknik (郊游), anak-anak mendaki gunung, menerbangkan layang-layang, bernyanyi dan menari."
    }
  ]
};

// Gabungan Semua Soal untuk Mode Grand Mock Exam YCT 2 (Simulasi Lengkap)
YCT2_QUIZ_DATA["all"] = [
  ...YCT2_QUIZ_DATA["unit1"],
  ...YCT2_QUIZ_DATA["unit2"],
  ...YCT2_QUIZ_DATA["unit3"]
];

window.YCT2_QUIZ_DATA = YCT2_QUIZ_DATA;
