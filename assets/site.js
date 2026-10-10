/* Site behaviour. The four pages are views inside one document, so moving between them never reloads the page and
   the music keeps playing. This file also does the red wipe, the menu text that flips over the water, the
   accessibility settings, the opening, the music and its bars, and the command palette.
   The English text is already on the page. The Arabic text is in AR below. */

const AR = {
  skip: "انتقل إلى المحتوى",
  music: "الموسيقى",
  access: "إمكانية الوصول",
  access_title: "إمكانية الوصول",
  a_motion: "تقليل الحركة",
  a_contrast: "تباين عالٍ",
  a_large: "نص أكبر",
  a_hint: "تُحفظ هذه الإعدادات على هذا الجهاز.",
  close: "إغلاق",
  skip_intro: "تخطي",
  on: "تشغيل",
  off: "إيقاف",
  music_on: "الموسيقى تعمل",
  music_off: "الموسيقى متوقفة",
  sel: "اختيار",
  open: "فتح",
  pal_title: "انتقل إلى",
  pal_mail: "راسلني",
  pal_lang: "تغيير اللغة",
  m_art: "الفن ثنائي الأبعاد والتصميم",
  stamp: "قريباً",
  m_3d: "النماذج ثلاثية الأبعاد",
  m_comm: "الأعمال بالطلب",
  m_about: "نبذة",
  m_contact: "تواصل",
  intro: "طالب تكنولوجيا معلومات في عمّان، أكمل حالياً دبلوم BTEC المستوى الثالث في تكنولوجيا المعلومات. أعمل أيضاً في النمذجة ثلاثية الأبعاد والتصميم ثنائي الأبعاد.",
  stat_comm: "أعمال بالطلب منجزة",
  stat_comm_v: "حوالي 7",
  stat_3d: "سنوات في الفن ثلاثي الأبعاد",
  stat_3d_v: "2",
  d_3d: "نموذج لسيارة GT-R، ونموذج شخصية بالطلب، ودراسة يد.",
  d_comm: "شخصيات وأدوات وأصول جاهزة للألعاب وتصميم جرافيك.",
  d_about: "التعليم والمهارات الدراسية والإنجازات.",
  d_contact: "البريد الإلكتروني والهاتف والموقع.",
  models_lead: "ثلاثة نماذج بهيكل سلكي: سيارة من مشروع شخصي، وشخصية صنعتها بالطلب، ودراسة يد في Blender.",
  v1_t: "نيسان GT-R (R35)",
  v1_p: "مشروع شخصي بهيكل سلكي. اسحب لتدوير السيارة.",
  v2_t: "شخصية بالطلب",
  v2_p: "صُنعت لـ @breucat، صانع محتوى على يوتيوب، بهيكل سلكي. اسحب للتدوير.",
  v3_t: "دراسة يد",
  v3_p: "صُممت في Blender وتظهر بهيكل سلكي. اسحب للتدوير.",
  comm_lead: "الأعمال التي أقبلها، وكيف تبدأ الطلبية، وما الذي ترسله لي.",
  svc_h: "ما أصنعه",
  svc_1: "شخصيات ثلاثية الأبعاد",
  svc_2: "أدوات وبيئات",
  svc_3: "أصول جاهزة للألعاب",
  svc_4: "نماذج صلبة: أسلحة ومركبات",
  svc_5: "رسم ثنائي الأبعاد",
  svc_6: "تصميم جرافيك",
  svc_closed: "غير متاح للطلب حالياً",
  proc_h: "كيف تبدأ الطلبية",
  step_1: "أرسل وصفاً: ما تحتاجه، ومكان الاستخدام، والمراجع، والموعد النهائي، والميزانية.",
  step_2: "أرد بالنطاق والمدة والسعر.",
  step_3: "نتفق، ثم أبدأ بعرض أولي للعمل قيد التنفيذ.",
  step_4: "تستلم الملفات النهائية بالصيغ المتفق عليها.",
  price_note: "يعتمد السعر على حجم العمل. أرسل وصفك وسأقدم لك عرض سعر.",
  mail_btn: "ابدأ طلباً عبر البريد الإلكتروني",
  quote_h: "ما قاله أحد العملاء",
  quote_by: "@breucat، بعد استلام النموذج",
  about_intro: "أنا طالب تكنولوجيا معلومات في عمّان، أتابع دبلوم BTEC المستوى الثالث في تكنولوجيا المعلومات. خلفيتي في البرمجة وتصميم الويب وتحليل البيانات والفن ثلاثي الأبعاد، وما زلت أتعلم.",
  edu_h: "التعليم",
  edu_1: "دبلوم Pearson BTEC المستوى الثاني في تكنولوجيا المعلومات. مكتمل، والشهادة بحوزتي.",
  edu_2: "دبلوم Pearson BTEC المستوى الثالث في تكنولوجيا المعلومات. قيد الدراسة، والتخرج المتوقع 2028.",
  edu_3: "مدرسة الإمام مالك الثانوية، عمّان.",
  skills_h: "المهارات الدراسية",
  skills_note: "أُنجزت كمهام دراسية.",
  sk_web: "الويب",
  sk_web_v: "HTML، وتصميم الويب في Figma",
  sk_app: "التطبيقات",
  sk_app_v: "Dart وFlutter",
  sk_game: "الألعاب",
  sk_game_v: "تصميم الألعاب في Unity",
  sk_data: "البيانات",
  sk_data_v: "تحليل البيانات في Excel",
  sk_3d: "الفن ثلاثي الأبعاد",
  sk_3d_v: "Blender وMaya وZBrush وSubstance Painter",
  ach_h: "الإنجازات",
  ach_1: "المركز الأول في مسابقة التحدث بالإنجليزية، لواء ماركا.",
  lang_h: "اللغات",
  lang_v: "العربية (لغة أم)، والإنجليزية (بطلاقة).",
  contact_h: "تواصل",
  c_email_l: "البريد",
  c_phone_l: "الهاتف",
  c_loc_l: "الموقع",
  loc: "عمّان، الأردن",
  nick: "اللقب: تيمون",
  persona_note: "تصميم هذا الموقع مستوحى من قوائم ألعاب Persona.",
  social_h: "روابط التواصل",
  rank: "المرتبة 1",
  issue: "العدد 01",
  marquee: "فنان ثلاثي الأبعاد ✦ Blender ✦ Maya ✦ ZBrush ✦ Substance Painter ✦ عمّان، الأردن ✦ IT ✦ BTEC المستوى الثالث ✦ ",
  design_h: "تصميم الموقع",
  design_link: "افتح التصميم الكامل في Figma",
  design_title: "تصميم شاشة نبذة في Figma",
};

