'use strict';

angular.module('webapps3Project2App')
  .controller('UserInfoController', function ($scope, User, Auth) {

    //check for login
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.getCurrentUser = Auth.getCurrentUser;



    // $scope.errors = {};
    //
    // $scope.changePassword = function(form) {
    //   $scope.submitted = true;
    //   if(form.$valid) {
    //     Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
    //     .then( function() {
    //       $scope.message = 'Password successfully changed.';
    //     })
    //     .catch( function() {
    //       form.password.$setValidity('mongoose', false);
    //       $scope.errors.other = 'Incorrect password';
    //       $scope.message = '';
    //     });
    //   }
		// };
  });
