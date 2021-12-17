/* eslint-disable class-methods-use-this */
/// <reference types="cypress" />

class Books {
  getSearchBox() {
    return cy.get('[id=searchBox]');
  }

  getSearchResultRows() {
    return cy.get('.mr-2');
  }

  getSearchResultAuthorName() {
    return cy.get('.action-buttons').parent().next();
  }

  getSearchResultPublisherName() {
    return cy.get('.action-buttons').parent().next().next();
  }

  getNoSearchResultLabel() {
    return cy.get('.rt-noData');
  }

  getSearchResultTable() {
    return cy.get('.ReactTable');
  }

  getSearchResultLoadingLabel() {
    return cy.get('#loading-label');
  }

  getAuthorNameBasedOnSearchResultRow(row: number) {
    return cy.get('.rt-tr-group').eq(row - 1).find('.rt-td').eq(2);
  }
}

export default Books;
