// JavaScript source code
var SidebarView = function (container, model) {

    var guestNum = container.find("#numberOfGuests");
    var num = model.getNumberOfGuests();
    guestNum.html(num);
    this.plusbutton = container.find("#plusGuest");
    this.minusbutton = container.find("#minusGuest");
    this.confirmbutton = container.find("#confirm");

}