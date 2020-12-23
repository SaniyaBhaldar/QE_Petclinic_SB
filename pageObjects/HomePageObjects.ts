import { ElementFinder, element, by, ElementArrayFinder } from "protractor";


export class HomePageObjects {
    HomeMenu: ElementFinder;
    Owners: ElementFinder;
    Veterinarians: ElementFinder;
    PetTypes: ElementFinder;
    Specialties: ElementFinder;
    WelcomeMsg: ElementFinder;
    AddNewOwner:ElementFinder;
    AllVeterinarians: ElementFinder;

    constructor() {
        this.WelcomeMsg = element(by.xpath("//*[contains(text(),'Welcome to Petclinic')]"));
        
        this.HomeMenu = element(by.xpath("//*[@class='nav navbar-nav']/li[1]/a"));
        this.Owners = element(by.xpath("//*[@class='nav navbar-nav']/li[2]/a"));
        this.Veterinarians = element(by.xpath("//*[@class='nav navbar-nav']/li[3]/a"));
        this.PetTypes = element(by.xpath("//*[@class='nav navbar-nav']/li[4]/a"));
        this.Specialties = element(by.xpath("//*[@class='nav navbar-nav']/li[5]/a"));
        this.AddNewOwner= element(by.linkText("ADD NEW"));
        this.AllVeterinarians=element(by.linkText("ALL"));

    }


}