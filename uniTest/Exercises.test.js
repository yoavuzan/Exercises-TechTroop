const Ex = require("./Exercises.js");

test("isEven check if the number is even", function () {
  const Exercises = new Ex();
  const even = Exercises.isEven(0);
  expect(even).toBeTruthy();
  const odd = Exercises.isEven(1);
  expect(odd).toBeFalsy();
});

test("removeAtLeastOne function", () => {
  const Exercises = new Ex();
  const orginalArr = [1, 2, 3, 4, 5];
  const resArr = Exercises.removeAtLeastOne(orginalArr);
  expect(resArr.length).toBeLessThanOrEqual(orginalArr.length);
});

test("simplify function", () => {
  const Exercises = new Ex();
  const str = "a2yJDS!#\",.'";
  const simplifystr = Exercises.simplify(str);
  expect(simplifystr.length).toBeLessThan(str.length);
  ["!", "#", ".", ",", "'"];
  expect(simplifystr).toBe('a2yJDS"');
});

test("validate function", () => {
  const Exercises = new Ex();
  const empty = [];
  const invalid = [true, "yes", false];
  const invalid2 = [true, undefined, false];
  const invalid3 = [true, NaN, false];
  const truthy = [true, true, false]; // more true than false
  const falsy = [false, false, true]; // more false than true

  try {
    Exercises.validate(empty);
  } catch (e) {
    expect(e).toEqual({ error: "Need at least one boolean" });
  }

  try {
    Exercises.validate(invalid);
  } catch (e) {
    expect(e).toEqual({ error: "Need at least one boolean" });
  }

  try {
    Exercises.validate(invalid2);
  } catch (e) {
    expect(e).toEqual({ error: "Need at least one boolean" });
  }

  try {
    Exercises.validate(invalid3);
  } catch (e) {
    expect(e).toEqual({ error: "Need at least one boolean" });
  }

  expect(Exercises.validate(truthy)).toBe(true);
  expect(Exercises.validate(falsy)).toBe(false);
});
