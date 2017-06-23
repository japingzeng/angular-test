/**
 * Created by Administrator on 2017/6/23.
 */
define([
    'angular',
    //加载各个模块
    'controller/controllers',
    'controller/home/mainController',
    'controller/home/homeController',
    'controller/personal/personalContrller',
    //angular三方模块
    'angular-ui-router'

], function (angular){
    var webapp = angular.module('webapp', ['controllers', 'ui.router']);
    webapp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        //解析路由
        $urlRouterProvider.when('', '/index');//  设置默认路径
        $stateProvider
            .state('index', {
                url: '/index',
                templateUrl: 'views/common/header.html',
                controller: 'mainController'
            })
            .state('index.home', {
                url: '/home',
                templateUrl: 'views/home/home.html'
            })
            .state('index.personal', {
                url: '/personal',
                templateUrl: 'views/personal/personal.html'
            })
    }]);
    return webapp;
});