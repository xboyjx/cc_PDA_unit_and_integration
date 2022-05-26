describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it("Should do arithmetical operations and update the display with the result of the operation", () => {
    cy.get('#number3').click();
    cy.get('#operator-add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '7')
  })

  it("chain multiple operations together", () => {
    cy.get('#number3').click();
    cy.get('#operator-add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', '12')
  })

  describe("Should be able to handle a range of numbers (positive, negative, decimal, very large)", () => {

    it("Should be able to out put a positive number from an operations", () => {
      cy.get('#number3').click();
      cy.get('#operator-add').click();
      cy.get('#number4').click();
      cy.get('#operator-equals').click();
      cy.get('#running-total').should('contain', '7')
    })

    it("Should be able to output a negative number from an operation", () => {
      cy.get('#number3').click();
      cy.get('#operator-subtract').click();
      cy.get('#number4').click();
      cy.get('#operator-equals').click();
      cy.get('#running-total').should('contain', '-1')
    })

    it("should be able to output a decimal from an operation", () => {
      cy.get('#number5').click();
      cy.get('#operator-divide').click();
      cy.get('#number2').click();
      cy.get('#operator-equals').click();
      cy.get('#running-total').should('contain', '2.5')
    })

    it("Should be able to output large numbers from an operation", () => {
      cy.get('#number1').click();
      for(var i = 0; i<10;i++){
        cy.get('#number0').click();
      }
      cy.get('#operator-multiply').click();
      cy.get('#number2').click();
      cy.get('#operator-equals').click();
      cy.get('#running-total').should('contain', '20000000000')
    })
  })

  it("Should be able to divide by 0", () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('#running-total').should('contain', 'error')
  })

  it("numbers buttons should update the running total", () => {
    cy.get('#number9').click();
    cy.get('#running-total').should('contain', '9')
  })
})
