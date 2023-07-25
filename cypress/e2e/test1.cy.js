/// <referance types ="cypress"/>
it('Google Search', () => {
    cy.visit('https://google.com')
    cy.get('#APjFqb').type('automation step by step{enter}')
    //cy.get('.FPdoLc > center > .gNO89b').click()
    //cy.get('.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > a > .LC20lb').click()
    //cy.contains('Automation Step by step:NEVER STOP LEARNING').click()
    //cy.get('#xXe_ZKrDAZL04-EPkOi-0Ag__9 > .zItAnd > .O3S9Rb').click()
    cy.contains('Images').click()
})