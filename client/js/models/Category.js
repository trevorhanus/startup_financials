var Category = Backbone.Model.extend({

  initialize: function() {
    this.name = this.get('name');
    this.s_categories = new S_Categories(this.get('s_categories'));
  }

});