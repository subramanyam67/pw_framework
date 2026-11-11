# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: automobileE2E.spec.ts >> click on automobile
- Location: tests\automobileE2E.spec.ts:20:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#zipcode')
    - locator resolved to <input type="text" id="zipcode" name="Zip Code"/>
    - fill("500081")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - banner [ref=f1e3]:
    - generic [ref=f1e5]:
      - link [ref=f1e6] [cursor=pointer]:
        - /url: index.php
        - img "Tricentis Logo" [ref=f1e7]
        - generic [ref=f1e8]:
          - heading "Vehicle Insurance Application" [level=1] [ref=f1e9]
          - text: This is a sample application, Version 1.0.1
      - generic [ref=f1e11]:
        - link " Visit Support!" [ref=f1e12] [cursor=pointer]:
          - /url: https://support.tricentis.com
          - generic [ref=f1e13]: 
          - text: Visit Support!
        - textbox "Search Support..." [ref=f1e14]
        - button "" [ref=f1e15] [cursor=pointer]
    - generic [ref=f1e18]:
      - generic [ref=f1e19]:
        - text: 
        - list [ref=f1e20]:
          - listitem [ref=f1e21]:
            - link "Automobile" [ref=f1e22] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=f1e23]:
            - link "Truck" [ref=f1e24] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=f1e25]:
            - link "Motorcycle" [ref=f1e26] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=f1e27]:
            - link "Camper" [ref=f1e28] [cursor=pointer]:
              - /url: "#"
      - link "Request Demo" [ref=f1e30] [cursor=pointer]:
        - /url: http://www.tricentis.com/tricentis-tosca-testsuite/tosca-testsuite-trial/
  - main [ref=f1e31]:
    - generic [ref=f1e33]:
      - link "Home" [ref=f1e34] [cursor=pointer]:
        - /url: index.php
      - text: Automobile Insurance
  - generic [ref=f1e35]:
    - generic [ref=f1e38]:
      - navigation [ref=f1e39]:
        - list:
          - listitem [ref=f1e40]:
            - link "Enter Vehicle Data 1" [ref=f1e41] [cursor=pointer]:
              - /url: "#"
              - text: Enter Vehicle Data
              - generic [ref=f1e42]: "1"
          - listitem [ref=f1e43]:
            - link "Enter Insurant Data 3" [ref=f1e44]:
              - /url: "#"
              - text: Enter Insurant Data
              - generic [ref=f1e45]: "3"
          - listitem [ref=f1e46]:
            - link "Enter Product Data 6" [ref=f1e47] [cursor=pointer]:
              - /url: "#"
              - text: Enter Product Data
              - generic [ref=f1e48]: "6"
          - listitem [ref=f1e49]:
            - link "Select Price Option 1" [ref=f1e50] [cursor=pointer]:
              - /url: "#"
              - text: Select Price Option
              - generic [ref=f1e51]: "1"
          - listitem [ref=f1e52]:
            - link "Send Quote 4" [ref=f1e53] [cursor=pointer]:
              - /url: "#"
              - text: Send Quote
              - generic [ref=f1e54]: "4"
      - generic [ref=f1e56]:
        - text: 
        - generic [ref=f1e57]:
          - generic [ref=f1e58]:
            - generic [ref=f1e59]: First Name
            - textbox [ref=f1e60]: Ravi
          - generic [ref=f1e62]:
            - generic [ref=f1e63]: Last Name
            - textbox [ref=f1e64]: Kumar
          - generic [ref=f1e66]:
            - generic [ref=f1e67]: Date of Birth
            - textbox "MM/DD/YYYY" [ref=f1e68]: 05/10/1990
            - button "" [ref=f1e69] [cursor=pointer]
          - generic [ref=f1e72]:
            - generic [ref=f1e73]: Gender
            - paragraph [ref=f1e74]:
              - generic [ref=f1e75] [cursor=pointer]:
                - radio "Male" [checked] [ref=f1e76]
                - text: Male
              - generic [ref=f1e78] [cursor=pointer]:
                - radio "Female" [ref=f1e79]
                - text: Female
          - generic [ref=f1e81]:
            - generic [ref=f1e82]: Street Address
            - textbox [active] [ref=f1e83]: MG Road
          - generic [ref=f1e84]:
            - generic [ref=f1e85]: Country
            - combobox [ref=f1e86] [cursor=pointer]:
              - option "– please select –"
              - option "Afghanistan"
              - option "Albania"
              - option "Algeria"
              - option "American Samoa"
              - option "Andorra"
              - option "Angola"
              - option "Anguilla"
              - option "Antarctica"
              - option "Antigua and Barbuda"
              - option "Argentina"
              - option "Armenia"
              - option "Aruba"
              - option "Australia"
              - option "Austria"
              - option "Azerbaijan"
              - option "Bahamas"
              - option "Bahrain"
              - option "Bangladesh"
              - option "Barbados"
              - option "Belarus"
              - option "Belgium"
              - option "Belize"
              - option "Benin"
              - option "Bermuda"
              - option "Bhutan"
              - option "Bolivia - Plurinational State of"
              - option "Bonaire - Sint Eustatius and Saba"
              - option "Bosnia and Herzegovina"
              - option "Botswana"
              - option "Bouvet Island"
              - option "Brazil"
              - option "British Indian Ocean Territory"
              - option "Brunei Darussalam"
              - option "Bulgaria"
              - option "Burkina Faso"
              - option "Burundi"
              - option "Cabo Verde"
              - option "Cambodia"
              - option "Cameroon"
              - option "Canada"
              - option "Cayman Islands"
              - option "Central African Republic"
              - option "Chad"
              - option "Chile"
              - option "China"
              - option "Christmas Island"
              - option "Cocos (Keeling) Islands"
              - option "Colombia"
              - option "Comoros"
              - option "Congo"
              - option "Congo - the Democratic Republic of the"
              - option "Cook Islands"
              - option "Costa Rica"
              - option "Croatia"
              - option "Cuba"
              - option "Curaçao"
              - option "Cyprus"
              - option "Czech Republic"
              - option "Côte d'Ivoire"
              - option "Denmark"
              - option "Djibouti"
              - option "Dominica"
              - option "Dominican Republic"
              - option "Ecuador"
              - option "Egypt"
              - option "El Salvador"
              - option "Equatorial Guinea"
              - option "Eritrea"
              - option "Estonia"
              - option "Ethiopia"
              - option "Falkland Islands (Malvinas)"
              - option "Faroe Islands"
              - option "Fiji"
              - option "Finland"
              - option "France"
              - option "French Guiana"
              - option "French Polynesia"
              - option "French Southern Territories"
              - option "Gabon"
              - option "Gambia"
              - option "Georgia"
              - option "Germany"
              - option "Ghana"
              - option "Gibraltar"
              - option "Greece"
              - option "Greenland"
              - option "Grenada"
              - option "Guadeloupe"
              - option "Guam"
              - option "Guatemala"
              - option "Guernsey"
              - option "Guinea"
              - option "Guinea-Bissau"
              - option "Guyana"
              - option "Haiti"
              - option "Heard Island and McDonald Islands"
              - option "Holy See (Vatican City State)"
              - option "Honduras"
              - option "Hong Kong"
              - option "Hungary"
              - option "Iceland"
              - option "India" [selected]
              - option "Indonesia"
              - option "Iran - Islamic Republic of"
              - option "Iraq"
              - option "Ireland"
              - option "Isle of Man"
              - option "Israel"
              - option "Italy"
              - option "Jamaica"
              - option "Japan"
              - option "Jersey"
              - option "Jordan"
              - option "Kazakhstan"
              - option "Kenya"
              - option "Kiribati"
              - option "Korea - Democratic People's Republic of"
              - option "Korea - Republic of"
              - option "Kuwait"
              - option "Kyrgyzstan"
              - option "Lao People's Democratic Republic"
              - option "Latvia"
              - option "Lebanon"
              - option "Lesotho"
              - option "Liberia"
              - option "Libya"
              - option "Liechtenstein"
              - option "Lithuania"
              - option "Luxembourg"
              - option "Macao"
              - option "Macedonia - the former Yugoslav Republic of"
              - option "Madagascar"
              - option "Malawi"
              - option "Malaysia"
              - option "Maldives"
              - option "Mali"
              - option "Malta"
              - option "Marshall Islands"
              - option "Martinique"
              - option "Mauritania"
              - option "Mauritius"
              - option "Mayotte"
              - option "Mexico"
              - option "Micronesia - Federated States of"
              - option "Moldova - Republic of"
              - option "Monaco"
              - option "Mongolia"
              - option "Montenegro"
              - option "Montserrat"
              - option "Morocco"
              - option "Mozambique"
              - option "Myanmar"
              - option "Namibia"
              - option "Nauru"
              - option "Nepal"
              - option "Netherlands"
              - option "New Caledonia"
              - option "New Zealand"
              - option "Nicaragua"
              - option "Niger"
              - option "Nigeria"
              - option "Niue"
              - option "Norfolk Island"
              - option "Northern Mariana Islands"
              - option "Norway"
              - option "Oman"
              - option "Pakistan"
              - option "Palau"
              - option "Palestine - State of"
              - option "Panama"
              - option "Papua New Guinea"
              - option "Paraguay"
              - option "Peru"
              - option "Philippines"
              - option "Pitcairn"
              - option "Poland"
              - option "Portugal"
              - option "Puerto Rico"
              - option "Qatar"
              - option "Romania"
              - option "Russian Federation"
              - option "Rwanda"
              - option "Réunion"
              - option "Saint Barthélemy"
              - option "Saint Helena - Ascension and Tristan da Cunha"
              - option "Saint Kitts and Nevis"
              - option "Saint Lucia"
              - option "Saint Martin (French part)"
              - option "Saint Pierre and Miquelon"
              - option "Saint Vincent and the Grenadines"
              - option "Samoa"
              - option "San Marino"
              - option "Sao Tome and Principe"
              - option "Saudi Arabia"
              - option "Senegal"
              - option "Serbia"
              - option "Seychelles"
              - option "Sierra Leone"
              - option "Singapore"
              - option "Sint Maarten (Dutch part)"
              - option "Slovakia"
              - option "Slovenia"
              - option "Solomon Islands"
              - option "Somalia"
              - option "South Africa"
              - option "South Georgia and the South Sandwich Islands"
              - option "South Sudan"
              - option "Spain"
              - option "Sri Lanka"
              - option "Sudan"
              - option "Suriname"
              - option "Svalbard and Jan Mayen"
              - option "Swaziland"
              - option "Sweden"
              - option "Switzerland"
              - option "Syrian Arab Republic"
              - option "Taiwan - Province of China"
              - option "Tajikistan"
              - option "Tanzania - United Republic of"
              - option "Thailand"
              - option "Timor-Leste"
              - option "Togo"
              - option "Tokelau"
              - option "Tonga"
              - option "Trinidad and Tobago"
              - option "Tunisia"
              - option "Turkey"
              - option "Turkmenistan"
              - option "Turks and Caicos Islands"
              - option "Tuvalu"
              - option "Uganda"
              - option "Ukraine"
              - option "United Arab Emirates"
              - option "United Kingdom"
              - option "United States"
              - option "United States Minor Outlying Islands"
              - option "Uruguay"
              - option "Uzbekistan"
              - option "Vanuatu"
              - option "Venezuela - Bolivarian Republic of"
              - option "Viet Nam"
              - option "Virgin Islands - British"
              - option "Virgin Islands - U.S."
              - option "Wallis and Futuna"
              - option "Western Sahara"
              - option "Yemen"
              - option "Zambia"
              - option "Zimbabwe"
              - option "Åland Islands"
          - generic [ref=f1e88]:
            - generic [ref=f1e89]: Zip Code
            - textbox [ref=f1e90]
            - generic [ref=f1e91] [cursor=pointer]
          - generic [ref=f1e92]:
            - generic [ref=f1e93]: City
            - textbox [ref=f1e94]
          - generic [ref=f1e95]:
            - generic [ref=f1e96]: Occupation
            - combobox [ref=f1e97] [cursor=pointer]:
              - option "– please select –" [selected]
              - option "Employee"
              - option "Public Official"
              - option "Farmer"
              - option "Unemployed"
              - option "Selfemployed"
            - generic [ref=f1e98] [cursor=pointer]
          - generic [ref=f1e99]:
            - generic [ref=f1e100]: Hobbies
            - paragraph [ref=f1e101]:
              - generic [ref=f1e102] [cursor=pointer]:
                - checkbox "Speeding" [ref=f1e103]
                - text: Speeding
              - generic [ref=f1e105] [cursor=pointer]:
                - checkbox "Bungee Jumping" [ref=f1e106]
                - text: Bungee Jumping
              - generic [ref=f1e108] [cursor=pointer]:
                - checkbox "Cliff Diving" [ref=f1e109]
                - text: Cliff Diving
              - generic [ref=f1e111] [cursor=pointer]:
                - checkbox "Skydiving" [ref=f1e112]
                - text: Skydiving
              - generic [ref=f1e114] [cursor=pointer]:
                - checkbox "Other" [ref=f1e115]
                - text: Other
            - generic [ref=f1e117] [cursor=pointer]
          - generic [ref=f1e118]:
            - generic [ref=f1e119]: Website
            - textbox [ref=f1e120]
          - generic [ref=f1e121]:
            - generic [ref=f1e122]: Picture
            - button "Choose File" [ref=f1e123]
            - generic [ref=f1e124]:
              - textbox [ref=f1e125]
              - button "Open" [ref=f1e126] [cursor=pointer]
          - generic [ref=f1e127]:
            - button "« Prev" [ref=f1e129] [cursor=pointer]
            - button "Next »" [ref=f1e130] [cursor=pointer]
        - text:        
    - generic [ref=f1e133]:
      - navigation [ref=f1e134]:
        - link "About" [ref=f1e135] [cursor=pointer]:
          - /url: http://www.tricentis.com/about
        - link "Products" [ref=f1e136] [cursor=pointer]:
          - /url: http://www.tricentis.com/tricentis-tosca-testsuite
        - link "Events & Webinars" [ref=f1e137] [cursor=pointer]:
          - /url: http://www.tricentis.com/events-webinars
        - link "Resources" [ref=f1e138] [cursor=pointer]:
          - /url: http://www.tricentis.com/resources
        - link "Services" [ref=f1e139] [cursor=pointer]:
          - /url: http://www.tricentis.com/services
      - generic [ref=f1e140]:
        - link "" [ref=f1e141] [cursor=pointer]:
          - /url: https://www.facebook.com/TRICENTIS
        - link "" [ref=f1e143] [cursor=pointer]:
          - /url: https://twitter.com/Tricentis
        - link "" [ref=f1e145] [cursor=pointer]:
          - /url: https://plus.google.com/108151335013813449490/posts
      - generic [ref=f1e147]: Copyright 2021 by Tricentis GmbH. All rights reserved.
