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
  ajax: Ember.inject.service(),
  isAuthenticated: Ember.computed.alias('auth.isAuthenticated'),
  flashMessages: Ember.inject.service(),

  actions: {
    addGame (game) {
      let newGame = this.get('store').createRecord('game', {
        igdb_id: game.id,
        name: game.get('name'),
        summary: game.get('summary'),
        cover: game.get('cover'),
        video: game.get('video')
      });
      newGame.save()
      .then((response) => {
        let lib = this.get('store').createRecord('library', {
          game: response,
        });
        lib.save()
        .then(() => {
          this.transitionTo('library');
        })
        .catch(() => {
            this.get('flashMessages')
            .warning('You already backlogged that game!');
        });
      });
    }
  }
});
