// JavaScript source code
var DetailView = function (container, model) {

    var dishName = container.find("#dishname");
    var dishImg = container.find("#dishimg");
    var description = container.find("#description");
    this.backButton = container.find("#back");
    var num = container.find("#numofpeople");
    num.html(model.getNumberOfGuests);
    

    
}