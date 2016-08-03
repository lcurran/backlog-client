import Ember from 'ember';

const ThumbnailComponent = Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'alt'],
  src: Ember.computed('params.[]', function(){
      return `https://res.cloudinary.com/igdb/image/upload/t_cover_big/${this.get('params')[0]}.jpg;`;
    }),
  alt: Ember.computed('params.[]', function(){
      return this.get('params')[1];
    })
});

ThumbnailComponent.reopenClass({
  positionalParams: 'params'
});

export default ThumbnailComponent;
