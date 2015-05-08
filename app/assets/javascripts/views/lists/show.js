TrelloClone.Views.Lists.Show = Backbone.View.extend({
  template: JST['lists/show'],
  render: function () {
    this.$el.html(template({list: this.model}));
  }
})
