function alerta() {
    alert('hola mundo!');
    };


    function onDeviceReady(){
	//mkLog("Aplicación cargada y lista");
    //navigator.notification.alert("PhoneGap is working");
    document.write('Voy a ser un genio en JavaScript');
	alert('dispositivo listo');
	existe_db = window.localStorage.getItem("existe_db");
	db = window.openDatabase("agenda_curso", "1.0", "DB del curso Phonegap", 200000);
	if(existe_db == null){
		creaDB();
	}else{
		cargaDatos();
	};

	}