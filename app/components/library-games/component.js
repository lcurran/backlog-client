import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    click (library) {
      this.sendAction('click', library);
    },
    del (library) {
      this.sendAction('del', library);
    },
  }
});
