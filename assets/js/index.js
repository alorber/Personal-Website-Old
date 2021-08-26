$(document).ready(function(){

	// Typing animation loop
	const word_loop = new TypeIt("#Intro_Loop", {loop: true, autoStart: true, cursor: false})
						.type("I am a computer engineering major at The Cooper Union.")
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
			console.log("hi");
			word_loop.go();
		},
	}).go();

});