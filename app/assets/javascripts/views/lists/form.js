TrelloClone.Views.Lists.Form = Backbone.View.extend({
  template: JST['lists/form'],

  events: {
    "submit form" : "createList"
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  },
  createList: function(event) {
    var list = new TrelloClone.Models.List();
    var formData = $(event.currentTarget).serializeJSON();
    list.set(formData);
    list.save({}, function () {
      //TODO lists should be a collection that can be added to here
      //to trigger a sync event
    })
  }

})
