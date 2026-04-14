const url_api = "https://api.ipify.org?format=json";
const elemento_ip = document.getElementById("ip-resultado");

fetch(url_api)
    .then(respuesta => respuesta.json())
    .then(datos => {
        const ip_publica = datos.ip;
        elemento_ip.textContent = ip_publica;
        console.log("Tu IP pública es:", ip_publica);
    })
    .catch(error => {
        elemento_ip.textContent = "Error al obtener la IP";
        console.log("Hubo un error:", error);
    });