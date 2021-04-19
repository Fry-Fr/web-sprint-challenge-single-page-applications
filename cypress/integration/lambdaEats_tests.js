describe('Lambda Eats Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })
    it('sanity check',() => {
        expect(1+3).to.equal(2+2)
    })
    const nameInput = () => cy.get('input[name="name"]')
    const sizeInput = () => cy.get('select')
    const specialInput = () => cy.get('input[name="specialInstructions"]')
    const toppings = () => cy.get('input[type="checkbox"]')
    const submit = () => cy.get('#submit')
    it('can text in box.', () => {
        nameInput()
        .should('have.value', '')
        .type('Bilbo')
        .should('have.value', 'Bilbo')
        specialInput()
        .should('have.value','')
        .type('typing test')
        .should('have.value','typing test')
    })
    it('can check toppings', () => {
        toppings()
        .click({multiple: true})
        
    })
    it('can submit', () => {
        submit()
        .should('be.disabled')
        nameInput().type('Bilbo')
        sizeInput()
        .select('slice')
        .select('personal')
        .select('large')
        .select('xlarge')
        toppings()
        .click({multiple: true})
        submit()
        .should('not.be.disabled')


    })
})