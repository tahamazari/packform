import OrdersPage from "../pages/Orders"

describe('Tests for Orders Page', () => {
  beforeEach(() => {
    cy.visit("/orders")
    const checkSeed = new OrdersPage
    checkSeed.getSeededOrders()
  });

  it('Orders', () => {
    const ordersPageTestCases = new OrdersPage()
    ordersPageTestCases.runTests()
  })
})