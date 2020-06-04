function newElement(){
  window.open("element.html","",'top=300,left=500,width=500,height=350');
}


document.getElementById("addPeriodo").addEventListener("change", newPeriod);
function newPeriod(){
    var valSelect = document.getElementById("addPeriodo").value;
    if(valSelect == "n"){
       window.open("periodo.html","",'top=300,left=500,width=500,height=350');
    }
}

document.getElementById("addCurso").addEventListener("change", newCourse);
function newCourse(){
    var valSelect = document.getElementById("addCurso").value;
    if(valSelect == "n"){
        window.open("curso.html","",'top=300,left=500,width=500,height=350');
    }
}


document.getElementById("cancelElement").addEventListener("click",cancel);
function cancel(){
    window.close();
}


document.getElementById("newProject").addEventListener("click",addProject);
function addProject(){
     window.open("proyecto.html","",'top=200,left=500,width=500,height=500');
}

document.getElementById("btn-actualizarPeriodo").addEventListener("click",actualizarPeriodo);
function actualizarPeriodo(){
    document.getElementById("periodoActual").className="visible";
}

document.getElementById("guardarPeriodo").addEventListener("click",savePeriod);
function savePeriod(){
    document.getElementById("periodoActual").className="oculta";
}
/*document.getElementById("curso").addEventListener("change", selCourse);
function selCourse(){
    var valSelect = document.getElementById("curso").value;
    if(valSelect == "n"){
        document.getElementById("addCourse").className="visible";
    }else{
        document.getElementById("addCourse").className="oculta";
    }
}*/