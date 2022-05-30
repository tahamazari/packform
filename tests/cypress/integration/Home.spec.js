import HomePage from "../pages/Home"

describe('Tests for Home Page', () => {
  beforeEach(() => {
    cy.visit("/")
  });

  it('Orders', () => {
    const homePageTestCases = new HomePage()
    homePageTestCases.runTests()
  })
})