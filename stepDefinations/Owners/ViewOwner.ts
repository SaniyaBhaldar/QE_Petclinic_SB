import { Given, When, Then } from "cucumber";
import { by, element } from "protractor";
import { globalPageObjects } from "../../pageObjects/globalPageObjects";
import { OwnerListPageObjects } from "../../pageObjects/owners/ownerListPageObjects";
import { ViewOwnerPageObjects } from "../../pageObjects/owners/viewOwnerPageObjects";
import appTestData from "../../testData/appTestData";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let viewOwnerObj = new ViewOwnerPageObjects();
let ownerListObj = new OwnerListPageObjects();
let globalObj = new globalPageObjects();

//Scenario 1 : Verify user is able to navigate to owner information page

/*Given('User is on Owners List page', async function () {  
        await expect(true).to.equal(globalObj.displayPageTitle());
});*/

When('User clicks on Peter owner', async function () {
    //ownerListObj.clickOwnerName();  direct clicks on Peter
    await viewOwnerObj.ClickOwner();
});

Then('User should be navigate on Owners information page', async function () {
    await expect(true).to.equal(await globalObj.displayPageTitle());
});

Then('Able to see Pets and Visits title', async function () {
    await expect("Pets and Visits").to.equal(await viewOwnerObj.getPetsVisitsTitleText());
});


//Scenario 2 : Verify user pet details (Name, Birthdate, Type) on owner information page

Given('User is on Owners Information page', async function () {
    await expect(true).to.equal(await globalObj.displayPageTitle());
});

Then('User pet details Name, Birthdate, Type should displayed', async function () {

    await expect(appTestData.appTestData.petDetails.PetName).to.equal(await viewOwnerObj.getPetNameText());
    await expect(appTestData.appTestData.petDetails.PetBirthdate).to.equal(await viewOwnerObj.getPetBirthdateText());
    await expect(appTestData.appTestData.petDetails.PetType).to.equal(await viewOwnerObj.getPetTypeText());

});


