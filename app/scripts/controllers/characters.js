'use strict';

/**
 * @ngdoc function
 * @name storylineCharacterInputApp.controller:CharactersCtrl
 * @description
 * # CharactersCtrl
 * Controller of the storylineCharacterInputApp
 */
angular.module('storylineCharacterInputApp')
    .controller('CharactersCtrl', function ($log, $scope, Character) {
        $scope.init = function() {
            $scope.characters = Character.query();
        }
    });
