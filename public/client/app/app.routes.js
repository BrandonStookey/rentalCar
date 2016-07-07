var routerApp = angular.module('project', [
    'project.services',
    'project.searchView',
    'project.searchResultView',
    'ui.router'
    ]);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/searchView');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('searchView', {
            url: '/searchView',
            templateUrl: 'app/shared/searchView/searchView.html',
            controller: 'searchViewController'
        })
        
        // SECONDVIEW AND MULTIPLE NAMED VIEWS =================================
        .state('searchResultView', {
            url: '/searchResultView',
            templateUrl: 'app/shared/searchResultView/searchResultView.html',
            controller: 'searchResultViewController'     
        });
        
});
