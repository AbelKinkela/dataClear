<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome to Data Clear!</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

</head>

<body>
    <?php require("includes/header.php");?>
    <main>
        <!-- Start of banner section-->
        <section class="banner">
            <img src="images/building/default.jpg" alt="">
            <div class="banner-text welcomeText" style="margin-top:-25px; justify-content:center">
                <h1 style="color: white; text-aligh:center">Welcome to dataClear.<br>
                    Instantly get the data insight you are looking for...</h1>
                </h1>
            </div>

        </section>
        <!-- End of page banner -->

        <!-- Start of instructions section -->
        <section class="instructions">
            <h3>Find insights about your country's most important economic indicators. Data Clear platform
                includes the world statistics about Population, GDP, Internet and mobile subscribers and more. </h3>
        </section>
        <!-- End of instructions section -->

        <!-- Start of container section for continents and countries -->
        <section class="continent-and-country-container" id="chooseCountry">
            <h2 >Choose a country</h2>
            <div class="selector">
                <div class="continents">
                    <div id="africa">
                        <h3>Africa</h3>
                    </div>
                    <div id="america">
                        <h3>America</h3>
                    </div>
                    <div id="asia">
                        <h3>Asia</h3>
                    </div>
                    <div id="australia">
                        <h3>Australia</h3>
                    </div>
                    <div id="europe">
                        <h3>Europe</h3>
                    </div>

                </div>
                <div class="countries-container">
                    <!-- Start of African countries list -->
                    <div class="african-list">
                        <nav>
                            <ul>
                                <a href="country.php?DZA"><li>Algeria</li> </a>
                                <a href="country.php?AO"><li>Angola</li> </a>
                                <a href="country.php?BJ"><li>Benin</li> </a>
                                <a href="country.php?BW"><li>Botswana</li> </a>
                                <a href="country.php?BF"><li>Burkina Faso</li> </a>
                                <a href="country.php?BI"><li>Burundi</li> </a>
                                <a href="country.php?CM"><li>Cameroon</li> </a>
                                <a href="country.php?CV"><li>Cape Verde</li> </a>
                                <a href="country.php?CF"><li>Central African Republic</li> </a>
                                <a href="country.php?KM"><li>Comoros</li> </a>
                                <a href="country.php?CD"><li>Democratic Republic of Congo</li> </a>
                                <a href="country.php?DJ"><li>Djibouti</li> </a>
                                <a href="country.php?EG"><li>Egypt</li> </a>
                                <a href="country.php?GQ"><li>Equatorial Guinea</li> </a>
                            </ul>
                            <ul>
                                <a href="country.php?ER"><li>Eritrea</li> </a>
                                <a href="country.php?ET"><li>Ethiopia</li> </a>
                                <a href="country.php?GA"><li>Gabon</li> </a>
                                <a href="country.php?GM"><li>Gambia</li> </a>
                                <a href="country.php?GH"><li>Ghana</li> </a>
                                <a href="country.php?GN"><li>Guinea</li> </a>
                                <a href="country.php?GW"><li>Guinea-Bissau</li> </a>
                                <a href="country.php?CI"><li>Ivory Coast</li> </a>
                                <a href="country.php?KE"><li>Kenya</li> </a>
                                <a href="country.php?LS"><li>Lesotho</li> </a>
                                <a href="country.php?LR"><li>Liberia</li> </a>
                                <a href="country.php?LY"><li>Libya</li> </a>
                                <a href="country.php?MG"><li>Madagascar</li> </a>
                                <a href="country.php?MW"><li>Malawi</li> </a>
                            </ul>
                            <ul>
                                <a href="country.php?ML"><li>Mali</li> </a>
                                <a href="country.php?MR"><li>Mauritania</li> </a>
                                <a href="country.php?MU"><li>Mauritius</li> </a>
                                <a href="country.php?MA"><li>Morocco</li> </a>
                                <a href="country.php?MZ"><li>Mozambique</li> </a>
                                <a href="country.php?NA"><li>Namibia</li> </a>
                                <a href="country.php?NE"><li>Niger</li> </a>
                                <a href="country.php?NG"><li>Nigeria</li> </a>
                                <a href="country.php?CG"><li>Republic of the Congo</li> </a>
                                <a href="country.php?RE"><li>Reunion</li> </a>
                                <a href="country.php?RW"><li>Rwanda</li> </a>
                                <a href="country.php?SH"><li>Saint Helena</li> </a>
                                <a href="country.php?ST"><li>Sao Tome and Principe</li> </a>
                                <a href="country.php?SN"><li>Senegal</li> </a>
                            </ul>
                            <ul>
                                <a href="country.php?SC"><li>Seychelles</li> </a>
                                <a href="country.php?SL"><li>Sierra Leone</li> </a>
                                <a href="country.php?SO"><li>Somalia</li> </a>
                                <a href="country.php?ZA"><li>South Africa</li> </a>
                                <a href="country.php?SS"><li>South Sudan</li> </a>
                                <a href="country.php?SD"><li>Sudan</li> </a>
                                <a href="country.php?SZ"><li>Swaziland</li> </a>
                                <a href="country.php?TZ"><li>Tanzania</li> </a>
                                <a href="country.php?TG"><li>Togo</li> </a>
                                <a href="country.php?TN"><li>Tunisia</li> </a>
                                <a href="country.php?UG"><li>Uganda</li> </a>
                                <a href="country.php?EH"><li>Western Sahara</li> </a>
                                <a href="country.php?ZM"><li>Zambia</li> </a>
                                <a href="country.php?ZW"><li>Zimbabwe</li> </a>
                            </ul>
                        </nav>
                    </div>
                    <!-- End of African countries list -->


                    <!-- Start of American countries list -->

                    <div class="american-list hidden">
                        <nav>
                            <ul>
                                <a href="country.php?US">
                                    <li>United States of America</li>
                                </a>
                                <!-- <li>Brazil</li> -->
                            </ul>
                        </nav>
                    </div>
                    <!-- End of American countries list -->


                    <!-- Start of Asian countries list -->
                    <div class="asian-list hidden">
                        <nav>

                        </nav>
                    </div>
                    <!-- End of Asian countries list -->

                    <!-- Start of European countries list -->
                    <div class="australian-list hidden">
                        <nav>

                        </nav>
                    </div>
                    <!-- End of Australian countries list -->

                    <!-- Start of European countries list -->
                    <div class="european-list hidden">
                        <nav>
                            <ul>
                                <a href="country.php?GB">
                                    <li>United Kingdom</li>
                                </a>
                                <!-- <li>France</li> -->
                            </ul>
                        </nav>
                    </div>
                    <!-- End of European countries list -->
                </div>
            </div>
        </section>
    </main>
    <footer id="footer">
    <?php require("includes/footer.php"); ?>
    </footer>
    <script src="script/script.js"></script>

</body>

</html>