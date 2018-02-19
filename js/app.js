var GeneralStateController = function () {

    var state=0;

    var that = this;

    var observers = [];
    this.addObserver=function(observer){ observers.push(observer); }
   
    this.notifyObservers = function (details) {
        for (var i = 0; i < observers.length; i++)
            observers[i](this, details);
    }

    this.removeObserver = function (observer) {
        for (var i = 0; i < observer.length; i++) {
            if (observers[i] == observer) {
                observers.splice(i);
                break;
            }
        }
    }

    this.setstate=function(newstate){
        state = newstate;
        that.notifyObservers(state);
    }

    this.currentDish = function (id) {
        that.notifyObservers(id);
    }
}

$(function () {
	//We instantiate our model
    var model = new DinnerModel();

    var general = new GeneralStateController();
	
	var welcomeController = new WelcomeController(model,general);
	var sidebarController = new SidebarController(model,general);
	var searchController = new SearchController(model,general);
	var itemController = new ItemController(model, general);
	var detailController = new DetailController(model, general);
	var overController = new OverController(model, general);
	var menuController = new MenuController(model, general);
	var recipeController = new RecipeController(model, general);


	// And create the instance of ExampleView
    var exampleView = new ExampleView($("#exampleView"));
    var welcomeView = new WelcomeView($("#welcomeView"),model,welcomeController,general);
    var sidebarView = new SidebarView($("#sidebarView"),model,sidebarController,general);
    var searchView = new SearchView($("#searchView"),model,searchController,general);
    var itemView = new ItemView($("#itemView"), model,itemController,general);
    var detailView = new DetailView($("#detailView"), model,detailController,general);
    var overView = new OverView($("#overView"), model,overController,general);
    var menuView = new MenuView($("#menuView"), model,menuController,general);
    var recipeView = new RecipeView($("#recipeView"), model,recipeController,general);



    
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});