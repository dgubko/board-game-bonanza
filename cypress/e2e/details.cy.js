import { CgYinyang } from "react-icons/cg";
import { words } from "../../src/utilities/utilities";

describe("Game details when API server is up", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.boardgameatlas.com/api/search?ids=TAAifFP590&client_id=NO0Fq8pQcF",
      {
        method: "GET",
        fixture: "../fixtures/details.json",
      }
    );
    cy.visit("http://localhost:3000");
    cy.get(".gameCard-container").eq(0).click();
  });

  it("displays a title", () => {
    cy.get("#title").contains("Boardgame");
    cy.get("#title")
      .invoke("text")
      .then((text) => {
        const word = text.split(" ");
        assert.isTrue(words.includes(word[1]));
      });
  });

  it("should display board-game image", () => {
    cy.get(".details-image").should(
      "have.attr",
      "src",
      "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104"
    );
  });

  it("should have it's own title", () => {
    cy.get("h2").contains("Root");
  });

  it("should have it's rank displayed", () => {
    cy.get("#game-rank").contains("Rank: 1");
  });

  it("should have it's average user rating", () => {
    cy.get("#game-avg-rating").contains("Avg user rating: 4.06");
  });

  it("should have it's num ratings", () => {
    cy.get("#game-num-ratings").contains("# of ratings: 404");
  });

  it("should have an about section", () => {
    cy.get("#game-about").contains(
      "About: Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. Play as the Marquise de Cat and dominate the woods, extracting its riches and policing its inhabitants, as the Woodland Alliance, gathering supporters and coordinate revolts against the ruling regime, the Eyrie Dynasties, regaining control of the woods while keeping your squabbling court at bay, or as the Vagabond, seeking fame and fortune as you forge alliances and rivalries with the other players. Each faction has its own play style and paths to victory, providing an immersive game experience you will want to play again and again."
    );
  });

  it("should display player info", () => {
    cy.get("#game-players").contains("Players: 2-4");
  });

  it("should display playtime", () => {
    cy.get("#game-playtime").contains("Playtime: 60-90");
  });

  it("should have an official site", () => {
    cy.get("#game-official-site").contains(
      "Official site: http://ledergames.com/root/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads"
    );
  });

  it("should have it's price", () => {
    cy.get("#game-price").contains("Price: $48.00");
  });

  it("should have comment header to leave a comment", () => {
    cy.get(".form-header").contains("Add Your Game Comment Here:");
  });

  it("user should be able to fill out comment form and comment appears", () => {
    cy.get(".name-input").type("Bobby").should("have.value", "Bobby");
    cy.get(".comment-input")
      .type("Awesome game")
      .should("have.value", "Awesome game");
    cy.get(".submit-button").click();
    cy.get(".comment-statement").contains('Bobby said: "Awesome game"');
  });

  it("should show error message when user submits comment without name", () => {
    cy.get(".comment-input")
      .type("Awesome game")
      .should("have.value", "Awesome game");
    cy.get(".submit-button").click();
    cy.get(".form-error").contains("Please enter full review");
  });

  it("should show error message when user submits comment without comment", () => {
    cy.get(".name-input").type("Bobby").should("have.value", "Bobby");
    cy.get(".submit-button").click();
    cy.get(".form-error").contains("Please enter full review");
  });

  it("should delete comment if user click trashcan", () => {
    cy.get(".name-input").type("Bobby").should("have.value", "Bobby");
    cy.get(".comment-input")
      .type("Awesome game")
      .should("have.value", "Awesome game");
    cy.get(".submit-button").click();
    cy.get(".comment-statement").contains('Bobby said: "Awesome game"');
    cy.get(".trash-can").click();
    cy.get(".all-comments").should("not.be.visible");
  });

  it("user should be able to favorite the game should appear in favorite view", () => {
    cy.get(".heart-container").click();
    cy.get("#fav-button").click();
    cy.get(".fav-game-card-wrapper").should("be.visible");
    cy.get(".game-card-name").contains("Root");
  });

  it("user should be able to unfavorite game from detail view", () => {
    cy.get("#detail-heart")
      .click()
      .should("have.css", "fill")
      .and("eq", "rgb(225, 46, 46)");
    cy.get("#detail-heart")
      .click()
      .should("have.css", "fill")
      .and("eq", "rgb(137, 137, 137)");
  });
});


describe("Game details when API server is down", () => {
  beforeEach(() => {
      cy.intercept('https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=100&client_id=NO0Fq8pQcF', {
        method:"GET",
        fixture: "../fixtures/top100.json"
      })
      cy.visit('http://localhost:3000/')
      cy.intercept( 'https://api.boardgameatlas.com/api/search?ids=TAAifFP590&client_id=NO0Fq8pQcF', {
      method: "GET" },
    { statusCode: 500
      });
    cy.get('.gameCard-container').eq(0).click()
    })


    
  it('should show error message when the api is down', () => {
    cy.get('.error-modal').should("contain", "Oops! Something went wrong!");
    });

    it("should bring user back to home page when dismiss button is clicked", () => {
      cy.get("#dismiss-button").click();
      cy.get(".gameCard-container").eq(0).should('exist')
      cy.get(".gameCard-container").eq(1).should('exist')
  });
})


