const percySnapshot = require("@percy/webdriverio");

describe("go through every page and take screenshot", () => {
  it("will take screenshot of landing page", async () => {
    await percySnapshot("webdriver.io page");
  });
});
