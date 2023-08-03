import React from "react";
import bubble_tea_front_page from "/public/images/bubble_tea_devoteas/bubble_tea_front_page.png";
import bubble_tea_review_page from "/public/images/bubble_tea_devoteas/bubble_tea_review_page.png";
import FooterForPost from "./FooterForPost";

const BubbleTeaDevoteas = () => {
  return (
    <div className="post">
      <div className="copy">
        <div id="header">Bubble Tea Devoteas</div>
        <div className="image">
          <img
            src={bubble_tea_front_page}
            alt="Bubble Tea Devoteas front page"
          />
          <img
            src={bubble_tea_review_page}
            alt="Bubble Tea Devoteas review page on one shop"
          />
        </div>
        <p className="description">
          An application that allows users to se bubble tea shops and their
          reviews around Boston, MA. Signed in users can create reviews, and
          admin roles can create shops.
        </p>
      </div>
      <FooterForPost />
    </div>
  );
};

export default BubbleTeaDevoteas;
