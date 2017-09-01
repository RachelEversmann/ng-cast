angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(videos) {
    this.videos = videos;
    this.current = videos[0];
  }
});
