/**
 * HAN YU 3 - Database Soal Latihan Standar YCT 2
 * 25 Soal per Unit x 10 Unit = Total 250 Soal Lengkap
 * Sesuai 5 Tipe Soal Resmi Ujian YCT Level 2
 */

const YCT2_QUIZ_DATA = {
  // UNIT 1: 在学校 (25 Soal)
  1: [
    // Tipe 1: 看图判断对错 (Soal 1-5)
    {
      id: "u1_q1", number: 1, type: "true_false", typeName: "Tipe 1: 看图判断对错 (Benar/Salah Gambar)",
      prompt: "这是我们的学校。\nZhè shì wǒmen de xuéxiào.",
      questionAudio: "这是我们的学校。",
      visualIcon: "🏫", visualDesc: "Gambar sebuah gedung sekolah megah dengan bendera dan gerbang bertuliskan School.",
      options: [{ id: "T", text: "√ 对 (Benar)" }, { id: "F", text: "× 错 (Salah)" }],
      correct: "T",
      explanation: "Benar. Gambar menunjukkan gedung sekolah (学校 xuéxiào)."
    },
    {
      id: "u1_q2", number: 2, type: "true_false", typeName: "Tipe 1: 看图判断对错 (Benar/Salah Gambar)",
      prompt: "老师在黑板上写汉字。\nLǎoshī zài hēibǎn shang xiě hànzì.",
      questionAudio: "老师在黑板上写汉字。",
      visualIcon: "👩‍🏫", visualDesc: "Gambar seorang guru sedang berdiri di depan papan tulis mengajar.",
      options: [{ id: "T", text: "√ 对 (Benar)" }, { id: "F", text: "× 错 (Salah)" }],
      correct: "T",
      explanation: "Benar. Guru (老师) sedang menulis/mengajar di papan tulis."
    },
    {
      id: "u1_q3", number: 3, type: "true_false", typeName: "Tipe 1: 看图判断对错 (Benar/Salah Gambar)",
      prompt: "同学们在操场上睡觉。\nTóngxuémen zài cāochǎng shang shuìjiào.",
      questionAudio: "同学们在操场上睡觉。",
      visualIcon: "⚽🏃", visualDesc: "Gambar anak-anak sedang bermain sepak bola dengan riang di lapangan.",
      options: [{ id: "T", text: "√ 对 (Benar)" }, { id: "F", text: "× 错 (Salah)" }],
      correct: "F",
      explanation: "Salah. Di gambar teman-teman sedang bermain bola (踢球), bukan sedang tidur (睡觉)."
    },
    {
      id: "u1_q4", number: 4, type: "true_false", typeName: "Tipe 1: 看图判断对错 (Benar/Salah Gambar)",
      prompt: "他们在教室里安静地看书。\nTāmen zài jiàoshì lǐ ānjìng de kànshū.",
      questionAudio: "他们在教室里安静地看书。",
      visualIcon: "📖👧👦", visualDesc: "Gambar dua murid sedang duduk membaca buku pelajaran di dalam ruang kelas.",
      options: [{ id: "T", text: "√ 对 (Benar)" }, { id: "F", text: "× 错 (Salah)" }],
      correct: "T",
      explanation: "Benar. Murid-murid berada di dalam kelas (教室) sedang membaca buku (看书)."
    },
    {
      id: "u1_q5", number: 5, type: "true_false", typeName: "Tipe 1: 看图判断对错 (Benar/Salah Gambar)",
      prompt: "王老师教我们游泳。\nWáng lǎoshī jiāo wǒmen yóuyǒng.",
      questionAudio: "王老师教我们游泳。",
      visualIcon: "📚✏️", visualDesc: "Gambar guru sedang mengajarkan buku bahasa Mandarin di kelas.",
      options: [{ id: "T", text: "√ 对 (Benar)" }, { id: "F", text: "× 错 (Salah)" }],
      correct: "F",
      explanation: "Salah. Guru sedang mengajarkan buku/Mandarin di kelas, bukan mengajari berenang (游泳)."
    },

    // Tipe 2: 看图选择题 (Soal 6-10)
    {
      id: "u1_q6", number: 6, type: "picture_choice", typeName: "Tipe 2: 看图选择题 (Pilihan Gambar)",
      prompt: "选出与句子意思相符的图片：王老师在教我们读汉语。\nWáng lǎoshī zài jiāo wǒmen dú Hànyǔ.",
      questionAudio: "王老师在教我们读汉语。",
      options: [
        { id: "A", text: "A. 👩‍🏫 老师在讲课 (Guru mengajar di kelas)", icon: "👩‍🏫" },
        { id: "B", text: "B. 🏊‍♂️ 在游泳池游泳 (Berenang di kolam)", icon: "🏊‍♂️" },
        { id: "C", text: "C. 🛒 在超市买东西 (Belanja di toko)", icon: "🛒" }
      ],
      correct: "A",
      explanation: "Pilihan A tepat: 王老师在教我们 (Guru Wang sedang mengajar kita)."
    },
    {
      id: "u1_q7", number: 7, type: "picture_choice", typeName: "Tipe 2: 看图选择题 (Pilihan Gambar)",
      prompt: "选出正确的图片：新同学向大家问好。\nXīn tóngxué xiàng dàjiā wènhǎo.",
      questionAudio: "新同学向大家问好。",
      options: [
        { id: "A", text: "A. 🛌 躺在床上睡觉 (Tidur di kasur)", icon: "🛌" },
        { id: "B", text: "B. 🙋‍♂️ 招手问好 (Melambaikan tangan menyapa)", icon: "🙋‍♂️" },
        { id: "C", text: "C. 🚗 正在开车 (Mengendarai mobil)", icon: "🚗" }
      ],
      correct: "B",
      explanation: "Pilihan B tepat: 问好 (menyapa / memberi salam) ditunjukkan dengan melambaikan tangan."
    },
    {
      id: "u1_q8", number: 8, type: "picture_choice", typeName: "Tipe 2: 看图选择题 (Pilihan Gambar)",
      prompt: "选出与'教室里有桌子和椅子'相符的图片。\nJiàoshì lǐ yǒu zhuōzi hé yǐzi.",
      questionAudio: "教室里有桌子和椅子。",
      options: [
        { id: "A", text: "A. 🪑🪑 教室的桌椅 (Meja dan kursi kelas)", icon: "🪑" },
        { id: "B", text: "B. 🐘 动物园的大象 (Gajah kebun binatang)", icon: "🐘" },
        { id: "C", text: "C. 🌲 森林里的大树 (Pohon di hutan)", icon: "🌲" }
      ],
      correct: "A",
      explanation: "Pilihan A tepat: 桌子和椅子 (meja dan kursi di kelas)."
    },
    {
      id: "u1_q9", number: 9, type: "picture_choice", typeName: "Tipe 2: 看图选择题 (Pilihan Gambar)",
      prompt: "选出与'我们是好朋友'相符的图片。\nWǒmen shì hǎo péngyou.",
      questionAudio: "我们是好朋友。",
      options: [
        { id: "A", text: "A. 👫 两个好朋友手拉手 (Dua sahabat bergandengan)", icon: "👫" },
        { id: "B", text: "B. 🍎 一个红苹果 (Satu apel merah)", icon: "🍎" },
        { id: "C", text: "C. ⏰ 一个大时钟 (Satu jam dinding)", icon: "⏰" }
      ],
      correct: "A",
      explanation: "Pilihan A tepat: 好朋友 (sahabat / teman baik)."
    },
    {
      id: "u1_q10", number: 10, type: "picture_choice", typeName: "Tipe 2: 看图选择题 (Pilihan Gambar)",
      prompt: "选出与'我在本子上写字'相符的图片。\nWǒ zài běnzi shang xiězì.",
      questionAudio: "我在本子上写字。",
      options: [
        { id: "A", text: "A. 🚲 骑自行车 (Naik sepeda)", icon: "🚲" },
        { id: "B", text: "B. 📝 在本子上写字 (Menulis di buku catatan)", icon: "📝" },
        { id: "C", text: "C. 🥣 在大口吃饭 (Makan nasi)", icon: "🥣" }
      ],
      correct: "B",
      explanation: "Pilihan B tepat: 写字 (menulis karakter di buku catatan)."
    },

    // Tipe 3: 读对话选答句 (Soal 11-15)
    {
      id: "u1_q11", number: 11, type: "dialogue_match", typeName: "Tipe 3: 读对话选答句 (Tanya-Jawab Dialog)",
      prompt: "问：认识你很高兴！\nWèn: Rènshi nǐ hěn gāoxìng!\n答：__________？",
      questionAudio: "认识你很高兴！",
      options: [
        { id: "A", text: "A. 认识你我也很高兴！(Rènshi nǐ wǒ yě hěn gāoxìng!)" },
        { id: "B", text: "B. 我去买水果。(Wǒ qù mǎi shuǐguǒ.)" },
        { id: "C", text: "C. 现在是八点。(Xiànzài shì bā diǎn.)" }
      ],
      correct: "A",
      explanation: "Jawaban A tepat. Respons standar untuk 'Senang berkenalan denganmu' adalah 'Saya juga senang berkenalan denganmu'."
    },
    {
      id: "u1_q12", number: 12, type: "dialogue_match", typeName: "Tipe 3: 读对话选答句 (Tanya-Jawab Dialog)",
      prompt: "问：早上好，李老师！\nWèn: Zǎoshang hǎo, Lǐ lǎoshī!\n答：__________？",
      questionAudio: "早上好，李老师！",
      options: [
        { id: "A", text: "A. 不客气。(Bú kèqi.)" },
        { id: "B", text: "B. 同学们早上好！(Tóngxuémen zǎoshang hǎo!)" },
        { id: "C", text: "C. 我喜欢下雨。(Wǒ xǐhuan xiàyǔ.)" }
      ],
      correct: "B",
      explanation: "Jawaban B tepat. Guru menjawab salam pagi murid dengan 'Selamat pagi anak-anak'."
    },
    {
      id: "u1_q13", number: 13, type: "dialogue_match", typeName: "Tipe 3: 读对话选答句 (Tanya-Jawab Dialog)",
      prompt: "问：你在哪里学习汉语？\nWèn: Nǐ zài nǎlǐ xuéxí Hànyǔ?\n答：__________？",
      questionAudio: "你在哪里学习汉语？",
      options: [
        { id: "A", text: "A. 我在学校学习汉语。(Wǒ zài xuéxiào xuéxí Hànyǔ.)" },
        { id: "B", text: "B. 汉语很好吃。(Hànyǔ hěn hǎochī.)" },
        { id: "C", text: "C. 今天是星期一。(Jīntiān shì xīngqīyī.)" }
      ],
      correct: "A",
      explanation: "Jawaban A tepat. Menjawab pertanyaan tempat (在哪里) dengan 'di sekolah' (在学校)."
    },
    {
      id: "u1_q14", number: 14, type: "dialogue_match", typeName: "Tipe 3: 读对话选答句 (Tanya-Jawab Dialog)",
      prompt: "问：欢迎你来到我们班！\nWèn: Huānyíng nǐ lái dào wǒmen bān!\n答：__________？",
      questionAudio: "欢迎你来到我们班！",
      options: [
        { id: "A", text: "A. 谢谢大家！(Xièxie dàjiā!)" },
        { id: "B", text: "B. 对不起！(Duìbuqǐ!)" },
        { id: "C", text: "C. 我不吃苹果。(Wǒ bù chī píngguǒ.)" }
      ],
      correct: "A",
      explanation: "Jawaban A tepat. Respons saat disambut adalah mengucapkan terima kasih (谢谢大家)."
    },
    {
      id: "u1_q15", number: 15, type: "dialogue_match", typeName: "Tipe 3: 读对话选答句 (Tanya-Jawab Dialog)",
      prompt: "问：他是谁？\nWèn: Tā shì shéi?\n答：__________？",
      questionAudio: "他是谁？",
      options: [
        { id: "A", text: "A. 他是我的新同学。(Tā shì wǒ de xīn tóngxué.)" },
        { id: "B", text: "B. 他在打篮球。(Tā zài dǎ lánqiú.)" },
        { id: "C", text: "C. 他去买香蕉。(Tā qù mǎi xiāngjiāo.)" }
      ],
      correct: "A",
      explanation: "Jawaban A tepat. Menjawab pertanyaan identitas orang (是谁)."
    },

    // Tipe 4: 选词填空 (Soal 16-20)
    {
      id: "u1_q16", number: 16, type: "fill_blank", typeName: "Tipe 4: 选词填空 (Lengkapi Kalimat)",
      prompt: "我们每天在______里认真上课。\nWǒmen měitiān zài ______ lǐ rènzhēn shàngkè.",
      questionAudio: "我们每天在教室里认真上课。",
      options: [
        { id: "A", text: "A. 教室 (jiàoshì / ruang kelas)" },
        { id: "B", text: "B. 香蕉 (xiāngjiāo / pisang)" },
        { id: "C", text: "C. 太阳 (tàiyáng / matahari)" }
      ],
      correct: "A",
      explanation: "Jawaban A tepat: 教室 (ruang kelas) adalah tempat belajar."
    },
    {
      id: "u1_q17", number: 17, type: "fill_blank", typeName: "Tipe 4: 选词填空 (Lengkapi Kalimat)",
      prompt: "王老师教我们写______。\nWáng lǎoshī jiāo wǒmen xiě ______.",
      questionAudio: "王老师教我们写汉字。",
      options: [
        { id: "A", text: "A. 汉字 (hànzì / huruf Hanzi)" },
        { id: "B", text: "B. 睡觉 (shuìjiào / tidur)" },
        { id: "C", text: "C. 喝水 (hēshuǐ / minum air)" }
      ],
      correct: "A",
      explanation: "Jawaban A tepat: 写汉字 (menulis karakter Hanzi)."
    },
    {
      id: "u1_q18", number: 18, type: "fill_blank", typeName: "Tipe 4: 选词填空 (Lengkapi Kalimat)",
      prompt: "他是我的好______，我们天天在一起。\nTā shì wǒ de hǎo ______ , wǒmen tiāntiān zài yìqǐ.",
      questionAudio: "他是我的好朋友，我们天天在一起。",
      options: [
        { id: "A", text: "A. 朋友 (péngyou / teman)" },
        { id: "B", text: "B. 铅笔 (qiānbǐ / pensil)" },
        { id: "C", text: "C. 尺子 (chǐzi / penggaris)" }
      ],
      correct: "A",
      explanation: "Jawaban A tepat: 好朋友 (teman baik / sahabat)."
    },
    {
      id: "u1_q19", number: 19, type: "fill_blank", typeName: "Tipe 4: 选词填空 (Lengkapi Kalimat)",
      prompt: "今天认识了新同学，我心里很______。\nJīntiān rènshi le xīn tóngxué, wǒ xīnlǐ hěn ______.",
      questionAudio: "今天认识了新同学，我心里很高兴。",
      options: [
        { id: "A", text: "A. 高兴 (gāoxìng / gembira)" },
        { id: "B", text: "B. 下雨 (xiàyǔ / hujan)" },
        { id: "C", text: "C. 几点 (jǐ diǎn / jam berapa)" }
      ],
      correct: "A",
      explanation: "Jawaban A tepat: 很高兴 (sangat gembira)."
    },
    {
      id: "u1_q20", number: 20, type: "fill_blank", typeName: "Tipe 4: 选词填空 (Lengkapi Kalimat)",
      prompt: "早上到了学校，要对老师说：'老师______！'\nZǎoshang dào le xuéxiào, yào duì lǎoshī shuō: 'Lǎoshī ______!'",
      questionAudio: "早上到了学校，要对老师说老师好。",
      options: [
        { id: "A", text: "A. 好 (hǎo / halo/pagi)" },
        { id: "B", text: "B. 去 (qù / pergi)" },
        { id: "C", text: "C. 买 (mǎi / beli)" }
      ],
      correct: "A",
      explanation: "Jawaban A tepat: 老师好 (Halo Guru / Selamat pagi Guru)."
    },

    // Tipe 5: 连词成句 / 词义理解 (Soal 21-25)
    {
      id: "u1_q21", number: 21, type: "sentence_order", typeName: "Tipe 5: 连词成句 (Menyusun Kalimat)",
      prompt: "把词语连成正确的句子：\n①学习 ②在学校 ③我们 ④汉语\n①xuéxí ②zài xuéxiào ③wǒmen ④Hànyǔ",
      questionAudio: "我们在学校学习汉语。",
      options: [
        { id: "A", text: "A. ③ ② ① ④ (我们在学校学习汉语。)" },
        { id: "B", text: "B. ① ④ ② ③ (学习汉语在学校我们。)" },
        { id: "C", text: "C. ② ③ ④ ① (在学校我们汉语学习。)" }
      ],
      correct: "A",
      explanation: "Susunan yang benar: Subjek (我们) + Tempat (在学校) + Kata Kerja (学习) + Objek (汉语)."
    },
    {
      id: "u1_q22", number: 22, type: "sentence_order", typeName: "Tipe 5: 连词成句 (Menyusun Kalimat)",
      prompt: "把词语连成正确的句子：\n①王老师 ②是 ③的 ④我们 ⑤汉语老师",
      questionAudio: "王老师是我们的汉语老师。",
      options: [
        { id: "A", text: "A. ① ② ④ ③ ⑤ (王老师是我们的汉语老师。)" },
        { id: "B", text: "B. ④ ⑤ ② ① ③ (我们的汉语老师是王老师。)" },
        { id: "C", text: "C. ① ④ ② ③ ⑤ (王老师我们是汉语老师。)" }
      ],
      correct: "A",
      explanation: "Susunan yang benar: 王老师是我们的汉语老师 (Guru Wang adalah guru bahasa Mandarin kami)."
    },
    {
      id: "u1_q23", number: 23, type: "sentence_order", typeName: "Tipe 5: 连词成句 (Menyusun Kalimat)",
      prompt: "把词语连成正确的句子：\n①很高兴 ②认识 ③你们",
      questionAudio: "认识你们很高兴。",
      options: [
        { id: "A", text: "A. ② ③ ① (认识你们很高兴。)" },
        { id: "B", text: "B. ① ② ③ (很高兴认识你们。)" },
        { id: "C", text: "C. ③ ① ② (你们很高兴认识。)" }
      ],
      correct: "A",
      explanation: "Frasa standar: 认识你们很高兴 (Senang berkenalan dengan kalian)."
    },
    {
      id: "u1_q24", number: 24, type: "sentence_order", typeName: "Tipe 5: 词义理解 (Makna Kosakata)",
      prompt: "'学校' (xuéxiào) 的印尼语意思是什么？\nArti kata '学校' dalam Bahasa Indonesia adalah...",
      questionAudio: "学校",
      options: [
        { id: "A", text: "A. Sekolah" },
        { id: "B", text: "B. Rumah Sakit" },
        { id: "C", text: "C. Lapangan" }
      ],
      correct: "A",
      explanation: "学校 (xuéxiào) artinya 'Sekolah'."
    },
    {
      id: "u1_q25", number: 25, type: "sentence_order", typeName: "Tipe 5: 词义理解 (Makna Kosakata)",
      prompt: "'同学' (tóngxué) 的印尼语意思是什么？\nArti kata '同学' dalam Bahasa Indonesia adalah...",
      questionAudio: "同学",
      options: [
        { id: "A", text: "A. Teman sekelas / Siswa" },
        { id: "B", text: "B. Guru" },
        { id: "C", text: "C. Orang tua" }
      ],
      correct: "A",
      explanation: "同学 (tóngxué) artinya 'Teman sekelas'."
    }
  ]
};

