/// <reference types="cypress" />

describe('Validar formulario', () => {
    it('Submit de datos al formulario y mostrar alerta de error', () => {
        cy.visit('/index.html')

        cy.get('[data-cy="formulario"]')
            .submit();

        // Seleccionar alerta
        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Todos los campos son Obligatorios')

        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-danger');

    })
})