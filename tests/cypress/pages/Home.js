class HomePage {
  runTests(){
    this.verifyOrdersLink()
  }

  verifyOrdersLink(){
    cy.get('[data-test="link-to-orders"]').click()
    cy.url().should('eq', `${Cypress.env('frontendUrl')}/orders`)
    cy.go('back')
  }
}

export default HomePage