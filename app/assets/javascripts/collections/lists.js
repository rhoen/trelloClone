TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: "api/boards/:boardId/lists",
  model: TrelloClone.Models.Board,
  initialize: function(boardId) {
    this.board = TrelloClone.board.getOrFetch(boardId);
  }
})
