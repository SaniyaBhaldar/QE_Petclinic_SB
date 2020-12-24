"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const HomePageObjects_1 = require("../pageObjects/HomePageObjects");
const NewOwnerPageObjects_1 = require("../pageObjects/Owners/NewOwnerPageObjects");
const VeterinariansPageObjects_1 = require("../pageObjects/VeterinariansPageObjects");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(70 * 1000);
let homeObj = new HomePageObjects_1.HomePageObjects();
let newOwnerObj = new NewOwnerPageObjects_1.NewOwnerPageObjects();
let veterinariansObj = new VeterinariansPageObjects_1.VeterinariansPageObjects();
//Scenario 1 : Verify title of the page as 'veterinarians' on clicking menu 'all veterinarians'
cucumber_1.Given('User clicks on veterinarians tab', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homeObj.Veterinarians.click();
    });
});
cucumber_1.When('User clicks on All veterinarians option', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield homeObj.AllVeterinarians.click();
    });
});
cucumber_1.Then('veterinarians page title should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield veterinariansObj.pageTitle.isDisplayed().then(function (result) {
            return __awaiter(this, void 0, void 0, function* () {
                yield expect(true).to.equal(result);
                console.log("veterinarians page title get displayed");
            });
        });
    });
});
//Scenario 2 : Verify count of radiology veterinarians on 'veterinarians' page
cucumber_1.Given('User is on veterinarians list page', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let pageTitle = yield veterinariansObj.pageTitle.getText();
        yield expect("Veterinarians").to.equal(pageTitle);
    });
});
cucumber_1.Then('radiology veterinarians should be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let vetList = yield veterinariansObj.responseVetList.getText();
        yield console.log("vetDetails : " + vetList);
        let count = (vetList.match(/radiology/g)).length;
        console.log("Count:" + count);
        /* vetList.each(function(element, index) {
           // Will print 0 First, 1 Second, 2 Third.
           element.getText().then(function (text) {
             console.log(index, text);
           });
         });*/
        /*let count;
      for(let i=0;i<10;i++)
      {
          if(vetList.match(/radiology/g)){
              count++;
              console.log("count1:"+count);
          }
          console.log("count:"+count);
      }
      //var  = vetList.indexOf("radiology");*/
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmV0ZXJpbmFyaWFucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbmF0aW9ucy9WZXRlcmluYXJpYW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLG9FQUFpRTtBQUVqRSxtRkFBZ0Y7QUFDaEYsc0ZBQW1GO0FBRW5GLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztBQUM5RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBRTNCLElBQUksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFFN0IsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQ0FBZSxFQUFFLENBQUM7QUFDcEMsSUFBSSxXQUFXLEdBQUcsSUFBSSx5Q0FBbUIsRUFBRSxDQUFDO0FBQzVDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxtREFBd0IsRUFBRSxDQUFDO0FBRXRELCtGQUErRjtBQUUvRixnQkFBSyxDQUFDLGtDQUFrQyxFQUFFOztRQUN0QyxNQUFNLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyx5Q0FBeUMsRUFBRTs7UUFDNUMsTUFBTSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0MsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyw4Q0FBOEMsRUFBRTs7UUFDakQsTUFBTSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQWdCLE1BQU07O2dCQUN0RSxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUE7WUFDekQsQ0FBQztTQUFBLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCw4RUFBOEU7QUFFOUUsZ0JBQUssQ0FBQyxvQ0FBb0MsRUFBRTs7UUFDeEMsSUFBSSxTQUFTLEdBQUcsTUFBTSxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0QsTUFBTSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZDQUE2QyxFQUFFOztRQUNoRCxJQUFJLE9BQU8sR0FBRSxNQUFNLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5RCxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRTdDLElBQUksS0FBSyxHQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQjs7Ozs7Y0FLTTtRQUVMOzs7Ozs7Ozs7OENBU3NDO0lBRTVDLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==