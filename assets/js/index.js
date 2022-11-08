$(document).ready(function(){

	// Typing animation loop
	const word_loop = new TypeIt("#Intro_Loop", {loop: true, autoStart: true, cursor: false})
						.type("I have a BE in Computer Engineering and a minor in Computer Science from the Cooper Union.")
						.pause(2000)
						.delete()
						.type("I am interested in software engineering and web development.")
						.pause(2000)
						.delete()
						.type("Welcome to my site!")
						.pause(2000)

	new TypeIt("#Intro_Text", {
		cursor: false,
		afterComplete: function(instance){
			word_loop.go();
		},
	}).go();

});