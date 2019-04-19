//I wanted to query maps using google api, howerver, the key was missing, I could only use it for dev purpose
//and was displaying a notice about that.
// This object contains the latitude and longitude of every country I wanted to use.
//I choosed to keep the data for any future work
//Currently the object is used to provide any country name, given an abbreviation
var countriesDescriptions = {
    AD: ["42.546245", "1.601554", "Andorra"], AE: ["23.424076", "53.847818", "United Arab Emirates"], AF: ["33.93911", "67.709953", "Afghanistan"], AG: ["17.060816", "-61.796428", "Antigua and Barbuda"], AI: ["18.220554", "-63.068615", "Anguilla"], AL: ["41.153332", "20.168331", "Albania"], AM: ["40.069099", "45.038189", "Armenia"], AN: ["12.226079", "-69.060087", "Netherlands Antilles"], AO: ["-11.202692", "17.873887", "Angola"], AQ: ["-75.250973", "-0.071389", "Antarctica"], AR: ["-38.416097", "-63.616672", "Argentina"], AS: ["-14.270972", "-170.132217", "American Samoa"], AT: ["47.516231", "14.550072", "Austria"], AU: ["-25.274398", "133.775136", "Australia"], AW: ["12.52111", "-69.968338", "Aruba"], AZ: ["40.143105", "47.576927", "Azerbaijan"], BA: ["43.915886", "17.679076", "Bosnia and Herzegovina"], BB: ["13.193887", "-59.543198", "Barbados"], BD: ["23.684994", "90.356331", "Bangladesh"], BE: ["50.503887", "4.469936", "Belgium"], BF: ["12.238333", "-1.561593", "Burkina Faso"], BG: ["42.733883", "25.48583", "Bulgaria"], BH: ["25.930414", "50.637772", "Bahrain"], BI: ["-3.373056", "29.918886", "Burundi"], BJ: ["9.30769", "2.315834", "Benin"], BM: ["32.321384", "-64.75737", "Bermuda"], BN: ["4.535277", "114.727669", "Brunei"], BO: ["-16.290154", "-63.588653", "Bolivia"], BR: ["-14.235004", "-51.92528", "Brazil"], BS: ["25.03428", "-77.39628", "Bahamas"], BT: ["27.514162", "90.433601", "Bhutan"], BV: ["-54.423199", "3.413194", "Bouvet Island"], BW: ["-22.328474", "24.684866", "Botswana"], BY: ["53.709807", "27.953389", "Belarus"], BZ: ["17.189877", "-88.49765", "Belize"], CA: ["56.130366", "-106.346771", "Canada"], CC: ["-12.164165", "96.870956", "Cocos [Keeling] Islands"], CD: ["-4.038333", "21.758664", "Congo [DRC]"], CF: ["6.611111", "20.939444", "Central African Republic"], CG: ["-0.228021", "15.827659", "Congo [Republic]"], CH: ["46.818188", "8.227512", "Switzerland"], CI: ["7.539989", "-5.54708", "Côte d'Ivoire"], CK: ["-21.236736", "-159.777671", "Cook Islands"], CL: ["-35.675147", "-71.542969", "Chile"], CM: ["7.369722", "12.354722", "Cameroon"], CN: ["35.86166", "104.195397", "China"], CO: ["4.570868", "-74.297333", "Colombia"], CR: ["9.748917", "-83.753428", "Costa Rica"], CU: ["21.521757", "-77.781167", "Cuba"], CV: ["16.002082", "-24.013197", "Cape Verde"], CX: ["-10.447525", "105.690449", "Christmas Island"], CY: ["35.126413", "33.429859", "Cyprus"], CZ: ["49.817492", "15.472962", "Czech Republic"], DE: ["51.165691", "10.451526", "Germany"], DJ: ["11.825138", "42.590275", "Djibouti"], DK: ["56.26392", "9.501785", "Denmark"], DM: ["15.414999", "-61.370976", "Dominica"], DO: ["18.735693", "-70.162651", "Dominican Republic"], DZ: ["28.033886", "1.659626", "Algeria"], EC: ["-1.831239", "-78.183406", "Ecuador"], EE: ["58.595272", "25.013607", "Estonia"], EG: ["26.820553", "30.802498", "Egypt"], EH: ["24.215527", "-12.885834", "Western Sahara"], ER: ["15.179384", "39.782334", "Eritrea"], ES: ["40.463667", "-3.74922", "Spain"], ET: ["9.145", "40.489673", "Ethiopia"], FI: ["61.92411", "25.748151", "Finland"], FJ: ["-16.578193", "179.414413", "Fiji"], FK: ["-51.796253", "-59.523613", "Falkland Islands [Islas Malvinas]"], FM: ["7.425554", "150.550812", "Micronesia"], FO: ["61.892635", "-6.911806", "Faroe Islands"], FR: ["46.227638", "2.213749", "France"], GA: ["-0.803689", "11.609444", "Gabon"], GB: ["55.378051", "-3.435973", "United Kingdom"], GD: ["12.262776", "-61.604171", "Grenada"], GE: ["42.315407", "43.356892", "Georgia"], GF: ["3.933889", "-53.125782", "French Guiana"], GG: ["49.465691", "-2.585278", "Guernsey"], GH: ["7.946527", "-1.023194", "Ghana"], GI: ["36.137741", "-5.345374", "Gibraltar"], GL: ["71.706936", "-42.604303", "Greenland"], GM: ["13.443182", "-15.310139", "Gambia"], GN: ["9.945587", "-9.696645", "Guinea"], GP: ["16.995971", "-62.067641", "Guadeloupe"], GQ: ["1.650801", "10.267895", "Equatorial Guinea"], GR: ["39.074208", "21.824312", "Greece"], GS: ["-54.429579", "-36.587909", "South Georgia and the South Sandwich Islands"], GT: ["15.783471", "-90.230759", "Guatemala"], GU: ["13.444304", "144.793731", "Guam"], GW: ["11.803749", "-15.180413", "Guinea-Bissau"], GY: ["4.860416", "-58.93018", "Guyana"], GZ: ["31.354676", "34.308825", "Gaza Strip"], HK: ["22.396428", "114.109497", "Hong Kong"], HM: ["-53.08181", "73.504158", "Heard Island and McDonald Islands"], HN: ["15.199999", "-86.241905", "Honduras"], HR: ["45.1", "15.2", "Croatia"], HT: ["18.971187", "-72.285215", "Haiti"], HU: ["47.162494", "19.503304", "Hungary"], ID: ["-0.789275", "113.921327", "Indonesia"], IE: ["53.41291", "-8.24389", "Ireland"], IL: ["31.046051", "34.851612", "Israel"], IM: ["54.236107", "-4.548056", "Isle of Man"], IN: ["20.593684", "78.96288", "India"], IO: ["-6.343194", "71.876519", "British Indian Ocean Territory"], IQ: ["33.223191", "43.679291", "Iraq"], IR: ["32.427908", "53.688046", "Iran"], IS: ["64.963051", "-19.020835", "Iceland"], IT: ["41.87194", "12.56738", "Italy"], JE: ["49.214439", "-2.13125", "Jersey"], JM: ["18.109581", "-77.297508", "Jamaica"], JO: ["30.585164", "36.238414", "Jordan"], JP: ["36.204824", "138.252924", "Japan"], KE: ["-0.023559", "37.906193", "Kenya"], KG: ["41.20438", "74.766098", "Kyrgyzstan"], KH: ["12.565679", "104.990963", "Cambodia"], KI: ["-3.370417", "-168.734039", "Kiribati"], KM: ["-11.875001", "43.872219", "Comoros"], KN: ["17.357822", "-62.782998", "Saint Kitts and Nevis"], KP: ["40.339852", "127.510093", "North Korea"], KR: ["35.907757", "127.766922", "South Korea"], KW: ["29.31166", "47.481766", "Kuwait"], KY: ["19.513469", "-80.566956", "Cayman Islands"], KZ: ["48.019573", "66.923684", "Kazakhstan"], LA: ["19.85627", "102.495496", "Laos"], LB: ["33.854721", "35.862285", "Lebanon"], LC: ["13.909444", "-60.978893", "Saint Lucia"], LI: ["47.166", "9.555373", "Liechtenstein"], LK: ["7.873054", "80.771797", "Sri Lanka"], LR: ["6.428055", "-9.429499", "Liberia"], LS: ["-29.609988", "28.233608", "Lesotho"], LT: ["55.169438", "23.881275", "Lithuania"], LU: ["49.815273", "6.129583", "Luxembourg"], LV: ["56.879635", "24.603189", "Latvia"], LY: ["26.3351", "17.228331", "Libya"], MA: ["31.791702", "-7.09262", "Morocco"], MC: ["43.750298", "7.412841", "Monaco"], MD: ["47.411631", "28.369885", "Moldova"], ME: ["42.708678", "19.37439", "Montenegro"], MG: ["-18.766947", "46.869107", "Madagascar"], MH: ["7.131474", "171.184478", "Marshall Islands"], MK: ["41.608635", "21.745275", "Macedonia [FYROM]"], ML: ["17.570692", "-3.996166", "Mali"], MM: ["21.913965", "95.956223", "Myanmar [Burma]"], MN: ["46.862496", "103.846656", "Mongolia"], MO: ["22.198745", "113.543873", "Macau"], MP: ["17.33083", "145.38469", "Northern Mariana Islands"], MQ: ["14.641528", "-61.024174", "Martinique"], MR: ["21.00789", "-10.940835", "Mauritania"], MS: ["16.742498", "-62.187366", "Montserrat"], MT: ["35.937496", "14.375416", "Malta"], MU: ["-20.348404", "57.552152", "Mauritius"], MV: ["3.202778", "73.22068", "Maldives"], MW: ["-13.254308", "34.301525", "Malawi"], MX: ["23.634501", "-102.552784", "Mexico"], MY: ["4.210484", "101.975766", "Malaysia"], MZ: ["-18.665695", "35.529562", "Mozambique"], NA: ["-22.95764", "18.49041", "Namibia"], NC: ["-20.904305", "165.618042", "New Caledonia"], NE: ["17.607789", "8.081666", "Niger"], NF: ["-29.040835", "167.954712", "Norfolk Island"], NG: ["9.081999", "8.675277", "Nigeria"], NI: ["12.865416", "-85.207229", "Nicaragua"], NL: ["52.132633", "5.291266", "Netherlands"], NO: ["60.472024", "8.468946", "Norway"], NP: ["28.394857", "84.124008", "Nepal"], NR: ["-0.522778", "166.931503", "Nauru"], NU: ["-19.054445", "-169.867233", "Niue"], NZ: ["-40.900557", "174.885971", "New Zealand"], OM: ["21.512583", "55.923255", "Oman"], PA: ["8.537981", "-80.782127", "Panama"], PE: ["-9.189967", "-75.015152", "Peru"], PF: ["-17.679742", "-149.406843", "French Polynesia"], PG: ["-6.314993", "143.95555", "Papua New Guinea"], PH: ["12.879721", "121.774017", "Philippines"], PK: ["30.375321", "69.345116", "Pakistan"], PL: ["51.919438", "19.145136", "Poland"], PM: ["46.941936", "-56.27111", "Saint Pierre and Miquelon"], PN: ["-24.703615", "-127.439308", "Pitcairn Islands"], PR: ["18.220833", "-66.590149", "Puerto Rico"], PS: ["31.952162", "35.233154", "Palestinian Territories"], PT: ["39.399872", "-8.224454", "Portugal"], PW: ["7.51498", "134.58252", "Palau"], PY: ["-23.442503", "-58.443832", "Paraguay"], QA: ["25.354826", "51.183884", "Qatar"], RE: ["-21.115141", "55.536384", "Réunion"], RO: ["45.943161", "24.96676", "Romania"], RS: ["44.016521", "21.005859", "Serbia"], RU: ["61.52401", "105.318756", "Russia"], RW: ["-1.940278", "29.873888", "Rwanda"], SA: ["23.885942", "45.079162", "Saudi Arabia"], SB: ["-9.64571", "160.156194", "Solomon Islands"], SC: ["-4.679574", "55.491977", "Seychelles"], SD: ["12.862807", "30.217636", "Sudan"], SE: ["60.128161", "18.643501", "Sweden"], SG: ["1.352083", "103.819836", "Singapore"], SH: ["-24.143474", "-10.030696", "Saint Helena"], SI: ["46.151241", "14.995463", "Slovenia"], SJ: ["77.553604", "23.670272", "Svalbard and Jan Mayen"], SK: ["48.669026", "19.699024", "Slovakia"], SL: ["8.460555", "-11.779889", "Sierra Leone"], SM: ["43.94236", "12.457777", "San Marino"], SN: ["14.497401", "-14.452362", "Senegal"], SO: ["5.152149", "46.199616", "Somalia"], SR: ["3.919305", "-56.027783", "Suriname"], ST: ["0.18636", "6.613081", "São Tomé and Príncipe"], SV: ["13.794185", "-88.89653", "El Salvador"], SY: ["34.802075", "38.996815", "Syria"], SZ: ["-26.522503", "31.465866", "Swaziland"], TC: ["21.694025", "-71.797928", "Turks and Caicos Islands"], TD: ["15.454166", "18.732207", "Chad"], TF: ["-49.280366", "69.348557", "French Southern Territories"], TG: ["8.619543", "0.824782", "Togo"], TH: ["15.870032", "100.992541", "Thailand"], TJ: ["38.861034", "71.276093", "Tajikistan"], TK: ["-8.967363", "-171.855881", "Tokelau"], TL: ["-8.874217", "125.727539", "Timor-Leste"], TM: ["38.969719", "59.556278", "Turkmenistan"], TN: ["33.886917", "9.537499", "Tunisia"], TO: ["-21.178986", "-175.198242", "Tonga"], TR: ["38.963745", "35.243322", "Turkey"], TT: ["10.691803", "-61.222503", "Trinidad and Tobago"], TV: ["-7.109535", "177.64933", "Tuvalu"], TW: ["23.69781", "120.960515", "Taiwan"], TZ: ["-6.369028", "34.888822", "Tanzania"], UA: ["48.379433", "31.16558", "Ukraine"], UG: ["1.373333", "32.290275", "Uganda"], US: ["37.09024", "-95.712891", "United States"], UY: ["-32.522779", "-55.765835", "Uruguay"], UZ: ["41.377491", "64.585262", "Uzbekistan"], VA: ["41.902916", "12.453389", "Vatican City"], VC: ["12.984305", "-61.287228", , "Saint Vincent and the Grenadines"], VE: ["6.42375", "-66.58973", "Venezuela"], VG: ["18.420695", "-64.639968", "British Virgin Islands"], VI: ["18.335765", "-64.896335", "U.S. Virgin Islands"], VN: ["14.058324", "108.277199", "Vietnam"], VU: ["-15.376706", "166.959158", "Vanuatu"], WF: ["-13.768752", "-177.156097", "Wallis and Futuna"], WS: ["-13.759029", "-172.104629", "Samoa"], XK: ["42.602636", "20.902977", "Kosovo"], YE: ["15.552727", "48.516388", "Yemen"], YT: ["-12.8275", "45.166244", "Mayotte"], ZA: ["-30.559482", "22.937506", "South Africa"], ZM: ["-13.133897", "27.849332", "Zambia"], ZW: ["-19.015438", "29.154857", "Zimbabwe"]
}

