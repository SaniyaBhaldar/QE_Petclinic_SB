import { Given, When, Then } from "cucumber";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { VeterinariansPageObjects } from "../pageObjects/VeterinariansPageObjects";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let homeObj = new HomePageObjects();
let veterinariansObj = new VeterinariansPageObjects();

//Scenario 1 : Verify title of the page as 'veterinarians' on clicking menu 'all veterinarians'

Given('User clicks on veterinarians tab', async function () {
    await homeObj.Veterinarians.click();
});

When('User clicks on All veterinarians option', async function () {
    await homeObj.AllVeterinarians.click();
});

Then('Veterinarians page title should be displayed', async function () {
    await veterinariansObj.pageTitle.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});

//Scenario 2 : Verify count of radiology veterinarians on 'veterinarians' page

Given('User is on veterinarians list page', async function () {
    let pageTitle = await veterinariansObj.pageTitle.getText();
    await expect("Veterinarians").to.equal(pageTitle);
});

Then('Radiology veterinarians should be displayed with exact count', async function () {
    let vetList= await veterinariansObj.responseVetList.getText();
    let count=(vetList.match(/radiology/g)).length;
    //console.log("Count of radiology vets:"+count);
    await expect("3").to.equal(count);

});

