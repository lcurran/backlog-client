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
  this.route('search');
  this.route('search/results', { path: '/search/:keyword'});
  this.route('games');
  this.route('library');
});

export default Router;
