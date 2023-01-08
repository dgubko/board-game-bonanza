import { words } from '../../src/utilities/utilities'

describe('Top 100', () => {
    beforeEach(() => {
    cy.intercept('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=100&client_id=NO0Fq8pQcF', {
      method:"GET",
      fixture: "../fixtures/top100.json"
    })
      cy.visit('http://localhost:3000/')
      cy.get('.heart-container').eq(0).click()
      cy.get('.heart-container').eq(1).click()
      cy.get('#fav-button').click()
    })

    it('displays a title, header, and nav bar', () => {
        cy.get("#title").contains('Boardgame')
        cy.get('#title').invoke('text').then((text) => {
          const word = text.split(' ')
          assert.isTrue(words.includes(word[1]))
        })
        cy.get('#fav-button').should('have.css', 'background-color', 'rgb(171, 176, 177)')
        cy.get('#top100-button').should('have.css', 'background-color', 'rgb(0, 221, 255)')
        cy.get('#search-input').should('not.exist')
    })    

    it('should display favorited games', () => {
        cy.get('.fav-game-card-wrapper').eq(0).should('contain', 'Root')
            .within(() => {
                cy.get('.heart-container')
                    .within(() => {
                        cy.get('.active').should('exist')
                        .and('have.css', 'fill', 'rgb(225, 46, 46)')
                    })
                cy.get('.fav-game-card')
                    .within(() => {
                        cy.get('#fav-image').should('have.attr', 'src', 'https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104')
                        cy.get('.name-and-rating')
                            .within(() => {
                                cy.get('p').eq(0).should('contain', 'Root')
                                cy.get('p').eq(1).should('contain', '4.06')
                            })
                    })

            })
        cy.get('.fav-game-card-wrapper').eq(1).should('contain', 'Scythe')
            .within(() => {
                cy.get('.heart-container')
                    .within(() => {
                        cy.get('.active').should('exist')
                        .and('have.css', 'fill', 'rgb(225, 46, 46)')
                    })
                cy.get('.fav-game-card')
                    .within(() => {
                        cy.get('#fav-image').should('have.attr', 'src', 'https://cdn.shopify.com/s/files/1/0513/4077/1515/products/scythe-board-game.jpg?v=1611090922')
                        cy.get('.name-and-rating')
                            .within(() => {
                                cy.get('p').eq(0).should('contain', 'Scythe')
                                cy.get('p').eq(1).should('contain', '4.22')
                            })
                    })    
            })
    })

    it('should be able to unfavorite a game and only favorited games are displayed', () => {
        cy.get('.fav-game-card-wrapper').eq(1).should('contain', 'Scythe')
            .within(() => {
                cy.get('.heart-container').click()
            })
        cy.get('.fav-game-card-wrapper').eq(1).should('not.exist')
        cy.get('.fav-game-card-wrapper').eq(0).should('exist').and('contain', 'Root')
    })

    it('should be able click on a game to see it\'s details', () => {
        cy.intercept('https://api.boardgameatlas.com/api/search?ids=TAAifFP590&client_id=NO0Fq8pQcF', {
            method:"GET",
            fixture: "../fixtures/details.json"
        })
        cy.get('.fav-game-card-wrapper').eq(0).click()
        cy.get('.details-and-comment-container').should('exist')
    })

    it('should display a message when no favorites exist', () => {
        cy.get('.heart-container').eq(1).click()
        cy.get('.heart-container').eq(0).click()
        cy.contains('You currently have no favorite games. Go and favorite some cool games!')
    })


})