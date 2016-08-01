import Ember from 'ember';

export default Ember.Route.extend({
  model (keyword) {
    this.get('store').findAll('search', keyword)
  }
});
