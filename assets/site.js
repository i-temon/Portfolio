/* Site behaviour. The four pages are views inside one document, so moving between them never reloads the page and
   the music keeps playing. Also here: the red wipe, the menu copy that inverts over the water, the accessibility
   settings, the opening, the music with its visualiser and beat, and the command palette.
   English is the page's own text; the Arabic strings live in AR. */

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
};
const EN_MSG = { music_on: "Music on", music_off: "Music off", on: "On", off: "Off", en: "English", ar: "العربية" };

// The beat grid: 128 BPM, running from the drop's big kick. In the trimmed track that kick is at 15.311 s
// (17.01 s in the original file, where the loudness jump begins at 16.9 s).
const MUSIC = { bpm: 128, anchor: 15.311 };
const PERIOD = 60 / MUSIC.bpm;
const BEAT_OFFSET = ((MUSIC.anchor % PERIOD) + PERIOD) % PERIOD;

const html = document.documentElement;
const body = document.body;
const button = document.getElementById("lang");
const soundBtn = document.getElementById("sound");
const accessBtn = document.getElementById("access-btn");
const accessPanel = document.getElementById("access");
const accessToggles = accessPanel ? [...accessPanel.querySelectorAll("[data-setting]")] : [];
const accessClose = document.getElementById("access-close");
const desc = document.getElementById("desc");
const wipe = document.querySelector(".wipe");
const flash = document.querySelector(".flash");
const live = document.getElementById("live");
const pal = document.getElementById("palette");
const palInput = document.getElementById("pal-input");
const opening = document.getElementById("opening");
const openingSkip = document.getElementById("opening-skip");
const music = document.getElementById("music");
if (music) music.volume = 0.5; // half the level of the recording
const views = {};
for (const name of ["home", "models", "commissions", "about"]) views[name] = document.getElementById("view-" + name);
const homeWrap = views.home ? views.home.querySelector(".home") : null;
const layer = homeWrap ? homeWrap.querySelector(":scope > .ink-layer") : null;
const homeLinks = views.home ? [...views.home.querySelectorAll(".menu a.item")] : [];

const reduceMotion = () => html.classList.contains("reduce-motion");
const msg = key => (html.lang === "ar" ? AR[key] : EN_MSG[key]);
const announce = text => { if (live) live.textContent = text; };

// ---------- Accessibility settings (saved on this device) ----------
let access = {};
try { access = JSON.parse(localStorage.getItem("access") || "{}") || {}; } catch (err) { access = {}; }
if (access.motion === undefined) access.motion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const saveAccess = () => { try { localStorage.setItem("access", JSON.stringify(access)); } catch (err) { /* ignore */ } };
function applyAccess() {
  html.classList.toggle("reduce-motion", !!access.motion);
  html.classList.toggle("contrast", !!access.contrast);
  html.classList.toggle("text-large", !!access.large);
  accessToggles.forEach(t => t.setAttribute("aria-pressed", String(!!access[t.dataset.setting])));
}
applyAccess();

// ---------- Home: the menu is copied into the ink layer, which is cut out by the water, so the labels invert ----------
if (homeWrap) {
  const stage = homeWrap.querySelector(":scope > .stage");
  const copy = stage.cloneNode(true);
  copy.querySelectorAll("[id]").forEach(el => el.removeAttribute("id"));
  layer.appendChild(copy);
  layer.inert = true;
  layer.setAttribute("aria-hidden", "true");
  const copies = [...copy.querySelectorAll(".menu a.item")];
  homeLinks.forEach((link, i) => {
    if (!copies[i]) return;
    const on = () => copies[i].classList.add("hot");
    const off = () => copies[i].classList.remove("hot");
    link.addEventListener("pointerenter", on);
    link.addEventListener("pointerleave", off);
    link.addEventListener("focus", on);
    link.addEventListener("blur", off);
  });
}

// ---------- Visualiser canvases: behind every control; the copy in the ink layer is inverted over the water ----------
const vizCanvases = [];
function addViz(parent, inverted) {
  const c = document.createElement("canvas");
  c.className = "viz";
  c.setAttribute("aria-hidden", "true");
  parent.appendChild(c);
  vizCanvases.push({ el: c, ctx: null, inverted });
}
addViz(body, false);
if (layer) addViz(layer, true);

