$(document).ready(function() {
	
	//The following code is for IE Browsers
	function GetIEVersion() {
		var sAgent = window.navigator.userAgent;
		var Idx = sAgent.indexOf("MSIE");
	  // If IE, return version number.
	  if (Idx > 0) 
		return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));
	  // If IE 11 then look for Updated user agent string.
	  else if (!!navigator.userAgent.match(/Trident\/7\./)) 
		return 11;
	  else
		return 0; //It is not IE
	}
	
	window.onload = function() {
		if (navigator.userAgent.indexOf("Firefox") > 0) {
			$('body').attr("id", "firefox");
		} else if (GetIEVersion() > 0) {
		   $('body').attr("id", "ie");
		}
	}
	
	//This function creates a slide animation when any navigation link with a # tag exists
	$('#sub-menu .nav').click(function() {
		var link = this.hash;
	$('html, body').animate({
		'scrollTop': $(link).offset().top}, 
		900,
		'swing', 
		function () {window.location.hash = link;}
		);
	});
	
	//Changes the hamburger menu based on location (submenu is hidden)
	function hamShift() {
		var hamChg = $('#home').outerHeight() - 50;
		var scrollT = $(document).scrollTop();
		
		if ($(window).innerHeight() > 800 && $('#sub-menu').css("display") != "block")  {
			if (scrollT > hamChg * 2) { 
				$("#ham_white").fadeOut(200);
				$("#ham_black").fadeIn(200);
				$('.hamburger').css("top", "0px").css("width", "65px");
			} else {
				$("#ham_white").fadeIn(200);
				$("#ham_black").fadeOut(200);
				$('.hamburger').css("top", "5%").css("width", "100px");
			}
		} else if ($(window).innerHeight() < 800 && $('#sub-menu').css("display") != "block")  {
			if (scrollT < hamChg) {
				$("#ham_white").fadeIn(200);
				$("#ham_black").fadeOut(200);
				$('.hamburger').css("top", "5%").css("width", "70px");
			} else {
				$("#ham_white").fadeOut(200);
				$("#ham_black").fadeIn(200);
				$('.hamburger').css("top", "0px").css("width", "65px");
			}
		}
	};
	
	//Opens the submenu regardless of location
	$('#ham_white, #ham_black').click(function() {
			$('#sub-menu, #ham_close').fadeIn(200);
			$('#ham_white, #ham_black').fadeOut(200);
		}
	);

	
	//Closes the submenu, hamburger change based on location
	function closeSubmenu() {
		var hamChg = $('#home').outerHeight() - 50;
		var scrollT = $(document).scrollTop();
		
		$('#ham_close, #sub-menu a').click(function() {
			if ($('#sub-menu').css("display") == "block" && $(window).innerHeight() > 800) {
				if (scrollT < hamChg * 2) {
					$('#ham_white').show();
					$('#ham_close, #ham_black').hide();
					$('#sub-menu').fadeOut();
					$('.hamburger').css("top", "5%").css("width", "100px");
				}else {
					$('#ham_black').show();
					$('#ham_close, #ham_white').hide();
					$('#sub-menu').fadeOut();
					$('.hamburger').css("top", "0px").css("width", "65px");
				}
			} else if ($('#sub-menu').css("display") == "block" && $(window).innerHeight() < 800) {
				if (scrollT < hamChg) {
					$('#ham_white').show();
					$('#ham_close, #ham_black').hide();
					$('#sub-menu').fadeOut();
					$('.hamburger').css("top", "5%").css("width", "70px");
				}else {
					$('#ham_black').show();
					$('#ham_close, #ham_white').hide();
					$('#sub-menu').fadeOut();
					$('.hamburger').css("top", "0px").css("width", "65px");
				}
			}		
		});
	};

	//Sets the position and dimensions of "Home Section" and center's traits/contents
	function homeDimensions() {
		var windowHeight = $(window).innerHeight();
		var windowWidth = $(window).innerWidth();
		var traitsCenter = windowWidth - $('#home-traits').innerWidth();
		
		$('#home-traits').css("margin-left", traitsCenter * .5);
		if (windowWidth > 800) {
			$('#home').css("height", windowHeight).css("width", windowWidth);
		} else {
			$('#home').css("height", "800px").css("width", windowWidth);
		}
	};

	//Animated the background based on screen width
	function moveHomeBg() {
		var winPosY = $(document).scrollTop();
		var homeSize = $('#home').outerHeight();
		var winH = $(window).innerHeight();
		
		if (winH > 800) {
			$('#container').css("top", homeSize * 2);
			if (winPosY > homeSize) {
				$('#home').css("position", "relative").css("margin-top", homeSize).css("background-position", -homeSize);
			} else {
				$('#home').css("position", "fixed").css("margin-top", "0").css("background-position", -winPosY);
			}
		} else {
			$('#container').css("top", "600px");
			$('#home').css("position", "relative").css("height", "600px").css("background-position", "0px");
		}
	};
	
	//Sets a default appearance for project list
	$('#project-list li:nth-of-type(1)').css("background", "linear-gradient(to right, rgba(84,84,84,1) 0%,rgba(204,204,204,1) 50%,rgba(255,255,255,0) 93%)");
	$('#offcampus').css("visibility","visible");
		if ($(window).innerWidth() < 884) {
			$('#about').css("margin-top", $('#offcampus').outerHeight());
		} else {
			$('#about').css("margin-top", "initial");
		}

	//Shows the project images and information
	function projShow() {
		//Off Campus Media
		$('#project-list li:nth-of-type(1)').click(function() {
			$('#project-list li').not(this).css("background", "#FFF");
			$(this).css("background", "linear-gradient(to right, rgba(84,84,84,1) 0%,rgba(204,204,204,1) 50%,rgba(255,255,255,0) 93%)");
			$('#offcampus').css("visibility","visible");
			$('.proj-description').not('#offcampus').css("visibility","hidden");
		});
		//Group Final Project
		$('#project-list li:nth-of-type(2)').click(function() {
			$('#project-list li').not(this).css("background", "#FFF");
			$(this).css("background", "linear-gradient(to right, rgba(84,84,84,1) 0%,rgba(204,204,204,1) 50%,rgba(255,255,255,0) 93%)");
			$('#groupfinal').css("visibility","visible");
			$('.proj-description').not('#groupfinal').css("visibility","hidden");
		});
		//JavaScript Matching Game
		$('#project-list li:nth-of-type(3)').click(function() {
			$('#project-list li').not(this).css("background", "#FFF");
			$(this).css("background", "linear-gradient(to right, rgba(84,84,84,1) 0%,rgba(204,204,204,1) 50%,rgba(255,255,255,0) 93%)");
			$('#javascriptgame').css("visibility","visible");
			$('.proj-description').not('#javascriptgame').css("visibility","hidden");
		});
		//Spencer Soares Portal Site
		$('#project-list li:nth-of-type(4)').click(function() {
			$('#project-list li').not(this).css("background", "#FFF");
			$(this).css("background", "linear-gradient(to right, rgba(84,84,84,1) 0%,rgba(204,204,204,1) 50%,rgba(255,255,255,0) 93%)");
			$('#spencerportal').css("visibility","visible");
			$('.proj-description').not('#spencerportal').css("visibility","hidden");
		});
		//LiveMuse Simulation App
		$('#project-list li:nth-of-type(5)').click(function() {
			$('#project-list li').not(this).css("background", "#FFF");
			$(this).css("background", "linear-gradient(to right, rgba(84,84,84,1) 0%,rgba(204,204,204,1) 50%,rgba(255,255,255,0) 93%)");
			$('#prototypeapp').css("visibility","visible");
			$('.proj-description').not('#prototypeapp').css("visibility","hidden");
		});
	};
	
	//Makes About section responsive to project-list appearance
	function aboutAdjust() {
		if ($(window).innerWidth() < 884) {
			if ($('#offcampus').css("visibility") == "visible") {
				$('#about').css("margin-top", $('#offcampus').outerHeight());
			} else if ($('#groupfinal').css("visibility") == "visible"){
				$('#about').css("margin-top", $('#groupfinal').outerHeight());
			} else if ($('#javascriptgame').css("visibility") == "visible"){
				$('#about').css("margin-top", $('#javascriptgame').outerHeight());
			} else if ($('#spencerportal').css("visibility") == "visible"){
				$('#about').css("margin-top", $('#spencerportal').outerHeight());
			} else if ($('#prototypeapp').css("visibility") == "visible"){
				$('#about').css("margin-top", $('#prototypeapp').outerHeight());
			} else {
				$('#about').css("margin-top", "initial");
			}
		} else {
			$('#about').css("margin-top", "initial");
		}
	};
	
	//Sets the heights of the proj-description container to the content's height
	function projHeight() {
		var sumH1 = $('#offcampus .proj-text').innerHeight();
		var sumH2 = $('#groupfinal .proj-text').innerHeight();
		var sumH3 = $('#javascriptgame .proj-text').innerHeight();
		var sumH4 = $('#spencerportal .proj-text').innerHeight();
		var sumH5 = $('#prototypeapp .proj-text').innerHeight();
		var projH = $('#projects-text').innerHeight();
		
		if ($(window).innerWidth() < 484) {
			$('#offcampus').css('height', sumH1 +150);
			$('#groupfinal').css('height', sumH2 + 150);
			$('#javascriptgame').css('height', sumH3 + 150);
			$('#spencerportal').css('height', sumH4 + 150);
			$('#prototypeapp').css('height', sumH5 + 150);
			$('#my-projects').css("height", projH + 150);
		}else{
			$('#offcampus').css('height', sumH1);
			$('#groupfinal').css('height', sumH2);
			$('#javascriptgame').css('height', sumH3);
			$('#spencerportal').css('height', sumH4);
			$('#prototypeapp').css('height', sumH5);
			$('#my-projects').css("height", projH);
		}
	};

	//Set the projects poition for smaller screens
	function projSmlPos() {
		if ($(window).innerWidth() < 884) {
			var projText = $('#projects-text').outerHeight();
			$('.proj-description').css("top", projText + 280);
		}else{
			$('.proj-description').css("top", 250);
		}
	};
	
	//Make profile Img same height as about-text
	function profileImg() {
		var profH = $('#about-text').innerHeight();
		var profW = profH * .6;
		$('#profile-contain').css("height", profH).css("width", profW);
		$('#profile-contain img').css("height", profH).css("width", profW);
	};

	
	homeDimensions();
	moveHomeBg();
	projHeight();
	projShow();
	projSmlPos();
	profileImg();
	hamShift();
	closeSubmenu() ;	
	aboutAdjust();
	
	$(window).scroll(function() {
		hamShift();
		moveHomeBg();
		closeSubmenu();
		homeDimensions();		
		moveHomeBg();
	});
	
	$(window).resize(function() {
		homeDimensions();		
		moveHomeBg();
		projShow();
		projHeight();					
		projSmlPos();
		profileImg();
		hamShift();
		closeSubmenu();
		aboutAdjust() ;
	});
	
	$("#project-list li").click(function() {
		aboutAdjust();
		}
	);
	

	

});