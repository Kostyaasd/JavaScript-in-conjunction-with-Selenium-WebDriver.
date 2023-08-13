const { By } = require("selenium-webdriver");
const { expect } = require("chai");

const LoginLocator = By.name("login");
const PasswordLocator = By.name("password");
const LoginButtonLocator = By.name("do_login");
const lightbox = By.css("div#login_logout");
const LoginRegistrationButton = By.id("login_logout_a");

async function functionLogin(email, password) {
  await driver.findElement(LoginRegistrationButton).click();
  expect(await driver.findElement(lightbox).isDisplayed()).to.be.true;
  await driver.findElement(LoginLocator).sendKeys(email);
  await driver.findElement(PasswordLocator).sendKeys(password);
  await driver.findElement(LoginButtonLocator).click();
}
module.exports = functionLogin;