// ---------- The brush-shaped window is a vector outline, so it fills the home screen without loading a picture ----------
const brushShape = document.getElementById("brush-shape");
function fitBrush() {
  if (!brushShape || !homeWrap) return;
  const w = homeWrap.clientWidth;
  const h = homeWrap.clientHeight;
  if (!w || !h) return;
  // "cover" fit: the outline grows until it fills the screen and crops the edges, as the old picture mask did
  const s = Math.max(w / 1600, h / 900);
  brushShape.setAttribute("transform", "matrix(" + s + " 0 0 " + s + " " + (w - 1600 * s) / 2 + " " + (h - 900 * s) / 2 + ")");
}
if (brushShape && homeWrap && "ResizeObserver" in window) new ResizeObserver(fitBrush).observe(homeWrap);
fitBrush();

// ---------- Translation ----------
const labels = [...document.querySelectorAll("[data-i18n]")];
labels.forEach(el => { el.dataset.en = el.textContent; });
const EN_PALETTE_PLACEHOLDER = "Type a page name";

// ---------- The description bar shows the home menu item that was hovered or focused last ----------
let current = homeLinks[0] || null;
function showDesc() {
  if (desc && current) desc.textContent = html.lang === "ar" ? AR[current.dataset.desc] : current.dataset.descEn;
}
homeLinks.forEach(link => {
  const select = () => { current = link; showDesc(); };
  link.addEventListener("pointerenter", select);
  link.addEventListener("focus", select);
});

function setLanguage(lang) {
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  labels.forEach(el => { el.textContent = (lang === "ar" && AR[el.dataset.i18n]) || el.dataset.en; });
  if (button) button.textContent = lang === "ar" ? "EN" : "ع";
  if (palInput) palInput.placeholder = lang === "ar" ? "اكتب اسم الصفحة" : EN_PALETTE_PLACEHOLDER;
  showDesc();
  try { localStorage.setItem("lang", lang); } catch (err) { /* storage blocked: the choice isn't remembered */ }
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
  const file = (pathname.split("/").pop() || "").toLowerCase();
  return VIEW_OF_FILE[file] || "home";
}
function viewFromHash(hash) {
  const h = (hash || "").replace("#", "");
  if (h === "home" || h === "models" || h === "commissions") return h;
  if (h === "about" || h === "contact") return "about";
  return null;
}
const hashFor = (name, anchor) => (name === "about" && anchor ? "#contact" : "#" + name);
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
  for (const key of Object.keys(views)) views[key].hidden = key !== name;
  body.dataset.view = name;
  document.title = VIEW_TITLES[name];
  if (name === "home") {
    current = homeLinks[0] || null;
    showDesc();
  }
  scrollToAnchor(anchor);
}
function setHash(hash) {
  if (location.hash === hash) return;
  try { location.hash = hash; } catch (err) { /* ignore */ }
}

// ---------- The red wipe: between views, and when the language changes ----------
const WIPE_MS = 200;
function resetWipe() {
  if (!wipe) return;
  wipe.style.transition = "none";
  wipe.classList.remove("enter", "leave");
  void wipe.offsetWidth;
  wipe.style.transition = "";
}
function withWipe(change) {
  if (!wipe || reduceMotion()) { change(); return; }
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
  const v = viewFromHash(location.hash) || body.dataset.view || "home";
  const anchor = location.hash === "#contact" ? "contact" : null;
  if (v !== activeView) showView(v, anchor);
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
  const a = e.target.closest("a[href]");
  if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || a.target === "_blank") return;
  const url = new URL(a.href, location.href);
  if (url.origin !== location.origin || !url.pathname.endsWith(".html")) return;
  e.preventDefault();
  navigateTo(viewFromPath(url.pathname), url.hash === "#contact" ? "contact" : null);
});

// ---------- Music: a plain audio element, so the sound plays wherever the page is opened ----------
// Nothing is routed through Web Audio, which browsers mute for files opened from disk. The visualiser reads band
// levels that were measured from the track ahead of time, so it stays in step with the sound.
let musicPref = localStorage.getItem("music") !== "off";
const isPlaying = () => !!music && !music.paused && !music.ended;

// The beat-bar levels are read from their own file: one byte per band for each frame (30 frames a second).
const VIZ_FPS = 30;
const VIZ_BANDS = 48;
let VIZ = null;
fetch("assets/music-levels.bin")
  .then(res => { if (!res.ok) throw new Error(String(res.status)); return res.arrayBuffer(); })
  .then(buf => { VIZ = { fps: VIZ_FPS, bands: VIZ_BANDS, data: new Uint8Array(buf) }; })
  .catch(() => { /* the bars stay flat if the file cannot be read, for example when the page is opened from a folder */ });

