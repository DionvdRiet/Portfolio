// window.onload      = responsiveAnimation()  ;

window.onscroll = function() {
projectenIndicator();
aanHetScrollen();
welkomIntroductie();
roadmappieWelkomHover();
pageScrollIndicator();
pageScrollIndicatorResponsive();
saveNowQuote();
saveNowSchets1();
saveNowSchets2();
saveNowSchets3();
saveNowEindresultaat();
saveNowExpenses();
saveNowToevoegen();
saveNowAnalyse();
saveNowArticles();
saveNowDebt();
volgendeCase();
startAnimation(x);
};

// 1. Alle vertalingen overzichtelijk genest
const translations = {
  nl: {
    common: {
      navWelkom: "Welkom",
      briefTitle: "Opdracht",
      viewCase: "Bekijk case",
      thanksForReading: "Bedankt voor het lezen!",
      readyForCase: "Klaar voor de volgende case study?"
    },

    index: {
        introductie1: "Mijn passie voor design is begonnen op de middelbare school met grafisch design, een essentiële periode waar ik de liefde voor het vak heb ontdekt. Tijdens mijn studie CMD verlegde ik mijn focus naar de gebruiker: hoe transformeer je complexe wensen en vraagstukken naar een intuïtief, digitaal product?",
        introductie2: "Als UX- en Digital Designer werk ik gestructureerd en haal ik de meeste energie uit prototyping en het opzetten van complexe design systems. Dit stelt me in staat om ontwerpen vroegtijdig te testen met gebruikers en in nauwe samenwerking met stakeholders het product continu te verbeteren.",
        scroll: "Scroll om alle projecten te zien",
        projectRoadmappie: "Het designen van een app waarmee je dankzij de community de ultieme reis plant.",
        projectBykarlie: "Het designen van een redesign voor een bestaande kleding webshop.",
        projectSavenow: "Het designen van een applicatie om alles te weten te komen over jouw aankopen en financiële situatie te verbeteren.",
        projectPlaynext: "Het designen van een app waar gebruikers alles te weten komen over aankomende games.",
        beschrijving: "UX- en Digital Designer uit Den Haag"
    },

    contact: {
        email: "E-mail",
        phone: "Telefoon"
    },

    roadmappie: {
      projectDescription: "Reisapp waar de community centraal staat",
      briefText: "Maak een reisapp voor Gen-z'ers en millennials, van deskresearch tot aan branding en hi-fi prototype.",
      calloutDeskresearch: "De reissector is gigantisch. Omdat het plannen en boeken reizen een wereldwijd begrijp zijn en er continu onderzoek wordt gedaan naar reisgedrag- en behoeften heb ik uitsluitend deskresearch uitgevoerd om tot mijn data te komen voor dit project.",
      reisgedragTitle: "Waardevolle patronen ontdekken in reisgedrag",
      reisgedragText: "Via uitgebreid deskresearch verzamelde ik bronnen over het reisgedrag van Gen-Z en Millennials. Door internationale, Europese en Amerikaanse onderzoeken te vergelijken, filterde ik de belangrijkste overlap én ontdekte ik culturele nuances. Deze data vormde de basis voor gerichte ontwerpkeuzes.",
      affinity1: "Affinity Map: Ruwe data per bron",
      affinity2: "Affinity Map: Gecategoriseerd op thema's",
      affinity3: "Belangrijkste inzichten uit Affinity Map",
      calloutPersona: "Deze inzichten zijn verwerkt in persona’s voor de twee doelgroepen: Gen-Z Reiziger en Millennial Reiziger.",
      personaGenZ: "Persona: Gen-Z Reiziger",
      personaMillennial: "Persona: Millennialreiziger",
      designSystemText: "Het gehele designsysteem is van de grond af opgebouwd voor zowel de wireframes als de hi-fi designs.",
      staysTitle: "Het vertrekpunt voor jouw perfecte verblijf",
      staysText: "Vanaf de homepagina ontdek en boek je moeiteloos het ideale verblijf op jouw droombestemming. Snel, overzichtelijk en afgestemd op jouw reisgezelschap.",
      flightsTitle: "Ook de vlucht regel je in de app",
      flightsText: "Vind direct de vlucht die naadloos aansluit op jouw reisschema. Met slimme filters selecteer je duurzamere opties en zie je in één oogopslag hoeveel CO₂-uitstoot je bespaart of compenseert.",
      communityTitle: "De community is het hart van Roadmappie",
      communityText: "Gebruikers kunnen op hun profiel hun eigen top 3 lijsten maken van de stad waarin ze wonen of gewoond hebben. De beste restaurants, activiteiten en bezienswaardigheden voeg je snel en gemakkelijk toe.",
      activityTitle: "Inspiratie voor onvergetelijke momenten",
      activityText: "Van boottocht tot museumbezoek: elke stad heeft een eigen overzichtspagina boordevol inspiratie. Hier vind je de hoogst gewaardeerde ervaringen, tipt door medereizigers én de lokale community.",
      groupTitle: "De complete groepsreis op een centrale plek",
      groupText: "Accommodaties, vluchten, huurauto's en dagplanningen overzichtelijk gebundeld. Op de Group Trip-pagina vloeit alles vlekkeloos samen, zodat je altijd up-to-date bent met je vakantie."
    },

    bykarlie: {
        projectDescription: "Redesign kleding webshop",
        briefText: "Maak een redesign voor een bestaande kledingwebshop.",
        siteAnalysisTitle: "Analyse van de oude site",
        siteAnalysisText: "Aan de start van dit project ben ik begonnen met een heuristic evaluation, met als doel om een algemene indruk te krijgen van de interactie op de website en de aanwezige stijl van teksten, kleurgebruik, afbeeldingen, etc.. Met deze nieuwe informatie heb ik een moodboard samengesteld aan de hand van drie kernwoorden: elegant, modern en casual, aangezien dit de stijl is die de cliënt graag terug wilde zien in haar website.",
        designPhaseTitle: "Ontwerpfase",
        designPhaseText: "Na het bepalen van de stijl ben ik aan de slag gegaan met het opstellen van het design system. Hierbij heb ik bij de interactie elementen gekozen voor Google Material Design 3, vanwege moderne en herkenbare stijl die het uitstraalt.",
        stylesheetCiteText: "Stylesheet: Tekststijlen",
        stylesheetCiteColours: "Stylesheet: Kleuren",
        stylesheetCiteButtons: "Stylesheet: Buttons",
        stylesheetCiteForm: "Stylesheet: Formulier elementen",
        bykarlieResultHome: "Homepagina",
        bykarlieResultProducts: "Productoverzicht",
        bykarlieResultProductDetail: "Productpagina",
        bykarlieResultAboutUs: "'Over ons'-pagina",
        bykarlieResultContact: "Contactpagina"
    },

    savenow: {
        projectDescription: "Verbeter je financiële situatie",
        briefText: "Ontwerp een app waarmee millennials beter inzicht in hun uitgaven krijgen en die hen ondersteunt om van hun schulden af te komen.",
        callout: "Iedereen heeft te maken met geld, jong en oud. Voor de ene persoon is het makkelijk om met geld om te gaan, maar voor de andere kan het lastig zijn om voldoende ervan op de rekening te hebben. Zo blijkt uit onderzoek dat met name millenials, mensen geboren tussen 1986 en 2000, kampen met geldproblemen. Dit project staat in het teken van deze doelgroep.",
        research1: "Millennials geven gemiddeld <span>$478 per maand</span> uit aan niet-essentiële aankopen, zoals restaurants / take-away en luxe artikelen.",
        research2: "Millennials kampen vaak met een hoge studieschuld, met een <span>gemiddelde schuld van $17,126</span> bij studenten die geld lenen voor hun studie.<br></br>Millennials moeten <span>39% meer betalen</span> aan een huis dan baby boomers in 1980",
        schetsen1Title: "Eerste iteratie schetsen",
        schetsen1Text: "De focus bij deze eerste iteratie schetsen lag op het leggen van de basis van het toevoegen-, bijhouden en analyseren van uitgaven en het helpen afbouwen van schulden.",
        schetsen1Cite: "Eerste iteratie schetsen: Bijhouden en analyseren uitgaven en afbouwen van schulden",
        schetsen2Title: "Tweede iteratie schetsen",
        schetsen2Text: "Bij de tweede iteratie is de workflow van het toevoegen van uitgaven op papier gezet en daarnaast is de analyse functionaliteit verder uitgewerkt.",
        schetsen2Cite: "Tweede iteratie schetsen: Toevoegen van uitgaven en verder gewerkt aan analyse functie",
        wireframesText: "Bij de uiteindelijke wireframes is besloten om de uitgaven zo simpel mogelijk weer te geven, omdat de uitgaven gemakkelijk te lezen moeten zijn en de pagina niet te druk moet worden. De gebruiker kan via de 'Analyse-pagina' gemakkelijk meer informatie lezen indien nodig.",
        wireframesCite: "Wireframes: Expenses-, Analysis-, Articles- en Debtpagina",
        resultaatTileTitle: "Herken je uitgaven",
        resultaatTileText: "en houd geld in je zakken!",
        resultaat1Title: "Nooit meer een aankoop over het hoofd zien",
        resultaat1Text: "Door elke uitgave zelf in het systeem te zetten, houd je niet alleen zelf alle aankopen bij, maar ben je ook meer bewust van waar je geld naartoe gaat.",
        resultaat2Title: "Even je nieuwe aankoop doorgeven en daarna verder met je leven",
        resultaat2Text: "In ons hectisch leven gaan we vaak van de ene afspraak naar de andere, heb je nog wel tijd om je aankopen bij te houden? Zeker wel, want met Save Now heb je binnen een minuut je nieuwe aankoop in het systeem gezet!",
        resultaat3Title: "Weet waar je geld naartoe gaat",
        resultaat3Text: "Krijg niet alleen te weten hoeveel je hebt gespendeerd in de afgelopen week, maand of jaar, maar ook waar jouw geld naartoe is gegaan. Heb je een derde spijkerbroek eigenlijk wel nodig?",
        resultaat4Title: "Leer van anderen",
        resultaat4Text: "Soms heb je behoefte aan het juiste advies op het gebied van geld besparen, of nieuwe koopgewoontes. Op de ‘articles’ pagina kan je artikelen lezen én zelf plaatsen.",
        resultaat5Title: "Jij wilt van je schulden af, wij creëren het plan",
        resultaat5Text: "Samen met jou berekenen wij wat verantwoord is om per maand af te lossen aan je schuld. Zie hoeveel je ondertussen al hebt afbetaald en wanneer je eindelijk verlost zal zijn van deze schuld!"
    },

    playnext: {
      projectDescription: "Ontdek je volgende favoriete game",
      briefText: "Ontwerp een app die een duidelijk overzicht biedt aan gamers van de games die binnenkort uitkomen.",
      callout: "Een enquête onder 18 respondenten vormde de basis van mijn onderzoek. Hiermee heb ik waardevolle informatie verkregen over welke elementen belangrijk zijn in een gaming-gerelateerde app en welke websites of apps de doelgroep al gebruikt. Om een breder beeld te krijgen van het aankoopgedrag van gamers, heb ik vervolgens via deskresearch aanvullende informatie verzameld.",
      research1: "71% van de 18-24-jarige mannen speelt op console of PC.",
      research2: "De mannelijke 18-34-jarige gamer:",
      research2a: "Speelt het liefste action games",
      research2b: "Speelt samen met vrienden",
      schetsen1Title: "Eerste iteratie schetsen",
      schetsen1Text: "De focus bij deze eerste iteratie schetsen lag op het leggen van de basis van het toevoegen-, bijhouden en analyseren van uitgaven en het helpen afbouwen van schulden. <br><br> Daarnaast is besloten om op de 'Home-pagina' informatie weer te geven over games die de gebruiker zelf volgt, maar ook games die over het algemeen populair zijn per week. <br><br> Op de 'Following-pagina' wordt bij elke game een timer weergegeven wanneer het spel uitkomt.",
      schetsen1Cite: "Eerste iteratie schetsen: Ontdekken nieuwe games",
      schetsen2Title: "Tweede iteratie schetsen",
      schetsen2Text: "Bij de tweede iteratie schetsen is de focus meer gelegd op het gebruiken van verschillende cards. Aan de hand hiervan is de lay-out verbeterd op de 'Nieuws-pagina', 'Discovery-pagina' en 'Community-pagina'",
      schetsen2Cite: "Tweede iteratie schetsen: Verbetering 'Nieuws-pagina', 'Discovery-pagina' en 'Community-pagina'",
      wireframesText: "Verbeterde homepagina met teller en nieuwsartikelen, gemakkelijk nieuwe games ontdekken per genre en met andere gamers erover praten.",
      wireframesCite: "Wireframes: Verbeterde homepagina, games ontdekken per genre, praten met anderen op 'Community-pagina'",
      resultaatTileTitle: "Ontdek nieuwe games",
      resultaatTileText: "en behaal nieuwe highscores!",
      resultaat1Text: "Bekijk in een overzicht hoe lang het duurt voordat jouw favoriete games uitkomen, krijg het laatste nieuws mee en kom te weten of er een nieuwe trailer uit is gekomen voor een van de games die je volgt!",
      resultaat2Text: "Lees het laatste gaming-gerelateerde nieuws in een handig overzicht. Je kan zelf bepalen of je de meest populaire artikelen leest, de meest recente, of juist artikelen die zijn geschreven over de games die jij volgt. Mocht je een artikel later willen lezen, kan je deze opslaan in je Bookmark lijst.",
      resultaat3Text: "Ontdek nieuwe games door te bekijken wat er binnenkort uit wordt gebracht , sorteer games op genre en krijg aanbevelingen gebaseerd op jouw persoonlijke voorkeuren en activiteit.",
      resultaat4Text: "Krijg meer te weten over een spel door bestaande threads te bekijken of zelf een thread te beginnen. Krijg meer te weten over een spel door bestaande threads te bekijken of zelf een thread te beginnen.",
      resultaat5Text: "Krijg een duidelijk overzicht van op welke dagen er deze maand games uitkomen. Zie daarnaast welke games die je volgt binnenkort uitkomen, of bekijk de volledige lijst."
    },
  },
  en: {
    common: {
      navWelkom: "Welcome",
      briefTitle: "Brief",
      viewCase: "View case",
      thanksForReading: "Thanks for reading!",
      readyForCase: "Ready for the next case study?"
    },

    index: {
        introductie1: "My passion for design began in high school with graphic design—a pivotal period during which I discovered my love for the craft. During my studies in Communication & Multimedia Design (CMD), I shifted my focus to the user: how do you transform complex requirements and challenges into an intuitive digital product?",
        introductie2: "As a UX and digital designer, I work in a structured manner and derive the most energy from prototyping and building complex design systems. This enables me to test designs with users at an early stage and continuously improve the product in close collaboration with stakeholders.",
        scroll: "Scroll to view all projects",
        projectRoadmappie: "Designing an app that lets you plan the ultimate trip, with the help of the community.",
        projectBykarlie: "Designing a redesign for an existing online clothing store.",
        projectSavenow: "Designing an application to learn everything about your purchases and improve your financial situation.",
        projectPlaynext: "Designing an app where users can find out everything about upcoming games.",
        beschrijving: "UX and Digital Designer from The Hague"
    },

    contact: {
        email: "Email",
        phone: "Phone"
    },

    roadmappie: {
      projectDescription: "Travel app centered around the community",
      briefText: "Create a travel app for Gen Z and millennials, covering everything from desk research to branding and a high-fidelity prototype.",
      calloutDeskresearch: "The travel sector is enormous. Since planning and booking trips are global phenomena and research into travel behavior and needs is constantly being conducted, I relied exclusively on desk research to gather the data for this project.",
      reisgedragTitle: "Uncovering valuable patterns in travel behavior",
      reisgedragText: "Through extensive desk research, I gathered sources on the travel behavior of Gen Z and Millennials. By comparing international, European, and American studies, I filtered out key overlaps and identified cultural nuances. This data formed the foundation for targeted design choices.",
      affinity1: "Affinity Map: Raw data per source",
      affinity2: "Affinity Map: Categorized by themes",
      affinity3: "Key insights from the Affinity Map",
      calloutPersona: "These insights were incorporated into personas for the two target groups: Gen Z Traveler and Millennial Traveler.",
      personaGenZ: "Persona: Gen Z Traveler",
      personaMillennial: "Persona: Millennial Traveler",
      designSystemText: "The entire design system was built from the ground up for both the wireframes and hi-fi designs.",
      staysTitle: "The starting point for your perfect stay",
      staysText: "From the home page, effortlessly discover and book the ideal stay at your dream destination. Fast, intuitive, and tailored to your travel group.",
      flightsTitle: "Book your flight directly within the app",
      flightsText: "Instantly find flights that seamlessly fit your travel schedule. Smart filters allow you to select more sustainable options and view your CO₂ savings or offsets at a glance.",
      communityTitle: "Community is at the heart of Roadmappie",
      communityText: "Users can create top 3 lists on their profiles for cities they live or have lived in. Quickly and easily add the best restaurants, activities, and sights.",
      activityTitle: "Inspiration for unforgettable moments",
      activityText: "From boat tours to museum visits: every city features a dedicated overview page packed with inspiration. Discover top-rated experiences recommended by fellow travelers and the local community.",
      groupTitle: "Your entire group trip in one central place",
      groupText: "Accommodations, flights, rental cars, and daily itineraries neatly bundled together. On the Group Trip page, everything flows together seamlessly so you're always up to date on your vacation."
    },

    bykarlie: {
        projectDescription: "Clothing website redesign",
        briefText: "Create a redesign for an existing clothing webshop.",
        siteAnalysisTitle: "Analysis of the old site",
        siteAnalysisText: "At the start of this project, I began with a heuristic evaluation aimed at getting a general impression of the interaction on the website and the existing style of texts, color usage, images, etc. Using this new information, I put together a moodboard based on three keywords: elegant, modern, and casual, as this was the style the client wanted to see reflected in her website.",
        designPhaseTitle: "Design phase",
        designPhaseText: "After defining the style, I started setting up the design system. For the interactive elements, I chose Google Material Design 3 due to the modern and recognizable style it conveys.",
        stylesheetCiteText: "Stylesheet: Text styles",
        stylesheetCiteColours: "Stylesheet: Colors",
        stylesheetCiteButtons: "Stylesheet: Buttons",
        stylesheetCiteForm: "Stylesheet: Form elements",
        resultHome: "Homepage",
        resultProducts: "Product overview",
        resultProductDetail: "Product page",
        resultAboutUs: "'About us' page",
        resultContact: "Contact page"
    },

    savenow: {
        projectDescription: "Improve your financial situation",
        briefText: "Design an app that gives millennials better insight into their spending and helps them clear their debts.",
        callout: "Everyone deals with money, young and old. For some, managing money comes naturally, but for others, keeping enough in their bank account can be a struggle. Research shows that millennials in particular—people born between 1986 and 2000—face financial difficulties. This project focuses on this specific target audience.",
        research1: "Millennials spend an average of <span>$478 per month</span> on non-essential purchases, such as dining out / takeout and luxury items.",
        research2: "Millennials often carry high student debt, with an <span>average debt of $17,126</span> for students who borrow for their education.<br></br>Millennials have to pay <span>39% more</span> for a house than baby boomers did in 1980.",
        schetsen1Title: "First iteration sketches",
        schetsen1Text: "The focus of this first sketch iteration was laying the foundation for adding, tracking, and analyzing expenses, as well as helping users pay off debts.",
        schetsen1Cite: "First iteration sketches: Tracking and analyzing expenses, and paying off debts",
        schetsen2Title: "Second iteration sketches",
        schetsen2Text: "In the second iteration, the workflow for adding expenses was sketched out on paper, and the analytics functionality was further refined.",
        schetsen2Cite: "Second iteration sketches: Adding expenses and further developing the analysis feature",
        wireframesText: "In the final wireframes, it was decided to display expenses as simply as possible, ensuring they remain easy to read without cluttering the page. Users can easily access more information via the 'Analysis' page if needed.",
        wireframesCite: "Wireframes: Expenses, Analysis, Articles, and Debt pages",
        resultaatTileTitle: "Recognize your spending",
        resultaatTileText: "and keep money in your pocket!",
        resultaat1Title: "Never overlook a purchase again",
        resultaat1Text: "By logging every expense yourself, you not only keep track of all your purchases, but also become much more aware of where your money goes.",
        resultaat2Title: "Log your new purchase and get back to your life",
        resultaat2Text: "In our hectic lives, we often rush from one appointment to the next. Do you still have time to track your purchases? Absolutely, because with Save Now you can log a new purchase in under a minute!",
        resultaat3Title: "Know where your money goes",
        resultaat3Text: "Find out not just how much you spent over the past week, month, or year, but also where it went. Do you really need that third pair of jeans?",
        resultaat4Title: "Learn from others",
        resultaat4Text: "Sometimes you need the right advice on saving money or developing better spending habits. On the 'Articles' page, you can read articles and publish your own.",
        resultaat5Title: "You want to get rid of debt, we build the plan",
        resultaat5Text: "Together with you, we calculate a responsible monthly repayment amount for your debt. Track how much you've already paid off and see when you'll finally be debt-free!"
    },

    playnext: {
        projectDescription: "Discover your next favorite game",
        briefText: "Design an app that provides gamers with a clear overview of upcoming game releases.",
        callout: "A survey among 18 respondents formed the basis of my research. This provided valuable insights into which elements are important in a gaming-related app and which websites or apps the target audience already uses. To gain a broader picture of gamers' purchasing behavior, I subsequently gathered additional information through desk research.",
        research1: "71% of 18–24-year-old men play on console or PC.",
        research2: "The male 18–34-year-old gamer:",
        research2a: "Prefers playing action games",
        research2b: "Plays together with friends",
        schetsen1Title: "First iteration sketches",
        schetsen1Text: "The focus of this first sketch iteration was laying the groundwork for adding, tracking, and analyzing expenses, as well as helping reduce debt. <br><br> Additionally, it was decided to display information on the 'Home' page about games the user follows, as well as games that are generally popular per week. <br><br> On the 'Following' page, a countdown timer is displayed for each game showing when it will be released.",
        schetsen1Cite: "First iteration sketches: Discovering new games",
        schetsen2Title: "Second iteration sketches",
        schetsen2Text: "In the second sketch iteration, the focus shifted toward using various cards. Based on this, the layout was improved for the 'News' page, 'Discovery' page, and 'Community' page.",
        schetsen2Cite: "Second iteration sketches: Improvements to 'News', 'Discovery', and 'Community' pages",
        wireframesText: "Improved homepage featuring a countdown timer and news articles, easily discovering new games by genre, and chatting about them with other gamers.",
        wireframesCite: "Wireframes: Improved homepage, discovering games by genre, chatting with others on 'Community' page",
        resultaatTileTitle: "Discover new games",
        resultaatTileText: "and reach new high scores!",
        resultaat1Text: "View in a single overview how long until your favorite games are released, catch up on the latest news, and find out if a new trailer has been dropped for one of the games you follow!",
        resultaat2Text: "Read the latest gaming-related news in a convenient overview. You can choose whether to read the most popular articles, the latest releases, or articles written specifically about the games you follow. If you want to read an article later, you can save it to your Bookmark list.",
        resultaat3Text: "Discover new games by checking out upcoming releases, sort games by genre, and get recommendations based on your personal preferences and activity.",
        resultaat4Text: "Learn more about a game by browsing existing threads or starting one yourself. Learn more about a game by browsing existing threads or starting one yourself.",
        resultaat5Text: "Get a clear overview of which days games are coming out this month. Additionally, see which games you follow are releasing soon, or view the complete list."
    }    
  }
};

