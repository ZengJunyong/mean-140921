'use strict';

angular.module('mean-factory-interceptor', [])
    .factory('httpInterceptor', ['$q', '$location',
        function ($q, $location) {
            return {
                'response': function (response) {
                    console.log('httpInterceptor response');
                    if (response.status === 401) {
                        $location.path('/auth/login');
                        return $q.reject(response);
                    }
                    return response || $q.when(response);
                },

                'responseError': function (rejection) {
                    console.log('httpInterceptor responseError');
                    if (rejection.status === 401) {
                        $location.url('/auth/login');
                        return $q.reject(rejection);
                    }
                    return $q.reject(rejection);
                }

            };
        }
    ])
//Http Interceptor to check auth failures for XHR requests
    .config(['$httpProvider',
        function ($httpProvider) {
            $httpProvider.interceptors.push('httpInterceptor');
        }
    ]);
