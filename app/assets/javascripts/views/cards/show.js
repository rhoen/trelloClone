TrelloClone.Views.Cards.Show = Backbone.View.extend({
  template: JST['cards/show'],

  render: function () {
    this.$el.html(this.template({card: this.model}));
    return this;
  }

})
