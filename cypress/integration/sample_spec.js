describe('Log In Page Regression Suite', ()=>{
    it('Visits my app', ()=>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.contains("Login Page")
        cy.contains("Username")
        cy.contains("Password")
    })

    it("Tests log in with valid login credentials", ()=>{
        cy.get('input[name="username"]').type('tomsmith')
        cy.get('input[type="password"]').type('SuperSecretPassword!')
        cy.get('button[type="submit"').click()
        cy.url().should('include', '/secure')
        cy.get('a[href*="/logout"]').click()
    })

    it("Tests log in with invalid login credentials", ()=>{
        cy.get('input[name="username"]').type('testsmith')
        cy.get('input[type="password"]').type('testpassword')
        cy.get('button[type="submit"').click()
        cy.contains('Your username is invalid!').should('be.visible')
        cy.get('a[class="close"]').click({force: true})
    })

    it("Tests log in with no credentials", ()=>{
        cy.get('button[type="submit"').click()
        cy.contains('Your username is invalid!').should('be.visible')
        cy.get('a[class="close"]').click({force: true})
    })

    it("Tests log in with only username credentials", ()=>{
        cy.get('input[name="username"]').type('testsmith')
        cy.get('button[type="submit"').click()
        cy.contains('Your username is invalid!').should('be.visible')
        cy.get('a[class="close"]').click({force: true})
    })

    it("Tests log in with only password credentials", ()=>{
        cy.get('input[type="password"]').type('testpassword')
        cy.get('button[type="submit"').click()
        cy.contains('Your username is invalid!').should('be.visible')
        cy.get('a[class="close"]').click({force: true})
    })
})