angular.module('app').controller('app_login', app_login);
function app_login($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.app.action = function(pagedata,actiondata,valuedata)
    {
    alert('i am here test:',actiondata);
    }
}