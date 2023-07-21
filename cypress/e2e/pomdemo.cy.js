//import {LoginPage} from "./pages/login_page"
//import { LoginPage } from "./pages/login_pages"

 //const loginPage = new LoginPage()

it('POM Demo', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    
    cy.get('.oxd-button').click()

    //cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    //cy.get(':nth-child(1) > .oxd-userdropdown-link').click()
    //cy.get('.oxd-dialog-close-button').click()
    //cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    //cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
    //cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
    //cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
    //loginPage.enterUsername()
    //loginPage.enterPassword()
    //loginPage.clickLogin()

})