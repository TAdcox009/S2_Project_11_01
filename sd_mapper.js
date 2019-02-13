"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
Author: Todd Adcox Jr
Date:   2-12-19  

*/


// 5. Declare a variable named thistime containing a Date object for February 3, 2018 at 3:15:28 a.m.
// 6. Use the toLocaleString() method to save the text of the thisTime variable in the timestr variable.
// 7. Change the inner HTML code of the page element with the ID timestamp to the value of the timeStr variable.
// 8. Next, you will determine which sky map to show in the web page. First, create a variable named thisHour, using the getHours() method to extract the hour value from the thisTime variable.
// 9. Create a variable named thisMonth using the getMonth() method to extract the month number from the thisTime variable.
// 10. The number of the map to use with the given hour and month is calculated with the formula (2×month + hour) % 24
// where month is the value of the thisMonth variable and hour is the value of the thisHour variable. Store the value of this formula in the mapNum variabl

var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

var mapNum = ((2 * thisMonth + thisHour) % 24);
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);