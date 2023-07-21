/// <referance types ="cypress"/>
it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('automation step by step{enter}')
    //cy.get('.FPdoLc > center > .gNO89b').click()
})