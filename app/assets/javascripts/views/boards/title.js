TrelloClone.Views.Boards.Title = Backbone.View.extend({
  template: JST["boards/title"],
  className: "board-title-box"
  render: function () {
    this.$el.html(this.template({board: this.model}));
    return this;
  }
})