const EN_MSG = { music_on: "Music on", music_off: "Music off", on: "On", off: "Off", en: "English", ar: "العربية" };
const EN_PALETTE_PLACEHOLDER = "Type a page name";
const EN_FIGMA_TITLE = "About screen design in Figma";

// The beat grid: 128 BPM, counted from the big kick of the drop. In the trimmed track that kick is at 15.311 seconds.
const MUSIC = { bpm: 128, anchor: 15.311 };
const PERIOD = 60 / MUSIC.bpm;
const BEAT_OFFSET = ((MUSIC.anchor % PERIOD) + PERIOD) % PERIOD;

// ---------- Page elements ----------
// Not every page has every element, so each one is checked before it is used.
const html = document.documentElement;
const body = document.body;
const langButton = document.getElementById("lang");
const soundButton = document.getElementById("sound");
const accessButton = document.getElementById("access-btn");
const accessPanel = document.getElementById("access");
const accessToggles = accessPanel ? [...accessPanel.querySelectorAll("[data-setting]")] : [];
const accessClose = document.getElementById("access-close");
const descriptionBar = document.getElementById("desc");
const wipe = document.querySelector(".wipe");
const flash = document.querySelector(".flash");
const liveRegion = document.getElementById("live");
const palette = document.getElementById("palette");
const paletteInput = document.getElementById("pal-input");
const opening = document.getElementById("opening");
const openingSkipButton = document.getElementById("opening-skip");
const music = document.getElementById("music");
const figmaEmbed = document.getElementById("figma-embed");
if (music) music.volume = 0.5; // half the level of the recording

