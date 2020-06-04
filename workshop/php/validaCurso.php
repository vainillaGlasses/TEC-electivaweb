<?php 
include("conexion.php");

/*if (isset($_GET["codigo"])) {*/
	#$sql = "SELECT codigo FROM curso WHERE codigo='".$_GET["codigo"]."'";
    $sql = "SELECT codigo FROM curso WHERE codigo='IC1400'";
    echo $sql;
    $result = $conn->query($sql);
    
    if($result->num_rows > 0){
        echo "Existe";
    }else{
        echo "Puede insertar";
    }
/*}else{
	echo "O";
}*/
?>