class OrdersPage {
  runTests(){
    this.verifySearchPart()
    this.verifySearchDate()
    this.verifyHomeLink()
  }

  getSeededOrders(){
    cy.intercept('/orders').as('getOrders')
    cy.wait('@getOrders')
    .its('response.body').should('have.length', 10)
  }

  verifySearchPart(){
    cy.get('[data-test="input-search-order-part"]').type('face')
    cy.contains('Facebook').should('exist')
    cy.reload()
  }

  verifySearchDate(){
    cy.get('[data-test="input-search-order-date"]').type('2022-01-15')
    cy.contains('Twitter').should('exist')
    cy.reload()
  }

  verifyHomeLink(){
    cy.get('[data-test="link-to-home"]').click()
    cy.url().should('eq', `${Cypress.env('frontendUrl')}/`)
    cy.go('back')
  }
}

export default OrdersPage