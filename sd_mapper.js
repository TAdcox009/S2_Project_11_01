"use strict";
// This makes it use strict javascript.
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
Author: Todd Adcox Jr
Date:   2-12-19  

*/

// A variable named thistime adds a different date
// The second variable saves the text of the previous variable
// In the HTML there is a element with the ID timestamp and its going to change its value to the same as the variable named timeStr
// Creates a variable named thisHour, using the getHours() method to get the hour value from the thisTime variable.
//  Creates a variable named thisMonth, using the getMonth() method to get the month value from the thisTime variable.
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();

// The number of the map to tell which image to use with the given hour and month is calculated with the formula (2×month + hour) % 24
// where month is the value of the thisMonth variable and hour is the value of the thisHour variable. The values of the formula is being stored in the mapNum variable

// There is a variable named imgstr that stores the following text string <img src = 'sd_skyMap.png' / > where "Map" is the value of the mapNum variable, and when its at a certian time the image will change. For the page element with the ID planisphere there is the value of the imgStr variable directly after the element
var mapNum = ((2 * thisMonth + thisHour) % 24);
var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
document.getElementById("planisphere").insertAdjacentHTML('afterbegin', imgStr);