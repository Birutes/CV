$(document).ready(function() {
	$('.button').on('click', function() {
		var animationType1 = $('.education').data("animation");
		$('.education').toggleClass(animationType1);
		var animationType2 = $('.designer').data("animation");
		$('.designer').toggleClass(animationType2);
	});
});