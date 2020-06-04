function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText == "0"){
                document.getElementById("codigo").style.border="thick solid #F00";
                document.getElementById("codigo").focus();
            }
        };
    var v = document.getElementById("codigo").value;
    xhttp.open("GET", "validarCodigo.php?codigo="+v, true);
    xhttp.send();
}
