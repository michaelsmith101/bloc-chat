(function() {
  function config($locationProvider, $stateProvider) {
  $locationProvider
      .html5Mode({
          enabled: true,
          requireBase: false
       });

  $stateProvider
      .state('main', {
          url: '/',
          controller: 'MainCtrl as main',
          templateUrl: '/templates/main.html'
      });
    }
     angular
         .module('blocChat', ['ui.router', 'firebase','ui.bootstrap'])
         .config(config);
 })();
