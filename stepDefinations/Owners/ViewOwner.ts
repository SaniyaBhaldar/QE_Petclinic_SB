import { Given, When, Then } from "cucumber";
import { by, element } from "protractor";
import { OwnerListPageObjects } from "../../pageObjects/Owners/OwnerListPageObjects";
import { ViewOwnerPageObjects } from "../../pageObjects/Owners/viewOwnerPageObjects";
import appTestData from "../../TestData/appTestData";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let viewOwnerObj = new ViewOwnerPageObjects();
let ownerListObj = new OwnerListPageObjects();

//Scenario 1 : Verify user is able to navigate to owner information page

/*Given('User is on Owners List page', async function () {
    await ownerListObj.ownersListPageName.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
        console.log("Owners List Page Displayed");
    });
});*/

When('User clicks on Peter owner', async function () {

     //await ownerListObj.ownerName.click();

    let count = await ownerListObj.responseList.all(by.tagName("tr")).count();
    console.log(count);

    for (let i = 1; i <= count; i++) {
        let owners = await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
        //console.log(owners);

        if (owners == "Peter McTavish") {
            await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
            break;
        }
        else {
            console.log("Peter McTavish is not present in the list.")
        }

    }

});

Then('User should be navigate on Owners information page', async function () {
    await viewOwnerObj.ownerInfoTitle.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
        console.log("Owner info page displayed");
    });
});

Then('Able to see Pets and Visits title', async function () {
    let pageTitle = await viewOwnerObj.petsVisitsTitle.getText();
    await console.log(" Title as : " + pageTitle);
    await expect("Pets and Visits").to.equal(pageTitle);

    /*await viewOwnerObj.petsVisitsTitle.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
        console.log("Owner info page displayed");
    });*/
});


//Scenario 2 : Verify user pet details (Name, Birthdate, Type) on owner information page

Given('User is on Owners Information page', async function () {
    await viewOwnerObj.ownerInfoTitle.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
        console.log("On Owner info page");
    });

});

Then('User pet details Name, Birthdate, Type should displayed', async function () {
    let petName = await viewOwnerObj.petName.getText();
    console.log("PetName:" + petName);
    await expect(appTestData.appTestData.petDetails.PetName).to.equal(petName);

    let petBirthdate = await viewOwnerObj.petBirthdate.getText();
    console.log("Pet Birthdate:" + petBirthdate);
    await expect(appTestData.appTestData.petDetails.PetBirthdate).to.equal(petBirthdate);

    let petType = await viewOwnerObj.petType.getText();
    console.log("Pet Type:" + petType);
    await expect(appTestData.appTestData.petDetails.PetType).to.equal(petType);

});


