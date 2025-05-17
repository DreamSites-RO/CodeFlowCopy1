import React, { useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import FooterRo from "../../components/layout/FooterRo";
import NavbarRo from "../../components/layout/NavbarRo";

import HTMLBegginers from "../../pdfs/HTMLBegginers.pdf";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const animationVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const questionsByLevel = {
  Beginner: [
    {
      question: "Ce înseamnă HTML?",
      options: [
        "Limbaj de Marcare a Textului Hipertext",
        "Limbaj de Marcare a Instrumentelor pentru Acasă",
        "Limbaj de Marcare a Hiperlinkurilor și Textului",
        "Limbaj de Management al Textelor Hiperlinkate",
      ],
      correctIndex: 0,
    },
    {
      question: "Ce tag este utilizat pentru a defini un paragraf în HTML?",
      options: ["<para>", "<p>", "<paragraph>", "<pg>"],
      correctIndex: 1,
    },
    {
      question: "Care tag creează cel mai mare titlu în HTML?",
      options: ["<h6>", "<h1>", "<header>", "<head>"],
      correctIndex: 1,
    },
    {
      question:
        "Care este tag-ul corect pentru a insera o ruptură de linie în HTML?",
      options: ["<br>", "<break>", "<lb>", "<newline>"],
      correctIndex: 0,
    },
    {
      question: "Ce tag este utilizat pentru a defini un hyperlink în HTML?",
      options: ["<link>", "<a>", "<href>", "<hyper>"],
      correctIndex: 1,
    },
    {
      question: "Care este tag-ul corect pentru a insera o imagine?",
      options: [
        '<img src="image.jpg">',
        '<image href="image.jpg">',
        '<pic src="image.jpg">',
        '<picture href="image.jpg">',
      ],
      correctIndex: 0,
    },
    {
      question:
        "Ce tag este utilizat pentru a defini un rând într-un tabel HTML?",
      options: ["<tr>", "<td>", "<table>", "<th>"],
      correctIndex: 0,
    },
    {
      question:
        "Ce tag este utilizat pentru a defini o celulă într-un tabel HTML?",
      options: ["<td>", "<tr>", "<th>", "<cell>"],
      correctIndex: 0,
    },
    {
      question: "Care atribut specifică textul alternativ al unei imagini?",
      options: ["alt", "src", "title", "description"],
      correctIndex: 0,
    },
    {
      question: "Ce tag este utilizat pentru liste neordonate?",
      options: ["<ul>", "<ol>", "<list>", "<li>"],
      correctIndex: 0,
    },
    {
      question: "Ce tag este utilizat pentru elementele dintr-o listă?",
      options: ["<item>", "<li>", "<ul>", "<list>"],
      correctIndex: 1,
    },
    {
      question: "Ce element HTML reprezintă textul evidențiat?",
      options: ["<b>", "<em>", "<strong>", "<italic>"],
      correctIndex: 1,
    },
    {
      question: "Care element HTML face textul îngroșat?",
      options: ["<bold>", "<strong>", "<em>", "<b>"],
      correctIndex: 3,
    },
    {
      question:
        "Ce tag este utilizat pentru conținutul principal al unui document HTML?",
      options: ["<main>", "<body>", "<content>", "<section>"],
      correctIndex: 0,
    },
    {
      question: "Ce tag este utilizat pentru a insera o linie orizontală?",
      options: ["<line>", "<hr>", "<br>", "<horizontal>"],
      correctIndex: 1,
    },
  ],

  Intermediate: [
    {
      question:
        "Ce tag HTML este utilizat pentru a defini o legendă pentru un tabel?",
      options: ["<caption>", "<tablecaption>", "<title>", "<head>"],
      correctIndex: 0,
    },
    {
      question:
        "Ce tag este utilizat pentru a grupa rândurile într-un antet de tabel?",
      options: ["<thead>", "<head>", "<thgroup>", "<tr>"],
      correctIndex: 0,
    },
    {
      question: "Ce face tag-ul <form>?",
      options: [
        "Leagă la o altă pagină",
        "Creează un tabel",
        "Creează un formular de input",
        "Afișează text formatat",
      ],
      correctIndex: 2,
    },
    {
      question: "Ce tip de input este utilizat pentru o casetă de selectare?",
      options: ["text", "checkbox", "radio", "option"],
      correctIndex: 1,
    },
    {
      question: "Ce tag este utilizat pentru a încorpora un videoclip?",
      options: ["<video>", "<media>", "<movie>", "<embed>"],
      correctIndex: 0,
    },
    {
      question: "Ce tag adaugă o etichetă pentru un input de formular?",
      options: ["<label>", "<formlabel>", "<caption>", "<span>"],
      correctIndex: 0,
    },
    {
      question: "Ce specifică atributul 'action' în tag-ul <form>?",
      options: [
        "Metoda formularului",
        "Tipul formularului",
        "URL-ul pentru a trimite datele formularului",
        "Tipul de validare",
      ],
      correctIndex: 2,
    },
    {
      question: "Ce tag este utilizat pentru a include JavaScript în HTML?",
      options: ["<script>", "<js>", "<javascript>", "<code>"],
      correctIndex: 0,
    },
    {
      question: "Ce definește atributul 'method' într-un formular?",
      options: [
        "Formatul inputului",
        "Acțiunea formularului",
        "Tipul de trimitere",
        "Tipul cererii HTTP",
      ],
      correctIndex: 3,
    },
    {
      question: "Ce tag este utilizat pentru a crea o listă derulantă?",
      options: ["<select>", "<dropdown>", "<list>", "<options>"],
      correctIndex: 0,
    },
    {
      question:
        "Care atribut HTML este utilizat pentru a defini stiluri inline?",
      options: ["css", "style", "class", "styles"],
      correctIndex: 1,
    },
    {
      question: "Cum faci un input de text obligatoriu?",
      options: ['required="true"', "input-required", "required", 'must="true"'],
      correctIndex: 2,
    },
    {
      question: "Care este tag-ul corect pentru o secțiune de navigare?",
      options: ["<nav>", "<navigate>", "<navbar>", "<menu>"],
      correctIndex: 0,
    },
    {
      question: "Ce tag este utilizat pentru a adăuga o ruptură de linie?",
      options: ["<lb>", "<br>", "<break>", "<newline>"],
      correctIndex: 1,
    },
    {
      question: "Ce face <fieldset> într-un formular?",
      options: [
        "Creează o casetă de text",
        "Grupază elemente legate",
        "Adaugă o imagine",
        "Adaugă un player video",
      ],
      correctIndex: 1,
    },
  ],

  Advanced: [
    {
      question: "Ce face atributul 'defer' într-un tag <script>?",
      options: [
        "Întârzie execuția scriptului până ce analiza HTML este completă",
        "Opresc execuția scriptului",
        "Funcționează doar cu async",
        "Se utilizează pentru scripturi inline",
      ],
      correctIndex: 0,
    },
    {
      question: "Ce face atributul 'async' într-un tag <script>?",
      options: [
        "Încarcă scriptul în ordine",
        "Execuția scriptului începe după ce DOM-ul este gata",
        "Execuția scriptului începe imediat ce este descărcat",
        "Ignoră scriptul",
      ],
      correctIndex: 2,
    },
    {
      question: "Care este scopul tag-ului <template>?",
      options: [
        "Definirea de template-uri reutilizabile",
        "Stocarea codului JavaScript",
        "Definirea CSS-ului inline",
        "Gruparea rândurilor unui tabel",
      ],
      correctIndex: 0,
    },
    {
      question: "Ce tag este utilizat pentru grafica vectorială scalabilă?",
      options: ["<svg>", "<canvas>", "<graphics>", "<draw>"],
      correctIndex: 0,
    },
    {
      question: "Care este scopul tag-ului <canvas>?",
      options: [
        "Redă grafică bitmap dinamică",
        "Creează tabele",
        "Redă SVG",
        "Creează formulare",
      ],
      correctIndex: 0,
    },
    {
      question: "Ce atribut folosești pentru a face un câmp readonly?",
      options: ["readonly", "disabled", "no-edit", "fixed"],
      correctIndex: 0,
    },
    {
      question: "Care este diferența dintre <section> și <div>?",
      options: [
        "<section> are semnificație semantică",
        "Nicio diferență",
        "<div> este doar pentru anteturi",
        "<section> este depreciat",
      ],
      correctIndex: 0,
    },
    {
      question: "Ce element este utilizat pentru a încorpora pagini externe?",
      options: ["<iframe>", "<embed>", "<frame>", "<object>"],
      correctIndex: 0,
    },
    {
      question: "Ce tag definește metadatele unui document HTML?",
      options: ["<meta>", "<head>", "<data>", "<info>"],
      correctIndex: 0,
    },
    {
      question: "Care este metoda implicită pentru trimiterea unui formular?",
      options: ["POST", "GET", "PUT", "SUBMIT"],
      correctIndex: 1,
    },
    {
      question:
        "Care atribut specifică un indiciu scurt pentru câmpurile de input?",
      options: ["placeholder", "title", "hint", "alt"],
      correctIndex: 0,
    },
    {
      question: "Ce face elementul <output>?",
      options: [
        "Afișează rezultatul unei calcule",
        "Creează loguri de consolă",
        "Iesă o variabilă",
        "Stochează informații de depanare",
      ],
      correctIndex: 0,
    },
    {
      question: "Cum grupezi elementele inline semnificativ?",
      options: ["<span>", "<group>", "<inline>", "<div>"],
      correctIndex: 0,
    },
    {
      question: "Ce tag ai folosi pentru a marca o fereastră de dialog?",
      options: ["<dialog>", "<box>", "<modal>", "<popup>"],
      correctIndex: 0,
    },
    {
      question: "Ce face atributul 'contenteditable'?",
      options: [
        "Permite utilizatorului să editeze conținutul",
        "Dezactivează editarea de către utilizator",
        "Adaugă un rezumat de conținut",
        "Face conținutul ascuns",
      ],
      correctIndex: 0,
    },
  ],
};

const LearnHTMLPage = () => {
  const [level, setLevel] = useState("Beginner");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const currentQuestions = questionsByLevel[level];
  const currentQuestion = currentQuestions[currentIndex];

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);

    if (index === currentQuestion.correctIndex) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (currentIndex + 1 < currentQuestions.length) {
        setCurrentIndex((prev) => prev + 1);
        setSelected(null);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelected(null);
    setScore(0);
    setShowScore(false);
  };

  const getOptionClass = (index) => {
    if (selected === null) return "bg-gray-800 hover:bg-gray-700";
    if (index === currentQuestion.correctIndex) return "bg-green-600";
    if (index === selected) return "bg-red-600";
    return "bg-gray-800";
  };

  return (
    <>
      <NavbarRo />

      {/* Hero section  */}
      <div
        className="w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: "url('/htmlbanner.jpg')" }}
      >
        <div className="bg-learn-gradient w-full h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col max-w-2xl items-start md:items-start sm:items-center text-left mx-auto md:mx-0">
              {/* Title section */}
              <motion.div
                className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start items-center"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={0}
              >
                <span className="flex items-center gap-2 bg-gray-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Incepator
                </span>
                <div className="flex items-center justify-center">
                  <p className="uppercase tracking-wider text-xs text-gray-deschis">
                    Curs
                  </p>
                </div>
              </motion.div>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl text-white font-bold font-pixel mb-4"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={1}
              >
                HTML
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg md:text-xl font-bold text-text-gray font-poppins mb-10 sm:mb-8 max-w-xl"
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={2}
              >
                Învață elementele fundamentale ale dezvoltării web, inclusiv
                structura și marcarea semantică cu bazele HTML.
              </motion.p>
              <motion.div
                variants={fadeUpVariant}
                initial="hidden"
                animate="visible"
                custom={3}
              >
                <a href={HTMLBegginers} target="_blank">
                  <button className="font-semibold text-sm sm:text-base border-2 rounded-[10px] text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20 font-pixel px-6 sm:px-8 py-2 sm:py-3 transition-colors duration-500">
                    Începe să înveți
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      <div className="w-full max-w-7xl mx-auto flex justify-start px-4 sm:px-6 lg:px-8 pt-12 lg:pt-24">
        <motion.div
          className="text-left mb-8"
          initial="hidden"
          whileInView="visible"
          variants={animationVariants}
          viewport={{ once: true }}
        >
          <h1 className="flex flex-row items-center gap-2 text-base sm:text-lg md:text-xl drop-shadow-2xl text-gray-deschis font-pixel leading-snug">
            Testează-ți cunoștințele
          </h1>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-4 px-4 sm:px-6 lg:px-8 ">
        {/* Right - Quiz (Now on the left) */}
        <div className="w-full md:w-3/4 bg-[#0F111A] hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 border-2 border-gray-700 rounded-xl p-6 shadow-lg font-poppins text-text-gray">
          {showScore ? (
            <div className="flex flex-col items-center gap-6">
              <div className="text-white text-xl font-bold text-center">
                Ai obținut {score} din {currentQuestions.length}!
              </div>
              <button
                onClick={handleReset}
                className="bg-yellow-ok text-black px-6 py-2 rounded-md font-bold hover:bg-yellow-400 transition-all duration-300"
              >
                Încearcă din nou!
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-white mb-4">
                Întrebarea {currentIndex + 1} din {currentQuestions.length}
              </h2>
              <p className="text-lg text-text-gray mb-6">
                {currentQuestion.question}
              </p>
              <div className="flex flex-col gap-4">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`w-full text-left text-sm sm:text-base py-3 px-4 rounded-md text-white font-semibold transition-all duration-300 ${getOptionClass(
                      idx
                    )}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Left - Tabs (Now on the right) */}
        <div className="flex flex-col w-full md:w-1/4 gap-4">
          <div className="flex flex-col gap-4 w-full mx-auto bg-[#0F111A] hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 border-2 border-gray-700 rounded-lg shadow-lg font-poppins text-left p-4">
            {["Beginner", "Intermediate", "Advanced"].map((lvl) => (
              <button
                key={lvl}
                onClick={() => {
                  setLevel(lvl);
                  setCurrentIndex(0);
                  setSelected(null);
                  setScore(0);
                  setShowScore(false);
                }}
                // <button className="  text-yellow-ok border-yellow-ok bg-yellow-ok bg-opacity-10 hover:bg-opacity-20">

                className={`w-full sm:text-base border-2 rounded-[10px] rounded-md font-semibold font-poppins px-4 sm:px-6 py-2 sm:py-3 transition-colors duration-500 ${
                  level === lvl
                    ? "bg-yellow-ok bg-opacity-20 text-yellow-ok border-yellow-ok"
                    : "bg-gray-800 text-text-gray"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <div className="mt-6 w-full font-poppins mx-auto bg-[#0F111A] hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 border-2 border-gray-700 rounded-lg shadow-lg font-poppins text-text-gray font-semibolds text-sm p-4">
            <p>
              Testează-ți cunoștințele de HTML cu quizuri rapide bazate pe
              nivelul tău. Alege un nivel și începe să răspunzi!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <motion.div
          className="text-left mb-8"
          initial="hidden"
          whileInView="visible" // Animation triggers when the element is in view
          variants={animationVariants}
          viewport={{ once: true }}
        >
          <h1 className="flex flex-row items-center gap-2 text-base sm:text-lg md:text-xl drop-shadow-2xl text-gray-deschis font-pixel mb-4 leading-snug">
            Exploreaza mai mult
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* HTML Card */}
          <Link to="/learnhtml">
            <div className="w-full hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
              <div className="relative">
                <img
                  src="/htmlbanner.jpg"
                  alt="HTML Course"
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-small text-gray-deschis uppercase tracking-wide">
                  Curs
                </p>
                <h2 className="text-xl font-bold">HTML</h2>
                <p className="text-text-gray text-sm mt-2">
                  Învață elementele fundamentale ale dezvoltării web, inclusiv
                  structura și marcarea semantică cu...
                </p>
                <div className="mt-4 flex items-center">
                  <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                    INCEPATOR
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* CSS Card */}
          <div className="w-full hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
            <div className="relative">
              <img
                src="/cssbanner.jpg"
                alt="CSS Course"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-small text-gray-deschis uppercase tracking-wide">
                Curs
              </p>
              <h2 className="text-xl font-bold">CSS</h2>
              <p className="text-text-gray text-sm mt-2">
                Stăpânește elementele fundamentale ale stilizării, inclusiv
                culorile, layout-urile și designul responsiv cu...
              </p>
              <div className="mt-4 flex items-center">
                <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Incepator
                </span>
              </div>
            </div>
          </div>

          {/* JS Card */}
          <div className="w-full hover:bg-[#0F112A] hover:bg-opacity-70 transition-all duration-500 bg-[#0F111A] border-2 font-poppins border-gray-700 rounded-lg text-left overflow-hidden shadow-lg text-text-gray">
            <div className="relative">
              <img
                src="/javascriptbanner.jpg"
                alt="JavaScript Course"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-small text-gray-deschis uppercase tracking-wide">
                Curs
              </p>
              <h2 className="text-xl font-bold">JavaScript</h2>
              <p className="text-text-gray text-sm mt-2">
                Învață elementele fundamentale ale JavaScript, inclusiv
                variabile, funcții și gestionarea evenimentelor cu...
              </p>
              <div className="mt-4 flex items-center">
                <span className="flex items-center gap-2 bg-gray-700 text-gray-200 text-xs font-bold px-3 py-1 rounded-full">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Incepator
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterRo />
    </>
  );
};

export default LearnHTMLPage;
