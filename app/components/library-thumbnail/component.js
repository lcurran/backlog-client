import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['col-lg-6'],

  actions: {
    click () {
      this.sendAction('click', this.get('library'));
    },
    del () {
      this.sendAction('del', this.get('library'));
    }
  }
});
