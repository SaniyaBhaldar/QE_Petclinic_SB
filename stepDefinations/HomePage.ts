import { Given, When, Then } from "cucumber";
import { HomePageObjects } from "../pageObjects/homePageObjects";
import appTestData from "../testData/appTestData";
import { globalPageObjects } from "../pageObjects/globalPageObjects";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let homeObj = new HomePageObjects();
let globalObj=new globalPageObjects();

//Scenario 1 : Verify User will able to navigate to Petclinic application

Given('User will navigate to Petclinic url', async function () {
    homeObj.openBrowser(appTestData.appTestData.baseURLData.baseURL);
});

Then('User should able to see Welcome to Petclinic message', async function () {
    await expect(true).to.equal(await homeObj.displayWelcomeMsg());

});
Then('User should able to see title of the webpage', async function () {
    await expect("SpringPetclinicAngular").to.equal(await homeObj.getPageTitle());
});

//Scenario 2 : Verify User able to see Five menus on homepage

Given('User is on Petclinic home page', async function () { 
        await expect("Welcome").to.equal(await globalObj.getPageTitleText());
});

Then('Five menus should be displayed as Home Owners Veterinarians Pet Types and Specialties', async function () {
    await expect(appTestData.appTestData.homePageLabels.homeTab).to.equal(await homeObj.getHomeMenuText());
    await expect(appTestData.appTestData.homePageLabels.ownersTab).to.equal(await homeObj.getOwnersText());
    await expect(appTestData.appTestData.homePageLabels.VetTab).to.equal(await homeObj.getVeterinariansText());
    await expect(appTestData.appTestData.homePageLabels.petTypesTab).to.equal(await homeObj.getPetTypesText());
    await expect(appTestData.appTestData.homePageLabels.specialitiesTab).to.equal(await homeObj.getSpecialtiesText());
});

