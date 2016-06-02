var cw = 0;
var ch = 0;
var fichasVerdes = 21;
var fichasRojas = 21;
var turno = 0;
var onclick = false;
//turno 1 -> Jugador 1 (rojo)
//turno 2 -> Jugador 2 (verde)
canvas = document.getElementById("game");
var ocupada = [];
for (var i = 0; i<7 ; i++){
	ocupada[i] = [];
	for(var j = 0; j<6; j++){
		ocupada[i][j] = "blanca";
	}
}
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
		cv = document.getElementById("game");
		cw = ((cv.width / 7).toFixed(1));//anchura del lienzo dividido entre 11 casillas
		ch = ((cv.height / 6).toFixed(1));//altura del lienzo dividido entre 11 casillas
		hacertablero();

		document.getElementById("cantidad1").innerHTML = "x " + fichasRojas;
		document.getElementById("cantidad2").innerHTML = "x " + fichasVerdes; 
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

function hacertablero()
{
	var ctx="";//almacenaremos el contenido del canvas en formato 2d
	cv = document.getElementById("game");
	ctx = cv.getContext("2d");


	ctx.strokeStyle="#000000";
	ctx.moveTo(0,0);//x e y ((1+a)*cw)
	ctx.lineTo(0,cv.width);
	ctx.stroke();
	ctx.strokeStyle="#000000";
	for(a=0;a <= 7;a++)
	{
		ctx.moveTo(40*(a),0);//x e y ((1+a)*cw)
		ctx.lineTo(40*(a),cv.height);
		ctx.stroke();
	}
	for(a=0;a <= 6;a++)
	{
		ctx.moveTo(0,40*(a));//x e y ((1+a)*cw)
		ctx.lineTo(cv.width,40*(a));
		ctx.stroke();
	}

}
function click_roja(){
	
	if(turno==0){
		// fichasRojas--;
		// turno = 1;
		document.getElementById("cantidad1").innerHTML = "x " + fichasRojas;
		document.getElementById("fichas_rojas").style.backgroundColor = "#00ff00";
		document.getElementById("fichas_verdes").style.backgroundColor = "#FFFFFF";
		posicionRaton();
	}
}
function click_verde(){
	if(turno==1){
		// alert("YOUR TURN");	
		// fichasVerdes--;
		// turno=0;
		document.getElementById("cantidad2").innerHTML = "x " + fichasVerdes; 
		document.getElementById("fichas_verdes").style.backgroundColor = "#00ff00";
		document.getElementById("fichas_rojas").style.backgroundColor = "#FFFFFF";
		posicionRaton();


	}

}
function getPosition(event)
{
	var x = new Number();
	var y = new Number();
	var canvas = document.getElementById("game");

	if (event.x != undefined && event.y != undefined)//esto se realiza en todos los navegadores menos en firefox
	{
	  x = event.x;
	  y = event.y;
	}
	else //metodo para firefox
	{
	  x = event.clientX + document.body.scrollLeft +
		  document.documentElement.scrollLeft;
	  y = event.clientY + document.body.scrollTop +
		  document.documentElement.scrollTop;
	}

	x -= canvas.offsetLeft;
	y -= canvas.offsetTop;
	
	xc=cv.clientWidth/cv.width;
	yc=cv.clientHeight/cv.height;
	
	x=x/xc;
	y=y/yc;
	
	var posiciones = new Array();
	posiciones["x"]=Math.floor(x/40);
	posiciones["y"]=Math.floor(y/40);
	
	return posiciones;
}

function posicionRaton(){
	var canvas = document.getElementById('game');
	canvas.addEventListener('click', pintar);

}

function pintar(evt) { 

	var canvas = document.getElementById('game');
	var cbx=canvas.getContext("2d");
	
	coord = getPosition(evt);

	if(turno == 0){
		ocupada[coord["x"]][coord["y"]] = "roja";
 		colocada = true;

 		for(var i = 0; i<6 && colocada==true; i++){
  				alert(i +" " + coord["x"]);

 			if(ocupada[coord["x"]][i] == "blanca"){
 				alert(ocupada[coord["x"]][i]);
		 		cbx.fillStyle = "red";
 				cbx.fillRect(coord["x"]*40,200-i*40,40,40);
				ocupada[coord["x"]][i] = "roja";
				colocada=false; 			
 			}
 		}
	}
	else{

	}
		
}

