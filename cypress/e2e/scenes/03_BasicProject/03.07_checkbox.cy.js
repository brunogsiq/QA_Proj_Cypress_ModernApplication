/// <reference types="cypress" /> 

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento"

describe('Cypress Basic', () =>
{
    //Hook criado
    beforeEach(() =>
    {
        let pO = elemTelaCampoDeTrein()
        cy.visit(pO.baseUrl)
        cy.viewport(1440, 900)
        cy.waitUntil(() => cy.xpath(pO.xTitle))
    })

    it('Checkbox test', () =>
    {
        let pO = elemTelaCampoDeTrein()
        cy.get(pO.ipBtnCarne)
            .click()
            .should('be.checked')
        cy.get(pO.ipBtnFrg)
            .click()
            .should('be.checked')
        cy.get(pO.ipBtnPz)
            .click()
            .should('be.checked')
        cy.get(pO.ipBtnVgt)
            .click()
            .should('be.checked')
        cy.get('[name=formComidaFavorita]')
            .click({ multiple: true })
            .should('have.length', 4)
        //Passo 2
        cy.get(pO.ipBtnCarne).click()
            .should('be.checked')
        cy.get(pO.ipBtnFrg)
            .should('not.be.checked')
        cy.get(pO.ipBtnPz)
            .should('not.be.checked')
        cy.get(pO.ipBtnVgt)
            .should('not.be.checked')
        cy.get('[name=formComidaFavorita]')
            .click({ multiple: true })
            .should('have.length', 4)
        //Passo 3
        cy.get(pO.ipBtnCarne)
            .should('not.be.checked')
        cy.get(pO.ipBtnFrg).click()
            .should('not.be.checked')
        cy.get(pO.ipBtnPz)
            .should('be.checked')
        cy.get(pO.ipBtnVgt)
            .should('be.checked')
        cy.get('[name=formComidaFavorita]')
            .click({ multiple: true })
            .should('have.length', 4)
        //Passo 4
        cy.get(pO.ipBtnCarne)
            .should('be.checked')
        cy.get(pO.ipBtnFrg)
            .should('be.checked')
        cy.get(pO.ipBtnPz).click()
            .should('be.checked')
        cy.get(pO.ipBtnVgt)
            .should('not.be.checked')
        cy.get('[name=formComidaFavorita]')
            .click({ multiple: true })
            .should('have.length', 4)
        //Passo 5
        cy.get(pO.ipBtnCarne)
            .should('not.be.checked')
        cy.get(pO.ipBtnFrg)
            .should('not.be.checked')
        cy.get(pO.ipBtnPz)
            .should('not.be.checked')
        cy.get(pO.ipBtnVgt).click()
            .should('not.be.checked')
        cy.get('[name=formComidaFavorita]')
            .click({ multiple: true })
            .should('have.length', 4)
    })
})