// 2. Elementen selecteren
const nlBtn = document.querySelector('[data-lang="nl"]');
const enBtn = document.querySelector('[data-lang="en"]');
const langIndicator = document.querySelector('.lang-indicator');

// 3. Universele vertaalfunctie
function setLanguage(lang) {
  const elementsToTranslate = document.querySelectorAll('[data-i18n]');

  elementsToTranslate.forEach(element => {
    // Splits paden zoals "roadmappie.projectDescription"
    const keyPath = element.getAttribute('data-i18n').split('.');
    
    // Door het translations object navigeren
    let translation = translations[lang];
    keyPath.forEach(key => {
      if (translation) {
        translation = translation[key];
      }
    });

    // Tekst updaten als de vertaling bestaat
    if (translation) {
      element.textContent = translation;
    }
  });

  // Actieve status en indicator-positie bijwerken
  if (lang === 'en') {
    nlBtn.classList.remove('active-lang');
    enBtn.classList.add('active-lang');
    if (langIndicator) langIndicator.style.transform = 'translateX(3.75rem)';
  } else {
    enBtn.classList.remove('active-lang');
    nlBtn.classList.add('active-lang');
    if (langIndicator) langIndicator.style.transform = 'translateX(0rem)';
  }
}

// 4. Event Listeners (vervangers van onclick)
if (nlBtn) {
  nlBtn.addEventListener('click', () => setLanguage('nl'));
}

