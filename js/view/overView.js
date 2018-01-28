// JavaScript source code
var OverView = function (container, model) {

    this.backButton = container.find("#back");
    var num = container.find("#numofpeople");
    num.html(model.getNumberOfGuests);

   
}