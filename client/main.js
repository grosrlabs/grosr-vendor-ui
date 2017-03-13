import angular from 'angular';
import angularMeteor from 'angular-meteor';
import angularRouter from 'angular-ui-router';
import angularLocalStorage from 'angular-local-storage';
import routes from './common/routes';
import run from './common/run';

let app = angular.module('vendor', [
  angularMeteor,
  angularRouter,
  angularLocalStorage
])
  .config(routes)
  .run(run);

export default app;