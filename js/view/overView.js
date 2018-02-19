// JavaScript source code
var OverView = function (container, model, controller, generalController) {

    var that = this;

    this.gobackButton = container.find("#gobackButton");
    var num = container.find("#numofpeople");
    num.html(model.getNumberOfGuests);

    var listener = function (e) {
        controller.notify(e.target.id);

    }

    gobackButton.addEventListener("click", listener, false);

    this.updateDisplay = function (model, changeDetail) {
        if (changeDetail == "0") {
            container.css('display', 'none');
        }
        else if (changeDetail == "1") {
            container.css('display', 'none');
        }
        else if (changeDetail == "2") {
            container.css('display', 'none');
        }
        else if (changeDetail == "3") {
            container.css('display', 'block');
        }
        else if (changeDetail == "4") {
            container.css('display', 'block');
        }

    }

    generalController.addObserver(that.updateDisplay);

   
}

var OverController = function (model, generalController) {

    this.notify = function (ID) {
        generalController.setstate("1");

    }



}