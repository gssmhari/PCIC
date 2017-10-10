angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.survey', {
        views: {
            app: {
                controller: 'app_survey',
                templateProvider: function (app) {
                    return app.templateProvider('app.survey');
                }
            }
        }
    }).state('app.access_denied', {
        views: {
            app: {
                controller: 'app_access_denied',
                templateProvider: function (app) {
                    return app.templateProvider('app.access_denied');
                }
            }
        }
    }).state('app.thank_u', {
        views: {
            app: {
                controller: 'app_thank_u',
                templateProvider: function (app) {
                    return app.templateProvider('app.thank_u');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    });
});