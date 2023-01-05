export function getTableHTML(data, filters) {
  // Création de la chaîne HTML initiale
  let html = `<table class="styled-table"><tr><th>Nom</th><th>Prénoms</th><th>Âge</th><th>Couleur des yeux</th><th>Email</th><th>Entreprise</th><th>Phone</th></tr>`;

  // Filtrage des données en fonction des filtres
  if (filters) {
    if (filters.eyeColor) {
      data = data.filter((item) => item.eyeColor === filters.eyeColor);
    }
    if (filters.age) {
      const ageRange = filters.age.split("-");
      const minAge = parseInt(ageRange[0], 10);
      const maxAge = parseInt(ageRange[1], 10);
      data = data.filter((item) => item.age >= minAge && item.age <= maxAge);
    }
  }

  // Ajout des lignes du tableau pour chaque élément de données
  for (const item of data) {
    html += `<tr><td>${item.name.last}</td><td>${item.name.first}</td><td>${item.age}</td><td>${item.eyeColor}</td><td>${item.email}</td><td>${item.company}</td><td>${item.phone}</td></tr>`;
  }
  html += "</table>";
  return html;
}