var countryOverviewDetails = {
    "AO": ["<h3>Introduction Angola</h3><br><p>Angola scores low on human development indexes despite using its large oil reserves to rebuild since the end of a 27-year civil war in 2002.</p><br><p>Fighting between the Popular Movement for the Liberation of Angola(MPLA), led by Jose Eduardo DOS SANTOS, and the National Union for the Total Independence of Angola (UNITA), led by Jonas SAVIMBI, followed independence from Portugal in 1975.</p>", "<h3>People and Society</h3><br><h4>Population</h4><p>30,355,880 (July 2018 est.)</p> <br><h4>Ethnic groups</h4><p>Ovimbundu 37%, Kimbundu 25%, Bakongo 13%, mestico (mixed European and native African) 2%, European 1%, other 22%</p><br><h4>Economy</h4><p>Angola's economy is overwhelmingly driven by its oil sector. Oil production and its supporting activities contribute about 50% of GDP, more than 70% of government revenue, and more than 90% of the country's exports; Angola is an OPEC member and subject to its direction regarding oil production levels.</p><br><br><h4>Source:<a href='https://www.cia.gov/library/publications/the-world-factbook/geos/ao.html' target='_blank'> The World Factbook</a></h4>"],
    "MU": ["<h3>Introduction Mauritius</h3><br><p>Although known to Arab and Malay sailors as early as the 10th century, Mauritius was first explored by the Portuguese in the 16th century and subsequently settled by the Dutch - who named it in honor of Prince Maurits van NASSAU - in the 17th century.</p ><br><p>The French assumed control in 1715, developing the island into an important naval base overseeing Indian Ocean trade, and establishing a plantation economy of sugar cane. The British captured the island in 1810, during the Napoleonic Wars.</p>", "<h3>People and Society</h3><br><h4> Population</h4><p>1,364,283 (July 2018 est.)</p> <br><h4>Ethnic groups</h4><p>Indo-Mauritian (compose approximately two thirds of the total population), Creole, Sino-Mauritian, Franco-Mauritian</p><br><h4>Economy</h4><p>Since independence in 1968, Mauritius has undergone a remarkable economic transformation from a low-income, agriculturally-based economy to a diversified, upper middle-income economy with growing industrial, financial, and tourist sectors. <br>The economy currently depends on sugar, tourism, textiles and apparel, and financial services, but is expanding into fish processing, information and communications technology, education, and hospitality and property development. Sugarcane is grown on about 90% of the cultivated land area but sugar makes up only around 3-4% of national GDP.</p> <br><br><h4>Source:<a href='https://www.cia.gov/-library/publications/the-world-factbook/geos/mp.html' target='_blank'> The World Factbook</a></h4>"],
    "GB": ["<h3>Introduction United Kingdom</h3><br><p> The United Kingdom has historically played a leading role in developing parliamentary democracy and in advancing literature and science. At its zenith in the 19th century, the British Empire stretched over one-fourth of the earth's surface. </p><br> <p>The first half of the 20th century saw the UK's strength seriously depleted in two world wars and the Irish Republic's withdrawal from the union. The second half witnessed the dismantling of the Empire and the UK rebuilding itself into a modern and prosperous European nation.</p>", "<h3>People and Society</h3><br> <h4>Population</h4> <p>65,105,246 United Kingdom (July 2018 est.)</p><br> <h4>Ethnic groups</h4> <p> White 87.2%, black/African/Caribbean/black British 3%, Asian/Asian British: Indian 2.3%, Asian/Asian British: Pakistani 1.9%, mixed 2%, other 3.7% (2011 est.) </p> <br> <h4>Economy</h4> <p> The UK, a leading trading power and financial center, is the third largest economy in Europe after Germany and France. Agriculture is intensive, highly mechanized, and efficient by European standards, producing about 60% of food needs with less than 2% of the labor force. <br> The UK has large coal, natural gas, and oil resources, but its oil and natural gas reserves are declining; the UK has been a net importer of energy since 2005. Services, particularly banking, insurance, and business services, are key drivers of British GDP growth. Manufacturing, meanwhile, has declined in importance but still accounts for about 10% of economic output. </p> <br> <h4>Source:<a href='https://www.cia.gov/librarY/publications/the-world-factbook/geos/uk.html' target='_blank'> The World Factbook</a></h4>"]
}

