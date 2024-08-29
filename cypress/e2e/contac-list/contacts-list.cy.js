/// <reference types="cypress" />;

describe("Manipulando a lista de contatos", () => {
  
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });
       it("Inclua um contato na lista", () => {
         cy.get('input').clear()
         cy.get('input[type="text"]').as('nome').type('Emmanuel');
         cy.get('input[type="email"]').as('email').type('emmanuel@gmail.com')
         cy.get('input[type="tel"]').as('tel').type('(11)-99999-9999');
         cy.get('.adicionar').click()
        cy.screenshot('inputs preenchidos')
        
          })
   it("Altere o contato 'Emmanuel' ", () => {
        cy.get('.sc-dmqHEX').contains('Emmanuel').parent().siblings().parent().nextAll().children(".sc-gueYoa > .edit").click()
           cy.get('input[type="text"]').as("nome").clear().type('Everton');
           cy.get('input[type="email"]').as('email').clear().type('everton@gmail.com')
           cy.get('input[type="tel"]').as('tel').clear().type('(11)-88888-8888');
           cy.get('.alterar').click()
           cy.screenshot('inputs alterados')
   
   })
   it('Remova o contato da lista', () => {
    cy.get('.sc-dmqHEX').contains('Everton').parent().siblings().parent().nextAll().children(".sc-gueYoa > .delete").click()
    cy.screenshot()
     })
 })