<?php
include("conexion.php");

/*
function valCurso(){
    if (isset($_GET["codigo"])) {
        $sql = "SELECT codigo FROM curso WHERE codigo='".$_GET["codigo"]."'";
        #$sql = "SELECT codigo FROM curso WHERE codigo='IC1400'";
        $result = $conn->query($sql);

        if($result->num_rows > 0){
            echo "No rows";
        }else{
            echo "Hay rows";
        }
    }else{
        echo "O";
    }
}
*/

#function insertTech(){
    #if (isset($_GET["tecnologia"])) {
        #$sql = "SELECT nombre FROM tecnologia WHERE nombre='".$_GET["tecnologia"]."'";
        $sql = "SELECT nombre FROM tecnologia WHERE nombre='C++'";
        $result = $conn->query($sql);

        if($result->num_rows > 0){
            echo "Ya existe";
        }else{
            echo "go insert";#.$_GET["tecnologia"];
        }
    #}
#}

#insertTech();
?>