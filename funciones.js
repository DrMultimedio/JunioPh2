function arranque(){
	if(sessionStorage.getItem("player1")){
		nombre1 = sessionStorage.getItem("player1");
		document.getElementById("logueado1").innerHTML = nombre1;
		document.getElementById("deslogueado1").style.display = "none";
		var logged = true;
		}
	if(sessionStorage.getItem("player2")){
		nombre2 = sessionStorage.getItem("player2");
		document.getElementById("logueado2").innerHTML = nombre2;
		document.getElementById("deslogueado2").style.display = "none";
		if(logged == true){
			document.location ="juego.html";
		}
	}

}

function arranquejuego(){
	if(sessionStorage.getItem("player1") && sessionStorage.getItem("player2")){

	}
	else{
		document.location = "index.html";
	}


}

function login1(){
	var nombre = document.getElementById("nombre1").value;
	sessionStorage.setItem("player1", nombre);
	mensaje1 = document.getElementById("logueado1");
	mensaje1.innerHTML= nombre;
}
function login2(){
	var nombre = document.getElementById("nombre2").value;
	sessionStorage.setItem("player2", nombre);
	mensaje1 = document.getElementById("logueado2");
	mensaje1.innerHTML= nombre;
}

