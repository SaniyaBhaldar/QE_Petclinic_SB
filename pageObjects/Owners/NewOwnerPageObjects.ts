import { ElementFinder, element, by, ElementArrayFinder } from "protractor";


export class NewOwnerPageObjects {
    firstName: ElementFinder;
    lastName: ElementFinder;
    address: ElementFinder;
    city: ElementFinder;
    telephone: ElementFinder;
    newOwnerTitle: ElementFinder;
    addOwnerButton: ElementFinder;
    firstNameTextField: ElementFinder;
    lastNameTextField: ElementFinder;
    addressTextField: ElementFinder;
    cityTextField: ElementFinder;
    telephoneTextField: ElementFinder;

    constructor() {
        this.newOwnerTitle= element(by.xpath("//*[contains(text(),'New Owner')]")); 
        this.firstName = element(by.xpath("//*[contains(text(),'First Name')]"));
        this.lastName = element(by.xpath("//*[contains(text(),'Last Name')]"));
        this.address = element(by.xpath("//*[contains(text(),'Address')]"));
        this.city = element(by.xpath("//*[contains(text(),'City')]"));
        this.telephone = element(by.xpath("//*[contains(text(),'Telephone')]"));
        this.firstNameTextField = element(by.xpath("//*[@id='firstName']"));
        this.lastNameTextField = element(by.xpath("//*[@id='lastName']"));
        this.addressTextField = element(by.xpath("//*[@id='address']"));
        this.cityTextField = element(by.xpath("//*[@id='city']"));
        this.telephoneTextField = element(by.xpath("//*[@id='telephone']"));
        this.addOwnerButton = element(by.xpath("//*[contains(text(),'Add Owner')]"));
    }
}