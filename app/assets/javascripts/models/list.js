TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: "api/lists", //no GET route
  parse: function(response) {
    debugger
    this.cards = new TrelloClone.Collections.Cards();
    this.cards.add(response.cards);
    delete response.cards;
    return response;
  }
})
