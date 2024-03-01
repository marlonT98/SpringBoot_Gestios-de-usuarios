//lo que hace es seleccionar la tabla y pone la tabla con paginacion y funcionalidades
$(document).ready(function () {
  //ejecuta todo el codigo que esta aqui una ves que se hay cargado la pagina

  cargarUsuario();

  $("#usuarios").DataTable();
  actualizarEmailDelusuario();
});

function actualizarEmailDelusuario( ){

  document.getElementById("txt-email-usuario").outerHTML=localStorage.email;

}

//cargar usuarios
//la funcion tiene que ser asincronica (async)
async function cargarUsuario() {
  //await:espera este resultado y despues lo guarda en la variable
  const request = await fetch("api/usuarios", {
    method: "GET",
    headers:getHeadears()
  });

  const usuarios = await request.json();

  let listadoHtml = "";

  for (let usuario of usuarios) {

    let botonliminar =
      '<a href="#" onclick="eliminarUsuario(' +
      usuario.id +
      ')"  class="btn btn-danger btn-circle"> <i class="fas fa-trash"></i></a>';

      let telefonoTexto = usuario.telefono == null ? '-' :usuario.telefono;

    let usuarioHtml =
      "<td>" +
      usuario.id +
      "</td> <td>" +
      usuario.nombre +
      " " +
      usuario.apellido +
      "</td><td>" +
      usuario.email +
      "</td><td>" +
       telefonoTexto+
      "</td><td>" +
      botonliminar +
      "</td></tr>";

    listadoHtml += usuarioHtml;
  }

  document.querySelector("#usuarios tbody").outerHTML = listadoHtml;
}


function getHeadears(){


  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Authorization":localStorage.token
  };

}





async function eliminarUsuario(id) {
  if (!confirm("¿Desea eliminar este usuario?")) {
    return;
  }

  //await:espera este resultado y despues lo guarda en la variable
  const request = await fetch("api/usuarios/" + id, {
    method: "DELETE",
    headers:getHeadears()
   
  });

  location.reload();
}
