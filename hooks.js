const { Builder, implicit } = require("selenium-webdriver");

exports.mochaHooks = {
  beforeEach: async function () {
    
    driver = await new Builder().forBrowser("chrome").build();
    await driver.manage().setTimeouts({ implicit: 3000 });
  },
  afterEach: async function () {
  
    await driver.quit();
  },
};


