TrelloClone.Routers.TrelloCloneRouter = Backbone.Router.extend({
  routes: {
    "" : "index",
    "boards" : "boardsIndex"

  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  index: function () {
    console.log("in index function")
    var rootView = new TrelloClone.Views.Root();
    this.$rootEl.html(rootView.render().$el);
  },

  boardsIndex: function () {
    console.log("in boardsIndex function");
    var boardsView = new TrelloClone.Views.Boards.Boards();
    this.$rootEl.html(boardsView.render().$el);
  }





})
