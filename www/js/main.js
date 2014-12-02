function main() {
        document.addEventListener("deviceready", aplicacionIniciada, false); // Al inciar la app
        document.addEventListener("pause", aplicacionPausada, false);        // Al pausar la app
        document.addEventListener("resume", aplicacionReiniciada, false);    // Al reiniciar la app
        document.addEventListener("online", phonegapOnline, false);          // Phonegap tiene acceso a internet
        document.addEventListener("offline", phonegapOffline, false);        // Phonegap NO tiene acceso a internet
        document.addEventListener("backbutton", atrasPulsado, false);        // Se ha pulsado la tecla atrás
        document.addEventListener("menubutton", menuPulsado, false);         // Se ha pulsado la tecla menú
        document.addEventListener("searchbutton", menuPulsado, false);       // Se ha pulsado la tecla búsqued
}
 
function aplicacionIniciada()
{
CreaDB();
}
 
function aplicacionPausada()
{
}
 
function aplicacionReiniciada()
{
}
 
function phonegapOnline()
{
}
 
function phonegapOffline()
{
}
 
function atrasPulsado()
{
}
 
function menuPulsado()
{
}
 
function busquedaPulsado()
{
}

// Base de datos de videobrain

var existe_db
var db

function onDeviceReady(){

	mkLog("Aplicación Cargadan  y Lista");

	existe_db = window.localStorage.getItem("existe_db");

	db = window.localStorage("agenda_curso"), "1.0", "Db deñ Curso", 200000);

	if(existe_db == null){

   		creaDB)();

	}


	window.localStorage.getItem("existe_db", 1);
}

function creaDB(){
	db.transaction(creaNuevaDB, errorDB, creaSuccess);
	//window.localStorage.setItem("existe_db", 1);

}

function creaNuevaDb(tx){
	mklog("Crear base de datos");

	tx.executeSql('DROP TABLET IF EXISTS agenda_curso');

	var sql = "CREATE TABLET IF EXISTS agenda_curso ( "+
		"id INTEGER PRIMARY KEY AUTOINCREMENT, " +
		"nombre VARCHAR(50)," +
		"apellidos VARCHAR(50)," +
		"telefono VARCHAR(30)," +
		"categoria VARCHAR(30)," +
		"foto VARCHAR(200)," +
		"email VARCHAR(30) )";
	tx.executeSql(sql);

	txt.executeSql("INSERT INTO agenda_curso(id,nombre,apellidos,telefono,categoria,foto,email) VALUES (1,'Jose','Perez', '+58246224264','amigo','lauyader@gmail.com'");

}

function creaSucess(){
	window.localStorage.setItem("existe_db", 1);
}

function errorDB(err){
	mkLog("Error procesando SQL" +err.code);
	navigator.notification.alert("Error procesando SQL" +err.code);
}