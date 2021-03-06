import { ElementFinder, element, by, ElementArrayFinder, browser, ExpectedConditions } from "protractor";
import { logHelper } from "../util/logHelper";

var expCondition = ExpectedConditions;

export class globalPageObjects {

    private pageTitle=element(by.css(".container-fluid .xd-container h2"));
    private responseList=element(by.xpath("//*[@class='table table-striped']/tbody"));

    getRefresh(){
        browser.refresh();
    }

    async waitTillVisible(){
        await browser.wait(expCondition.visibilityOf(this.responseList), 20000, 'Taking too long to load');
    }

    async getPageTitleText() {
        return await this.pageTitle.getText();
    }

    async displayPageTitle() {
        var displayPageTitle = await this.pageTitle.isDisplayed();
        return displayPageTitle;
        
    }

    getResponseListText() {
        return this.responseList.getText();
    }

    async getLastEntryNewListDetails(){
        let lastRowEntry = this.responseList.all(by.tagName("tr")).last();
        browser.executeScript('window.scrollBy(0,1500)');
        let newEntryDetails = await lastRowEntry.getText();
        logHelper.Log().debug("NewLastEntryDetails: " + newEntryDetails);
        return newEntryDetails;
    }

    getEntryCount(){
        let count = this.responseList.all(by.tagName("tr")).count();
        logHelper.Log().debug("RowCount: " + count);
        return count;
    }

}