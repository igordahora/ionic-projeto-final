// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','ionic.utils'])

.run(function($ionicPlatform,$rootScope) {

  $rootScope.$on("$locationChangeStart", function (event, next, current) {
    //Here you can check whatever you want (servercall, cookie...)
    console.log(event, next, current);
 });

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }


  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
    
    .state('materias', {
      url: '/materias',
      templateUrl: 'templates/materias.html',
      controller: 'materiasCtrl'
    });

  // if none of the above states are matched, use this as the fallback
  
  if(window.localStorage["nome"]) {
    $urlRouterProvider.otherwise('/materias');
  } else {
    $urlRouterProvider.otherwise('/home');    
  }
  
  

});
