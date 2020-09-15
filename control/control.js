/*function smoothScroll(target, duration){
	var target = document.querySelector(target);
	var targetPos = target.getBoundingClientRect().top;
	var CurrentPos = window.pageYOffset;
	var distance = targetPos - CurrentPos;
	var startTime = null ;

	console.log(CurrentPos);
}

function animation()

function ease(t, b, c, d) {
	return c * Math.sin(t/d * (Math.PI/2)) + b;
};

window.requestAnimationFrame(animation);

smoothScroll('.contactText', 1000);*/

function smoothScroll(target, duration) {

	var target = document.querySelector(target);
	var targetPos = target.getBoundingClientRect().top;
	var CurrentPos = window.pageYOffset;
	var startTime = null ;

	function animation(currentTime){
		if (!startTime) startTime = currentTime ;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, CurrentPos, targetPos, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) window.requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
	return c * Math.sin(t/d * (Math.PI/2)) + b;
	};

	window.requestAnimationFrame(animation);

};

var navEvent = (function(){

	var t = 1500 ;

	document.querySelector('#about').addEventListener('click', function (){
		smoothScroll('#aboutC',t);
	});
	document.getElementById('Professional').addEventListener('click', function(){
		smoothScroll('#profC',t);
	});
		document.getElementById('personal').addEventListener('click', function(){
		smoothScroll('#persC',t);
	});
	document.getElementById('contact').addEventListener('click', function(){
		smoothScroll('#contactC',t);
	});
	document.querySelector('.home').addEventListener('click', function(){
		smoothScroll('.IntroSec',t);
	});

	document.getElementById('ceosImg').addEventListener('mouseover', function(){
		hoverImg('#ceosImg', './images/CeosPhone.PNG')
	});

	document.getElementById('ceosImg').addEventListener('mouseout', function(){
		hoverImg('#ceosImg', './images/CeosDisplay.PNG')
	});

})();


function hoverImg(element, imageLocation){
	var target = document.querySelector(element);
	target.classList.add("parallaxOut");

	window.setTimeout(() => {
		target.setAttribute('src', imageLocation);
		target.classList.remove("parallaxOut");
		target.classList.add("parallax");
	}, 300);
	
}



