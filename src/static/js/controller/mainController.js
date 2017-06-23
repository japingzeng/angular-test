/**
 * Created by Administrator on 2017/6/23.
 */
'use strict';
define(['controller/controllers'], function (controllers) {
       controllers.controller('mainController', ['$scope', '$window', function($scope, $window){
            $scope.currentType = 'home',
            $scope.changeTab = function(type) {
                $scope.currentType = type;
            };
       }]);
    }
);