const views = {};
for (const name of ["home", "models", "commissions", "about"]) {
  views[name] = document.getElementById("view-" + name);
}
const homeScreen = views.home ? views.home.querySelector(".home") : null;
const inkLayer = homeScreen ? homeScreen.querySelector(":scope > .ink-layer") : null;
const homeLinks = views.home ? [...views.home.querySelectorAll(".menu a.item")] : [];

function reduceMotion() {
  return html.classList.contains("reduce-motion");
}
function msg(key) {
  return html.lang === "ar" ? AR[key] : EN_MSG[key];
}
function announce(text) {
  if (liveRegion) liveRegion.textContent = text;
}

// ---------- Accessibility settings (saved on this device) ----------
let access = {};
try {
  access = JSON.parse(localStorage.getItem("access") || "{}") || {};
} catch (err) {
  access = {};
}
if (access.motion === undefined) {
  access.motion = matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function saveAccess() {
  try {
    localStorage.setItem("access", JSON.stringify(access));
  } catch (err) {
    // Storage is blocked, so the settings only last for this visit.
  }
}
function applyAccess() {
  html.classList.toggle("reduce-motion", Boolean(access.motion));
  html.classList.toggle("contrast", Boolean(access.contrast));
  html.classList.toggle("text-large", Boolean(access.large));
  for (const toggle of accessToggles) {
    const isOn = Boolean(access[toggle.dataset.setting]);
    toggle.setAttribute("aria-pressed", String(isOn));
  }
}
applyAccess();

// ---------- Home: the menu is copied into the ink layer, which the water cuts out, so its labels turn inverted ----------
if (homeScreen) {
  const stage = homeScreen.querySelector(":scope > .stage");
  const stageCopy = stage.cloneNode(true);
  // The copy must not repeat any ids, so every id stays unique on the page.
  for (const el of stageCopy.querySelectorAll("[id]")) el.removeAttribute("id");
  inkLayer.appendChild(stageCopy);
  inkLayer.inert = true;
  inkLayer.setAttribute("aria-hidden", "true");
  const copiedLinks = [...stageCopy.querySelectorAll(".menu a.item")];
  homeLinks.forEach((link, i) => {
    const copiedLink = copiedLinks[i];
    if (!copiedLink) return;
    link.addEventListener("pointerenter", () => copiedLink.classList.add("hot"));
    link.addEventListener("pointerleave", () => copiedLink.classList.remove("hot"));
    link.addEventListener("focus", () => copiedLink.classList.add("hot"));
    link.addEventListener("blur", () => copiedLink.classList.remove("hot"));
  });
}

// ---------- Visualiser canvases: one behind every control; the copy in the ink layer is inverted over the water ----------
const vizCanvases = [];
function addViz(parent, inverted, fillColor) {
  const canvas = document.createElement("canvas");
  canvas.className = "viz";
  canvas.setAttribute("aria-hidden", "true");
  parent.appendChild(canvas);
  vizCanvases.push({ el: canvas, ctx: null, inverted: inverted, fill: fillColor });
}
addViz(body, false);
if (inkLayer) addViz(inkLayer, true);
// The home screen has its own copy, drawn above the window and below the menu, stickers, car and ticker.
if (homeScreen) addViz(homeScreen, false, "rgba(244, 242, 234, 0.6)");

// ---------- Translation ----------
const labels = [...document.querySelectorAll("[data-i18n]")];
for (const label of labels) label.dataset.en = label.textContent;

// ---------- The description bar shows the home menu item that was hovered or focused last ----------
let currentHomeLink = homeLinks[0] || null;
function showDesc() {
  if (descriptionBar && currentHomeLink) {
    descriptionBar.textContent = html.lang === "ar" ? AR[currentHomeLink.dataset.desc] : currentHomeLink.dataset.descEn;
  }
}
for (const link of homeLinks) {
  const select = () => {
    currentHomeLink = link;
    showDesc();
  };
  link.addEventListener("pointerenter", select);
  link.addEventListener("focus", select);
}

// ---------- Language ----------
function setLanguage(lang) {
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  for (const label of labels) {
    const arabicText = AR[label.dataset.i18n];
    if (lang === "ar" && arabicText) {
      label.textContent = arabicText;
    } else {
      label.textContent = label.dataset.en;
    }
  }
  if (langButton) langButton.textContent = lang === "ar" ? "EN" : "ع";
  if (paletteInput) paletteInput.placeholder = lang === "ar" ? "اكتب اسم الصفحة" : EN_PALETTE_PLACEHOLDER;
  if (figmaEmbed) figmaEmbed.title = lang === "ar" ? AR.design_title : EN_FIGMA_TITLE;
  showDesc();
  try {
    localStorage.setItem("lang", lang);
  } catch (err) {
    // Storage is blocked, so the choice is not remembered.
  }
}

// ---------- Views: one document, four addresses ----------
const VIEW_OF_FILE = { "index.html": "home", "models.html": "models", "commissions.html": "commissions", "about.html": "about" };
const VIEW_TITLES = {
  home: "Taim Alsharabaty | IT student and 3D artist",
  models: "3D Models | Taim Alsharabaty",
  commissions: "Commissions | Taim Alsharabaty",
  about: "About | Taim Alsharabaty",
};
let activeView = null;

function viewFromPath(pathname) {
  const fileName = (pathname.split("/").pop() || "").toLowerCase();
  return VIEW_OF_FILE[fileName] || "home";
}
function viewFromHash(hash) {
  const name = (hash || "").replace("#", "");
  if (name === "home" || name === "models" || name === "commissions") return name;
  if (name === "about" || name === "contact") return "about";
  return null;
}
function hashFor(name, anchor) {
  if (name === "about" && anchor) return "#contact";
  return "#" + name;
}
function activeLinks() {
  const section = views[activeView];
  return section ? [...section.querySelectorAll(".menu a.item")] : [];
}
function scrollToAnchor(id) {
  const target = id ? document.getElementById(id) : null;
  if (target) target.scrollIntoView({ block: "start" });
  else window.scrollTo(0, 0);
}
function showView(name, anchor) {
  if (!views[name]) name = "home";
  activeView = name;
  for (const key of Object.keys(views)) {
    views[key].hidden = key !== name;
  }
  body.dataset.view = name;
  document.title = VIEW_TITLES[name];
  if (name === "home") {
    currentHomeLink = homeLinks[0] || null;
    showDesc();
  }
  scrollToAnchor(anchor);
}
function setHash(hash) {
  if (location.hash === hash) return;
  try {
    location.hash = hash;
  } catch (err) {
    // Ignore: the address bar just keeps its old value.
  }
}

// ---------- The red wipe: between views, and when the language changes ----------
const WIPE_MS = 200;
function resetWipe() {
  if (!wipe) return;
  wipe.style.transition = "none";
  wipe.classList.remove("enter", "leave");
  // Reading offsetWidth makes the browser apply the reset now, so the wipe can run again from the start.
  void wipe.offsetWidth;
  wipe.style.transition = "";
}
function withWipe(change) {
  if (!wipe || reduceMotion()) {
    change();
    return;
  }
  resetWipe();
  wipe.classList.add("enter");
  setTimeout(() => {
    change();
    wipe.classList.remove("enter");
    wipe.classList.add("leave");
  }, WIPE_MS);
}
function navigateTo(name, anchor) {
  if (name === activeView) {
    scrollToAnchor(anchor);
    setHash(hashFor(name, anchor));
    return;
  }
  withWipe(() => {
    showView(name, anchor);
    setHash(hashFor(name, anchor));
  });
}
addEventListener("hashchange", () => {
  const viewName = viewFromHash(location.hash) || body.dataset.view || "home";
  const anchor = location.hash === "#contact" ? "contact" : null;
  if (viewName !== activeView) showView(viewName, anchor);
  else if (anchor) scrollToAnchor(anchor);
});
addEventListener("pageshow", e => {
  if (e.persisted && wipe) {
    wipe.classList.remove("enter");
    wipe.classList.add("leave");
  }
});
// Links between the pages stay inside this document, so nothing reloads and the music carries on.
document.addEventListener("click", e => {
  const link = e.target.closest("a[href]");
  if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || link.target === "_blank") return;
  const url = new URL(link.href, location.href);
  if (url.origin !== location.origin || !url.pathname.endsWith(".html")) return;
  e.preventDefault();
  navigateTo(viewFromPath(url.pathname), url.hash === "#contact" ? "contact" : null);
});

