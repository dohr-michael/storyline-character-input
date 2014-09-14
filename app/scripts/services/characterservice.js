'use strict';

/**
 * @ngdoc service
 * @name storylineCharacterInputApp.characterService
 * @description
 * # characterService
 * Service in the storylineCharacterInputApp.
 */
angular.module('storylineCharacterInputApp')
    .factory('Character', function characterService($resource, Settings) {
        return $resource(Settings.apiBaseUrl + 'characters/:id', {}, {
            query: {method: "GET", isArray: true}

        });
    });
