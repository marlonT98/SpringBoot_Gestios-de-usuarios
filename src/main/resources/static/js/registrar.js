
$(document).ready(function () {
    //ejecuta todo el codigo que esta aqui una ves que se hay cargado la pagina
  
   //on ready




  });
  





  //la funcion tiene que ser asincronica (async)
  async function registrarUsuario() {
    let datos ={};
    datos.nombre=document.getElementById("txtNombre").value;
    datos.apellido=document.getElementById("txtApellido").value;
    datos.email=document.getElementById("txtEmail").value;
    datos.password=document.getElementById("txtPassword").value;


    let repetirPassword=document.getElementById("txtRepeatPassword").value;



    if(repetirPassword != datos.password){
             
        alert("La contraseña que escribiste es diferente");
        return;//llega hasta aqui y ya no hace el codigo que le siqgue como request

    }

  

    //await:espera este resultado y despues lo guarda en la variable
    const request = await fetch("api/usuarios", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos)
    });  
  
    alert("La cuenta fue creada con exito");
    window.location.href="login.html"
  
   
  }
 
  