var mapCountryAbbreviation = {

    "Algeria": "DZA", "Angola": "AO", "Benin": "BJ", "Botswana": "BW", "Burkina Faso": "BF", "Burundi": "BI", "Cameroon": "CM", "Cape Verde": "CV", "Central African Republic": "CF", "Comoros": "KM", "Democratic Republic of Congo": "CD", "Djibouti": "DJ", "Egypt": "EG", "Equatorial Guinea": "GQ", "Eritrea": "ER", "Ethiopia": "ET", "Gabon": "GA", "Gambia": "GM", "Ghana": "GH", "Guinea": "GN", "Guinea-Bissau": "GW", "Ivory Coast": "CI", "Kenya": "KE", "Lesotho": "LS", "Liberia": "LR", "Libya": "LY", "Madagascar": "MG", "Malawi": "MW", "Mali": "ML", "Mauritania": "MR", "Mauritius": "MU", "Morocco": "MA", "Mozambique": "MZ", "Namibia": "NA", "Niger": "NE", "Nigeria": "NG", "Republic of the Congo": "CG", "Reunion": "RE", "Rwanda": "RW", "Saint Helena": "SH", "Sao Tome and Principe": "ST", "Senegal": "SN", "Seychelles": "SC", "Sierra Leone": "SL", "Somalia": "SO", "South Africa": "ZA", "South Sudan": "SS", "Sudan": "SD", "Swaziland": "SZ", "Tanzania": "TZ", "Togo": "TG", "Tunisia": "TN", "Uganda": "UG", "Western Sahara": "EH", "Zambia": "ZM", "Zimbabwe": "ZW"
}
var mobileInternettableDetails = {
    "AO": "<p>The new macroeconomic framework is being supported by a three-year International Monetary Fund Extended Financial Facility (EFF) in the amount of $3.8 billion, with an immediate disbursement of $990.7 million.</p> <br> <p>Despite significant progress on macroeconomic stability and structural reforms, Angola is still suffering the effects of lower oil prices and production levels, with an estimated gross domestic product (GDP) contraction around 1.5% in 2018.</p><br><br><h4><a href='https://www.worldbank.org/en/country/angola/overview#1' target='_blank'>Read more...</a></h4>",
    "MU": "<p>Mauritius’s external balances continued to be supported by abundant financial and capital inflows, including net inflows to the large offshore corporate sector. </p><br> <p>Thus, although the current account deficit was a sizable 5.9% of GDP in Q3 2017 (slightly narrower than a year earlier), the overall balance of payments remained moderately in surplus, and gross international reserves rose to $ 6.1 billion in January 2018 (equivalent to over 10 months of imports).</p><br><br><h4><a href='https://www.worldbank.org/en/country/mauritius/overview#1' target='_blank'>Read more...</a></h4>",
    "GB": "<p>The United Kingdom’s economic freedom score is 78.9, making its economy the 7th freest in the 2019 Index. </p><br> <p>Its overall score has increased by 0.9 point, with a big jump in fiscal health and higher scores for government integrity and government spending outweighing sharp drops in judicial effectiveness and monetary freedom.</p><br><br><h4><a href='https://www.heritage.org/index/country/unitedkingdom' target='_blank'>Read more...</a></h4>"
}