if (enBtn) {
  enBtn.addEventListener('click', () => setLanguage('en'));
}

// 1. Haal de opgeslagen taal op, of gebruik 'nl' als standaard
let currentLang = localStorage.getItem('selectedLanguage');
if (!currentLang) {
    currentLang = 'nl';
    localStorage.setItem('selectedLanguage', 'nl');
}

// 2. Functie om de pagina-inhoud te updaten naar de gekozen taal
function applyLanguage(lang) {
  // Sla de gekozen taal op in het geheugen van de browser
  localStorage.setItem('selectedLanguage', lang);
  currentLang = lang;

  // Update de actieve status van je NL/EN knoppen met jouw class 'active-lang'
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active-lang');
    } else {
      btn.classList.remove('active-lang');
    }
  });

  // Zoek alle elementen met data-i18n en vul de juiste tekst in
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const keyPath = element.getAttribute('data-i18n').split('.');
    
    // Blader door het translations object
    let translation = translations[lang];
    keyPath.forEach(key => {
      if (translation) translation = translation[key];
    });

    if (translation) {
      element.innerHTML = translation;
    }

    if (lang === 'en') {
    nlBtn.classList.remove('active-lang');
    enBtn.classList.add('active-lang');
    if (langIndicator) langIndicator.style.transform = 'translateX(3.75rem)';
  } else {
    enBtn.classList.remove('active-lang');
    nlBtn.classList.add('active-lang');
    if (langIndicator) langIndicator.style.transform = 'translateX(0rem)';
  }
  });
}

