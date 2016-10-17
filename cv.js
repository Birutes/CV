$(document).ready(function() {
	$('.button1').on('click', function() {
		$('.designer').animate({"left": "-=500px"}, 1000);
	});
	$('.button2').on('click', function() {
		$('.psychology').animate({"left": "+=500px"}, 1000);
	});
	$('.button3').on('click', function() {
		$('.frontend').animate({"left": "+=500px"}, 1000);
	});
});