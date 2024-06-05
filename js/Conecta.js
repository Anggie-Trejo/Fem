const paisesLatinoAmerica = [
  {
    nombre: "Argentina",
    capital: "Buenos Aires",
    idiomasOficiales: "Español",
    moneda: "Peso Argentino",
    clima: "Variado (Subtropical en el Norte, Subpolar en el Sur)",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo C/I",
    atraccionesTuristicas: "Cataratas del Iguazú, Glaciar Perito Moreno, Buenos Aires, Bariloche",
    mediosDeTransporte: "Autobús, Tren, Metro, Taxi",
    vacunasRequeridas: "Fiebre amarilla (para ciertas zonas)",
    numerosDeEmergencia: ["101 (Policía)", "100 (Bomberos)", "107 (Ambulancia)", "0800-999-5000 (Atención al Turista)"]
  },
  {
    nombre: "Bolivia",
    capital: "Sucre (constitucional), La Paz (administrativa)",
    idiomasOficiales: "Español, Quechua, Aymara, Guaraní, y 33 otros idiomas indígenas",
    moneda: "Boliviano",
    clima: "Variado (Tropical en el Este, Frío en el Oeste)",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo A/C",
    atraccionesTuristicas: "Salar de Uyuni, Lago Titicaca, La Paz, Parque Nacional Madidi",
    mediosDeTransporte: "Autobús, Taxi",
    vacunasRequeridas: "Fiebre amarilla (para ciertas zonas)",
    numerosDeEmergencia: ["110 (Policía)", "119 (Bomberos)", "118 (Ambulancia)"]
  },
  {
    nombre: "Brasil",
    capital: "Brasilia",
    idiomasOficiales: "Portugués",
    moneda: "Real Brasileño",
    clima: "Variado (Tropical en el Norte, Templado en el Sur)",
    nivelSeguridadPublica: "Medio a Alto",
    tipoEnchufe: "Tipo N",
    atraccionesTuristicas: "Cristo Redentor, Cataratas del Iguazú, Selva Amazónica, Río de Janeiro",
    mediosDeTransporte: "Autobús, Metro, Taxi, Uber",
    vacunasRequeridas: "Fiebre amarilla (para ciertas zonas)",
    numerosDeEmergencia: ["190 (Policía)", "193 (Bomberos)", "192 (Ambulancia)", "0800-704-0067 (Atención al Turista)"]
  },
  {
    nombre: "Chile",
    capital: "Santiago",
    idiomasOficiales: "Español",
    moneda: "Peso Chileno",
    clima: "Variado (Desierto en el Norte, Mediterráneo en el Centro, Subpolar en el Sur)",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo C/L",
    atraccionesTuristicas: "Desierto de Atacama, Torres del Paine, Isla de Pascua, Valparaíso",
    mediosDeTransporte: "Autobús, Metro, Taxi, Uber",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["133 (Policía)", "132 (Bomberos)", "131 (Ambulancia)", "600-600-2200 (Atención al Turista)"]
  },
  {
    nombre: "Colombia",
    capital: "Bogotá",
    idiomasOficiales: "Español",
    moneda: "Peso Colombiano",
    clima: "Tropical y Variado según la altitud",
    nivelSeguridadPublica: "Medio a Bajo",
    tipoEnchufe: "Tipo A/B",
    atraccionesTuristicas: "Cartagena, Medellín, Parque Nacional Natural Tayrona, Bogotá",
    mediosDeTransporte: "Autobús, Metro, Taxi, Uber",
    vacunasRequeridas: "Fiebre amarilla (para ciertas zonas)",
    numerosDeEmergencia: ["123 (Policía y Ambulancia)", "119 (Bomberos)", "01-800-093-1473 (Atención al Turista)"]
  },
  {
    nombre: "Costa Rica",
    capital: "San José",
    idiomasOficiales: "Español",
    moneda: "Colón Costarricense",
    clima: "Tropical",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo A/B",
    atraccionesTuristicas: "Parque Nacional Manuel Antonio, Monteverde, Arenal, San José",
    mediosDeTransporte: "Autobús, Taxi, Uber",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["911 (Policía, Bomberos y Ambulancia)"]
  },
  {
    nombre: "Cuba",
    capital: "La Habana",
    idiomasOficiales: "Español",
    moneda: "Peso Cubano",
    clima: "Tropical",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo A/B/C",
    atraccionesTuristicas: "La Habana Vieja, Varadero, Trinidad, Viñales",
    mediosDeTransporte: "Autobús, Taxi",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["106 (Policía)", "105 (Bomberos)", "104 (Ambulancia)"]
  },
  {
    nombre: "Ecuador",
    capital: "Quito",
    idiomasOficiales: "Español, Quichua",
    moneda: "Dólar Estadounidense",
    clima: "Variado (Tropical en la costa y Amazonía, Templado en la Sierra)",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo A/B",
    atraccionesTuristicas: "Islas Galápagos, Quito, Cuenca, Baños",
    mediosDeTransporte: "Autobús, Taxi, Uber",
    vacunasRequeridas: "Fiebre amarilla (para ciertas zonas)",
    numerosDeEmergencia: ["911 (Policía, Bomberos y Ambulancia)", "1800-467-368 (Atención al Turista)"]
  },
  {
    nombre: "El Salvador",
    capital: "San Salvador",
    idiomasOficiales: "Español",
    moneda: "Dólar Estadounidense",
    clima: "Tropical",
    nivelSeguridadPublica: "Medio a Bajo",
    tipoEnchufe: "Tipo A/B",
    atraccionesTuristicas: "Ruta de las Flores, San Salvador, Suchitoto, El Boquerón",
    mediosDeTransporte: "Autobús, Taxi, Uber",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["911 (Policía y Ambulancia)", "913 (Bomberos)"]
  },
  {
    nombre: "Guatemala",
    capital: "Ciudad de Guatemala",
    idiomasOficiales: "Español",
    moneda: "Quetzal",
    clima: "Tropical y Templado según la altitud",
    nivelSeguridadPublica: "Medio a Bajo",
    tipoEnchufe: "Tipo A/B",
    atraccionesTuristicas: "Antigua, Tikal, Lago de Atitlán, Semuc Champey",
    mediosDeTransporte: "Autobús, Taxi",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["110 (Policía)", "123 (Bomberos)", "122 (Ambulancia)"]
  },
  {
    nombre: "Honduras",
    capital: "Tegucigalpa",
    idiomasOficiales: "Español",
    moneda: "Lempira Hondureño",
    clima: "Tropical en la costa, Templado en las tierras altas",
    nivelSeguridadPublica: "Bajo",
    tipoEnchufe: "Tipo A/B",
    atraccionesTuristicas: "Copán, Islas de la Bahía, La Ceiba, Tegucigalpa",
    mediosDeTransporte: "Autobús, Taxi",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["911 (Policía y Ambulancia)", "198 (Bomberos)", "195 (Ambulancia)"]
  },
  {
    nombre: "Jamaica",
    capital: "Kingston",
    idiomasOficiales: "Inglés",
    moneda: "Dólar Jamaicano",
    clima: "Tropical",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo A/B",
    atraccionesTuristicas: "Montego Bay, Negril, Ocho Ríos, Blue Mountains",
    mediosDeTransporte: "Autobús, Taxi, Minibús",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["119 (Policía)", "110 (Bomberos y Ambulancia)"]
  },
  {
    nombre: "México",
    capital: "Ciudad de México",
    idiomasOficiales: "Español",
    moneda: "Peso Mexicano",
    clima: "Variado (Desierto en el Norte, Tropical en el Sur)",
    nivelSeguridadPublica: "Medio a Bajo",
    tipoEnchufe: "Tipo A/B",
    atraccionesTuristicas: "Ciudad de México, Cancún, Chichén Itzá, Tulum",
    mediosDeTransporte: "Autobús, Metro, Taxi, Uber",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["911 (Policía, Bomberos y Ambulancia)", "068 (Bomberos)", "065 (Ambulancia)", "078 (Atención al Turista)"]
  },
  {
    nombre: "Nicaragua",
    capital: "Managua",
    idiomasOficiales: "Español",
    moneda: "Córdoba Nicaragüense",
    clima: "Tropical",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo A/B",
    atraccionesTuristicas: "Granada, Isla de Ometepe, León, San Juan del Sur",
    mediosDeTransporte: "Autobús, Taxi",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["118 (Policía)", "115 (Bomberos)", "128 (Ambulancia)"]
  },
  {
    nombre: "Panamá",
    capital: "Ciudad de Panamá",
    idiomasOficiales: "Español",
    moneda: "Balboa, Dólar Estadounidense",
    clima: "Tropical",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo A/B",
    atraccionesTuristicas: "Canal de Panamá, Casco Viejo, Bocas del Toro, San Blas",
    mediosDeTransporte: "Autobús, Metro, Taxi, Uber",
    vacunasRequeridas: "Fiebre amarilla (para ciertas zonas)",
    numerosDeEmergencia: ["104 (Policía)", "103 (Bomberos)", "911 (Ambulancia)"]
  },
  {
    nombre: "Paraguay",
    capital: "Asunción",
    idiomasOficiales: "Español, Guaraní",
    moneda: "Guaraní Paraguayo",
    clima: "Subtropical a templado",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo C",
    atraccionesTuristicas: "Asunción, Encarnación, Itaipú, Parque Nacional Ybycuí",
    mediosDeTransporte: "Autobús, Taxi",
    vacunasRequeridas: "Fiebre amarilla (para ciertas zonas)",
    numerosDeEmergencia: ["911 (Policía)", "131 (Bomberos)", "141 (Ambulancia)"]
  },
  {
    nombre: "Perú",
    capital: "Lima",
    idiomasOficiales: "Español, Quechua, Aymara",
    moneda: "Sol",
    clima: "Variado (Desértico en la costa, Tropical en la selva)",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo A/C",
    atraccionesTuristicas: "Machu Picchu, Lima, Cusco, Lago Titicaca",
    mediosDeTransporte: "Autobús, Metro, Taxi, Uber",
    vacunasRequeridas: "Fiebre amarilla (para ciertas zonas)",
    numerosDeEmergencia: ["105 (Policía)", "116 (Bomberos)", "106 (Ambulancia)", "01-574-8000 (Atención al Turista)"]
  },
  {
    nombre: "Puerto Rico",
    capital: "San Juan",
    idiomasOficiales: "Español, Inglés",
    moneda: "Dólar Estadounidense",
    clima: "Tropical",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo A/B",
    atraccionesTuristicas: "Viejo San Juan, El Yunque, Culebra, Ponce",
    mediosDeTransporte: "Autobús, Taxi, Uber",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["911 (Policía, Bomberos y Ambulancia)"]
  },
  {
    nombre: "República Dominicana",
    capital: "Santo Domingo",
    idiomasOficiales: "Español",
    moneda: "Peso Dominicano",
    clima: "Tropical",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo A/B",
    atraccionesTuristicas: "Punta Cana, Santo Domingo, Puerto Plata, Bayahibe",
    mediosDeTransporte: "Autobús, Taxi, Uber",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["911 (Policía, Bomberos y Ambulancia)"]
  },
  {
    nombre: "Uruguay",
    capital: "Montevideo",
    idiomasOficiales: "Español",
    moneda: "Peso Uruguayo",
    clima: "Templado",
    nivelSeguridadPublica: "Medio",
    tipoEnchufe: "Tipo C/F",
    atraccionesTuristicas: "Punta del Este, Montevideo, Colonia del Sacramento, Piriápolis",
    mediosDeTransporte: "Autobús, Taxi, Uber",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["911 (Policía)", "104 (Bomberos)", "105 (Ambulancia)"]
  },
  {
    nombre: "Venezuela",
    capital: "Caracas",
    idiomasOficiales: "Español",
    moneda: "Bolívar Soberano",
    clima: "Tropical",
    nivelSeguridadPublica: "Bajo",
    tipoEnchufe: "Tipo A/B/C",
    atraccionesTuristicas: "Salto Ángel, Los Roques, Mérida, Caracas",
    mediosDeTransporte: "Autobús, Taxi",
    vacunasRequeridas: "Ninguna",
    numerosDeEmergencia: ["911 (Policía y Ambulancia)", "171 (Bomberos)"]
  }
];



