TrelloClone.Views.Boards.Show = Backbone.View.extend({
  template: JST['boards/show'],
  render: function () {
    this.$el.html(template({board: this.model}));
    return this;
  }
})
