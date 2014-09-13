'use strict';

/**
 * @ngdoc service
 * @name storylineCharacterInputApp.characterService
 * @description
 * # characterService
 * Service in the storylineCharacterInputApp.
 */
angular.module('storylineCharacterInputApp')
    .factory('Character', function characterService($resource) {
        return $resource('rest/services/characters/:id', {}, {
            query: {method: "GET", isArray: true}

        });
    });
