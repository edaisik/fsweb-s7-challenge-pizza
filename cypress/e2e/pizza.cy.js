describe("Form Kontrolü", () => {

    beforeEach(() => {
        cy.visit("http://localhost:3000/order-pizza");
    });

    it("inputa bir metin giren test", () => {
        const expectedNote = "Siparişi kapıya bırakın lütfen, zili çalmayın";
        const noteInput = cy.get("[data-cy=note-input]");
        noteInput.type("Siparişi kapıya bırakın lütfen, zili çalmayın");
        noteInput.should("have.value", expectedNote);
    });

    it('birden fazla malzeme seçilebilen bir test', () => {
        const checked = cy.get("[data-cy=malzemeler]").check(['Pepperoni', 'Domates', "Biber", "Sosis", "Sucuk"], { force: true });
        checked.should('have.length', 5);
        checked.uncheck('Sucuk', { force: true });
        checked.should('have.length', 1);
    });

    it('Hamur ve boyut seçilmeden form gönderilemez', () => {
        cy.get("[data-cy=malzemeler]").check(['Pepperoni', 'Domates'], { force: true });
        cy.get("[data-cy=note-input]").type('Ekstra sos istiyorum');
        cy.get("[data-cy=adet]").clear().type('2');
        cy.get("[data-cy=submit-button]").should("be.disabled");
    });

    it('Hamur seçilmeden form gönderilemez', () => {
        cy.get("[data-cy=orta]").check('M', { force: true });
        cy.get("[data-cy=malzemeler]").check(['Pepperoni', 'Domates'], { force: true });
        cy.get("[data-cy=note-input]").type('Ekstra sos istiyorum');
        cy.get("[data-cy=adet]").clear().type('2');
        cy.get("[data-cy=submit-button]").should("be.disabled")
    });

    it('Boyut seçilmeden form gönderilemez', () => {
        cy.get('[data-cy=hamur]').find('option').contains('İnce Kenar').then(option => {
            cy.get('[data-cy=hamur]').select(option.val());
        });
        cy.get("[data-cy=malzemeler]").check(['Pepperoni', 'Domates'], { force: true });
        cy.get("[data-cy=note-input]").type('Ekstra sos istiyorum');
        cy.get("[data-cy=adet]").clear().type('2');
        cy.get("[data-cy=submit-button]").should("be.disabled")
    });

    it('Form gönderilebilir', () => {
        cy.get("[data-cy=orta]").check('M', { force: true });
        cy.get('[data-cy=hamur]').find('option').contains('İnce Kenar').then(option => {
            cy.get('[data-cy=hamur]').select(option.val());
        });
        cy.get("[data-cy=malzemeler]").check(['Pepperoni', 'Domates'], { force: true });
        cy.get("[data-cy=note-input]").type('Ekstra sos istiyorum');
        cy.get("[data-cy=adet]").clear().type('2');
        cy.get("[data-cy=submit-button]").should("not.be.disabled").click();
        cy.url().should('include', "http://localhost:3000/order-pizza");
    });
});