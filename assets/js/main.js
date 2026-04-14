import { obtener_ip, obtener_geo } from './api.js';
import { configurar_favicon, mostrar_datos, mostrar_error } from './ui.js';

configurar_favicon();

async function iniciar_app() {
    try {
        console.log("iniciando peticiones...");
        const ip_publica = await obtener_ip();
        console.log("ip obtenida:", ip_publica);
        
        const datos_geo = await obtener_geo(ip_publica);
        console.log("información de geolocalización completa:", datos_geo);
        
        mostrar_datos(ip_publica, datos_geo);
        console.log("interfaz actualizada correctamente.");
    } catch (error) {
        mostrar_error(error);
    }
}

iniciar_app();