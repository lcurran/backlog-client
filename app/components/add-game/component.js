import Ember from 'ember';

export default Ember.Component.extend({
  game: {},

  action: {
    submit () {
      this.sendAction('submit', this.get('game'));
    }
  }
});
