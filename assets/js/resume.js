$(document).ready(function(){

// 	Typing animation
	new TypeIt("#Title", {
		afterComplete: function(){
			$("#PDF_Viewer").fadeIn(3000);
		},
	}).go();

});