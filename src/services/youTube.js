angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(object, callback) {
  $http ({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    params:{ key: object.key,
             q: object.query,
             maxResult: object.maxResult,
             type: 'video',
            videoEmbeddable: true,
            part: 'snippet'
          }
    }).then(function succesCallback(response) {
      callback(response)
    }).catch(function failCallback(response) {
      console.log("fail");
    })
  }
})
