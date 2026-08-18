// Aplikasi Utama Pembelajaran Mandarin HAN YU 3 (Tema Dinosaurus)
// Mengatur state, navigasi, interaksi audio, pembaca unit, game guratan, dan kuis YCT 2

class DinoMandarinApp {
  constructor() {
    this.currentTab = 'reader';
    this.selectedUnit = 1;
    this.selectedLessonId = 1;
    this.selectedWriterUnit = 1;
    this.selectedCharId = "u1_1";
    this.quizUnit = 1;
    this.currentQuestionIdx = 0;
    this.quizScore = 0;
    this.quizAnswered = [];
    this.activeUtteranceId = null;

    // Data Kemajuan Tersimpan (LocalStorage)
    this.state = this.loadState();
  }

  loadState() {
    const saved = localStorage.getItem("hanyu3_dino_state");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Gagal membaca state:", e);
      }
    }
    return {
      masteredChars: [],
      completedLessons: [1],
      quizScores: { unit1: 0, unit2: 0, unit3: 0, all: 0 },
      studentName: "Dino Explorer",
      totalStars: 0
    };
  }

  saveState() {
    localStorage.setItem("hanyu3_dino_state", JSON.stringify(this.state));
    this.updateStatsDisplay();
  }

  init() {
    this.bindNavigation();
    this.bindReaderEvents();
    this.bindWriterEvents();
    this.bindQuizEvents();
    this.bindModalEvents();

    // Inisialisasi Canvas Stroke Engine
    const canvas = document.getElementById("tianzigeCanvas");
    if (canvas && window.strokeEngine) {
      window.strokeEngine.init(canvas);
    }

    // Tampilkan data awal
    this.renderLessonList();
    this.loadLesson(1);
    this.renderWriterCharGrid();
    this.loadWriterChar("u1_1");
    this.updateStatsDisplay();
    this.renderHatchery();

    console.log("🦕🦖 Jurassic Mandarin Han Yu 3 App Berhasil Dimuat!");
  }

  // Navigasi Antar Tab Utama
  bindNavigation() {
    const navButtons = document.querySelectorAll(".dino-nav-btn");
    navButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");
        this.switchTab(targetTab);
        if (window.DinoAudio) window.DinoAudio.playClick();
      });
    });

    // Mute Audio Toggle
    const muteBtn = document.getElementById("muteToggleBtn");
    if (muteBtn) {
      muteBtn.addEventListener("click", () => {
        if (window.DinoAudio) {
          const isMuted = window.DinoAudio.toggleMute();
          muteBtn.innerHTML = isMuted ? "🔇 Suara Mati" : "🔊 Suara Aktif";
          muteBtn.classList.toggle("muted", isMuted);
        }
      });
    }
  }

  switchTab(tabId) {
    this.currentTab = tabId;
    document.querySelectorAll(".dino-nav-btn").forEach(b => {
      b.classList.toggle("active", b.getAttribute("data-tab") === tabId);
    });
    document.querySelectorAll(".tab-pane").forEach(pane => {
      pane.classList.toggle("active", pane.id === `tab-${tabId}`);
    });

    if (tabId === 'writer') {
      setTimeout(() => {
        if (window.strokeEngine) window.strokeEngine.resizeCanvas();
      }, 100);
    }
  }

  // ==========================================
  // MODUL 1: CARA MEMBACA UNIT HAN YU 3
  // ==========================================
  bindReaderEvents() {
    // Tombol Ganti Unit di Tab Membaca
    const unitSelector = document.getElementById("readerUnitSelect");
    if (unitSelector) {
      unitSelector.addEventListener("change", (e) => {
        this.selectedUnit = parseInt(e.target.value, 10);
        this.renderLessonList();
        const firstLesson = window.HAN_YU_3_UNITS.find(u => u.unitId === this.selectedUnit).lessons[0];
        this.loadLesson(firstLesson.id);
        if (window.DinoAudio) window.DinoAudio.playClick();
      });
    }

    // Toggle Pinyin dan Terjemahan
    const togglePinyin = document.getElementById("togglePinyinBtn");
    if (togglePinyin) {
      togglePinyin.addEventListener("click", () => {
        document.body.classList.toggle("hide-pinyin");
        togglePinyin.classList.toggle("active");
      });
    }

    const toggleTrans = document.getElementById("toggleTransBtn");
    if (toggleTrans) {
      toggleTrans.addEventListener("click", () => {
        document.body.classList.toggle("hide-translation");
        toggleTrans.classList.toggle("active");
      });
    }

    // Kecepatan Baca (Normal 0.9x / Pelan 0.65x)
    const speedSelect = document.getElementById("speechSpeedSelect");
    if (speedSelect) {
      speedSelect.addEventListener("change", (e) => {
        const speed = parseFloat(e.target.value);
        if (window.DinoAudio) window.DinoAudio.setRate(speed);
      });
    }
  }

  renderLessonList() {
    const container = document.getElementById("readerLessonList");
    if (!container) return;

    const unit = window.HAN_YU_3_UNITS.find(u => u.unitId === this.selectedUnit);
    if (!unit) return;

    let html = ``;
    unit.lessons.forEach(l => {
      const isSelected = l.id === this.selectedLessonId;
      const isCompleted = this.state.completedLessons.includes(l.id);
      html += `
        <button class="lesson-chip-btn ${isSelected ? 'active' : ''}" onclick="window.DinoApp.loadLesson(${l.id})">
          <span class="lesson-chip-icon">${l.themeIcon}</span>
          <div class="lesson-chip-info">
            <span class="lesson-chip-title">${l.title}</span>
            <span class="lesson-chip-py">${l.titlePinyin}</span>
          </div>
          ${isCompleted ? '<span class="lesson-chip-done">✓</span>' : ''}
        </button>
      `;
    });
    container.innerHTML = html;
  }

  loadLesson(lessonId) {
    this.selectedLessonId = lessonId;
    let foundLesson = null;
    let foundUnit = null;

    for (const u of window.HAN_YU_3_UNITS) {
      const match = u.lessons.find(l => l.id === lessonId);
      if (match) {
        foundLesson = match;
        foundUnit = u;
        break;
      }
    }

    if (!foundLesson) return;
    this.selectedUnit = foundUnit.unitId;

    // Update dropdown unit jika berbeda
    const unitSelect = document.getElementById("readerUnitSelect");
    if (unitSelect && parseInt(unitSelect.value, 10) !== this.selectedUnit) {
      unitSelect.value = this.selectedUnit;
    }

    this.renderLessonList();
    this.renderLessonContent(foundLesson, foundUnit);

    // Tandai bab telah dipelajari
    if (!this.state.completedLessons.includes(lessonId)) {
      this.state.completedLessons.push(lessonId);
      this.state.totalStars += 2;
      this.saveState();
    }
  }

  renderLessonContent(lesson, unit) {
    const container = document.getElementById("lessonDetailContainer");
    if (!container) return;

    let html = `
      <div class="lesson-banner">
        <div class="lesson-banner-header">
          <span class="lesson-dino-badge">${unit.dinoMascot}</span>
          <span class="lesson-theme-icon">${lesson.themeIcon}</span>
        </div>
        <h2 class="lesson-banner-title">${lesson.title}</h2>
        <div class="lesson-banner-py">${lesson.titlePinyin}</div>
        <div class="lesson-banner-id">${lesson.titleId}</div>
        <div class="lesson-banner-actions">
          <button class="dino-btn primary" onclick="window.DinoApp.playFullLessonAudio(${lesson.id})">
            🔊 Dengarkan Seluruh Pelajaran
          </button>
        </div>
      </div>
    `;

    // 1. 学句子 (Belajar Kalimat) jika ada
    if (lesson.sentences && lesson.sentences.length > 0) {
      html += `
        <div class="lesson-section-box">
          <div class="section-box-header">
            <span class="section-box-icon">🗣️</span>
            <h3>学句子 (Belajar Kalimat Inti)</h3>
          </div>
          <div class="sentences-list">
      `;
      lesson.sentences.forEach((s, idx) => {
        html += `
          <div class="sentence-item-card" id="sentence-${idx}">
            <button class="audio-play-circle" onclick="window.DinoApp.playSpeech('${s.zh}')" title="Dengarkan Suara">
              🔊
            </button>
            <div class="sentence-text-box">
              <div class="sentence-py">${s.py}</div>
              <div class="sentence-zh">${s.zh}</div>
              <div class="sentence-id">${s.id}</div>
            </div>
          </div>
        `;
      });
      html += `</div></div>`;
    }

    // 2. 读课文 (Membaca Teks Bacaan) jika ada
    if (lesson.readingText) {
      html += `
        <div class="lesson-section-box">
          <div class="section-box-header">
            <span class="section-box-icon">📖</span>
            <h3>读课文 (Membaca Teks Bacaan: ${lesson.readingText.title})</h3>
          </div>
          <div class="reading-paragraphs-box">
      `;
      lesson.readingText.paragraphs.forEach((p, idx) => {
        html += `
          <div class="paragraph-card" id="para-${idx}">
            <div class="paragraph-header">
              <span class="para-num">Paragraf ${idx + 1}</span>
              <button class="audio-play-small" onclick="window.DinoApp.playSpeech('${p.zh}')">
                🔊 Baca Baris Ini
              </button>
            </div>
            <div class="para-py">${p.py}</div>
            <div class="para-zh">${p.zh}</div>
            <div class="para-id">${p.id}</div>
          </div>
        `;
      });
      html += `</div></div>`;
    }

    // 3. 说一说 / 玩游戏 / 诗歌 (Aktivitas Dialog/Puisi) jika ada
    if (lesson.dialogueActivity) {
      html += `
        <div class="lesson-section-box">
          <div class="section-box-header">
            <span class="section-box-icon">🎭</span>
            <h3>${lesson.dialogueActivity.title}</h3>
          </div>
      `;
      if (lesson.dialogueActivity.sentences) {
        html += `<div class="dialogue-chat-box">`;
        lesson.dialogueActivity.sentences.forEach(d => {
          html += `
            <div class="dialogue-bubble">
              <div class="dialogue-speaker">${d.role}</div>
              <div class="dialogue-content">
                <div class="sentence-py">${d.py}</div>
                <div class="sentence-zh">${d.zh}</div>
                <div class="sentence-id">${d.id}</div>
              </div>
              <button class="audio-play-small" onclick="window.DinoApp.playSpeech('${d.zh}')">🔊</button>
            </div>
          `;
        });
        html += `</div>`;
      } else if (lesson.dialogueActivity.items) {
        html += `<div class="game-items-grid">`;
        lesson.dialogueActivity.items.forEach(it => {
          html += `
            <div class="game-item-card" onclick="window.DinoApp.playSpeech('${it.zh}')">
              <div class="game-item-zh">${it.zh}</div>
              <div class="game-item-py">${it.py}</div>
              <div class="game-item-id">${it.id}</div>
              <span class="audio-badge">🔊 Sentuh untuk Mendengar</span>
            </div>
          `;
        });
        html += `</div>`;
      }
      html += `</div>`;
    }

    // 4. Puisi jika ada
    if (lesson.poemActivity) {
      html += `
        <div class="lesson-section-box poem-box">
          <div class="section-box-header">
            <span class="section-box-icon">📜</span>
            <h3>${lesson.poemActivity.title}</h3>
          </div>
          <div class="poem-lines-box">
      `;
      lesson.poemActivity.lines.forEach(line => {
        html += `
          <div class="poem-line" onclick="window.DinoApp.playSpeech('${line.zh}')">
            <div class="poem-py">${line.py}</div>
            <div class="poem-zh">${line.zh}</div>
            ${line.id ? `<div class="poem-id">${line.id}</div>` : ''}
          </div>
        `;
      });
      html += `
          </div>
        </div>
      `;
    }

    // 5. 记生词 (Kartu Flashcard Kosakata Bab Ini)
    if (lesson.vocabulary && lesson.vocabulary.length > 0) {
      html += `
        <div class="lesson-section-box">
          <div class="section-box-header">
            <span class="section-box-icon">✨</span>
            <h3>记生词 (Kosakata Baru - ${lesson.vocabulary.length} Kata)</h3>
          </div>
          <div class="vocab-grid">
      `;
      lesson.vocabulary.forEach(v => {
        html += `
          <div class="vocab-card" onclick="window.DinoApp.playSpeech('${v.zh}')">
            <div class="vocab-card-header">
              <span class="vocab-py">${v.py}</span>
              <span class="vocab-audio-icon">🔊</span>
            </div>
            <div class="vocab-zh">${v.zh}</div>
            <div class="vocab-id">${v.id}</div>
          </div>
        `;
      });
      html += `</div></div>`;
    }

    container.innerHTML = html;
  }

  playSpeech(text) {
    if (window.DinoAudio) {
      window.DinoAudio.speakChinese(text);
    }
  }

  playFullLessonAudio(lessonId) {
    let lesson = null;
    for (const u of window.HAN_YU_3_UNITS) {
      const match = u.lessons.find(l => l.id === lessonId);
      if (match) {
        lesson = match;
        break;
      }
    }
    if (!lesson) return;

    let fullText = `${lesson.title}。`;
    if (lesson.sentences) {
      lesson.sentences.forEach(s => fullText += `${s.zh} `);
    }
    if (lesson.readingText) {
      lesson.readingText.paragraphs.forEach(p => fullText += `${p.zh} `);
    }

    if (window.DinoAudio) {
      window.DinoAudio.speakChinese(fullText);
    }
  }

  // ==========================================
  // MODUL 2: GAME MENULIS GURATAN (20 KATA / UNIT)
  // ==========================================
  bindWriterEvents() {
    // Filter Unit Penulisan (Unit 1, Unit 2, Unit 3)
    const unitPills = document.querySelectorAll(".writer-unit-pill");
    unitPills.forEach(pill => {
      pill.addEventListener("click", () => {
        const u = parseInt(pill.getAttribute("data-unit"), 10);
        this.selectedWriterUnit = u;
        unitPills.forEach(p => p.classList.toggle("active", p === pill));
        this.renderWriterCharGrid();

        // Muat karakter pertama di unit tersebut
        const firstChar = window.HAN_YU_3_STROKES[`unit${u}`][0];
        this.loadWriterChar(firstChar.id);
        if (window.DinoAudio) window.DinoAudio.playClick();
      });
    });

    // Kontrol Kanvas (Play, Clear, Undo, Toggle Guide)
    const playAnimBtn = document.getElementById("animStrokeBtn");
    if (playAnimBtn) {
      playAnimBtn.addEventListener("click", () => {
        if (window.strokeEngine) window.strokeEngine.playAnimation();
      });
    }

    const clearBtn = document.getElementById("clearCanvasBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        if (window.strokeEngine) window.strokeEngine.clearCanvas();
        if (window.DinoAudio) window.DinoAudio.playClick();
      });
    }

    const undoBtn = document.getElementById("undoCanvasBtn");
    if (undoBtn) {
      undoBtn.addEventListener("click", () => {
        if (window.strokeEngine) window.strokeEngine.undoStroke();
        if (window.DinoAudio) window.DinoAudio.playClick();
      });
    }

    const guideBtn = document.getElementById("toggleGuideBtn");
    if (guideBtn) {
      guideBtn.addEventListener("click", () => {
        if (window.strokeEngine) {
          const show = window.strokeEngine.toggleGuide();
          guideBtn.classList.toggle("active", show);
        }
      });
    }
  }

  renderWriterCharGrid() {
    const container = document.getElementById("writerCharGrid");
    if (!container) return;

    const list = window.HAN_YU_3_STROKES[`unit${this.selectedWriterUnit}`] || [];
    let html = ``;
    list.forEach((item, index) => {
      const isSelected = item.id === this.selectedCharId;
      const isMastered = this.state.masteredChars.includes(item.id);
      html += `
        <button class="char-picker-card ${isSelected ? 'active' : ''} ${isMastered ? 'mastered' : ''}" 
                onclick="window.DinoApp.loadWriterChar('${item.id}')">
          <span class="char-picker-num">${index + 1}</span>
          <span class="char-picker-hanzi">${item.char}</span>
          <span class="char-picker-py">${item.pinyin}</span>
          ${isMastered ? '<span class="char-picker-star">⭐</span>' : ''}
        </button>
      `;
    });
    container.innerHTML = html;
  }

  loadWriterChar(charId) {
    this.selectedCharId = charId;
    let found = null;
    for (let u = 1; u <= 3; u++) {
      const match = window.HAN_YU_3_STROKES[`unit${u}`].find(c => c.id === charId);
      if (match) {
        found = match;
        break;
      }
    }
    if (!found) return;

    this.renderWriterCharGrid();

    // Update Detail Panel Karakter
    const charHanzi = document.getElementById("targetCharHanzi");
    const charPy = document.getElementById("targetCharPy");
    const charMeaning = document.getElementById("targetCharMeaning");
    const charCount = document.getElementById("targetCharCount");
    const charRadical = document.getElementById("targetCharRadical");
    const charExamples = document.getElementById("targetCharExamples");
    const dinoTip = document.getElementById("writerDinoTip");

    if (charHanzi) charHanzi.innerText = found.char;
    if (charPy) charPy.innerText = found.pinyin;
    if (charMeaning) charMeaning.innerText = found.meaning;
    if (charCount) charCount.innerText = `${found.strokeCount} Guratan`;
    if (charRadical) charRadical.innerText = found.radical;
    if (dinoTip) dinoTip.innerText = found.dinoTip;

    if (charExamples && found.examples) {
      charExamples.innerHTML = found.examples.map(ex => `<span class="example-tag">${ex}</span>`).join("");
    }

    // Muat ke Canvas Stroke Engine
    if (window.strokeEngine) {
      window.strokeEngine.loadCharacter(found);
    }
  }

  recordCharacterMastered(charId) {
    if (!this.state.masteredChars.includes(charId)) {
      this.state.masteredChars.push(charId);
      this.state.totalStars += 3;
      this.saveState();
      this.renderWriterCharGrid();
      this.renderHatchery();

      // Cek apakah menetas telur baru
      if (this.state.masteredChars.length % 5 === 0) {
        if (window.DinoAudio) window.DinoAudio.playHatch();
      }
    }
  }

  // ==========================================
  // MODUL 3: LATIHAN SOAL TIPE YCT 2
  // ==========================================
  bindQuizEvents() {
    const quizFilterPills = document.querySelectorAll(".quiz-unit-pill");
    quizFilterPills.forEach(pill => {
      pill.addEventListener("click", () => {
        const u = pill.getAttribute("data-unit");
        this.quizUnit = u === "all" ? "all" : parseInt(u, 10);
        quizFilterPills.forEach(p => p.classList.toggle("active", p === pill));
        this.startQuiz();
        if (window.DinoAudio) window.DinoAudio.playClick();
      });
    });
  }

  startQuiz() {
    const questions = window.YCT2_QUIZ_DATA[this.quizUnit === "all" ? "all" : `unit${this.quizUnit}`] || [];
    this.currentQuestionIdx = 0;
    this.quizScore = 0;
    this.quizAnswered = [];

    const resultBox = document.getElementById("quizResultContainer");
    const activeBox = document.getElementById("quizActiveContainer");
    if (resultBox) resultBox.style.display = "none";
    if (activeBox) activeBox.style.display = "block";

    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    const questions = window.YCT2_QUIZ_DATA[this.quizUnit === "all" ? "all" : `unit${this.quizUnit}`] || [];
    const container = document.getElementById("quizQuestionCard");
    const progressText = document.getElementById("quizProgressText");
    const progressBar = document.getElementById("quizProgressBar");

    if (this.currentQuestionIdx >= questions.length) {
      this.showQuizResults();
      return;
    }

    const q = questions[this.currentQuestionIdx];
    if (progressText) progressText.innerText = `Soal ${this.currentQuestionIdx + 1} dari ${questions.length}`;
    if (progressBar) progressBar.style.width = `${((this.currentQuestionIdx) / questions.length) * 100}%`;

    let html = `
      <div class="yct2-card">
        <div class="yct2-header">
          <span class="yct2-badge">${q.partName}</span>
          <span class="yct2-emoji-illus">${q.imageEmoji}</span>
        </div>
    `;

    // Tombol Audio Listening jika ada
    if (q.audioZh) {
      html += `
        <div class="yct2-audio-prompt-box">
          <button class="dino-btn primary large" onclick="window.DinoApp.playSpeech('${q.audioZh}')">
            🔊 Putar Audio Soal (听录音)
          </button>
          <span class="yct2-audio-tip">Dengarkan kalimat Mandarin dengan seksama</span>
        </div>
      `;
    }

    html += `
        <div class="yct2-prompt-box">
          <div class="yct2-prompt-py">${q.promptPy || ''}</div>
          <div class="yct2-prompt-zh">${q.promptZh || ''}</div>
          <div class="yct2-prompt-id">${q.promptId}</div>
        </div>
        <div class="yct2-options-container" id="quizOptionsBox">
    `;

    // Tipe Benar / Salah (True / False)
    if (q.part === 'listening_tf' || q.part === 'reading_tf') {
      html += `
        <div class="yct2-tf-row">
          <button class="yct2-tf-btn true-btn" onclick="window.DinoApp.submitAnswer(true)">
            <span class="tf-icon">✓</span>
            <span>Benar (对 - Duì)</span>
          </button>
          <button class="yct2-tf-btn false-btn" onclick="window.DinoApp.submitAnswer(false)">
            <span class="tf-icon">✗</span>
            <span>Salah (错 - Cuò)</span>
          </button>
        </div>
      `;
    } else if (q.options) {
      // Pilihan Ganda (A, B, C)
      q.options.forEach((opt, idx) => {
        html += `
          <button class="yct2-option-btn" onclick="window.DinoApp.submitAnswer(${idx})">
            <span class="opt-label">${opt.label}</span>
            <div class="opt-content">
              <span class="opt-zh">${opt.textZh}</span>
              <span class="opt-id">${opt.textId}</span>
            </div>
          </button>
        `;
      });
    }

    html += `
        </div>
        <div id="quizExplanationBox" style="display:none;" class="quiz-explanation-card"></div>
      </div>
    `;

    if (container) container.innerHTML = html;

    // Putar otomatis audio soal jika bagian listening
    if (q.audioZh) {
      setTimeout(() => {
        this.playSpeech(q.audioZh);
      }, 300);
    }
  }

  submitAnswer(userAns) {
    const questions = window.YCT2_QUIZ_DATA[this.quizUnit === "all" ? "all" : `unit${this.quizUnit}`] || [];
    const q = questions[this.currentQuestionIdx];
    const isCorrect = userAns === q.correctAnswer;

    if (isCorrect) {
      this.quizScore++;
      if (window.DinoAudio) {
        window.DinoAudio.playSuccess();
      }
    } else {
      if (window.DinoAudio) {
        window.DinoAudio.playWrong();
      }
    }

    // Tampilkan Penjelasan & Kunci Jawaban
    const expBox = document.getElementById("quizExplanationBox");
    const optionsBox = document.getElementById("quizOptionsBox");

    if (optionsBox) {
      // Nonaktifkan klik tombol
      optionsBox.style.pointerEvents = "none";
    }

    if (expBox) {
      expBox.style.display = "block";
      expBox.innerHTML = `
        <div class="exp-header ${isCorrect ? 'correct' : 'wrong'}">
          <span>${isCorrect ? '🎉 Jawaban Benar (+1 Skor)!' : '❌ Jawaban Kurang Tepat'}</span>
        </div>
        <p class="exp-desc">${q.explanation}</p>
        <button class="dino-btn primary mt-3" onclick="window.DinoApp.nextQuestion()">
          Lanjut ke Soal Berikutnya ➔
        </button>
      `;
    }
  }

  nextQuestion() {
    this.currentQuestionIdx++;
    this.renderCurrentQuestion();
  }

  showQuizResults() {
    const questions = window.YCT2_QUIZ_DATA[this.quizUnit === "all" ? "all" : `unit${this.quizUnit}`] || [];
    const activeBox = document.getElementById("quizActiveContainer");
    const resultBox = document.getElementById("quizResultContainer");

    if (activeBox) activeBox.style.display = "none";
    if (resultBox) resultBox.style.display = "block";

    const percentage = Math.round((this.quizScore / questions.length) * 100);

    // Simpan skor
    const key = this.quizUnit === "all" ? "all" : `unit${this.quizUnit}`;
    if (percentage > (this.state.quizScores[key] || 0)) {
      this.state.quizScores[key] = percentage;
      this.state.totalStars += 5;
      this.saveState();
    }

    let dinoRank = "🦖 T-Rex Master";
    let dinoComment = "Luar biasa sempurna! Kamu telah menguasai kosakata dan pola kalimat YCT 2 dengan sangat gemilang!";
    if (percentage < 60) {
      dinoRank = "🥚 Dino Egg Explorer";
      dinoComment = "Tetap semangat! Ulangi membaca materi unit dan coba kembali untuk meningkatkan skormu!";
    } else if (percentage < 80) {
      dinoRank = "🦕 Triceratops Scout";
      dinoComment = "Hasil yang bagus! Sedikit lagi latihan menulis dan menyimak kamu akan meraih nilai 100%!";
    }

    if (resultBox) {
      resultBox.innerHTML = `
        <div class="result-card">
          <div class="result-dino-hero">🏆</div>
          <h2 class="result-title">Hasil Latihan YCT Level 2</h2>
          <div class="result-score-circle">${percentage}%</div>
          <div class="result-meta">
            <span>Benar ${this.quizScore} dari ${questions.length} Soal</span>
            <span class="result-rank-badge">${dinoRank}</span>
          </div>
          <p class="result-comment">${dinoComment}</p>
          <div class="result-actions">
            <button class="dino-btn primary large" onclick="window.DinoApp.openCertificateModal(${percentage}, '${dinoRank}')">
              🎓 Buat & Unduh Sertifikat Dinosaurus
            </button>
            <button class="dino-btn secondary" onclick="window.DinoApp.startQuiz()">
              🔄 Ulangi Latihan Soal
            </button>
          </div>
        </div>
      `;
    }

    if (percentage >= 60 && window.DinoAudio) {
      window.DinoAudio.playRoar();
      window.DinoAudio.playSuccess();
    }
  }

  // ==========================================
  // MODUL 4: PENETASAN TELUR & SERTIFIKAT DINO
  // ==========================================
  renderHatchery() {
    const container = document.getElementById("dinoHatcheryGrid");
    if (!container) return;

    const totalMastered = this.state.masteredChars.length;
    const dinoStages = [
      { count: 1, name: "Baby Rexy (T-Rex Cilik)", icon: "🦖", req: "1 Karakter", desc: "Mulai langkah petualangan aksara Mandarin!" },
      { count: 5, name: "Bronto Herbivora", icon: "🦕", req: "5 Karakter", desc: "Memiliki leher panjang untuk menjangkau ilmu!" },
      { count: 10, name: "Tricey Si Tanduk Tiga", icon: "🌴", req: "10 Karakter", desc: "Kuat dan gigih menghafal guratan Hanzi!" },
      { count: 20, name: "Pterry Si Sayap Emas", icon: "🦅", req: "20 Karakter (Unit 1)", desc: "Terbang tinggi menembus ujian Unit 1!" },
      { count: 40, name: "Steggy Si Punggung Kristal", icon: "💎", req: "40 Karakter (Unit 2)", desc: "Ketangguhan luar biasa menyelesaikan Unit 2!" },
      { count: 60, name: "Grand Spinosaurus Sovereign", icon: "👑", req: "60 Karakter (Unit 3)", desc: "Raja Purba Aksara Mandarin Han Yu 3!" }
    ];

    let html = ``;
    dinoStages.forEach(st => {
      const isUnlocked = totalMastered >= st.count;
      html += `
        <div class="hatchery-card ${isUnlocked ? 'unlocked' : 'locked'}">
          <div class="hatchery-icon">${isUnlocked ? st.icon : '🥚'}</div>
          <div class="hatchery-name">${st.name}</div>
          <div class="hatchery-req">Syarat: ${st.req}</div>
          <div class="hatchery-desc">${isUnlocked ? st.desc : 'Karakter belum mencukupi untuk menetas'}</div>
          <div class="hatchery-status">${isUnlocked ? '✓ Telah Menetas' : '🔒 Masih di dalam Telur'}</div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  updateStatsDisplay() {
    const starCount = document.getElementById("headerStarCount");
    const masteredCount = document.getElementById("headerMasteredCount");
    const lessonCount = document.getElementById("headerLessonCount");

    if (starCount) starCount.innerText = this.state.totalStars;
    if (masteredCount) masteredCount.innerText = `${this.state.masteredChars.length}/60`;
    if (lessonCount) lessonCount.innerText = `${this.state.completedLessons.length}/15`;
  }

  bindModalEvents() {
    const modal = document.getElementById("certModal");
    const closeBtn = document.getElementById("closeCertModalBtn");
    const downloadBtn = document.getElementById("downloadCertBtn");

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    if (downloadBtn) {
      downloadBtn.addEventListener("click", () => {
        const certCanvas = document.getElementById("certCanvasPreview");
        if (certCanvas) {
          const link = document.createElement("a");
          link.download = `Sertifikat_Mandarin_HY3_${this.state.studentName || 'Dino'}.png`;
          link.href = certCanvas.toDataURL("image/png");
          link.click();
        }
      });
    }
  }

  openCertificateModal(score = 95, title = "DINO MANDARIN MASTER") {
    const modal = document.getElementById("certModal");
    const previewContainer = document.getElementById("certPreviewWrapper");
    const nameInput = document.getElementById("studentNameInput");

    if (!modal) return;
    modal.style.display = "flex";

    if (nameInput) {
      nameInput.value = this.state.studentName || "Dino Explorer";
      nameInput.oninput = (e) => {
        this.state.studentName = e.target.value;
        this.saveState();
        this.renderCertCanvas(score, title);
      };
    }

    this.renderCertCanvas(score, title);
  }

  renderCertCanvas(score, title) {
    const previewContainer = document.getElementById("certPreviewWrapper");
    if (!previewContainer || !window.DinoCertificate) return;

    const unitName = this.quizUnit === "all" ? "HAN YU 3 (Semua Unit 1-3)" : `HAN YU 3 (Unit ${this.quizUnit})`;
    const canvas = window.DinoCertificate.generateCertificate(
      this.state.studentName || "Siswa Teladan",
      score,
      title,
      unitName
    );
    canvas.id = "certCanvasPreview";
    canvas.style.maxWidth = "100%";
    canvas.style.height = "auto";
    canvas.style.borderRadius = "12px";
    canvas.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";

    previewContainer.innerHTML = "";
    previewContainer.appendChild(canvas);
  }
}

window.DinoApp = new DinoMandarinApp();
document.addEventListener("DOMContentLoaded", () => {
  window.DinoApp.init();
});
