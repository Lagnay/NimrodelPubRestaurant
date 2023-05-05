function mostrarComuniquemonos() {
  document.getElementById("comuniquemonos").style.display = "block";
  document.getElementById("reserva").style.display = "none";
}

function mostrarReserva() {
  document.getElementById("reserva").style.display = "block";
  document.getElementById("comuniquemonos").style.display = "none";
}

function recibirComuniquemonos() {
  let nombreCom = document.getElementById("nombre1").value;
  let CorreoCom = document.getElementById("Correo").value;
  let motivoCom = document.getElementById("motivo").value;
  let campoTexto = document.getElementById("w3review").value;
  let telefonoCom = document.getElementById("telefono").value;
  if (nombreCom === "") {
    alert(
      "El campo Nombre es obligatorio, se deben completar todos los datos antes de enviar."
    );
  } else if (CorreoCom === "") {
    alert(
      "El campo Correo es obligatorio, se deben completar todos los datos antes de reservar."
    );
  } else if (motivoCom === "") {
    alert(
      "El campo Motivo es obligatorio, se deben completar todos los datos antes de reservar."
    );
  } else if (campoTexto === "") {
    alert(
      "El campo de su Mensaje es obligatorio, se deben completar todos los datos antes de reservar."
    );
  } else if (telefonoCom === "") {
    alert(
      "El campo Teléfono es obligatorio, se deben completar todos los datos antes de reservar."
    );
  } else {
    alert(
      "Muchas gracias " +
        nombreCom +
        " hemos recibido su " +
        motivoCom +
        " y enviaremos una pronta respuesta al correo " +
        CorreoCom
    );
  }
  let anchoPantalla = window.innerWidth;
  if (anchoPantalla <= 991) {
    document.getElementById("comuniquemonos").style.display = "none";
  } else {
    document.getElementById("comuniquemonos").style.display = "block";
  }
}

// function recibirReserva() {
//   let nombreRes = document.getElementById("nombre1").value;
//   let CorreoRes = document.getElementById("Correo").value;
//   let telefonoRes = document.getElementById("telefono2").value;
//   let fechaRes = document.getElementById("fecha").value;
//   let horaRes = document.getElementById("hora").value;
//   let asistentesRes = document.getElementById("asistentes").value;
//   if (nombreRes === "") {
//     alert(
//       "El campo Nombre es obligatorio, se deben completar todos los datos antes de reservar."
//     );
//   } else if (CorreoRes === "") {
//     alert(
//       "El campo Correo es obligatorio, se deben completar todos los datos antes de reservar."
//     );
//   } else if (telefonoRes === "") {
//     alert(
//       "El campo Teléfono es obligatorio, se deben completar todos los datos antes de reservar."
//     );
//   } else if (fechaRes === "") {
//     alert(
//       "El campo Fecha es obligatorio, se deben completar todos los datos antes de reservar."
//     );
//   } else if (horaRes === "") {
//     alert(
//       "El campo Hora es obligatorio, se deben completar todos los datos antes de reservar."
//     );
//   } else if (asistentesRes === "") {
//     alert(
//       "El campo Asistentes es obligatorio, se deben completar todos los datos antes de reservar."
//     );
//   } else {
//     alert(
//       "Muchas gracias " +
//         nombreRes +
//         " hemos recibido su reserva y enviaremos una pronta respuesta al correo " +
//         CorreoRes
//     );
//   }
//   if (anchoPantalla <= 991) {
//     document.getElementById("reserva").style.display = "none";
//   } else {
//     document.getElementById("reserva").style.display = "block";
//   }
// }

$(document).ready(function () {
  $("#botonsuperR").click(function () {
    let nombreRes = $("#nombre2").val();
    let CorreoRes = $("#Correo2").val();
    let telefonoRes = $("#telefono2").val();
    let fechaRes = $("#fecha").val();
    let horaRes = $("#hora").val();
    let asistentesRes = $("#asistentes").val();
    if (nombreRes === "") {
      alert(
        "El campo Nombre es obligatorio, se deben completar todos los datos antes de reservar."
      );
    } else if (CorreoRes === "") {
      alert(
        "El campo Correo es obligatorio, se deben completar todos los datos antes de reservar."
      );
    } else if (telefonoRes === "") {
      alert(
        "El campo Teléfono es obligatorio, se deben completar todos los datos antes de reservar."
      );
    } else if (fechaRes === "") {
      alert(
        "El campo Fecha es obligatorio, se deben completar todos los datos antes de reservar."
      );
    } else if (horaRes === "") {
      alert(
        "El campo Hora es obligatorio, se deben completar todos los datos antes de reservar."
      );
    } else if (asistentesRes === "") {
      alert(
        "El campo Asistentes es obligatorio, se deben completar todos los datos antes de reservar."
      );
    } else {
      alert(
        "Estimad@: " +
          nombreRes +
          " agradecemos por reservar con nosotros. Hemos registrado " +
          asistentesRes +
          " asistentes. Se ha enviado el código de confirmación al correo " +
          CorreoRes +
          "\nGracias por preferirnos"
      );
    }
    let anchoPantalla = window.innerWidth;
    if (anchoPantalla <= 991) {
      $("#reserva").css("display", "none");
    } else {
      $("#reserva").css("display", "block");
    }
  });
});

let bebidasOcultas = document.querySelector("#modalBebidas");

function mostrarBebidas() {
  bebidasOcultas.style.display = "block";
}

function ocultarBebidas() {
  bebidasOcultas.style.display = "none";
}

let tablasOcultas = document.querySelector("#modalTablas");

function mostrarTablas() {
  tablasOcultas.style.display = "block";
}

function ocultarTablas() {
  tablasOcultas.style.display = "none";
}

let shopOcultas = document.querySelector("#modalShop");

function mostrarShop() {
  shopOcultas.style.display = "block";
}

function ocultarShop() {
  shopOcultas.style.display = "none";
}

const nosotrosOculto = document.querySelector("#carouselExampleCaptions");

function mostrarSobreNosotros() {
  nosotrosOculto.style.display = "block";
}

function ocultarSobreNosotros() {
  nosotrosOculto.style.display = "none";
}
