import DS from 'ember-data';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  igdb_id: DS.attr('number'),
  name: DS.attr('string'),
  summary: DS.attr('string'),
  storyline: DS.attr('string'),
  videos: DS.hasMany('video'),
  cover: DS.hasMany('cover'),
  users: DS.hasMany('user')
});
