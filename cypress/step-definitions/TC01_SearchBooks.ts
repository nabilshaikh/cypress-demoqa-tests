/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress" />

import {
  And, Then, When,
} from 'cypress-cucumber-preprocessor/steps';
import Books from '../ui-identifiers/Books';

const books = new Books();

When('User search for books using keyword {string}', (keyword) => {
  books
    .getSearchBox()
    .click()
    .type(keyword);
});

Then('User should see {int} record in the data table having title as {string}', (count, title) => {
  books
    .getSearchResultRows()
    .should('have.length', count);
  books
    .getSearchResultRows()
    .first()
    .then((bookTitle) => {
      expect(bookTitle.text().trim()).equal(title);
    });
});

Then('User should see {int} record in the data table having author as {string}', (count, author) => {
  books
    .getSearchResultRows()
    .should('have.length', count);
  books
    .getSearchResultAuthorName()
    .first()
    .then((bookAuthor) => {
      expect(bookAuthor.text().trim()).equal(author);
    });
});

Then('User should see {int} record in the data table having publisher as {string}', (count, publisher) => {
  books
    .getSearchResultRows()
    .should('have.length', count);
  books
    .getSearchResultPublisherName()
    .first()
    .then((bookPublisher) => {
      expect(bookPublisher.text().trim()).equal(publisher);
    });
});

Then('User should not see any record in the data table', () => {
  books
    .getSearchResultRows()
    .should('have.length', 0);
});

And('User should see the text as {string}', (text) => {
  books
    .getNoSearchResultLabel()
    .then((element) => {
      expect(element.text().trim()).equal(text);
    });
});

When('User searches for books when book service is down', () => {
  cy
    .intercept('GET', 'https://demoqa.com/BookStore/v1/Books', {
      statusCode: 503,
      response: {},
    }).as('bookServiceDownAlias');
  cy
    .visit('/books');
  cy
    .wait('@bookServiceDownAlias');
});

Then('User should not see book results to get loaded in the data table', () => {
  books
    .getSearchResultTable()
    .should('not.exist');
});

And('User should see the label as {string}', (label) => {
  books
    .getSearchResultLoadingLabel()
    .should((element) => {
      expect(element.text().trim()).to.equal(label);
    });
});
