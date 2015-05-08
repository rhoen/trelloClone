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
    debugger
    var formData = $(event.currentTarget).serializeJSON();
    board.set(formData);
    board.save({}) //callback).bind(this);
  }

})