var indicatorDescriptions = {
    "IT.CEL.SETS.P2": "Mobile cellular subscriptions(per 100 people)",
    "IT.NET.USER.P3": "Number of individuals using the internet(% of population)",
    "IT.CMP.PCMP.P2": "Personal computers (per 100 people)",
    "IT.NET.BBND.P2": "Fixed broadband( per 100 people)"
};


var indicatorFullDescription = {
    "IT.CEL.SETS.P2": "<h3>Mobile cellular subscriptions (per 100 people)</h3><br> <p> Subscriptions to a public mobile telephone service that provide access to the PSTN using cellular technology. </p><br><p>The indicator applies to all mobile cellular subscriptions that offer voice communications. </p><br><br><br><br><br><h4>Source:<a href='https://datacatalog.worldbank.org/mobile-cellular-subscriptions-100-people-4' target='_blank'> Read More...</a>&nbsp;&nbsp;<a href='https://data.worldbank.org/indicator/IT.CEL.SETS.P2?locations' target='_blank' style='color:green'>Download Here</a></h4> ",
    "EG.FEC.RNEW.ZS": "<h3>Renewable energy consumption (% of total final energy consumption)</h3><br><p>Renewable energy consumption is the share of renewables energy in total final energy consumption.</p><br><br><br><br><br><h4>Source:<a href='https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS' target='_blank'> Read More...</a>&nbsp;&nbsp;<a href='https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS' target='_blank' style='color:green'>Download Here</a></h4> ",
    "sl.uem.totl.zs": "<h3>Unemployment, Total (% Of Total Labor Force)</h2><br> <p>Unemployment refers to the share of the labor force that is without work but available for and seeking employment.</p><br> <p>Definitions of labor force and unemployment differ by country.</p><br><br><br><br><br><h4>Source:<a href='https://databank.worldbank.org/data/reports.aspx?source=2&series=SL.UEM.TOTL.ZS' target='_blank'> Read More...</a>&nbsp;&nbsp;<a href='https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS' target='_blank' style='color:green'>Download Here</a></h4> ",
    "IT.NET.USER.P3": "<h3>Number of individuals using the internet(% of population)</h3><br><p>Internet users are individuals who have used the Internet (from any location) in the last 3 months. The Internet can be used via a computer, mobile phone, personal digital assistant, games machine, digital TV etc.</p><br><br><br><br><br><h4>Source:<a href='https://databank.worldbank.org/data/reports.aspx?source=2&series=IT.NET.USER.ZS' target='_blank'> Read More...</a>&nbsp;&nbsp;<a href='https://data.worldbank.org/indicator/IT.NET.USER.ZS' target='_blank' style='color:green'>Download Here</a></h4> ",
    "IT.CMP.PCMP.P2": "<h3>Personal computers (per 100 people)</h3><br><p>Personal computers are self-contained computers designed to be used by a single individual.</p><br><br><br><br><br><h4>Source:<a href='https://databank.worldbank.org/data/reports.aspx?source=1159&series=IT.CMP.PCMP.P2' target='_blank'> Read More...</a>&nbsp;&nbsp;<a href='https://databank.worldbank.org/data/reports.aspx?source=1159&series=IT.CMP.PCMP.P2' target='_blank' style='color:green'>Download</a></h4> ",
    "IT.NET.BBND.P2": "<h3>Fixed broadband( per 100 people)</h3><br><p>Fixed broadband subscriptions refers to fixed subscriptions to high-speed access to the public Internet (a TCP/IP connection), at downstream speeds equal to, or greater than, 256 kbit/s.</p><br><p>This includes cable modem, DSL, fiber-to-the-home/building, other fixed (wired)-broadband subscriptions, satellite broadband and terrestrial fixed wireless broadband.</p><br><br><br><br><br><h4><h4>Source:<a href='https://databank.worldbank.org/data/reports.aspx?source=2&series=IT.NET.BBND.P2' target='_blank'> Read More...</a>&nbsp;&nbsp;<a href='https://data.worldbank.org/indicator/IT.NET.BBND.P2?view=chart' target='_blank' style='color:green'>Download Here</a></h4>",
    "IT.NET.SECR.P6": "<h3>Secure Internet Servers (Per 1 Million People)</h3><br><p>The number of distinct, publicly-trusted TLS/SSL certificates found in the Netcraft Secure Server Survey.</p><br><br><br><br><br><br><h4>Source:<a href='http://databank.worldbank.org/data/reports.aspx?source=2&series=IT.NET.SECR.P6' target='_blank'> Read More...</a>&nbsp;&nbsp;<a href='https://data.worldbank.org/indicator/IT.NET.SECR.P6' target='_blank' style='color:green'>Download Here</a></h4>"
}

