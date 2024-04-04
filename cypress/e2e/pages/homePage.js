class homePage{

    titleControl(text){
        cy.get("[class='title']").should("have.text",text);
        return this;
    }

}

export default homePage;