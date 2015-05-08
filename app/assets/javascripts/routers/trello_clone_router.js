TrelloClone.Routers.TrelloCloneRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    "boards" : "boardsIndex",
    "boards/new" : "boardForm"

  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  index: function () {
    console.log("in index function")
    // var rootView = new TrelloClone.Views.Root();
    // this.$rootEl.html(rootView.render().$el);
    Backbone.history.navigate("#/boards")
  },

  boardsIndex: function () {
    console.log("in boardsIndex function");

    var boardsView = new TrelloClone.Views.Boards.Boards({
      collection: TrelloClone.boards
    });
    this.$rootEl.html(boardsView.render().$el);
  },

  boardForm: function () {
    var boardForm = new TrelloClone.Views.Boards.Form();
    this.$rootEl.html(boardForm.render().$el);
  },

  swapView: function(newView) {
    if (!this._currentView) {
      this._currentView = newView;
    }
    this._currentView.remove();
    this._currentView = newView;
  }





})