// Helper generator untuk mengisi unit 2-10 dengan 25 soal berkualitas tinggi per unit
function buildAllYctQuestions() {
  const unitTopics = [
    {
      unit: 2, title: "我的书包",
      vTrueFalse: [
        { p: "这是我的新书包。\nZhè shì wǒ de xīn shūbāo.", a: "这是我的新书包。", ic: "🎒", d: "Tas sekolah biru baru", c: "T", exp: "Benar, gambar menunjukkan tas sekolah (书包)." },
        { p: "书包里有一把尺子。\nShūbāo lǐ yǒu yì bǎ chǐzi.", a: "书包里有一把尺子。", ic: "📏", d: "Penggaris panjang", c: "T", exp: "Benar, penggaris (尺子)." },
        { p: "铅笔盒里有一只小狗。\nQiānbǐhé lǐ yǒu yì zhī xiǎogǒu.", a: "铅笔盒里有一只小狗。", ic: "✏️", d: "Kotak pensil berisi pensil", c: "F", exp: "Salah, di kotak pensil ada pensil bukan anjing." },
        { p: "我有五本汉语课本。\nWǒ yǒu wǔ běn Hànyǔ kèběn.", a: "我有五本汉语课本。", ic: "📚", d: "Tumpukan buku pelajaran", c: "T", exp: "Benar, buku pelajaran (课本)." },
        { p: "这块橡皮是红色的。\nZhè kuài xiàngpí shì hóngsè de.", a: "这块橡皮是红色的。", ic: "🧼", d: "Penghapus pensil merah", c: "T", exp: "Benar, penghapus karet (橡皮)." }
      ],
      vPics: [
        { p: "选出与'铅笔'相符的图片：", a: "铅笔", c: "A", o: [{id:"A", text:"A. ✏️ 铅笔 (Pensil)", icon:"✏️"}, {id:"B", text:"B. 🍎 苹果 (Apel)", icon:"🍎"}, {id:"C", text:"C. ⚽ 足球 (Sepak bola)", icon:"⚽"}], exp: "铅笔 (qiānbǐ) artinya pensil." },
        { p: "选出与'书包'相符的图片：", a: "书包", c: "B", o: [{id:"A", text:"A. 🚗 汽车 (Mobil)", icon:"🚗"}, {id:"B", text:"B. 🎒 书包 (Tas sekolah)", icon:"🎒"}, {id:"C", text:"C. 🐱 小猫 (Kucing)", icon:"🐱"}], exp: "书包 (shūbāo) artinya tas sekolah." },
        { p: "选出与'一把尺子'相符的图片：", a: "一把尺子", c: "C", o: [{id:"A", text:"A. 🎂 蛋糕 (Kue)", icon:"🎂"}, {id:"B", text:"B. 🚲 自行车 (Sepeda)", icon:"🚲"}, {id:"C", text:"C. 📏 尺子 (Penggaris)", icon:"📏"}], exp: "尺子 (chǐzi) artinya penggaris." },
        { p: "选出与'橡皮'相符的图片：", a: "橡皮", c: "A", o: [{id:"A", text:"A. 🧼 橡皮 (Penghapus)", icon:"🧼"}, {id:"B", text:"B. 🌲 大树 (Pohon)", icon:"🌲"}, {id:"C", text:"C. 🐟 小鱼 (Ikan)", icon:"🐟"}], exp: "橡皮 (xiàngpí) artinya penghapus." },
        { p: "选出与'课本'相符的图片：", a: "课本", c: "B", o: [{id:"A", text:"A. 🍦 冰淇淋 (Es krim)", icon:"🍦"}, {id:"B", text:"B. 📖 课本 (Buku pelajaran)", icon:"📖"}, {id:"C", text:"C. 👕 衣服 (Baju)", icon:"👕"}], exp: "课本 (kèběn) artinya buku pelajaran." }
      ],
      vDialogues: [
        { q: "问：你的书包是什么颜色的？\n答：__________？", a: "你的书包是什么颜色的？", c: "A", o: [{id:"A", text:"A. 我的书包是蓝色的。(Biru)"}, {id:"B", text:"B. 我今年十岁。(10 tahun)"}, {id:"C", text:"C. 我喜欢吃苹果。(Suka apel)"}], exp: "Menjawab warna tas: 蓝色的 (berwarna biru)." },
        { q: "问：这是谁的书包？\n答：__________？", a: "这是谁的书包？", c: "B", o: [{id:"A", text:"A. 很好吃。(Sangat enak)"}, {id:"B", text:"B. 这是我的书包。(Ini tasku)"}, {id:"C", text:"C. 明天下雨。(Besok hujan)"}], exp: "Menjawab kepemilikan: 这是我的书包." },
        { q: "问：书包里面有什么？\n答：__________？", a: "书包里面有什么？", c: "A", o: [{id:"A", text:"A. 里面有课本和笔。(Ada buku dan pena)"}, {id:"B", text:"B. 里面有大象。(Ada gajah)"}, {id:"C", text:"C. 里面是星期天。(Di dalam hari Minggu)"}], exp: "Isi tas sekolah: 课本和笔." },
        { q: "问：你有几支铅笔？\n答：__________？", a: "你有几支铅笔？", c: "C", o: [{id:"A", text:"A. 我不去。(Saya tidak pergi)"}, {id:"B", text:"B. 在教室里。(Di kelas)"}, {id:"C", text:"C. 我有三支铅笔。(Saya punya 3 pensil)"}], exp: "Menjawab jumlah pensil: 三支铅笔." },
        { q: "问：借我一块橡皮好吗？\n答：__________？", a: "借我一块橡皮好吗？", c: "A", o: [{id:"A", text:"A. 好的，给你！(Baik, ini untukmu!)"}, {id:"B", text:"B. 认识你很高兴。(Senang kenal)"}, {id:"C", text:"C. 再见！(Sampai jumpa)"}], exp: "Menyetujui pinjaman: 好的，给你！" }
      ],
      vBlanks: [
        { p: "我用______写汉字。\nWǒ yòng ______ xiě hànzì.", a: "我用铅笔写汉字。", c: "A", o: [{id:"A", text:"A. 铅笔 (pensil)"}, {id:"B", text:"B. 足球 (bola)"}, {id:"C", text:"C. 晴天 (cerah)"}], exp: "Menulis menggunakan pensil (铅笔)." },
        { p: "书包______有很多书。\nShūbāo ______ yǒu hěn duō shū.", a: "书包里面有很多书。", c: "A", o: [{id:"A", text:"A. 里面 (di dalam)"}, {id:"B", text:"B. 游泳 (berenang)"}, {id:"C", text:"C. 早上 (pagi)"}], exp: "书包里面 (di dalam tas sekolah)." },
        { p: "桌子上有两______汉语书。\nZhuōzi shang yǒu liǎng ______ Hànyǔ shū.", a: "桌子上有两本汉语书。", c: "A", o: [{id:"A", text:"A. 本 (kata bantu buku)"}, {id:"B", text:"B. 只 (kata bantu hewan)"}, {id:"C", text:"C. 个 (buah/orang)"}], exp: "Satuan untuk buku adalah 本 (běn)." },
        { p: "铅笔盒里有一把______。\nQiānbǐhé lǐ yǒu yì bǎ ______.", a: "铅笔盒里有一把尺子。", c: "A", o: [{id:"A", text:"A. 尺子 (penggaris)"}, {id:"B", text:"B. 苹果 (apel)"}, {id:"C", text:"C. 太阳 (matahari)"}], exp: "一把尺子 (sebuah penggaris)." },
        { p: "写错了字，可以用______擦掉。\nXiě cuò le zì, kěyǐ yòng ______ cā diào.", a: "写错了字可以用橡皮擦掉。", c: "A", o: [{id:"A", text:"A. 橡皮 (penghapus)"}, {id:"B", text:"B. 操场 (lapangan)"}, {id:"C", text:"C. 晚饭 (makan malam)"}], exp: "Menghapus tulisan salah memakai penghapus (橡皮)." }
      ],
      vOrder: [
        { p: "连词成句：①我的 ②是 ③书包 ④蓝色 ⑤的", a: "我的书包是蓝色的。", c: "A", o: [{id:"A", text:"A. ① ③ ② ④ ⑤ (我的书包是蓝色的。)"}, {id:"B", text:"B. ④ ⑤ ② ① ③ (蓝色的我的书包是。)"}, {id:"C", text:"C. ② ① ③ ④ ⑤ (是我的书包蓝色的。)"}], exp: "Susunan: 我的书包是蓝色的。" },
        { p: "连词成句：①有 ②书包里 ③三支 ④铅笔", a: "书包里有三支铅笔。", c: "A", o: [{id:"A", text:"A. ② ① ③ ④ (书包里有三支铅笔。)"}, {id:"B", text:"B. ③ ④ ① ② (三支铅笔有书包里。)"}, {id:"C", text:"C. ① ② ④ ③ (有书包里铅笔三支。)"}], exp: "Susunan: 书包里有三支铅笔。" },
        { p: "连词成句：①课本 ②这是 ③谁的", a: "这是谁的课本？", c: "A", o: [{id:"A", text:"A. ② ③ ① (这是谁的课本？)"}, {id:"B", text:"B. ① ② ③ (课本这是谁的？)"}, {id:"C", text:"C. ③ ① ② (谁的课本这是？)"}], exp: "Susunan tanya: 这是谁的课本？" },
        { p: "'铅笔' (qiānbǐ) 的印尼语意思是什么？", a: "铅笔", c: "A", o: [{id:"A", text:"A. Pensil"}, {id:"B", text:"B. Penggaris"}, {id:"C", text:"C. Buku"}], exp: "铅笔 = Pensil." },
        { p: "'颜色' (yánsè) 的印尼语意思是什么？", a: "颜色", c: "A", o: [{id:"A", text:"A. Warna"}, {id:"B", text:"B. Suara"}, {id:"C", text:"C. Bentuk"}], exp: "颜色 = Warna." }
      ]
    },

    {
      unit: 3, title: "现在几点",
      vTrueFalse: [
        { p: "现在是八点整。\nXiànzài shì bā diǎn zhěng.", a: "现在是八点整。", ic: "🕗", d: "Jam menunjukkan pukul 08:00", c: "T", exp: "Benar, jam 8 tepat (八点)." },
        { p: "现在是十二点半。\nXiànzài shì shí'èr diǎn bàn.", a: "现在是十二点半。", ic: "🕧", d: "Jam menunjukkan pukul 12:30", c: "T", exp: "Benar, jam 12 lewat 30 menit (十二点半)." },
        { p: "我早上六点起床。\nWǒ zǎoshang liù diǎn qǐchuáng.", a: "我早上六点起床。", ic: "⏰🛌", d: "Bangun tidur pagi hari", c: "T", exp: "Benar, bangun tidur (起床)." },
        { p: "晚上十点去学校上课。\nWǎnshang shí diǎn qù xuéxiào shàngkè.", a: "晚上十点去学校上课。", ic: "🌙🏫", d: "Sekolah malam hari", c: "F", exp: "Salah, sekolah di pagi/siang hari, malam untuk tidur." },
        { p: "我们中午十二点吃午饭。\nWǒmen zhōngwǔ shí'èr diǎn chī wǔfàn.", a: "我们中午十二点吃午饭。", ic: "🍱🕛", d: "Makan siang jam 12", c: "T", exp: "Benar, makan siang jam 12 (十二点吃午饭)." }
      ],
      vPics: [
        { p: "选出与'八点半'相符的时钟：", a: "八点半", c: "A", o: [{id:"A", text:"A. 🕣 8:30 (Setengah sembilan)", icon:"🕣"}, {id:"B", text:"B. 🕐 1:00 (Jam satu)", icon:"🕐"}, {id:"C", text:"C. 🕔 5:00 (Jam lima)", icon:"🕔"}], exp: "八点半 = Pukul 08.30." },
        { p: "选出与'起床'相符的图片：", a: "起床", c: "B", o: [{id:"A", text:"A. 🏊‍♂️ 游泳 (Berenang)", icon:"🏊‍♂️"}, {id:"B", text:"B. 🥱 起床 (Bangun tidur)", icon:"🥱"}, {id:"C", text:"C. 🚗 开车 (Nyetir)", icon:"🚗"}], exp: "起床 (qǐchuáng) = Bangun tidur." },
        { p: "选出与'睡觉'相符的图片：", a: "睡觉", c: "C", o: [{id:"A", text:"A. ⚽ 踢球 (Main bola)", icon:"⚽"}, {id:"B", text:"B. 🎒 背书包 (Gendong tas)", icon:"🎒"}, {id:"C", text:"C. 😴 睡觉 (Tidur)", icon:"😴"}], exp: "睡觉 (shuìjiào) = Tidur." },
        { p: "选出与'吃早饭'相符的图片：", a: "吃早饭", c: "A", o: [{id:"A", text:"A. 🍳🍞 吃早餐 (Sarapan)", icon:"🍳"}, {id:"B", text:"B. 🚲 骑车 (Sepeda)", icon:"🚲"}, {id:"C", text:"C. 🛍️ 购物 (Belanja)", icon:"🛍️"}], exp: "吃早饭 = Sarapan pagi." },
        { p: "选出与'晚上'相符的图片：", a: "晚上", c: "B", o: [{id:"A", text:"A. ☀️ 太阳高照 (Siang terik)", icon:"☀️"}, {id:"B", text:"B. 🌙 月亮星星 (Malam bulan bintang)", icon:"🌙"}, {id:"C", text:"C. 🌈 彩虹 (Pelangi)", icon:"🌈"}], exp: "晚上 = Malam hari." }
      ],
      vDialogues: [
        { q: "问：请问现在几点了？\n答：__________？", a: "请问现在几点了？", c: "A", o: [{id:"A", text:"A. 现在是早上七点。(Jam 7 pagi)"}, {id:"B", text:"B. 我是学生。(Saya murid)"}, {id:"C", text:"C. 这是苹果。(Ini apel)"}], exp: "Menjawab waktu: 现在是早上七点." },
        { q: "问：你几点去学校？\n答：__________？", a: "你几点去学校？", c: "B", o: [{id:"A", text:"A. 学校很大。(Sekolah besar)"}, {id:"B", text:"B. 我七点半去学校。(Saya pergi 7.30)"}, {id:"C", text:"C. 我有两个书包。(Punya 2 tas)"}], exp: "Menjawab jam berangkat sekolah: 七点半去学校." },
        { q: "问：你每天几点睡觉？\n答：__________？", a: "你每天几点睡觉？", c: "C", o: [{id:"A", text:"A. 教室很干净。(Kelas bersih)"}, {id:"B", text:"B. 我喜欢吃西瓜。(Suka semangka)"}, {id:"C", text:"C. 我晚上九点睡觉。(Saya tidur jam 9 malam)"}], exp: "Menjawab jam tidur: 晚上九点睡觉." },
        { q: "问：八点四十五分上课，对吗？\n答：__________？", a: "八点四十五分上课对吗？", c: "A", o: [{id:"A", text:"A. 对，快迟到了！(Benar, hampir telat!)"}, {id:"B", text:"B. 不吃。(Tidak makan)"}, {id:"C", text:"C. 在前面。(Di depan)"}], exp: "Konfirmasi jam masuk kelas." },
        { q: "问：我们中午一起吃午饭好吗？\n答：__________？", a: "我们中午一起吃午饭好吗？", c: "A", o: [{id:"A", text:"A. 太好了，十二点见！(Bagus sekali, sampai jumpa jam 12!)"}, {id:"B", text:"B. 认识你很高兴。(Senang kenal)"}, {id:"C", text:"C. 这是我的铅笔。(Ini pensilku)"}], exp: "Menerima ajakan makan siang: 太好了，十二点见！" }
      ],
      vBlanks: [
        { p: "现在是______点三十分。\nXiànzài shì ______ diǎn sānshí fēn.", a: "现在是八点三十分。", c: "A", o: [{id:"A", text:"A. 八 (delapan)"}, {id:"B", text:"B. 吃 (makan)"}, {id:"C", text:"C. 玩 (main)"}], exp: "Angka jam: 八点 (jam 8)." },
        { p: "我早上六点半______。\nWǒ zǎoshang liù diǎn bàn ______.", a: "我早上六点半起床。", c: "A", o: [{id:"A", text:"A. 起床 (bangun tidur)"}, {id:"B", text:"B. 尺子 (penggaris)"}, {id:"C", text:"C. 苹果 (apel)"}], exp: "Bangun tidur pagi: 起床." },
        { p: "七点一______是七点十五分。\nQī diǎn yì ______ shì qī diǎn shíwǔ fēn.", a: "七点一刻是七点十五分。", c: "A", o: [{id:"A", text:"A. 刻 (15 menit)"}, {id:"B", text:"B. 个 (buah)"}, {id:"C", text:"C. 本 (jilid)"}], exp: "一刻 (yí kè) = 15 menit." },
        { p: "晚上九点，妈妈叫我去______。\nWǎnshang jiǔ diǎn, māma jiào wǒ qù ______.", a: "晚上九点妈妈叫我去睡觉。", c: "A", o: [{id:"A", text:"A. 睡觉 (tidur)"}, {id:"B", text:"B. 游泳 (berenang)"}, {id:"C", text:"C. 跑步 (lari)"}], exp: "Pergi tidur: 睡觉." },
        { p: "请问，现在______点了？\nQǐngwèn, xiànzài ______ diǎn le?", a: "请问现在几点了？", c: "A", o: [{id:"A", text:"A. 几 (berapa)"}, {id:"B", text:"B. 谁 (siapa)"}, {id:"C", text:"C. 哪 (mana)"}], exp: "Tanya jam berapa: 现在几点了？" }
      ],
      vOrder: [
        { p: "连词成句：①几点 ②现在 ③了", a: "现在几点了？", c: "A", o: [{id:"A", text:"A. ② ① ③ (现在几点了？)"}, {id:"B", text:"B. ① ② ③ (几点现在了？)"}, {id:"C", text:"C. ③ ② ① (了现在几点？)"}], exp: "Susunan: 现在几点了？" },
        { p: "连词成句：①起床 ②六点 ③我 ④早上", a: "我早上六点起床。", c: "A", o: [{id:"A", text:"A. ③ ④ ② ① (我早上六点起床。)"}, {id:"B", text:"B. ① ② ③ ④ (起床六点我早上。)"}, {id:"C", text:"C. ④ ① ② ③ (早上起床六点我。)"}], exp: "Susunan: 我早上六点起床。" },
        { p: "连词成句：①睡觉 ②九点半 ③我们 ④晚上", a: "我们晚上九点半睡觉。", c: "A", o: [{id:"A", text:"A. ③ ④ ② ① (我们晚上九点半睡觉。)"}, {id:"B", text:"B. ① ② ③ ④ (睡觉九点半我们晚上。)"}, {id:"C", text:"C. ② ① ④ ③ (九点半睡觉晚上我们。)"}], exp: "Susunan: 我们晚上九点半睡觉。" },
        { p: "'分钟' (fēnzhōng) 的印尼语意思是什么？", a: "分钟", c: "A", o: [{id:"A", text:"A. Menit"}, {id:"B", text:"B. Jam"}, {id:"C", text:"C. Detik"}], exp: "分钟 = Menit." },
        { p: "'起床' (qǐchuáng) 的印尼语意思是什么？", a: "起床", c: "A", o: [{id:"A", text:"A. Bangun tidur"}, {id:"B", text:"B. Pergi tidur"}, {id:"C", text:"C. Mandi"}], exp: "起床 = Bangun tidur." }
      ]
    },

    {
      unit: 4, title: "今天天气怎么样",
      vTrueFalse: [
        { p: "今天是晴天，太阳很大。\nJīntiān shì qíngtiān, tàiyáng hěn dà.", a: "今天是晴天太阳很大。", ic: "☀️", d: "Hari cerah matahari terik", c: "T", exp: "Benar, hari cerah (晴天)." },
        { p: "外面在下大雨，要带雨伞。\nWàimiàn zài xià dàyǔ, yào dài yǔsǎn.", a: "外面在下大雨要带雨伞。", ic: "🌧️☂️", d: "Hujan deras dan payung", c: "T", exp: "Benar, turun hujan lebat (下大雨) bawa payung (雨伞)." },
        { p: "冬天天气很热，大家都吃冰淇淋。\nDōngtiān tiānqì hěn rè.", a: "冬天天气很热。", ic: "❄️⛄", d: "Musim dingin bersalju", c: "F", exp: "Salah, musim dingin cuacanya dingin (冷), bukan panas (热)." },
        { p: "今天刮大风，树叶都落了。\nJīntiān guā dàfēng.", a: "今天刮大风。", ic: "💨🍃", d: "Angin kencang menerbangkan daun", c: "T", exp: "Benar, berangin kencang (刮大风)." },
        { p: "下雪的时候，世界都是白色的。\nXiàxuě de shíhou, shìjiè dōu shì báisè de.", a: "下雪的时候世界都是白色的。", ic: "❄️", d: "Pemandangan salju putih", c: "T", exp: "Benar, salju (下雪) berwarna putih." }
      ],
      vPics: [
        { p: "选出与'下雨'相符的图片：", a: "下雨", c: "A", o: [{id:"A", text:"A. 🌧️ 下雨 (Hujan)", icon:"🌧️"}, {id:"B", text:"B. ☀️ 晴天 (Cerah)", icon:"☀️"}, {id:"C", text:"C. 💨 刮风 (Angin)", icon:"💨"}], exp: "下雨 = Hujan." },
        { p: "选出与'下雪'相符的图片：", a: "下雪", c: "B", o: [{id:"A", text:"A. 🔥 炎热 (Panas)", icon:"🔥"}, {id:"B", text:"B. ❄️ 下雪 (Salju)", icon:"❄️"}, {id:"C", text:"C. 🌊 海浪 (Ombak)", icon:"🌊"}], exp: "下雪 = Salju." },
        { p: "选出与'晴天'相符的图片：", a: "晴天", c: "C", o: [{id:"A", text:"A. ⛈️ 雷雨 (Badai)", icon:"⛈️"}, {id:"B", text:"B. 🌫️ 大雾 (Kabut)", icon:"🌫️"}, {id:"C", text:"C. ☀️ 晴天 (Cerah)", icon:"☀️"}], exp: "晴天 = Hari cerah." },
        { p: "选出与'雨伞'相符的图片：", a: "雨伞", c: "A", o: [{id:"A", text:"A. ☂️ 雨伞 (Payung)", icon:"☂️"}, {id:"B", text:"B. 👞 皮鞋 (Sepatu)", icon:"👞"}, {id:"C", text:"C. 📱 手机 (HP)", icon:"📱"}], exp: "雨伞 = Payung." },
        { p: "选出与'很冷'相符的图片：", a: "很冷", c: "B", o: [{id:"A", text:"A. 🥵 满头大汗 (Kepanasan)", icon:"🥵"}, {id:"B", text:"B. 🥶 瑟瑟发抖 (Kedinginan)", icon:"🥶"}, {id:"C", text:"C. 😃 微笑 (Senyum)", icon:"😃"}], exp: "很冷 = Sangat dingin." }
      ],
      vDialogues: [
        { q: "问：今天天气怎么样？\n答：__________？", a: "今天天气怎么样？", c: "A", o: [{id:"A", text:"A. 今天是晴天，很热。(Hari ini cerah, panas)"}, {id:"B", text:"B. 我是八岁。(Saya 8 tahun)"}, {id:"C", text:"C. 在学校里。(Di sekolah)"}], exp: "Menjawab cuaca: 今天是晴天，很热." },
        { q: "问：明天会下雨吗？\n答：__________？", a: "明天会下雨吗？", c: "B", o: [{id:"A", text:"A. 很好吃。(Sangat lezat)"}, {id:"B", text:"B. 天气预报说不会下雨。(Ramalan bilang tidak hujan)"}, {id:"C", text:"C. 我去上学。(Saya pergi sekolah)"}], exp: "Menjawab kemungkinan hujan: 天气预报说不会下雨." },
        { q: "问：冬天冷不冷？\n答：__________？", a: "冬天冷不冷？", c: "A", o: [{id:"A", text:"A. 冬天非常冷，会下雪。(Sangat dingin, turun salju)"}, {id:"B", text:"B. 他是王老师。(Dia guru Wang)"}, {id:"C", text:"C. 颜色很漂亮。(Warnanya indah)"}], exp: "Menjawab suhu musim dingin: 冬天非常冷." },
        { q: "问：外面下雨了，你带伞了吗？\n答：__________？", a: "外面下雨了你带伞了吗？", c: "C", o: [{id:"A", text:"A. 我喜欢游泳。(Saya suka berenang)"}, {id:"B", text:"B. 苹果五块钱。(Apel 5 yuan)"}, {id:"C", text:"C. 我带了雨伞。(Saya bawa payung)"}], exp: "Konfirmasi membawa payung: 我带了雨伞." },
        { q: "问：你最喜欢哪个季节？\n答：__________？", a: "你最喜欢哪个季节？", c: "A", o: [{id:"A", text:"A. 我最喜欢春天，天气很暖和。(Suka musim semi, hangat)"}, {id:"B", text:"B. 我有三支笔。(Punya 3 pena)"}, {id:"C", text:"C. 认识你很高兴。(Senang kenal)"}], exp: "Menjawab musim favorit: 最喜欢春天." }
      ],
      vBlanks: [
        { p: "今天太阳很大，天气很______。\nJīntiān tàiyáng hěn dà, tiānqì hěn ______.", a: "今天太阳很大天气很热。", c: "A", o: [{id:"A", text:"A. 热 (panas)"}, {id:"B", text:"B. 铅笔 (pensil)"}, {id:"C", text:"C. 睡觉 (tidur)"}], exp: "Matahari terik = cuaca panas (热)." },
        { p: "下雨了，出门要带______。\nXiàyǔ le, chūmén yào dài ______.", a: "下雨了出门要带雨伞。", c: "A", o: [{id:"A", text:"A. 雨伞 (payung)"}, {id:"B", text:"B. 足球 (bola)"}, {id:"C", text:"C. 桌子 (meja)"}], exp: "Saat hujan membawa payung (雨伞)." },
        { p: "明天是______天，没有太阳。\nMíngtiān shì ______ tiān, méiyǒu tàiyáng.", a: "明天是阴天没有太阳。", c: "A", o: [{id:"A", text:"A. 阴 (mendung)"}, {id:"B", text:"B. 晴 (cerah)"}, {id:"C", text:"C. 热 (panas)"}], exp: "Tanpa matahari = mendung (阴天)." },
        { p: "冬天下雪了，天气非常______。\nDōngtiān xiàxuě le, tiānqì fēicháng ______.", a: "冬天下雪了天气非常冷。", c: "A", o: [{id:"A", text:"A. 冷 (dingin)"}, {id:"B", text:"B. 甜 (manis)"}, {id:"C", text:"C. 贵 (mahal)"}], exp: "Musim salju sangat dingin (冷)." },
        { p: "今天外面在刮大______。\nJīntiān wàimiàn zài guā dà ______.", a: "今天外面在刮大风。", c: "A", o: [{id:"A", text:"A. 风 (angin)"}, {id:"B", text:"B. 鱼 (ikan)"}, {id:"C", text:"C. 书 (buku)"}], exp: "刮大风 (berangin kencang)." }
      ],
      vOrder: [
        { p: "连词成句：①天气 ②今天 ③怎么样", a: "今天天气怎么样？", c: "A", o: [{id:"A", text:"A. ② ① ③ (今天天气怎么样？)"}, {id:"B", text:"B. ③ ① ② (怎么样天气今天？)"}, {id:"C", text:"C. ① ② ③ (天气今天怎么样？)"}], exp: "Susunan: 今天天气怎么样？" },
        { p: "连词成句：①是 ②今天 ③晴天", a: "今天是晴天。", c: "A", o: [{id:"A", text:"A. ② ① ③ (今天是晴天。)"}, {id:"B", text:"B. ③ ① ② (晴天是今天。)"}, {id:"C", text:"C. ① ② ③ (是今天晴天。)"}], exp: "Susunan: 今天是晴天。" },
        { p: "连词成句：①会 ②明天 ③下雨 ④吗", a: "明天会下雨吗？", c: "A", o: [{id:"A", text:"A. ② ① ③ ④ (明天会下雨吗？)"}, {id:"B", text:"B. ① ② ③ ④ (会明天下雨吗？)"}, {id:"C", text:"C. ④ ② ① ③ (吗明天会下雨？)"}], exp: "Susunan: 明天会下雨吗？" },
        { p: "'晴天' (qíngtiān) 的印尼语意思是什么？", a: "晴天", c: "A", o: [{id:"A", text:"A. Hari cerah"}, {id:"B", text:"B. Hari hujan"}, {id:"C", text:"C. Hari bersalju"}], exp: "晴天 = Hari cerah." },
        { p: "'下雪' (xiàxuě) 的印尼语意思是什么？", a: "下雪", c: "A", o: [{id:"A", text:"A. Turun salju"}, {id:"B", text:"B. Turun hujan"}, {id:"C", text:"C. Berangin"}], exp: "下雪 = Turun salju." }
      ]
    },

    {
      unit: 5, title: "你喜欢什么运动",
      vTrueFalse: [
        { p: "哥哥在操场上踢足球。\nGēge zài cāochǎng shang tī zúqiú.", a: "哥哥在操场上踢足球。", ic: "⚽🏃", d: "Bermain sepak bola di lapangan", c: "T", exp: "Benar, bermain sepak bola (踢足球)." },
        { p: "妹妹喜欢在水里游泳。\nMèimei xǐhuan zài shuǐ lǐ yóuyǒng.", a: "妹妹喜欢在水里游泳。", ic: "🏊‍♀️", d: "Berenang di kolam air", c: "T", exp: "Benar, berenang (游泳)." },
        { p: "他们在教室里打篮球。\nTāmen zài jiàoshì lǐ dǎ lánqiú.", a: "他们在教室里打篮球。", ic: "🏀🏢", d: "Main basket di dalam kelas", c: "F", exp: "Salah, bermain basket di lapangan luar, bukan di dalam kelas." },
        { p: "早上跑步对身体好。\nZǎoshang pǎobù duì shēntǐ hǎo.", a: "早上跑步对身体好。", ic: "🏃‍♂️🌅", d: "Lari pagi sehat", c: "T", exp: "Benar, lari pagi bagus untuk kesehatan (跑步对身体好)." },
        { p: "我会打羽毛球。\nWǒ huì dǎ yǔmáoqiú.", a: "我会打羽毛球。", ic: "🏸", d: "Bermain bulu tangkis dengan raket", c: "T", exp: "Benar, bermain bulu tangkis (打羽毛球)." }
      ],
      vPics: [
        { p: "选出与'踢足球'相符的图片：", a: "踢足球", c: "A", o: [{id:"A", text:"A. ⚽ 踢足球 (Sepak bola)", icon:"⚽"}, {id:"B", text:"B. 🏊 游泳 (Renang)", icon:"🏊"}, {id:"C", text:"C. 📖 读书 (Baca)", icon:"📖"}], exp: "踢足球 = Bermain sepak bola." },
        { p: "选出与'打篮球'相符的图片：", a: "打篮球", c: "B", o: [{id:"A", text:"A. 🚲 骑车 (Sepeda)", icon:"🚲"}, {id:"B", text:"B. 🏀 打篮球 (Basket)", icon:"🏀"}, {id:"C", text:"C. 🍎 苹果 (Apel)", icon:"🍎"}], exp: "打篮球 = Bermain bola basket." },
        { p: "选出与'游泳'相符的图片：", a: "游泳", c: "C", o: [{id:"A", text:"A. 🏃 跑步 (Lari)", icon:"🏃"}, {id:"B", text:"B. 🛌 睡觉 (Tidur)", icon:"🛌"}, {id:"C", text:"C. 🏊 游泳 (Renang)", icon:"🏊"}], exp: "游泳 = Berenang." },
        { p: "选出与'跑步'相符的图片：", a: "跑步", c: "A", o: [{id:"A", text:"A. 🏃 跑步 (Lari)", icon:"🏃"}, {id:"B", text:"B. 🍳 做饭 (Masak)", icon:"🍳"}, {id:"C", text:"C. 🎤 唱歌 (Nyanyi)", icon:"🎤"}], exp: "跑步 = Berlari." },
        { p: "选出与'羽毛球'相符的图片：", a: "羽毛球", c: "B", o: [{id:"A", text:"A. 🎾 网球 (Tenis)", icon:"🎾"}, {id:"B", text:"B. 🏸 羽毛球 (Bulu tangkis)", icon:"🏸"}, {id:"C", text:"C. 🏓 乒乓球 (Pingpong)", icon:"🏓"}], exp: "羽毛球 = Bulu tangkis." }
      ],
      vDialogues: [
        { q: "问：你最喜欢什么运动？\n答：__________？", a: "你最喜欢什么运动？", c: "A", o: [{id:"A", text:"A. 我最喜欢踢足球。(Paling suka sepak bola)"}, {id:"B", text:"B. 今天星期五。(Hari Jumat)"}, {id:"C", text:"C. 这是红色的。(Ini merah)"}], exp: "Menjawab jenis olahraga: 最喜欢踢足球." },
        { q: "问：你会游泳吗？\n答：__________？", a: "你会游泳吗？", c: "B", o: [{id:"A", text:"A. 我不去超市。(Saya tidak ke toko)"}, {id:"B", text:"B. 我会，我游得很快。(Bisa, renangku cepat)"}, {id:"C", text:"C. 八点半了。(Sudah 8.30)"}], exp: "Menjawab kemampuan berenang: 我会." },
        { q: "问：星期天我们一起去打篮球好吗？\n答：__________？", a: "星期天我们一起去打篮球好吗？", c: "C", o: [{id:"A", text:"A. 橡皮五块钱。(Penghapus 5 yuan)"}, {id:"B", text:"B. 他是新同学。(Dia murid baru)"}, {id:"C", text:"C. 好啊，操场见！(Boleh, ketemu di lapangan!)"}], exp: "Menyetujui ajakan main basket: 好啊，操场见！" },
        { q: "问：多做运动有什么好处？\n答：__________？", a: "多做运动有什么好处？", c: "A", o: [{id:"A", text:"A. 运动让身体更健康。(Olahraga membuat tubuh lebih sehat)"}, {id:"B", text:"B. 运动很贵。(Olahraga mahal)"}, {id:"C", text:"C. 运动下雨。(Olahraga hujan)"}], exp: "Manfaat olahraga: 身体更健康." },
        { q: "问：你会不会打羽毛球？\n答：__________？", a: "你会不会打羽毛球？", c: "A", o: [{id:"A", text:"A. 我会一点儿。(Saya bisa sedikit)"}, {id:"B", text:"B. 我没有书包。(Tak punya tas)"}, {id:"C", text:"C. 昨天是晴天。(Kemarin cerah)"}], exp: "Menjawab kemahiran: 我会一点儿." }
      ],
      vBlanks: [
        { p: "我和朋友在操场上踢______。\nWǒ hé péngyou zài cāochǎng shang tī ______.", a: "我和朋友在操场上踢足球。", c: "A", o: [{id:"A", text:"A. 足球 (sepak bola)"}, {id:"B", text:"B. 铅笔 (pensil)"}, {id:"C", text:"C. 苹果 (apel)"}], exp: "踢足球 (bermain sepak bola)." },
        { p: "夏天天气热，去______最舒服了。\nXiàtiān tiānqì rè, qù ______ zuì shūfu le.", a: "夏天天气热去游泳最舒服了。", c: "A", o: [{id:"A", text:"A. 游泳 (berenang)"}, {id:"B", text:"B. 睡觉 (tidur)"}, {id:"C", text:"C. 做作业 (kerja PR)"}], exp: "Cuaca panas asyik pergi berenang (游泳)." },
        { p: "多运动对______非常好。\nDuō yùndòng duì ______ fēicháng hǎo.", a: "多运动对身体非常好。", c: "A", o: [{id:"A", text:"A. 身体 (tubuh/kesehatan)"}, {id:"B", text:"B. 尺子 (penggaris)"}, {id:"C", text:"C. 阴天 (mendung)"}], exp: "Bagus untuk tubuh: 对身体好." },
        { p: "你会______打篮球吗？\nNǐ huì ______ dǎ lánqiú ma?", a: "你会打篮球吗？", c: "A", o: [{id:"A", text:"A. 打 (memainkan)"}, {id:"B", text:"B. 吃 (makan)"}, {id:"C", text:"C. 喝 (minum)"}], exp: "Kata kerja basket memakai 打 (dǎ)." },
        { p: "我每天早上在公园里______。\nWǒ měitiān zǎoshang zài gōngyuán lǐ ______.", a: "我每天早上在公园里跑步。", c: "A", o: [{id:"A", text:"A. 跑步 (berlari)"}, {id:"B", text:"B. 课本 (buku)"}, {id:"C", text:"C. 铅笔盒 (kotak pensil)"}], exp: "Lari pagi di taman: 跑步." }
      ],
      vOrder: [
        { p: "连词成句：①踢足球 ②最 ③我 ④喜欢", a: "我最喜欢踢足球。", c: "A", o: [{id:"A", text:"A. ③ ② ④ ① (我最喜欢踢足球。)"}, {id:"B", text:"B. ① ④ ③ ② (踢足球喜欢我最。)"}, {id:"C", text:"C. ② ③ ① ④ (最我踢足球喜欢。)"}], exp: "Susunan: 我最喜欢踢足球。" },
        { p: "连词成句：①打 ②会 ③篮球 ④你 ⑤吗", a: "你会打篮球吗？", c: "A", o: [{id:"A", text:"A. ④ ② ① ③ ⑤ (你会打篮球吗？)"}, {id:"B", text:"B. ① ③ ② ④ ⑤ (打篮球会你吗？)"}, {id:"C", text:"C. ⑤ ④ ② ① ③ (吗你会打篮球？)"}], exp: "Susunan: 你会打篮球吗？" },
        { p: "连词成句：①对 ②运动 ③身体 ④很好", a: "运动对身体很好。", c: "A", o: [{id:"A", text:"A. ② ① ③ ④ (运动对身体很好。)"}, {id:"B", text:"B. ③ ① ② ④ (身体对运动很好。)"}, {id:"C", text:"C. ④ ① ② ③ (很好对运动身体。)"}], exp: "Susunan: 运动对身体很好。" },
        { p: "'运动' (yùndòng) 的印尼语意思是什么？", a: "运动", c: "A", o: [{id:"A", text:"A. Olahraga"}, {id:"B", text:"B. Pelajaran"}, {id:"C", text:"C. Makanan"}], exp: "运动 = Olahraga." },
        { p: "'游泳' (yóuyǒng) 的印尼语意思是什么？", a: "游泳", c: "A", o: [{id:"A", text:"A. Berenang"}, {id:"B", text:"B. Berlari"}, {id:"C", text:"C. Melompat"}], exp: "游泳 = Berenang." }
      ]
    },

    {
      unit: 6, title: "在水果店",
      vTrueFalse: [
        { p: "红苹果又大又甜。\nHóng píngguǒ yòu dà yòu tián.", a: "红苹果又大又甜。", ic: "🍎", d: "Apel merah besar manis", c: "T", exp: "Benar, apel merah besar dan manis (苹果又大又甜)." },
        { p: "西瓜是黄色的，很酸。\nXīguā shì huángsè de, hěn suān.", a: "西瓜是黄色的很酸。", ic: "🍉", d: "Semangka merah segar", c: "F", exp: "Salah, semangka kulitnya hijau isinya merah manis." },
        { p: "香蕉一斤三块钱。\nXiāngjiāo yì jīn sān kuài qián.", a: "香蕉一斤三块钱。", ic: "🍌💰", d: "Pisang kuning dengan tag harga", c: "T", exp: "Benar, harga pisang (香蕉三块钱)." },
        { p: "妈妈在水果店买书包。\nMāma zài shuǐguǒ diàn mǎi shūbāo.", a: "妈妈在水果店买书包。", ic: "🏪🍉", d: "Toko buah", c: "F", exp: "Salah, di toko buah membeli buah, bukan tas sekolah." },
        { p: "一共花了二十块钱。\nYígòng huā le èrshí kuài qián.", a: "一共花了二十块钱。", ic: "💵", d: "Total uang belanja", c: "T", exp: "Benar, total belanja 20 kuai (二十块钱)." }
      ],
      vPics: [
        { p: "选出与'苹果'相符的图片：", a: "苹果", c: "A", o: [{id:"A", text:"A. 🍎 苹果 (Apel)", icon:"🍎"}, {id:"B", text:"B. 🍌 香蕉 (Pisang)", icon:"🍌"}, {id:"C", text:"C. 🍉 西瓜 (Semangka)", icon:"🍉"}], exp: "苹果 = Apel." },
        { p: "选出与'西瓜'相符的图片：", a: "西瓜", c: "C", o: [{id:"A", text:"A. 🍇 葡萄 (Anggur)", icon:"🍇"}, {id:"B", text:"B. 🍓 草莓 (Stroberi)", icon:"🍓"}, {id:"C", text:"C. 🍉 西瓜 (Semangka)", icon:"🍉"}], exp: "西瓜 = Semangka." },
        { p: "选出与'香蕉'相符的图片：", a: "香蕉", c: "B", o: [{id:"A", text:"A. 🍍 菠萝 (Nanas)", icon:"🍍"}, {id:"B", text:"B. 🍌 香蕉 (Pisang)", icon:"🍌"}, {id:"C", text:"C. 🍑 桃子 (Persik)", icon:"🍑"}], exp: "香蕉 = Pisang." },
        { p: "选出与'买东西/付钱'相符的图片：", a: "买东西", c: "A", o: [{id:"A", text:"A. 🛒 付钱买东西 (Belanja bayar)", icon:"🛒"}, {id:"B", text:"B. 🏊 游泳 (Renang)", icon:"🏊"}, {id:"C", text:"C. 😴 睡觉 (Tidur)", icon:"😴"}], exp: "买东西 = Berbelanja." },
        { p: "选出与'水果店'相符的图片：", a: "水果店", c: "B", o: [{id:"A", text:"A. 🏫 学校 (Sekolah)", icon:"🏫"}, {id:"B", text:"B. 🏪 水果店 (Toko buah)", icon:"🏪"}, {id:"C", text:"C. 🏥 医院 (RS)", icon:"🏥"}], exp: "水果店 = Toko buah." }
      ],
      vDialogues: [
        { q: "问：请问苹果怎么卖？\n答：__________？", a: "请问苹果怎么卖？", c: "A", o: [{id:"A", text:"A. 五块钱一斤。(5 yuan satu jin)"}, {id:"B", text:"B. 我是学生。(Saya siswa)"}, {id:"C", text:"C. 现在八点。(Sekarang jam 8)"}], exp: "Menjawab harga barang: 五块钱一斤." },
        { q: "问：这西瓜甜不甜？\n答：__________？", a: "这西瓜甜不甜？", c: "B", o: [{id:"A", text:"A. 他在打球。(Dia main bola)"}, {id:"B", text:"B. 非常甜，很好吃！(Sangat manis, enak sekali!)"}, {id:"C", text:"C. 我去学校。(Saya ke sekolah)"}], exp: "Menjawab rasa semangka: 非常甜." },
        { q: "问：你想买什么水果？\n答：__________？", a: "你想买什么水果？", c: "C", o: [{id:"A", text:"A. 明天下雨。(Besok hujan)"}, {id:"B", text:"B. 认识你很高兴。(Senang kenal)"}, {id:"C", text:"C. 我想买两斤香蕉。(Mau beli 2 jin pisang)"}], exp: "Menjawab jenis buah yang ingin dibeli: 买两斤香蕉." },
        { q: "问：一共多少钱？\n答：__________？", a: "一共多少钱？", c: "A", o: [{id:"A", text:"A. 一共三十块钱。(Total 30 yuan)"}, {id:"B", text:"B. 教室里有桌子。(Di kelas ada meja)"}, {id:"C", text:"C. 不客气。(Sama-sama)"}], exp: "Menjawab total harga: 一共三十块钱." },
        { q: "问：还要别的吗？\n答：__________？", a: "还要别的吗？", c: "A", o: [{id:"A", text:"A. 不要了，谢谢！(Tidak usah lagi, terima kasih!)"}, {id:"B", text:"B. 我今年十岁。(Saya 10 tahun)"}, {id:"C", text:"C. 早上好。(Selamat pagi)"}], exp: "Menjawab tawaran kasir: 不要了，谢谢！" }
      ],
      vBlanks: [
        { p: "妈妈去超市买新鲜的______。\nMāma qù chāoshì mǎi xīnxiān de ______.", a: "妈妈去超市买新鲜的水果。", c: "A", o: [{id:"A", text:"A. 水果 (buah-buahan)"}, {id:"B", text:"B. 尺子 (penggaris)"}, {id:"C", text:"C. 晴天 (cerah)"}], exp: "Beli buah segar: 新鲜的水果." },
        { p: "请问，这个西瓜多少______？\nQǐngwèn, zhè ge xīguā duōshao ______?", a: "请问这个西瓜多少钱？", c: "A", o: [{id:"A", text:"A. 钱 (uang/harga)"}, {id:"B", text:"B. 点 (jam)"}, {id:"C", text:"C. 岁 (tahun usia)"}], exp: "Tanya harga: 多少钱？" },
        { p: "这里的苹果又大______甜。\nZhèlǐ de píngguǒ yòu dà ______ tián.", a: "这里的苹果又大又甜。", c: "A", o: [{id:"A", text:"A. 又 (dan/juga)"}, {id:"B", text:"B. 在 (di)"}, {id:"C", text:"C. 会 (bisa)"}], exp: "Pola: 又...又... (又大又甜)." },
        { p: "一共是十五______钱。\nYígòng shì shíwǔ ______ qián.", a: "一共是十五块钱。", c: "A", o: [{id:"A", text:"A. 块 (satuan mata uang)"}, {id:"B", text:"B. 只 (ekor)"}, {id:"C", text:"C. 本 (jilid)"}], exp: "Satuan mata uang: 块 (kuài)." },
        { p: "黄色的______弯弯的，像小船。\nHuángsè de ______ wānwān de, xiàng xiǎochuán.", a: "黄色的香蕉弯弯的像小船。", c: "A", o: [{id:"A", text:"A. 香蕉 (pisang)"}, {id:"B", text:"B. 苹果 (apel)"}, {id:"C", text:"C. 西瓜 (semangka)"}], exp: "Kuning melengkung seperti perahu: 香蕉 (pisang)." }
      ],
      vOrder: [
        { p: "连词成句：①多少 ②苹果 ③钱 ④一斤", a: "苹果一斤多少钱？", c: "A", o: [{id:"A", text:"A. ② ④ ① ③ (苹果一斤多少钱？)"}, {id:"B", text:"B. ① ③ ② ④ (多少钱苹果一斤？)"}, {id:"C", text:"C. ④ ② ① ③ (一斤苹果多少钱？)"}], exp: "Susunan: 苹果一斤多少钱？" },
        { p: "连词成句：①买 ②一个 ③西瓜 ④我想 ⑤大", a: "我想买一个大西瓜。", c: "A", o: [{id:"A", text:"A. ④ ① ② ⑤ ③ (我想买一个大西瓜。)"}, {id:"B", text:"B. ② ⑤ ③ ④ ① (一个大西瓜我想买。)"}, {id:"C", text:"C. ① ④ ② ⑤ ③ (买我想一个大西瓜。)"}], exp: "Susunan: 我想买一个大西瓜。" },
        { p: "连词成句：①又大 ②西瓜 ③又甜 ④这", a: "这西瓜又大又甜。", c: "A", o: [{id:"A", text:"A. ④ ② ① ③ (这西瓜又大又甜。)"}, {id:"B", text:"B. ① ③ ④ ② (又大又甜这西瓜。)"}, {id:"C", text:"C. ② ④ ① ③ (西瓜这又大又甜。)"}], exp: "Susunan: 这西瓜又大又甜。" },
        { p: "'多少钱' (duōshao qián) 的印尼语意思是什么？", a: "多少钱", c: "A", o: [{id:"A", text:"A. Berapa harganya?"}, {id:"B", text:"B. Jam berapa?"}, {id:"C", text:"C. Berapa umurnya?"}], exp: "多少钱 = Berapa harganya?" },
        { p: "'买' (mǎi) 的印尼语意思是什么？", a: "买", c: "A", o: [{id:"A", text:"A. Membeli"}, {id:"B", text:"B. Menjual"}, {id:"C", text:"C. Meminjam"}], exp: "买 = Membeli (sedangkan 卖 = Menjual)." }
      ]
    },

    {
      unit: 7, title: "在动物园",
      vTrueFalse: [
        { p: "大熊猫胖胖的，很可爱。\nDàxióngmāo pàngpàng de, hěn kě'ài.", a: "大熊猫胖胖的很可爱。", ic: "🐼", d: "Panda makan bambu lucu", c: "T", exp: "Benar, panda (大熊猫) lucu (可爱)." },
        { p: "大象的鼻子长长的。\nDàxiàng de bízi chángcháng de.", a: "大象的鼻子长长的。", ic: "🐘", d: "Gajah berbelalai panjang", c: "T", exp: "Benar, belalai gajah panjang (长长的)." },
        { p: "老虎在树上吃香蕉。\nLǎohǔ zài shù shang chī xiāngjiāo.", a: "老虎在树上吃香蕉。", ic: "🐯", d: "Harimau di padang rumput", c: "F", exp: "Salah, harimau makan daging di rumput, bukan makan pisang di pohon." },
        { p: "小猴子在树上跳来跳去。\nXiǎohóuzi zài shù shang tiào lái tiào qù.", a: "小猴子在树上跳来跳去。", ic: "🐒🌲", d: "Monyet lincah di pohon", c: "T", exp: "Benar, monyet melompat di pohon (小猴子)." },
        { p: "湖里有一只老虎在游泳。\nHú lǐ yǒu yì zhī lǎohǔ zài yóuyǒng.", a: "湖里有一只老虎在游泳。", ic: "🐟🏊", d: "Ikan-ikan di air danau", c: "F", exp: "Salah, di danau ada ikan/bebek, bukan habitat harimau berenang tetap." }
      ],
      vPics: [
        { p: "选出与'大熊猫'相符的图片：", a: "大熊猫", c: "A", o: [{id:"A", text:"A. 🐼 大熊猫 (Panda)", icon:"🐼"}, {id:"B", text:"B. 🦁 狮子 (Singa)", icon:"🦁"}, {id:"C", text:"C. 🐘 大象 (Gajah)", icon:"🐘"}], exp: "大熊猫 = Panda raksasa." },
        { p: "选出与'大象'相符的图片：", a: "大象", c: "B", o: [{id:"A", text:"A. 🦒 长颈鹿 (Jerapah)", icon:"🦒"}, {id:"B", text:"B. 🐘 大象 (Gajah)", icon:"🐘"}, {id:"C", text:"C. 🐯 老虎 (Harimau)", icon:"🐯"}], exp: "大象 = Gajah." },
        { p: "选出与'猴子'相符的图片：", a: "猴子", c: "C", o: [{id:"A", text:"A. 🐰 兔子 (Kelinci)", icon:"🐰"}, {id:"B", text:"B. 🐻 棕熊 (Beruang)", icon:"🐻"}, {id:"C", text:"C. 🐒 猴子 (Monyet)", icon:"🐒"}], exp: "猴子 = Monyet." },
        { p: "选出与'老虎'相符的图片：", a: "老虎", c: "A", o: [{id:"A", text:"A. 🐯 老虎 (Harimau)", icon:"🐯"}, {id:"B", text:"B. 🐶 小狗 (Anjing)", icon:"🐶"}, {id:"C", text:"C. 🐱 小猫 (Kucing)", icon:"🐱"}], exp: "老虎 = Harimau." },
        { p: "选出与'小鸟'相符的图片：", a: "小鸟", c: "B", o: [{id:"A", text:"A. 🐍 蛇 (Ular)", icon:"🐍"}, {id:"B", text:"B. 🐦 小鸟 (Burung)", icon:"🐦"}, {id:"C", text:"C. 🐢 乌龟 (Kura-kura)", icon:"🐢"}], exp: "小鸟 = Burung." }
      ],
      vDialogues: [
        { q: "问：你最喜欢动物园里的什么动物？\n答：__________？", a: "你最喜欢动物园里的什么动物？", c: "A", o: [{id:"A", text:"A. 我最喜欢大熊猫，它很可爱。(Paling suka panda, lucu)"}, {id:"B", text:"B. 苹果五块钱。(Apel 5 yuan)"}, {id:"C", text:"C. 现在八点半。(Sekarang 8.30)"}], exp: "Menjawab hewan favorit: 我最喜欢大熊猫." },
        { q: "问：大熊猫在做什么呢？\n答：__________？", a: "大熊猫在做什么呢？", c: "B", o: [{id:"A", text:"A. 它在踢足球。(Main bola)"}, {id:"B", text:"B. 它正在吃竹子呢。(Sedang makan bambu)"}, {id:"C", text:"C. 它在写汉字。(Nulis Hanzi)"}], exp: "Kegiatan panda: 正在吃竹子." },
        { q: "问：大象的鼻子怎么样？\n答：__________？", a: "大象的鼻子怎么样？", c: "C", o: [{id:"A", text:"A. 它是红色的。(Berwarna merah)"}, {id:"B", text:"B. 它会开车。(Bisa nyetir)"}, {id:"C", text:"C. 它的鼻子长长的。(Belalainya panjang-panjang)"}], exp: "Ciri hidung gajah: 鼻子长长的." },
        { q: "问：树上有几只小猴子？\n答：__________？", a: "树上有几只小猴子？", c: "A", o: [{id:"A", text:"A. 树上有三只小猴子。(Di pohon ada 3 monyet)"}, {id:"B", text:"B. 树上很冷。(Di pohon dingin)"}, {id:"C", text:"C. 不用谢。(Sama-sama)"}], exp: "Menjawab jumlah hewan: 三只小猴子." },
        { q: "问：我们要怎样对待动物？\n答：__________？", a: "我们要怎样对待动物？", c: "A", o: [{id:"A", text:"A. 动物是好朋友，我们要保护它们。(Hewan sahabat, harus kita lindungi)"}, {id:"B", text:"B. 我们买动物。(Kita beli hewan)"}, {id:"C", text:"C. 认识你很高兴。(Senang kenal)"}], exp: "Sikap terhadap hewan: 保护它们 (melindungi mereka)." }
      ],
      vBlanks: [
        { p: "草地上有一______可爱的小兔子。\nCǎodì shang yǒu yì ______ kě'ài de xiǎotùzi.", a: "草地上有一只可爱的小兔子。", c: "A", o: [{id:"A", text:"A. 只 (satuan hewan kecil/umum)"}, {id:"B", text:"B. 本 (buku)"}, {id:"C", text:"C. 块 (uang)"}], exp: "Satuan untuk hewan kelinci adalah 只 (zhī)." },
        { p: "大熊猫胖胖的，黑白相间，真______。\nDàxióngmāo pàngpàng de, hēibái xiāngjiàn, zhēn ______.", a: "大熊猫胖胖的真可爱。", c: "A", o: [{id:"A", text:"A. 可爱 (lucu/imut)"}, {id:"B", text:"B. 睡觉 (tidur)"}, {id:"C", text:"C. 多少 (berapa)"}], exp: "Panda sangat lucu (真可爱)." },
        { p: "大象的鼻子______的。\nDàxiàng de bízi ______ de.", a: "大象的鼻子长长的。", c: "A", o: [{id:"A", text:"A. 长长 (panjang-panjang)"}, {id:"B", text:"B. 晴天 (cerah)"}, {id:"C", text:"C. 跑步 (lari)"}], exp: "Belalai panjang: 长长的 (chángcháng de)." },
        { p: "小猴子最喜欢吃______。\nXiǎohóuzi zuì xǐhuan chī ______.", a: "小猴子最喜欢吃香蕉。", c: "A", o: [{id:"A", text:"A. 香蕉 (pisang)"}, {id:"B", text:"B. 铅笔 (pensil)"}, {id:"C", text:"C. 书包 (tas)"}], exp: "Monyet makan pisang (香蕉)." },
        { p: "水里有五______小鱼在游泳。\nShuǐ lǐ yǒu wǔ ______ xiǎoyú zài yóuyǒng.", a: "水里有五条小鱼在游泳。", c: "A", o: [{id:"A", text:"A. 条 (satuan ikan/benda panjang)"}, {id:"B", text:"B. 个 (orang)"}, {id:"C", text:"C. 岁 (tahun)"}], exp: "Satuan untuk ikan adalah 条 (tiáo)." }
      ],
      vOrder: [
        { p: "连词成句：①真 ②大熊猫 ③可爱", a: "大熊猫真可爱！", c: "A", o: [{id:"A", text:"A. ② ① ③ (大熊猫真可爱！)"}, {id:"B", text:"B. ① ③ ② (真可爱大熊猫！)"}, {id:"C", text:"C. ③ ② ① (可爱大熊猫真！)"}], exp: "Susunan: 大熊猫真可爱！" },
        { p: "连词成句：①鼻子 ②大象的 ③长长的 ④是", a: "大象的鼻子是长长的。", c: "A", o: [{id:"A", text:"A. ② ① ④ ③ (大象的鼻子是长长的。)"}, {id:"B", text:"B. ③ ④ ② ① (长长的是大象的鼻子。)"}, {id:"C", text:"C. ① ② ④ ③ (鼻子大象的是长长的。)"}], exp: "Susunan: 大象的鼻子是长长的。" },
        { p: "连词成句：①吃 ②正在 ③它 ④竹子 ⑤呢", a: "它正在吃竹子呢。", c: "A", o: [{id:"A", text:"A. ③ ② ① ④ ⑤ (它正在吃竹子呢。)"}, {id:"B", text:"B. ① ④ ② ③ ⑤ (吃竹子正在它呢。)"}, {id:"C", text:"C. ② ③ ① ④ ⑤ (正在它吃竹子呢。)"}], exp: "Susunan: 它正在吃竹子呢。" },
        { p: "'大象' (dàxiàng) 的印尼语意思是什么？", a: "大象", c: "A", o: [{id:"A", text:"A. Gajah"}, {id:"B", text:"B. Singa"}, {id:"C", text:"C. Harimau"}], exp: "大象 = Gajah." },
        { p: "'可爱' (kě'ài) 的印尼语意思是什么？", a: "可爱", c: "A", o: [{id:"A", text:"A. Lucu / Imut"}, {id:"B", text:"B. Menakutkan"}, {id:"C", text:"C. Cepat"}], exp: "可爱 = Lucu / Imut." }
      ]
    },

    {
      unit: 8, title: "你的生日是几月几号",
      vTrueFalse: [
        { p: "祝你生日快乐！\nZhù nǐ shēngrì kuàilè!", a: "祝你生日快乐！", ic: "🎂🎉", d: "Kue ulang tahun dan lilin", c: "T", exp: "Benar, ucapan selamat ulang tahun (生日快乐)." },
        { p: "桌上有一个大蛋糕。\nZhuō shang yǒu yí ge dà dàngāo.", a: "桌上有一个大蛋糕。", ic: "🍰", d: "Kue tar cokelat", c: "T", exp: "Benar, kue tar (蛋糕)." },
        { p: "我今年两百岁。\nWǒ jīnnián liǎng bǎi suì.", a: "我今年两百岁。", ic: "👦", d: "Anak sekolah dasar", c: "F", exp: "Salah, anak sekolah biasanya sekitar 8-10 tahun, bukan 200 tahun." },
        { p: "这是送给你的礼物。\nZhè shì sòng gěi nǐ de lǐwù.", a: "这是送给你的礼物。", ic: "🎁", d: "Kotak kado berpita cantik", c: "T", exp: "Benar, hadiah/kado (礼物)." },
        { p: "九月十号是教师节。\nJiǔ yuè shí hào shì jiàoshī jié.", a: "九月十号是教师节。", ic: "👩‍🏫💐", d: "Bunga untuk guru", c: "T", exp: "Benar, 10 September adalah Hari Guru." }
      ],
      vPics: [
        { p: "选出与'生日蛋糕'相符的图片：", a: "生日蛋糕", c: "A", o: [{id:"A", text:"A. 🎂 生日蛋糕 (Kue ultah)", icon:"🎂"}, {id:"B", text:"B. 🎒 书包 (Tas)", icon:"🎒"}, {id:"C", text:"C. ⚽ 足球 (Bola)", icon:"⚽"}], exp: "蛋糕 = Kue ulang tahun." },
        { p: "选出与'生日礼物'相符的图片：", a: "生日礼物", c: "B", o: [{id:"A", text:"A. 🚗 汽车 (Mobil)", icon:"🚗"}, {id:"B", text:"B. 🎁 礼物 (Kado)", icon:"🎁"}, {id:"C", text:"C. 🌧️ 下雨 (Hujan)", icon:"🌧️"}], exp: "礼物 = Hadiah / Kado." },
        { p: "选出与'唱生日歌'相符的图片：", a: "唱生日歌", c: "C", o: [{id:"A", text:"A. 🏊 游泳 (Renang)", icon:"🏊"}, {id:"B", text:"B. 🛌 睡觉 (Tidur)", icon:"🛌"}, {id:"C", text:"C. 🎤🎶 唱歌 (Nyanyi)", icon:"🎤"}], exp: "唱歌 = Bernyanyi." },
        { p: "选出与'月亮'相符的图片：", a: "月亮", c: "A", o: [{id:"A", text:"A. 🌙 月亮 (Bulan)", icon:"🌙"}, {id:"B", text:"B. ☀️ 太阳 (Matahari)", icon:"☀️"}, {id:"C", text:"C. 🌲 大树 (Pohon)", icon:"🌲"}], exp: "月 = Bulan." },
        { p: "选出与'快乐/高兴'相符的图片：", a: "快乐", c: "B", o: [{id:"A", text:"A. 😭 哭泣 (Menangis)", icon:"😭"}, {id:"B", text:"B. 🥳 欢庆快乐 (Bahagia)", icon:"🥳"}, {id:"C", text:"C. 😡 生气 (Marah)", icon:"😡"}], exp: "快乐 = Bahagia / Gembira." }
      ],
      vDialogues: [
        { q: "问：你的生日是几月几号？\n答：__________？", a: "你的生日是几月几号？", c: "A", o: [{id:"A", text:"A. 我的生日是九月二十八号。(28 September)"}, {id:"B", text:"B. 我喜欢吃西瓜。(Suka semangka)"}, {id:"C", text:"C. 苹果五块钱。(Apel 5 yuan)"}], exp: "Menjawab tanggal lahir: 九月二十八号." },
        { q: "问：你今年几岁了？\n答：__________？", a: "你今年几岁了？", c: "B", o: [{id:"A", text:"A. 我在学校。(Di sekolah)"}, {id:"B", text:"B. 我今年十岁了。(Tahun ini 10 tahun)"}, {id:"C", text:"C. 谢谢老师。(Terima kasih guru)"}], exp: "Menjawab usia: 今年十岁了." },
        { q: "问：祝你生日快乐！\n答：__________？", a: "祝你生日快乐！", c: "C", o: [{id:"A", text:"A. 对不起。(Minta maaf)"}, {id:"B", text:"B. 不用谢。(Sama-sama)"}, {id:"C", text:"C. 谢谢你！(Terima kasih!)"}], exp: "Membalas ucapan ultah: 谢谢你！" },
        { q: "问：这是送给你的生日礼物，喜欢吗？\n答：__________？", a: "这是送给你的生日礼物喜欢吗？", c: "A", o: [{id:"A", text:"A. 太漂亮了，我非常喜欢！(Indah sekali, sangat suka!)"}, {id:"B", text:"B. 我不去公园。(Tak ke taman)"}, {id:"C", text:"C. 现在八点。(Sekarang jam 8)"}], exp: "Menerima kado dengan gembira." },
        { q: "问：今天是几号？\n答：__________？", a: "今天是几号？", c: "A", o: [{id:"A", text:"A. 今天是五月一号。(Hari ini 1 Mei)"}, {id:"B", text:"B. 他是王老师。(Dia guru Wang)"}, {id:"C", text:"C. 铅笔在书包里。(Pensil di tas)"}], exp: "Menjawab tanggal hari ini: 五月一号." }
      ],
      vBlanks: [
        { p: "祝你生日______！\nZhù nǐ shēngrì ______!", a: "祝你生日快乐！", c: "A", o: [{id:"A", text:"A. 快乐 (bahagia/selamat)"}, {id:"B", text:"B. 游泳 (berenang)"}, {id:"C", text:"C. 跑步 (berlari)"}], exp: "Ucapan ultah: 生日快乐." },
        { p: "我今年十______了。\nWǒ jīnnián shí ______ le.", a: "我今年十岁了。", c: "A", o: [{id:"A", text:"A. 岁 (tahun umur)"}, {id:"B", text:"B. 块 (uang)"}, {id:"C", text:"C. 本 (buku)"}], exp: "Satuan usia anak: 岁 (suì)." },
        { p: "今天是九______十号。\nJīntiān shì jiǔ ______ shí hào.", a: "今天是九月十号。", c: "A", o: [{id:"A", text:"A. 月 (bulan kalender)"}, {id:"B", text:"B. 点 (jam)"}, {id:"C", text:"C. 只 (ekor)"}], exp: "Nama bulan kalender: 九月 (September)." },
        { p: "生日聚会上大家一起吃大______。\nShēngrì jùhuì shang dàjiā yìqǐ chī dà ______.", a: "生日聚会上大家一起吃大蛋糕。", c: "A", o: [{id:"A", text:"A. 蛋糕 (kue tar)"}, {id:"B", text:"B. 雨伞 (payung)"}, {id:"C", text:"C. 尺子 (penggaris)"}], exp: "Makan kue di pesta ulang tahun: 蛋糕." },
        { p: "这是送给你的生日______。\nZhè shì sòng gěi nǐ de shēngrì ______.", a: "这是送给你的生日礼物。", c: "A", o: [{id:"A", text:"A. 礼物 (kado/hadiah)"}, {id:"B", text:"B. 晴天 (hari cerah)"}, {id:"C", text:"C. 阴天 (hari mendung)"}], exp: "Hadiah ulang tahun: 生日礼物." }
      ],
      vOrder: [
        { p: "连词成句：①几月 ②是 ③几号 ④你的 ⑤生日", a: "你的生日是几月几号？", c: "A", o: [{id:"A", text:"A. ④ ⑤ ② ① ③ (你的生日是几月几号？)"}, {id:"B", text:"B. ① ③ ② ④ ⑤ (几月几号是你的生日？)"}, {id:"C", text:"C. ② ④ ⑤ ① ③ (是你的生日几月几号？)"}], exp: "Susunan: 你的生日是几月几号？" },
        { p: "连词成句：①十岁 ②我 ③了 ④今年", a: "我今年十岁了。", c: "A", o: [{id:"A", text:"A. ② ④ ① ③ (我今年十岁了。)"}, {id:"B", text:"B. ① ③ ② ④ (十岁了我今年。)"}, {id:"C", text:"C. ④ ② ③ ① (今年我了十岁。)"}], exp: "Susunan: 我今年十岁了。" },
        { p: "连词成句：①生日 ②祝 ③快乐 ④你", a: "祝你生日快乐！", c: "A", o: [{id:"A", text:"A. ② ④ ① ③ (祝你生日快乐！)"}, {id:"B", text:"B. ① ③ ② ④ (生日快乐祝你！)"}, {id:"C", text:"C. ④ ② ① ③ (你祝生日快乐！)"}], exp: "Susunan: 祝你生日快乐！" },
        { p: "'生日' (shēngrì) 的印尼语意思是什么？", a: "生日", c: "A", o: [{id:"A", text:"A. Ulang tahun"}, {id:"B", text:"B. Hari libur"}, {id:"C", text:"C. Hari sekolah"}], exp: "生日 = Ulang tahun." },
        { p: "'礼物' (lǐwù) 的印尼语意思是什么？", a: "礼物", c: "A", o: [{id:"A", text:"A. Hadiah / Kado"}, {id:"B", text:"B. Makanan"}, {id:"C", text:"C. Minuman"}], exp: "礼物 = Hadiah / Kado." }
      ]
    },

    {
      unit: 9, title: "我们去公园",
      vTrueFalse: [
        { p: "我们骑自行车去公园。\nWǒmen qí zìxíngchē qù gōngyuán.", a: "我们骑自行车去公园。", ic: "🚲🌳", d: "Naik sepeda ke taman", c: "T", exp: "Benar, naik sepeda (骑自行车) ke taman (公园)." },
        { p: "向左拐是图书馆。\nXiàng zuǒ guǎi shì túshūguǎn.", a: "向左拐是图书馆。", ic: "⬅️🏛️", d: "Tanda belok kiri ke gedung", c: "T", exp: "Benar, belok kiri (向左拐)." },
        { p: "公园离这里一万公里，很近。\nGōngyuán lí zhèlǐ hěn jìn.", a: "公园离这里很近。", ic: "🏞️🚶", d: "Taman jalan kaki 5 menit", c: "T", exp: "Benar, jaraknya dekat (很近)." },
        { p: "汽车在天空上飞。\nQìchē zài tiānkōng shang fēi.", a: "汽车在天空上飞。", ic: "🚗🛣️", d: "Mobil berjalan di jalan raya", c: "F", exp: "Salah, mobil berjalan di jalan darat, bukan terbang di langit." },
        { p: "公园前面有一个大湖。\nGōngyuán qiánmiàn yǒu yí ge dà hú.", a: "公园前面有一个大湖。", ic: "🏞️", d: "Danau di depan taman", c: "T", exp: "Benar, danau di bagian depan (前面有大湖)." }
      ],
      vPics: [
        { p: "选出与'自行车'相符的图片：", a: "自行车", c: "A", o: [{id:"A", text:"A. 🚲 自行车 (Sepeda)", icon:"🚲"}, {id:"B", text:"B. 🚗 汽车 (Mobil)", icon:"🚗"}, {id:"C", text:"C. ✈️ 飞机 (Pesawat)", icon:"✈️"}], exp: "自行车 = Sepeda." },
        { p: "选出与'公园'相符的图片：", a: "公园", c: "B", o: [{id:"A", text:"A. 🏥 医院 (RS)", icon:"🏥"}, {id:"B", text:"B. 🌳 公园 (Taman)", icon:"🌳"}, {id:"C", text:"C. 🏬 商场 (Mall)", icon:"🏬"}], exp: "公园 = Taman." },
        { p: "选出与'左边'相符的箭头：", a: "左边", c: "C", o: [{id:"A", text:"A. ⬆️ 上 (Atas)", icon:"⬆️"}, {id:"B", text:"B. ➡️ 右边 (Kanan)", icon:"➡️"}, {id:"C", text:"C. ⬅️ 左边 (Kiri)", icon:"⬅️"}], exp: "左边 = Sebelah kiri." },
        { p: "选出与'右边'相符的箭头：", a: "右边", c: "A", o: [{id:"A", text:"A. ➡️ 右边 (Kanan)", icon:"➡️"}, {id:"B", text:"B. ⬅️ 左边 (Kiri)", icon:"⬅️"}, {id:"C", text:"C. ⬇️ 下 (Bawah)", icon:"⬇️"}], exp: "右边 = Sebelah kanan." },
        { p: "选出与'坐汽车'相符的图片：", a: "坐汽车", c: "B", o: [{id:"A", text:"A. 🚶 走路 (Jalan kaki)", icon:"🚶"}, {id:"B", text:"B. 🚗 坐汽车 (Naik mobil)", icon:"🚗"}, {id:"C", text:"C. 🏊 游泳 (Renang)", icon:"🏊"}], exp: "坐汽车 = Naik mobil." }
      ],
      vDialogues: [
        { q: "问：去恐龙公园怎么走？\n答：__________？", a: "去恐龙公园怎么走？", c: "A", o: [{id:"A", text:"A. 往前走，在十字路口向左拐。(Lurus, di perempatan belok kiri)"}, {id:"B", text:"B. 我是学生。(Saya siswa)"}, {id:"C", text:"C. 蛋糕很甜。(Kue manis)"}], exp: "Menjelaskan petunjuk arah: 往前走，向左拐." },
        { q: "问：公园离学校远不远？\n答：__________？", a: "公园离学校远不远？", c: "B", o: [{id:"A", text:"A. 天气很好。(Cuaca bagus)"}, {id:"B", text:"B. 不远，走路五分钟就到了。(Tak jauh, jalan 5 menit sampai)"}, {id:"C", text:"C. 我有三本书。(Punya 3 buku)"}], exp: "Menjawab jarak: 不远 (tidak jauh)." },
        { q: "问：我们怎么去公园？\n答：__________？", a: "我们怎么去公园？", c: "C", o: [{id:"A", text:"A. 昨天是星期天。(Kemarin Minggu)"}, {id:"B", text:"B. 我喜欢看熊猫。(Suka panda)"}, {id:"C", text:"C. 我们骑自行车去吧！(Ayo kita naik sepeda!)"}], exp: "Menjawab pilihan kendaraan: 骑自行车去." },
        { q: "问：谢谢您为我指路！\n答：__________？", a: "谢谢您为我指路！", c: "A", o: [{id:"A", text:"A. 不用谢，慢走！(Sama-sama, hati-hati di jalan!)"}, {id:"B", text:"B. 我不吃。(Tak makan)"}, {id:"C", text:"C. 八点半。(Jam 8.30)"}], exp: "Membalas terima kasih: 不用谢." },
        { q: "问：图书馆在什么地方？\n答：__________？", a: "图书馆在什么地方？", c: "A", o: [{id:"A", text:"A. 在教学楼的后面。(Di belakang gedung kelas)"}, {id:"B", text:"B. 很好吃。(Sangat lezat)"}, {id:"C", text:"C. 他是我同学。(Dia temanku)"}], exp: "Menjawab lokasi: 在教学楼的后面." }
      ],
      vBlanks: [
        { p: "往前一直走，在路口向______拐。\nWǎng qián yìzhí zǒu, zài lùkǒu xiàng ______ guǎi.", a: "往前一直走在路口向左拐。", c: "A", o: [{id:"A", text:"A. 左 (kiri)"}, {id:"B", text:"B. 晴 (cerah)"}, {id:"C", text:"C. 块 (uang)"}], exp: "Petunjuk belokan: 向左拐 (belok kiri)." },
        { p: "我和哥哥骑自______去公园。\nWǒ hé gēge qí zì ______ qù gōngyuán.", a: "我和哥哥骑自行车去公园。", c: "A", o: [{id:"A", text:"A. 行车 (sepeda - zìxíngchē)"}, {id:"B", text:"B. 铅笔 (pensil)"}, {id:"C", text:"C. 苹果 (apel)"}], exp: "自行车 (zìxíngchē = sepeda)." },
        { p: "学校离我家很______，走路三分钟。\nXuéxiào lí wǒ jiā hěn ______, zǒulù sān fēnzhōng.", a: "学校离我家很近走路三分钟。", c: "A", o: [{id:"A", text:"A. 近 (dekat)"}, {id:"B", text:"B. 远 (jauh)"}, {id:"C", text:"C. 贵 (mahal)"}], exp: "Jalan 3 menit berarti dekat: 近 (jìn)." },
        { p: "公园的______面有一个大湖。\nGōngyuán de ______ miàn yǒu yí ge dà hú.", a: "公园的前面有一个大湖。", c: "A", o: [{id:"A", text:"A. 前 (depan)"}, {id:"B", text:"B. 晴 (cerah)"}, {id:"C", text:"C. 岁 (umur)"}], exp: "前面 (qiánmiàn = di depan)." },
        { p: "爸爸开车，我们______汽车去超市。\nBàba kāichē, wǒmen ______ qìchē qù chāoshì.", a: "爸爸开车载我们坐汽车去超市。", c: "A", o: [{id:"A", text:"A. 坐 (naik/duduk)"}, {id:"B", text:"B. 踢 (tendang)"}, {id:"C", text:"C. 打 (pukul)"}], exp: "Naik kendaraan umum/mobil: 坐 (zuò)." }
      ],
      vOrder: [
        { p: "连词成句：①怎么 ②去 ③公园 ④走", a: "去公园怎么走？", c: "A", o: [{id:"A", text:"A. ② ③ ① ④ (去公园怎么走？)"}, {id:"B", text:"B. ① ④ ② ③ (怎么走去公园？)"}, {id:"C", text:"C. ③ ② ① ④ (公园去怎么走？)"}], exp: "Susunan: 去公园怎么走？" },
        { p: "连词成句：①离这里 ②不远 ③公园", a: "公园离这里不远。", c: "A", o: [{id:"A", text:"A. ③ ① ② (公园离这里不远。)"}, {id:"B", text:"B. ① ② ③ (离这里不远公园。)"}, {id:"C", text:"C. ② ③ ① (不远公园离这里。)"}], exp: "Susunan: 公园离这里不远。" },
        { p: "连词成句：①向左 ②在路口 ③拐", a: "在路口向左拐。", c: "A", o: [{id:"A", text:"A. ② ① ③ (在路口向左拐。)"}, {id:"B", text:"B. ① ③ ② (向左拐在路口。)"}, {id:"C", text:"C. ③ ② ① (拐在路口向左。)"}], exp: "Susunan: 在路口向左拐。" },
        { p: "'左边' (zuǒbiān) 的印尼语意思是什么？", a: "左边", c: "A", o: [{id:"A", text:"A. Sebelah kiri"}, {id:"B", text:"B. Sebelah kanan"}, {id:"C", text:"C. Di depan"}], exp: "左边 = Sebelah kiri." },
        { p: "'后面' (hòumiàn) 的印尼语意思是什么？", a: "后面", c: "A", o: [{id:"A", text:"A. Belakang / Di belakang"}, {id:"B", text:"B. Di depan"}, {id:"C", text:"C. Di dalam"}], exp: "后面 = Belakang / Di belakang." }
      ]
    },

    {
      unit: 10, title: "我的一天",
      vTrueFalse: [
        { p: "我先做作业，然后看电视。\nWǒ xiān zuò zuòyè, ránhòu kàn diànshì.", a: "我先做作业然后看电视。", ic: "📝📺", d: "Mengerjakan PR lalu nonton TV", c: "T", exp: "Benar, urutan: kerjakan PR dulu lalu nonton TV." },
        { p: "我帮妈妈做家务，打扫房间。\nWǒ bāng māma zuò jiāwù, dǎsǎo fángjiān.", a: "我帮妈妈做家务打扫房间。", ic: "🧹🏠", d: "Membantu ibu membersihkan rumah", c: "T", exp: "Benar, membantu pekerjaan rumah (做家务)." },
        { p: "大家都非常伤心，都在哭。\nDàjiā dōu fēicháng shāngxīn.", a: "大家都非常伤心。", ic: "😄🎉", d: "Semua gembira tersenyum", c: "F", exp: "Salah, di gambar semua gembira (开心), bukan sedih (伤心)." },
        { p: "我喜欢听欢快的中文歌。\nWǒ xǐhuan tīng huānkuài de Zhōngwén gē.", a: "我喜欢听欢快的中文歌。", ic: "🎧🎶", d: "Mendengarkan musik ceria", c: "T", exp: "Benar, mendengarkan musik (听音乐)." },
        { p: "努力学习汉语，天天向上！\nNǔlì xuéxí Hànyǔ, tiāntiān xiàngshàng!", a: "努力学习汉语天天向上！", ic: "💪📖", d: "Rajin dan tekun belajar", c: "T", exp: "Benar, berusaha giat belajar (努力学习)." }
      ],
      vPics: [
        { p: "选出与'做作业'相符的图片：", a: "做作业", c: "A", o: [{id:"A", text:"A. 📝 做作业 (Kerjakan PR)", icon:"📝"}, {id:"B", text:"B. 🏊 游泳 (Renang)", icon:"🏊"}, {id:"C", text:"C. ⚽ 踢球 (Main bola)", icon:"⚽"}], exp: "做作业 = Mengerjakan tugas/PR." },
        { p: "选出与'看电视'相符的图片：", a: "看电视", c: "B", o: [{id:"A", text:"A. 🚗 开车 (Nyetir)", icon:"🚗"}, {id:"B", text:"B. 📺 看电视 (Nonton TV)", icon:"📺"}, {id:"C", text:"C. 🍳 做饭 (Masak)", icon:"🍳"}], exp: "看电视 = Menonton televisi." },
        { p: "选出与'听音乐'相符的图片：", a: "听音乐", c: "C", o: [{id:"A", text:"A. 🛌 睡觉 (Tidur)", icon:"🛌"}, {id:"B", text:"B. 🚲 骑车 (Sepeda)", icon:"🚲"}, {id:"C", text:"C. 🎧 听音乐 (Dengar musik)", icon:"🎧"}], exp: "听音乐 = Mendengarkan musik." },
        { p: "选出与'帮妈妈'相符的图片：", a: "帮妈妈", c: "A", o: [{id:"A", text:"A. 🧹 帮忙做家务 (Bantu bersihkan rumah)", icon:"🧹"}, {id:"B", text:"B. 🎮 打游戏 (Main game)", icon:"🎮"}, {id:"C", text:"C. 🌧️ 下雨 (Hujan)", icon:"🌧️"}], exp: "帮妈妈做家务 = Membantu ibu mengerjakan pekerjaan rumah." },
        { p: "选出与'开心极了'相符的图片：", a: "开心极了", c: "B", o: [{id:"A", text:"A. 😴 困倦 (Mengantuk)", icon:"😴"}, {id:"B", text:"B. 🤩 大笑开心 (Sangat gembira)", icon:"🤩"}, {id:"C", text:"C. 🥶 寒冷 (Kedinginan)", icon:"🥶"}], exp: "开心极了 = Sangat gembira." }
      ],
      vDialogues: [
        { q: "问：你下午放学后做了什么？\n答：__________？", a: "你下午放学后做了什么？", c: "A", o: [{id:"A", text:"A. 我先做完作业，然后看电视。(Kerjakan PR dulu lalu nonton TV)"}, {id:"B", text:"B. 苹果三块钱。(Apel 3 yuan)"}, {id:"C", text:"C. 它是蓝色的。(Warnanya biru)"}], exp: "Menjawab rutinitas: 先做作业，然后看电视." },
        { q: "问：你经常帮妈妈做家务吗？\n答：__________？", a: "你经常帮妈妈做家务吗？", c: "B", o: [{id:"A", text:"A. 天气很热。(Cuaca panas)"}, {id:"B", text:"B. 是的，我经常帮妈妈扫地。(Ya, sering bantu sapu rumah)"}, {id:"C", text:"C. 这是尺子。(Ini penggaris)"}], exp: "Menjawab kebiasaan membantu ibu: 经常帮妈妈." },
        { q: "问：这学期你学了多少汉字？\n答：__________？", a: "这学期你学了多少汉字？", c: "C", o: [{id:"A", text:"A. 不用谢。(Sama-sama)"}, {id:"B", text:"B. 在公园里。(Di taman)"}, {id:"C", text:"C. 我学会了一百多个汉字！(Menguasai 100+ huruf!)"}], exp: "Menjawab capaian belajar: 学会了一百多个汉字." },
        { q: "问：老师夸奖你，你心情怎么样？\n答：__________？", a: "老师夸奖你你心情怎么样？", c: "A", o: [{id:"A", text:"A. 我心里高兴极了！(Hatiku senang sekali!)"}, {id:"B", text:"B. 他是王老师。(Dia guru Wang)"}, {id:"C", text:"C. 九点睡觉。(Tidur jam 9)"}], exp: "Menjawab perasaan saat dipuji: 高兴极了." },
        { q: "问：未来你打算怎样学习汉语？\n答：__________？", a: "未来你打算怎样学习汉语？", c: "A", o: [{id:"A", text:"A. 我会继续努力，学得更好！(Akan terus berusaha lebih baik!)"}, {id:"B", text:"B. 我不去买水果。(Tak beli buah)"}, {id:"C", text:"C. 昨天刮风。(Kemarin berangin)"}], exp: "Komitmen belajar: 继续努力." }
      ],
      vBlanks: [
        { p: "放学回家，我先做______，然后玩游戏。\nFàngxué huíjiā, wǒ xiān zuò ______, ránhòu wán yóuxì.", a: "放学回家我先做作业然后玩游戏。", c: "A", o: [{id:"A", text:"A. 作业 (PR / tugas)"}, {id:"B", text:"B. 阴天 (mendung)"}, {id:"C", text:"C. 香蕉 (pisang)"}], exp: "Mengerjakan tugas sekolah: 做作业." },
        { p: "小明是个懂事的好孩子，经常______妈妈做家务。\nXiǎomíng shì ge dǒngshì de hǎo háizi, jīngcháng ______ māma zuò jiāwù.", a: "小明经常帮妈妈做家务。", c: "A", o: [{id:"A", text:"A. 帮 (membantu)"}, {id:"B", text:"B. 买 (membeli)"}, {id:"C", text:"C. 跑 (berlari)"}], exp: "Membantu orang tua: 帮妈妈." },
        { p: "我喜欢戴着耳机听______。\nWǒ xǐhuan dài zhe ěrjī tīng ______.", a: "我喜欢戴着耳机听音乐。", c: "A", o: [{id:"A", text:"A. 音乐 (musik)"}, {id:"B", text:"B. 课本 (buku)"}, {id:"C", text:"C. 尺子 (penggaris)"}], exp: "Mendengarkan musik: 听音乐." },
        { p: "考试得了一百分，大家心里都______极了。\nKǎoshì dé le yībǎi fēn, dàjiā xīnlǐ dōu ______ jí le.", a: "考试得了一百分大家心里都高兴极了。", c: "A", o: [{id:"A", text:"A. 高兴 (senang/gembira)"}, {id:"B", text:"B. 睡觉 (tidur)"}, {id:"C", text:"C. 下雨 (hujan)"}], exp: "Merasa senang: 高兴极了." },
        { p: "只要我们每天______学习，就能取得好成绩！\nZhǐyào wǒmen měitiān ______ xuéxí, jiù néng qǔdé hǎo chéngjì!", a: "只要我们每天努力学习就能取得好成绩。", c: "A", o: [{id:"A", text:"A. 努力 (giat / rajin)"}, {id:"B", text:"B. 多少 (berapa)"}, {id:"C", text:"C. 几点 (jam berapa)"}], exp: "Belajar dengan giat: 努力学习." }
      ],
      vOrder: [
        { p: "连词成句：①做作业 ②我 ③在家里 ④认真", a: "我在家里认真做作业。", c: "A", o: [{id:"A", text:"A. ② ③ ④ ① (我在家里认真做作业。)"}, {id:"B", text:"B. ① ④ ② ③ (做作业认真我在家里。)"}, {id:"C", text:"C. ④ ① ② ③ (认真做作业我在家里。)"}], exp: "Susunan: 我在家里认真做作业。" },
        { p: "连词成句：①帮妈妈 ②做 ③我 ④家务", a: "我帮妈妈做家务。", c: "A", o: [{id:"A", text:"A. ③ ① ② ④ (我帮妈妈做家务。)"}, {id:"B", text:"B. ② ④ ③ ① (做家务我帮妈妈。)"}, {id:"C", text:"C. ① ③ ② ④ (帮妈妈我做家务。)"}], exp: "Susunan: 我帮妈妈做家务。" },
        { p: "连词成句：①高兴 ②心里 ③我们 ④极了", a: "我们心里高兴极了。", c: "A", o: [{id:"A", text:"A. ③ ② ① ④ (我们心里高兴极了。)"}, {id:"B", text:"B. ① ④ ③ ② (高兴极了我们心里。)"}, {id:"C", text:"C. ② ① ④ ③ (心里高兴极了我们。)"}], exp: "Susunan: 我们心里高兴极了。" },
        { p: "'作业' (zuòyè) 的印尼语意思是什么？", a: "作业", c: "A", o: [{id:"A", text:"A. Tugas / Pekerjaan Rumah (PR)"}, {id:"B", text:"B. Buku Gambar"}, {id:"C", text:"C. Ujian Akhir"}], exp: "作业 = Pekerjaan Rumah (PR) / Tugas." },
        { p: "'努力' (nǔlì) 的印尼语意思是什么？", a: "努力", c: "A", o: [{id:"A", text:"A. Berusaha giat / Rajin"}, {id:"B", text:"B. Malas"}, {id:"C", text:"C. Cepat"}], exp: "努力 = Berusaha giat / Rajin / Tekun." }
      ]
    }
  ];

  unitTopics.forEach(u => {
    const questions = [];
    let qNum = 1;

    // 1-5: True/False
    u.vTrueFalse.forEach(item => {
      questions.push({
        id: `u${u.unit}_q${qNum}`,
        number: qNum,
        type: "true_false",
        typeName: "Tipe 1: 看图判断对错 (Benar/Salah Gambar)",
        prompt: item.p,
        questionAudio: item.a,
        visualIcon: item.ic,
        visualDesc: item.d,
        options: [{ id: "T", text: "√ 对 (Benar)" }, { id: "F", text: "× 错 (Salah)" }],
        correct: item.c,
        explanation: item.exp
      });
      qNum++;
    });

    // 6-10: Picture choice
    u.vPics.forEach(item => {
      questions.push({
        id: `u${u.unit}_q${qNum}`,
        number: qNum,
        type: "picture_choice",
        typeName: "Tipe 2: 看图选择题 (Pilihan Gambar)",
        prompt: item.p,
        questionAudio: item.a,
        options: item.o,
        correct: item.c,
        explanation: item.exp
      });
      qNum++;
    });

    // 11-15: Dialogue match
    u.vDialogues.forEach(item => {
      questions.push({
        id: `u${u.unit}_q${qNum}`,
        number: qNum,
        type: "dialogue_match",
        typeName: "Tipe 3: 读对话选答句 (Tanya-Jawab Dialog)",
        prompt: item.q,
        questionAudio: item.a,
        options: item.o,
        correct: item.c,
        explanation: item.exp
      });
      qNum++;
    });

    // 16-20: Fill blanks
    u.vBlanks.forEach(item => {
      questions.push({
        id: `u${u.unit}_q${qNum}`,
        number: qNum,
        type: "fill_blank",
        typeName: "Tipe 4: 选词填空 (Lengkapi Kalimat)",
        prompt: item.p,
        questionAudio: item.a,
        options: item.o,
        correct: item.c,
        explanation: item.exp
      });
      qNum++;
    });

    // 21-25: Sentence order / semantics
    u.vOrder.forEach(item => {
      questions.push({
        id: `u${u.unit}_q${qNum}`,
        number: qNum,
        type: "sentence_order",
        typeName: item.p.includes("连词成句") ? "Tipe 5: 连词成句 (Menyusun Kalimat)" : "Tipe 5: 词义理解 (Makna Kosakata)",
        prompt: item.p,
        questionAudio: item.a,
        options: item.o,
        correct: item.c,
        explanation: item.exp
      });
      qNum++;
    });

    YCT2_QUIZ_DATA[u.unit] = questions;
  });
}

buildAllYctQuestions();
