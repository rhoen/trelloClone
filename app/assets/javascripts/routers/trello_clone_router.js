TrelloClone.Routers.TrelloCloneRouter = Backbone.Router.extend({
  routes: {
    "" : "index"

  },

  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },

  index: function () {
    console.log("in index function")
    var rootView = new TrelloClone.Views.Root();
    this.$rootEl.html(rootView.render().$el);
  }





})
