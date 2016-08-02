import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['search'],
  search: null,

  searchGames: Ember.computed('search', 'model', function() {
    let search = this.get('search');
    let games = this.get('model');

    if (search) {
      return games.filterBy('search', search);
    } else {
      return null;
    }
  }),
});