// ---------- Music: a plain audio element, so the sound plays wherever the page is opened ----------
// Nothing goes through Web Audio, which browsers mute for files opened from disk. The bars read band levels that
// were measured from the track in advance, so they keep in step with the sound.
let wantsMusic = localStorage.getItem("music") !== "off";
function isPlaying() {
  return Boolean(music) && !music.paused && !music.ended;
}

// The bar levels come from their own file: one byte per band, for each frame (30 frames a second).
const VIZ_FPS = 30;
const VIZ_BANDS = 48;
let vizData = null;
fetch("assets/music-levels.bin")
  .then(res => {
    if (!res.ok) throw new Error(String(res.status));
    return res.arrayBuffer();
  })
  .then(buffer => {
    vizData = { fps: VIZ_FPS, bands: VIZ_BANDS, data: new Uint8Array(buffer) };
  })
  .catch(() => {
    // The bars stay flat if the file cannot be read, for example when the page is opened from a folder.
  });

// The visuals run this many seconds ahead of the music clock, so they land on the sound the visitor hears.
const BEAT_LEAD = 0.1;
function setPlayingUI(on) {
  html.classList.toggle("playing", on);
}
function setPreferenceUI(on) {
  if (soundButton) soundButton.setAttribute("aria-pressed", String(on));
}
if (music) {
  music.addEventListener("play", () => setPlayingUI(true));
  music.addEventListener("pause", () => setPlayingUI(false));
  music.addEventListener("ended", () => setPlayingUI(false));
}
setPreferenceUI(wantsMusic);

