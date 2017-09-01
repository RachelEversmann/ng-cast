angular.module('video-player')
.component('videoList',{
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    videos: '<',
    current: '='
  },
  controller: function() {
    this.handleClick = function(input) {
      this.current = input;
    };
  }
});
