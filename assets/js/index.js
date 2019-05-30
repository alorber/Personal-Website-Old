$(document).ready(function(){

	const word_loop = new TypeIt("#Intro_Words", {loop: true, autoStart: true, cursor: false})
						.type("I am a computer engineer at The Cooper Union.")
						.pause(2000)
						.delete()
						.type("I am interested in becoming a software engineer.")
						.pause(3000)
						.delete()
						.type("I am interested in web development.")
						.pause(3000)

	new TypeIt("#Intro_Text", {
		cursor: false,
		afterComplete: function(instance){
			console.log("hi");
			word_loop.go();
		},
	}).go();

});