import { ElementFinder, element, by, ElementArrayFinder, browser } from "protractor";
import { logHelper } from "../util/logHelper";
import { globalPageObjects } from "./globalPageObjects";

let globalObj = new globalPageObjects();

export class VeterinariansPageObjects {

   
   // private pageTitle=element(by.xpath("//*[@class='container xd-container']/h2"));
    private responseVetList=element(by.xpath("//*[@class='table table-striped']/tbody"));

    async getRadiologyCount(){
        let count = ((await globalObj.getResponseListText()).match(/radiology/g)).length;
        logHelper.Log().debug("Count:" + count);
        return count;
    }
   
   
}