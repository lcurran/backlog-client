import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model (params) {
    return this.get('store').query('catalog', params);
  }
});
