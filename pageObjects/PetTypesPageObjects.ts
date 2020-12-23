import { ElementFinder, element, by, ElementArrayFinder } from "protractor";

export class PetTypesPageObjects {
   
    pageTitle: ElementFinder;

    constructor() {
        
        this.pageTitle=element(by.xpath("//*[@class='container xd-container']/h2"));
       
    }
}