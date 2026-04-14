const url_ip = "https://api.ipify.org?format=json";
const api_key = "00924b07bc33460bbcf557da07504e3c";

export async function obtener_ip() {
    const respuesta = await fetch(url_ip);
    if (!respuesta.ok) throw new Error("falló la petición a ipify");
    const datos = await respuesta.json();
    return datos.ip;
}

export async function obtener_geo(ip) {
    const url_geo = `https://api.ipgeolocation.io/v3/ipgeo?apiKey=${api_key}&ip=${ip}`;
    const respuesta = await fetch(url_geo);
    if (!respuesta.ok) throw new Error("falló la petición a ipgeolocation");
    return await respuesta.json();
}