var country = "AO";
var compareCountry = "None", compareUrl;
var abbreviation = window.location.href.split('?').pop()
if (abbreviation != null) {
    country = abbreviation.toUpperCase();
}


//load a default image if the country's image is not available in the images/building directory
$.get("images/building/" + country + ".jpg")
    .done(function () {
        $("#building").attr("src", "images/building/" + country + ".jpg");
    }).fail(function () {
        $("#building").attr("src", "images/building/default.jpg");
    })

//  show the country for which we are displaying the data
$(".indentity h4").html(countriesDescriptions[country][2] + " - Economic indicators");


var x = country.substring(0, 1)

$(".flag").attr("src", "https://www.crwflags.com/fotw/images/" + x + "/" + country + ".gif")

var ctx = document.getElementById('chartsEnergy').getContext('2d');
var textToright;
var chartType = "bar";
var mainData, compareData = null;
var chart = new Chart(ctx, {
    type: 'line', data: {
        labels: [''], datasets: [{ label: '', data: [0] }]
    },

    // Configuration options go here
    options: {}
});

// Configuration options go here

var url;
var indicator,
    code,
    text;
var dataLabel;
var searchValue;
loadInitialData()

$(".country-menu nav ul li:nth-child(2)").click(function () {
    loadInitialData()
});


