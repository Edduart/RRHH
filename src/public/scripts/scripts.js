//funciones para enviar la data del form a la API

const { response } = require("express");

//script para enviar data a la api > registar y actualizar

async function sendData() {
  const formData = new FormData(form);
  const clickedButton = event.submitter;
  const jsonObject = {};
            formData.forEach((value, key) => {
                jsonObject[key] = value;
            });
  try {
    if(clickedButton.name === "registar"){
      const response = await fetch("http://localhost:3000/api/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(jsonObject), 
      });
      console.log(await response.json());
    } else if (clickedButton.name === "actualizar"){
      const cedulaValue = cedulaInput.value;
      const response = await fetch("http://localhost:3000/api/users/"+cedulaValue, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(jsonObject), 
      });
      console.log(await response.json());
    }
  } catch (error) {
    console.error(error);
  }
}

//script para buscar por ID > buscar

async function findById() {
  const cedulaValue = cedulaInput.value;
  console.log("Cedula ingresada:", cedulaValue);
  console.log("evento buscar activado")

  try {
    fetch("http://localhost:3000/api/users/"+cedulaValue, {method: "GET"})
    .then((response) => {
      if(!response.ok){
        alert("La cedula no existe!");
        throw new Error("La cedula no existe!");
      }
      return response.json()
    })
    .then((data) => {
      cedulaInput.disabled = true;
      let { nombre, apellido, correo, telefono, fechaDeIngreso  } = data.users;
      //console.log(cedula,nombre,apellido,correo,fechaDeIngreso)
      let nombreInput = document.querySelector("#nombre");
      let apellidoInput = document.querySelector("#apellido");
      let correoInput = document.querySelector("#correo");
      let telefonoInput = document.querySelector("#telefono");
      nombreInput.value = nombre;
      apellidoInput.value = apellido;
      correoInput.value = correo;
      telefonoInput.value = telefono;
    }).catch((error) => {
      console.log(error)
    })
  } catch (error) {
    console.error(error);
  }
}

//script para para eliminar > eliminar

async function deleteById(){
  const cedulaValue = cedulaInput.value;
  console.log("Cedula ingresada:", cedulaValue);
  console.log("evento eliminar activado")

  try {
    fetch("http://localhost:3000/api/users/"+cedulaValue, {method: "DELETE"})
    .then((response) => {
      if(!response.ok){
        alert("La cedula no existe!");
        throw new Error("La cedula no existe!");
      }
      console.log(response.json());
      return 1;
    }).catch((error) => {
      console.log(error);
    })
  } catch (error) {
    console.error(error);
  }

}

//script para buscar todo > PENDIENTE

// solo para probar
function test(){
  alert("Hello Javatpoint");  
}