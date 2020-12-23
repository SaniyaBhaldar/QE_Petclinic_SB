import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class VeterinariansPageObjects {
   
    pageTitle: ElementFinder;
    responseVetList: ElementFinder;

    constructor() {
        
        this.pageTitle=element(by.xpath("//*[@class='container xd-container']/h2"));
        this.responseVetList=element(by.xpath("//*[@class='table table-striped']/tbody"));
    }
}