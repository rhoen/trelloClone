TrelloClone.Views.Boards.Boards = Backbone.View.extend({
  template: JST['boards/index'],
  render: function () {
    this.$el.html(this.template({boards: this.collection}));
    return this;
  },

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  getOrFetch: function(id) {
    var board = this.get(id);
    if (board) {
      board.fetch();
    } else {
      board = new TrelloClone.Models.Board(id);
      board.fetch({
        success: function () {
          this.add(board);
        }.bind(this)
      })
    }

    return board;
  }
})
