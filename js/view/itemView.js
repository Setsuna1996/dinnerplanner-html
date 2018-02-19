// JavaScript source code
var ItemView = function (container, model, controller, generalController) {

    var i;
    var dishes = model.getDishes();
    var name;
    var img;

    var that = this;

    var listener = function (e) {
        controller.notify(e.target.id);

    }

    for (i = 1; i < 11; i++) {
        name = container.find("#name" + i);
        name.html(dishes[i - 1].name);
        img = container.find("#img" + i);
        img.attr("src", "images/" + dishes[i - 1].image);
        img.click(listener);
        
    }

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


   
    
}

var ItemController = function (model, generalController) {

    this.notify = function (ID) {
        //var id = ID.substring(3, 4);
        generalController.currentDish(ID);
        generalController.setstate("2");
        

    }



}