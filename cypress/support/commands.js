Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit"    
    
    cy.get('#firstName').type('Igor')
    cy.get('#lastName').type('Mota Queiroz')
    cy.get('#email').type('igor@mail.com.br')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.contains('button', 'Enviar').click()
})