function loadInitialData() {
    dataLabel = "Mobile cellular subscriptions (per 100 people)";
    url = "https://api.worldbank.org/v2/countries/" + country + "/indicators/";
    ctx = document.getElementById('chartsMI').getContext('2d');
    textToright = $(".mobile-internet .part1-text");
    code = "IT.CEL.SETS.P2?date=2007:2018&format=json";
    url += code;
    indicator = "IT.CEL.SETS.P2";

    placeTextToright();
    builder();
    drawTable();
}


$(".country-menu nav ul li:nth-child(3)").click(function () {
    compareCountry = "None"
    dataLabel = "Renewable energy consumption (% of total final energy consumption)";
    url = "https://api.worldbank.org/v2/countries/" + country + "/indicators/";
    ctx = document.getElementById('chartsEnergy').getContext('2d');
    textToright = $(".energy .part1-text");
    code = "EG.FEC.RNEW.ZS?date=2007:2018&format=json";
    url += code;
    indicator = "EG.FEC.RNEW.ZS";
    compareData = null;
    placeTextToright();
    builder();

});

$(".country-menu nav ul li:nth-child(4)").click(function () {
    compareCountry = "None"
    dataLabel = "Unemployment, total (% of total labor force)";
    url = "https://api.worldbank.org/v2/countries/" + country + "/indicators/";
    ctx = document.getElementById('chartsUnemployment').getContext('2d');
    textToright = $(".unemployment .part1-text");
    code = "sl.uem.totl.zs?date=2007:2018&format=json";
    url += code;
    indicator = "sl.uem.totl.zs";
    compareData = null;
    placeTextToright();
    builder();
});


