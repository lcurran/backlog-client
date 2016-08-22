import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['row detail'],

  actions: {
    add (game) {
      this.sendAction('add', game)
    }
  }
});
