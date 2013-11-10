'use strict';

describe('<%= testName %>', function() {

  var <%= testName %>;
  beforeEach(module('app'));

  beforeEach(inject(function(_<%= testName %>_) {
    <%= testName %> = _<%= testName %>_;
  }));

  describe('Your first test', function() {

    it('does something meaningful', function() {
      expect(<%= testName %>.cool).toEqual(true);
    });

  });

});
