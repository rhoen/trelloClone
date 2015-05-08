TrelloClone.Views.Boards.Show = Backbone.View.extend({
  template: JST['boards/show'],
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },
  render: function () {
    this.$el.empty();
    this.$el.append(this.template({board: this.model}));
    debugger
    var lists = this.model.lists;
    var listSubViews = [];
    var listTitles = [];
    if (lists) {
      for (var i = 0; i < lists.length; i++) {
        listTitles.push(lists[i].title);
      }

      this.$el.append(listTitles);
    }
    //iterate through the board's lists and create a subview for each one
    //this.model.lists().forEach(create a listView and append to $el)
    //the listView will display the titles of the cards inside that list
    return this;
  }
})
