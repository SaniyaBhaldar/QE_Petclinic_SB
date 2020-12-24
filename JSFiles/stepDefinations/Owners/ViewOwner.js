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
const OwnerListPageObjects_1 = require("../../pageObjects/Owners/OwnerListPageObjects");
const viewOwnerPageObjects_1 = require("../../pageObjects/Owners/viewOwnerPageObjects");
const appTestData_1 = require("../../TestData/appTestData");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);
let viewOwnerObj = new viewOwnerPageObjects_1.ViewOwnerPageObjects();
let ownerListObj = new OwnerListPageObjects_1.OwnerListPageObjects();
//Scenario 1 : Verify user is able to navigate to owner information page
/*Given('User is on Owners List page', async function () {
    await ownerListObj.ownersListPageName.isDisplayed().then(async function (result) {
        await expect(true).to.equal(result);
        console.log("Owners List Page Displayed");
    });
});*/
cucumber_1.When('User clicks on Peter owner', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //await ownerListObj.ownerName.click();
        let count = yield ownerListObj.responseList.all(protractor_1.by.tagName("tr")).count();
        console.log(count);
        for (let i = 1; i <= count; i++) {
            let owners = yield protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");
            //console.log(owners);
            if (owners == "Peter McTavish") {
                yield protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
                break;
            }
            else {
                console.log("Peter McTavish is not present in the list.");
            }
        }
    });
});
cucumber_1.Then('User should be navigate on Owners information page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield viewOwnerObj.ownerInfoTitle.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
                console.log("Owner info page displayed");
            });
        });
    });
});
cucumber_1.Then('Able to see Pets and Visits title', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pageTitle = yield viewOwnerObj.petsVisitsTitle.getText();
        yield console.log(" Title as : " + pageTitle);
        yield expect("Pets and Visits").to.equal(pageTitle);
        /*await viewOwnerObj.petsVisitsTitle.isDisplayed().then(async function (result) {
            await expect(true).to.equal(result);
            console.log("Owner info page displayed");
        });*/
    });
});
//Scenario 2 : Verify user pet details (Name, Birthdate, Type) on owner information page
cucumber_1.Given('User is on Owners Information page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield viewOwnerObj.ownerInfoTitle.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
                console.log("On Owner info page");
            });
        });
    });
});
cucumber_1.Then('User pet details Name, Birthdate, Type should displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let petName = yield viewOwnerObj.petName.getText();
        console.log("PetName:" + petName);
        yield expect(appTestData_1.default.appTestData.petDetails.PetName).to.equal(petName);
        let petBirthdate = yield viewOwnerObj.petBirthdate.getText();
        console.log("Pet Birthdate:" + petBirthdate);
        yield expect(appTestData_1.default.appTestData.petDetails.PetBirthdate).to.equal(petBirthdate);
        let petType = yield viewOwnerObj.petType.getText();
        console.log("Pet Type:" + petType);
        yield expect(appTestData_1.default.appTestData.petDetails.PetType).to.equal(petType);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld093bmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3RlcERlZmluYXRpb25zL093bmVycy9WaWV3T3duZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXlDO0FBQ3pDLHdGQUFxRjtBQUNyRix3RkFBcUY7QUFDckYsNERBQXFEO0FBRXJELE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRTNCLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxZQUFZLEdBQUcsSUFBSSwyQ0FBb0IsRUFBRSxDQUFDO0FBQzlDLElBQUksWUFBWSxHQUFHLElBQUksMkNBQW9CLEVBQUUsQ0FBQztBQUU5Qyx3RUFBd0U7QUFFeEU7Ozs7O0tBS0s7QUFFTCxlQUFJLENBQUMsNEJBQTRCLEVBQUU7O1FBRTlCLHVDQUF1QztRQUV4QyxJQUFJLEtBQUssR0FBRyxNQUFNLFlBQVksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5CLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLEdBQUcsQ0FBQyxHQUFHLFFBQVEs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