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
        projectDescription: "Verbeter je financiële situatie"
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
        projectDescription: "Improve your financial situation"
    },
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
	document.getElementById('responsive-nav-list-item-1').style.opacity = "1";
    document.getElementById('responsive-nav-list-item-2').style.opacity = "1";
    document.getElementById('responsive-nav').style.height = "100vh";
    document.getElementById('responsive-nav-list').style.display = "flex";
    document.getElementById('responsive-nav-list').style.opacity = "1";
    document.getElementById('responsive-nav-list').style.backgroundColor = "#FFED00";
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
	document.getElementById("arrow-left-mobile").style.transform = "translateY(+90%)";
	document.getElementById("arrow-left-mobile").style.opacity = "0";

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




