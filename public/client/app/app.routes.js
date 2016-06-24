var routerApp = angular.module('project', [
    'project.services',
    'project.homeView',
    'project.secondView',
    'ui.router'
    ]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/index.html');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('homeView', {
            url: '/homeView',
            templateUrl: 'app/shared/homeView/homeView.html',
            controller: 'homeViewController'
        })
        
        // SECONDVIEW AND MULTIPLE NAMED VIEWS =================================
        .state('secondView', {
            url: '/secondView',
            templateUrl: 'app/shared/secondView/secondView.html',
            controller: 'secondViewController'     
        });
        
});
