// Hanzi Stroke Animator & Interactive Tianzige Tracing Canvas Engine
// Mendukung Animasi Urutan Guratan, Latihan Bebas, Mode Tracing, dan Kuis Langkah Guratan

class DinoStrokeEngine {
  constructor() {
    this.currentCharData = null;
    this.currentStrokeIndex = 0;
    this.animInterval = null;
    this.isDrawing = false;
    this.userStrokes = [];
    this.currentPath = [];
    this.canvas = null;
    this.ctx = null;
    this.showGuide = true;
    this.mode = 'free'; // 'free', 'step', 'quiz'
  }

  init(canvasElement) {
    this.canvas = canvasElement;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.setupEvents();
    this.resizeCanvas();
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = (rect.width || 340) * dpr;
    this.canvas.height = (rect.height || 340) * dpr;
    this.ctx.scale(dpr, dpr);
    this.drawGrid();
  }

  setupEvents() {
    const getPos = (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const startDraw = (e) => {
      e.preventDefault();
      this.isDrawing = true;
      const pos = getPos(e);
      this.currentPath = [pos];
      if (window.DinoAudio) window.DinoAudio.playStroke();
    };

    const draw = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pos = getPos(e);
      this.currentPath.push(pos);
      this.redrawCanvas();
    };

    const stopDraw = (e) => {
      if (!this.isDrawing) return;
      this.isDrawing = false;
      if (this.currentPath.length > 1) {
        this.userStrokes.push([...this.currentPath]);
        this.evaluateUserProgress();
      }
      this.currentPath = [];
      this.redrawCanvas();
    };

    // Mouse Events
    this.canvas.addEventListener('mousedown', startDraw);
    this.canvas.addEventListener('mousemove', draw);
    this.canvas.addEventListener('mouseup', stopDraw);
    this.canvas.addEventListener('mouseleave', stopDraw);

    // Touch Events
    this.canvas.addEventListener('touchstart', startDraw, { passive: false });
    this.canvas.addEventListener('touchmove', draw, { passive: false });
    this.canvas.addEventListener('touchend', stopDraw);
    this.canvas.addEventListener('touchcancel', stopDraw);
  }

  loadCharacter(charData) {
    this.currentCharData = charData;
    this.currentStrokeIndex = 0;
    this.userStrokes = [];
    this.currentPath = [];
    this.stopAnimation();
    this.renderStrokeStepsContainer();
    this.redrawCanvas();
  }

