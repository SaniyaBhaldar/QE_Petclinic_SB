"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const HomePageObjects_1 = require("../../pageObjects/HomePageObjects");
const NewOwnerPageObjects_1 = require("../../pageObjects/Owners/NewOwnerPageObjects");
const OwnerListPageObjects_1 = require("../../pageObjects/Owners/OwnerListPageObjects");
const appTestData_1 = require("../../TestData/appTestData");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);
let homeObj = new HomePageObjects_1.HomePageObjects();
let newOwnerObj = new NewOwnerPageObjects_1.NewOwnerPageObjects();
let ownerListObj = new OwnerListPageObjects_1.OwnerListPageObjects();
//Scenario 1 : Verify user able to see new owner page after clicking ADD NEW sub-menu of Owners tab
cucumber_1.When('User clicks on Owners tab', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homeObj.Owners.click();
    });
});
cucumber_1.When('Clicks on ADD NEW sub-menu', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homeObj.AddNewOwner.click();
    });
});
cucumber_1.Then('New Owner page should get displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.newOwnerTitle.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
                console.log("New Owner page get displayed");
            });
        });
    });
});
//Scenario 2 : Verify User able to see five text field labels on new owner registration page
cucumber_1.Given('User is on new owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.newOwnerTitle.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
                console.log("new owner page");
            });
        });
    });
});
cucumber_1.Then('Five text fields labels should be displayed as FirstName, LastName, Address, City, Telephone', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let firstName = yield newOwnerObj.firstName.getText();
        yield console.log(" FirstName as : " + firstName);
        yield expect("First Name").to.equal(firstName);
        let lastName = yield newOwnerObj.lastName.getText();
        yield console.log(" lastName as : " + lastName);
        yield expect("Last Name").to.equal(lastName);
        let address = yield newOwnerObj.address.getText();
        yield console.log(" address as : " + address);
        yield expect("Address").to.equal(address);
        let city = yield newOwnerObj.city.getText();
        yield console.log(" city as : " + city);
        yield expect("City").to.equal(city);
        let telephone = yield newOwnerObj.telephone.getText();
        yield console.log(" telephone as : " + telephone);
        yield expect("Telephone").to.equal(telephone);
    });
});
//Scenario 3 : Verify user is able to add New Owner
//to do
cucumber_1.Given('User is on New Owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.newOwnerTitle.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
                console.log("new owner page");
            });
        });
    });
});
cucumber_1.When('User enter valid First Name, Last Name, Address, City, Telephone', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let firstName = appTestData_1.default.appTestData.newOwnerData.FirstName;
        yield newOwnerObj.firstNameTextField.sendKeys(firstName);
        let lastName = appTestData_1.default.appTestData.newOwnerData.LastName;
        yield newOwnerObj.lastNameTextField.sendKeys(lastName);
        let address = appTestData_1.default.appTestData.newOwnerData.Address;
        yield newOwnerObj.addressTextField.sendKeys(address);
        let city = appTestData_1.default.appTestData.newOwnerData.City;
        yield newOwnerObj.cityTextField.sendKeys(city);
        let telephone = appTestData_1.default.appTestData.newOwnerData.Telephone;
        yield newOwnerObj.telephoneTextField.sendKeys(telephone);
    });
});
cucumber_1.When('User clicks on Add Owner button on New Owner page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield newOwnerObj.addOwnerButton.click();
    });
});
cucumber_1.Then('User should be navigate on Owners page and added owner should be displayed at last', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pagename = yield ownerListObj.ownersListPageName.getText();
        yield console.log("page name is : " + pagename);
        yield expect("Owners").to.equal(pagename);
        let ec = protractor_1.ExpectedConditions;
        yield protractor_1.browser.refresh();
        yield protractor_1.browser.wait(ec.visibilityOf(ownerListObj.responseList), 20000, 'Taking too long to load');
        let lastRowEntry = yield ownerListObj.responseList.all(protractor_1.by.tagName("tr")).last();
        console.log("lastRowEntry" + lastRowEntry);
        protractor_1.browser.executeScript('window.scrollBy(0,1000)');
        let newOwnerDetails = yield lastRowEntry.getText();
        yield console.log("newOwnerDetails : " + newOwnerDetails);
        yield expect("Raj Mane 15 street NewYork 9870688977").to.equal(newOwnerDetails);
        /* let count = await ownerListObj.responseList.all(by.tagName("tr")).count();
         console.log(count);
     
         for (let i = 1; i <= count; i++) {
             let owners = await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
             console.log(owners);
     
             //to do scrolling logic
     
             if (owners == "Sarah John") {
                 await console.log("Sarah John is added successfully in the list.")
                 break;
             }
             else {
                 console.log("Sarah John is not added in the list.")
             }
     
         }
     */
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3T3duZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zdGVwRGVmaW5hdGlvbnMvT3duZXJzL05ld093bmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUE2RTtBQUM3RSx1RUFBb0U7QUFDcEUsc0ZBQW1GO0FBQ25GLHdGQUFxRjtBQUNyRiw0REFBcUQ7QUFFckQsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQzlELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7QUFFM0IsSUFBSSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2hELGlCQUFpQixDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUU3QixJQUFJLE9BQU8sR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUNwQyxJQUFJLFdBQVcsR0FBRyxJQUFJLHlDQUFtQixFQUFFLENBQUM7QUFDNUMsSUFBSSxZQUFZLEdBQUcsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDO0FBRTlDLG1HQUFtRztBQUVuRyxlQUFJLENBQUMsMkJBQTJCLEVBQUU7O1FBQzlCLE1BQU0sT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDRCQUE0QixFQUFFOztRQUMvQixNQUFNLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUNILGVBQUksQ0FBQyxxQ0FBcUMsRUFBRTs7UUFDeEMsTUFBTSxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFnQixNQUFNOztnQkFDckUsTUFBTSxN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