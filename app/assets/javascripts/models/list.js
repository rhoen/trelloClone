TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: "api/lists", //no GET route
  parse: function(response) {
    this.cards = new TrelloClone.Collections.Cards();
    this.cards.add(response.cards);
    delete response.cards;
    return response;
  },
  toJSON: function () {
    return {list: _.clone(this.attributes)};
  }
})
