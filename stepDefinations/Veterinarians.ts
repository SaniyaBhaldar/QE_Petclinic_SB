import { Given, When, Then } from "cucumber";
import { globalPageObjects } from "../pageObjects/globalPageObjects";
import { HomePageObjects } from "../pageObjects/homePageObjects";
import { VeterinariansPageObjects } from "../pageObjects/veterinariansPageObjects";
import { logHelper } from "../util/logHelper";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let homeObj = new HomePageObjects();
let globalObj = new globalPageObjects();
let veterinariansObj = new VeterinariansPageObjects();

//Scenario 1 : Verify title of the page as 'veterinarians' on clicking menu 'all veterinarians'

Given('User clicks on veterinarians tab', async function () {
    await homeObj.clickVeterinariansMenu();
});

When('User clicks on All veterinarians option', async function () {
    await homeObj.clickAllVeterinariansMenu();
});

Then('Veterinarians page title should be displayed', async function () {
    await expect(true).to.equal(await globalObj.displayPageTitle());
});

//Scenario 2 : Verify count of radiology veterinarians on 'veterinarians' page

Given('User is on veterinarians list page', async function () {
    logHelper.Log().debug("Page title is: " + await globalObj.getPageTitleText());
    await expect("Veterinarians").to.equal(await globalObj.getPageTitleText());
});

Then('Radiology veterinarians should be displayed with exact count', async function () {
    await expect(5).to.equal(await veterinariansObj.getRadiologyCount());
});

