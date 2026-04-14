export function configurar_favicon() {
    const enlace_favicon = document.createElement("link");
    enlace_favicon.rel = "icon";
    enlace_favicon.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌍</text></svg>";
    document.head.appendChild(enlace_favicon);
}

export function mostrar_datos(ip, datos_geo) {
    const elemento_ip = document.getElementById("ip-resultado");
    const elemento_continente = document.getElementById("continente-resultado");
    const elemento_pais = document.getElementById("pais-resultado");
    const elemento_capital = document.getElementById("capital-resultado");
    const elemento_ciudad = document.getElementById("ciudad-resultado");
    const elemento_coordenadas = document.getElementById("coordenadas-resultado");
    const elemento_zona = document.getElementById("zona-horaria-resultado");
    const elemento_moneda = document.getElementById("moneda-resultado");
    const elemento_bandera = document.getElementById("bandera-imagen");

    // validaciones protectoras para evitar que el código se congele si falta un id
    if (elemento_ip) elemento_ip.textContent = ip;
    
    if (datos_geo && datos_geo.location) {
        const codigo_pais = datos_geo.location.country_code2.toLowerCase();
        
        if (elemento_bandera) {
            elemento_bandera.src = `https://flagcdn.com/${codigo_pais}.svg`;
            elemento_bandera.style.display = "block";
        }
        
        if (elemento_continente) elemento_continente.textContent = datos_geo.location.continent_name;
        if (elemento_pais) elemento_pais.textContent = datos_geo.location.country_name;
        if (elemento_capital) elemento_capital.textContent = datos_geo.location.country_capital;
        if (elemento_ciudad) elemento_ciudad.textContent = datos_geo.location.city;
        if (elemento_coordenadas) elemento_coordenadas.textContent = `${datos_geo.location.latitude}, ${datos_geo.location.longitude}`;
    }

    if (datos_geo && datos_geo.time_zone && elemento_zona) {
        elemento_zona.textContent = datos_geo.time_zone.name;
    }

    if (datos_geo && datos_geo.currency && elemento_moneda) {
        elemento_moneda.textContent = `${datos_geo.currency.name} (${datos_geo.currency.symbol})`;
    }
}

export function mostrar_error(error) {
    const ids_elementos = [
        "ip-resultado", "continente-resultado", "pais-resultado",
        "capital-resultado", "ciudad-resultado", "coordenadas-resultado",
        "zona-horaria-resultado", "moneda-resultado"
    ];

    ids_elementos.forEach(id => {
        const elemento = document.getElementById(id);
        if (elemento) elemento.textContent = "Error"; // texto visible en mayúscula inicial
    });
    
    console.error("hubo un error al procesar los datos:", error);
}