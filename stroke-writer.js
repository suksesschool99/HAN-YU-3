/**
 * HAN YU 3 - Stroke Order & Interactive Hanzi Writer Engine
 * Mendukung HanziWriter dengan Fallback SVG/Canvas Native Animation & Practice
 */

class HanziStrokeWriter {
  constructor() {
    this.targetChar = "学";
    this.writer = null;
    this.isHanziWriterLoaded = false;
    this.currentGrid = "tianzige"; // 'tianzige', 'mizige', 'plain'
    this.isQuizMode = false;
    this.animationStep = 0;
    this.totalStrokes = 0;
    this.charData = null;

    this.checkHanziWriter();
  }

  checkHanziWriter() {
    if (typeof HanziWriter !== "undefined") {
      this.isHanziWriterLoaded = true;
    }
  }

  // Load HanziWriter library dynamically if not yet available
  async ensureHanziWriter() {
    if (typeof HanziWriter !== "undefined") {
      this.isHanziWriterLoaded = true;
      return true;
    }

    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js";
      script.async = true;
      script.onload = () => {
        this.isHanziWriterLoaded = true;
        resolve(true);
      };
      script.onerror = () => {
        console.warn("Could not load external HanziWriter CDN, using native SVG Stroke Engine fallback.");
        this.isHanziWriterLoaded = false;
        resolve(false);
      };
      document.head.appendChild(script);
    });
  }

  async initCharacter(character, containerId = "hanzi-canvas-container") {
    this.targetChar = character;
    this.charData = HANZI_STROKE_DATA[character] || {
      pinyin: "",
      meaning: "Kosakata Han Yu 3",
      radical: "-",
      strokeCount: character.length,
      strokeNames: [],
      example: ""
    };

    this.totalStrokes = this.charData.strokeCount || 8;
    this.animationStep = 0;

    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    await this.ensureHanziWriter();

    if (this.isHanziWriterLoaded && typeof HanziWriter !== "undefined") {
      try {
        this.writer = HanziWriter.create(containerId, character, {
          width: 260,
          height: 260,
          padding: 15,
          strokeColor: "#1b4332",
          radicalColor: "#d90429",
          outlineColor: "#d8f3dc",
          showOutline: true,
          showCharacter: true,
          showHintAfterMisses: 1,
          highlightColor: "#ffd166",
          drawingColor: "#2d6a4f",
          drawingWidth: 16
        });
      } catch (err) {
        console.warn("HanziWriter initialization fallback:", err);
        this.createNativeStrokeFallback(container);
      }
    } else {
      this.createNativeStrokeFallback(container);
    }

    this.updateInfoPanel();
    this.updateStrokeStepIndicator(0);
  }

  // Fallback SVG & Canvas renderer for 100% offline reliability
  createNativeStrokeFallback(container) {
    container.innerHTML = `
      <div class="native-hanzi-display ${this.currentGrid}">
        <svg viewBox="0 0 200 200" width="100%" height="100%">
          <text x="50%" y="68%" text-anchor="middle" font-size="135" font-family="'Noto Sans SC', 'Kaiti', 'SimSun', sans-serif" fill="#1b4332" font-weight="bold">
            ${this.targetChar}
          </text>
        </svg>
      </div>
    `;
  }

  // Putar animasi urutan guratan dari awal sampai akhir
  animate() {
    window.dinoAudio.playClick();
    if (this.writer) {
      this.writer.showCharacter();
      this.writer.animateCharacter({
        onComplete: () => {
          window.dinoAudio.playStrokeSuccess();
        }
      });
    } else {
      // Fallback pulse animation
      const el = document.querySelector(".native-hanzi-display svg text");
      if (el) {
        el.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        el.style.opacity = "0.2";
        setTimeout(() => {
          el.style.opacity = "1";
          window.dinoAudio.playStrokeSuccess();
        }, 600);
      }
    }
  }

  // Mulai mode latihan menulis interaktif
  startQuiz(onSuccess, onMistake) {
    window.dinoAudio.playDinoRoar();
    this.isQuizMode = true;

    const feedbackEl = document.getElementById("stroke-feedback-msg");
    if (feedbackEl) {
      feedbackEl.innerHTML = `<span class="badge-writing">✍️ Mode Latihan: Ikuti guratan di atas kotak dengan jarimu/mouse!</span>`;
    }

    if (this.writer) {
      this.writer.quiz({
        onMistake: (strokeData) => {
          window.dinoAudio.playWrong();
          if (feedbackEl) {
            feedbackEl.innerHTML = `<span class="badge-wrong">❌ Coba lagi! Perhatikan arah guratan ya.</span>`;
          }
          if (onMistake) onMistake(strokeData);
        },
        onCorrectStroke: (strokeData) => {
          window.dinoAudio.playClick();
          this.updateStrokeStepIndicator(strokeData.strokeNum + 1);
          if (feedbackEl) {
            feedbackEl.innerHTML = `<span class="badge-correct">⭐ Hebat! Lanjut guratan ke-${strokeData.strokeNum + 2}...</span>`;
          }
        },
        onComplete: (summary) => {
          window.dinoAudio.playEggHatch();
          if (feedbackEl) {
            feedbackEl.innerHTML = `<span class="badge-success">🦖 LUAR BIASA! Karakter <b>${this.targetChar}</b> berhasil ditulis sempurna! 🎉</span>`;
          }
          if (onSuccess) onSuccess(summary);
        }
      });
    } else {
      if (feedbackEl) {
        feedbackEl.innerHTML = `<span class="badge-success">🦖 Karakter <b>${this.targetChar}</b> siap dipelajari!</span>`;
      }
    }
  }

  // Mengubah gaya kisi-kisi latar belakang (TianZiGe / MiZiGe / Polos)
  setGrid(gridType) {
    this.currentGrid = gridType;
    const container = document.getElementById("hanzi-canvas-container");
    if (container) {
      container.className = `hanzi-box grid-${gridType}`;
    }
  }

  // Memperbarui panel detail karakter (Radikal, Pinyin, Arti, Contoh Kalimat)
  updateInfoPanel() {
    const pinyinEl = document.getElementById("hanzi-info-pinyin");
    const meaningEl = document.getElementById("hanzi-info-meaning");
    const radicalEl = document.getElementById("hanzi-info-radical");
    const strokesEl = document.getElementById("hanzi-info-strokes");
    const exampleEl = document.getElementById("hanzi-info-example");

    if (pinyinEl) pinyinEl.textContent = this.charData.pinyin || "";
    if (meaningEl) meaningEl.textContent = this.charData.meaning || "";
    if (radicalEl) radicalEl.textContent = this.charData.radical || "-";
    if (strokesEl) strokesEl.textContent = `${this.charData.strokeCount || "-"} Guratan`;
    if (exampleEl) exampleEl.textContent = this.charData.example || "";
  }

  // Indikator langkah guratan
  updateStrokeStepIndicator(stepIndex) {
    const listEl = document.getElementById("stroke-names-list");
    if (!listEl) return;

    if (!this.charData.strokeNames || this.charData.strokeNames.length === 0) {
      listEl.innerHTML = `<li>Total ${this.charData.strokeCount} Guratan Standar</li>`;
      return;
    }

    listEl.innerHTML = this.charData.strokeNames.map((name, i) => `
      <span class="stroke-step-pill ${i === stepIndex ? 'active' : ''} ${i < stepIndex ? 'completed' : ''}">
        ${i + 1}. ${name}
      </span>
    `).join("");
  }
}

window.strokeWriterEngine = new HanziStrokeWriter();