  // Menggambar Kotak Tianzige (田字格) Tradisional dengan Sentuhan Dinosaurus
  drawGrid() {
    if (!this.ctx || !this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    const w = rect.width || 340;
    const h = rect.height || 340;

    // Background Tianzige
    this.ctx.fillStyle = '#FFFEF5';
    this.ctx.fillRect(0, 0, w, h);

    // Border Luar Kotak
    this.ctx.strokeStyle = '#E05A47';
    this.ctx.lineWidth = 2.5;
    this.ctx.strokeRect(6, 6, w - 12, h - 12);

    // Garis Silang & Tengah Putus-putus
    this.ctx.strokeStyle = '#F8A599';
    this.ctx.lineWidth = 1.2;
    this.ctx.setLineDash([6, 6]);

    // Garis Horizontal Tengah
    this.ctx.beginPath();
    this.ctx.moveTo(6, h / 2);
    this.ctx.lineTo(w - 6, h / 2);
    this.ctx.stroke();

    // Garis Vertikal Tengah
    this.ctx.beginPath();
    this.ctx.moveTo(w / 2, 6);
    this.ctx.lineTo(w / 2, h - 6);
    this.ctx.stroke();

    // Garis Diagonal Mige (米字格)
    this.ctx.strokeStyle = '#FDE2DC';
    this.ctx.beginPath();
    this.ctx.moveTo(6, 6);
    this.ctx.lineTo(w - 6, h - 6);
    this.ctx.moveTo(w - 6, 6);
    this.ctx.lineTo(6, h - 6);
    this.ctx.stroke();

    this.ctx.setLineDash([]); // Reset line dash
  }

  redrawCanvas() {
    if (!this.ctx || !this.canvas) return;
    this.drawGrid();

    // Gambar Panduan Bayangan Hanzi jika diaktifkan
    if (this.showGuide && this.currentCharData) {
      const rect = this.canvas.getBoundingClientRect();
      const w = rect.width || 340;
      const h = rect.height || 340;
      this.ctx.save();
      this.ctx.font = `${Math.floor(w * 0.72)}px "Noto Sans SC", "KaiTi", "SimSun", serif`;
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
      this.ctx.fillStyle = "rgba(180, 195, 205, 0.28)";
      this.ctx.fillText(this.currentCharData.char, w / 2, h / 2 + 10);
      this.ctx.restore();
    }

    // Gambar Goresan Kuas Murid
    this.ctx.save();
    this.ctx.strokeStyle = "#1A3626"; // Tinta Dino Forest Green gelap
    this.ctx.fillStyle = "#1A3626";
    this.ctx.lineWidth = 14;
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";

    // Gambar coretan yang sudah tersimpan
    this.userStrokes.forEach(path => {
      if (path.length < 2) return;
      this.ctx.beginPath();
      this.ctx.moveTo(path[0].x, path[0].y);
      for (let i = 1; i < path.length; i++) {
        this.ctx.lineTo(path[i].x, path[i].y);
      }
      this.ctx.stroke();
    });

    // Gambar coretan yang sedang berlangsung
    if (this.currentPath.length > 1) {
      this.ctx.strokeStyle = "#E05638"; // Warna aktif saat menggores
      this.ctx.beginPath();
      this.ctx.moveTo(this.currentPath[0].x, this.currentPath[0].y);
      for (let i = 1; i < this.currentPath.length; i++) {
        this.ctx.lineTo(this.currentPath[i].x, this.currentPath[i].y);
      }
      this.ctx.stroke();
    }
    this.ctx.restore();
  }

  clearCanvas() {
    this.userStrokes = [];
    this.currentPath = [];
    this.redrawCanvas();
    const feedback = document.getElementById("writerFeedback");
    if (feedback) feedback.innerHTML = `<span class="dino-hint">🦖 Rexy: Silakan goreskan kuasmu di atas kotak Tianzige!</span>`;
  }

  undoStroke() {
    if (this.userStrokes.length > 0) {
      this.userStrokes.pop();
      this.redrawCanvas();
    }
  }

  toggleGuide() {
    this.showGuide = !this.showGuide;
    this.redrawCanvas();
    return this.showGuide;
  }

  // Evaluasi Keberhasilan Menulis
  evaluateUserProgress() {
    if (!this.currentCharData) return;
    const targetCount = this.currentCharData.strokeCount;
    const currentCount = this.userStrokes.length;
    const feedback = document.getElementById("writerFeedback");

    if (currentCount === targetCount) {
      if (window.DinoAudio) {
        window.DinoAudio.playSuccess();
        window.DinoAudio.playRoar();
      }
      if (feedback) {
        feedback.innerHTML = `
          <div class="dino-success-banner">
            <span class="dino-badge-icon">🦖✨</span>
            <div>
              <strong>Luar Biasa! Karakter "${this.currentCharData.char}" Selesai!</strong>
              <p>Kamu telah menyelesaikan seluruh ${targetCount} guratan dengan hebat!</p>
            </div>
          </div>
        `;
      }
      if (window.DinoApp) {
        window.DinoApp.recordCharacterMastered(this.currentCharData.id);
      }
    } else if (currentCount < targetCount) {
      const strokeName = this.currentCharData.strokeNames[currentCount] || `Guratan ke-${currentCount + 1}`;
      if (feedback) {
        feedback.innerHTML = `<span class="dino-progress-text">🦖 Lanjutkan! Guratan berikutnya (${currentCount + 1}/${targetCount}): <strong>${strokeName}</strong></span>`;
      }
    } else {
      if (feedback) {
        feedback.innerHTML = `<span class="dino-warning-text">🦕 Jumlah goresan melebihi ${targetCount} guratan. Kamu bisa klik 'Bersihkan' untuk mengulang kembali!</span>`;
      }
    }
  }

  // Tampilkan visual langkah per langkah urutan guratan (Stroke Order Step Gallery)
  renderStrokeStepsContainer() {
    const container = document.getElementById("strokeStepsList");
    if (!container || !this.currentCharData) return;

    let html = ``;
    const names = this.currentCharData.strokeNames || [];
    for (let i = 0; i < this.currentCharData.strokeCount; i++) {
      const name = names[i] || `Guratan ${i + 1}`;
      html += `
        <div class="stroke-step-card ${i === this.currentStrokeIndex ? 'active' : ''}" onclick="window.strokeEngine.previewStep(${i})">
          <div class="stroke-step-num">${i + 1}</div>
          <div class="stroke-step-name">${name}</div>
        </div>
      `;
    }
    container.innerHTML = html;
  }

  previewStep(index) {
    this.currentStrokeIndex = index;
    this.renderStrokeStepsContainer();
    const feedback = document.getElementById("writerFeedback");
    if (feedback && this.currentCharData) {
      const strokeName = this.currentCharData.strokeNames[index] || `Guratan ${index + 1}`;
      feedback.innerHTML = `<span class="dino-hint">🦕 Menampilkan langkah ke-${index + 1}: <strong>${strokeName}</strong></span>`;
    }
    if (window.DinoAudio && this.currentCharData) {
      window.DinoAudio.playClick();
    }
  }

  // Animasi otomatis urutan guratan
  playAnimation() {
    this.stopAnimation();
    if (!this.currentCharData) return;
    this.currentStrokeIndex = 0;
    const total = this.currentCharData.strokeCount;

    if (window.DinoAudio) {
      window.DinoAudio.speakChinese(this.currentCharData.char);
    }

    this.animInterval = setInterval(() => {
      this.currentStrokeIndex++;
      this.renderStrokeStepsContainer();
      if (window.DinoAudio) window.DinoAudio.playStroke();

      if (this.currentStrokeIndex >= total) {
        this.stopAnimation();
        this.currentStrokeIndex = total - 1;
        this.renderStrokeStepsContainer();
      }
    }, 900);
  }

  stopAnimation() {
    if (this.animInterval) {
      clearInterval(this.animInterval);
      this.animInterval = null;
    }
  }
}

window.strokeEngine = new DinoStrokeEngine();
