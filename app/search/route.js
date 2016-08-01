import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    search (keyword) {
      this.transitionTo('search/results', keyword)
    }
  }
});
