


import { ElementFinder, element, by, ElementArrayFinder, browser } from "protractor";



export class HomePageObjects {

    private welcomeMsg = element(by.css("app-welcome h1"));
    private homeMenu = element(by.css("ul.navbar-nav .glyphicon-home"));
    private owners = element(by.css("ul.navbar-nav li.dropdown:nth-child(2)"));
    private veterinarians = element(by.css("ul.navbar-nav li.dropdown:nth-child(3)"));
    private petTypes = element(by.css("[href='/petclinic/pettypes']"));
    private specialties = element(by.css("[routerlink='/specialties']"));
    private addNewOwner = element(by.css("[routerlink='/owners/add']"));
    private allVeterinarians = element(by.css("[ng-reflect-router-link='/vets']"));

    //HomeMenu: ElementFinder; public static ***

    openBrowser(url: string) {
        browser.get(url);
    }

    displayWelcomeMsg() {
        var welMsg = this.welcomeMsg.isDisplayed();
        return welMsg;
    }

    getHomeMenuText() {
        return this.homeMenu.getText();
    }

    getOwnersText() {
        return this.owners.getText();
    }
    getVeterinariansText() {
        return this.veterinarians.getText();
    }
    getPetTypesText() {
        return this.petTypes.getText();
    }
    getSpecialtiesText() {
        return this.specialties.getText();
    }

    clickOwnersMenu(){
        return this.owners.click();
    }

    clickAddNewOwner(){
        return this.addNewOwner.click();
    }

    clickPetTypesMenu(){
        return this.petTypes.click();
    }

    clickVeterinariansMenu(){
        return this.veterinarians.click();
    }

    clickAllVeterinariansMenu(){
        return this.allVeterinarians.click();
    }

}