async function playMusic() {
  if (!music) return false;
  try {
    await music.play();
    return true;
  } catch (err) {
    return false;
  }
}
async function toggleMusic() {
  if (isPlaying()) {
    music.pause();
    wantsMusic = false;
    try {
      localStorage.setItem("music", "off");
    } catch (err) {
      // Storage is blocked, so the choice is not remembered.
    }
    setPreferenceUI(false);
    announce(msg("music_off"));
  } else {
    wantsMusic = true;
    try {
      localStorage.setItem("music", "on");
    } catch (err) {
      // Storage is blocked, so the choice is not remembered.
    }
    setPreferenceUI(true);
    if (await playMusic()) announce(msg("music_on"));
  }
}
if (soundButton) soundButton.addEventListener("click", toggleMusic);

// Browsers only let sound start after a click or key press, so the first one starts the music.
const gestureEvents = ["pointerdown", "keydown", "touchstart"];
function startOnGesture() {
  if (!wantsMusic || isPlaying()) return;
  playMusic().then(ok => {
    if (ok) {
      for (const ev of gestureEvents) removeEventListener(ev, startOnGesture);
    }
  });
}
if (music) {
  for (const ev of gestureEvents) addEventListener(ev, startOnGesture, { passive: true });
}

// Leaving for an outside address keeps the position, so the music carries on from where it was.
let savedMusic = null;
try {
  savedMusic = JSON.parse(sessionStorage.getItem("music-state") || "null");
} catch (err) {
  savedMusic = null;
}
if (music && savedMusic && savedMusic.playing && wantsMusic) {
  const resume = () => {
    try {
      music.currentTime = savedMusic.t || 0;
    } catch (err) {
      // Ignore: playback just starts from the beginning.
    }
    playMusic();
  };
  if (music.readyState >= 1) resume();
  else music.addEventListener("loadedmetadata", resume, { once: true });
}
addEventListener("pagehide", () => {
  try {
    sessionStorage.setItem("music-state", JSON.stringify({ t: music ? music.currentTime : 0, playing: isPlaying() }));
  } catch (err) {
    // Ignore: the position is simply not kept.
  }
});

