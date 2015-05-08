TrelloClone.Routers.TrelloCloneRouter = Backbone.Router.extend({
  routes: {
    "" : "index"

  },

  index: function () {
    var rootView = new TrelloClone.Views.Root();
    this.$el.html(rootView.render().$el);
  }





})
