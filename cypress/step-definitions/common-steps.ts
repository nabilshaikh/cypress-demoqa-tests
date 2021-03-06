/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="cypress" />
import { Before, Given } from 'cypress-cucumber-preprocessor/steps';

/**
  * @desc Generic steps
*/

const booksResultAlias = 'booksResult';
Before({ tags: '@StubBooksResult' }, () => {
  cy
    .intercept('GET', Cypress.env('BOOKS_SERVICE'), { fixture: 'apiBooks.json' })
    .as(booksResultAlias);
});

Given('User visits {string} on {string} device', (page: string, device) => {
  switch (device) {
    case 'mobile':
      cy
        .log('Opening mobile...');
      cy
        .viewport('iphone-6'); // {width-375 & height-667}
      cy
        .visit(page);
      break;
    case 'tablet':
      cy
        .log('Opening tablet...');
      cy
        .viewport('ipad-2'); // {width-768 & height-1024}
      cy
        .visit(page);
      break;
    case 'desktop':
      cy
        .log('Opening desktop...');
      cy
        .viewport('macbook-15'); // {width-1440 & height-900}
      cy
        .visit(page);
      break;
    default:
      cy
        .log('Starting test in default viewport 1280x800');
  }
});
