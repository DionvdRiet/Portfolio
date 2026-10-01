// window.onload      = responsiveAnimation()  ;

window.onscroll = function() {
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
aanHetScrollen();
startAnimation(x);
};

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
       document.getElementById('welkom-bericht-tekst').style.transform = "translateY(0%)";
       document.getElementById('welkom-bericht-title').style.opacity = "1";
       document.getElementById('welkom-bericht-title-mobile').style.opacity = "1";
       document.getElementById('welkom-bericht-tekst').style.opacity = "1";

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
    document.getElementById('welkom-bericht-tekst').style.transform = "translateY(0%)";
    document.getElementById('welkom-bericht-title').style.opacity = "1";
    document.getElementById('welkom-bericht-title-mobile').style.opacity = "1";
    document.getElementById('welkom-bericht-tekst').style.opacity = "1";

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

function aanHetScrollen() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        // document.getElementById("scroll-beneden").style.opacity = "0";
        document.getElementById("desktop").style.gridTemplateColumns = "40% auto 40%";
        document.getElementById("desktop").style.backgroundColor = "white";
        document.getElementById("desktop").style.borderBottom = "1px solid rgba(112,112,112,0.15)";
        document.getElementById("headerContainer2").style.backgroundColor = "#FFED00";
        // document.getElementById("headerContainer").style.height = "50px"

            document.getElementById("active-page-1").style.fontSize = "18px";
            document.getElementById("inactive-page-1").style.fontSize = "18px";
            document.getElementById("inactive-page-2").style.fontSize = "18px";

            document.getElementById("active-page-1").style.color = "#131824";
            document.getElementById("inactive-page-1").style.color = "#131824";
            document.getElementById("inactive-page-2").style.color = "#131824";

    } 

    else{
    	// document.getElementById("scroll-beneden").style.opacity = "1";
    	// document.getElementById("desktop").style.height = "inherit";
		// document.getElementById("desktop").style.gridTemplateColumns = "500px auto 500px";
		// document.getElementById("headerContainer").style.height = "65px";
    }
}

function headerItemDefaultTwo(){
		document.getElementById("headerContainer1").style.transform = "translateX(100%)";
}

function headerItemDefaultTwoOff(){
		document.getElementById("headerContainer1").style.transform = "translateX(0%)";
}

function headerItemOne(){
        // document.getElementById("headerContainer1").classList.add('headerContainerActive');
        document.getElementById("headerContainer2").style.transform = "translate(-100%, -2px)";
        document.getElementById("headerContainer2").style.animationName = "headerContainer";
}

function headerItemTwo(){
		document.getElementById("headerContainer2").style.transform = "translate(100%, -2px)";
		document.getElementById("headerContainer2").style.animationName = "headerContainer";
        // document.getElementById("headerContainer3").classList.add('headerContainerActive');
}

function headerItemOffOne(){
        document.getElementById("headerContainer1").classList.remove('headerContainerActive');
        document.getElementById("headerContainer2").style.transform = "translate(0%, -2px)";
}

function headerItemOffTwo(){
        document.getElementById("headerContainer3").classList.remove('headerContainerActive');
        document.getElementById("headerContainer2").style.transform = "translate(0%, -2px)";
        document.getElementById("headerContainer2").style.width = "100%";
}

function headerSizeNormal(){
		// document.getElementById("desktop").style.height = "65px";
		// document.getElementById("desktop").style.gridTemplateColumns = "500px auto 500px";
		// document.getElementById("headerContainer").style.height = "65px";
		// document.getElementById("active-page-1").style.fontSize = "22px";
  //   	document.getElementById("inactive-page-1").style.fontSize = "22px";
  //   	document.getElementById("inactive-page-2").style.fontSize = "22px";
		// document.getElementById("active-page").style.margin = "0px 30px";
	 //    document.getElementById("inactive-page").style.margin = "0px 30px";
	    document.getElementById("active-page").style.color = "#131824";
	    document.getElementById("inactive-page").style.color = "#131824";
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
	document.getElementById("nav-project-title").style.transform = "translateY(+90%)";
	document.getElementById("nav-project-title").style.opacity = "0";
	document.getElementById("arrow-left").style.transform = "translateY(+90%)";
	document.getElementById("arrow-left").style.opacity = "0";

	setTimeout(function(){ 
	document.getElementById("nav-project-title").innerHTML = "Welkom";
	document.getElementById("nav-project-title").style.transform = "translateY(0%)";
	document.getElementById("nav-project-title").style.opacity = "1";
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
    document.getElementById("nav-project-title").style.transform = "translateY(+90%)";
    document.getElementById("nav-project-title").style.opacity = "0";

    setTimeout(function(){ 
    document.getElementById("nav-project-title").innerHTML = "Roadmappie";
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

    setTimeout("location.href = 'roadmappie.html';",1500)
}

function bykarlieWelkom(){
    document.getElementById("nav-project-title").style.transform = "translateY(+90%)";
    document.getElementById("nav-project-title").style.opacity = "0";

    setTimeout(function(){ 
    document.getElementById("nav-project-title").innerHTML = "ByKarlie";
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

    setTimeout("location.href = 'bykarlie.html';",1500)
}

function saveNowWelkom(){
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
	// document.getElementById("caseSwitchAnimation").style.transform = "translateX(0px)";

	setTimeout("location.href = 'save-now.html';",1500)
}

function playNextWelkom(){
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

	setTimeout("location.href = 'play-next.html';",1500)
}

function benVerlengprocesWelkom(){
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

	setTimeout("location.href = 'ben-verlengproces.html';",1500)
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

function benVerlengprocesNieuw(){
	document.getElementById('caseSwitchAnimation').style.display = "block";
	document.getElementById('caseSwitchAnimation').style.opacity = "1";
	document.getElementById('caseSwitchAnimation').style.position = "fixed";
	document.getElementById("caseSwitchAnimation").style.height = "100vh";
	document.getElementById("caseSwitchAnimation").style.bottom = "0px";
	document.getElementById("caseSwitchAnimation").style.animationName = "caseSwitch";

	setTimeout("location.href = 'ben-verlengproces.html';",1500)
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

    document.getElementById("projectTitle").style.letterSpacing = "12px";
    document.getElementById("projectTitle").style.opacity = "1";
    document.getElementById("projectType").style.opacity = "1";
    document.getElementById("projectType").style.transform = "translateY(0%)";
    document.getElementById("projectDescription").style.opacity = "1";
    document.getElementById("projectDescription").style.transform = "translateY(0%)"

    document.getElementById("caseHeaderImage").style.backgroundPosition = "52% 20%";
    document.getElementById("caseHeaderImage").style.height = "80%";

    document.getElementById("case-header-description").style.transform = "translateX(0%)"
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




