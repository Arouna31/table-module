import { expect } from "chai";
import { getTableHTML } from "../src/table.js";

describe("getTableHTML", () => {
  const data = [
    {
      name: "John",
      firstName: "Doe",
      age: 30,
      eyeColor: "blue",
      email: "john.doe@example.com",
      company: "DELPHIDE",
      phone: "+1 (846) 597-3879",
    },
    {
      name: "Jane",
      firstName: "Doe",
      age: 25,
      eyeColor: "brown",
      email: "jane.doe@example.com",
      company: "APPLE",
      phone: "+1 (846) 597-3879",
    },
    {
      name: "Miriam",
      firstName: "Kinda",
      age: 25,
      eyeColor: "brown",
      email: "miriam.kinda@example.com",
      company: "GOOGLE",
      phone: "+1 (846) 327-3879",
    },
  ];

  // Test d'affichage correcte du tableau
  it("should generate the correct HTML table with the given data", () => {
    const expectedHTML = `<table class="styled-table"><tr><th>Nom</th><th>Prénoms</th><th>Âge</th><th>Couleur des yeux</th><th>Email</th><th>Entreprise</th><th>Phone</th></tr><tr><td>undefined</td><td>undefined</td><td>30</td><td>blue</td><td>john.doe@example.com</td><td>DELPHIDE</td><td>+1 (846) 597-3879</td></tr><tr><td>undefined</td><td>undefined</td><td>25</td><td>brown</td><td>jane.doe@example.com</td><td>APPLE</td><td>+1 (846) 597-3879</td></tr><tr><td>undefined</td><td>undefined</td><td>25</td><td>brown</td><td>miriam.kinda@example.com</td><td>GOOGLE</td><td>+1 (846) 327-3879</td></tr></table>`;
    const html = getTableHTML(data);
    expect(html).to.equal(expectedHTML);
  });

  // Test vérification du filtre sur les couleurs des yeux
  it("should filter table base on brown eye color", () => {
    const expectedHTML = `<table class="styled-table"><tr><th>Nom</th><th>Prénoms</th><th>Âge</th><th>Couleur des yeux</th><th>Email</th><th>Entreprise</th><th>Phone</th></tr><tr><td>undefined</td><td>undefined</td><td>25</td><td>brown</td><td>jane.doe@example.com</td><td>APPLE</td><td>+1 (846) 597-3879</td></tr><tr><td>undefined</td><td>undefined</td><td>25</td><td>brown</td><td>miriam.kinda@example.com</td><td>GOOGLE</td><td>+1 (846) 327-3879</td></tr></table>`;
    const html = getTableHTML(data, { eyeColor: "brown" });
    expect(html).to.equal(expectedHTML);
  });

  // Test vérification du filtre sur les tranches d'âges
  it("should filter table base on age range 25-30", () => {
    const expectedHTML = `<table class="styled-table"><tr><th>Nom</th><th>Prénoms</th><th>Âge</th><th>Couleur des yeux</th><th>Email</th><th>Entreprise</th><th>Phone</th></tr><tr><td>undefined</td><td>undefined</td><td>30</td><td>blue</td><td>john.doe@example.com</td><td>DELPHIDE</td><td>+1 (846) 597-3879</td></tr><tr><td>undefined</td><td>undefined</td><td>25</td><td>brown</td><td>jane.doe@example.com</td><td>APPLE</td><td>+1 (846) 597-3879</td></tr><tr><td>undefined</td><td>undefined</td><td>25</td><td>brown</td><td>miriam.kinda@example.com</td><td>GOOGLE</td><td>+1 (846) 327-3879</td></tr></table>`;
    const html = getTableHTML(data, { age: "25-30" });
    expect(html).to.equal(expectedHTML);
  });
});
