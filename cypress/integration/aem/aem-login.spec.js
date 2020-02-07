describe("AEM Author Test", () => {
	beforeEach(() => {
    cy.visit("/")
    cy.get("#username").type("admin").should("have.value", "admin")
	cy.get("#password").type("admin").should("have.value", "admin")
	cy.get("form#login").submit()
  })
  
  it("Fill Login Form AEM", () => {       
	cy.visit("/editor.html/content/we-retail/us/en/title.html")
    cy.get('.js-editor-SidePanel-toggle', { timeout: 20000 }).should('be.visible').click()
	cy.get('.coral3-Panel.is-selected').should('be.visible').click();
  })
  
});