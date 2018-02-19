// JavaScript source code
var SidebarView = function (container, model, controller, generalController) {

    var that = this;

    var guestNum = container.find("#numberOfGuests");
    var num = model.getNumberOfGuests();
    guestNum.html(num);
    this.plusButton = container.find("#plusButton");
    this.minusButton = container.find("#minusButton");
    this.confirmButton = container.find("#confirmButton");


    var listener = function (e) {
        controller.notify(e.target.id);
        
    }

    plusButton.addEventListener("click", listener, false);
    minusButton.addEventListener("click", listener, false);
    confirmButton.addEventListener("click", listener, false);

    
    this.update = function (model,changeDetail) {
        num = model.getNumberOfGuests();
        guestNum.html(num);
    }

    model.addObserver(that.update);

    this.updateDisplay = function (model, changeDetail) {
        if (changeDetail == "0") {
            container.css('display', 'none');
        }
        else if (changeDetail == "1") {
            container.css('display', 'block');
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

    }

    generalController.addObserver(that.updateDisplay);
    
}


var SidebarController = function (model, generalController) {

    this.notify = function (ID) {
        if (ID == "plusButton" || ID == "plus") {
            model.addNumOfGuests();
        }
        else if (ID == "minusButton" || ID == "minus") {
            model.subNumOfGuests();
        }
        else if (ID == "confirmButton") {
            generalController.setstate("3");
        }
        
    }



}

