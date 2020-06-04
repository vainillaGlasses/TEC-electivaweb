 <?php
$servername = "mississippi.ic-itcr.ac.cr";
$username = "sarburola";
$password = "sarburola";
$dbname = "sarburola";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
    echo "we are connected ;)";
}
?> 