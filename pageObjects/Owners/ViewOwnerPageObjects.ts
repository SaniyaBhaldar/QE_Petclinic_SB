import { ElementFinder, element, by, ElementArrayFinder } from "protractor";
import { logHelper } from "../../util/logHelper";
import { globalPageObjects } from "../globalPageObjects";

let globalObj = new globalPageObjects();

export class ViewOwnerPageObjects {
    // this.ownerInfoTitle= element(by.css(".container-fluid .xd-container h2:nth-child(1)")); 
    private petsVisitsTitle = element(by.css(".container-fluid .xd-container h2:nth-child(9)"));
    private petName = element(by.css(".dl-horizontal dd:nth-child(2)"));
    private petBirthdate = element(by.css(".dl-horizontal dd:nth-child(4)"));
    private petType = element(by.css(".dl-horizontal dd:nth-child(6)"));

    async ClickOwner() {

        for (let i = 1; i <= await (globalObj.getEntryCount()); i++) {
            let owners = await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).getAttribute("innerText");

            if (owners == "Peter McTavish") {
                await element(by.xpath("//*[@class='table table-striped']/tbody/tr[" + i + "]/td/a")).click();
                break;
            }
            else {
                logHelper.Log().debug("Peter McTavish is not present in the list.");
               
            }

        }
    }

    async getPetsVisitsTitleText() {
        return await this.petsVisitsTitle.getText();
    }
    async getPetNameText() {
        return await this.petName.getText();
    }
    async getPetBirthdateText() {
        return await this.petBirthdate.getText();
    }
    async getPetTypeText() {
        return await this.petType.getText();
    }


}    