// 3. Voeg event listeners toe aan je taalknoppen
document.querySelectorAll('.lang-btn').forEach(button => {
  button.addEventListener('click', () => {
    const selectedLang = button.dataset.lang;
    applyLanguage(selectedLang);
  });
});

// 4. Voer de functie direct uit zodra de pagina laadt
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
});

function projectenIndicator(){
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("welkom-projecten-indicator").style.opacity = "1";
        document.getElementById("welkom-projecten-indicator").style.transform = "translateX(0%)"; 
        // document.getElementById("welkom-projecten-indicator").style.animation = "indicatorfade 3s backwards";     
    } 

    else{
        document.getElementById("welkom-projecten-indicator").style.transform = "translateX(+10%)";
        // document.getElementById("welkom-projecten-indicator").style.animation = "indicatorfade 3s forwards";
        // document.getElementById("welkom-projecten-indicator").style.animationDelay = "3s";
    }
}


// function aanHetScrollen() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         // document.getElementById("scroll-beneden").style.opacity = "0";
//         document.getElementById("desktop").style.height = "50px";
//         document.getElementById("desktop").style.gridTemplateColumns = "550px auto 550px";
//         document.getElementById("headerContainer").style.height = "50px";
//         document.getElementById("inactive-page-1").style.fontSize = "18px";
//         document.getElementById("active-page-1").style.fontSize = "18px";
//         // document.getElementById("inactive-page").style.alignSelf = "center";
//         // document.getElementById("inactive-page").style.textDecorationColor = "white";
//     } 

//     else{
//         // document.getElementById("scroll-beneden").style.opacity = "1";
//         document.getElementById("desktop").style.height = "inherit";
//         document.getElementById("desktop").style.gridTemplateColumns = "500px auto 500px";
//         document.getElementById("headerContainer").style.height = "50px";
//         document.getElementById("active-page-1").style.fontSize = "18px";
//         document.getElementById("inactive-page-1").style.fontSize = "18px";
//         document.getElementById("active-page").style.margin = "0px 30px";
//         document.getElementById("inactive-page-1").style.margin = "0px 30px";
//         document.getElementById("active-page").style.color = "#131824";
//         document.getElementById("inactive-page-1").style.color = "#131824";
//     }
// }

function roadmappieWelkomHover(){
    document.getElementById("welkom-roadmappie").style.transform = "translateY(-4%)";
    document.getElementById("welkom-roadmappie").style.boxShadow = "0px 10px 20px rgba(0,0,0,0.06)";
    document.getElementById("welkom-roadmappie").style.backgroundPosition = "100% 10%";
    document.getElementById("roadmappieButton").style.backgroundPosition = "90% 46%";
    document.getElementById("roadmappieButton").style.backgroundSize = "8%";
    document.getElementById("roadmappieButton").style.padding = "16px 60px 16px 32px";
}

function roadmappieWelkomNormal(){
    document.getElementById("welkom-roadmappie").style.transform = "translateY(0%)";
    document.getElementById("welkom-roadmappie").style.boxShadow = "none";
    document.getElementById("welkom-roadmappie").style.backgroundPosition = "100% 50%";
    document.getElementById("roadmappieButton").style.backgroundPosition = "100% 50%";
    document.getElementById("roadmappieButton").style.backgroundSize = "0%";
    document.getElementById("roadmappieButton").style.padding = "16px 32px";
    document.getElementById("roadmappieButton").style.transitionDelay = "0s";
    document.getElementById("highlightTitleDesktop").style.transform = "translateY(0%)";
}

function bykarlieWelkomHover(){
    document.getElementById("welkom-bykarlie").style.transform = "translateY(-4%)";
    document.getElementById("welkom-bykarlie").style.boxShadow = "0px 10px 20px rgba(0,0,0,0.06)";
    document.getElementById("welkom-bykarlie").style.backgroundPosition = "0% 10%";
    document.getElementById("bykarlieButton").style.backgroundPosition = "90% 46%";
    document.getElementById("bykarlieButton").style.backgroundSize = "8%";
    document.getElementById("bykarlieButton").style.padding = "16px 60px 16px 32px";
}

function bykarlieWelkomNormal(){
    document.getElementById("welkom-bykarlie").style.transform = "translateY(0%)";
    document.getElementById("welkom-bykarlie").style.boxShadow = "none";
    document.getElementById("welkom-bykarlie").style.backgroundPosition = "0% 50%";
    document.getElementById("bykarlieButton").style.backgroundPosition = "100% 50%";
    document.getElementById("bykarlieButton").style.backgroundSize = "0%";
    document.getElementById("bykarlieButton").style.padding = "16px 32px";
    document.getElementById("bykarlieButton").style.transitionDelay = "0s";
}

