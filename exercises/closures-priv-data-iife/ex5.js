"use strict";

const Account = (function () {
  let userEmail, userPassword, userFirstName, userLastName;

  function getRandomName() {
    return new Array(16)
      .fill(null)
      .map((_) => randomChar())
      .join("");
  }

  function randomChar() {
    const randomSeed = Math.floor(Math.random() * 36);
    if (randomSeed < 10) return String(randomSeed);
    else return String.fromCharCode(randomSeed - 10 + "a".charCodeAt());
  }

  function executeIfPasswordValid(password, callback) {
    if (password === userPassword) {
      return callback();
    } else {
      return "Invalid password!";
    }
  }

  return {
    init(email, password, firstName, secondName) {
      [userEmail, userPassword, userFirstName, userLastName] = [
        email,
        password,
        firstName,
        secondName,
      ];
      this.displayName = getRandomName();
      return this;
    },

    reanonymize(password) {
      return executeIfPasswordValid(
        password,
        () => !!(this.displayName = getRandomName())
      );
    },

    resetPassword(oldPassword, newPassword) {
      return executeIfPasswordValid(oldPassword, () => {
        userPassword = newPassword;
        return true;
      });
    },

    firstName(password) {
      return executeIfPasswordValid(password, () => userFirstName);
    },

    lastName(password) {
      return executeIfPasswordValid(password, () => userLastName);
    },

    email(password) {
      return executeIfPasswordValid(password, () => userEmail);
    },
  };
})();

const test = Object.create(Account).init(
  "sdkis@gmail.com",
  "123",
  "sasha",
  "kiselev"
);
console.log(test.firstName("123"));
console.log(test.resetPassword("12", "1234"));
console.log(test.resetPassword("123", "1234"));
console.log(test.lastName("1234"));

let fooBar = Object.create(Account).init("foo@bar.com", "123456", "foo", "bar");
console.log(fooBar.firstName); // returns the firstName function
console.log(fooBar.email); // returns the email function
console.log(fooBar.firstName("123456")); // logs 'foo'
console.log(fooBar.firstName("abc")); // logs 'Invalid Password'
console.log(fooBar.displayName); // logs 16 character sequence
console.log(fooBar.resetPassword("123", "abc")); // logs 'Invalid Password';
console.log(fooBar.resetPassword("123456", "abc")); // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize("abc")); // returns true
console.log(displayName === fooBar.displayName); // logs false
