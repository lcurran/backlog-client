import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  video_id: DS.attr('string'),
  game: DS.belongsTo('game')
});