// Song time. Between updates from the media element it moves on with the clock, but only while the sound is really
// running (enough data is ready) and by at most a quarter of a second, so a stall cannot leave the visuals ahead.
let lastMusicTime = -1;
let lastStamp = 0;
function songTime() {
  if (!music) return 0;
  const currentTime = music.currentTime;
  const now = performance.now();
  if (currentTime !== lastMusicTime) {
    lastMusicTime = currentTime;
    lastStamp = now;
    return currentTime;
  }
  if (isPlaying() && music.readyState >= 3 && now - lastStamp < 250) {
    return currentTime + (now - lastStamp) / 1000;
  }
  return currentTime;
}

// ---------- Visualiser: the bars follow the measured levels of the track ----------
const BARS = VIZ_BANDS;
const levels = new Float32Array(BARS);
function vizLevel(t, bar) {
  if (!vizData) return 0;
  const frameCount = Math.floor(vizData.data.length / vizData.bands);
  const frameIndex = Math.floor(Math.max(0, t) * vizData.fps) % frameCount;
  return vizData.data[frameIndex * vizData.bands + bar] / 255;
}
function drawVisualiser(active, t, beat) {
  // Each bar moves towards its target: up quickly, down slowly.
  for (let i = 0; i < BARS; i++) {
    const target = active ? vizLevel(t, i) * (1 + 0.3 * beat) : 0;
    const speed = target > levels[i] ? 0.6 : 0.12;
    levels[i] += (target - levels[i]) * speed;
  }
  for (const viz of vizCanvases) {
    const canvas = viz.el;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (!width || !height) continue;
    const pixelWidth = Math.round(width * pixelRatio);
    const pixelHeight = Math.round(height * pixelRatio);
    if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
      canvas.width = pixelWidth;
      canvas.height = pixelHeight;
    }
    if (!viz.ctx) viz.ctx = canvas.getContext("2d");
    const ctx = viz.ctx;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = viz.fill || (viz.inverted ? "rgba(7, 7, 15, 0.9)" : "rgba(244, 242, 234, 0.92)");
    const slot = width / BARS;
    const barWidth = slot * 0.6;
    for (let i = 0; i < BARS; i++) {
      const barHeight = levels[i] * height * 0.85;
      if (barHeight > 0.5) ctx.fillRect(i * slot + (slot - barWidth) / 2, height - barHeight, barWidth, barHeight);
    }
  }
}

// ---------- The frame loop: beat, drop and visualiser ----------
let beatLevel = 0;
let dropLevel = 0;
let prevSongTime = -1;
function frame() {
  requestAnimationFrame(frame);
  const playing = isPlaying();
  const still = reduceMotion();
  const t = songTime() + BEAT_LEAD;
  if (playing && !still) {
    // positionInBeat is 0 exactly on a beat, and climbs back towards 1 just before the next one.
    const positionInBeat = ((((t - BEAT_OFFSET) / PERIOD) % 1) + 1) % 1;
    beatLevel = Math.exp(-positionInBeat * 7); // a light pulse that fades within the beat
    if (prevSongTime >= 0 && t < prevSongTime - 0.5) prevSongTime = -1; // the track has looped
    if (prevSongTime >= 0 && prevSongTime < MUSIC.anchor && t >= MUSIC.anchor) dropLevel = 1;
    prevSongTime = t;
  } else {
    beatLevel *= 0.85;
    prevSongTime = -1;
  }
  dropLevel *= 0.955;
  if (still) {
    beatLevel = 0;
    dropLevel = 0;
  }
  html.style.setProperty("--beat", beatLevel.toFixed(3));
  html.style.setProperty("--drop", dropLevel.toFixed(3));
  if (flash) flash.style.opacity = (dropLevel * 0.5).toFixed(3);
  window.BEAT_STATE = { beat: beatLevel, drop: dropLevel };
  if (!still) drawVisualiser(playing, t, beatLevel);
}
requestAnimationFrame(frame);

