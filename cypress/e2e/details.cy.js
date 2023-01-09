import { CgYinyang } from "react-icons/cg";
import { words } from "../../src/utilities/utilities";

describe("Game details when API server is running", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=100&client_id=NO0Fq8pQcF",
      {
        method: "GET",
        fixture: "../fixtures/top100.json",
      }
    );
    cy.visit("http://localhost:3000");
    cy.intercept(
      "https://api.boardgameatlas.com/api/search?ids=TAAifFP590&client_id=NO0Fq8pQcF",
      {
        method: "GET",
        fixture: "../fixtures/details.json",
      }
    );
    cy.get(".gameCard-container").eq(0).click();
  });

  it("should display a title", () => {
    cy.get("#title").contains("Board Game");
    cy.get("#title")
      .invoke("text")
      .then((text) => {
        const word = text.split(" ");
        assert.isTrue(words.includes(word[2]));
      });
  });

  it("should display boardgame info", () => {
    cy.get(".details-and-comment-container")
      .should("contain", "Rank: 1")
      .and("contain", "Avg user rating: 4.06")
      .and("contain", "# of ratings: 404")
      .within(() => {
        cy.get("img").should(
          "have.attr",
          "src",
          "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1540147295104"
        );
        cy.get("h2").contains("Root");
      })
      .should("contain", "Rank: 1")
      .and("contain", "Avg user rating: 4.06")
      .and("contain", "# of ratings: 404")
      .and("contain", "Players: 2-4")
      .and("contain", "Playtime: 60-90")
      .and(
        "contain",
        "Official site: http://ledergames.com/root/?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads"
      )
      .and("contain", "Price: $48.00");
    cy.get("#about").contains(
      "About: Find adventure in this marvelous asymmetric game. Root provides limitless replay value as you and your friends explore the unique factions all wanting to rule a fantastic forest kingdom. Play as the Marquise de Cat and dominate the woods, extracting its riches and policing its inhabitants, as the Woodland Alliance, gathering supporters and coordinate revolts against the ruling regime, the Eyrie Dynasties, regaining control of the woods while keeping your squabbling court at bay, or as the Vagabond, seeking fame and fortune as you forge alliances and rivalries with the other players. Each faction has its own play style and paths to victory, providing an immersive game experience you will want to play again and again."
    );
  });

  it("should display a comment input section", () => {
    cy.get(".form-header").contains("Add Your Game Comment Here:");
    cy.get(".form").within(() => {
      cy.get("input").should("have.value", "");
      cy.get("textarea").should("have.value", "");
    });
  });

  it("should allow user to fill out comment form and display comment", () => {
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

  it("should allow user to favorite game and display the game in the favorites view", () => {
    cy.get(".heart-container").click();
    cy.get("#fav-button").click();
    cy.get(".fav-game-card-wrapper").should("be.visible");
    cy.get(".game-card-name").contains("Root");
  });

  it("should allow user to unfavorite a game in the detail view", () => {
    cy.get(".heart").click().should("have.css", "fill", "rgb(225, 46, 46)");
    cy.get(".heart").click().should("have.css", "fill", "rgb(137, 137, 137)");
  });
});

describe("Game details when API server is down", () => {
  beforeEach(() => {
    cy.intercept(
      "https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=100&client_id=NO0Fq8pQcF",
      {
        method: "GET",
        fixture: "../fixtures/top100.json",
      }
    );
    cy.visit("http://localhost:3000/");
    cy.intercept(
      "https://api.boardgameatlas.com/api/search?ids=TAAifFP590&client_id=NO0Fq8pQcF",
      {
        method: "GET",
      },
      { statusCode: 500 }
    );
    cy.get(".gameCard-container").eq(0).click();
  });

  it("should show error message when the api is down", () => {
    cy.get(".error-modal").should("contain", "Oops! Something went wrong!");
    cy.get("#dismiss-button").should("exist");
  });

  it("should bring user back to home page when dismiss button is clicked", () => {
    cy.get("#dismiss-button").click();
    cy.get(".gameCard-container").eq(0).should("exist");
    cy.get(".gameCard-container").eq(1).should("exist");
  });
});
