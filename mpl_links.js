"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 1

   Author: Chad Williams
   Date:   4.18.19
   
   Filename: mpl_links.js

*/

// on load runs anonymous function
window.addEventListener('load', function () {
    // declares variable with all select elements nested in #govLinks form
    var allSelect = document.querySelectorAll("#govLinks select");
    // for loop, listens for changes, on change sends user to link using value from the changed value
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].addEventListener('change', function (e) {
            window.location.href = e.target.value;
        })
    }
})