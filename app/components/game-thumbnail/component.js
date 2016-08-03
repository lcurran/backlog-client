import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: ['grid-item'],
  auth: Ember.inject.service(),
  user: Ember.computed.alias('auth.credentials.id'),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),

  done: Ember.computed('user', function() {
    return this.get('store')
  })
});
