// JavaScript source code
var WelcomeView = function (container, model) {

	
    var welcomeText = container.find("#welcomeText");

	this.startButton = container.find("#startButton");

    welcomeText.html("Your assignment in this lab is to implement the layout of the this prototype and extend the model to fit the needs of the application. The prototype is for a Dinner Planning application. Imagine you have some guests over and you want to plan what to cook. Simple as that.");

}