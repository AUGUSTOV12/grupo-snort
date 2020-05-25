var acc = document.getElementsByClassName("pegable");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
/* FECHA DE PIE DE PAGINA */
var año = document.getElementById("fecha");
var f_date=new Date();
var f_date1=f_date.getFullYear();
año.innerHTML="Snort&#169 2019-"+f_date1+" "+"Todos los derechos reservados";
