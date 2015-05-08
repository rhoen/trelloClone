TrelloClone.Views.Boards.Form = Backbone.View.extend({
  template: JST['boards/form'],
  render: function () {
    this.$el.html(this.template());
    return this;
  }
})
