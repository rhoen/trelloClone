TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: "api/lists", //no GET route
  model: TrelloClone.Models.List,
  initialize: function(boardId) {
    this.board = TrelloClone.board.getOrFetch(boardId);
  }
})
