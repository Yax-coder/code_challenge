Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("The Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("shows the navbar", () => {
    cy.get("[data-cy=app-name]");
  });
  it("shows the list of movies", () => {
    cy.get("[data-cy=movies-list]").children().should("have.length", 3);
  });
  it("selects a movie", () => {
    cy.get("[data-cy=movies-list]").first().click();
  });
});
describe("The Details Page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.visit("/1013860");
  });

  it("add a movie to the wish list", () => {
    cy.get("[data-cy=movies-list]").first().click();
    cy.get("[data-cy=movie-item-list]").should("be.visible");
    cy.get("[data-cy=movie-item-list]").children().should("have.length", 1);
    cy.get("[data-cy=movie-item-list]").children().click();
  });
  it("remove a movie from the wish list", () => {
    cy.get("[data-cy=movies-list]").first().click();
    cy.get("[data-cy=movie-item-list]").should("be.visible");
    cy.get("[data-cy=movie-item-list]").children().should("have.length", 1);
    cy.get("[data-cy=movie-item-list]").children().click().click();
  });
  it("goes back to the home page", () => {
    cy.get("[data-cy=movies-list]").first().click();
    cy.get("[data-cy=back-home]").should("be.visible");
    cy.get("[data-cy=back-home]").children().first().click();
  });
});
