"use strict";

function changeTab(target, name){
  var tabs = document.getElementsByClassName("deze");
  var tab = document.getElementById(name);
  var buttons = document.getElementsByTagName("button");
  var header = document.getElementById("header")
  for (var i = 0; i < tabs.length; i++) {

    tabs[i].style.display = "none";
    
    tab.style.display = "block";

    buttons[i].classList.remove("active");

  }

  target.currentTarget.className = "active";

}
