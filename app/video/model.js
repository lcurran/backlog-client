import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  video_id: DS.attr('string'),
  game: DS.belongsTo('game')
});
