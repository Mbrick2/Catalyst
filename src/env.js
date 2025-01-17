// This file contains variables, browser information, and functions to get this data
// Similar to the navigator functions in all browsers

// Security Patches
securityPatchLevel = "January22Q1";
securityPatchID = "1002972";
latestSecurityPatch = "release11-patch003";
currentSecurityPatch = "release11-patch003";

// Browser Meta Data
browserName = "Catalyst";
browserEngine = "Chromium 94, Blink, Electron Latest";
browserRepository = "https://github.com/JaydenDev/Catalyst";
browserLicense = "MIT";

// Functions to access data without entering file or preferences
 function navBrowserName() {
   console.log(browserName);
 }

 function navBrowserEngine() {
   console.log(browserEngine);
 }

 function navBrowserRepository() {
   console.log(browserRepository);
 }

 function navBrowserLicense() {
   console.log(browserLicense);
 }

 function logSecurityPatchID() {
   console.log(securityPatchID);
   console.log(currentSecurityPatch);
 }

// Show info in preferences
document.getElementById("current-security-patch").innerText = currentSecurityPatch;
document.getElementById("current-security-patch-id").innerText = securityPatchID;
//document.getElementById("").innerText = ""
//document.getElementById("").innerText = ""
//document.getElementById("").innerText = ""
//document.getElementById("").innerText = ""
