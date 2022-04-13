const testing = require("./tri");


test('testing detecting operator', () => {
    expect(testing(5,3,8)).toBe("5+3=8")
  });