describe('Log In Page Regression Suite', ()=>{

    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.contains("Login Page")
        cy.contains("Username")
        cy.contains("Password")
        cy.get('input[name="username"]').as('username')
        cy.get('input[type="password"]').as('password')
        cy.get('button[type="submit"').as('submitButton')
    })

    it("Tests log in with valid login credentials", ()=>{
        cy.get('@username').type('tomsmith')
        cy.get('@password').type('SuperSecretPassword!')
        cy.get('@submitButton').click()
        cy.url().should('include', '/secure')
        cy.get('a[href*="/logout"]').click()
    })

    it("Tests log in with invalid login credentials", ()=>{
        cy.get('@username').type('testsmith')
        cy.get('@password').type('testpassword')
        cy.get('@submitButton').click()
        cy.contains('Your username is invalid!').should('be.visible')
    })

    it("Tests log in with no credentials", ()=>{
        cy.get('@submitButton').click()
        cy.contains('Your username is invalid!').should('be.visible')
    })

    it("Tests log in with only invalid username credentials", ()=>{
        cy.get('@username').type('testsmith')
        cy.get('@submitButton').click()
        cy.contains('Your username is invalid!').should('be.visible')
    })

    it("Tests log in with only valid username credentials", ()=>{
        cy.get('@username').type('tomsmith')
        cy.get('@submitButton').click()
        cy.contains('Your password is invalid!').should('be.visible')
    })

    it("Tests log in with only password credentials", ()=>{
        cy.get('@password').type('testpassword')
        cy.get('@submitButton').click()
        cy.contains('Your username is invalid!').should('be.visible')
    })
})