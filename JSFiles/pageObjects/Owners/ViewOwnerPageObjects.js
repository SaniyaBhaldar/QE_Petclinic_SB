"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewOwnerPageObjects = void 0;
const protractor_1 = require("protractor");
class ViewOwnerPageObjects {
    constructor() {
        this.ownerInfoTitle = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Owner Information')]"));
        this.petsVisitsTitle = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Pets and Visits')]"));
        this.petName = protractor_1.element(protractor_1.by.xpath("//*[@class='dl-horizontal']/dd[1]"));
        this.petBirthdate = protractor_1.element(protractor_1.by.xpath("//*[@class='dl-horizontal']/dd[2]"));
        this.petType = protractor_1.element(protractor_1.by.xpath("//*[@class='dl-horizontal']/dd[3]"));
    }
}
exports.ViewOwnerPageObjects = ViewOwnerPageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld093bmVyUGFnZU9iamVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWdlT2JqZWN0cy9Pd25lcnMvVmlld093bmVyUGFnZU9iamVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTRFO0FBRzVFLE1BQWEsb0JBQW9CO0lBTzdCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkNBQTJDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxlQUFlLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsT0FBTyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFlBQVksR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxPQUFPLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztJQUd4RSxDQUFDO0NBQ0o7QUFoQkQsb0RBZ0JDIn0=