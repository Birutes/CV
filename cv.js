$(document).ready(function() {
	$('.button1').on('click', function() {
	var animationType = $('.frontend').data("animation");
	$('.frontend').toggleClass(animationType);
	});

	$('.button2').on('click', function() {
	var animationType = $('.psychology').data("animation");
	$('.psychology').toggleClass(animationType);
	});

	$('.button3').on('click', function() {
	var animationType = $('.designer').data("animation");
	$('.designer').toggleClass(animationType);
	});
});