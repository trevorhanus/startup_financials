var HeaderView = Backbone.View.extend({

  el: '<header>',
  className: 'primary-header',

  template: _.template("<h1 class='logo'>Startup Financials</h1> \
                        <h3 class='tagline'>Fast &amp Visual Startup Financial Models</h3>"),

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    $('body').append(this.$el);
  }

});