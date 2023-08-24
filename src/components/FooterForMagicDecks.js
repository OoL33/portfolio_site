import React from "react";

const FooterForMagicDecks = () => {
  const handleExternalLink = () => {
    window.location.href = "https://github.com/OoL33/mtg_deck_builder";
  };
  return (
    <div className="footer_for_post">
      <p>Check out the GitHub repository</p>
      <div onClick={handleExternalLink}></div>
    </div>
  );
};

export default FooterForMagicDecks;
