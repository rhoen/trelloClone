window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {
    Boards: {},
    Lists: {}
  },
  Routers: {},
  initialize: function() {
    alert("Hello from Backbone!");
    var $rootEl = $('#main');
    if (typeof $rootEl !== "undefined") {
      console.log("make new TrelloCloneRouter");
      new TrelloClone.Routers.TrelloCloneRouter({$rootEl: $rootEl});
    }
    TrelloClone.boards = new TrelloClone.Collections.Boards();
    TrelloClone.boards.fetch();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
