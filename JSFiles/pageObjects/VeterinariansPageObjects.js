"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeterinariansPageObjects = void 0;
const protractor_1 = require("protractor");
class VeterinariansPageObjects {
    constructor() {
        this.pageTitle = protractor_1.element(protractor_1.by.xpath("//*[@class='container xd-container']/h2"));
        this.responseVetList = protractor_1.element(protractor_1.by.xpath("//*[@class='table table-striped']/tbody"));
    }
}
exports.VeterinariansPageObjects = VeterinariansPageObjects;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmV0ZXJpbmFyaWFuc1BhZ2VPYmplY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvVmV0ZXJpbmFyaWFuc1BhZ2VPYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUE0RTtBQUU1RSxNQUFhLHdCQUF3QjtJQUtqQztRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztDQUNKO0FBVkQsNERBVUMifQ==