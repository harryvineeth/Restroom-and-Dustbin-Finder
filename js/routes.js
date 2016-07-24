angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.restroom', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/restroom.html',
        controller: 'restroomCtrl'
      }
    }
  })

  .state('menu.dustbin', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/dustbin.html',
        controller: 'dustbinCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.developers', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/developers.html',
        controller: 'developersCtrl'
      }
    }
  })

  .state('menu.female', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/female.html',
        controller: 'femaleCtrl'
      }
    }
  })

  .state('menu.pHC', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pHC.html',
        controller: 'pHCCtrl'
      }
    }
  })

  .state('menu.recyclable', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/recyclable.html',
        controller: 'recyclableCtrl'
      }
    }
  })

  .state('menu.nonRecyclable', {
    url: '/page9',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nonRecyclable.html',
        controller: 'nonRecyclableCtrl'
      }
    }
  })

  .state('menu.male', {
    url: '/page13',
    views: {
      'side-menu21': {
        templateUrl: 'templates/male.html',
        controller: 'maleCtrl'
      }
    }
  })

  .state('menu.about', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});