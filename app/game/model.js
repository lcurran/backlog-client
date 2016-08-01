import DS from 'ember-data';

export default DS.Model.extend({
  igdb_id: DS.attr('integer'),
  name: DS.attr('string'),
  summary: DS.attr('string'),
  storyline: DS.attr('storyline'),
  videos: DS.hasMany('video'),
  cover: DS.hasMany('cover')
});
