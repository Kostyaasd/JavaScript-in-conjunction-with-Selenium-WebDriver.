const { By } = require("selenium-webdriver");

const CoffeeLocatot = By.css("#c1>a[title='Кава']");
const RegistrationButtonLocator = By.css("a[href='/registration/']");
const PersonalaccountButtonLocator = By.css(
  "a[href='javascript:;'][id='login_logout_a']"
);
const ExitButtonLocator = By.css("input.submit[type='button'][value='Вийти']");
const email = "asd_bsa@ukr.net";
const password = "*******";   //asd7dsa@
const LoginRegistrationLocator = By.id("u_login");
const name = "*******"; //Goodmen
const PasswordRegistrationLocator = By.id("u_password");
const FullnameLocator = By.id("u_full_name");
const fullname = "Donald John Trump";
const EmailLocator = By.id("u_email");
const RegistrationButton = By.css(
  "input.submit[type=submit][value='Зареєструватися']"
);
const ArabicacoffeeLocator = By.css("a.img[title=Арабіка]>img[alt='']");
const inthebagLocator = By.css("a.add2basket[href='/basket/?add_id=868']");
const InputwindowLocator = By.css("a.plus");
const lightboxLocator = By.css("div.popup#basket_popup");
const designButtonLocator = By.css("a.button.button_checkout[href='/basket/'");
const radioButtonLocator = By.css("input.radio#pp_1");
const radioButton2Locator = By.css("input.radio.pm_opt#pm_2");
const radioButton3Locator = By.css("input.radio.dm_opt#dm_2");
const deliveryaddressLocator = By.css("input.radio.dm_opt#dm_4");
const lightbox = By.css("div#login_logout");

module.exports = {
  CoffeeLocatot,
  RegistrationButton,
  RegistrationButtonLocator,
  PersonalaccountButtonLocator,
  ExitButtonLocator,
  email,
  password,
  LoginRegistrationLocator,
  name,
  PasswordRegistrationLocator,
  FullnameLocator,
  fullname,
  EmailLocator,
  ArabicacoffeeLocator,
  inthebagLocator,
  InputwindowLocator,
  lightboxLocator,
  designButtonLocator,
  radioButton2Locator,
  radioButton3Locator,
  radioButtonLocator,
  deliveryaddressLocator,
  lightbox,
};
