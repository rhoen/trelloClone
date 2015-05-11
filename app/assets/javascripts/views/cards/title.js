TrelloClone.Views.Cards.Title = Backbone.View.extend({
  tagName: "li",
  template: JST["cards/title"],
  events: {
    "click a" : "renderShow"
  },
  renderShow: function () {
    var cardShow = new TrelloClone.Views.Cards.Show({model: this.model});
    $('body').html(cardShow.render().$el);
  },
  render: function () {

    this.$el.html(this.template({card: this.model}));
    return this;
  }
})
