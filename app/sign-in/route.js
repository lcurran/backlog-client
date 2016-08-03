import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
      .finally((credentials) => {
        console.log(credentials);
        this.transitionTo('user', this.get('auth.credentials.id'));
      })
      .then(() => this.get('flashMessages').success('Thanks for signing in!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
