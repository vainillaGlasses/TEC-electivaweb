function hipotenusa(cat1, cat2) {
	var aux = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2));
	return aux;
}

function random(limite) {
	return Math.floor(Math.random() * limite);
}

function dec2bin() {
	var n = random(100), save    = n, salida  = "", residuo = 0, margin  = 10;

	document.writeln("<p>N " + n + "</p>");
	while (n !== 0) {
		document.writeln("<div class='conversion' style='margin-left: " + margin + "px;'>");
		document.writeln("<span class='result'>" + residuo + "</span>");
		document.writeln(n + "<span class='dos'>2</span>");
		residuo = n % 2;
		n = Math.floor(n / 2);
		salida = residuo + salida;
		document.writeln("</div>");
		margin += 20;
	}
	document.writeln("<br><p>El número <b>" + save + "</b> decimal corresponde al <b>" + salida + "</b> binario</p>");
}

function byUss(n) {
	var salida = "", toPrint = "", residuo = 0, margin = 10;
    
    toPrint = "<p id='miniTitle'>N " + n + "</p>";
	while (n !== 0) {
		toPrint += "<div class='col-12 conversion' style='margin-left: " + margin + "px;'><span class='result'>" + residuo + "</span>" + n + "<span class='dos'>2</span>";
		residuo = n % 2;
		n = Math.floor(n / 2);
		salida = residuo + salida;
		toPrint += "</div>";
		margin += 20;
	}
	return toPrint;
}

function getBin(n) {
	var salida = "", residuo = 0;
	while (n !== 0) {
		residuo = n % 2;
		n = Math.floor(n / 2);
		salida = residuo + salida;
	}
	return salida;
}

function convertir() {
	var valor = document.getElementById("valorConv").value;
	document.getElementById("idResult").innerHTML = byUss(valor) + "<br> <p class = 'respuesta'>Binario:" + getBin(valor) + "</p>";

}

function generador() {
    checkUser();
	/*Clean Table*/
	var div = document.getElementById('idResultIII');
	while (div.firstChild) {
	    div.removeChild(div.firstChild);
	}
	/*Generate practice*/
	var fila = "", valor = document.getElementById("idCantGen").value, myTable = document.createElement("table");
	myTable.setAttribute("id", "idPracticeTable");
	myTable.setAttribute("class", "col-12");
	document.getElementById("idResultIII").appendChild(myTable);

	for (var i = 0; i < valor; i++) {
		var id = i.toString(), num = random(100), row = document.createElement("tr");
	    row.setAttribute("id", ("idRow" + id));
	    document.getElementById("idPracticeTable").appendChild(row);

	    var col = document.createElement("td");
	    col.setAttribute("id", ("idRan" + id));
        col.setAttribute("class","myTd");
	    var cont = document.createTextNode(num);
	    col.appendChild(cont);
		document.getElementById("idRow" + id).appendChild(col);

		var col = document.createElement("td"), cont = document.createElement("input");
	    cont.setAttribute("type", "number");
	    cont.setAttribute("min", "0");
	    cont.setAttribute("id", ("idUss" + id));
	    col.appendChild(cont);
		document.getElementById("idRow" + id).appendChild(col);

		var col = document.createElement("td");
	    col.setAttribute("id","idCheck" + id);
	    col.setAttribute("class","check");
	    var cont = document.createTextNode("");
	    col.appendChild(cont);
		document.getElementById("idRow" + id).appendChild(col);	
	};
    
    document.getElementById("button-check").innerHTML = "<button onclick='revisar()'>Revisar</button>";
}

function myDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    //var h = today.getHours();
    //var m = today.getMinutes();

    if(dd<10) {
        dd='0'+dd
    } 

    if(mm<10) {
        mm='0'+mm
    } 

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

function revisar() {
	var cantRow = document.getElementById("idPracticeTable").rows.length;
    var positivo = 0;

	for (var i = 0; i < cantRow; i++) {
		var id = i.toString(), mycelda = document.getElementById("idRan" + id), valor = parseInt(mycelda.childNodes[0].data), insert = document.getElementById("idUss"+id).value;	
		var myVal = valor.toString(), myInsert = insert.toString();
		if (getBin(valor) == insert) {
            positivo += 1;
			document.getElementById("idCheck"+id).innerHTML = "<img src='img/yes.png' alt='Yes'>";
		} else {
            document.getElementById("idCheck"+id).innerHTML = "<img src='img/no.png' alt='No'>";
		}
	};
    var practiceValue = myDate()+"-"+ positivo + "-" + cantRow;
    
    appendPractice(practiceValue, 5);
}

function calificaciones() {
    /*Limpiar*/
    var div = document.getElementById('idResultIII');
	while (div.firstChild) {
	    div.removeChild(div.firstChild);
	}
    var revButton = document.getElementById("button-check");
    revButton.removeChild(revButton.firstChild);
	/*Generar Tabla*/
	var fila = "", myTable = document.createElement("table");
	myTable.setAttribute("id", "idCheckTable");
	myTable.setAttribute("class", "col-12");
	document.getElementById("idResultIII").appendChild(myTable);
    
    var row = document.createElement("tr");
    document.getElementById("idCheckTable").appendChild(row);
    var col = document.createElement("th");
    var cont = document.createTextNode("Fecha");
    col.appendChild(cont);
    row.appendChild(col);
    col = document.createElement("th");
    cont = document.createTextNode("Acertados");
    col.appendChild(cont);
    row.appendChild(col);
    col = document.createElement("th");
    cont = document.createTextNode("Total");
    col.appendChild(cont);
    row.appendChild(col);

    var practiceCookie = getCookie("practice");
    var myPractice = practiceCookie.split("#");
    
	for (var i = 1; i < myPractice.length; i++) {
        row = document.createElement("tr");
		var done = myPractice[i].split("-"); 
        for(var j = 0; j < done.length; j++){
            col = document.createElement("td");
            cont = document.createTextNode(done[j]);
            col.appendChild(cont);
            row.appendChild(col);
        };    
        document.getElementById("idCheckTable").appendChild(row);
	};
}

function checkUser() {
    var user=getCookie("username");
    if (user == "") {
       user = prompt("Por favor digite su nombre:","");
       if (user != "" && user != null) {
           setCookie("username", user, 5);
           setCookie("practice", "",5);
       }
    }
}

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function appendPractice(cvalue, exdays){
    var actualPractice = getCookie("practice");
    var newValue = actualPractice + "#" + cvalue;
    setCookie("practice", newValue, exdays);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}