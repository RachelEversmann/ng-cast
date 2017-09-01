angular.module('video-player', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
})


.service('videos', function() {
  return window.exampleVideoData;
});