function saveNowWelkomHover(){
    document.getElementById("welkom-save-now").style.transform = "translateY(-4%)";
    document.getElementById("welkom-save-now").style.boxShadow = "0px 10px 20px rgba(0,0,0,0.06)";
    document.getElementById("welkom-save-now").style.backgroundPosition = "30% 10%";
    document.getElementById("saveNowButton").style.backgroundPosition = "90% 46%";
    document.getElementById("saveNowButton").style.backgroundSize = "8%";
    document.getElementById("saveNowButton").style.padding = "16px 60px 16px 32px";
}

function saveNowWelkomNormal(){
    document.getElementById("welkom-save-now").style.transform = "translateY(0%)";
    document.getElementById("welkom-save-now").style.boxShadow = "none";
    document.getElementById("welkom-save-now").style.backgroundPosition = "30% 50%";
    document.getElementById("saveNowButton").style.backgroundPosition = "100% 50%";
    document.getElementById("saveNowButton").style.backgroundSize = "0%";
    document.getElementById("saveNowButton").style.padding = "16px 32px";
    document.getElementById("saveNowButton").style.transitionDelay = "0s";
}

function playNextWelkomHover(){
    document.getElementById("welkom-play-next").style.transform = "translateY(-4%)";
    document.getElementById("welkom-play-next").style.boxShadow = "0px 10px 20px rgba(0,0,0,0.06)";
    document.getElementById("welkom-play-next").style.backgroundPosition = "20% 60%";
    document.getElementById("playNextButton").style.backgroundPosition = "90% 46%";
    document.getElementById("playNextButton").style.backgroundSize = "8%";
    document.getElementById("playNextButton").style.padding = "16px 60px 16px 32px";
}

function playNextWelkomNormal(){
    document.getElementById("welkom-play-next").style.transform = "translateY(0%)";
    document.getElementById("welkom-play-next").style.boxShadow = "none";
    document.getElementById("welkom-play-next").style.backgroundPosition = "20% 100%";
    document.getElementById("playNextButton").style.backgroundPosition = "100% 50%";
    document.getElementById("playNextButton").style.backgroundSize = "0%";
    document.getElementById("playNextButton").style.padding = "16px 32px";
    document.getElementById("playNextButton").style.transitionDelay = "0s";
}

function benWelkomHover(){
    document.getElementById("welkom-ben").style.transform = "translateY(-4%)";
    document.getElementById("welkom-ben").style.boxShadow = "0px 10px 20px rgba(0,0,0,0.06)";
    document.getElementById("welkom-ben").style.backgroundPosition = "15% 80%";
    document.getElementById("benButton").style.backgroundPosition = "90% 46%";
    document.getElementById("benButton").style.backgroundSize = "8%";
    document.getElementById("benButton").style.padding = "16px 60px 16px 32px";
}

function benWelkomNormal(){
    document.getElementById("welkom-ben").style.transform = "translateY(0%)";
    document.getElementById("welkom-ben").style.boxShadow = "none";
    document.getElementById("welkom-ben").style.backgroundPosition = "15% 60%";
    document.getElementById("benButton").style.backgroundPosition = "100% 50%";
    document.getElementById("benButton").style.backgroundSize = "0%";
    document.getElementById("benButton").style.padding = "16px 32px";
    document.getElementById("benButton").style.transitionDelay = "0s";
}


const NAME = "once";

function loadWebsiteCheck() {
    if (this.name !== NAME) {
      this.name = NAME;
      loadWebsite();
    } else {
     websiteIsLoaded();
    }
}

function loadWebsite(){
	document.body.style.overflowY = "hidden";
    document.getElementById('loadWebsite').style.opacity = "1";
	document.getElementById('loadWebsiteWit').style.height = "100%";
	document.getElementById('caseSwitchAnimation').style.display = "none";
	document.getElementById('caseSwitchAnimation').style.opacity = "0";
	document.getElementById('loadWebsiteTitel').style.transform = "translateY(0px)";
	setTimeout(1000);
	
	document.getElementById('loadWebsiteBarFilled').style.width = "100%";

	setTimeout(function(){ 
	   document.body.style.overflowY = "scroll";
	   document.getElementById('loadWebsite').style.opacity = "0";
	   document.getElementById('loadWebsiteWit').style.opacity = "0";
	   document.getElementById('loadWebsiteWit').style.display = "none";

	   document.getElementById('welkom-foto-1').style.opacity = "1";
       document.getElementById('welkom-foto-1').style.transform = "translateY(0%)";
       document.getElementById('welkom-yellow').style.width = "100%";

       document.getElementById('welkom-lijn').style.width = "100%";
       document.getElementById('welkom-bericht-title').style.transform = "translateY(0%)";
       document.getElementById('welkom-bericht-title-mobile').style.transform = "translateY(0%)";
       document.getElementById('welkom-bericht-tekst-desktop').style.transform = "translateY(0%)";
       document.getElementById('welkom-bericht-title').style.opacity = "1";
       document.getElementById('welkom-bericht-title-mobile').style.opacity = "1";
       document.getElementById('welkom-bericht-tekst-desktop').style.opacity = "1";

	}, 3000);

	setTimeout(function(){ 
	document.getElementById('caseSwitchAnimation').style.transitionDelay = "2.5s";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(100%)";
	document.getElementById("caseSwitchAnimation").style.height = "100%";
	document.getElementById('welkom').style.opacity = "1";
	}, 900);

	setTimeout(function(){
		document.getElementById('loadWebsite').style.display = "none";
		document.getElementById('caseSwitchAnimation').style.display = "none";
		document.getElementById('desktop').style.animationName = "navDown";
		document.getElementById('desktop').style.opacity = "1";
		document.getElementById('responsive-nav-list').style.display = "none";
        document.body.style.overflowY = "visible";
	}, 4000);
}

function websiteIsLoaded(){
	document.getElementById('welkom').style.opacity = "1";
	document.getElementById('loadWebsiteWit').style.display = "none";
	document.getElementById('caseSwitchAnimation').style.transitionDelay = "none";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(100%)";
	document.getElementById("caseSwitchAnimation").style.height = "100%";
	document.getElementById('loadWebsite').style.display = "none";
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('desktop').style.opacity = "1";

	document.getElementById('welkom-foto-1').style.opacity = "1";
    document.getElementById('welkom-foto-1').style.transform = "translateY(0%)";
    document.getElementById('welkom-yellow').style.width = "100%";

    document.getElementById('welkom-lijn').style.width = "100%";
    document.getElementById('welkom-bericht-title').style.transform = "translateY(0%)";
    document.getElementById('welkom-bericht-title-mobile').style.transform = "translateY(0%)";
    document.getElementById('welkom-bericht-tekst-desktop').style.transform = "translateY(0%)";
    document.getElementById('welkom-bericht-title').style.opacity = "1";
    document.getElementById('welkom-bericht-title-mobile').style.opacity = "1";
    document.getElementById('welkom-bericht-tekst-desktop').style.opacity = "1";

	setTimeout(function(){
		document.getElementById('caseSwitchAnimation').style.display = "none";
		document.getElementById('responsive-nav-list').style.display = "none";
	}, 1000);
}


