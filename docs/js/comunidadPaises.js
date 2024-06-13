/* validar paises y ciudades*/
const ciudadesPorPais = {
    "Argentina": ["Buenos Aires", "Mendoza", "Bariloche", "Córdoba", "Rosario", "Salta", "Mar del Plata", "San Carlos de Bariloche", "Ushuaia", "La Plata"],
    "Bolivia": ["La Paz", "Sucre", "Uyuni", "Cochabamba", "Santa Cruz", "Potosí", "Oruro", "Tarija", "Trinidad", "Cobija"],
    "Brasil": ["Río de Janeiro", "São Paulo", "Salvador de Bahía", "Brasilia", "Belo Horizonte", "Fortaleza", "Curitiba", "Manaus", "Recife", "Porto Alegre"],
    "Chile": ["Santiago", "Valparaíso", "San Pedro de Atacama", "Viña del Mar", "La Serena", "Pucón", "Puerto Montt", "Antofagasta", "Iquique", "Concepción"],
    "Colombia": ["Bogotá", "Cartagena", "Medellín", "Cali", "Barranquilla", "Santa Marta", "San Andrés", "Pereira", "Bucaramanga", "Manizales"],
    "Costa Rica": ["San José", "Monteverde", "Manuel Antonio", "Tamarindo", "Jacó", "Puerto Viejo de Talamanca", "La Fortuna", "Liberia", "Heredia", "Cartago"],
    "Cuba": ["La Habana", "Varadero", "Trinidad", "Santiago de Cuba", "Cienfuegos", "Camagüey", "Holguín", "Santa Clara", "Matanzas", "Pinar del Río"],
    "Ecuador": ["Quito", "Guayaquil", "Cuenca", "Baños", "Manta", "Salinas", "Otavalo", "Montañita", "Loja", "Puerto Ayora"],
    "El Salvador": ["San Salvador", "Santa Ana", "Suchitoto", "La Libertad", "El Tunco", "Juayúa", "Ahuachapán", "San Miguel", "Usulután", "Sonsonate"],
    "Guatemala": ["Ciudad de Guatemala", "Antigua Guatemala", "Flores", "Quetzaltenango", "Panajachel", "Livingston", "Chichicastenango", "Huehuetenango", "Santa Cruz del Quiché", "Esquipulas"],
    "Honduras": ["Tegucigalpa", "Roatán", "Copán", "San Pedro Sula", "La Ceiba", "Utila", "Tela", "Choluteca", "Comayagua", "Gracias"],
    "México": ["Ciudad de México", "Cancún", "Guadalajara", "Monterrey", "Puebla", "Oaxaca", "Tulum", "Playa del Carmen", "Puerto Vallarta", "Mérida"],
    "Nicaragua": ["Managua", "Granada", "León", "San Juan del Sur", "Masaya", "Matagalpa", "Estelí", "Rivas", "Bluefields", "Chinandega"],
    "Panamá": ["Ciudad de Panamá", "Bocas del Toro", "Boquete", "David", "Colón", "Santiago de Veraguas", "Penonomé", "Chitré", "Las Tablas", "La Chorrera"],
    "Paraguay": ["Asunción", "Ciudad del Este", "Encarnación", "San Bernardino", "Caacupé", "Concepción", "Coronel Oviedo", "Villarrica", "Pedro Juan Caballero", "Lambaré"],
    "Perú": ["Lima", "Cusco", "Arequipa", "Trujillo", "Chiclayo", "Iquitos", "Puno", "Piura", "Huaraz", "Tacna"],
    "Puerto Rico": ["San Juan", "Ponce", "Rincón", "Mayagüez", "Caguas", "Arecibo", "Bayamón", "Carolina", "Fajardo", "Guaynabo"],
    "República Dominicana": ["Santo Domingo", "Punta Cana", "Santiago de los Caballeros", "Puerto Plata", "La Romana", "Samana", "Bávaro", "Juan Dolio", "Jarabacoa", "Las Terrenas"],
    "Uruguay": ["Montevideo", "Punta del Este", "Colonia del Sacramento", "Salto", "Maldonado", "Rivera", "Paysandú", "Las Piedras", "Canelones", "Tacuarembó"],
    "Venezuela": ["Caracas", "Margarita", "Mérida", "Valencia", "Maracaibo", "Barquisimeto", "Cumaná", "Puerto La Cruz", "San Cristóbal", "Ciudad Bolívar"]
};

// no haya problemas con los acentos
function validateLocation() {
    const countryInput = document.getElementById('location-Country');
    const cityInput = document.getElementById('location-City');

    const country = countryInput.value.trim();
    const city = cityInput.value.trim();

    const locationPattern = /^[a-zA-Z\u00C0-\u017F\s]+$/; // Expresión regular para validar letras, incluyendo letras acentuadas

    // Validar el país y la ciudad
    let isCountryValid = true;
    let isCityValid = true;

    if (!locationPattern.test(country) || !(country in ciudadesPorPais)) {
        countryInput.classList.add('is-invalid');
        countryInput.classList.remove('is-valid');
        isCountryValid = false;
    } else {
        countryInput.classList.remove('is-invalid');
        countryInput.classList.add('is-valid');
    }

    if (!locationPattern.test(city) || (country in ciudadesPorPais && !ciudadesPorPais[country].includes(city))) {
        cityInput.classList.add('is-invalid');
        cityInput.classList.remove('is-valid');
        isCityValid = false;
    } else {
        cityInput.classList.remove('is-invalid');
        cityInput.classList.add('is-valid');
    }

    // Cambio de fondo si es válido
    if (isCountryValid) {
        countryInput.classList.add('is-valid');
        countryInput.nextElementSibling.classList.add('is-valid');
    } else {
        countryInput.classList.remove('is-valid');
        countryInput.nextElementSibling.classList.remove('is-valid');
    }

    if (isCityValid) {
        cityInput.classList.add('is-valid');
        cityInput.nextElementSibling.classList.add('is-valid');
    } else {
        cityInput.classList.remove('is-valid');
        cityInput.nextElementSibling.classList.remove('is-valid');
    }
}
