window.onscroll = function(){
projectenIndicator();
aanHetScrollen();
welkomIntroductie();
roadmappieWelkomHover();
};

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


function aanHetScrollen() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        // document.getElementById("scroll-beneden").style.opacity = "0";
        document.getElementById("desktop").style.height = "50px";
        document.getElementById("desktop").style.gridTemplateColumns = "550px auto 550px";
        document.getElementById("headerContainer").style.height = "50px";
        document.getElementById("inactive-page-1").style.fontSize = "18px";
        document.getElementById("active-page-1").style.fontSize = "18px";
        // document.getElementById("inactive-page").style.alignSelf = "center";
        // document.getElementById("inactive-page").style.textDecorationColor = "white";
    } 

    else{
        // document.getElementById("scroll-beneden").style.opacity = "1";
        document.getElementById("desktop").style.height = "inherit";
        document.getElementById("desktop").style.gridTemplateColumns = "500px auto 500px";
        document.getElementById("headerContainer").style.height = "50px";
        document.getElementById("active-page-1").style.fontSize = "18px";
        document.getElementById("inactive-page-1").style.fontSize = "18px";
        document.getElementById("active-page").style.margin = "0px 30px";
        document.getElementById("inactive-page-1").style.margin = "0px 30px";
        document.getElementById("active-page").style.color = "#131824";
        document.getElementById("inactive-page-1").style.color = "#131824";
    }
}

function roadmappieWelkomHover(){
    document.getElementById("welkom-roadmappie").style.transform = "translateY(-4%)";
    document.getElementById("welkom-roadmappie").style.boxShadow = "0px 10px 20px rgba(0,0,0,0.06)";
    document.getElementById("welkom-roadmappie").style.backgroundPosition = "0% 60%";
    document.getElementById("roadmappieButton").style.backgroundPosition = "90% 46%";
    document.getElementById("roadmappieButton").style.backgroundSize = "8%";
    document.getElementById("roadmappieButton").style.padding = "16px 60px 16px 32px";
    document.getElementById("highlightTitleDesktop").style.transform = "translateY(-44%)";
}

function roadmappieWelkomNormal(){
    document.getElementById("welkom-roadmappie").style.transform = "translateY(0%)";
    document.getElementById("welkom-roadmappie").style.boxShadow = "none";
    document.getElementById("welkom-roadmappie").style.backgroundPosition = "0% 50%";
    document.getElementById("roadmappieButton").style.backgroundPosition = "100% 50%";
    document.getElementById("roadmappieButton").style.backgroundSize = "0%";
    document.getElementById("roadmappieButton").style.padding = "16px 32px";
    document.getElementById("roadmappieButton").style.transitionDelay = "0s";
    document.getElementById("highlightTitleDesktop").style.transform = "translateY(0%)";
}

function bykarlieWelkomHover(){
    document.getElementById("welkom-bykarlie").style.transform = "translateY(-4%)";
    document.getElementById("welkom-bykarlie").style.boxShadow = "0px 10px 20px rgba(0,0,0,0.06)";
    document.getElementById("welkom-bykarlie").style.backgroundPosition = "0% 60%";
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
    document.getElementById("welkom-save-now").style.backgroundPosition = "30% 30%";
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
    document.getElementById("welkom-play-next").style.backgroundPosition = "20% 80%";
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
