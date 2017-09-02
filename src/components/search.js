angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    videos: '=',
  },
  controller: function(youTube) {
    this.input = 'starwars';
    var context = this;
    this.searchYoutube = function(){
      var object = {
        key: window.YOUTUBE_API_KEY,
        maxResult: 5,
        query: this.input
      };
      var callback = function(response) {
        context.videos = response.data.items;
      };
      youTube.search(object, callback)
    }
  }
});
