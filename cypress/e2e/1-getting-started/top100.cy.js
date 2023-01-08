import { words } from '../../../src/utilities/utilities'
describe('Top 100', () => {
  beforeEach(() => {
  cy.intercept('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=100&client_id=NO0Fq8pQcF', {
    method:"GET",
    // fixture: "../../fixtures/top100.json"
  })
    cy.visit('http://localhost:3000/')
  })

  it('displays a title', () => {
    cy.get("#title").contains('Boardgame')
    cy.get("#title").contains('Boardgame')
    cy.get('#title').invoke('text').then((text) => {cy.log(text)})
  })
})