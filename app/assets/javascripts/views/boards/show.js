TrelloClone.Views.Boards.Show = Backbone.View.extend({
  template: JST['boards/show'],
  render: function () {
    this.$el.empty();
    this.$el.append(template({board: this.model}));
    var lists = this.model.lists;

    //iterate through the board's lists and create a subview for each one
    //this.model.lists().forEach(create a listView and append to $el)
    //the listView will display the titles of the cards inside that list
    return this;
  }
})
