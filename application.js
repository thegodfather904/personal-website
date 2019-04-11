$(document).ready(function () {
	addClickEvents();
	//loopThroughTitleWords();
});


function addClickEvents() {
	menuClick();
	pulsateClick();
	showMoreSkillsClick();
	menuLinkClick();
}

function menuLinkClick() {
	$('#menuHome').click(function (e) {
		slidePage('#home');
	});
	$('#menuHello').click(function (e) {
		slidePage('#aboutMe');
	});
	$('#menuQuote').click(function (e) {
		slidePage('#quoteSection');
	});
	$('#menuContact').click(function (e) {
		slidePage('#contactMe');
	});
}

function slidePage(id) {
	slideMenu();
	$('html body').animate({
		scrollTop: $(id).offset().top
	}, 500);
}


function menuClick() {
	$('.menu-button').click(function () {
		slideMenu();
	});
}

function slideMenu() {
	var menu = $('.menu');
	if (!menu.hasClass('menu-open')) {
		menu.animate({
			marginRight: '+=400px'
		}, 350, function () {});

		menu.addClass('menu-open');
		$('.menu-button').addClass('menu-button-open');
	} else {
		menu.animate({
			marginRight: '-=400px'
		}, 350, function () {});
		menu.removeClass('menu-open');
		$('.menu-button').removeClass('menu-button-open');
		$('.menu-button').addClass('menu-button-start');
	}
}

function pulsateClick() {
	$('.pulse-icon-wrapper').click(function (e) {
		$("body, html").animate({
			scrollTop: $('#aboutMe').offset().top
		}, 500);
	});
}

function showMoreSkillsClick() {
	var skillsLabel = $('.see-more-skills-label');
	var showLess = 'show-less';

	skillsLabel.click(function () {

		if (skillsLabel.hasClass(showLess)) {
			$('.hidden-skills-section').slideUp();
			skillsLabel.html('more');
			skillsLabel.removeClass(showLess);
			$('.about-me-container').animate({
				'min-height': "-=400"
			})
		} else {
			$('.hidden-skills-section').slideDown();
			skillsLabel.html('less');
			skillsLabel.addClass(showLess);
			$('.about-me-container').animate({
				'min-height': "+=400"
			})
		}
	});
}


/*Loops through the 'beautiful' synonyms*/
function loopThroughTitleWords() {

	var wordArray = ["elegant", "dynamic", "emotive"];

	var allSpans = "";
	for (var i = 0; i < wordArray.length; i++) {
		allSpans += "<span class = 'hidden-title-word'>" + wordArray[i] + "</span>";
	}

	//add the word spans to the div
	var $beautifulWrapper = $('#beautifulWrapper');
	$beautifulWrapper.html(allSpans);

	var $beautifulWrapper = $('#beautifulWrapper span');

	var needToShow = 0;
	var currentlyShowing = wordArray.length - 1;

	setInterval(function () {

		$beautifulWrapper.eq(currentlyShowing).fadeOut();
		$beautifulWrapper.eq(needToShow).fadeIn();

		if (currentlyShowing == wordArray.length - 1)
			currentlyShowing = 0;
		else
			currentlyShowing++;

		if (needToShow == wordArray.length - 1)
			needToShow = 0;
		else
			needToShow++;


	}, 3000);


}