function pageScrollIndicator(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function pageScrollIndicatorResponsive(){
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBarResponsive").style.width = scrolled + "%";
}



function overlay(){
  document.getElementById('responsive-nav').style.height = "100%";
  document.getElementById('responsive-nav').style.backgroundColor = "#F8F6D4";
  document.getElementById('responsive-nav-top').style.height = "100%";
  document.getElementById('nav-bottom').style.display = "flex";
  document.getElementById('responsive-nav').style.marginBottom = "1rem";
	 document.getElementById('responsive-nav-list-item-1').style.opacity = "1";
    document.getElementById('responsive-nav-list-item-2').style.opacity = "1";
    document.getElementById('responsive-nav').style.height = "100vh";
    document.getElementById('responsive-nav-list').style.display = "flex";
    document.getElementById('responsive-nav-list').style.opacity = "1";
    // document.getElementById('responsive-nav-list').style.backgroundColor = "#FFED00";
    document.getElementById('responsive-nav-list').style.height = "100%";

    document.getElementById('hamburger-1').style.transform = "rotate(-45deg)";
    document.getElementById('hamburger-2').style.transform = "rotate(45deg)";
    document.getElementById('hamburger-2').style.marginTop = "-8px";
    document.getElementById('hamburger-menu').id = "close-overlay";

    document.getElementById("close-overlay").onclick = function(){closeOverlay()};
}

function closeOverlay(){
    document.getElementById('responsive-nav').style.height = "120px";
    document.getElementById('responsive-nav-list').style.display = "none";
    document.getElementById('close-overlay').id = "hamburger-menu";
    document.getElementById('hamburger-1').style.marginBottom = "5px";
    document.getElementById('hamburger-2').style.marginTop = "5px";
    document.getElementById('hamburger-2').style.backgroundColor = "#131824";

    document.getElementById('hamburger-1').style.transform = "rotate(0deg)";
    document.getElementById('hamburger-2').style.transform = "rotate(0deg)";
    document.getElementById('hamburger-2').style.transform = "translateY(0px)";

    document.getElementById("hamburger-menu").onclick = function(){overlay()};
}



function responsiveAnimation(x) {
  if (x.matches) { // If media query matches
    startAnimation();
  } else {
    startResponsiveAnimation();
  }
}

var x = window.matchMedia("(min-width: 1001px)")
responsiveAnimationTest(x)
x.addListener(responsiveAnimationTest)


function openProject(){
	document.getElementById('button-1').style.fontSize = "19px";
	document.getElementById('button-1').style.boxShadow = "none";
	document.getElementById('button-1').style.textShadow = "none";
}

// function aanHetScrollen() {
//     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
//         // document.getElementById("scroll-beneden").style.opacity = "0";
//         document.getElementById("desktop").style.gridTemplateColumns = "40% auto 40%";
//         document.getElementById("desktop").style.backgroundColor = "white";
//         document.getElementById("desktop").style.borderBottom = "1px solid rgba(112,112,112,0.15)";
//         document.getElementById("headerContainer2").style.backgroundColor = "#FFED00";
//         // document.getElementById("headerContainer").style.height = "50px"

//             document.getElementById("active-page-1").style.fontSize = "18px";
//             document.getElementById("inactive-page-1").style.fontSize = "18px";
//             document.getElementById("inactive-page-2").style.fontSize = "18px";

//             document.getElementById("active-page-1").style.color = "#131824";
//             document.getElementById("inactive-page-1").style.color = "#131824";
//             document.getElementById("inactive-page-2").style.color = "#131824";

//     } 

//     else{

//     }
// }

// function headerItemDefaultTwo(){
// 		document.getElementById("headerContainer1").style.transform = "translateX(100%)";
// }

// function headerItemDefaultTwoOff(){
// 		document.getElementById("headerContainer1").style.transform = "translateX(0%)";
// }

// function headerItemOne(){
//         // document.getElementById("headerContainer1").classList.add('headerContainerActive');
//         document.getElementById("headerContainer2").style.transform = "translate(-100%, -2px)";
//         document.getElementById("headerContainer2").style.animationName = "headerContainer";
// }

// function headerItemTwo(){
// 		document.getElementById("headerContainer2").style.transform = "translate(100%, -2px)";
// 		document.getElementById("headerContainer2").style.animationName = "headerContainer";
//         // document.getElementById("headerContainer3").classList.add('headerContainerActive');
// }

// function headerItemOffOne(){
//         document.getElementById("headerContainer1").classList.remove('headerContainerActive');
//         document.getElementById("headerContainer2").style.transform = "translate(0%, -2px)";
// }

// function headerItemOffTwo(){
//         document.getElementById("headerContainer3").classList.remove('headerContainerActive');
//         document.getElementById("headerContainer2").style.transform = "translate(0%, -2px)";
//         document.getElementById("headerContainer2").style.width = "100%";
// }

function headerSizeNormal(){
		// document.getElementById("desktop").style.height = "65px";
		// document.getElementById("desktop").style.gridTemplateColumns = "500px auto 500px";
		// document.getElementById("headerContainer").style.height = "65px";
		// document.getElementById("active-page-1").style.fontSize = "22px";
  //   	document.getElementById("inactive-page-1").style.fontSize = "22px";
  //   	document.getElementById("inactive-page-2").style.fontSize = "22px";
		// document.getElementById("active-page").style.margin = "0px 30px";
	 //    document.getElementById("inactive-page").style.margin = "0px 30px";
    	    // document.getElementById("active-page").style.color = "#131824";
    	    // document.getElementById("inactive-page").style.color = "#131824";
}

function startAnimation() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("sectie-indicatie-achtergrond").style.transform = "translateX(0px)";
        // document.getElementById("case-title").style.transform = "translateY(0px)";
        // document.getElementById("introductie-lijn").style.width = "100%";
        // document.getElementById("projectbeschrijving").style.transform = "translateY(0px)";
        // document.getElementById("projectbeschrijving").style.opacity = "1";
        // document.getElementById("case-title").style.opacity = "1";
        document.getElementById("animateIn1").style.opacity = "1";
        document.getElementById("animateIn2").style.opacity = "1";
        document.getElementById("animateIn3").style.opacity = "1";
        document.getElementById("animateIn4").style.opacity = "1";
        document.getElementById("animateIn5").style.opacity = "1";
        document.getElementById("animateIn6").style.opacity = "1";
        document.getElementById("animateIn7").style.opacity = "1";
    } 
}

function startResponsiveAnimation() {
        document.getElementById("sectie-indicatie-achtergrond").style.transform = "translateX(0px)";
        document.getElementById("case-title").style.transform = "translateY(0px)";
        document.getElementById("case-title").style.opacity = "1";
        document.getElementById("animateIn1").style.opacity = "1";
        document.getElementById("animateIn2").style.opacity = "1";
        document.getElementById("animateIn3").style.opacity = "1";
        document.getElementById("animateIn4").style.opacity = "1";
        document.getElementById("animateIn5").style.opacity = "1";
        document.getElementById("animateIn6").style.opacity = "1";
        document.getElementById("animateIn7").style.opacity = "1";
}

function home(){
	document.getElementById("mobile-nav-title").style.transform = "translateY(+90%)";
	document.getElementById("mobile-nav-title").style.opacity = "0";
	document.getElementById("arrow-left").style.transform = "translateY(+90%)";
	document.getElementById("arrow-left").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("mobile-nav-title").innerHTML = "Welkom";
	document.getElementById("mobile-nav-title").style.transform = "translateY(0%)";
	document.getElementById("mobile-nav-title").style.opacity = "1";
	}, 1000);

	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";
	setTimeout("location.href = 'index.html';",1500)
}

function contact(){
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'contact.html';",1500)
}

function saveNowOn(){
	document.getElementById('welkom-save-now').style.backgroundSize = "103%";
	document.getElementById('welkom-save-now').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";
}

function playNextOn(){
	document.getElementById('welkom-play-next').style.backgroundSize = "103%";
	document.getElementById('welkom-play-next').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";
}

function onNieuw(){
    document.getElementById('nieuweButtonUnderlay').style.transform = "translate(0px, 0px)";
    document.getElementById('volgendeCaseButton').style.transform = "translate(12px, 12px)";
	document.getElementById('volgendeCaseImage').style.backgroundSize = "110%";
}

function onNieuwCard(){
    document.getElementById('nieuweButtonUnderlayCard').style.transform = "translate(0px, 0px)";
    document.getElementById('volgendeCaseButtonCard').style.transform = "translate(12px, 12px)";
    document.getElementById('volgendeCaseNieuwCard').style.backgroundSize = "103%";
    document.getElementById('volgendeCaseNieuwCard').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";
}



/*Mobile*/