//Graph Buttons to change options such as choose data to display, type of graph, etc
$("#chooseData").on("change", function () {
    url = "https://api.worldbank.org/v2/countries/" + country + "/indicators/";
    indicator = "" + this.value;
    code = indicator + "?date=2007:2018&format=json";
    url += code;
    placeTextToright()
    builder();

})

$("#chooseGraph").on("change", function () {
    chartType = this.value;
    builder();

})

$("#chooseCompare").on("change", function () {

    compareCountry = this.value;
    compareUrl = "https://api.worldbank.org/v2/countries/" + compareCountry + "/indicators/";
    code = indicator + "?date=2007:2018&format=json";
    compareUrl += code;
    builder();

})
$("." + country).addClass("hidden"); //Don't show the current country on the list of countries of comparing
// End of Graph buttons section



function builder() {

    var dataValues = [],
        dataYears = [];
    $.getJSON(url, function (data) {
        for (var i = 0; i < data[1].length; i++) {
            dataValues.push(data[1][i].value);
            dataYears.push(data[1][i].date);
        }
        dataValues.reverse()
        dataYears.reverse()

        dataValues = dataValues.map(function (n) {
            if (n != null)
                return Number(n.toFixed(2));
            return n;
        });

        mainData = {
            label: countriesDescriptions[country][2],
            backgroundColor: '#2F80ED',
            borderColor: '#2F80ED',
            data: dataValues,
            fill: false
        }
        chart.destroy()

        if (compareCountry == "None") {
            chart = new Chart(ctx, {
                // The type of chart we want to create
                type: chartType,
                // The data for our dataset
                data: {
                    labels: dataYears,
                    datasets: [mainData]
                },

                // Configuration options go here
                options: {

                }
            });
        } else {
            // getJSON is asynchronous, that means had to use the data as soon as I got it (whithin the getJSON function)
            $.getJSON(compareUrl, function (data) {

                var dataCompareValues = [];
                for (var i = 0; i < data[1].length; i++) {
                    dataCompareValues.push(data[1][i].value);
                }
                dataCompareValues.reverse()

                dataCompareValues = dataCompareValues.map(function (n) {
                    if (n != null)
                        return Number(n.toFixed(2));
                    return n;
                });


                compareData = {
                    label: countriesDescriptions[compareCountry][2],
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: dataCompareValues,
                    fill: false
                }

                chart = new Chart(ctx, {
                    // The type of chart we want to create
                    type: chartType,
                    // The data for our dataset
                    data: {
                        labels: dataYears,
                        datasets: [mainData, compareData] //both datasets are still within the their functions this is good to avoid empty graph due to getJSON asynchronous
                    },

                    // Configuration options go here
                    options: {

                    }
                });

            })

        }

    })

};


