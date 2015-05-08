window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert("Hello from Backbone!");
    var $rootEl = $('#main');
    if (typeof $rootEl !== "undefined") {
      console.log("make new TrelloCloneRouter");
      new TrelloClone.Routers.TrelloCloneRouter({$rootEl: $rootEl});
      Backbone.history.start();
    }
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
