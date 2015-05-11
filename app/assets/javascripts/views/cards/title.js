TrelloClone.Views.Cards.Title = Backbone.View.extend({
  tagName: "li",
  template: JST["cards/title"],
  render: function () {

    this.$el.html(this.template({card: this.model}));
    return this;
  }
})
