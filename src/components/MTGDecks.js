import React from "react";
import mtg_deck_frontpage from "/public/images/mtg_decks/mtg_deck_frontpage.png";
import mtg_deck_deckpage from "/public/images/mtg_decks/mtg_deck_deckpage.png";
import FooterForMagicDecks from "./FooterForMagicDecks";

const MTGDecks = () => {
  return (
    <div className="post">
      <div className="copy">
        <div id="header">MTG Deck Builder</div>
        <div className="image">
          <img src={mtg_deck_frontpage} alt="MTG Deck Builder front page" />
          <img
            src={mtg_deck_deckpage}
            alt="MTG Deck Builder page for one deck containing a card"
          />
        </div>
        <p className="description">
          An application that allows you to store and manage your Magic The
          Gathering deck builds.
        </p>
      </div>
      <div>
        <FooterForMagicDecks />
      </div>
    </div>
  );
};

export default MTGDecks;
