angular.module('video-player')
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube, videos){
    this.videos = [];
    this.current = null;
  }
});
