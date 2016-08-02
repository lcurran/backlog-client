import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model: function(params) {
    return this.get('store').query('catalog', { search: params })
  }
});

// })
//   model () {
//     return this.get('store').query('catalog', { search: this.get('keyword') })
//   }
//   keyword: null,
//
//   gameSearch: Ember.computed('keyword', 'model', function() {
//     let keyword = this.get('keyword')
//     let games = this.get('model')
//
//     if (keyword) {
//
//     }
//   })
// });
//
// queryParams: ['category'],
//   category: null,
//
//   filteredArticles: Ember.computed('category', 'model', function() {
//     var category = this.get('category');
//     var articles = this.get('model');
//
//     if (category) {
//       return articles.filterBy('category', category);
//     } else {
//       return articles;
//     }
//   })
