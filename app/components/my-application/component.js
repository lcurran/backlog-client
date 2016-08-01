import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['container-fluid', 'row'],

  auth: Ember.inject.service(),

  user: Ember.computed.alias('auth.credentials.email'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  actions: {
    signOut () {
      this.sendAction('signOut');
    },
  },
});
