angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function(youTube){
    this.videos = [];
    this.current = null;
    console.log(youTube.search);
  }
});
