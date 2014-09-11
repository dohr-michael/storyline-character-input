'use strict';

/**
 * @ngdoc function
 * @name storylineCharacterInputApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the storylineCharacterInputApp
 */
angular.module('storylineCharacterInputApp')
    .controller('MenuCtrl', function ($log, $scope, $location) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };
    });
