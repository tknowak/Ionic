angular.module('starter.services', ['ngResource'])
.factory('Session', function() {
  return $resource('http://localhost:5000/sessions/:sessionId');
})
