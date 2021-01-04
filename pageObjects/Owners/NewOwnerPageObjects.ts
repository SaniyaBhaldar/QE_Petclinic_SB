import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import appTestData from "../../testData/appTestData";
import { globalPageObjects } from "../globalPageObjects";

let globalObj = new globalPageObjects();

export class NewOwnerPageObjects {

    //  this.newOwnerTitle= element(by.xpath("//*[contains(text(),'New Owner')]")); 

    private firstName = element(by.css("[for='firstName']"));
    private lastName = element(by.css("[for='lastName']"));
    private address = element(by.css("[for='address']"));
    private city = element(by.css("[for='city']"));
    private telephone = element(by.css("[for='telephone']"));
    private firstNameTextField = element(by.id("firstName"));
    private lastNameTextField = element(by.id("lastName"));
    private addressTextField = element(by.id("address"));
    private cityTextField = element(by.id("city"));
    private telephoneTextField = element(by.id("telephone"));
    private addOwnerButton = element(by.buttonText("Add Owner"));

    getFirstNameText() {
        return this.firstName.getText();
    }

    getLastNameText() {
        return this.lastName.getText();
    }

    getAddressText() {
        return this.address.getText();
    }

    getCityText() {
        return this.city.getText();
    }

    getTelephoneText() {
        return this.telephone.getText();
    }

    sendKeyFirstName() {
        return this.firstNameTextField.sendKeys(appTestData.appTestData.newOwnerData.FirstName);
    }

    sendKeyLastName() {
        return this.lastNameTextField.sendKeys(appTestData.appTestData.newOwnerData.LastName);
    }

    sendKeyAddress() {
        return this.addressTextField.sendKeys(appTestData.appTestData.newOwnerData.Address);
    }

    sendKeyCity() {
        return this.cityTextField.sendKeys(appTestData.appTestData.newOwnerData.City);
    }

    sendKeyTelephone() {
        return this.telephoneTextField.sendKeys(appTestData.appTestData.newOwnerData.Telephone);
    }

    clickAddOwnerButton(){
        return this.addOwnerButton.click();
    }

}