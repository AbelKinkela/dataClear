<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome to Data Clear!</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700,700i,900,900i"
        type="text/css" media="all">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script type="text/javascript" src="script/d3.v5.js"></script>
    <script type="text/javascript" src="script/script.js"></script>
    <!-- charts.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

</head>

<body>

<?php require("includes/header.php");?>
    <main>
        <div class="banner">
            <img src="images/top-banner.PNG" alt="" id="building">
            <div class="banner-text">

                    <div>
                        <h3>Population(2017)</h3>
                        <h1 id="populationTrend"></h1><span class="populationTrendArg">million</span>
                    </div>
                    <div>
                        <h3 >GDP (2017)</h3>
                        <h1 id="gdpTrend"></h1><span class="gdpTrendArg">Billion</span>
                    </div>
                    <div>
                        <h3>Mobile Subsc(2017)</h3>
                        <h1 id="mobileSubscTrend"></h1><span>per 100 people</span>
                    </div>
            </div>
        </div>

        <div class="country-menu">
            <nav>
                <ul>
                    <li class="active">Overview</li>
                    <li>Mobile and Internet</li>
                    <li>Energy</li>
                    <li>Unemployment</li>
                </ul>
            </nav>

        </div><br><br>
        <div class="submenus">
            <!-- Start of overview -->
            <div class="overview">
                <div class="part1">
                    <div>
                        <img src="#" alt="" class="flag">
                    </div>

                    <div class="part1-text">


                    </div>
                </div>

                <div class="part2">
                    <div>
                        <div id="map">
                                <div class="mapouter">
                                    <div class="gmap_canvas">
                                        <iframe width="400" height="400" id="gmap_canvas" src="" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.crocothemes.net"></a></div></div>
                        </div>
                    </div>

                    <div class="part2-text">

                    </div>
                </div>
            </div>
            <!-- End of overview -->

            <!-- Start of Mobile and Internet -->
            <div class="mobile-internet hidden">
                <div class="part1">
                    <div class="graph">
                        <!-- Graph container -->
                        <canvas id="chartsMI"></canvas>
                        <!-- Selector choose Data to display on the graph -->
                        <div>
                            <select id="chooseData" autofocus>
                                <option selected disabled hidden>Change Data</option>
                                <option value="IT.CEL.SETS.P2">Mobile Subscribers</option>
                                <option value="IT.NET.USER.P3">Internet Users</option>
                                <option value="IT.CMP.PCMP.P2">Personal Computers </option>
                                <option value="IT.NET.SECR.P6">Secure Servers</option>
                                <option value="IT.NET.BBND.P2">Fixed broadband</option>
                            </select>
                            <!-- Selector choose the type of graph to display -->
                            <select id="chooseGraph" autofocus>
                                <option selected disabled hidden>Change Chart</option>
                                <option value="bar">Bar</option>
                                <option value="line">Line</option>
                                <option value="radar">Radar </option>
                            </select>

                            <!-- The compare button -->
                            <select id="chooseCompare" autofocus>
                                <option selected disabled hidden>Compare with</option>
                                <option value="None">None</option>
                                <option value="AF" class="AF">Afghanistan</option>
                                <option value="AL" class="AL">Albania</option>
                                <option value="DZ" class="DZ">Algeria</option>
                                <option value="AX" class="AX">Aland Islands</option>
                                <option value="AS" class="AS">American Samoa</option>
                                <option value="AI" class="AI">Anguilla</option>
                                <option value="AD" class="AD">Andorra</option>
                                <option value="AO" class="AO">Angola</option>
                                <option value="AN" class="AN">Antilles - Netherlands</option>
                                <option value="AG" class="AG">Antigua and Barbuda</option>
                                <option value="AQ" class="AQ">Antarctica</option>
                                <option value="AR" class="AR">Argentina</option>
                                <option value="AM" class="AM">Armenia</option>
                                <option value="AU" class="AU">Australia</option>
                                <option value="AT" class="AT">Austria</option>
                                <option value="AW" class="AW">Aruba</option>
                                <option value="AZ" class="AZ">Azerbaijan</option>
                                <option value="BA" class="BA">Bosnia and Herzegovina</option>
                                <option value="BB" class="BB">Barbados</option>
                                <option value="BD" class="BD">Bangladesh</option>
                                <option value="BE" class="BE">Belgium</option>
                                <option value="BF" class="BF">Burkina Faso</option>
                                <option value="BG" class="BG">Bulgaria</option>
                                <option value="BH" class="BH">Bahrain</option>
                                <option value="BI" class="BI">Burundi</option>
                                <option value="BJ" class="BJ">Benin</option>
                                <option value="BM" class="BM">Bermuda</option>
                                <option value="BN" class="BN">Brunei Darussalam</option>
                                <option value="BO" class="BO">Bolivia</option>
                                <option value="BR" class="BR">Brazil</option>
                                <option value="BS" class="BS">Bahamas</option>
                                <option value="BT" class="BT">Bhutan</option>
                                <option value="BV" class="BV">Bouvet Island</option>
                                <option value="BW" class="BW">Botswana</option>
                                <option value="BV" class="BV">Belarus</option>
                                <option value="BZ" class="BZ">Belize</option>
                                <option value="KH" class="KH">Cambodia</option>
                                <option value="CM" class="CM">Cameroon</option>
                                <option value="CA" class="CA">Canada</option>
                                <option value="CV" class="CV">Cape Verde</option>
                                <option value="CF" class="CF">Central African Republic</option>
                                <option value="TD" class="TD">Chad</option>
                                <option value="CL" class="CL">Chile</option>
                                <option value="CN" class="CN">China</option>
                                <option value="CX" class="CX">Christmas Island</option>
                                <option value="CC" class="CC">Cocos (Keeling) Islands</option>
                                <option value="CO" class="CO">Colombia</option>
                                <option value="CG" class="CG">Congo</option>
                                <option value="CI" class="CI">Cote D'Ivoire (Ivory Coast)</option>
                                <option value="CK" class="CK">Cook Islands</option>
                                <option value="CR" class="CR">Costa Rica</option>
                                <option value="HR" class="HR">Croatia (Hrvatska)</option>
                                <option value="CU" class="CU">Cuba</option>
                                <option value="CY" class="CY">Cyprus</option>
                                <option value="CZ" class="CZ">Czech Republic</option>
                                <option value="CD" class="CD">Democratic Republic of the Congo</option>
                                <option value="DJ" class="DJ">Djibouti</option>
                                <option value="DK" class="DK">Denmark</option>
                                <option value="DM" class="DM">Dominica</option>
                                <option value="DO" class="DO">Dominican Republic</option>
                                <option value="EC" class="EC">Ecuador</option>
                                <option value="EG" class="EG">Egypt</option>
                                <option value="SV" class="SV">El Salvador</option>
                                <option value="TP" class="TP">East Timor</option>
                                <option value="EE" class="EE">Estonia</option>
                                <option value="GQ" class="GQ">Equatorial Guinea</option>
                                <option value="ER" class="ER">Eritrea</option>
                                <option value="ET" class="ET">Ethiopia</option>
                                <option value="FI" class="FI">Finland</option>
                                <option value="FJ" class="FJ">Fiji</option>
                                <option value="FK" class="FK">Falkland Islands (Malvinas)</option>
                                <option value="FM" class="FM">Federated States of Micronesia</option>
                                <option value="FO" class="FO">Faroe Islands</option>
                                <option value="FR" class="FR">France</option>
                                <option value="FX" class="FX">France, Metropolitan</option>
                                <option value="GF" class="GF">French Guiana</option>
                                <option value="PF" class="PF">French Polynesia</option>
                                <option value="GA" class="GA">Gabon</option>
                                <option value="GM" class="GM">Gambia</option>
                                <option value="DE" class="DE">Germany</option>
                                <option value="GH" class="GH">Ghana</option>
                                <option value="GI" class="GI">Gibraltar</option>
                                <option value="GB" class="GB">Great Britain (UK)</option>
                                <option value="GD" class="GD">Grenada</option>
                                <option value="GE" class="GE">Georgia</option>
                                <option value="GR" class="GR">Greece</option>
                                <option value="GL" class="GL">Greenland</option>
                                <option value="GN" class="GN">Guinea</option>
                                <option value="GP" class="GP">Guadeloupe</option>
                                <option value="GS" class="GS">S. Georgia and S. Sandwich Islands</option>
                                <option value="GT" class="GT">Guatemala</option>
                                <option value="GU" class="GU">Guam</option>
                                <option value="GW" class="GW">Guinea-Bissau</option>
                                <option value="GY" class="GY">Guyana</option>
                                <option value="HK" class="HK">Hong Kong</option>
                                <option value="HM" class="HM">Heard Island and McDonald Islands</option>
                                <option value="HN" class="HN">Honduras</option>
                                <option value="HT" class="HT">Haiti</option>
                                <option value="HU" class="HU">Hungary</option>
                                <option value="ID" class="ID">Indonesia</option>
                                <option value="IE" class="IE">Ireland</option>
                                <option value="IL" class="IL">Israel</option>
                                <option value="IN" class="IN">India</option>
                                <option value="IO" class="IO">British Indian Ocean Territory</option>
                                <option value="IQ" class="IQ">Iraq</option>
                                <option value="IR" class="IR">Iran</option>
                                <option value="IT" class="IT">Italy</option>
                                <option value="JM" class="JM">Jamaica</option>
                                <option value="JO" class="JO">Jordan</option>
                                <option value="JP" class="JP">Japan</option>
                                <option value="KE" class="KE">Kenya</option>
                                <option value="KG" class="KG">Kyrgyzstan</option>
                                <option value="KI" class="KI">Kiribati</option>
                                <option value="KM" class="KM">Comoros</option>
                                <option value="KN" class="KN">Saint Kitts and Nevis</option>
                                <option value="KP" class="KP">Korea (North)</option>
                                <option value="KR" class="KR">Korea (South)</option>
                                <option value="KW" class="KW">Kuwait</option>
                                <option value="KY" class="KY">Cayman Islands</option>
                                <option value="KZ" class="KZ">Kazakhstan</option>
                                <option value="LA" class="LA">Laos</option>
                                <option value="LB" class="LB">Lebanon</option>
                                <option value="LC" class="LC">Saint Lucia</option>
                                <option value="LI" class="LI">Liechtenstein</option>
                                <option value="LK" class="LK">Sri Lanka</option>
                                <option value="LR" class="LR">Liberia</option>
                                <option value="LS" class="LS">Lesotho</option>
                                <option value="LT" class="LT">Lithuania</option>
                                <option value="LU" class="LU">Luxembourg</option>
                                <option value="LV" class="LV">Latvia</option>
                                <option value="LY" class="LY">Libya</option>
                                <option value="MK" class="MK">Macedonia</option>
                                <option value="MO" class="MO">Macao</option>
                                <option value="MG" class="MG">Madagascar</option>
                                <option value="MY" class="MY">Malaysia</option>
                                <option value="ML" class="ML">Mali</option>
                                <option value="MW" class="MW">Malawi</option>
                                <option value="MR" class="MR">Mauritania</option>
                                <option value="MH" class="MH">Marshall Islands</option>
                                <option value="MQ" class="MQ">Martinique</option>
                                <option value="MU" class="MU">Mauritius</option>
                                <option value="YT" class="YT">Mayotte</option>
                                <option value="MT" class="MT">Malta</option>
                                <option value="MX" class="MX">Mexico</option>
                                <option value="MA" class="MA">Morocco</option>
                                <option value="MC" class="MC">Monaco</option>
                                <option value="MD" class="MD">Moldova</option>
                                <option value="MN" class="MN">Mongolia</option>
                                <option value="MM" class="MM">Myanmar</option>
                                <option value="MP" class="MP">Northern Mariana Islands</option>
                                <option value="MS" class="MS">Montserrat</option>
                                <option value="MV" class="MV">Maldives</option>
                                <option value="MZ" class="MZ">Mozambique</option>
                                <option value="NA" class="NA">Namibia</option>
                                <option value="NC" class="NC">New Caledonia</option>
                                <option value="NE" class="NE">Niger</option>
                                <option value="NF" class="NF">Norfolk Island</option>
                                <option value="NG" class="NG">Nigeria</option>
                                <option value="NI" class="NI">Nicaragua</option>
                                <option value="NL" class="NL">Netherlands</option>
                                <option value="NO" class="NO">Norway</option>
                                <option value="NP" class="NP">Nepal</option>
                                <option value="NR" class="NR">Nauru</option>
                                <option value="NU" class="NU">Niue</option>
                                <option value="NZ" class="NZ">New Zealand (Aotearoa)</option>
                                <option value="OM" class="OM">Oman</option>
                                <option value="PA" class="PA">Panama</option>
                                <option value="PE" class="PE">Peru</option>
                                <option value="PG" class="PG">Papua New Guinea</option>
                                <option value="PH" class="PH">Philippines</option>
                                <option value="PK" class="PK">Pakistan</option>
                                <option value="PL" class="PL">Poland</option>
                                <option value="PM" class="PM">Saint Pierre and Miquelon</option>
                                <option value="CS" class="CS">Serbia and Montenegro</option>
                                <option value="PN" class="PN">Pitcairn</option>
                                <option value="PR" class="PR">Puerto Rico</option>
                                <option value="PS" class="PS">Palestinian Territory</option>
                                <option value="PT" class="PT">Portugal</option>
                                <option value="PW" class="PW">Palau</option>
                                <option value="PY" class="PY">Paraguay</option>
                                <option value="QA" class="QA">Qatar</option>
                                <option value="RE" class="RE">Reunion</option>
                                <option value="RO" class="RO">Romania</option>
                                <option value="RU" class="RU">Russian Federation</option>
                                <option value="RW" class="RW">Rwanda</option>
                                <option value="SA" class="SA">Saudi Arabia</option>
                                <option value="WS" class="WS">Samoa</option>
                                <option value="SH" class="SH">Saint Helena</option>
                                <option value="VC" class="VC">Saint Vincent and the Grenadines</option>
                                <option value="SM" class="SM">San Marino</option>
                                <option value="ST" class="ST">Sao Tome and Principe</option>
                                <option value="SN" class="SN">Senegal</option>
                                <option value="SC" class="SC">Seychelles</option>
                                <option value="SL" class="SL">Sierra Leone</option>
                                <option value="SG" class="SG">Singapore</option>
                                <option value="SK" class="SK">Slovakia</option>
                                <option value="SI" class="SI">Slovenia</option>
                                <option value="SB" class="SB">Solomon Islands</option>
                                <option value="SO" class="SO">Somalia</option>
                                <option value="ZA" class="ZA">South Africa</option>
                                <option value="ES" class="ES">Spain</option>
                                <option value="SD" class="SD">Sudan</option>
                                <option value="SR" class="SR">Suriname</option>
                                <option value="SJ" class="SJ">Svalbard and Jan Mayen</option>
                                <option value="SE" class="SE">Sweden</option>
                                <option value="CH" class="CH">Switzerland</option>
                                <option value="SY" class="SY">Syria</option>
                                <option value="SU" class="SU">USSR (former)</option>
                                <option value="SZ" class="SZ">Swaziland</option>
                                <option value="TW" class="TW">Taiwan</option>
                                <option value="TZ" class="TZ">Tanzania</option>
                                <option value="TJ" class="TJ">Tajikistan</option>
                                <option value="TH" class="TH">Thailand</option>
                                <option value="TL" class="TL">Timor-Leste</option>
                                <option value="TG" class="TG">Togo</option>
                                <option value="TK" class="TK">Tokelau</option>
                                <option value="TO" class="TO">Tonga</option>
                                <option value="TT" class="TT">Trinidad and Tobago</option>
                                <option value="TN" class="TN">Tunisia</option>
                                <option value="TR" class="TR">Turkey</option>
                                <option value="TM" class="TM">Turkmenistan</option>
                                <option value="TC" class="TC">Turks and Caicos Islands</option>
                                <option value="TV" class="TV">Tuvalu</option>
                                <option value="UA" class="UA">Ukraine</option>
                                <option value="UG" class="UG">Uganda</option>
                                <option value="AE" class="AE">United Arab Emirates</option>
                                <option value="UK" class="UK">United Kingdom</option>
                                <option value="US" class="US">United States</option>
                                <option value="UM" class="UM">United States Minor Outlying Islands</option>
                                <option value="UY" class="UY">Uruguay</option>
                                <option value="UZ" class="UZ">Uzbekistan</option>
                                <option value="VU" class="VU">Vanuatu</option>
                                <option value="VA" class="VA">Vatican City State</option>
                                <option value="VE" class="VE">Venezuela</option>
                                <option value="VG" class="VG">Virgin Islands (British)</option>
                                <option value="VI" class="VI">Virgin Islands (U.S.)</option>
                                <option value="VN" class="VN">Viet Nam</option>
                                <option value="WF" class="WF">Wallis and Futuna</option>
                                <option value="EH" class="EH">Western Sahara</option>
                                <option value="YE" class="YE">Yemen</option>
                                <option value="YU" class="YU">Yugoslavia (former)</option>
                                <option value="ZM" class="ZM">Zambia</option>
                                <option value="ZR" class="ZR">Zaire (former)</option>
                                <option value="ZW" class="ZW">Zimbabwe</option>
                            </select>
                        </div>
                    </div>
                    <div class="part1-text">
                        <div ></div>

                    </div>
                </div>
