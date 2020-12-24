"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerListPageObjects = void 0;
const protractor_1 = require("protractor");
class OwnerListPageObjects {
    constructor() {
        this.ownersListPageName = protractor_1.element(protractor_1.by.xpath("//*[@class='container xd-container']/h2"));
        this.ownerName = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Peter McTavish')]"));
        this.responseList = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody"));
    }
}
exports.OwnerListPageObjects = OwnerListPageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3duZXJMaXN0UGFnZU9iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlT2JqZWN0cy9Pd25lcnMvT3duZXJMaXN0UGFnZU9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXdGO0FBRXhGLE1BQWEsb0JBQW9CO0lBTTdCO1FBQ0ksSUFBSSxDQUFDLGtCQUFrQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxZQUFZLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0NBQ0o7QUFYRCxvREFXQyJ9