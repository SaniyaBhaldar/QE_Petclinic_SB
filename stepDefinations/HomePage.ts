import { Given, When, Then } from "cucumber";
import { HomePageObjects } from "../pageObjects/HomePageObjects";
import { browser, by, element, ElementFinder, protractor } from "protractor"
import { NewOwnerPageObjects } from "../pageObjects/Owners/NewOwnerPageObjects";



const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);

let homeObj = new HomePageObjects();
let newOwnerObj=new NewOwnerPageObjects();

//Scenario 1 : Verify User will able to navigate to Petclinic application

Given('User will navigate to Petclinic url', async function () {
    await browser.get('http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/');
    await browser.sleep(1000);
});

Then('User should able to see Welcome to Petclinic message', async function () {
    await homeObj.WelcomeMsg.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});
Then('User should able to see title of the webpage', async function () {
    let title = await browser.getTitle();
    await console.log("WebPage Title is " + title);
    await expect("SpringPetclinicAngular").to.equal(title);
});

//Scenario 2 : Verify User able to see Five menus on homepage

Given('User is on Petclinic home page', async function () {
    await homeObj.WelcomeMsg.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
    });
});
Then('Five menus should be displayed as Home,Owners,Veterinarians,Pet Types and Specialties', async function () {
    let menu1 = await homeObj.HomeMenu.getAttribute("innerText");
    await console.log(" First Menu : " + menu1);
    await expect("HOME").to.equal(menu1);

    let menu2 = await homeObj.Owners.getAttribute("innerText");
    await console.log(" Second Menu : " + menu2);
    await expect("OWNERS").to.equal(menu2);

    let menu3 = await homeObj.Veterinarians.getAttribute("innerText");
    await console.log(" Third Menu : " + menu3);
    await expect("VETERINARIANS").to.equal(menu3);

    let menu4 = await homeObj.PetTypes.getAttribute("innerText");
    await console.log(" Fourth Menu : " + menu4);
    await expect("PET TYPES").to.equal(menu4);

    let menu5 = await homeObj.Specialties.getAttribute("innerText");
    await console.log(" Fifth Menu : " + menu5);
    await expect("SPECIALTIES").to.equal(menu5);
});

