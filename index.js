var myApp = angular.module("myApp", []);

myApp.controller("mainController", function($scope) {
  $scope.name = "VenturX: Prototype";
  $scope.guest = "16@test.com";
  $scope.log = "Log out";

  $scope.title = ["Market", "Pain", "Benefit"];
  $scope.desc = [
    "Fill in who are your customers?",
    "What is the pain statement that you are trying to solve for them?",
    "What is the benefit that will match that pain statement?"
  ];
  $scope.edit = "Edit Profile";
});

myApp.controller("Ctrl", function MainCtrl() {
  this.stat1 = {
    numb: 27,
    numb2: 27,
    name: "Product",
    metric: "%",
    color: "rgb(255,137,13)"
  };
  this.stat2 = {
    numb: 12.5,
    numb2: 3,
    name: "Runway",
    metric: "months",
    color: "rgb(255,137,13)"
  };
  this.stat3 = {
    numb: 24,
    numb2: 24,
    name: "Conversion",
    metric: "%",
    color: "rgb(255,137,13)"
  };
  this.stat4 = {
    numb: 100,
    numb2: 100,
    name: "Engagement",
    metric: "%",
    color: "rgb(33,253,49)"
  };
});

angular.module("myApp").component("gauge", {
  templateUrl: "template.html",
  bindings: {
    stat1: "="
  }
});
