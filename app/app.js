var myShivApp = angular.module('myShivApp',['ngRoute', 'ngAnimate']);

myShivApp.config (['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'ShivController'
    })

    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactController'
    })

    .when('/contact-success', {
        templateUrl: 'views/contact-success.html',
        controller: 'ContactController'
    })
    
    .when('/directory',{
        templateUrl: 'views/directory.html',
        controller: 'ShivController'
    }).otherwise({
        redirectTo : '/home'
    });

}]);

//Custom Directives

myShivApp.directive('randomList', [function(){
    return{
        restrict: 'E',
        scope: {
            lists: '=',
            title: '='
        },
        templateUrl: 'views/random.html',
        transclude: true,
        replace:true,
        // template: '<img ng-src="{{lists[random].thumb}}">',
        controller: function($scope){
            $scope.random = Math.floor(Math.random() * 4);
        }
    };
}]);

myShivApp.controller('ShivController', ['$scope', function($scope){
    $scope.message ="Hi Everyone...!";

    $scope.removeList = function(list){
        var removedList = $scope.lists.indexOf(list);
        $scope.lists.splice(removedList, 1);
    }

    $scope.addList = function(){
        $scope.lists.push({
            name: $scope.newlist.name,
            belt: $scope.newlist.belt,
            rate: parseInt($scope.newlist.rate),
            available: true
        });

        $scope.newlist.name ="";
        $scope.newlist.belt ="";
        $scope.newlist.rate = "";
    };

    $scope.removeAll = function(){
        $scope.lists = [];
    };

    

    $scope.lists = [
        {
            name:"yoshi",
            belt:"green",
            rate:"50",
            available:true,
            thumb: "content/img/1.jpg"
        },
        {
            name:"Crystal",
            belt:"yellow",
            rate:"100",
            available:true,
            thumb: "content/img/2.jpg"
        },
        {
            name:"Ryu",
            belt:"orange",
            rate:"120",
            available:true,
            thumb: "content/img/3.jpg"
        },
        {
            name:"Shaun",
            belt:"black",
            rate:"70",
            available:true,
            thumb: "content/img/4.jpg"
        }
    ];

    console.log(angular.toJson($scope.lists));

    // $http.get('data/lists.json').success(function(data){
    //     $scope.lists = data;
    // });
}]);

myShivApp.controller('ContactController',['$scope', '$location', function($scope, $location){

    $scope.sendMessage = function(){
        $location.path('/contact-success');
    }

}]);