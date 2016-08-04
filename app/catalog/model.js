import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  summary: DS.attr('string'),
  video: DS.attr('string'),
  cover: DS.attr('string'),
});
