import { ElementFinder, element, by, ElementArrayFinder, WebElement } from "protractor";

export class OwnerListPageObjects {

    private ownerName = element(by.xpath("//*[contains(text(),'Peter McTavish')]"));

    clickOwnerName() {
        this.ownerName.click();
    }
   
}    