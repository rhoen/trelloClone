TrelloClone.Views.Boards.Boards = Backbone.View.extend({
  template: JST['boards/index'],
  render: function () {
    this.$el.html(this.template({boards: this.collection}));
    return this;
  },

  events: {
    "click button.delete" : "destroyBoard"
  },

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  destroyBoard: function(event) {
    event.preventDefault();
    debugger
    var board = this.collection.getOrFetch(
      $(event.currentTarget).data('board-id')
    );

    board.destroy({
      success: function () {
        this.collection.remove(board)
      }.bind(this)
    });
  }

})
