$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
    var exampleView = new ExampleView($("#exampleView"));
    var welcomeView = new WelcomeView($("#welcomeView"));
    var sidebarView = new SidebarView($("#sidebarView"), model);
    var searchView = new SearchView($("#searchView"));
    var itemView = new ItemView($("#itemView"), model);
    var detailView = new DetailView($("#detailView"), model);
    var overView = new OverView($("#overView"), model);
    var menuView = new MenuView($("#menuView"), model);
    var recipeView = new RecipeView($("#recipeView"), model);
	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});