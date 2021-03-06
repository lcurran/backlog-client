import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('games');
  this.route('game', { path: '/games/:id' });
  this.route('user', { path: '/users/:id' });
  this.route('catalogs');
  this.route('search', function() {
    this.route('results');
  });
  this.route('library');
});

export default Router;
