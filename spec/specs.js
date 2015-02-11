describe('coinChange', function() {
  it("returns the lowest amount of coins needed to make the number entered", function() {
    expect(coinChange(100)).to.eql([4, 0, 0, 0]);
  });

  it("does the same for lower change", function() {
    expect(coinChange(24)).to.eql([0, 2, 0, 4]);
  });

  it("does it even bettah", function() {
    expect(coinChange(41)).to.eql([1, 1, 1, 1]);
  });

  it("do betta", function() {
    expect(coinChange(15)).to.eql([0, 1, 1, 0]);
  });

  it("do", function() {
    expect(coinChange(2764859)).to.eql([110594, 0, 1, 4]);
  });
});
