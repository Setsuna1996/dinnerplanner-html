// JavaScript source code
var RecipeView = function (container, model, controller, generalController) {

    var that = this;

    var img1 = container.find("#img1");
    var name1 = container.find("#name1");
    var description1 = container.find("#description1");
    var preparation1 = container.find("#preparattion1");
    var img2 = container.find("#img2");
    var name2 = container.find("#name2");
    var description2 = container.find("#description2");
    var preparation2 = container.find("#preparattion2");


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
            container.css('display', 'none');
        }
        else if (changeDetail == "4") {
            container.css('display', 'block');
        }

    }

    generalController.addObserver(that.updateDisplay);

}

var RecipeController = function (model, generalController) {

    this.notify = function (ID) {
        

    }



}