import DS from 'ember-data';

export default DS.Model.extend({
  igdb_id: DS.attr('number'),
  name: DS.attr('string'),
  summary: DS.attr('string'),
  video: DS.attr('string'),
  cover: DS.attr('string'),
});
