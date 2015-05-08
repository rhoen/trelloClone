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
    var rootView = new TrelloClone.Views.Root();
    this.$rootEl.html(rootView.render().$el);
  },

  boardsIndex: function () {
    console.log("in boardsIndex function");

    var boardsView = new TrelloClone.Views.Boards.Boards({
      collection: TrelloClone.boards
    });
    TrelloClone.boards.fetch({
      success: function () {
        this.$rootEl.html(boardsView.render().$el);
      }.bind(this)
    })
  },

  boardForm: function () {
    var boardForm = new TrelloClone.Views.Boards.Form();
    this.$rootEl.html(boardForm.render().$el);
  }





})