// ---------- The opening: the name appears, then gives way to the menu, then the menu animates in ----------
function splitOpening() {
  if (!opening) return;
  let letterNumber = 0;
  for (const line of opening.querySelectorAll(".l1, .l2")) {
    const text = line.textContent;
    line.textContent = "";
    for (const ch of text) {
      const span = document.createElement("span");
      span.className = "ch";
      span.style.setProperty("--i", String(letterNumber));
      span.textContent = ch;
      line.appendChild(span);
      letterNumber++;
    }
  }
}
const openingTimers = [];
let openingDone = false;
function startUI() {
  html.classList.add("ui-start");
}
function openingKey(e) {
  if (["Enter", " ", "Escape"].includes(e.key)) {
    e.preventDefault();
    finishOpening();
  }
}
function finishOpening() {
  if (openingDone) return;
  openingDone = true;
  for (const timer of openingTimers) clearTimeout(timer);
  if (opening) opening.remove();
  removeEventListener("keydown", openingKey);
  try {
    sessionStorage.setItem("opening-seen", "1");
  } catch (err) {
    // Ignore: the opening may play again on the next visit.
  }
  startUI();
}
function playOpening() {
  splitOpening();
  if (reduceMotion()) {
    openingTimers.push(setTimeout(finishOpening, 700));
  } else {
    openingTimers.push(setTimeout(() => opening.classList.add("leaving"), 1350));
    openingTimers.push(setTimeout(startUI, 1650));
    openingTimers.push(setTimeout(finishOpening, 1950));
  }
  if (openingSkipButton) openingSkipButton.addEventListener("click", finishOpening);
  opening.addEventListener("click", finishOpening);
  addEventListener("keydown", openingKey);
}

// ---------- Language button ----------
if (langButton) {
  langButton.addEventListener("click", () => {
    const next = html.lang === "ar" ? "en" : "ar";
    withWipe(() => {
      setLanguage(next);
      announce(next === "ar" ? "العربية" : "English");
    });
  });
}
const paletteLangButton = document.querySelector("[data-action='lang']");
if (paletteLangButton) {
  paletteLangButton.addEventListener("click", () => {
    if (langButton) langButton.click();
  });
}

// ---------- Accessibility panel ----------
function openAccess() {
  accessPanel.hidden = false;
  accessButton.setAttribute("aria-expanded", "true");
  if (accessToggles[0]) accessToggles[0].focus();
}
function closeAccess() {
  if (!accessPanel || accessPanel.hidden) return;
  accessPanel.hidden = true;
  accessButton.setAttribute("aria-expanded", "false");
  accessButton.focus();
}
if (accessButton && accessPanel) {
  accessButton.addEventListener("click", () => {
    if (accessPanel.hidden) openAccess();
    else closeAccess();
  });
  if (accessClose) accessClose.addEventListener("click", closeAccess);
  accessPanel.addEventListener("click", e => {
    if (e.target === accessPanel) closeAccess();
  });
  for (const toggle of accessToggles) {
    toggle.addEventListener("click", () => {
      const key = toggle.dataset.setting;
      access[key] = !access[key];
      saveAccess();
      applyAccess();
      const label = toggle.querySelector("[data-i18n]");
      const labelText = label ? label.textContent : "";
      announce(labelText + ": " + msg(access[key] ? "on" : "off"));
    });
  }
}

// ---------- Command palette: / or Ctrl+K opens it; type to filter; arrows move; Enter opens; Escape closes ----------
const paletteItems = palette ? [...palette.querySelectorAll("li")] : [];
let selectedIndex = 0;
let paletteReturn = null;
function visiblePaletteItems() {
  return paletteItems.filter(li => !li.hidden && li.querySelector("a, button"));
}
function paletteIsOpen() {
  return Boolean(palette) && !palette.hidden;
}
function highlightSelected() {
  for (const li of paletteItems) li.classList.remove("sel");
  const list = visiblePaletteItems();
  if (list[selectedIndex]) list[selectedIndex].classList.add("sel");
}
function filterPalette() {
  const query = paletteInput.value.trim().toLowerCase();
  for (const li of paletteItems) {
    li.hidden = query !== "" && !li.textContent.toLowerCase().includes(query);
  }
  selectedIndex = 0;
  highlightSelected();
}
function openPalette() {
  if (!palette) return;
  paletteReturn = document.activeElement;
  palette.hidden = false;
  paletteInput.value = "";
  filterPalette();
  paletteInput.focus();
}
function closePalette() {
  if (!paletteIsOpen()) return;
  palette.hidden = true;
  if (paletteReturn && paletteReturn.focus) paletteReturn.focus();
}
if (palette) {
  paletteInput.addEventListener("input", filterPalette);
  palette.addEventListener("click", e => {
    if (e.target === palette || e.target.closest("a, button")) closePalette();
  });
  addEventListener("focusin", e => {
    if (paletteIsOpen() && !palette.contains(e.target)) paletteInput.focus();
  });
}

