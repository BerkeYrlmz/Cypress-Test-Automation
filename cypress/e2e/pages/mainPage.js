class mainPage{

    goToUrl(text){
        cy.visit('https://parabank.parasoft.com');
        return this;
    }

    errorMessageControl(text){
        cy.get("[class='error']").should("have.text",text);
        return this;
    }

}

export default mainPage;