import DS from 'ember-data';

export default DS.Model.extend({
  cloudinary_id: DS.attr('string'),
  width: DS.attr('integer'),
  height: DS.attr('height'),
  game: DS.belongsTo('game')
});
