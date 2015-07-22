'use strict';

/* Controllers */
var mainPageControllers = angular.module('mainPageControllers', []);

mainPageControllers.controller('SectionCtrl', ['$scope', '$location','$http',
  function($scope, $location, $http) {
    $http.get('resources' + $location.path() + '.json').success(function(data) {
      $scope.data = data;
      if($location.path() === '/experience'){
        $scope.experiences = data.content;
        $http.get('resources/projects.json').success(function(data_projects) {
          $scope.projects = data_projects.content;
        });
      }
      // if($location.path() === '/academics'){
      //   var content_list = data.content;
      //   for( var indx = 0; indx < content_list.length; indx++){
      //     var list_item = document.createElement("li");
      //     list_item.id = "list-item-"+indx;
      //     list_item.innerHTML = "<p id = ins-"+ indx +">"+content_list[indx].insitute+"</p>
      //                           <br><p></p>";
      //     document.getElementById('section-body').appendChild(list_item);
      //   }
      // }
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
