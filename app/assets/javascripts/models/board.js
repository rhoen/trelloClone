TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "api/boards",
  parse: function(response) {
    debugger
    this.lists = new TrelloClone.Collections.Lists();
    this.lists.add(response.lists, {parse: true});
    delete response.lists
    return response;
  }
})
