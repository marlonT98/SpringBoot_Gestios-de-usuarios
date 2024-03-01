
$(document).ready(function () {
    //ejecuta todo el codigo que esta aqui una ves que se hay cargado la pagina
  
   //on ready




  });
  





  //la funcion tiene que ser asincronica (async)
  async function iniciarSesion() {
    let datos ={};

    datos.email=document.getElementById("txtEmail").value;
    datos.password=document.getElementById("txtPassword").value;



    //await:espera este resultado y despues lo guarda en la variable
    const request = await fetch("api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos)
    });  
  
    const response = await request.text();

    if(response!='FAIL'){
      localStorage.token=response;
      localStorage.email=datos.email;
      window.location.href="usuarios.html"
    }else{
        alert("las credenciales son incorectas");
    }
  
   
  }
 
  