/**
 * Created by Administrator on 2017/6/22.
 */
'use strict';
requirejs.config({
    baseUrl: 'static/js',
    waitSeconds: 200,
    paths: {
        'jquery': 'jquery/jquery-1.11.1.min',
        'bootstrap': 'bootstrap/bootstrap.min',
        'angular': 'angular/angular/angular.min',
        'angular-ui-router':  'angular/angular/angular-ui-router.min'
    },
    shim: {
        'jquery': {exports: '$'},
        'angular': {deps: ['jquery'], exports: 'angular'},
        'angular-ui-router': {deps: ['angular']},
        'bootstrap': {deps: ['jquery']}
    },
    priority: ["angular"],
    deps: ['myApp'],
    //prevent require cache
    urlArgs: Date.now()
});

require([
    'jquery',
    'angular',
    'myApp',
    'bootstrap'
], function($, angular) {
    //start angular
    $(function(){
     angular.bootstrap(document, ["webapp"]);
    });
});