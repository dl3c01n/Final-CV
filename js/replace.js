window.onload = function(){
   document.getElementsByClassName("indicator")[0].style.background = "#34495e";
}

function showpar2(){
   var showparcours2 = document.getElementById('parcours2')
   if( showparcours2.style.display === "none"){
     showparcours2.style.display = "block"
   }
   else{
     showparcours2.style.display = "none";
   }

   var showparcours1 = document.getElementById('parcours1')
   if(showparcours1.style.display === "block"){
     showparcours1.style.display = "none"
   }
   else{
     showparcours1.style.display = "none";
   }
 }

 function showpar1(){
   var showparcours1 = document.getElementById('parcours1')
   if( showparcours1.style.display === "none"){
       showparcours1.style.display = "block";
   }
   else{
       showparcours1.style.display = "none";
   }

   var showparcours2 = document.getElementById('parcours2')
   if( showparcours2.style.display === "block"){
     showparcours2.style.display = "none"
   }
   else{
     showparcours2.style.display = "none";
   }
}

function ColorRed(color) {
   document.body.style.background = '#e74c3c';
   document.getElementById("intro").style.background = '#e74c3c';
   document.getElementById("btnshow").style.background = '#e74c3c';
   document.getElementById("btnshow1").style.background = '#e74c3c';
   document.getElementById("mainprepatitle").style.color = '#e74c3c';
   document.getElementById("mainprepatitle1").style.color = '#e74c3c';
   document.getElementById("con1").style.border = '#c0392b';
   document.getElementById("abouttitle").style.background = '#c0392b';
   document.getElementsByClassName("indicator")[0].style.background = "#c0392b";
}

function ColorBlue(color) {
   document.body.style.background = '#3498db';
   document.getElementById("intro").style.background = '#3498db';
   document.getElementById("btnshow").style.background = '#3498db';
   document.getElementById("btnshow1").style.background = '#3498db';
   document.getElementById("mainprepatitle").style.color = '#3498db';
   document.getElementById("mainprepatitle1").style.color = '#3498db';
   document.getElementById("con1").style.border = '#2980b9';
   document.getElementById("abouttitle").style.background = '#2980b9';
   document.getElementsByClassName("indicator")[0].style.background = "#2980b9";

}

function ColorGreen(color) {
   document.body.style.background = '#2ecc71';
   document.getElementById("intro").style.background = '#2ecc71';
   document.getElementById("btnshow").style.background = '#2ecc71';
   document.getElementById("btnshow1").style.background = '#2ecc71';
   document.getElementById("mainprepatitle").style.color = '#2ecc71';
   document.getElementById("mainprepatitle1").style.color = '#2ecc71';
   document.getElementById("con1").style.border = '#27ae60';
   document.getElementById("abouttitle").style.background = '#27ae60';
   document.getElementsByClassName("indicator")[0].style.background = "#27ae60";

}

function ColorMBlue(color) {
   document.body.style.background = '#34495e';
   document.getElementById("intro").style.background = '#34495e';
   document.getElementById("btnshow").style.background = '#34495e';
   document.getElementById("btnshow1").style.background = '#34495e';
   document.getElementById("mainprepatitle").style.color = '#34495e';
   document.getElementById("mainprepatitle1").style.color = '#34495e';
   document.getElementById("con1").style.border = '#2c3e50';
   document.getElementById("abouttitle").style.background = '#2c3e50';
   document.getElementsByClassName("indicator")[0].style.background = "#2c3e50";

}

function ColorOrange(color) {
   document.body.style.background = '#e67e22';
   document.getElementById("intro").style.background = '#e67e22';
   document.getElementById("btnshow").style.background = '#e67e22';
   document.getElementById("btnshow1").style.background = '#e67e22';
   document.getElementById("mainprepatitle").style.color = '#e67e22';
   document.getElementById("mainprepatitle1").style.color = '#e67e22';
   document.getElementById("con1").style.border = '#d35400';
   document.getElementById("abouttitle").style.background = '#d35400';
   document.getElementsByClassName("indicator")[0].style.background = "#e67e22";

}

function ColorViolet(color) {
   document.body.style.background = '#9b59b6';
   document.getElementById("intro").style.background = '#9b59b6';
   document.getElementById("btnshow").style.background = '#9b59b6';
   document.getElementById("btnshow1").style.background = '#9b59b6';
   document.getElementById("mainprepatitle").style.color = '#9b59b6';
   document.getElementById("mainprepatitle1").style.color = '#9b59b6';
   document.getElementById("con1").style.border = '#8e44ad';
   document.getElementById("abouttitle").style.background = '#8e44ad';
   document.getElementsByClassName("indicator")[0].style.background = "#8e44ad";

}