// The visuals run this many seconds ahead of the music clock, so they land on the sound the visitor hears.
const BEAT_LEAD = 0.1;
const setPlayingUI = on => html.classList.toggle("playing", on);
const setPreferenceUI = on => { if (soundBtn) soundBtn.setAttribute("aria-pressed", String(on)); };
if (music) {
  music.volume = 0.5;
  music.addEventListener("play", () => setPlayingUI(true));
  music.addEventListener("pause", () => setPlayingUI(false));
  music.addEventListener("ended", () => setPlayingUI(false));
}
setPreferenceUI(musicPref);

async function playMusic() {
  if (!music) return false;
  try { await music.play(); return true; } catch (err) { return false; }
}
async function toggleMusic() {
  if (isPlaying()) {
    music.pause();
    musicPref = false;
    try { localStorage.setItem("music", "off"); } catch (err) { /* ignore */ }
    setPreferenceUI(false);
    announce(msg("music_off"));
  } else {
    musicPref = true;
    try { localStorage.setItem("music", "on"); } catch (err) { /* ignore */ }
    setPreferenceUI(true);
    if (await playMusic()) announce(msg("music_on"));
  }
}
if (soundBtn) soundBtn.addEventListener("click", toggleMusic);

// Browsers only let sound start after a click or key press, so the first one starts the music.
const gestureEvents = ["pointerdown", "keydown", "touchstart"];
function startOnGesture() {
  if (!musicPref || isPlaying()) return;
  
  playMusic().then(ok => {
    if (ok) gestureEvents.forEach(ev => removeEventListener(ev, startOnGesture));
  });
}
if (music) gestureEvents.forEach(ev => addEventListener(ev, startOnGesture, { passive: true }));

// Leaving the site for an outside address keeps the position, so the music resumes from where it was.
let savedMusic = null;
try { savedMusic = JSON.parse(sessionStorage.getItem("music-state") || "null"); } catch (err) { savedMusic = null; }
if (music && savedMusic && savedMusic.playing && musicPref) {
  const resume = () => {
    try { music.currentTime = savedMusic.t || 0; } catch (err) { /* ignore */ }
    playMusic();
  };
  if (music.readyState >= 1) resume();
  else music.addEventListener("loadedmetadata", resume, { once: true });
}
addEventListener("pagehide", () => {
  try {
    sessionStorage.setItem("music-state", JSON.stringify({ t: music ? music.currentTime : 0, playing: isPlaying() }));
  } catch (err) { /* ignore */ }
});

// Song time. Between the media element's updates it moves on with the clock, but only while the sound is really
// running (enough data buffered) and never more than a quarter of a second, so a stall can't leave the visuals ahead.
let lastCT = -1;
let lastPerf = 0;
function songTime() {
  if (!music) return 0;
  const ct = music.currentTime;
  const now = performance.now();
  if (ct !== lastCT) {
    lastCT = ct;
    lastPerf = now;
    return ct;
  }
  if (isPlaying() && music.readyState >= 3 && now - lastPerf < 250) return ct + (now - lastPerf) / 1000;
  return ct;
}

// ---------- Visualiser: bars follow the measured levels of the track ----------
const BARS = VIZ_BANDS;
const levels = new Float32Array(BARS);
function vizLevel(t, i) {
  if (!VIZ) return 0;
  const frames = Math.floor(VIZ.data.length / VIZ.bands);
  const f = Math.floor(Math.max(0, t) * VIZ.fps) % frames;
  return VIZ.data[f * VIZ.bands + i] / 255;
}
function drawVisualiser(active, t, beat) {
  for (let i = 0; i < BARS; i++) {
    const target = active ? vizLevel(t, i) * (1 + 0.3 * beat) : 0;
    levels[i] += (target - levels[i]) * (target > levels[i] ? 0.6 : 0.12);
  }
  vizCanvases.forEach(v => {
    const c = v.el;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = c.clientWidth;
    const h = c.clientHeight;
    if (!w || !h) return;
    if (c.width !== Math.round(w * dpr) || c.height !== Math.round(h * dpr)) {
      c.width = Math.round(w * dpr);
      c.height = Math.round(h * dpr);
    }
    if (!v.ctx) v.ctx = c.getContext("2d");
    const ctx = v.ctx;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = v.inverted ? "rgba(7, 7, 15, 0.9)" : "rgba(244, 242, 234, 0.92)";
    const slot = w / BARS;
    const barW = slot * 0.6;
    for (let i = 0; i < BARS; i++) {
      const bh = levels[i] * h * 0.85;
      if (bh > 0.5) ctx.fillRect(i * slot + (slot - barW) / 2, h - bh, barW, bh);
    }
  });
}

