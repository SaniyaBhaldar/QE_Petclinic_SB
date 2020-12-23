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
const HomePageObjects_1 = require("../../pageObjects/HomePageObjects");
const NewOwnerPageObjects_1 = require("../../pageObjects/Owners/NewOwnerPageObjects");
const OwnerListPageObjects_1 = require("../../pageObjects/Owners/OwnerListPageObjects");
const viewOwnerPageObjects_1 = require("../../pageObjects/Owners/viewOwnerPageObjects");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);
let homeObj = new HomePageObjects_1.HomePageObjects();
let newOwnerObj = new NewOwnerPageObjects_1.NewOwnerPageObjects();
let viewOwnerObj = new viewOwnerPageObjects_1.ViewOwnerPageObjects();
let ownerListObj = new OwnerListPageObjects_1.OwnerListPageObjects();
//Scenario 1 : Verify title of the page as 'Owners'
cucumber_1.Given('User is on Owners List page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield ownerListObj.ownersListPageName.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
                console.log("Owners List Page Displayed");
            });
        });
    });
});
cucumber_1.Then('Owners page title should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pageTitle = yield ownerListObj.ownersListPageName.getText();
        yield console.log(" PageTitle as : " + pageTitle);
        yield expect("Owners").to.equal(pageTitle);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3duZXJMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3RlcERlZmluYXRpb25zL093bmVycy9Pd25lckxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsdUVBQW9FO0FBQ3BFLHNGQUFtRjtBQUNuRix3RkFBcUY7QUFDckYsd0ZBQXFGO0FBRXJGLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRTNCLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDcEMsSUFBSSxXQUFXLEdBQUcsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDO0FBQzVDLElBQUksWUFBWSxHQUFFLElBQUksMkNBQW9CLEVBQUUsQ0FBQztBQUM3QyxJQUFJLFlBQVksR0FBQyxJQUFJLDJDQUFvQixFQUFFLENBQUM7QUFFNUMsbURBQW1EO0FBRW5ELGdCQUFLLENBQUMsNkJBQTZCLEVBQUU7O1FBQ2pDLE1BQU0sWUFBWSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFnQixNQUFNOztnQkFDM0UsTUFBTSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO1lBQzlDLENBQUM7U0FBQSxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHVDQUF1QyxFQUFFOztRQUMxQyxJQUFJLFNBQVMsR0FBRyxNQUFNLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoRSxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDbEQsTUFBTSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=