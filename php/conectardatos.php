<?php 
function conectar(){
   $conexion=mysql_connect("localhost","root","") or die("Error al conectar la base de datos".mysql_error());
    return $conexion;
}
 ?>
