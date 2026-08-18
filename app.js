/**
 * HAN YU 3 - Main Application Controller & UI State
 */

class HanYuApp {
  constructor() {
    this.currentUnitId = 1;
    this.currentMode = "reading"; // 'reading', 'writing', 'quiz', 'hatchery'
    this.showPinyin = true;
    this.showIndo = true;
    this.audioSpeed = 1.0; // 1.0 = Dino, 0.7 = Turtle
    this.selectedChar = "学";

    this.init();
  }

  init() {
    this.bindGlobalEvents();
    this.renderUnitSelector();
    this.loadUnit(1);
    this.setupAudioStateListener();
  }

  bindGlobalEvents() {
    // Navigasi Pilihan Menu 1, 2, 3, & Hatchery
    document.querySelectorAll("[data-nav-mode]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const mode = btn.getAttribute("data-nav-mode");
        this.switchMode(mode);
      });
    });

    // Dropdown Unit / Map
    const unitSelect = document.getElementById("global-unit-select");
    if (unitSelect) {
      unitSelect.addEventListener("change", (e) => {
        this.loadUnit(parseInt(e.target.value, 10));
      });
    }

    // Toggle Suara Dinosaurus (Mute/Unmute)
    const soundToggle = document.getElementById("btn-toggle-sound");
    if (soundToggle) {
      soundToggle.addEventListener("click", () => {
        const enabled = window.dinoAudio.toggleSound();
        soundToggle.innerHTML = enabled ? "🔊 Suara: ON" : "🔇 Suara: OFF";
        soundToggle.classList.toggle("btn-muted", !enabled);
      });
    }
  }

  renderUnitSelector() {
    const select = document.getElementById("global-unit-select");
    if (!select) return;

    select.innerHTML = HAN_YU_UNITS.map(u => `
      <option value="${u.id}">Unit ${u.id}: ${u.title.replace('第' + ['一','二','三','四','五','六','七','八','九','十'][u.id-1] + '课：', '')} (${u.titleIndo.split(':')[1] || ''})</option>
    `).join("");

    // Adventure Map Node Badges
    const mapContainer = document.getElementById("dino-map-nodes");
    if (mapContainer) {
      mapContainer.innerHTML = HAN_YU_UNITS.map(u => `
        <button class="dino-map-node ${u.id === this.currentUnitId ? 'node-active' : ''}" 
                onclick="window.hanyuApp.loadUnit(${u.id})" 
                title="${u.titleIndo}">
          <span class="node-icon">${u.id % 2 === 0 ? '🦕' : '🦖'}</span>
          <span class="node-label">Unit ${u.id}</span>
        </button>
      `).join("");
    }
  }

  switchMode(mode) {
    window.dinoAudio.playClick();
    this.currentMode = mode;

    // Update active nav button
    document.querySelectorAll("[data-nav-mode]").forEach(b => {
      b.classList.toggle("nav-active", b.getAttribute("data-nav-mode") === mode);
    });

    // Hide all view panels
    document.querySelectorAll(".view-panel").forEach(p => {
      p.style.display = "none";
    });

    // Stop audio
    window.hanyuAudioPlayer.stop();

    // Show target view panel
    const targetPanel = document.getElementById(`view-${mode}`);
    if (targetPanel) {
      targetPanel.style.display = "block";
    }

    if (mode === "reading") {
      this.renderReadingView();
    } else if (mode === "writing") {
      this.renderWritingView();
    } else if (mode === "quiz") {
      this.renderQuizView();
    } else if (mode === "hatchery") {
      this.renderHatcheryView();
    }
  }

  loadUnit(unitId) {
    window.dinoAudio.playClick();
    this.currentUnitId = unitId;

    // Sync Dropdown & Map
    const select = document.getElementById("global-unit-select");
    if (select) select.value = unitId;

    document.querySelectorAll(".dino-map-node").forEach((node, idx) => {
      node.classList.toggle("node-active", idx + 1 === unitId);
    });

    const unit = HAN_YU_UNITS.find(u => u.id === unitId) || HAN_YU_UNITS[0];

    // Update Unit Header Banner
    const bannerTitle = document.getElementById("unit-banner-title");
    const bannerSub = document.getElementById("unit-banner-subtitle");
    const bannerDino = document.getElementById("unit-banner-dino");
    const bannerBadge = document.getElementById("unit-banner-badge");

    if (bannerTitle) bannerTitle.textContent = `${unit.title} (${unit.titleIndo})`;
    if (bannerSub) bannerSub.textContent = `${unit.titlePinyin} - ${unit.dinoBio}`;
    if (bannerDino) bannerDino.textContent = unit.themeDino;
    if (bannerBadge) bannerBadge.textContent = unit.coverBadge;

    // Render current active mode
    this.switchMode(this.currentMode);
  }

  // ==========================================
  // FITUR 1: MODE MEMBACA & AUDIO KARAOKE
  // ==========================================
  renderReadingView() {
    const unit = HAN_YU_UNITS.find(u => u.id === this.currentUnitId) || HAN_YU_UNITS[0];
    const container = document.getElementById("reading-content-container");
    if (!container) return;

    container.innerHTML = `
      <div class="reading-toolbar">
        <div class="toolbar-group">
          <span class="toolbar-label">Kecepatan Suara:</span>
          <button class="btn-speed ${this.audioSpeed === 0.7 ? 'speed-active' : ''}" onclick="window.hanyuApp.setAudioSpeed(0.7)">
            🐢 Kura-kura (0.7x Pelan)
          </button>
          <button class="btn-speed ${this.audioSpeed === 1.0 ? 'speed-active' : ''}" onclick="window.hanyuApp.setAudioSpeed(1.0)">
            🦖 Dino (1.0x Normal)
          </button>
        </div>

        <div class="toolbar-group">
          <button class="btn-toggle-opt ${this.showPinyin ? 'opt-on' : ''}" onclick="window.hanyuApp.togglePinyin()">
            🔤 ${this.showPinyin ? 'Pinyin: TAMPIL' : 'Pinyin: SEMBUNYI'}
          </button>
          <button class="btn-toggle-opt ${this.showIndo ? 'opt-on' : ''}" onclick="window.hanyuApp.toggleIndo()">
            🇮🇩 ${this.showIndo ? 'Arti: TAMPIL' : 'Arti: SEMBUNYI'}
          </button>
        </div>
      </div>

      <div class="reading-sections-grid">
        ${unit.readingSections.map((sec, secIdx) => `
          <div class="reading-card" id="section-card-${secIdx}">
            <div class="reading-card-header">
              <h3 class="section-title">📖 ${sec.title}</h3>
              <div class="section-actions">
                <button class="btn-play-all" onclick="window.hanyuApp.playSection(${secIdx})">
                  ▶️ Putar Semua Kalimat
                </button>
                <button class="btn-stop-audio" onclick="window.hanyuAudioPlayer.stop()">
                  ⏹️ Stop
                </button>
              </div>
            </div>

            <div class="sentence-list">
              ${sec.sentences.map((sent, sIdx) => `
                <div class="sentence-item" id="sentence-${secIdx}-${sIdx}">
                  <div class="sentence-left">
                    <button class="btn-speak-single" onclick="window.hanyuApp.speakSentence('${sent.hanzi.replace(/'/g, "\\'")}', ${secIdx}, ${sIdx})" title="Dengarkan kalimat ini">
                      🔊
                    </button>
                  </div>
                  <div class="sentence-text-box">
                    <div class="sentence-pinyin ${this.showPinyin ? '' : 'hidden-text'}">${sent.pinyin}</div>
                    <div class="sentence-hanzi">${sent.hanzi}</div>
                    <div class="sentence-indo ${this.showIndo ? '' : 'hidden-text'}">${sent.indo}</div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>

      <!-- Kosakata Unit Pop-out -->
      <div class="unit-vocab-summary-card">
        <h3 class="vocab-header-title">🌱 Kosakata Penting (生词 - Shēngcí) Unit ${unit.id}</h3>
        <div class="vocab-pill-wrap">
          ${unit.vocabulary.map(v => `
            <div class="vocab-chip" onclick="window.hanyuApp.jumpToStroke('${v.strokeTarget}')">
              <span class="vocab-chip-hanzi">${v.hanzi}</span>
              <span class="vocab-chip-pinyin">${v.pinyin}</span>
              <span class="vocab-chip-indo">${v.indo}</span>
              <span class="vocab-chip-btn">✍️ Guratan</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  setAudioSpeed(speed) {
    window.dinoAudio.playClick();
    this.audioSpeed = speed;
    window.hanyuAudioPlayer.setSpeed(speed);
    document.querySelectorAll(".btn-speed").forEach(b => {
      b.classList.toggle("speed-active", (speed === 0.7 && b.innerText.includes("Kura-kura")) || (speed === 1.0 && b.innerText.includes("Dino")));
    });
  }

  togglePinyin() {
    window.dinoAudio.playClick();
    this.showPinyin = !this.showPinyin;
    this.renderReadingView();
  }

  toggleIndo() {
    window.dinoAudio.playClick();
    this.showIndo = !this.showIndo;
    this.renderReadingView();
  }

  speakSentence(hanzi, secIdx, sIdx) {
    window.dinoAudio.playClick();
    document.querySelectorAll(".sentence-item").forEach(el => el.classList.remove("sentence-active"));
    const target = document.getElementById(`sentence-${secIdx}-${sIdx}`);
    if (target) target.classList.add("sentence-active");

    window.hanyuAudioPlayer.speakText(hanzi, null, () => {
      if (target) target.classList.remove("sentence-active");
    });
  }

  playSection(secIdx) {
    window.dinoAudio.playDinoRoar();
    const unit = HAN_YU_UNITS.find(u => u.id === this.currentUnitId) || HAN_YU_UNITS[0];
    const sec = unit.readingSections[secIdx];
    if (!sec) return;

    window.hanyuAudioPlayer.playFullSection(
      sec.sentences,
      (currentIdx, sentence) => {
        document.querySelectorAll(".sentence-item").forEach(el => el.classList.remove("sentence-active"));
        if (currentIdx >= 0) {
          const activeEl = document.getElementById(`sentence-${secIdx}-${currentIdx}`);
          if (activeEl) {
            activeEl.classList.add("sentence-active");
            activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      },
      () => {
        window.dinoAudio.playVictory();
        document.querySelectorAll(".sentence-item").forEach(el => el.classList.remove("sentence-active"));
      }
    );
  }

  setupAudioStateListener() {
    window.hanyuAudioPlayer.onPlayStateChangeCallback = (state) => {
      const playingBadge = document.getElementById("global-audio-status");
      if (playingBadge) {
        playingBadge.style.display = state.isPlaying ? "inline-flex" : "none";
      }
    };
  }

  // ==========================================
  // FITUR 2: MODE MENULIS GURATAN HANZI
  // ==========================================
  renderWritingView() {
    const unit = HAN_YU_UNITS.find(u => u.id === this.currentUnitId) || HAN_YU_UNITS[0];
    const defaultChar = unit.vocabulary[0] ? unit.vocabulary[0].strokeTarget : "学";
    this.selectedChar = defaultChar;

    const charPillsContainer = document.getElementById("stroke-vocab-pills");
    if (charPillsContainer) {
      charPillsContainer.innerHTML = unit.vocabulary.map(v => `
        <button class="char-pill ${v.strokeTarget === this.selectedChar ? 'pill-active' : ''}" 
                onclick="window.hanyuApp.selectCharForWriting('${v.strokeTarget}')">
          <span class="char-pill-hanzi">${v.strokeTarget}</span>
          <span class="char-pill-sub">${v.hanzi} (${v.pinyin})</span>
        </button>
      `).join("");
    }

    this.selectCharForWriting(this.selectedChar);
  }

  selectCharForWriting(char) {
    window.dinoAudio.playClick();
    this.selectedChar = char;

    document.querySelectorAll(".char-pill").forEach(p => {
      p.classList.toggle("pill-active", p.innerText.includes(char));
    });

    window.strokeWriterEngine.initCharacter(char, "hanzi-canvas-container");
  }

  jumpToStroke(char) {
    this.switchMode("writing");
    setTimeout(() => {
      this.selectCharForWriting(char);
    }, 100);
  }

  // ==========================================
  // FITUR 3: MODE KUIS LATIHAN YCT 2 (25 SOAL)
  // ==========================================
  renderQuizView() {
    window.yctQuiz.loadUnitQuiz(this.currentUnitId);
  }

  // ==========================================
  // FITUR 4: DINO HATCHERY (KOLEKSI TELUR)
  // ==========================================
  renderHatcheryView() {
    const container = document.getElementById("hatchery-cards-container");
    if (!container) return;

    let saved = { scores: {}, unlockedDinos: [] };
    try {
      saved = JSON.parse(localStorage.getItem("hanyu3_progress") || "{}");
      if (!saved.scores) saved.scores = {};
      if (!saved.unlockedDinos) saved.unlockedDinos = [];
    } catch (e) {}

    const dinos = [
      { id: 1, name: "Rexy si T-Rex Merah", icon: "🦖", unit: "Unit 1: 在学校", trait: "Pemberani & Rajin Belajar" },
      { id: 2, name: "Cera si Triceratops", icon: "🛡️", unit: "Unit 2: 我的书包", trait: "Rapi & Disiplin Menjaga Buku" },
      { id: 3, name: "Brachy si Brachiosaurus", icon: "🦕", unit: "Unit 3: 现在几点", trait: "Selalu Tepat Waktu" },
      { id: 4, name: "Ptero si Pterodactyl", icon: "🦅", unit: "Unit 4: 今天天气怎么样", trait: "Pakar Cuaca Langit" },
      { id: 5, name: "Spike si Stegosaurus", icon: "⚽", unit: "Unit 5: 你喜欢什么运动", trait: "Jago Sepak Bola & Atletik" },
      { id: 6, name: "Spino si Spinosaurus", icon: "🍉", unit: "Unit 6: 在水果店", trait: "Suka Buah-Buahan Manis" },
      { id: 7, name: "Anky si Ankylosaurus", icon: "🐼", unit: "Unit 7: 在动物园", trait: "Penyayang Semua Hewan" },
      { id: 8, name: "Veloci si Velociraptor", icon: "🎂", unit: "Unit 8: 你的生日是几月几号", trait: "Pemberi Hadiah Ulang Tahun" },
      { id: 9, name: "Parasa si Parasaurolophus", icon: "🚲", unit: "Unit 9: 我们去公园", trait: "Penjelajah Taman Kota" },
      { id: 10, name: "Titano si Raksasa Master", icon: "👑", unit: "Unit 10: 我的一天", trait: "Master Bahasa Mandarin HAN YU 3" }
    ];

    container.innerHTML = dinos.map(d => {
      const isUnlocked = saved.unlockedDinos && saved.unlockedDinos.includes(d.id);
      const score = saved.scores ? saved.scores[d.id] || 0 : 0;

      return `
        <div class="hatchery-card ${isUnlocked ? 'card-unlocked' : 'card-locked'}">
          <div class="dino-avatar-wrap">
            <span class="dino-avatar-large">${isUnlocked ? d.icon : '🥚'}</span>
          </div>
          <h4 class="hatchery-dino-name">${isUnlocked ? d.name : `Telur Rahasia Unit ${d.id}`}</h4>
          <div class="hatchery-unit-tag">${d.unit}</div>
          <p class="hatchery-trait">${isUnlocked ? `✨ ${d.trait}` : 'Selesaikan kuis 25 soal Unit ini dengan nilai minimal 60 untuk menetaskan telur!'}</p>
          
          <div class="hatchery-score-badge">
            ${score > 0 ? `⭐ Skor YCT: ${score}/100` : 'Belum Ujian'}
          </div>

          <button class="btn-hatchery-action" onclick="window.hanyuApp.loadUnitAndQuiz(${d.id})">
            ${isUnlocked ? '🎯 Main Kuis Lagi' : '🥚 Uji Sekarang'}
          </button>
        </div>
      `;
    }).join("");
  }

  loadUnitAndQuiz(unitId) {
    this.currentUnitId = unitId;
    this.loadUnit(unitId);
    this.switchMode("quiz");
  }
}

window.refreshHatcheryView = function() {
  if (window.hanyuApp && window.hanyuApp.currentMode === "hatchery") {
    window.hanyuApp.renderHatcheryView();
  }
};

window.addEventListener("DOMContentLoaded", () => {
  window.hanyuApp = new HanYuApp();
});
