import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('library');
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