//Place country overview text
if (typeof countryOverviewDetails[country] !== 'undefined') {
    $(".overview .part1 .part1-text").html(countryOverviewDetails[country][0])
    $(".overview .part2 .part2-text").html(countryOverviewDetails[country][1])
}


function placeTextToright() {
    textToright.html(indicatorFullDescription[indicator]);
}

//code for table
function drawTable() {

    tableUrl = "https://api.worldbank.org/v2/country/" + country + "/indicator/IT.NET.BBND.P2;IT.NET.SECR.P6;IT.CEL.SETS.P2;NY.GDP.MKTP.CD;SP.POP.TOTL?source=2&format=json&date=2007:2018";
    $.getJSON(tableUrl, function (data) {

        data[1].reverse();
        var indicatorList = {
            "IT.NET.BBND.P2": "IT.NET.BBND.P2",
            "IT.NET.SECR.P6": "IT.NET.SECR.P6",
            "NY.GDP.MKTP.CD": "NY.GDP.MKTP.CD",
            "IT.CEL.SETS.P2": "IT.CEL.SETS.P2"

        }

        var dateList = {
            "2014": "2014",
            "2015": "2015",
            "2016": "2016",
            "2017": "2017",
            "2018": "2018"
        }

        $(".tablevalue").remove();

        data[1].forEach(function (index) {

            if ((index.indicator.id == indicatorList[index.indicator.id]) && (index.date == dateList[index.date])) {

                $("." + index.indicator.id.replace(/\./g, "_")).append("<td class='tablevalue'>" + formatValue(index.value) + "</td>")
            }

            //place trending values on the outstanding banner
            if ((index.indicator.id == "NY.GDP.MKTP.CD") && (index.date == "2017")) {
                $("#gdpTrend").html(formatValue(index.value))
                var a = index.value.toFixed(2);
                var sub_a = a.substring(0, a.length - 3)
                //Test if GDP is trillion
                if (sub_a.length > 12) {
                    $(".gdpTrendArg").html("trillion")
                }

            }

            if ((index.indicator.id == "IT.CEL.SETS.P2") && (index.date == "2017")) {
                $("#mobileSubscTrend").html(formatValue(index.value))
            }

            if ((index.indicator.id == "SP.POP.TOTL") && (index.date == "2017")) {
                var a = index.value.toFixed(2);
                var sub_a = a.substring(0, a.length - 3)
                //Test if population is billion
                if (sub_a.length > 9) {
                    $(".populationTrendArg").html("billion")
                }

                $("#populationTrend").html(formatValue(index.value))

            }
        });
    })

    $(".mobile-internet .part2-text").html(mobileInternettableDetails[country])
}


function formatValue(x) {
    var formatedValue = null;
    // .replace(/\d(?=(\d{3})+\.)/g, '$&,') : null;

    x != null ? formatedValue = x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : null;

    ((formatedValue != null) && (formatedValue.length >= 13)) ? formatedValue = formatedValue.substring(0, 5) : null;
    ((formatedValue != null) && ((formatedValue.length >= 9) && (formatedValue.length <= 12))) ? formatedValue = formatedValue.substring(0, 5) : null;
    return formatedValue;
}
//Maps
// alert(parseInt(countriesDescriptions[country][0]))
// var map;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: parseFloat(countriesDescriptions[country][0]), lng: parseFloat(countriesDescriptions[country][1]) },
//         zoom: 5
//     });
// }



$("#gmap_canvas").attr("src", "https://maps.google.com/maps?q=" + countriesDescriptions[country][2] + "t=&z=5&ie=UTF8&iwloc=&output=embed");

