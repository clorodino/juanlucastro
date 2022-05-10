// MAGNIFIER

// $(document).ready(function() {
//     let scaleNum = 10;
//     $(".magnify").jfMagnify({scale: scaleNum});
// });


$(document).ready(function() {
	$(".magnify").jfMagnify({
		scale:"6.5",
	});
	
});

// let detectTap;

// $(document).on('touchstart', function() {
//     detectTap = true; // Detects all touch events
// 	console.log('detectTap = true');
// });
// $(document).on('touchmove', function() {
//     detectTap = false; // Excludes the scroll events from touch events
// 	console.log('detectTap = false');
// });
// $(document).on('click touchend', function(event) {
//     if (event.type == "click") detectTap = true; // Detects click events
//        if (detectTap){
//           // Here you can write the function or codes you want to execute on tap

// 		  $(".header__logo").hide();

//        }
//  });