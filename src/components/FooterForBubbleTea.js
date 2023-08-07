import React from "react";

const FooterForBubbleTea = () => {
  const handleExternalLink = () => {
    window.location.href = "https://github.com/OoL33/bubble-tea-devoteas";
  };
  return (
    <div className="footer_for_post">
      <div onClick={handleExternalLink}>
        <p>Check out the GitHub repository</p>
      </div>
    </div>
  );
};

export default FooterForBubbleTea;