// ---------- Keyboard ----------
addEventListener("keydown", e => {
  const typing = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
  if (e.key === "Escape") {
    if (paletteIsOpen()) {
      closePalette();
      return;
    }
    if (accessPanel && !accessPanel.hidden) {
      closeAccess();
      return;
    }
  }
  if ((e.key === "/" && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) {
    if (palette) {
      e.preventDefault();
      openPalette();
    }
    return;
  }
  if (paletteIsOpen()) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const count = visiblePaletteItems().length;
      if (count) selectedIndex = (selectedIndex + (e.key === "ArrowDown" ? 1 : -1) + count) % count;
      highlightSelected();
    } else if (e.key === "Enter") {
      const target = visiblePaletteItems()[selectedIndex];
      const el = target && target.querySelector("a, button");
      if (el) {
        e.preventDefault();
        el.click();
      }
    }
    return;
  }
  const links = activeLinks();
  if (!links.length || !["ArrowDown", "ArrowUp"].includes(e.key)) return;
  e.preventDefault();
  const step = e.key === "ArrowDown" ? 1 : -1;
  const i = links.indexOf(document.activeElement);
  let next;
  if (i < 0) {
    next = step > 0 ? 0 : links.length - 1;
  } else {
    next = (i + step + links.length) % links.length;
  }
  links[next].focus();
});

// ---------- Sound effects: a soft tick when a button or link is hovered, a short pop when it is clicked ----------
const hoverSound = new Audio("assets/sfx/hover.wav");
hoverSound.volume = 0.6;
hoverSound.preload = "auto";
const clickSound = new Audio("assets/sfx/click.wav");
clickSound.volume = 0.7;
clickSound.preload = "auto";
const SFX = { hover: hoverSound, click: clickSound };
function playSfx(name) {
  const sound = SFX[name];
  if (!sound) return;
  try {
    sound.currentTime = 0;
    const attempt = sound.play();
    // Browsers refuse sound until the visitor has used the page, so a refused play is simply ignored.
    if (attempt && attempt.catch) attempt.catch(() => {});
  } catch (err) {
    // Ignore: this sound is skipped.
  }
}
const SFX_TARGETS = "a[href], button, .item, .btn, .tool, .lang";
function findSoundTarget(el) {
  if (!el || !el.closest) return null;
  const target = el.closest(SFX_TARGETS);
  if (!target) return null;
  if (target.classList.contains("is-off") || target.disabled) return null;
  return target;
}
document.addEventListener("pointerover", e => {
  if (e.pointerType === "touch") return; // touch screens have no hover
  const target = findSoundTarget(e.target);
  if (target && !(e.relatedTarget && target.contains(e.relatedTarget))) playSfx("hover");
});
document.addEventListener("click", e => {
  if (findSoundTarget(e.target)) playSfx("click");
});

// ---------- Start: the language, the view named by the address, and the opening ----------
let savedLang = null;
try {
  savedLang = localStorage.getItem("lang");
} catch (err) {
  savedLang = null;
}
setLanguage(savedLang === "ar" ? "ar" : "en");
const startView = viewFromHash(location.hash) || body.dataset.view || "home";
showView(startView, location.hash === "#contact" ? "contact" : null);
// Try to start the music straight away. Browsers may refuse, and then the first click or key press starts it.
if (music && wantsMusic) playMusic().catch(() => {});
let openingSeen = false;
try {
  openingSeen = sessionStorage.getItem("opening-seen") === "1";
} catch (err) {
  openingSeen = false;
}
if (opening && startView === "home" && !openingSeen) {
  playOpening();
} else {
  if (opening) opening.remove();
  startUI();
}
