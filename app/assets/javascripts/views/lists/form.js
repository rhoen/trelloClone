TrelloClone.Views.Lists.Form = Backbone.View.extend({
  template: JST['lists/form'],

  events: {
    "submit form" : "createList"
  },
  initialize: function (options) {
    this.board = options.board
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  },
  createList: function(event) {
    event.preventDefault();
    var list = new TrelloClone.Models.List();
    var formData = $(event.currentTarget).serializeJSON();
    list.set(formData.list);
    list.set({board_id: this.board.id})
    list.save({}, function () {
      this.collection.add(list)
    }.bind(this))
  }

})
