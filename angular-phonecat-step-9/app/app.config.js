'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',   // 这种写法就是定义依赖注入
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);
