$(document).ready(function(){

	new TypeIt("#Head_Text", {
		afterComplete: function(){
			$("#Fade_Div").fadeIn(3000);
		},
	}).go();

});