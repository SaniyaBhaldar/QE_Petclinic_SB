"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewOwnerPageObjects = void 0;
const protractor_1 = require("protractor");
class NewOwnerPageObjects {
    constructor() {
        this.newOwnerTitle = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'New Owner')]"));
        this.firstName = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'First Name')]"));
        this.lastName = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Last Name')]"));
        this.address = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Address')]"));
        this.city = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'City')]"));
        this.telephone = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Telephone')]"));
        this.firstNameTextField = protractor_1.element(protractor_1.by.xpath("//*[@id='firstName']"));
        this.lastNameTextField = protractor_1.element(protractor_1.by.xpath("//*[@id='lastName']"));
        this.addressTextField = protractor_1.element(protractor_1.by.xpath("//*[@id='address']"));
        this.cityTextField = protractor_1.element(protractor_1.by.xpath("//*[@id='city']"));
        this.telephoneTextField = protractor_1.element(protractor_1.by.xpath("//*[@id='telephone']"));
        this.addOwnerButton = protractor_1.element(protractor_1.by.xpath("//*[contains(text(),'Add Owner')]"));
    }
}
exports.NewOwnerPageObjects = NewOwnerPageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3T3duZXJQYWdlT2JqZWN0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2VPYmplY3RzL093bmVycy9OZXdPd25lclBhZ2VPYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE0RTtBQUc1RSxNQUFhLG1CQUFtQjtJQWM1QjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsU0FBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsSUFBSSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztDQUNKO0FBNUJELGtEQTRCQyJ9