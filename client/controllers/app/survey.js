angular.module('app').controller('app_survey', app_survey);
function app_survey($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.questions=['Question1','Question2','Question3','Question4','Question5'];
    
    
}