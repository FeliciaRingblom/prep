//console.log("in js/dataController.js");
angular.module('SchoolApp.controllers', []).controller('schoolController', function($scope, http) {
    $scope.nameFilter = null;
    $scope.schoolsList = [];

    http.getSchools().success(function (response) {
        //Dig into the responde to get the relevant data
        $scope.schoolsList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    });
  });