function showCountryDetails(countryName) {
  const country = paisesLatinoAmerica.find(pais => pais.nombre === countryName);

  if (country) {
      document.getElementById('country-name').textContent = country.nombre;
      document.getElementById('country-capital').textContent = country.capital;
      document.getElementById('country-languages').textContent = country.idiomasOficiales;
      document.getElementById('country-currency').textContent = country.moneda;
      document.getElementById('country-climate').textContent = country.clima;
      document.getElementById('country-security').textContent = country.nivelSeguridadPublica;
      document.getElementById('country-plug').textContent = country.tipoEnchufe;
      document.getElementById('country-attractions').textContent = country.atraccionesTuristicas;
      document.getElementById('transportes').textContent = country.mediosDeTransporte;
      document.getElementById('vacunas').textContent = country.vacunasRequeridas;
      document.getElementById('country-details').style.display = 'block';

      // Display emergency numbers as a list
      var numEmergenciaElement = document.getElementById('numEmergencia');
      var emergencyNumbers = country.numerosDeEmergencia;

      // Clear any existing content
      numEmergenciaElement.innerHTML = "";

      // Add each emergency number as a list item
      emergencyNumbers.forEach(function(number) {
          var li = document.createElement('li');
          li.textContent = number;
          numEmergenciaElement.appendChild(li);
      });
  }
}



/*Para el Tabs*/
document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab-header li");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const selector = document.querySelector(".selector");

  function updateSelectorPosition(activeTab) {
      const activeRect = activeTab.getBoundingClientRect();
      const parentRect = activeTab.parentElement.getBoundingClientRect();
      selector.style.width = activeRect.width + "px";
      selector.style.left = (activeRect.left - parentRect.left) + "px";
  }

  tabs.forEach(tab => {
      tab.addEventListener("click", function() {
          tabs.forEach(item => item.classList.remove("active"));
          tab.classList.add("active");

          const tabId = tab.getAttribute("data-tab");
          tabPanes.forEach(pane => {
              pane.classList.remove("active");
              if (pane.id === tabId) {
                  pane.classList.add("active");
              }
          });

          updateSelectorPosition(tab);
      });
  });

  // Initialize the selector position
  updateSelectorPosition(document.querySelector(".tab-header li.active"));
});