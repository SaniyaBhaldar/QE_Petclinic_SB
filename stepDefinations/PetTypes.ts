import { Given, When, Then } from "cucumber";
import { HomePageObjects } from "../pageObjects/HomePageObjects";


import { PetTypesPageObjects } from "../pageObjects/PetTypesPageObjects";


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let homeObj = new HomePageObjects();
let petTypesObj = new PetTypesPageObjects();

//Scenario 1 : Verify title of the page as 'Pet Types' on clicking menu pettypes

When('User clicks on PetTypes tab', async function () {
    await homeObj.PetTypes.click();
    await console.log("User clicks");
});

Then('Pet Types title should be displayed', async function () {
    let pageTitle = await petTypesObj.pageTitle.getText();
    await console.log(" PageTitle as : " + pageTitle);
    await expect("Pet Types").to.equal(pageTitle);
});

