/// <reference path="../../typings/tsd.d.ts" />

module Onesnap {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($stateProvider: ng.ui.IStateProvider,
                $urlRouterProvider: ng.ui.IUrlRouterProvider) {
    $stateProvider
        .state('app', {
          url: '/app',
          views   : {
            'main@'         : {
              templateUrl: 'scripts/app/core/layouts/default.html'
            },
            'toolbar@app': {
              templateUrl: 'scripts/components/toolbar/toolbar.html',
              controller : 'ToolbarController as vm'
            },
            'navigation@app': {
              templateUrl: 'scripts/components/sidenav/navigation/navigation.html',
              controller : 'NavigationController as vm'
            }
          }
        });


      $urlRouterProvider.otherwise('/app');

      // commons translations

    }

  }
  
  angular.module('springTestApp')
    .config(RouterConfig);
}