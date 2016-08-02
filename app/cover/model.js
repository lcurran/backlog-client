import DS from 'ember-data';
import { belongsTo } from 'ember-data/relationships';

export default DS.Model.extend({
  cloudinary_id: DS.attr('string'),
  width: DS.attr('number'),
  height: DS.attr('height'),
  game: DS.belongsTo('game')
});
