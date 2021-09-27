# JBA

## Take home test given to me by Just Brands Africa to screen my skills before an interview

This take home test made me realize how bad I suck. I did my best but could not perform the task given to me. The best I could do was to figure out how to validate user input for an html form with JS and use the preventDefault() function to force users to fill in required fields. At least it was a decent learning experience and good practice for the next one!

### The Assignment

Phase 1:
You have the following data returned from the api:

profile: {
about: null
address: 1
banner: null
dob: "2021-09-01"
documents: null
examNumber: null
firstName: "Ben"
gender: 1
hasSiyavulaAccess: null
id: 2
idNumber: "88 12 28 508 708 6"
imei: null
lastName: "Henning"
mobileNr: null
organization: null
profilePic: null
serialNumber: null
uniqueId: null
user: 3
voucher: null
}

const requiredFields = {
    A: ["dob", "idNumber", "gender"],
    B: ["address"],
    C: ["provinces", "schools", "grades"],
    D: ["serialNumber", "imei"]
  }

write a script to iterate through the fields provided compared to the requiredFields array to check which are complete and which are incomplete.

Phase 2:
From the list received of incomplete, setup an update script to collect and update the fields for each required field.
assuming all fields are of type string.
use a dummy api endpoint(the cms you used on digiapp is fine to illustrate how you would complete these updates)
