const url_ip = "https://api.ipify.org?format=json";
const api_key = "00924b07bc33460bbcf557da07504e3c";

const elemento_ip = document.getElementById("ip-resultado");
const elemento_continente = document.getElementById("continente-resultado");
const elemento_ciudad = document.getElementById("ciudad-resultado");
const elemento_bandera = document.getElementById("bandera-imagen");

fetch(url_ip)
    .then(respuesta => respuesta.json())
    .then(datos_ip => {
        const ip_publica = datos_ip.ip;
        elemento_ip.textContent = ip_publica;
        
        const url_geo = `https://api.ipgeolocation.io/v3/ipgeo?apiKey=${api_key}&ip=${ip_publica}`;
        return fetch(url_geo);
    })
    .then(respuesta_geo => respuesta_geo.json())
    .then(datos_geo => {
        console.log("Información De Geolocalización:", datos_geo);
        console.log("Información De La Moneda:", datos_geo.currency.name);
        console.log("Información:", datos_geo.time_zone.dst_start.utc_time);
        
        const codigo_pais = datos_geo.location.country_code2.toLowerCase();
        elemento_bandera.src = `https://flagcdn.com/${codigo_pais}.svg`;
        elemento_bandera.style.display = "block";
        
        elemento_continente.textContent = datos_geo.location.continent_name;
        elemento_ciudad.textContent = datos_geo.location.city;
    })
    .catch(error => {
        if (elemento_ip) elemento_ip.textContent = "Error";
        if (elemento_continente) elemento_continente.textContent = "Error";
        if (elemento_ciudad) elemento_ciudad.textContent = "Error";
        console.error("Hubo Un Error:", error);
    });