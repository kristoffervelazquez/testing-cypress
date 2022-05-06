describe('Crear una cita', () => {
    it('Crear unan cita', () => {
        cy.visit('/index.html');

        cy.get('[data-cy="mascota-input"]')
            .type('Shimuelo');

        cy.get('[data-cy="propietario-input"]')
            .type('Kristoffer');

        cy.get('[data-cy="tel-input"]')
            .type('6623536317');

        cy.get('[data-cy="fecha-input"]')
            .type('2022-12-03');

        cy.get('[data-cy="hora-input"]')
            .type('10:30')

        cy.get('[data-cy="sintomas-input"]')
            .type('Come mucho')

        cy.get('[data-cy="submit-cita"]')
            .click();

        cy.get('[data-cy="alerta"]')
            .should('have.class', 'alert-success')

        cy.get('[data-cy="citas-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');
        
    })
})