<br><br><br>
                <div class="part2">
                    <div class="table">
                        <table>
                            <tr>
                                <th>Category</th>
                                <th>2014</th>
                                <th>2015</th>
                                <th>2016</th>
                                <th>2017</th>
                                <th>2018</th>
                            </tr>
                            <tr class="IT_NET_BBND_P2">
                                <td>Fixed broadband subscriptions (per 100 people)</td>

                            </tr>
                            <tr class="IT_NET_SECR_P6">
                                <td>Secure Internet servers (per 1 million people)</td>
                            </tr>
                            <tr class="IT_CEL_SETS_P2">
                                <td>Mobile cellular subscriptions (per 100 people)</td>
                            </tr>
                            <tr class="NY_GDP_MKTP_CD">
                                <td>GDP (current US$) in Billion</td>
                            </tr>
                        </table>

                    </div>
                    <div class="part2-text"></div>
                </div>
            </div>
            <!-- End of Mobile and Internet -->

            <!-- Start of Energy -->
            <div class="energy hidden">
                <div class="part1">
                    <div class="graph">
                        <canvas id="chartsEnergy"></canvas>
                    </div>
                    <div class="part1-text"></div>
                </div>

                <div class="part2">
                    <div class="table"></div>
                    <div class="part2-text"></div>
                </div>
            </div>
            <!-- End of Energy -->

            <!-- Start of Unemployment -->
            <div class="unemployment hidden">
                <div class="part1">
                    <div class="graph">
                        <canvas id="chartsUnemployment"></canvas>
                    </div>
                    <div class="part1-text"></div>
                </div>

                <div class="part2">
                    <div class="table"></div>
                    <div class="part2-text"></div>
                </div>
            </div>
            <!-- End of Unemployment -->
        </div>
    </main>
    <footer id="footer"><?php require("includes/footer.php");?></footer>
    <script type="text/javascript" src="script/script2.js"></script>
    <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD7OqGHqUlC-j_fMPzl2CxZSObq3jLhGb8&callback=initMap"
        async defer></script> -->
</body>

</html>