/// <reference path="../../tools/typings/tsd.d.ts" />

// Load the Angular Material CSS associated with ngMaterial
// then load the app.css to provide overrides, etc.

import 'angular-material/angular-material.css!';
import 'assets/app.css!';

// Load Angular libraries
import * as angular from 'angular';
import * as material from 'angular-material';

// Load custom application modules

import main from './main'

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    let appName = 'starter-app';
    let body = document.getElementsByTagName("body")[0];
    let app  = angular
      .module( appName, [ material, main ] );

    angular.bootstrap( body, [ app.name ], { strictDi: false })

  });



