"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "en" | "sk";

export const translations = {
  en: {
    nav: {
      approach: "Approach",
      projects: "Projects",
      stack: "Stack",
      experience: "Journey",
      contact: "Contact",
    },
    hero: {
      headlineRest: "Fullstack developer building custom software.",
      subtext:
        "I design and build tailored applications for businesses of any size, from first idea to daily operation.",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact",
      iteration: {
        eyebrow: "Built in iterations",
        heading: "Small steps. Better software.",
        description: "From an idea to a working version. Your feedback shapes what comes next.",
        accessibleLabel: "An iterative cycle: design, build, review, then return to design with your feedback.",
        steps: [
          { label: "Plan", title: "Define the next step", description: "Agree on what matters most.", detail: "We start with your team and the way your business works. Together, we choose a clear, useful next step and sketch how it should work." },
          { label: "Build", title: "Build a working version", description: "Turn the plan into something real.", detail: "I build a small, working part of the application. You see progress along the way and get something you can actually try in your daily work." },
          { label: "Review", title: "Review it together", description: "Try it. Share what could be better.", detail: "We look at what works and what needs adjusting. Your experience shapes the next iteration, so the software keeps getting closer to what you need." },
        ],
        feedback: "Your feedback starts the next iteration.",
        footer: "A little better. Every cycle.",
        pause: "Pause animation",
        play: "Play animation",
      },
    },
    approach: {
      heading: "Software shaped around your business",
      readMore: "How I work",
      subtext: "Every business works differently. I take the time to understand yours before writing a single line of code.",
      items: [
        { title: "Listen first", label: "Listen", description: "I start with a conversation, not a template. What matters to your team shapes the plan." },
        { title: "Map the workflow", label: "Map", description: "I study how your business actually runs day to day, then design around that reality." },
        { title: "Build together", label: "Build", description: "Regular check-ins, not a black box. You see progress and can steer it as we go." },
      ],
    },
    stack: {
      heading: "Primary stack",
      subtext: "The tools I reach for most often. My work isn't limited to this list, I adapt the stack to whatever the project actually needs.",
    },
    projects: {
      heading: "Selected Work",
      subtext: "Projects across product engineering, automation, and interactive applications.",
      inProgress: "In Progress",
      clickToExpand: "Click to Expand",
      overview: "Overview",
      links: "Links",
      sourceCode: "Source Code",
      thesis: "Bachelor's Thesis",
      liveApplication: "Live Application",
      techStackLabel: "Tech Stack",
      items: {
        "zdravy-projekt": {
          type: "Food Ordering Application",
          description: "A company application for easier food ordering by schools with many daily users.",
          fullDescription: "zdravy-projekt is built for high-volume daily school food ordering. It includes external data API integrations, PWA support, notifications, and operational integrations for scalable day-to-day processing.",
        },
        "e-plant": {
          type: "E-Commerce Application",
          description: "An e-commerce app for selling dental implants and courses.",
          fullDescription: "e-plant is an e-commerce platform for dental implants and courses. It includes warehouse workflows, notifications, and integrations with accounting software and shipping companies.",
        },
        eventer: {
          type: "Redmine Plugin",
          description: "Automated task assignment plugin for Redmine based on qualifications and availability.",
          fullDescription: "Eventer is an automation-focused Redmine plugin that helps assign tasks to suitable team members. The aim is better project flow, less manual management work, and consistent assignment logic.",
        },
        quizwizz: {
          type: "UI/UX Application",
          description: "A UI/UX-focused interactive quiz platform with instant scoring, real-time competition, and admin controls.",
          fullDescription: "QuizWizz is primarily a UI/UX-driven application focused on fast interaction, clear navigation, and polished user flows for quiz sessions, scoring, and administration.",
        },
      },
    },
    experience: {
      heading: "Journey & Momentum",
      subtext: "Education, production pressure, and product delivery combined into one engineering approach.",
      items: {
        freelance: {
          role: "Software Engineer",
          company: "Freelance & Product Development",
          description: "Building fullstack software products from architecture to deployment, with focus on stable releases, clean CI/CD flows, and practical DevOps automation.",
        },
        university: {
          role: "Student of Computer Science",
          company: "Faculty of Mathematics, Physics and Informatics, Comenius University",
          companySecondary: "Faculty of Science and Technology, University of Tartu",
          description: "Bachelor's and master's track in Computer Science with focus on practical software engineering, cloud computing, distributed systems, and system design.",
        },
        tvjoj: {
          role: "Broadcast Technology & Live Production",
          company: "TV JOJ",
          description: "Stream directing, replay operations, graphics, and software tooling for live sports production. Built automation utilities and real-time workflows under high-pressure broadcast conditions.",
        },
      },
    },
    contact: {
      heading: "Let's Build Something Sharp",
      subtext: "Open to building custom software for businesses of any size, in Bratislava or remote.",
    },
    footer: {
      madeWith: "Designed and built with",
      madeWithSuffix: "by Tomáš Magula.",
    },
    common: {
      toggleMenu: "Toggle menu",
      goToTop: "Go to top",
      switchLanguage: "Switch language",
    },
  },
  sk: {
    nav: {
      approach: "Prístup",
      projects: "Projekty",
      stack: "Technológie",
      experience: "Skúsenosti",
      contact: "Kontakt",
    },
    hero: {
      headlineRest: "Vyvíjam webové aplikácie na mieru.",
      subtext: "Navrhujem a staviam aplikácie na mieru pre firmy akejkoľvek veľkosti, od prvého nápadu po každodennú prevádzku.",
      ctaPrimary: "Zobraziť projekty",
      ctaSecondary: "Kontakt",
      iteration: {
        eyebrow: "Vývoj krok za krokom",
        heading: "Postupne k lepšiemu riešeniu.",
        description: "Navrhneme riešenie, vytvorím funkčnú verziu a spoločne ju vyskúšame. Podľa vašich skúseností pokračujeme ďalej.",
        accessibleLabel: "Opakujúci sa postup: návrh, vývoj, spätná väzba a návrh ďalších úprav.",
        steps: [
          { label: "Návrh", title: "Dohodneme sa, čo vyriešime", description: "Vyberieme, čo má teraz zmysel.", detail: "Najprv sa porozprávame o tom, ako pracujete a čo vám prácu komplikuje. Spoločne si určíme priority a navrhneme konkrétne riešenie." },
          { label: "Vývoj", title: "Vytvorím funkčnú verziu", description: "Riešenie si môžete vyskúšať.", detail: "Riešenie vyvíjam po menších častiach. Priebežne vidíte výsledky a nové funkcie si môžete vyskúšať priamo pri práci, ešte pred dokončením celej aplikácie." },
          { label: "Spätná väzba", title: "Vyskúšame a doladíme", description: "Poviete mi, čo funguje a čo zlepšiť.", detail: "Spoločne prejdeme vaše skúsenosti s používaním. Zistíme, čo funguje, čo treba upraviť a čo doplniť. Podľa toho naplánujeme ďalší krok." },
        ],
        feedback: "Podľa vašej spätnej väzby naplánujeme ďalší krok.",
        footer: "Každá verzia posúva riešenie ďalej.",
        pause: "Pozastaviť animáciu",
        play: "Spustiť animáciu",
      },
    },
    approach: {
      heading: "Softvér, ktorý sa prispôsobí vašej práci",
      readMore: "Ako pracujem",
      subtext: "Každá firma funguje inak. Preto najprv spoznám tú vašu a riešenie rozvíjam postupne, podľa toho, čo v praxi potrebujete.",
      items: [
        { title: "Najprv sa porozprávame", label: "Rozhovor", description: "Zaujíma ma, ako pracujete, čo vám chýba a čo by vášmu tímu uľahčilo deň." },
        { title: "Spoznám vaše pracovné postupy", label: "Návrh", description: "Pozriem sa, ako vaša firma funguje v praxi, a podľa toho navrhnem aplikáciu." },
        { title: "Riešenie priebežne ladíme", label: "Spolupráca", description: "Pravidelne vám ukazujem výsledky. Môžete si ich vyskúšať a ovplyvniť ďalší vývoj." },
      ],
    },
    stack: {
      heading: "Technológie, s ktorými pracujem",
      subtext: "Toto sú technológie, ktoré používam najčastejšie. Pre každý projekt vyberám tie, ktoré najlepšie zodpovedajú jeho potrebám.",
    },
    projects: {
      heading: "Vybrané projekty",
      subtext: "Výber aplikácií a nástrojov, na ktorých pracujem alebo som pracoval.",
      inProgress: "Vo vývoji",
      clickToExpand: "Zobraziť detail",
      overview: "Prehľad",
      links: "Odkazy",
      sourceCode: "Zdrojový kód",
      thesis: "Bakalárska práca",
      liveApplication: "Otvoriť aplikáciu",
      techStackLabel: "Technológie",
      items: {
        "zdravy-projekt": {
          type: "Aplikácia na objednávanie jedla",
          description: "Firemná aplikácia na jednoduchšie objednávanie jedla pre školy s vysokou dennou návštevnosťou.",
          fullDescription: "zdravy-projekt spracúva každodenné objednávky jedla pre školy. Aplikácia prepája externé API, podporuje inštaláciu ako PWA a posiela upozornenia. Je navrhnutá na spracovanie veľkého počtu objednávok.",
        },
        "e-plant": {
          type: "E-commerce aplikácia",
          description: "E-commerce aplikácia na predaj dentálnych implantátov a kurzov.",
          fullDescription: "e-plant je e-commerce platforma pre dentálne implantáty a kurzy. Zahŕňa skladové procesy, notifikácie a integrácie s účtovným softvérom a prepravnými spoločnosťami.",
        },
        eventer: {
          type: "Redmine plugin",
          description: "Plugin pre Redmine na automatické priraďovanie úloh podľa kvalifikácie a dostupnosti.",
          fullDescription: "Eventer je plugin pre Redmine zameraný na automatizáciu, ktorý pomáha priraďovať úlohy vhodným členom tímu. Cieľom je plynulejší priebeh projektu, menej manuálnej práce a konzistentná logika priraďovania.",
        },
        quizwizz: {
          type: "UI/UX aplikácia",
          description: "Interaktívna kvízová platforma zameraná na UI/UX s okamžitým vyhodnotením, súťažou v reálnom čase a administráciou.",
          fullDescription: "QuizWizz je aplikácia zameraná predovšetkým na UI/UX, s dôrazom na rýchlu interakciu, prehľadnú navigáciu a doladené flow pre kvízy, vyhodnotenie a administráciu.",
        },
      },
    },
    experience: {
      heading: "Skúsenosti a vzdelanie",
      subtext: "Pri vývoji spájam štúdium informatiky so skúsenosťami z reálnych projektov a živého vysielania.",
      items: {
        freelance: {
          role: "Softvérový inžinier",
          company: "Freelance a produktový vývoj",
          description: "Vyvíjam aplikácie od návrhu architektúry po nasadenie. Venujem sa frontendu aj backendu, automatizácii nasadzovania a spoľahlivej prevádzke.",
        },
        university: {
          role: "Študent informatiky",
          company: "Fakulta matematiky, fyziky a informatiky, Univerzita Komenského",
          companySecondary: "Faculty of Science and Technology, University of Tartu",
          description: "Bakalárske a magisterské štúdium informatiky so zameraním na praktické softvérové inžinierstvo, cloud computing, distribuované systémy a návrh systémov.",
        },
        tvjoj: {
          role: "Technológie živého vysielania",
          company: "TV JOJ",
          description: "Pri živých športových prenosoch sa venujem réžii streamu, opakovaným záberom a grafike. Vyvíjam aj nástroje, ktoré automatizujú prácu počas vysielania.",
        },
      },
    },
    contact: {
      heading: "Poďme vytvoriť niečo užitočné",
      subtext: "Máte nápad na aplikáciu alebo potrebujete zlepšiť existujúcu? Ozvite sa mi. Spolupracujem osobne aj na diaľku.",
    },
    footer: {
      credit: "Navrhol a vytvoril Tomáš Magula.",
    },
    common: {
      toggleMenu: "Prepnúť menu",
      goToTop: "Späť hore",
      switchLanguage: "Prepnúť jazyk",
    },
  },
} as const;

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[Locale];
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    let active = true;

    try {
      const storedLocale = localStorage.getItem("locale");
      const browserLanguage = navigator.language || navigator.languages?.[0] || "";
      const nextLocale: Locale =
        storedLocale === "en" || storedLocale === "sk"
          ? storedLocale
          : browserLanguage.toLowerCase().startsWith("sk")
            ? "sk"
            : "en";

      queueMicrotask(() => {
        if (active) {
          setLocaleState(nextLocale);
        }
      });
    } catch {}

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try {
      localStorage.setItem("locale", nextLocale);
    } catch {}
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
