TrelloClone.Views.Boards.Form = Backbone.View.extend({
  template: JST['boards/form'],
  events: {
    "submit form" : "createBoard"
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  },

  createBoard: function(event) {
    event.preventDefault();
    var board = new TrelloClone.Models.Board();
    var formData = $(event.currentTarget).serializeJSON();
    board.set(formData);
    board.save({}, {
      success: function () {
        console.log("made a board, success callback");
        this.collection.add(board);
        Backbone.history.navigate("#/boards");
      }.bind(this)
    })
  },

})
