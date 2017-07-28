var expect = require('expect.js');
var mPI = require('../lib/myParseInt.js');

describe('myParseInt', function() {
  it("parses a string of integer characters", function() {
    expect(mPI.myParseInt("1234")).to.eql(1234);
  });
  it("parses a string of negative integer characters", function() {
    expect(mPI.myParseInt("-3")).to.eql(-3);
  });
  it("returns NaN when string doesn't begin with an integer within the base", function() {
    expect(isNaN(mPI.myParseInt('hello'))).to.eql(true);
    expect(isNaN(mPI.myParseInt(20, 2))).to.eql(true);
  });
  it("parses a base larger than 10", function() {
    expect(mPI.myParseInt("ff", 16)).to.eql(255);
  });
  it("parses from a binary string", function() {
    expect(mPI.myParseInt("101", 2)).to.eql(5);
  });
  it("parses from a binary integer", function() {
    expect(mPI.myParseInt(100, 2)).to.eql(4);
  });
  it("turns undefined into 86464843759093, because of parseInt's call to toString", function() {
    expect(mPI.myParseInt(undefined, 36)).to.eql(86464843759093);
  })
  it("doesn't assume a `-` is an integer", function() {
    expect(isNaN(mPI.myParseInt("-"))).to.eql(true);
  })
  it("returns NaN if passed an empty string", function() {
    expect(isNaN(mPI.myParseInt(""))).to.eql(true);
  })
});


// var testCases = [
//   [['1234'], 1234],
//   [[' -3'], -3],
//   [['hello'], NaN],
//   [['ff', 16], 255],
//   [[20, 2], NaN],
//   [['101', 2], 5],
//   [[100, 2], 4]
// ];
