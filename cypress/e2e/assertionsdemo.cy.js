

it('assertion demo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()
    cy.get('#query-btn')
    .should('contain','Button')
    .should('have.class',('query-btn'))
    .should('be.visible')
    //.should('be.enabled ')

expect(true).to.be.true

assert.equal(18,18)

})