const App = require("angular");

App.config(()=>{

});

App.run(()=>{

});

App.controller("AppContoller",$scope=>{
    $scope.names = ['George','Luis', 'Pagarigan'];
    $scope.message ="new message";
});