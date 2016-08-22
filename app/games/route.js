import Ember from 'ember';

export default Ember.Route.extend({

  model () {
    return this.get('store').findAll('game');
  },

  actions: {
    addGame (game) {
      let lib = this.get('store').createRecord('library', {
        game: game,
      });
      lib.save()
      .then(() => {
        this.transitionTo('library');
      })
      .catch(() => {
          this.get('flashMessages')
          .warning('You already backlogged that game!');
      });
    },
  },
});
