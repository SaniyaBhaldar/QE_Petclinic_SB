import { Before, After, Status } from "cucumber";
import { browser } from "protractor";

Before(async function () {
  //browser.manage().window().maximize();  given in conf file 
});

After(async function (scenario) {
  
  if(scenario.result.status==="failed"){
  const screenshot = await browser.takeScreenshot();
  this.attach(screenshot, "image/png")
  }
});

