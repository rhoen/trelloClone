TrelloClone.Views.Boards.Show = Backbone.View.extend({
  template: JST['boards/show'],
  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
    this.listenToOnce(this.model,"sync", this.addListsListener)
    // this.listenTo(this.model.lists.models.cards)
  },

  addListsListener: function () {
    this.listenTo(this.model.lists, "add remove sync", this.render);
  },

  render: function () {
    this.$el.empty();
    this.$el.append(this.template({board: this.model}));

    var lists = this.model.lists;
    this._listSubViews = [];
    if (lists) {
      lists.forEach(function(list){
        var subView = new TrelloClone.Views.Lists.Show({model: list});
        this._listSubViews.push(subView);
        this.$("section.lists").append(subView.render().$el);
      }.bind(this))
    }
    var listForm = new TrelloClone.Views.Lists.Form({
      collection: this.model.lists,
      board: this.model
    });
    this._listSubViews.push(listForm);
    this.$el.append(listForm.render().$el);
    return this;
  },

  //TODO write a parse method and instantiate list collection objects
  //also write a parse method on list collection that instantiates
  //cards using {parse: true} to force a parse even tho the server isn't
  //pulling down in that case.

  remove: function () {
    this._listSubViews.forEach(function(subView) {
      subView.remove();
    })

    this.$el.remove();
    this.stopListening();
    return this;
  }
})
