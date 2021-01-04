import { ElementFinder, element, by, ElementArrayFinder, WebElement, browser, ExpectedConditions } from "protractor";

var expCondition = ExpectedConditions;

export class OwnerListPageObjects {

    private ownerName = element(by.xpath("//*[contains(text(),'Peter McTavish')]"));

    clickOwnerName() {
        this.ownerName.click();
    }
   
    public async waitBrowser() {
        await browser.wait(expCondition.presenceOf(this.ownerName), 10000);
    }
}    