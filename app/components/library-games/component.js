import Ember from 'ember';

export default Ember.Component.extend({
  notDone: function() {
    return this.get('done') == "false";
  }.property('status')
});
