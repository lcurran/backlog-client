import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    submit (keyword) {
      let result = this.get('store').query('catalog', { search: keyword });
    }
  }
});
