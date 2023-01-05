import { getTableHTML } from "./table";

fetch("/datas.json")
  .then((response) => response.json())
  .then((data) => {
    // Récupération des paramètres de l'URL
    const params = new URLSearchParams(location.search);
    let filters = {};

    // Filtrage des données en fonction des paramètres
    if (params.has("eyeColor")) filters.eyeColor = params.get("eyeColor");
    if (params.has("age")) filters.age = params.get("age");

    // Génération du code HTML du tableau
    const tableHTML = getTableHTML(data, filters);

    // Ajout du tableau à la page
    document.querySelector("#table-container").innerHTML = tableHTML;
  });
