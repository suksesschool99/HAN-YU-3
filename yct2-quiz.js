/**
 * HAN YU 3 - YCT 2 Quiz Simulator Engine
 * Mengelola 25 Soal per Unit, Timer, Skor, Menetas Telur Dinosaurus, dan Pembahasan
 */

class Yct2QuizEngine {
  constructor() {
    this.currentUnit = 1;
    this.questions = [];
    this.currentIndex = 0;
    this.userAnswers = {}; // { qId: selectedOptionId }
    this.score = 0;
    this.isCompleted = false;
    this.timerSeconds = 0;
    this.timerInterval = null;
  }

  loadUnitQuiz(unitNumber) {
    this.currentUnit = unitNumber;
    this.questions = YCT2_QUIZ_DATA[unitNumber] || [];
    this.currentIndex = 0;
    this.userAnswers = {};
    this.score = 0;
    this.isCompleted = false;
    this.timerSeconds = 0;

    this.startTimer();
    this.renderQuestionNav();
    this.renderCurrentQuestion();
  }

  startTimer() {
    if (this.timerInterval) clearInterval(this.timerInterval);
    this.timerSeconds = 0;
    this.timerInterval = setInterval(() => {
      this.timerSeconds++;
      const min = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
      const sec = String(this.timerSeconds % 60).padStart(2, '0');
      const timerEl = document.getElementById("quiz-timer");
      if (timerEl) timerEl.textContent = `⏱️ ${min}:${sec}`;
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  renderQuestionNav() {
    const navContainer = document.getElementById("quiz-num-pills");
    if (!navContainer) return;

    navContainer.innerHTML = this.questions.map((q, idx) => {
      const isAnswered = this.userAnswers[q.id] !== undefined;
      const isCurrent = idx === this.currentIndex;
      let statusClass = "";
      if (isAnswered) {
        statusClass = this.userAnswers[q.id] === q.correct ? "pill-correct" : "pill-wrong";
      }
      return `
        <button class="q-pill ${isCurrent ? 'pill-active' : ''} ${statusClass}" 
                onclick="window.yctQuiz.goToQuestion(${idx})"
                title="Soal No. ${idx + 1}">
          ${idx + 1}
        </button>
      `;
    }).join("");
  }

  renderCurrentQuestion() {
    const q = this.questions[this.currentIndex];
    if (!q) return;

    // Update Progress
    const progressEl = document.getElementById("quiz-progress-fill");
    const progressTextEl = document.getElementById("quiz-progress-text");
    const answeredCount = Object.keys(this.userAnswers).length;
    const pct = Math.round((answeredCount / this.questions.length) * 100);

    if (progressEl) progressEl.style.width = `${pct}%`;
    if (progressTextEl) progressTextEl.textContent = `Soal ${this.currentIndex + 1} dari 25 (${pct}% Selesai)`;

    // Update Type & Prompt
    const typeEl = document.getElementById("quiz-q-type-badge");
    const promptEl = document.getElementById("quiz-q-prompt");
    const visualEl = document.getElementById("quiz-q-visual");
    const optionsContainer = document.getElementById("quiz-options-container");
    const explanationEl = document.getElementById("quiz-q-explanation");

    if (typeEl) typeEl.textContent = q.typeName;
    if (promptEl) {
      promptEl.innerHTML = `
        <div class="prompt-text">${q.prompt.replace(/\n/g, '<br>')}</div>
        <button class="btn-audio-speak" onclick="window.yctQuiz.playQuestionAudio()" title="Dengarkan Suara Soal">
          🔊 Dengarkan Audio
        </button>
      `;
    }

    if (visualEl) {
      if (q.visualIcon) {
        visualEl.innerHTML = `
          <div class="visual-card">
            <span class="visual-emoji">${q.visualIcon}</span>
            <small class="visual-hint">${q.visualDesc || ''}</small>
          </div>
        `;
        visualEl.style.display = "block";
      } else {
        visualEl.style.display = "none";
      }
    }

    // Render Options
    const currentAnswer = this.userAnswers[q.id];
    const isAnswered = currentAnswer !== undefined;

    optionsContainer.innerHTML = q.options.map(opt => {
      let optionClass = "option-btn";
      if (isAnswered) {
        if (opt.id === q.correct) {
          optionClass += " opt-correct";
        } else if (opt.id === currentAnswer) {
          optionClass += " opt-wrong";
        } else {
          optionClass += " opt-disabled";
        }
      }

      return `
        <button class="${optionClass}" 
                onclick="window.yctQuiz.selectOption('${opt.id}')"
                ${isAnswered ? 'disabled' : ''}>
          ${opt.icon ? `<span class="opt-icon">${opt.icon}</span>` : ''}
          <span class="opt-label">${opt.text}</span>
        </button>
      `;
    }).join("");

    // Render Explanation if answered
    if (isAnswered) {
      const isCorrect = currentAnswer === q.correct;
      explanationEl.innerHTML = `
        <div class="explanation-box ${isCorrect ? 'exp-correct' : 'exp-wrong'}">
          <div class="exp-header">
            ${isCorrect ? '🎉 <b>Benar Sekali!</b>' : '⚠️ <b>Jawaban Belum Tepat</b>'}
          </div>
          <div class="exp-body">
            ${q.explanation}
          </div>
        </div>
      `;
      explanationEl.style.display = "block";
    } else {
      explanationEl.style.display = "none";
    }

    this.renderQuestionNav();
    this.updateBottomNavButtons();
  }

  selectOption(optId) {
    const q = this.questions[this.currentIndex];
    if (!q || this.userAnswers[q.id] !== undefined) return;

    this.userAnswers[q.id] = optId;
    const isCorrect = optId === q.correct;

    if (isCorrect) {
      this.score += 4; // 25 Soal x 4 Poin = 100 Poin Maksimal
      window.dinoAudio.playCorrect();
    } else {
      window.dinoAudio.playWrong();
    }

    this.renderCurrentQuestion();

    // Cek jika seluruh 25 soal sudah terjawab
    if (Object.keys(this.userAnswers).length === this.questions.length) {
      setTimeout(() => {
        this.finishQuiz();
      }, 1200);
    }
  }

  playQuestionAudio() {
    const q = this.questions[this.currentIndex];
    if (q && q.questionAudio) {
      window.dinoAudio.playClick();
      window.hanyuAudioPlayer.speakText(q.questionAudio);
    }
  }

  goToQuestion(index) {
    if (index >= 0 && index < this.questions.length) {
      window.dinoAudio.playClick();
      this.currentIndex = index;
      this.renderCurrentQuestion();
    }
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.goToQuestion(this.currentIndex + 1);
    } else if (Object.keys(this.userAnswers).length === this.questions.length) {
      this.finishQuiz();
    }
  }

  prevQuestion() {
    if (this.currentIndex > 0) {
      this.goToQuestion(this.currentIndex - 1);
    }
  }

  updateBottomNavButtons() {
    const prevBtn = document.getElementById("quiz-btn-prev");
    const nextBtn = document.getElementById("quiz-btn-next");

    if (prevBtn) prevBtn.disabled = this.currentIndex === 0;
    if (nextBtn) {
      if (this.currentIndex === this.questions.length - 1) {
        nextBtn.innerHTML = "🏁 Selesai & Lihat Skor";
      } else {
        nextBtn.innerHTML = "Soal Berikutnya ➡️";
      }
    }
  }

  finishQuiz() {
    this.stopTimer();
    this.isCompleted = true;
    window.dinoAudio.playEggHatch();

    const finalScore = this.score;
    const correctCount = Math.round(this.score / 4);
    const passed = finalScore >= 60; // KKM Standar YCT 60%

    // Simpan progres ke LocalStorage
    this.saveProgress(this.currentUnit, finalScore);

    // Buka Modal Hasil & Menetas Telur Dinosaurus
    const modal = document.getElementById("quiz-result-modal");
    if (!modal) return;

    const dinoList = [
      "🦖 T-Rex Merah Perkasa", "🦕 Brachiosaurus Leher Panjang", "🛡️ Triceratops Penjaga",
      "🦅 Pterodactyl Penerbang", "⚽ Stegosaurus Duri Emas", "🌟 Spinosaurus Raja Sungai",
      "💎 Ankylosaurus Perisai Baja", "⚡ Velociraptor Kilat", "🌿 Parasaurolophus Penyanyi",
      "👑 Argentinosaurus Raksasa Legendaris"
    ];
    const unlockedDino = dinoList[this.currentUnit - 1] || "🦖 Dinosaurus Cilik Juara";

    modal.innerHTML = `
      <div class="result-modal-backdrop">
        <div class="result-modal-content">
          <div class="egg-hatch-animation ${passed ? 'hatch-success' : ''}">
            <div class="egg-visual">${passed ? '🐣 ➡️ 🦕' : '🥚'}</div>
          </div>
          
          <h2 class="result-title">${passed ? '🎉 SELAMAT! TELUR DINOSAURUS MENETAS!' : '💪 SEMANGAT! AYO COBA LAGI!'}</h2>
          
          <div class="score-circle-badge">
            <span class="score-num">${finalScore}</span>
            <span class="score-denom">/ 100</span>
          </div>

          <p class="score-summary-text">
            Kamu berhasil menjawab <b>${correctCount} dari 25 Soal</b> dengan benar!
          </p>

          ${passed ? `
            <div class="dino-unlock-box">
              <div class="dino-unlock-title">✨ Dinosaurus Baru Berhasil Ditetaskan! ✨</div>
              <div class="dino-unlock-name">${unlockedDino}</div>
              <p class="dino-unlock-desc">Dinosaurus ini sekarang sudah masuk ke kandang koleksimu di <b>Dino Hatchery</b>!</p>
            </div>
          ` : `
            <p class="score-encouragement">Dapatkan nilai minimal 60 untuk meneteskan telur dinosaurus Unit ${this.currentUnit}.</p>
          `}

          <div class="result-modal-actions">
            <button class="btn-primary" onclick="window.yctQuiz.closeModalAndReview()">
              🔍 Tinjau Semua Jawaban (25 Soal)
            </button>
            <button class="btn-secondary" onclick="window.yctQuiz.loadUnitQuiz(${this.currentUnit})">
              🔄 Ulangi Latihan Unit ${this.currentUnit}
            </button>
            <button class="btn-success" onclick="window.yctQuiz.printCertificate()">
              📜 Cetak Sertifikat Bintang Dino
            </button>
          </div>
        </div>
      </div>
    `;
    modal.style.display = "flex";
  }

  closeModalAndReview() {
    const modal = document.getElementById("quiz-result-modal");
    if (modal) modal.style.display = "none";
    this.goToQuestion(0);
  }

  saveProgress(unit, score) {
    try {
      const saved = JSON.parse(localStorage.getItem("hanyu3_progress") || "{}");
      if (!saved.scores) saved.scores = {};
      if (!saved.unlockedDinos) saved.unlockedDinos = [];

      if (!saved.scores[unit] || score > saved.scores[unit]) {
        saved.scores[unit] = score;
      }

      if (score >= 60 && !saved.unlockedDinos.includes(unit)) {
        saved.unlockedDinos.push(unit);
      }

      localStorage.setItem("hanyu3_progress", JSON.stringify(saved));

      // Refresh tampilan koleksi dinosaurus
      if (window.refreshHatcheryView) {
        window.refreshHatcheryView();
      }
    } catch (e) {
      console.warn("Could not save to localStorage", e);
    }
  }

  printCertificate() {
    window.dinoAudio.playVictory();
    const printWin = window.open("", "_blank");
    const correctCount = Math.round(this.score / 4);
    const unitData = HAN_YU_UNITS.find(u => u.id === this.currentUnit) || { title: "Unit " + this.currentUnit };

    printWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Sertifikat Kelulusan YCT 2 - Han Yu 3</title>
        <style>
          @page { size: landscape; margin: 15mm; }
          body {
            font-family: 'Segoe UI', Arial, sans-serif;
            text-align: center;
            background: #fefae0;
            margin: 0;
            padding: 30px;
            color: #1b4332;
          }
          .cert-frame {
            border: 8px solid #2d6a4f;
            border-radius: 20px;
            padding: 40px;
            background: white;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          .dino-header { font-size: 50px; margin-bottom: 10px; }
          h1 { color: #2d6a4f; font-size: 36px; margin: 0 0 10px; }
          h2 { color: #d90429; font-size: 24px; margin: 0 0 20px; }
          .cert-body { font-size: 18px; line-height: 1.8; margin: 20px 0; }
          .highlight { font-size: 26px; font-weight: bold; color: #1b4332; }
          .score-stamp {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 30px;
            background: #ffd166;
            border-radius: 50px;
            font-size: 22px;
            font-weight: bold;
            color: #333;
            border: 3px dashed #e76f51;
          }
          .cert-footer {
            margin-top: 40px;
            display: flex;
            justify-content: space-around;
            font-size: 16px;
          }
        </style>
      </head>
      <body>
        <div class="cert-frame">
          <div class="dino-header">🦖 🦕 🏆 🌟</div>
          <h1>SERTIFIKAT BINTANG MANDARIN YCT 2</h1>
          <h2>HAN YU 3 (汉语第三册) - PETUALANGAN DINOSAURUS</h2>
          
          <div class="cert-body">
            Diberikan dengan bangga kepada Siswa Hebat atas keberhasilan menuntaskan:<br>
            <span class="highlight">${unitData.title}</span><br>
            Latihan 25 Soal Standar Ujian YCT Level 2
          </div>

          <div class="score-stamp">
            ⭐ NILAI AKHIR: ${this.score} / 100 (${correctCount} Soal Benar) ⭐
          </div>

          <div class="cert-footer">
            <div>
              <p>____________________</p>
              <b>Pemandu Petualangan Dino</b>
            </div>
            <div>
              <p>${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              <b>Tanggal Ujian</b>
            </div>
          </div>
        </div>
        <script>
          window.onload = function() { window.print(); }
        </script>
      </body>
      </html>
    `);
    printWin.document.close();
  }
}

window.yctQuiz = new Yct2QuizEngine();