// ---------- The frame loop: beat, drop and visualiser ----------
let beatLevel = 0;
let dropLevel = 0;
let prevT = -1;
function frame() {
  requestAnimationFrame(frame);
  const playing = isPlaying();
  const still = reduceMotion();
  const t = songTime() + BEAT_LEAD;
  if (playing && !still) {
    const x = (((t - BEAT_OFFSET) / PERIOD) % 1 + 1) % 1;   // 0 on every beat
    beatLevel = Math.exp(-x * 7);                             // a light pulse that fades within the beat
    if (prevT >= 0 && t < prevT - 0.5) prevT = -1;            // the track has looped
    if (prevT >= 0 && prevT < MUSIC.anchor && t >= MUSIC.anchor) dropLevel = 1;
    prevT = t;
  } else {
    beatLevel *= 0.85;
    prevT = -1;
  }
  dropLevel *= 0.955;
  if (still) { beatLevel = 0; dropLevel = 0; }
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
  let i = 0;
  opening.querySelectorAll(".l1, .l2").forEach(line => {
    const text = line.textContent;
    line.textContent = "";
    [...text].forEach(ch => {
      const s = document.createElement("span");
      s.className = "ch";
      s.style.setProperty("--i", String(i++));
      s.textContent = ch;
      line.appendChild(s);
    });
  });
}
const openingTimers = [];
let openingDone = false;
function startUI() { html.classList.add("ui-start"); }
function openingKey(e) {
  if (["Enter", " ", "Escape"].includes(e.key)) { e.preventDefault(); finishOpening(); }
}
function finishOpening() {
  if (openingDone) return;
  openingDone = true;
  openingTimers.forEach(clearTimeout);
  if (opening) opening.remove();
  removeEventListener("keydown", openingKey);
  try { sessionStorage.setItem("opening-seen", "1"); } catch (err) { /* ignore */ }
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
  if (openingSkip) openingSkip.addEventListener("click", finishOpening);
  opening.addEventListener("click", finishOpening);
  addEventListener("keydown", openingKey);
}

// ---------- Language ----------
if (button) {
  button.addEventListener("click", () => {
    const next = html.lang === "ar" ? "en" : "ar";
    withWipe(() => {
      setLanguage(next);
      announce(next === "ar" ? "العربية" : "English");
    });
  });
}
const palLang = document.querySelector("[data-action='lang']");
if (palLang) palLang.addEventListener("click", () => { if (button) button.click(); });

// ---------- Accessibility panel ----------
function openAccess() {
  accessPanel.hidden = false;
  accessBtn.setAttribute("aria-expanded", "true");
  if (accessToggles[0]) accessToggles[0].focus();
}
function closeAccess() {
  if (!accessPanel || accessPanel.hidden) return;
  accessPanel.hidden = true;
  accessBtn.setAttribute("aria-expanded", "false");
  accessBtn.focus();
}
if (accessBtn && accessPanel) {
  accessBtn.addEventListener("click", () => (accessPanel.hidden ? openAccess() : closeAccess()));
  if (accessClose) accessClose.addEventListener("click", closeAccess);
  accessPanel.addEventListener("click", e => { if (e.target === accessPanel) closeAccess(); });
  accessToggles.forEach(t => t.addEventListener("click", () => {
    const key = t.dataset.setting;
    access[key] = !access[key];
    saveAccess();
    applyAccess();
    const label = t.querySelector("[data-i18n]");
    announce((label ? label.textContent : "") + ": " + msg(access[key] ? "on" : "off"));
  }));
}

