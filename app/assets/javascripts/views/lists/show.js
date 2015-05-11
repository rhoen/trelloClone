TrelloClone.Views.Lists.Show = Backbone.View.extend({
  template: JST['lists/show'],
  render: function () {

    this.$el.html(this.template({list: this.model}))

    this._cardSubViews = [];
    this.model.cards.forEach(function(card) {
      var cardView = new TrelloClone.Views.Cards.Title({model: card});
      this._cardSubViews.push(cardView);
      this.$("#cards").append(cardView.render().$el);
    }.bind(this))

    return this;
  }
})
