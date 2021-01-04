import { Given, When, Then } from "cucumber";
import { globalPageObjects } from "../pageObjects/globalPageObjects";
import { HomePageObjects } from "../pageObjects/homePageObjects";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let homeObj = new HomePageObjects();
let globalObj = new globalPageObjects();

//Scenario 1 : Verify title of the page as 'Pet Types' on clicking menu pettypes

When('User clicks on PetTypes tab', async function () {
    await homeObj.clickPetTypesMenu();
});

Then('Pet Types title should be displayed', async function () {
    await expect("Pet Types").to.equal(await globalObj.getPageTitleText());
});

