"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "en" | "sk";

export const translations = {
  en: {
    nav: {
      tech: "Tech",
      approach: "Approach",
      projects: "Projects",
      experience: "Journey",
      contact: "Contact",
    },
    hero: {
      headlineRest: "Fullstack developer building custom software.",
      subtext:
        "I design and build tailored applications for businesses of any size, from first idea to daily operation.",
      ctaPrimary: "View projects",
      ctaSecondary: "Contact",
      stackLabel: "Primary stack",
      stackCaption: "design / build / ship",
    },
    techStack: {
      heading: "Tooling That Ships",
      subtext: "Grouped by development and operations so you can scan what I use to build and deliver.",
    },
    approach: {
      heading: "Software shaped around your business",
      subtext: "Every business works differently. I take the time to understand yours before writing a single line of code.",
      items: [
        { title: "Listen first", description: "I start with a conversation, not a template. What matters to your team shapes the plan." },
        { title: "Map the workflow", description: "I study how your business actually runs day to day, then design around that reality." },
        { title: "Build together", description: "Regular check-ins, not a black box. You see progress and can steer it as we go." },
      ],
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
          fullDescription: "Zdravy-projekt is built for high-volume daily school food ordering. It includes external data API integrations, PWA support, notifications, and operational integrations for scalable day-to-day processing.",
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
      tech: "Tech",
      approach: "Prístup",
      projects: "Projekty",
      experience: "Cesta",
      contact: "Kontakt",
    },
    hero: {
      headlineRest: "Fullstack developer, ktorý stavia softvér na mieru.",
      subtext: "Navrhujem a staviam aplikácie na mieru pre firmy akejkoľvek veľkosti, od prvého nápadu po každodennú prevádzku.",
      ctaPrimary: "Zobraziť projekty",
      ctaSecondary: "Kontakt",
      stackLabel: "Hlavný stack",
      stackCaption: "návrh / vývoj / nasadenie",
    },
    techStack: {
      heading: "Nástroje, ktoré fungujú v praxi",
      subtext: "Rozdelené podľa vývoja a prevádzky, aby ste rýchlo videli, s čím staviam a nasadzujem.",
    },
    approach: {
      heading: "Softvér na mieru vášho biznisu",
      subtext: "Každá firma funguje inak. Najprv si nájdem čas pochopiť tú vašu, až potom začínam písať kód.",
      items: [
        { title: "Najprv počúvam", description: "Začínam rozhovorom, nie šablónou. Plán staviam na tom, čo je dôležité pre váš tím." },
        { title: "Zmapujem workflow", description: "Zistím, ako vaša firma reálne funguje deň čo deň, a podľa toho appku navrhnem." },
        { title: "Staviame spolu", description: "Pravidelné konzultácie, žiadna čierna skrinka. Vidíte priebeh a viete ho ovplyvniť." },
      ],
    },
    projects: {
      heading: "Vybrané projekty",
      subtext: "Projekty naprieč produktovým vývojom, automatizáciou a interaktívnymi aplikáciami.",
      inProgress: "Prebieha",
      clickToExpand: "Kliknite pre detail",
      overview: "Prehľad",
      links: "Odkazy",
      sourceCode: "Zdrojový kód",
      thesis: "Bakalárska práca",
      liveApplication: "Živá aplikácia",
      techStackLabel: "Technológie",
      items: {
        "zdravy-projekt": {
          type: "Aplikácia na objednávanie jedla",
          description: "Firemná aplikácia na jednoduchšie objednávanie jedla pre školy s vysokou dennou návštevnosťou.",
          fullDescription: "Zdravý projekt je postavený pre objednávanie jedla vo veľkom objeme pre školy. Zahŕňa integrácie s externými API, podporu PWA, notifikácie a prevádzkové integrácie pre škálovateľné každodenné spracovanie.",
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
      heading: "Cesta a vývoj",
      subtext: "Vzdelanie, tlak z ostrej prevádzky a dodávanie produktov spojené do jedného prístupu k inžinierstvu.",
      items: {
        freelance: {
          role: "Softvérový inžinier",
          company: "Freelance a produktový vývoj",
          description: "Staviam fullstack softvérové produkty od architektúry po nasadenie, s dôrazom na stabilné vydania, čisté CI/CD procesy a praktickú DevOps automatizáciu.",
        },
        university: {
          role: "Študent informatiky",
          company: "Fakulta matematiky, fyziky a informatiky, Univerzita Komenského",
          companySecondary: "Faculty of Science and Technology, University of Tartu",
          description: "Bakalárske a magisterské štúdium informatiky so zameraním na praktické softvérové inžinierstvo, cloud computing, distribuované systémy a návrh systémov.",
        },
        tvjoj: {
          role: "Broadcast technológie a živá produkcia",
          company: "TV JOJ",
          description: "Réžia streamu, réžia opakovaných záberov, grafika a softvérové nástroje pre živú športovú produkciu. Staviam automatizačné nástroje a real-time workflow pod tlakom vysielania naživo.",
        },
      },
    },
    contact: {
      heading: "Postavme niečo poriadne",
      subtext: "Otvorený pre vývoj softvéru na mieru pre firmy akejkoľvek veľkosti, v Bratislave aj na diaľku.",
    },
    footer: {
      madeWith: "Navrhnuté a postavené s",
      madeWithSuffix: "Tomášom Magulom.",
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
      if (storedLocale === "en" || storedLocale === "sk") {
        queueMicrotask(() => {
          if (active) {
            setLocaleState(storedLocale);
          }
        });
      }
    } catch {}

    return () => {
      active = false;
    };
  }, []);

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