function caseOff(){
    document.getElementById('nieuweButtonUnderlay').style.transform = "translate(12px, 12px)";
    document.getElementById('volgendeCaseButton').style.transform = "translate(0px, 0px)";
    document.getElementById('volgendeCaseImage').style.backgroundSize = "100%";

    document.getElementById('welkom-save-now').style.backgroundSize = "100%";
    document.getElementById('welkom-save-now').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";

    document.getElementById('welkom-play-next').style.backgroundSize = "100%";
    document.getElementById('welkom-play-next').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";

    document.getElementById('welkom-ben').style.backgroundSize = "100%";
    document.getElementById('welkom-ben').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";

    document.getElementById('welkom-bykarlie').style.backgroundSize = "100%";
    document.getElementById('welkom-bykarlie').style.transition = "background-size .3s cubic-bezier(.365,.305,0,1)";
}

function roadmappieWelkom(){
    document.getElementById("mobile-nav-title").style.transform = "translateY(+90%)";
    document.getElementById("mobile-nav-title").style.opacity = "0";

    setTimeout(function(){ 
    document.getElementById("mobile-nav-title").innerHTML = "Roadmappie";
    document.getElementById("mobile-nav-title").style.transform = "translateY(0%)";
    document.getElementById("mobile-nav-title").style.opacity = "1";
    document.getElementById("arrow-left-home").style.transform = "translateY(0%)";
    document.getElementById("arrow-left-home").style.opacity = "1";
    }, 1000);

    document.getElementById('caseSwitchAnimation').style.display = "block";
    document.getElementById('caseSwitchAnimation').style.position = "fixed";
    document.getElementById("caseSwitchAnimation").style.height = "100vh";
    document.getElementById("caseSwitchAnimation").style.bottom = "0px";
    document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

    setTimeout("location.href = 'roadmappie.html';",1500)
}

function bykarlieWelkom(){
    document.getElementById("mobile-nav-title").style.transform = "translateY(+90%)";
    document.getElementById("mobile-nav-title").style.opacity = "0";

    setTimeout(function(){ 
    document.getElementById("mobile-nav-title").innerHTML = "ByKarlie";
    document.getElementById("mobile-nav-title").style.transform = "translateY(0%)";
    document.getElementById("mobile-nav-title").style.opacity = "1";
    document.getElementById("arrow-left-home").style.transform = "translateY(0%)";
    document.getElementById("arrow-left-home").style.opacity = "1";
    }, 1000);

    document.getElementById('caseSwitchAnimation').style.display = "block";
    document.getElementById('caseSwitchAnimation').style.position = "fixed";
    document.getElementById("caseSwitchAnimation").style.height = "100vh";
    document.getElementById("caseSwitchAnimation").style.bottom = "0px";
    document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

    setTimeout("location.href = 'bykarlie.html';",1500)
}

function saveNowWelkom(){
	document.getElementById("mobile-nav-title").style.transform = "translateY(+90%)";
	document.getElementById("mobile-nav-title").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("mobile-nav-title").innerHTML = "Save Now";
	document.getElementById("mobile-nav-title").style.transform = "translateY(0%)";
	document.getElementById("mobile-nav-title").style.opacity = "1";
	document.getElementById("arrow-left-home").style.transform = "translateY(0%)";
	document.getElementById("arrow-left-home").style.opacity = "1";
	}, 1000);

	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";
	// document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";

	setTimeout("location.href = 'save-now.html';",1500)
}

function playNextWelkom(){
	document.getElementById("mobile-nav-title").style.transform = "translateY(+90%)";
	document.getElementById("mobile-nav-title").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("mobile-nav-title").innerHTML = "Play Next";
	document.getElementById("mobile-nav-title").style.transform = "translateY(0%)";
	document.getElementById("mobile-nav-title").style.opacity = "1";
	document.getElementById("arrow-left-home").style.transform = "translateY(0%)";
	document.getElementById("arrow-left-home").style.opacity = "1";
	}, 1000);

	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'play-next.html';",1500)
}

function buttonOn(){
    document.getElementById("volgendeCaseImage").style.backgroundSize = "105%";
    document.getElementById("volgendeCaseImage").style.backgroundPosition = "50% 20%";
    document.getElementById("volgendeCaseButton").style.backgroundPosition = "15% 80%";
    document.getElementById("volgendeCaseButton").style.backgroundPosition = "90% 46%";
    document.getElementById("volgendeCaseButton").style.backgroundSize = "8%";
    document.getElementById("volgendeCaseButton").style.padding = "16px 60px 16px 32px";
}

function buttonOff(){
    document.getElementById("volgendeCaseImage").style.backgroundSize = "100%";
    document.getElementById("volgendeCaseImage").style.backgroundPosition = "50% 0%";

    document.getElementById("volgendeCaseButton").style.backgroundSize = "0%";
    document.getElementById("volgendeCaseButton").style.padding = "16px 32px";
}

function saveNowNieuw(){
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'save-now.html';",1500)
}

function playNextNieuw(){
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'play-next.html';",1500)
}

function roadmappieNieuw(){
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'roadmappie.html';",1500)
}

function bykarlieNieuw(){
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'bykarlie.html';",1500)
}

// function saveNow(){
//     document.getElementById('caseSwitchAnimation').style.display = "block";
//     document.getElementById('caseSwitchAnimation').style.opacity = "1";
//     document.getElementById('caseSwitchAnimation').style.position = "fixed";
//     document.getElementById("caseSwitchAnimation").style.height = "100vh";
//     document.getElementById("caseSwitchAnimation").style.bottom = "0px";
//     document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

//     setTimeout("location.href = 'save-now.html';",1500)
// }

// function playNext(){
//     document.getElementById('volgendeCasePlayNext').style.color = "#FFED00";
//     document.getElementById('caseSwitchAnimation').style.display = "block";
//     document.getElementById('caseSwitchAnimation').style.opacity = "1";
//     document.getElementById('caseSwitchAnimation').style.position = "fixed";
//     document.getElementById("caseSwitchAnimation").style.height = "100vh";
//     document.getElementById("caseSwitchAnimation").style.bottom = "0px";
//     document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

//     setTimeout("location.href = 'play-next.html';",1500)
// }

// function benVerlengproces(){
// 	document.getElementById('caseSwitchAnimation').style.display = "block";
// 	document.getElementById('caseSwitchAnimation').style.opacity = "1";
// 	document.getElementById('caseSwitchAnimation').style.position = "fixed";
// 	document.getElementById("caseSwitchAnimation").style.height = "100vh";
// 	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
// 	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

// 	setTimeout("location.href = 'ben-verlengproces.html';",1500)
// }

// function bykarlie(){
// 	document.getElementById('caseSwitchAnimation').style.display = "block";
// 	document.getElementById('caseSwitchAnimation').style.opacity = "1";
// 	document.getElementById('caseSwitchAnimation').style.position = "fixed";
// 	document.getElementById("caseSwitchAnimation").style.height = "100vh";
// 	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
// 	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

// 	setTimeout("location.href = 'bykarlie.html';",1500)
// }



function caseSwitchAnimationDown(){
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById("caseSwitchAnimation").style.transform = "translateX(100%)";
	document.getElementById("caseSwitchAnimation").style.height = "100%";
    document.getElementById("case-header-background").style.opacity = "1";
    document.getElementById("case-header-background").style.transform = "translateY(0%)";
	setTimeout(noOpacity, 600);
	document.getElementById('case-header-title').style.opacity = "1";
	document.getElementById("case-header-title").style.transform = "translateY(0%)";
    document.getElementById("case-header-line").style.width = "100%";
    document.getElementById("projectDescription").style.opacity = "1";
	document.getElementById('case-header-title-responsive').style.opacity = "1";
	document.getElementById("case-header-title-responsive").style.transform = "translateY(0%)";
}

function noOpacity(){
	document.getElementById('caseSwitchAnimation').style.opacity = "0";
	document.getElementById("caseSwitchAnimation").style.display = "none";
	document.getElementById('responsive-nav-list').style.display = "none";

    document.getElementById("projectTitle").style.letterSpacing = "0.25rem";
    document.getElementById("projectTitle").style.opacity = "1";
    document.getElementById("projectType").style.opacity = "1";
    document.getElementById("projectType").style.transform = "translateY(0%)";
    document.getElementById("projectDescription").style.opacity = "1";
    document.getElementById("projectDescription").style.transform = "translateY(0%)"

    document.getElementById("caseHeaderImage").style.backgroundPosition = "52% 20%";
    document.getElementById("caseHeaderImage").style.height = "80%";
}

