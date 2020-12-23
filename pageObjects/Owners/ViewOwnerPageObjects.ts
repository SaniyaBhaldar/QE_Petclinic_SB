import { ElementFinder, element, by, ElementArrayFinder } from "protractor";


export class ViewOwnerPageObjects {
    ownerInfoTitle: ElementFinder;
    petsVisitsTitle: ElementFinder;
    petName: ElementFinder;
    petBirthdate: ElementFinder;
    petType: ElementFinder;

    constructor() {
        this.ownerInfoTitle= element(by.xpath("//*[contains(text(),'Owner Information')]")); 
        this.petsVisitsTitle=element(by.xpath("//*[contains(text(),'Pets and Visits')]"));
        this.petName=element(by.xpath("//*[@class='dl-horizontal']/dd[1]"));
        this.petBirthdate=element(by.xpath("//*[@class='dl-horizontal']/dd[2]"));
        this.petType=element(by.xpath("//*[@class='dl-horizontal']/dd[3]"));


    }
}    