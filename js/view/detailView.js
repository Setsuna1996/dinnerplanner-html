// JavaScript source code
var DetailView = function (container, model, controller, generalController) {

    var that = this;

    var dishes = model.getDishes();

    var dishName = container.find("#dishname");
    var dishImg = container.find("#dishimg");
    var description = container.find("#description");
    this.backButton = container.find("#backButton");
    var num = container.find("#numofpeople");
    num.html(model.getNumberOfGuests);

    this.updateDisplay = function (model, changeDetail) {
        if (changeDetail == "0") {
            container.css('display', 'none');
        }
        else if (changeDetail == "1") {
            container.css('display', 'none');
        }
        else if (changeDetail == "2") {
            container.css('display', 'block');
        }
        else if (changeDetail == "3") {
            container.css('display', 'none');
        }
        else if (changeDetail == "4") {
            container.css('display', 'none');
        }
        else {
            var id = changeDetail.substring(3, changeDetail.length);
            
            dishName.html(dishes[id - 1].name);

            dishImg.attr("src", "images/" + dishes[id - 1].image);

            description.html(dishes[id - 1].description);
        }


    }

    var listener = function (e) {
        controller.notify(e.target.id);

    }

    backButton.addEventListener("click", listener, false);

    generalController.addObserver(that.updateDisplay);
    

    
}

var DetailController = function (model, generalController) {

    this.notify = function (ID) {
        if (ID == "backButton") {
            generalController.setstate("1");
        }

    }



}