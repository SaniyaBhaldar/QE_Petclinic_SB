import { Given, When, Then } from "cucumber";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser } from "protractor"
import appTestData from "../TestData/appTestData";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let homeObj = new HomePageObjects();

//Scenario 1 : Verify User will able to navigate to Petclinic application

Given('User will navigate to Petclinic url', async function () {
    await browser.get(appTestData.appTestData.baseURLData.baseURL);
    await browser.sleep(1000);
});

Then('User should able to see Welcome to Petclinic message', async function () {
    await homeObj.WelcomeMsg.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});
Then('User should able to see title of the webpage', async function () {
    let title = await browser.getTitle();
    await expect("SpringPetclinicAngular").to.equal(title);
});

//Scenario 2 : Verify User able to see Five menus on homepage

Given('User is on Petclinic home page', async function () {
    await homeObj.WelcomeMsg.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});

Then('Five menus should be displayed as Home Owners Veterinarians Pet Types and Specialties', async function () {
    let menu1 = await homeObj.HomeMenu.getAttribute("innerText");
    await expect("HOME").to.equal(menu1);

    let menu2 = await homeObj.Owners.getAttribute("innerText");
    await expect("OWNERS").to.equal(menu2);

    let menu3 = await homeObj.Veterinarians.getAttribute("innerText");
    await expect("VETERINARIANS").to.equal(menu3);

    let menu4 = await homeObj.PetTypes.getAttribute("innerText");
    await expect("PET TYPES").to.equal(menu4);

    let menu5 = await homeObj.Specialties.getAttribute("innerText");
    await expect("SPECIALTIES").to.equal(menu5);
});

