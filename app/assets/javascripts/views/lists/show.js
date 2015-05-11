TrelloClone.Views.Lists.Show = Backbone.View.extend({
  template: JST['lists/show'],
  className: "list",
  events: {
    "click .delete" : "destroyList"
  },
  destroyList: function(event) {
    event.preventDefault();
    debugger
    this.model.destroy({
      // success: function () {
      //   this.collection.remove(this.model);
      // }.bind(this)
    })
  },
  render: function () {

    this.$el.html(this.template({list: this.model}))

    this._subViews = [];
    this.model.cards.forEach(function(card) {
      var cardView = new TrelloClone.Views.Cards.Title({model: card});
      this._subViews.push(cardView);
      this.$("ul").append(cardView.render().$el);
    }.bind(this))

    // var formView = new TrelloClone.Views.Cards.Form();
    // this._subViews.push(formView);
    // this.$el.append(formView.render().$el)
    return this;
  }
})
