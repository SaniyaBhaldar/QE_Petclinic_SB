import { Given, When, Then } from "cucumber";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor"
import { NewOwnerPageObjects } from "../pageObjects/Owners/NewOwnerPageObjects";
import { VeterinariansPageObjects } from "../pageObjects/VeterinariansPageObjects";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let homeObj = new HomePageObjects();
let newOwnerObj = new NewOwnerPageObjects();
let veterinariansObj = new VeterinariansPageObjects();

//Scenario 1 : Verify title of the page as 'veterinarians' on clicking menu 'all veterinarians'

Given('User clicks on veterinarians tab', async function () {
    await homeObj.Veterinarians.click();
});

When('User clicks on All veterinarians option', async function () {
    await homeObj.AllVeterinarians.click();
});

Then('veterinarians page title should be displayed', async function () {
    await veterinariansObj.pageTitle.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
        console.log("veterinarians page title get displayed")
    });
});

//Scenario 2 : Verify count of radiology veterinarians on 'veterinarians' page

Given('User is on veterinarians list page', async function () {
    let pageTitle = await veterinariansObj.pageTitle.getText();
    await expect("Veterinarians").to.equal(pageTitle);
});

Then('radiology veterinarians should be displayed', async function () {
    let vetList= await veterinariansObj.responseVetList.getText();
    await console.log("vetDetails : " + vetList);

    let count=(vetList.match(/radiology/g)).length;
    console.log("Count:"+count);

     /* vetList.each(function(element, index) {
        // Will print 0 First, 1 Second, 2 Third.
        element.getText().then(function (text) {
          console.log(index, text);
        });
      });*/

      /*let count;
    for(let i=0;i<10;i++)
    {
        if(vetList.match(/radiology/g)){
            count++;
            console.log("count1:"+count);
        }
        console.log("count:"+count);
    }
    //var  = vetList.indexOf("radiology");*/

});

