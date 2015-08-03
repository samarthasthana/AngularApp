'use strict';

// Declare app level module which depends on views, and components
var samResApp = angular.module('samResApp', [
  'ngRoute',
  'mainPageControllers'
]);

samResApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/about-me', {
        templateUrl: 'partials/about-me.html',
        controller: 'SectionCtrl'
      }).
      when('/creds', {
        templateUrl: 'partials/creds.html',
        controller: 'SectionCtrl'
      }).
      when('/blog', {
        templateUrl: 'partials/blog.html',
        controller: 'SectionCtrl'
      }).
      // when('/phones/:phoneId', {
      //   templateUrl: 'partials/phone-detail.html',
      //   controller: 'PhoneDetailCtrl'
      // }).
      otherwise({
        redirectTo: '/about-me'
      });
  }]);

// config(['$routeProvider', function($routeProvider) {
//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);
