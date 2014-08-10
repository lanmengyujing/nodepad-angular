require.config({
    baseUrl: '../../app/javascript',
 //此处为路径缩写
//    paths: {
//        angular: '../../scripts/vendor/angular/angular'
//    }
    shim: {
        '../vendor/angular/angular': {
            exports: 'angular'
        }
    }
});

require(['pad-app', 'node-service', 'pad-directive'], function (app) {
});