// ---------- Command palette: / or Ctrl+K opens it; type to filter; arrows move; Enter opens; Escape closes ----------
const palItems = pal ? [...pal.querySelectorAll("li")] : [];
let palSel = 0;
let paletteReturn = null;
const palVisible = () => palItems.filter(li => !li.hidden && li.querySelector("a, button"));
const paletteOpen = () => !!pal && !pal.hidden;
function paintPal() {
  palItems.forEach(li => li.classList.remove("sel"));
  const list = palVisible();
  if (list[palSel]) list[palSel].classList.add("sel");
}
function filterPal() {
  const q = palInput.value.trim().toLowerCase();
  palItems.forEach(li => { li.hidden = q !== "" && !li.textContent.toLowerCase().includes(q); });
  palSel = 0;
  paintPal();
}
function openPalette() {
  if (!pal) return;
  paletteReturn = document.activeElement;
  pal.hidden = false;
  palInput.value = "";
  filterPal();
  palInput.focus();
}
function closePalette() {
  if (!paletteOpen()) return;
  pal.hidden = true;
  if (paletteReturn && paletteReturn.focus) paletteReturn.focus();
}
if (pal) {
  palInput.addEventListener("input", filterPal);
  pal.addEventListener("click", e => { if (e.target === pal || e.target.closest("a, button")) closePalette(); });
  addEventListener("focusin", e => { if (paletteOpen() && !pal.contains(e.target)) palInput.focus(); });
}

// ---------- Keyboard ----------
addEventListener("keydown", e => {
  const typing = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
  if (e.key === "Escape") {
    if (paletteOpen()) { closePalette(); return; }
    if (accessPanel && !accessPanel.hidden) { closeAccess(); return; }
  }
  if ((e.key === "/" && !typing) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) {
    if (pal) { e.preventDefault(); openPalette(); }
    return;
  }
  if (paletteOpen()) {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const count = palVisible().length;
      if (count) palSel = (palSel + (e.key === "ArrowDown" ? 1 : -1) + count) % count;
      paintPal();
    } else if (e.key === "Enter") {
      const target = palVisible()[palSel];
      const el = target && target.querySelector("a, button");
      if (el) { e.preventDefault(); el.click(); }
    }
    return;
  }
  const links = activeLinks();
  if (!links.length || !["ArrowDown", "ArrowUp"].includes(e.key)) return;
  e.preventDefault();
  const step = e.key === "ArrowDown" ? 1 : -1;
  const i = links.indexOf(document.activeElement);
  const next = i < 0 ? (step > 0 ? 0 : links.length - 1) : (i + step + links.length) % links.length;
  links[next].focus();
});

// ---------- Sound effects: a soft tick when a button or link is hovered, a short pop when it is clicked ----------
const SFX = {
  hover: Object.assign(new Audio("assets/sfx/hover.wav"), { volume: 0.6, preload: "auto" }),
  click: Object.assign(new Audio("assets/sfx/click.wav"), { volume: 0.7, preload: "auto" }),
};
function playSfx(name) {
  const sound = SFX[name];
  if (!sound) return;
  try {
    sound.currentTime = 0;
    const attempt = sound.play();
    if (attempt && attempt.catch) attempt.catch(() => {}); // browsers refuse sound until the visitor has used the page
  } catch (err) { /* ignore */ }
}
const SFX_TARGETS = "a[href], button, .item, .btn, .tool, .lang";
function sfxTarget(el) {
  const target = el && el.closest ? el.closest(SFX_TARGETS) : null;
  return target && !target.classList.contains("is-off") && !target.disabled ? target : null;
}
document.addEventListener("pointerover", e => {
  if (e.pointerType === "touch") return; // touch screens have no hover
  const target = sfxTarget(e.target);
  if (target && !(e.relatedTarget && target.contains(e.relatedTarget))) playSfx("hover");
});
document.addEventListener("click", e => {
  if (sfxTarget(e.target)) playSfx("click");
});

// ---------- Start: the language, the view named by the address, and the opening ----------
let savedLang = null;
try { savedLang = localStorage.getItem("lang"); } catch (err) { savedLang = null; }
setLanguage(savedLang === "ar" ? "ar" : "en");
const startView = viewFromHash(location.hash) || body.dataset.view || "home";
showView(startView, location.hash === "#contact" ? "contact" : null);
// Try to start the music straight away. Browsers refuse sound until the visitor has used the page;
// when they refuse, the first click or key press starts it instead (see startOnGesture).
if (music && musicPref) playMusic().catch(() => {});
let openingSeen = false;
try { openingSeen = sessionStorage.getItem("opening-seen") === "1"; } catch (err) { openingSeen = false; }
if (opening && startView === "home" && !openingSeen) playOpening();
else {
  if (opening) opening.remove();
  startUI();
}
