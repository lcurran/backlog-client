import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  done: DS.attr('boolean'),
  game: DS.belongsTo('game'),
  user: DS.belongsTo('user')
});
