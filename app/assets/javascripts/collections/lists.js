TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: "api/lists", //no GET route
  model: TrelloClone.Models.List,
})
