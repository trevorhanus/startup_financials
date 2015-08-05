var FinancialModel = Backbone.Model.extend({

  initialize: function() {
    this.years = new Years(this.get('years'));
    this.items = new Items(this.get('items'));
  },

  months: function() {
    return this.years.length * 12;
  },

  lastMonth: function() {
    return this.months() - 1;
  },

  addItem: function() {
    var item = {
       category:    'expenses',
       scategory:   'GAndA',
       sscategory:  'Marketing',
       title:        'Radio Ad',
       description:  'We plan to run a radio add in April to boost sales.',
       money:        [ 0, 0, -1000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
     };
    this.items.add(item);
  }
  
});