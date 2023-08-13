const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");
const functionLogin = require("../Login.js");
const Locator = require("../Locator.js");

describe("Website test 'AROMISTO'", async function () {
  this.timeout(5000);

  const testUrl = "https://aromisto.com.ua/";

  it("Positive test, user registration.", async function () {
    this.timeout(2000);

    await driver.get(testUrl);

    await driver.findElement(Locator.LoginRegistrationButton).click();
    expect(await driver.findElement(Locator.lightbox).isDisplayed()).to.be.true;
    await driver.findElement(Locator.RegistrationButtonLocator).click();

    await driver.findElement(Locator.LoginRegistrationLocator).sendKeys(name);
    await driver
      .findElement(Locator.PasswordRegistrationLocator)
      .sendKeys(password);
    await driver.findElement(Locator.FullnameLocator).sendKeys(fullname);
    await driver.findElement(Locator.EmailLocator).sendKeys(email);

    await driver.findElement(Locator.RegistrationButton).click();

    const greentingTexst = await driver
      .findElement(By.xpath("//*[@id='inf']/ul/li/text()"))
      .getText();
    expect(greentingTexst).to.be.equal("Реєстрація пройшла успішно");

    await driver.findElement(Locator.PersonalaccountButtonLocator).click();
    await driver.findElement(Locator.ExitButtonLocator).click();
  });

  it("Positive test, Account login and exit", async function () {
    

    await driver.get(testUrl);

    await functionLogin(Locator.email, Locator.password);

    await driver.findElement(Locator.PersonalaccountButtonLocator).click();
    await driver.findElement(Locator.ExitButtonLocator).click();
  });

  it("Positive test, account login, product selection, and ordering.", async function () {


    await driver.get(testUrl);

    await functionLogin(Locator.email, Locator.password);

    await driver.findElement(Locator.CoffeeLocatot).click();
    await driver.findElement(Locator.ArabicacoffeeLocator).click();
    await driver.findElement(Locator.inthebagLocator).click();

    await driver.findElement(Locator.InputwindowLocator).click();

    await new Promise((r) => setTimeout(r, 300));

    await driver.findElement(Locator.InputwindowLocator).click();
    await new Promise((r) => setTimeout(r, 300));

    await driver.findElement(Locator.designButtonLocator).click();
    await driver.findElement(Locator.radioButtonLocator).click();
    await driver.findElement(Locator.radioButton2Locator).click();
    await driver.findElement(Locator.radioButton3Locator).click();

    await new Promise((r) => setTimeout(r, 300));
    await driver.findElement(Locator.deliveryaddressLocator).click();
    await driver
      .findElement(By.css("textarea[name='order[address][4]']"))
      .sendKeys("вулиця Володимирська, 77, Київ, 01601");
    await driver
      .findElement(By.css("textarea[name='order[comments]']"))
      .sendKeys("Вітаю! Замовлення не обробляйте, ми тестуємо ваш сайт! Дякую!");
    await driver.findElement(By.css("input.submit.orderbtn[type='submit']")).click(); // Order Confirmations

    const greentingTexst = await driver.findElement(By.xpath("//*[@id='content']/div[2]/div[2]/p")).getText(); 
    expect(greentingTexst).to.be.equal("Дякуємо за замовлення.");
  });
});
