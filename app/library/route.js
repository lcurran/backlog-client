import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),

  model () {
    return RSVP.hash({
      library: this.get('store').findAll('library'),
      percentage: this.get('ajax').get('/percentage')
    });
  },

  actions: {
    deleteLib (library) {
      library.destroyRecord();
    },
    toggleDone (library) {
      library.toggleProperty('done');
      library.save();
    },
  }
});
