import { words } from '../../src/utilities/utilities'

describe('Top 100', () => {
  beforeEach(() => {
  cy.intercept('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=100&client_id=NO0Fq8pQcF', {
    method:"GET",
    fixture: "../fixtures/top100.json"
  })
    cy.visit('http://localhost:3000/')
  })

  it('displays a title, header, and nav bar', () => {
    cy.get("#title").contains('Boardgame')
    cy.get('#title').invoke('text').then((text) => {
      const word = text.split(' ')
      assert.isTrue(words.includes(word[1]))
    })
    cy.get('#top100-button').should('have.css', 'background-color', 'rgb(171, 176, 177)')
    cy.get('#fav-button').should('have.css', 'background-color', 'rgb(0, 221, 255)')
    cy.get('#search-input').should('exist')
  })

  it('displays all top100 games', () => {
    cy.get('#search-input').should('exist')
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

  it('toggle favorites when heart is clicked', () => {
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

    cy.get('#top100-button').click()
    cy.get('.heart-container').eq(0).click()
      .within(() => {
        cy.get('.heart').should('exist')
        .and('have.css', 'fill', 'rgb(137, 137, 137)')
      })
    
    cy.get('#fav-button').click()
    cy.get('.fav-game-card-wrapper').should('not.exist')
  })

  it('Should display top100 when top100 button is clicked from favorites', () => {
    cy.get('.heart-container').eq(0).click()
    cy.get('#fav-button').click()
    cy.get('.fav-game-card-wrapper').contains('Root')

    cy.get('#top100-button').click()
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
  
  it('Displays details when game is clicked', () => {
    cy.intercept('https://api.boardgameatlas.com/api/search?ids=TAAifFP590&client_id=NO0Fq8pQcF', {
      method:"GET",
      fixture: "../fixtures/details.json"
    })
    cy.get('.gameCard-container').eq(0).click()
    cy.get('.details-and-comment-container').should('exist')
  })

  it('Navigate back to top100 page when clicking top100 button in details page', () => {
    cy.intercept('https://api.boardgameatlas.com/api/search?ids=TAAifFP590&client_id=NO0Fq8pQcF', {
      method:"GET",
      fixture: "../fixtures/details.json"
    })
    cy.get('.gameCard-container').eq(0).click()
    cy.get('.details-and-comment-container').should('exist')
    cy.get('#top100-button').click()
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

  it('Should be able to search for a specific game', () => {
    cy.get('#search-input').type('Roo').should('have.value', 'Roo')
    cy.get('.gameCard-container').eq(0).should('contain', "Root")
    .and('contain', '$48.00')
    .and('contain', '4.06 / 5')
    .and('contain', '404 reviews')
    .within(() => {
      cy.get('img').should('have.attr', 'src', "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104")
      cy.get('button').eq(1).should('exist')
    })
    cy.get('.gameCard-container').eq(1).should('not.exist')
  })

  it('Should see a message when there are no search results', () => {
    cy.get('#search-input').type('xx').should('have.value', 'xx')
    cy.get('.gameCard-container').should('not.exist')
    cy.get('.search-no-games').should('contain', 'Sorry, there were no games that matched your search. Please try a different search.')
  })

  it('Should show an error message when a user uses an incorrect url', () => {
    cy.visit('http://localhost:3000/bananas')
    cy.get('.page404').should('contain', '404')
    .and('contain', 'Page not found')
    .and('contain', "We're sorry, the page you requested could not be found. Please go back to the homepage.")
    cy.get('#back-button').click()
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
  })

  describe('Server-side error', () => {
    beforeEach(() => {
      cy.intercept('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=100&client_id=NO0Fq8pQcF', {
        method:"GET"}, {
          statusCode: 500,
        })
        cy.visit('http://localhost:3000/')
    })

    it('Should show response when there is a server error', () => {
      cy.get('.error-modal').should('contain', 'Oops! Something went wrong!')
      .and('contain', 'Please try again later')
    })

    it('Should close the modal when the dismiss button is clicked', () => {
      cy.get('#dismiss-button').click()
      cy.get('.gameCard-container').should('not.exist')
      cy.get('.error-modal').should('not.exist')
    })

  })