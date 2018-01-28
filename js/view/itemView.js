// JavaScript source code
var ItemView = function (container, model) {

    var i;
    var dishes = model.getDishes();
    var name;
    var img;

    for (i = 1; i < 11; i++) {
        name = container.find("#name" + i);
        name.html(dishes[i - 1].name);
        img = container.find("#img" + i);
        img.attr("src", "images/" + dishes[i - 1].image);

    }

    

    


}