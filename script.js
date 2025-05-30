// ======= 1. DARK / LIGHT MODE =======
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


// ======= 2. LANGUAGE SWITCH =======
const langSelect = document.getElementById('language-switch');

// Тілдік сөздік
const translations = {
  kk: {
    home: "Басты",
    about: "Мен туралы",
    projects: "Жобалар",
    contact: "Байланыс",
    greeting: "Сәлем, мен Самғар",
    description: "Python және AI бағытында жұмыс істеймін",
    viewProjects: "Жобаларымды қарау",
    aboutMe: "Мен туралы",
    aboutText: "Мен Python және жасанды интеллект бағытында Telegram боттар жасаймын. Қарапайым идеяны іске асыратын өнімге айналдыруды ұнатамын.",
    proj1: "Telegram бот, дауыс хабарламаларын автоматты түрде жіберу үшін жасалған.",
    proj2: "OpenAI негізінде істейтін еске салғыш бот.",
    proj3: "Telegram арқылы криптовалюта бағасын бақылау.",
    send: "Жіберу"
  },
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    greeting: "Hi, I'm Samgar",
    description: "I work with Python and AI technologies",
    viewProjects: "View My Projects",
    aboutMe: "About Me",
    aboutText: "I develop Telegram bots in Python and AI. I love turning simple ideas into working products.",
    proj1: "A Telegram bot for bulk voice message automation.",
    proj2: "AI-powered smart reminder bot using OpenAI.",
    proj3: "Crypto price notifier via Telegram.",
    send: "Send"
  }
};

langSelect.addEventListener('change', () => {
  const lang = langSelect.value;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });
});
