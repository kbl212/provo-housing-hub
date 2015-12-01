var app = angular.module('provo-housing-hub', ['ui.router']);


//route config here


app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
    .state('intro', {
        url: '/',
        templateUrl: 'templates/introTmpl.html',
        controller: 'introCtrl'
        
    })
        
    .state('home', {
        url: '/home',
        templateUrl: 'templates/homeTmpl.html',
        controller: 'homeCtrl'
        
    })
        
    .state('listing', {
        url: '/listing',
        templateUrl: 'templates/listingTmpl.html',
        controller: 'listingCtrl'
        
    })
        
    .state('account', {
        url: '/account',
        templateUrl: 'templates/accountTmpl.html',
        controller: 'accountCtrl'
        
    })
    
    $urlRouterProvider
        .otherwise('/');
    
});