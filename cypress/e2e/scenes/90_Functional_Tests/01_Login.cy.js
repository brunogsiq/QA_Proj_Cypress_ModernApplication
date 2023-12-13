/// <reference types="cypress"/>

import { elemTelaCampoDeTrein } from "../../libraries/pageObjects/campoDeTreinamento";
import { faker } from '@faker-js/faker'

context("Real Application", () =>
{
    beforeEach(() =>
    {
        let pO = elemTelaCampoDeTrein()
        cy.visit(pO.baseUrl_3)
    });

    describe('01 - Web - BarrigaReacT', () =>
    {
        it('01.01 - Tela de Login - Validar Acesso', () =>
        {
            cy.get(".btn")
                .should("be.exist")
                .and("be.visible")
                .and("have.text", "Entrar")
        });

        it('01.02 - Tela de Cadastro - Validar Acesso', () =>
        {
            cy.get(".navbar-nav > li > a").eq(1)
                .click()
            cy.get(".btn")
                .should("be.exist")
                .and("be.visible")
                .and("have.text", "Registrar")
        })

        it('01.03 - Tela de Login - Validar Critérios de Aceite', () =>
        {
            //Menu Superior
            cy.get(".navbar-brand")
                .should("be.exist")
                .and("have.css", "color", "rgb(33, 37, 41)")
            cy.get(".navbar-brand > img")
                .and("be.visible")
            cy.get(".navbar-brand > img")
                .should("have.prop", "alt", "logo")

            cy.get(".navbar-nav")
                .should("be.exist")
                .and("be.visible")

            cy.get(".navbar-nav > li > a").eq(0)
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "color", "rgb(255, 255, 255)")
                .and("have.text", "Login")

            cy.get(".navbar-nav > li > a").eq(1)
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "color", "rgba(255, 255, 255, 0.5)")
                .and("have.text", "Registrar")

            //Corpo
            cy.get(".jumbotron")
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "color", "rgb(33, 37, 41)")

            cy.get(".input-group > div")
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "background-color", "rgb(233, 236, 239)")
                .and("have.text", "@")

            cy.get(".input-group > input")
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "background-color", "rgb(255, 255, 255)")
                .and("have.attr", "placeholder", "seu@email.com")

            cy.get(".form-group > input")
                .should("be.exist")
                .and("be.visible")
                .and("have.attr", "placeholder", "Senha")
                .and("have.css", "background-color", "rgb(255, 255, 255)")

            cy.get(".btn")
                .should("be.exist")
                .and("be.visible")
                .and("have.attr", "type", "submit")
                .and("have.css", "background-color", "rgb(0, 123, 255)")
                .and("have.text", "Entrar")

            //Rodapé
            cy.get(".footer.text-center > p > small")
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "color", "rgb(119, 119, 119)")
                .and("have.text", "Seu Barriga - Nunca mais esqueça de pagar o aluguel.")
        });

        it('01.04 - Tela de Cadastro - Validar Critérios de Aceite', () =>
        {
            cy.get(".navbar-nav > li > a").eq(1)
                .click()
            ///Menu Superior
            cy.get(".navbar-brand")
                .should("be.exist")
                .and("have.css", "color", "rgb(33, 37, 41)")
            cy.get(".navbar-brand > img")
                .and("be.visible")
            cy.get(".navbar-brand > img")
                .should("have.prop", "alt", "logo")

            cy.get(".navbar-nav")
                .should("be.exist")
                .and("be.visible")

            cy.get(".navbar-nav > li > a").eq(0)
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "color", "rgba(255, 255, 255, 0.5)")
                .and("have.text", "Login")

            cy.get(".navbar-nav > li > a").eq(1)
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "color", "rgb(255, 255, 255)")
                .and("have.text", "Registrar")

            //Corpo
            cy.get(".jumbotron")
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "color", "rgb(33, 37, 41)")

            cy.get(".form-group > input").eq(0)
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "background-color", "rgb(255, 255, 255)")
                .and("have.attr", "placeholder", "Nome")

            cy.get(".input-group > div")
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "background-color", "rgb(233, 236, 239)")
                .and("have.text", "@")

            cy.get(".input-group > input")
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "background-color", "rgb(255, 255, 255)")
                .and("have.attr", "placeholder", "Email")

            cy.get(".form-group > input").eq(1)
                .should("be.exist")
                .and("be.visible")
                .and("have.attr", "placeholder", "Senha")
                .and("have.css", "background-color", "rgb(255, 255, 255)")

            cy.get(".btn")
                .should("be.exist")
                .and("be.visible")
                .and("have.attr", "type", "submit")
                .and("have.css", "background-color", "rgb(0, 123, 255)")
                .and("have.text", "Registrar")

            //Rodapé
            cy.get(".footer.text-center > p > small")
                .should("be.exist")
                .and("be.visible")
                .and("have.css", "color", "rgb(119, 119, 119)")
                .and("have.text", "Seu Barriga - Nunca mais esqueça de pagar o aluguel.")
        });

        it('01.05 - Tela de Cadastro - Validar Novo Cadastro', () =>
        {
            //Etapa de tentativa de login com conta inexistente
            cy.get(".toast")
                .should("not.be.exist")
            cy.get('.toast-close-button')
                .should("not.be.exist")
            cy.get('.toast-message')
                .should("not.be.exist")

            //Login inexistente-Inválido, Então iremos registrar
            cy.get(".input-group > input")
                .type("Bruno Siqueira")
            cy.get(".form-group > input")
                .type("VaiCorinthians")
            cy.get(".btn")
                .click()

            cy.get("#toast-container")
                .should("be.exist")
                .and("not.be.visible")
                .and("have.attr", "role", "alert")
            cy.get(".toast")
                .should("be.visible")
            cy.get('.toast-close-button')
                .should("be.visible")
            cy.get('.toast-message')
                .should("be.visible")
                .and("have.css", "color", "rgb(255, 255, 255)")
                .and("have.text", "Erro: Error: Request failed with status code 400")

            cy.get('.toast-close-button')
                .click()

            //Etapa de cadastro de nova conta
            cy.get(".navbar-nav > li > a").eq(1)
                .click()

            cy.get(".toast")
                .should("not.be.exist")
            cy.get('.toast-close-button')
                .should("not.be.exist")
            cy.get('.toast-message')
                .should("not.be.exist")

            const randomName = faker.name.fullName();
            const randomMail = faker.internet.email();
            const randomPassword = faker.internet.password();

            cy.get(".form-group > input").eq(0)
                .type(randomName);
            cy.get(".input-group > input")
                .type(randomMail);
            cy.get(".form-group > input").eq(1)
                .type(randomPassword);
            cy.get(".btn")
                .click()

            cy.get(".btn")
                .click()

            cy.get("#toast-container")
                .should("be.exist")
                .and("not.be.visible")
                .and("have.attr", "role", "alert")
            cy.get(".toast")
                .should("be.visible")
            cy.get('.toast-close-button')
                .should("be.visible")
            cy.get('.toast-message')
                .should("be.visible")
                .and("have.css", "color", "rgb(255, 255, 255)")
                .and("have.text", "Erro: Error: Request failed with status code 500Usuário adicionado com sucesso")
        });
    });

    describe('02 - Web - BarrigaReact - Registrar conta inexistente', () =>
    {
        it('02.01 - Tela de Cadastro - Validar Registro de Novo Cadastro', () =>
        {
            cy.get(".navbar-nav > li > a").eq(1)
                .click()

            cy.get(".toast")
                .should("not.be.exist")
            cy.get('.toast-close-button')
                .should("not.be.exist")
            cy.get('.toast-message')
                .should("not.be.exist")

            const randomName = faker.name.fullName();
            const randomMail = faker.internet.email();
            const randomPassword = faker.internet.password();

            cy.get(".form-group > input").eq(0)
                .type(randomName);
            cy.get(".input-group > input")
                .type(randomMail);
            cy.get(".form-group > input").eq(1)
                .type(randomPassword);
            cy.get(".btn")
                .click()

            cy.get("#toast-container")
                .should("be.exist")
                .and("not.be.visible")
                .and("have.attr", "role", "alert")
            cy.get(".toast")
                .should("be.visible")
                //.and("have.css", "color", "rgb(81, 163, 81)")
            cy.get('.toast-close-button')
                .should("be.visible")
            cy.get('.toast-message')
                .should("be.visible")
                .and("have.css", "color", "rgb(255, 255, 255)")
                .and("have.text", "Usuário adicionado com sucesso")
        })

        it('02.02 - Tela de Cadastro - Validar Registro de Cadastro Repetido', () =>
        {
            cy.get(".navbar-nav > li > a").eq(1)
                .click()

            cy.get(".toast")
                .should("not.be.exist")
            cy.get('.toast-close-button')
                .should("not.be.exist")
            cy.get('.toast-message')
                .should("not.be.exist")

            cy.get(".form-group > input").eq(0)
                .type("Bruno Siqueira");
            cy.get(".input-group > input")
                .type("brunogsiq.freelancer@gmail.com")
            cy.get(".form-group > input").eq(1)
                .type("VaiCorinthians");
            cy.get(".btn")
                .click()

            cy.get("#toast-container")
                .should("be.exist")
                .and("not.be.visible")
                .and("have.attr", "role", "alert")
            cy.get(".toast")
                .should("be.visible")
            cy.get('.toast-close-button')
                .should("be.visible")
                cy.get('.toast-message')
                .should("be.visible")
                .and("have.css", "color", "rgb(255, 255, 255)")
                .and("have.text", "Erro: Error: Request failed with status code 500")
        })
    })

    describe('03 - Web - BarrigaReact - Realizar login', () =>
    {
        it('03.01 - Tela de Cadastro - Realizar Login Válido', () =>
        {
            cy.get(".input-group > input")
                .type("brunogsiq.freelancer@gmail.com")
            cy.get(".form-group > input")
                .type("VaiCorinthians")
            cy.get(".btn")
                .click()

            cy.get("#toast-container")
                .should("be.exist")
                .and("not.be.visible")
                .and("have.attr", "role", "alert")
            cy.get(".toast")
                .should("be.visible")
                //.and("have.css", "color", "rgb(81, 163, 81)")
            cy.get('.toast-close-button')
                .should("be.visible")
            cy.get('.toast-message')
                .should("be.visible")
                .and("have.css", "color", "rgb(255, 255, 255)")
                .and("have.text", "Bem vindo, Bruno Siqueira!")
        })
    })

    describe('04 - Web - BarrigaReact - Tela de Extrato', () =>
    {
        it('04.01 - Tela de Extrato - Validar Critérios de Aceite', () =>
        {
            //Menu Superior
            cy.get(".navbar-brand")
                .should("be.exist")
                .and("have.css", "color", "rgb(33, 37, 41)")
            cy.get(".navbar-brand > img")
                .and("be.visible")
            cy.get(".navbar-brand > img")
                .should("have.prop", "alt", "logo")

            cy.get(".navbar-nav > li").eq(0)
                .should("be.exist")
                .and("be.visible")
                .should("have.prop", "alt", "logo")

            cy.get(".navbar-nav > li").eq(1)
                .should("be.exist")
                .and("be.visible")
                .should("have.prop", "alt", "logo")

            cy.get(".navbar-nav > li").eq(2)
                .should("be.exist")
                .and("be.visible")
                .should("have.prop", "alt", "logo")

            cy.get(".navbar-nav > li").eq(3)
                .should("be.exist")
                .and("be.visible")
                .should("have.prop", "alt", "logo")
        });
    })

    describe('05 - Web - BarrigaReact - Alterar conta', () =>
    {
        it('05.01 - Tela de Login - Validar alteração de conta', () =>
        {
            cy.get(".input-group > input")
                .type("brunogsiq.freelancer@gmail.com")
            cy.get(".form-group > input")
                .type("VaiCorinthians")
            cy.get(".btn")
                .click()

            cy.get("#toast-container")
                .should("be.exist")
                .and("not.be.visible")
                .and("have.attr", "role", "alert")
            cy.get(".toast")
                .should("be.visible")
                //.and("have.css", "color", "rgb(81, 163, 81)")
            cy.get('.toast-close-button')
                .should("be.visible")
            cy.get('.toast-message')
                .should("be.visible")
                .and("have.css", "color", "rgb(255, 255, 255)")
                .and("have.text", "Bem vindo, Bruno Siqueira!")
        });
    })

    describe('06 - Web - BarrigaReact - Inserir Movimentação', () =>
    {
        
    })

    describe('07 - Web - BarrigaReact - Cálculo de saída', () =>
    {
        
    })

    describe('08 - Web - BarrigaReact - Remover Movimentação', () =>
    {
        
    })
})

