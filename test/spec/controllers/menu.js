'use strict';

describe('Controller: MenuCtrl', function () {

    // load the controller's module
    beforeEach(module('storylineCharacterInputApp'));

    var MenuCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MenuCtrl = $controller('MenuCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
        expect(scope.isActive('/')).toBe(true);
    });
});
