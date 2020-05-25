/*Fecha pie de pagina*/
var a =document.getElementById("fecha");
var año1=new Date();
var año2=año1.getFullYear();
a.innerHTML="SNORT&#169 2019-"+año2+" "+"Todos los derechos reservados."

/* buton para subir*/
var mboton = document.getElementById("mbtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mboton.style.display = "block";
  } else {
    mboton.style.display = "none";
  }
}
function subir(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*abrir tipos de categorias*/
function opencateg(evt, cityName) {
  var b, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tipocontent");
  for (b = 0; b < tabcontent.length; b++) {
    tabcontent[b].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tipos");
  for (b = 0; b < tablinks.length; b++) {
    tablinks[b].className = tablinks[b].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("open").click();

/*despagable secion categorios hombre niño t mujers*/
var dropdown = document.getElementsByClassName("boton");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
