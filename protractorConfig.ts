import { Config, browser } from "protractor";


let reporter = require('cucumber-html-reporter');

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

let ReportDate = yyyy + '-' + mm + '-' + dd;

exports.config = {

    allScriptsTimeout: 100000,
    getPageTimeout: 100000,

    seleniumAddress: 'http://localhost:4444/wd/hub',
  
   // baseUrl: ' http://petclinicui.e46708b92c054086909b.eastus.aksapp.io/petclinic/',
  
    capabilities: {
        browserName:'chrome'
    },
  
    framework: 'custom',  // set to "custom" instead of cucumber.
  
    frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file
  
    specs: [
        '../features/homePage.feature',
       // '../features/Owners/newOwner.feature',
       // '../features/Owners/ownerList.feature',
       // '../features/Owners/viewOwner.feature',
        '../features/veterinarians.feature',

        //'../features/petTypes.feature'    // Specs here are the cucumber feature files
    ],

    cucumberOpts: {
        // require step definitions
        //tags:"@L3",
        format: 'json:./cucumberreport.json',
        strict: true,
    
        require: [
          './stepDefinations/*.js',
          './stepDefinations/Owners/*.js', // accepts a glob,
    
        ]
      },
    
      onPrepare: () => {
    
        browser.driver.manage().window().maximize();
      },

      onComplete: () => {
        var options = {
          theme: 'bootstrap',
          jsonFile: './cucumberreport.json',
          screenshotsDirectory: 'screenshots/',
          storeScreenshots: true,
          output: './Reports/' + ReportDate + '.html',
          reportSuiteAsScenarios: true,
          launchReport: true,
          metadata: {
            "App Version": "0.3.2",
            "Test Environment": "test",
            "Browser": "Chrome  79.0.3945.88",
            "Platform": "Windows 7",
            "Parallel": "Scenarios",
            "Executed": "Web App"
          }
        };
    
        reporter.generate(options);
    
    
      }
}  