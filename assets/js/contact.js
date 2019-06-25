$(document).ready(function(){

// 	Typing animation
	new TypeIt("#Title", {
		afterComplete: function(){
			$("#Fade_Div").fadeIn(3000);
		},
	}).go();

});