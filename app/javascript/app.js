require.config({
    baseUrl: '../../app/javascript',
    //此处为路径缩写
    paths: {
        jquery: '../vendor/jquery/jquery'
    },
    shim: {
        '../vendor/angular/angular': {
            exports: 'angular'
        }
    }
});

require([ 'pad-app', 'service/node-service', 'directive/pad-directive'], function (app) {
});