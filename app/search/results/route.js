import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model (params) {
    return this.get('store').query('catalog', params);
  },
  auth: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  unaddedGames: Ember.computed.filterBy('content', 'status', undefined),

  actions: {
    addGame (game) {
      let newGame = this.get('store').createRecord('game', {
        igdb_id: game.id,
        name: game.name,
        summary: game.summary,
        cover: game.cover,
        video: game.video,
      });
      newGame.save()
      .then((response) => {
        let lib = this.get('store').createRecord('library', {
          user_id: this.get('auth.credentials.id'),
          game_id: response.id,
        });
        lib.save();
      });
    }
  }
});
