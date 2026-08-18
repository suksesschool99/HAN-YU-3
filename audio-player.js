/**
 * HAN YU 3 - Audio Speech & Karaoke Sync Engine
 * Menggunakan Web Speech API (zh-CN) dengan fitur Karaoke Text Highlight
 */

class HanYuAudioPlayer {
  constructor() {
    this.synth = window.speechSynthesis || null;
    this.voice = null;
    this.rate = 1.0; // 1.0 (Dino) or 0.7 (Turtle)
    this.pitch = 1.0;
    this.isPlaying = false;
    this.isPaused = false;
    this.currentPlaylist = [];
    this.currentIndex = -1;
    this.onSentenceChangeCallback = null;
    this.onPlayStateChangeCallback = null;

    this.initVoices();
  }

  initVoices() {
    if (!this.synth) return;

    const findChineseVoice = () => {
      const voices = this.synth.getVoices();
      // Prioritize zh-CN, then zh-TW, zh-HK, or any voice containing Chinese/zh
      this.voice = voices.find(v => v.lang === "zh-CN" || v.lang === "zh_CN") ||
                   voices.find(v => v.lang.startsWith("zh")) ||
                   voices.find(v => v.name.toLowerCase().includes("chinese") || v.name.toLowerCase().includes("mandarin")) ||
                   null;
    };

    findChineseVoice();
    if (this.synth.onvoiceschanged !== undefined) {
      this.synth.onvoiceschanged = findChineseVoice;
    }
  }

  setSpeed(rate) {
    this.rate = rate; // 0.7 = Turtle, 1.0 = Dino
  }

  // Putar satu teks / kalimat tunggal
  speakText(text, onStart, onEnd) {
    if (!this.synth) {
      console.warn("Speech Synthesis not supported in this browser.");
      if (onEnd) onEnd();
      return;
    }

    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN";
    if (this.voice) {
      utterance.voice = this.voice;
    }
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;

    utterance.onstart = () => {
      this.isPlaying = true;
      if (onStart) onStart();
      this.notifyStateChange();
    };

    utterance.onend = () => {
      this.isPlaying = false;
      if (onEnd) onEnd();
      this.notifyStateChange();
    };

    utterance.onerror = (e) => {
      console.error("SpeechSynthesis error:", e);
      this.isPlaying = false;
      if (onEnd) onEnd();
      this.notifyStateChange();
    };

    this.synth.speak(utterance);
  }

  // Putar playlist seluruh teks unit dengan Karaoke Sync
  playFullSection(sentences, onSentenceHighlight, onComplete) {
    this.stop();
    if (!sentences || sentences.length === 0) return;

    this.currentPlaylist = sentences;
    this.currentIndex = 0;
    this.onSentenceChangeCallback = onSentenceHighlight;
    this.isPlaying = true;
    this.notifyStateChange();

    this.playNextInPlaylist(onComplete);
  }

  playNextInPlaylist(onComplete) {
    if (this.currentIndex >= this.currentPlaylist.length) {
      this.stop();
      if (onComplete) onComplete();
      return;
    }

    const currentSentence = this.currentPlaylist[this.currentIndex];
    if (this.onSentenceChangeCallback) {
      this.onSentenceChangeCallback(this.currentIndex, currentSentence);
    }

    const utterance = new SpeechSynthesisUtterance(currentSentence.hanzi);
    utterance.lang = "zh-CN";
    if (this.voice) {
      utterance.voice = this.voice;
    }
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;

    utterance.onend = () => {
      if (this.isPlaying) {
        this.currentIndex++;
        // Jeda santai antar kalimat agar mudah disimak anak-anak
        setTimeout(() => {
          this.playNextInPlaylist(onComplete);
        }, 500);
      }
    };

    utterance.onerror = () => {
      if (this.isPlaying) {
        this.currentIndex++;
        this.playNextInPlaylist(onComplete);
      }
    };

    this.synth.speak(utterance);
  }

  pause() {
    if (this.synth && this.isPlaying) {
      this.synth.pause();
      this.isPaused = true;
      this.notifyStateChange();
    }
  }

  resume() {
    if (this.synth && this.isPaused) {
      this.synth.resume();
      this.isPaused = false;
      this.notifyStateChange();
    }
  }

  stop() {
    if (this.synth) {
      this.synth.cancel();
    }
    this.isPlaying = false;
    this.isPaused = false;
    this.currentIndex = -1;
    if (this.onSentenceChangeCallback) {
      this.onSentenceChangeCallback(-1, null);
    }
    this.notifyStateChange();
  }

  notifyStateChange() {
    if (this.onPlayStateChangeCallback) {
      this.onPlayStateChangeCallback({
        isPlaying: this.isPlaying,
        isPaused: this.isPaused,
        currentIndex: this.currentIndex,
        rate: this.rate
      });
    }
  }
}

window.hanyuAudioPlayer = new HanYuAudioPlayer();
