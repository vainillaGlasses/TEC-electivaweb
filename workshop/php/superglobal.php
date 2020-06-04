<?php

if(isset($_GET["bsubmit"])){
	switch ($_GET["arreglo"]) {
		case '1': $arreglo = $_ENV;
		break;

		case '2': $arreglo = $_SERVER;
		break;

		case '3': $arreglo = $_REQUEST;
		break;
	}

	echo "<table>";
	foreach ($arreglo as $key => $value) {
		echo "<tr><td>$key</td><td>$value</td></tr>";
	}
	echo "</table>";
} else {
	?>
	<html>
	<head>
		<title></title>
	</head>
	<body>
		<h1>GET</h1>
	</body>
	</html>
	<?php
}
?>

<html>
<body>
	
<form method="GET" action="superglobal.php">
	<input name="arreglo" type="radio" value="1">$_ENV
	<input name="arreglo" type="radio" value="2">$_SERVER
	<input name="arreglo" type="radio" value="3">$_RESERVE
	<input type="submit" name="bsubmit" value="Submit">
</form>

</body>
</html>