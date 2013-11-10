'use strict';

angular
  .module('app', [])
  .provider('<%= testName %>', [function() {
    this.$get = function() {
      return {
        cool: true
      };
    };
  }]);
