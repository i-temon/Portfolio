/* Language switch (English by default, Arabic on demand), menu arrow keys and the timelapse fallback. */

// Arabic strings. English is read from the page itself, so only Arabic is listed here.
const AR = {
  roles: "فنان ثلاثي الأبعاد وفنان ثنائي الأبعاد ومصمم جرافيك ثنائي الأبعاد. طالب تكنولوجيا المعلومات في عمّان.",
  m_art: "الفن والتصميم ثنائي الأبعاد",
  m_3d: "النماذج ثلاثية الأبعاد",
  m_time: "فيديو تايم لابس",
  m_about: "نبذة وتواصل",
  hint: "اختر صفحة. يمكنك استخدام الأسهم أيضاً.",
  back: "العودة إلى القائمة",
  art_p: "رسم رقمي وتصميم جرافيك ثنائي الأبعاد.",
  art_note: "هذه قطعة مؤقتة، وستحل أعمالي الخاصة مكانها قريباً.",
  slot: "مكان العمل الفني",
  m3_p: "يد بسيطة صُنعت في Blender وتظهر بهيكل سلكي معتم ليسهل قراءة توزيع الأضلاع. تطفو وتدور من تلقاء نفسها. حرّك المؤشر لإمالتها أو اسحب لتدويرها.",
  tl_p: "شاهد كيف يتشكل الرسم خطوة بخطوة.",
  tl_empty: "فيديو التايم لابس قريباً.",
  r2t: "أعمال بالطلب",
  r2d: "نحو 7 أعمال منذ 2026، ومن عملائي صانع المحتوى @breucat على يوتيوب.",
  r3t: "أدوات ثلاثية الأبعاد",
  r3d: "Blender وMaya و3ds Max وZBrush وSubstance Painter، مع 3 إلى 4 سنوات من الفن ثلاثي الأبعاد.",
  r4t: "مهارات دراسية",
  r4d: "تصميم الويب في Figma وHTML، وتصميم الألعاب في Unity، وتطبيقات Dart وFlutter، وتحليل البيانات في Excel، وجميعها من مهام BTEC الدراسية.",
  r5t: "التعليم",
  r5d: "دبلوم بيرسون BTEC المستوى 3 في تكنولوجيا المعلومات (قيد الدراسة، والتخرج المتوقع 2028). أنهيت المستوى 2.",
  r6t: "إنجاز",
  r6d: "المركز الأول في مسابقة التحدث بالإنجليزية، لواء ماركا.",
  r7t: "اللغات",
  r7d: "العربية (لغتي الأم) والإنجليزية (بطلاقة).",
  r8t: "تواصل",
  loc: "عمّان، الأردن"
};

const html = document.documentElement;
const labels = [...document.querySelectorAll("[data-i18n]")];
const button = document.getElementById("lang");
labels.forEach(el => { el.dataset.en = el.textContent; });   // remember the English text

function setLanguage(lang) {
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";
  labels.forEach(el => { el.textContent = (lang === "ar" && AR[el.dataset.i18n]) || el.dataset.en; });
  button.textContent = lang === "ar" ? "EN" : "ع";
  try { localStorage.setItem("lang", lang); } catch (err) { /* storage can be blocked: ignore */ }
}

button.addEventListener("click", () => setLanguage(html.lang === "ar" ? "en" : "ar"));
try { if (localStorage.getItem("lang") === "ar") setLanguage("ar"); } catch (err) { /* ignore */ }

// Arrow keys move through the main menu like a game menu.
const items = [...document.querySelectorAll(".menu a")];
addEventListener("keydown", e => {
  if (!items.length || !["ArrowDown", "ArrowUp"].includes(e.key)) return;
  e.preventDefault();
  const step = e.key === "ArrowDown" ? 1 : -1;
  items[(items.indexOf(document.activeElement) + step + items.length) % items.length].focus();
});

// Timelapse page: show a friendly message until the video file exists.
const video = document.getElementById("tl");
if (video) {
  video.addEventListener("error", () => {
    video.hidden = true;
    document.getElementById("tl-empty").hidden = false;
  });
}
