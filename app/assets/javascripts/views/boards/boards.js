TrelloClone.Views.Boards.Boards = Backbone.View.extend({
  template: JST['boards/index'],
  render: function () {
    this.$el.empty();
    this.$el.append(this.template());
    this._subViews = [];
    this.collection.forEach(function(board) {
      var boardTitle = new TrelloClone.Views.Boards.Title({model: board});
      this._subViews.push(boardTitle);
      this.$el.append(boardTitle.render().$el);
    }.bind(this))
    return this;
  },

  remove: function () {
    this._subViews.forEach(function(sub) {
      sub.remove();
    })
  },

  events: {
    "click button.delete" : "destroyBoard"
  },

  initialize: function () {
    this.listenTo(this.collection, "sync add remove", this.render);
  },

  destroyBoard: function(event) {
    event.preventDefault();
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
