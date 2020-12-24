import { ElementFinder, element, by, ElementArrayFinder, WebElement } from "protractor";

export class OwnerListPageObjects {
    ownersListPageName: ElementFinder;
    ownerName: ElementFinder;
    responseList: ElementFinder;


    constructor() {
        this.ownersListPageName=element(by.xpath("//*[@class='container xd-container']/h2"));
        this.ownerName=element(by.xpath("//*[contains(text(),'Peter McTavish')]"));
        this.responseList=element(by.xpath("//*[@class='table table-striped']/tbody"));
    }
}    