TrelloClone.Views.Boards.Show = Backbone.View.extend({
  template: JST['boards/show'],
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },
  render: function () {
    console.log("Render Board Show");
    this.$el.empty();
    this.$el.append(this.template({board: this.model}));

    var lists = this.model.get('lists');
    var listSubViews = [];

    if (lists) {
      for (var i = 0; i < lists.length; i++) {
        var subView = new TrelloClone.Views.Lists.Show({model: lists[i]});
        listSubViews.push(subView);
        this.$("section.lists")
          .append(subView.render().$el);
      }
    }
    //iterate through the board's lists and create a subview for each one
    //this.model.lists().forEach(create a listView and append to $el)
    //the listView will display the titles of the cards inside that list
    return this;
  }
})