function linkedIn(){
	window.open('https://www.linkedin.com/in/dion-van-der-riet-217479158/', '_blank');
}

function emailUp(){
	document.getElementById('email-popup').style.display = "flex";
}

function emailDown(){
	document.getElementById('email-popup').style.display = "none";
}

function emailCopied(){
	var copyText = document.getElementById("email-popup-text");
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");

	document.getElementById('emailCopyButton').innerHTML = "GEKOPIËERD";
	document.getElementById('emailCopyButton').style.color = "#FFED00";
	document.getElementById('emailCopy').style.backgroundColor = "#131824";
	document.getElementById('email-popup-text').style.backgroundColor = "#FFED00";
}

function emailCopiedContact(){
    var copyText = document.getElementById("contact-email-text");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

    document.getElementById('contactEmail').value = "Gekopieerd!";
}

function phoneCopiedContact(){
    var copyText = document.getElementById("contact-phone-text");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

    document.getElementById('contactPhone').value = "Gekopieerd!";
}

function emailCopiedContactRes(){
    var copyText = document.getElementById("contact-email-text-res");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

    document.getElementById('contactEmailRes').value = "Gekopieerd!";
}

function phoneCopiedContactRes(){
    var copyText = document.getElementById("contact-phone-text-res");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");

    document.getElementById('contactPhoneRes').value = "Gekopieerd!";
}

function saveNowQuote(){
	if (document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) {
		document.getElementById('doelgroepAnimation').style.opacity = "1";
		document.getElementById('doelgroepBeschrijving').style.opacity = "1";
        document.getElementById('saveNowQuote1').style.opacity = "1";
		document.getElementById('saveNowQuote1').style.transform = "translateY(0%)";
		document.getElementById('saveNowQuote2').style.opacity = "1";
		document.getElementById('saveNowQuote2').style.transform = "translateY(0%)";
		document.getElementById('finance-persona').style.opacity = "1";
    } 
}

function saveNowSchets1(){
	if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
		document.getElementById('full-image-save-now-1').style.opacity = "1";
		document.getElementById('full-image-save-now-1').style.transform = "translateY(0%)";
    } 
}

function saveNowSchets2(){
	if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
		document.getElementById('full-image-save-now-2').style.opacity = "1";
		document.getElementById('full-image-save-now-2').style.transform = "translateY(0%)";
    } 
}

function saveNowSchets3(){
	if (document.body.scrollTop > 3300 || document.documentElement.scrollTop > 3300) {
		document.getElementById('full-image-save-now-3').style.opacity = "1";
		document.getElementById('full-image-save-now-3').style.transform = "translateY(0%)";
    } 
}

function saveNowEindresultaat(){
	if (document.body.scrollTop > 4300 || document.documentElement.scrollTop > 4300) {
		document.getElementById('saveNowEindresultaat').style.opacity = "1";
		document.getElementById('saveNowEindresultaat').style.backgroundSize = "100%";
    } 
}

function saveNowExpenses(){
	if (document.body.scrollTop > 6200 || document.documentElement.scrollTop > 6200) {
		document.getElementById('saveNowExpenses').style.opacity = "1";
		document.getElementById('saveNowExpenses').style.transform = "translateX(0%)";
		document.getElementById('expenses-tekst').style.opacity = "1";
    } 
}

function saveNowToevoegen(){
	if (document.body.scrollTop > 7100 || document.documentElement.scrollTop > 7100) {
		document.getElementById('saveNowToevoegen').style.opacity = "1";
		document.getElementById('saveNowToevoegen').style.transform = "translateX(0%)";
		document.getElementById('toevoegen-tekst').style.opacity = "1";
    } 
}

function saveNowAnalyse(){
	if (document.body.scrollTop > 7600 || document.documentElement.scrollTop > 7600) {
		document.getElementById('saveNowAnalyse').style.opacity = "1";
		document.getElementById('saveNowAnalyse').style.transform = "translateX(0%)";
		document.getElementById('analyse-tekst').style.opacity = "1";
    } 
}

function saveNowArticles(){
	if (document.body.scrollTop > 8200 || document.documentElement.scrollTop > 8200) {
		document.getElementById('saveNowArticles').style.opacity = "1";
		document.getElementById('saveNowArticles').style.transform = "translateX(0%)";
		document.getElementById('articles-tekst').style.opacity = "1";
    } 
}

function saveNowDebt(){
	if (document.body.scrollTop > 8900 || document.documentElement.scrollTop > 8900) {
		document.getElementById('saveNowDebt').style.opacity = "1";
		document.getElementById('saveNowDebt').style.transform = "translateX(0%)";
		document.getElementById('debt-tekst').style.opacity = "1";
    } 
}

function volgendeCase(){
	if (document.body.scrollTop > 8400 || document.documentElement.scrollTop > 8400) {
		document.getElementById('volgendeCase').style.opacity = "1";
		document.getElementById('volgendeCase').style.transform = "translateY(0%)";
		document.getElementById('volgendeCaseNieuw').style.opacity = "1";
		document.getElementById('volgendeCaseNieuwTekst').style.opacity = "1";
		document.getElementById('volgendeCaseNieuwTekst').style.transform = "translateY(0%)";
		document.getElementById('volgendeCaseButton').style.opacity = "1";
		document.getElementById('volgendeCaseButton').style.width = "40%";
		document.getElementById('footer').style.opacity = "1";
		document.getElementById('footer').style.width = "100vw";

		document.getElementById('linkedIn').style.opacity = "1";
		document.getElementById('email').style.opacity = "1";
    } 
}

function saveNowCard(){
	document.getElementById("nav-project-title").style.transform = "translateY(+90%)";
	document.getElementById("nav-project-title").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("nav-project-title").innerHTML = "Save Now";
	document.getElementById("nav-project-title").style.transform = "translateY(0%)";
	document.getElementById("nav-project-title").style.opacity = "1";
	document.getElementById("arrow-left-home").style.transform = "translateY(0%)";
	document.getElementById("arrow-left-home").style.opacity = "1";
	}, 1000);

	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'save-now.html';",1600)
}

function playNextCard(){
	document.getElementById("nav-project-title").style.transform = "translateY(+90%)";
	document.getElementById("nav-project-title").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("nav-project-title").innerHTML = "Play Next";
	document.getElementById("nav-project-title").style.transform = "translateY(0%)";
	document.getElementById("nav-project-title").style.opacity = "1";
	document.getElementById("arrow-left-home").style.transform = "translateY(0%)";
	document.getElementById("arrow-left-home").style.opacity = "1";
	}, 1000);

	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'play-next.html';",1600)
}

function benVerlengprocesCard(){
	document.getElementById("nav-project-title").style.transform = "translateY(+90%)";
	document.getElementById("nav-project-title").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("nav-project-title").innerHTML = "Ben Verlengproces";
	document.getElementById("nav-project-title").style.transform = "translateY(0%)";
	document.getElementById("nav-project-title").style.opacity = "1";
	document.getElementById("arrow-left-home").style.transform = "translateY(0%)";
	document.getElementById("arrow-left-home").style.opacity = "1";
	}, 1000);

	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'ben-verlengproces.html';",1600)
}

function bykarlieCard(){
	document.getElementById("nav-project-title").style.transform = "translateY(+90%)";
	document.getElementById("nav-project-title").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("nav-project-title").innerHTML = "bykarlie";
	document.getElementById("nav-project-title").style.transform = "translateY(0%)";
	document.getElementById("nav-project-title").style.opacity = "1";
	document.getElementById("arrow-left-home").style.transform = "translateY(0%)";
	document.getElementById("arrow-left-home").style.opacity = "1";
	}, 1000);

	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'bykarlie.html';",1600)
}




