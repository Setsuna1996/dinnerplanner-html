// JavaScript source code
var SearchView = function (container, model,controller, generalController) {

    var that = this;

    var input = container.find("#searchInput");
    this.typeButton = container.find("#dropdown1");
    this.searchButton = container.find("#searchButton");

    this.updateDisplay = function (model, changeDetail) {
        if (changeDetail == "0") {
            container.css('display', 'none');
        }
        else if (changeDetail == "1") {
            container.css('display', 'block');
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

    var listener = function (e) {
        controller.notify(e.target.id);

    }

    searchButton.addEventListener("click", listener, false);



}

var SearchController = function (model, generalController) {

    this.notify = function (ID) {
        
        
    }



}