$(document).ready(function () {
    //Africa
    $(".continents div:first").hover(function () {
        $(".countries-container div:not(.african-list)").addClass("hidden");
        $(".african-list").removeClass("hidden");
    });
    //America
    $(".continents div:nth-child(2)").hover(function () {
        $(".countries-container div:not(.american-list)").addClass("hidden");
        $(".american-list").removeClass("hidden");

    });
    //Asia
    $(".continents div:nth-child(3)").hover(function () {
        $(".countries-container div:not(.asian-list)").addClass("hidden");
        $(".asian-list").removeClass("hidden");
    });
    //Australia
    $(".continents div:nth-child(4)").hover(function () {
        $(".countries-container div:not(.australian-list)").addClass("hidden");
        $(".australian-list").removeClass("hidden");
    });
    //Europe
    $(".continents div:nth-child(5)").hover(function () {
        $(".countries-container div:not(.european-list)").addClass("hidden");
        $(".european-list").removeClass("hidden");
    });

    $("#copyrightyear").text((new Date).getFullYear());




    // code for the country.html page

    //Overview
    $(".country-menu nav ul li:first").click(function () {
        $(".submenus > div:not(.overview)").addClass("hidden"); //hide all direct children of submenus div except the overview
        $(".country-menu nav ul li:first").addClass("active"); //Add class active to the first submenu

        $(".country-menu nav ul li:not(.country-menu nav ul li:first)").removeClass("active"); //remove class active from all li expect the first
        $(".overview").removeClass("hidden"); //remove class hidden from the overview div
    });
    //Mobile-Internet
    $(".country-menu nav ul li:nth-child(2)").click(function () {
        $(".submenus > div:not(.mobile-internet)").addClass("hidden");
        $(".country-menu nav ul li:nth-child(2)").addClass("active");

        $(".country-menu nav ul li:not(.country-menu nav ul li:nth-child(2))").removeClass("active");
        $(".mobile-internet").removeClass("hidden");
    });

    //energy
    $(".country-menu nav ul li:nth-child(3)").click(function () {
        $(".submenus > div:not(.energy)").addClass("hidden");
        $(".country-menu nav ul li:nth-child(3)").addClass("active");

        $(".country-menu nav ul li:not(.country-menu nav ul li:nth-child(3))").removeClass("active");
        $(".energy").removeClass("hidden");
    });
    //Unemployment
    $(".country-menu nav ul li:nth-child(4)").click(function () {
        $(".submenus > div:not(.unemployment)").addClass("hidden");
        $(".country-menu nav ul li:nth-child(4)").addClass("active");

        $(".country-menu nav ul li:not(.country-menu nav ul li:nth-child(4))").removeClass("active");
        $(".unemployment").removeClass("hidden");
    });









});