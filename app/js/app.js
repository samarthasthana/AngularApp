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
      when('/experience', {
        templateUrl: 'partials/experience.html',
        controller: 'SectionCtrl'
      }).
      when('/tech', {
        templateUrl: 'partials/tech.html',
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
