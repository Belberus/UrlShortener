angular.module('urlShortener')

    .controller('unsafePageCtrl', ['$scope', '$state', 'auth', 'unsafePage', function ($scope, $state, auth, unsafePage) {

        $scope.information;
        $scope.safe;

        // feedback handling variables
        $scope.error = false;
        $scope.success = false;
        $scope.successMsg = "";
        $scope.errorMsg = "";
        $scope.safe = true;
        $scope.json = false;

        // hide the error mensage
        $scope.hideError = function () {
            $scope.errorMsg = "";
            $scope.error = false;
        };
        // show the error mensage
        var showError = function (error) {
            $scope.errorMsg = error;
            $scope.error = true;
        };

        // show the success mensage
        var showSuccess = function (message) {
            $scope.successMsg = message;
            $scope.success = true;
        };

        // hide the success mensage
        $scope.hideSuccess = function () {
            $scope.success = false;
            $scope.successMsg = "";
        };

        $scope.viewJSON = function () {
            $scope.json = true;
        };

        $scope.hideJSON = function () {
            $scope.json = false;
        };


        $scope.getInformationPage = function () {
            $scope.hideJSON();
            unsafePage.getInformationPage(function (informationLists) {
                $scope.information = informationLists;
            });
        };
        $scope.getInformationPage();
    }]);
