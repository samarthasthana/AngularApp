'use strict';

/* Controllers */
var mainPageControllers = angular.module('mainPageControllers', []);

mainPageControllers.controller('SectionCtrl', ['$scope', '$location','$http',
  function($scope, $location, $http) {
    $http.get('resources' + $location.path() + '.json').success(function(data) {
      $scope.data = data;
      if($location.path() === '/creds'){
        $scope.experiences = data.content;
        $http.get('resources/projects.json').success(function(data_projects) {
          $scope.projects = data_projects.content;
        });
      }
    });
 }]);

 //private methods

// mainPageControllers.controller('SectionCtrl', ['$scope', '$routeParams','$http',
//   function($scope, $routeParams, $http) {
//     console.log($routeParams.section);
//     $http.get('resources/' + $routeParams.section + '.json').success(function(data) {
//       $scope.data = data;
//       if(data.type === 'para'){
//
//       } else if (data.type === 'list') {
//         var content_list = data.content;
//         var section_body = document.getElementById('section-body');
//         for( var indx = 0; indx < content_list.length; indx++){
//           var list_item = document.createElement("li");
//           list_item.innerHTML = content_list[indx].
//           document.getElementById('section-body').appendChild(content_list[indx]);
//         }
//       }
//     });
//     // $(".test-id").append("<strong>Made it</strong>");
//   }]);
