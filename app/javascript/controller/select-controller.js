define(["../pad-app"], function (app) {
    app.controller('SelectController', [ '$scope', function ($scope) {
        $scope.options = [
            {
                text: "text1",
                value: "value1"
            },
            {
                text: "text2",
                value: "value2"
            }
        ];

        $scope.demos = $scope.options[0].value;

        $scope.changeOptions = function () {
            $scope.options.length = 0;
            for (var j = 0; j < 5; j++) {
                var i = Math.floor(Math.random() * 100);
                $scope.options.push({
                    text: "text" + i,
                    value: "value" + i
                });
            }
            //change the default value after change the options
            $scope.demos = $scope.options[0].value;
        };
    }]);
});