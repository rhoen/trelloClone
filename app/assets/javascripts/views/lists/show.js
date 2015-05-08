TrelloClone.Views.Lists.Show = Backbone.View.extend({
  template: JST['lists/show'],
  render: function () {
    this.$el.html(this.template({
      list: this.model, cards: this.model.cards

    }));

    debugger
    return this;
  }
})
