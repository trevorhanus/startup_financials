var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {

    this.header = new HeaderView();
    this.financialModelView = new financialModelView()
    this.render();

  },

  render: function() {

    this.$el.append([
      this.header.$el,
      this.input.$el,
      this.list.$el
    ]);

    return this;
  }

});
