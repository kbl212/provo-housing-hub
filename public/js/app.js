var app = angular.module('provo-housing-hub', ['ui.router']);



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
        
    .state('newlisting', {
        url: '/newlisting',
        templateUrl: 'templates/newListingTmpl.html',
        controller: 'newListingCtrl'
        
    })
        
    .state('account', {
        url: '/account',
        templateUrl: 'templates/accountTmpl.html',
        controller: 'accountCtrl'
        
    })
    
    .state('signin', {
        url: '/signin',
        templateUrl: 'templates/signInTmpl.html',
        controller: 'signInCtrl'
    })
    
    .state('currentListing', {
        url: '/currentlisting',
        templateUrl: 'templates/currentListingTmpl.html',
        controller: 'homeCtrl'
        
    })
    
    $urlRouterProvider
        .otherwise('/');
    
});