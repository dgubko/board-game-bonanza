import { words } from '../../src/utilities/utilities'

describe('Top 100', () => {
  beforeEach(() => {
  cy.intercept('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=100&client_id=NO0Fq8pQcF', {
    method:"GET",
    fixture: "../fixtures/top100.json"
  })
    cy.visit('http://localhost:3000/')
  })

  it('displays a title', () => {
    cy.get("#title").contains('Boardgame')
    cy.get('#title').invoke('text').then((text) => {
      const word = text.split(' ')
      assert.isTrue(words.includes(word[1]))
    })
  })

  it('displays all top100 games', () => {
    cy.get('.gameCard-container').should('have.length', 2)
    cy.get('.gameCard-container').eq(0).should('contain', "Root")
      .and('contain', '$48.00')
      .and('contain', '4.06 / 5')
      .and('contain', '404 reviews')
      .within(() => {
        cy.get('img').should('have.attr', 'src', "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104")
        cy.get('button').eq(1).should('exist')
      })

    cy.get('.gameCard-container').eq(1).should('contain', "Scythe")
      .and('contain', '$54.92')
      .and('contain', '4.22 / 5')
      .and('contain', '753 reviews')
      .within(() => {
        cy.get('img').should('have.attr', 'src', "https://cdn.shopify.com/s/files/1/0513/4077/1515/products/scythe-board-game.jpg?v=1611090922")
        cy.get('button').eq(1).should('exist')
      })
  })

  it('favorites a game and changes color when heart is clicked', () => {
    cy.get('.heart-container').eq(0)
    .within(() => {
      cy.get('.heart').should('exist')
      .and('have.css', 'fill', 'rgb(137, 137, 137)')
    })

    cy.get('.heart-container').eq(0).click()
    .within(() => {
      cy.get('.active').should('exist')
      .and('have.css', 'fill', 'rgb(225, 46, 46)')
    })

    cy.get('#fav-button').click()
    cy.get('.fav-game-card-wrapper').contains('Root')
  })
  
  it('Displays details when game is clicked', () => {
    cy.intercept('https://api.boardgameatlas.com/api/search?ids=TAAifFP590&client_id=NO0Fq8pQcF', {
      method:"GET",
      fixture: "../fixtures/details.json"
    })
    cy.get('.game-card-container').eq(0).click()
    cy.get('.details-and-comment-container').should('exist')
  })

  })