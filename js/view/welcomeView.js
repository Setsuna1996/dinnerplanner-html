// JavaScript source code
var WelcomeView = function (container, model, controller,generalController) {

    var that = this;

    var welcomeText = container.find("#welcomeText");

	this.startButton = container.find("#startButton");

    welcomeText.html("Your assignment in this lab is to implement the layout of the this prototype and extend the model to fit the needs of the application. The prototype is for a Dinner Planning application. Imagine you have some guests over and you want to plan what to cook. Simple as that.");

    

    //container.css('display', 'none');

    var listener = function (e) {
        
        controller.notify(e.target.id);
    }

    startButton.addEventListener("click", listener, false);

    this.updateDisplay = function (model, changeDetail) {
        if (changeDetail == "0") {
            container.css('display', 'block');
        }
        else if (changeDetail == "1") {
            container.css('display', 'none');
        }
        else if (changeDetail == "2") {
            container.css('display', 'none');
        }
        else if (changeDetail == "3") {
            container.css('display', 'none');
        }
        else if (changeDetail == "4") {
            container.css('display', 'none');
        }
        
    }

    generalController.addObserver(that.updateDisplay);


}

var WelcomeController = function (model, generalController) {

    this.notify = function (info) {
        if (info == "startButton") {
            generalController.setstate("1");
        }
    }



}