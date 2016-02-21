$(document).ready(function(){
	addClickEvents();
	//loopThroughTitleWords();
});


function addClickEvents(){
	menuClick();
	pulsateClick();
	showMoreSkillsClick();
}

function menuClick(){
	$('.menu-button').click(function(){
		var menu = $('.menu' );
		if(!menu.hasClass('menu-open')){
			menu.animate({
				marginRight: '+=400px'
			}, 350, function() {
			});

			menu.addClass('menu-open');
			$('.menu-button').addClass('menu-button-open');
		}
		else{
			menu.animate({
				marginRight: '-=400px'
			}, 350, function(){
			});
			menu.removeClass('menu-open');
			$('.menu-button').removeClass('menu-button-open');
			$('.menu-button').addClass('menu-button-start');
		}
	});
}

function pulsateClick(){
	$('.pulse-icon-wrapper').click(function(e){
		$("body, html").animate({
			scrollTop: $('#aboutMe').offset().top
		}, 500);
	});
}

function showMoreSkillsClick(){
	var skillsLabel = $('.see-more-skills-label');

	skillsLabel.click(function(){
		$('.hidden-skills-section').slideDown();
		$('.about-me-container').height(900);
		skillsLabel.html('less');
		skillsLabel.addClass('show-less');
	});
}


/*Loops through the 'beautiful' synonyms*/
function loopThroughTitleWords(){

	var wordArray = ["elegant", "dynamic", "emotive"];

	var allSpans = "";
	for(var i = 0; i < wordArray.length; i++){
		allSpans += "<span class = 'hidden-title-word'>" + wordArray[i] + "</span>";
	}

	//add the word spans to the div
	var $beautifulWrapper = $('#beautifulWrapper');
	$beautifulWrapper.html(allSpans);

	var $beautifulWrapper = $('#beautifulWrapper span');

	var needToShow = 0;
	var currentlyShowing = wordArray.length - 1;

	setInterval(function(){

		$beautifulWrapper.eq(currentlyShowing).fadeOut();
		$beautifulWrapper.eq(needToShow).fadeIn();

		if(currentlyShowing == wordArray.length - 1)
			currentlyShowing = 0;
		else
			currentlyShowing++;

		if(needToShow == wordArray.length - 1)
			needToShow = 0;
		else
			needToShow++;


	}, 3000);


}
