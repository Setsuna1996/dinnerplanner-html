// JavaScript source code
var MenuView = function (container, model, controller, generalController) {

    var that = this;

    var img1 = container.find("#dish1");
    var name1 = container.find("#name1");
    var price1 = container.find("#price1");
    var img2 = container.find("#dish2");
    var name2 = container.find("#name2");
    var price2 = container.find("#price2");
    var img3 = container.find("#dish3");
    var name3 = container.find("#name3");
    var price3 = container.find("#price3");

    var total = container.find("#totalprice");

    this.recipeButton = container.find("#recipeButton");

    var listener = function (e) {
        controller.notify(e.target.id);

    }

    recipeButton.addEventListener("click", listener, false);

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
            container.css('display', 'none');
        }

    }

    generalController.addObserver(that.updateDisplay);
    

}

var MenuController = function (model, generalController) {

    this.notify = function (ID) {
        generalController.setstate("4");

    }



}