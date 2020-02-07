describe("Test Honeywell Newsroom page", function() {
  it("Visits the Honeywell Newsroom", function() {
    cy.viewport("macbook-15");
    cy.visit("https://honeywell.com/en-us/news");
    cy.get(".eyebrow.uppercase")
      .contains("Aerospace")
      .click();

    cy.url().should("include", "tag=Aerospace");
    cy.get(".cg-header-breadcrumb")
      .contains("News")
      .click();

    cy.get(".featured-heading")
      .contains("How Humans will Get Back to the Moon")
      .click();
    // Should be on a new URL which includes '/en-us/newsroom/news'
    cy.url().should("include", "/en-us/newsroom/news");

    cy.get(".tag-cta.header6")
      .contains("Aerospace")
      .click();
    cy.url().should("include", "/en-us/news?tag=Aerospace");
  });
  it("Test Newsroom pages in iphone 6", function() {
    cy.viewport("iphone-6"); // Set viewport to 375px x 667px
    cy.visit("https://honeywell.com/en-us/news");
    cy.get(".eyebrow.uppercase")
      .contains("Aerospace")
      .click();

    cy.url().should("include", "tag=Aerospace");
    cy.get(".cg-header-breadcrumb")
      .contains("News")
      .click();

    cy.get(".featured-heading")
      .contains("How Humans will Get Back to the Moon")
      .click();
    // Should be on a new URL which includes '/en-us/newsroom/news'
    cy.url().should("include", "/en-us/newsroom/news");

    cy.get(".tag-cta.header6")
      .contains("Aerospace")
      .click();
    cy.url().should("include", "/en-us/news?tag=Aerospace");
  });
});
