describe('My First Test', ()=>{
    it('Checks if cypress is up and running', ()=>{
        expect(true).to.equal(true)
    })
})

describe('Visit Link', () => {
    it('Visits my app', () =>{
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.contains("Login Page")
    })
})

describe('Check for username and password inputs', ()=>{
    it('Checks for the  words username and password', ()=>{
        cy.contains('Username')
        cy.contains('Password')
    })
})

describe('Checks valid login', ()=>{
    it("types 'tomsmith' for the username and 'SuperSecretPassword!' for the password", ()=>{
        cy.get('input:first').type('tomsmith')
        cy.get('input:last').type('SuperSecretPassword!')
        cy.get('form').submit()
        cy.url().should('include', '/secure')
        cy.get('a[href*="/logout"]').click()
    })
})