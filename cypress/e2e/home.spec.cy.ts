describe("home page", () => {
  beforeEach(() => {
    cy.viewport(1200, 800);
    cy.visit("http://localhost:3000");
  });

  it("on desktop, it goes to contact page", () => {
    cy.get(".contact").click();

    cy.url().should("include", "/contato");
    cy.contains("Nome completo");
  });

  it("shows card text on click", () => {
    cy.contains("Valores");
    cy.get('div[id="values"]').click();

    cy.contains(
      "Ética – Comprometimento pela transparência e honestidade nas relações com nossos clientes, parceiros e comunidade."
    );

    cy.get('div[id="values"]').click();

    cy.contains(
      "Ética – Comprometimento pela transparência e honestidade nas relações com nossos clientes, parceiros e comunidade."
    ).should("not.exist");
  });

  it("wenked", () => {
    cy.get('a[id="1"]').should(
      "have.attr",
      "href",
      "https://www.instagram.com/taishilsf.engenharia/"
    );

    cy.get('a[id="1"]').should(($a) => {
      console.log($a.first());
      expect($a.first()).attr(
        "href",
        "https://www.instagram.com/taishilsf.engenharia/"
      );
    });

    cy.get('a[id="1"]').should(
      "attr",
      "href",
      "https://www.instagram.com/taishilsf.engenharia/"
    );
  });

  it("language", () => {
    cy.get('button[id="lang"]').click();
    cy.get('div[id="eng"]').click();
    cy.contains("About Us");
  });
});
