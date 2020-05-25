
/* FECHA DE PIE DE PAGINA */
var año = document.getElementById("fecha");
var f_date = new Date();
var f_date1=f_date.getFullYear();
año.innerHTML="Snort&#169 2019-"+f_date1+" "+"Todos los derechos reservados";

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
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
