import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  keyword: null,
  
  actions: {
    submit () {
      this.sendAction('submit', this.get('keyword'));
    },
  }
});
