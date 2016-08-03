import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships'

export default DS.Model.extend({
  done: DS.attr('bool'),
  game: DS.belongsTo('game', {
    inverse: 'libraries'
  }),
  user: DS.belongsTo('user', {
    inverse: 'libraries'
  })
});
