/// <reference types="cypress" /> 

context("Real Application", () =>
{
    describe('01 - Criando uma conta', () =>
    {
        it('01 - Login', () =>
        {
            cy.request({
                method: 'POST',
                url: 'https://barrigareact.wcaquino.me/login',
                body: {
                    email: "brunogsiq.freelancer@gmail.com",
                    redirecionar: false,
                    senha: "VaiCorinthians"
                }
            })
            .its('body.token2').should('not.be.empty')
            .then(token => 
            {
                cy.request({
                    url: 'https://barrigareact.wcaquino.me/contas',
                    method: 'POST',
                    head: {Authorization: `JWT ${token}`},
                    body: {
                        nome: "brunogsiq17@gmail.com",
                    }
                }).as(response)
            })

            cy.get("@response").then(res =>{
                expect(res.status).to.be.equal(201)
                expect(res.body).to.have.property('id')
                expect(res.body).to.have.property('nome', 'brunogsiq17@gmail.com')
            })
        })
    })
})