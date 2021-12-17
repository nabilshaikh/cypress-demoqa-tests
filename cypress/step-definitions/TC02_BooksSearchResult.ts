/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress" />

import {
  And, Then, When,
} from 'cypress-cucumber-preprocessor/steps';
import Books from '../ui-identifiers/Books';

const books = new Books();

And('User sees the author of {string} book to be {string} and {string} book to be {string}', (row1, author1, row2, author2) => {
  books
    .getAuthorNameBasedOnSearchResultRow(parseInt(row1))
    .then((element) => {
      expect(element.text().trim()).to.equal(author1);
    });

  books
    .getAuthorNameBasedOnSearchResultRow(parseInt(row2))
    .then((element) => {
      expect(element.text().trim()).to.equal(author2);
    });
});

When('User clicks on author column to sort the results based on author name', () => {
  cy
    .get('[role=columnheader]')
    .eq(2)
    .click();
});

Then('User finds the author of {string} book to be {string} and {string} book to be {string}', (row1, author1, row2, author2) => {
  books
    .getAuthorNameBasedOnSearchResultRow(parseInt(row1))
    .then((element) => {
      expect(element.text().trim()).to.equal(author1);
    });

  books
    .getAuthorNameBasedOnSearchResultRow(parseInt(row2))
    .then((element) => {
      expect(element.text().trim()).to.equal(author2);
    });
});