```

# Test source

```ts
  1  | import {Page, Locator} from '@playwright/test'
  2  | import { VehicleData } from '../utils/vehicleDatamapper';
  3  | 
  4  | export class EnterInsurantDataPage{
  5  |     readonly page:Page;
  6  |     readonly firstName:Locator;
  7  |     readonly lastName:Locator;
  8  |     readonly dateofBirth:Locator;
  9  |     readonly gender:Locator;
  10 |     readonly streetAddress:Locator;
  11 |     readonly country:Locator;
  12 |     readonly zipCode:Locator;
  13 |     readonly city:Locator;
  14 |     readonly occupation:Locator;
  15 |     readonly hobbies:Locator;
  16 |     readonly website:Locator;
  17 |     readonly next:Locator;
  18 | 
  19 |     constructor(page:Page){
  20 |         this.page = page;
  21 |         this.firstName = page.locator('#firstname');
  22 |         this.lastName = page.locator('#lastname');
  23 |         this.dateofBirth = page.locator('#birthdate');
  24 |         this.gender = page.locator('#gendermale');
  25 |         this.streetAddress = page.locator('#streetaddress');
  26 |         this.country = page.locator('#country');
  27 |         this.zipCode = page.locator('#zipcode');
  28 |         this.city = page.locator('#city');
  29 |         this.occupation = page.locator('#occupation');
  30 |         this.hobbies = page.locator('#cliffdiving');
  31 |         this.website = page.locator('#website');
  32 |         this.next = page.locator('#nextenterproductdata');
  33 | 
  34 |     }
  35 | //Action methods
  36 | 
  37 | async EnterInsurantData(data:VehicleData){
  38 |     await this.firstName.fill(data.firstName);
  39 |     await this.lastName.fill(data.lastName);
  40 |     await this.dateofBirth.fill(data.dateOfBirth);
  41 |     await this.gender.click({force:true});
  42 |     await this.streetAddress.fill(data.streetAddress);
  43 |     await this.country.selectOption(data.country);
> 44 |     await this.zipCode.fill(data.zipCode);
     |                        ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  45 |     await this.city.fill(data.city);
  46 |     await this.occupation.selectOption(data.occupation);
  47 |     await this.hobbies.click({force:true});
  48 |     await this.website.fill(data.website);
  49 | 
  50 | }
  51 | async clickNext(){
  52 |     await this.next.click();
  53 | }
  54 | }
```