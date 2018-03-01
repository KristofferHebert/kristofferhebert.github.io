(function() {
    'use strict';
    var querySelector = document.querySelector.bind(document);

    var navdrawerContainer = querySelector('.navdrawer-container');
    var body = document.body;
    var appbarElement = querySelector('.app-bar');
    var menu = querySelector('.menu-icon');

    function closeMenu() {
        body.className = '';
    }

    function toggleMenu(e) {
        e.preventDefault();
        console.log('toggle');
        if (body.className == 'expanded') return body.className = '';
        body.className = 'expanded';

    }

    function isDesktop() {
        if (body.clientWidth > 768) body.className = '';
    }

    menu.addEventListener('click', toggleMenu);
    window.addEventListener('resize', isDesktop);
    navdrawerContainer.addEventListener('click', function(event) {
        if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
            closeMenu();
        }
    });


    angular.module('app', [])
        .controller('contactForm', ['$scope','$http', function($scope, $http) {
          $scope.contact = {};
          $scope.contactform = true;
          $scope.contact.to = "kris@hirekris.com";
          $scope.contact.subject = "Contact Form Submission";
          $scope.sendContact = function(){
            $http({
              method: 'POST',
              url: 'http://email.hirekris.com/email/',
              data: $scope.contact,
              headers: {'Content-Type': 'application/json'}
          }).success(function(data, status, headers, config) {
              console.log(data);
              $scope.contactform = false;
          }).error(function() {
              console.log("ERROR")
          });

          };
    }])
        .controller('teardownForm', ['$scope','$http', function($scope, $http) {
          $scope.contact = {};
          $scope.contactform = true;
          $scope.contact.to = "kris@hirekris.com";
          $scope.contact.subject = "Website Teardown Submission";
          $scope.sendTeardown = function(){
            $http({
              method: 'POST',
              url: 'http://email.hirekris.com/email/',
              data: $scope.contact,
              headers: {'Content-Type': 'application/json'}
          }).success(function(data, status, headers, config) {
              $scope.contactform = false;
          }).error(function() {
              console.log("ERROR")
          });

          };
    }])

})();
