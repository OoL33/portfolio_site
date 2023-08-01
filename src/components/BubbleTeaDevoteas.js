import React from "react";
import bubble_tea_front_page from "/public/images/bubble_tea_devoteas/bubble_tea_front_page.png";
import bubble_tea_review_page from "/public/images/bubble_tea_devoteas/bubble_tea_review_page.png";
import FooterForPost from "./FooterForPost";

const BubbleTeaDevoteas = () => {
  return (
    <div id="content">
      <div className="post">
        <div className="copy">
        <div id="header">Bubble Tea Devoteas</div>
        <div className="image">
        <img src={bubble_tea_front_page} alt="Bubble Tea Devoteas Front Page" />
        <img src={bubble_tea_review_page} alt="Bubble Tea Devoteas Review Page" />
        </div>
        <p className="description">In this app, built with Ruby on Rails, React, and Postgresql; users are able to see shops and reviews for bubble tea shops around Boston, MA. Signed in users can create reviews, and admin roles can create shops.</p>
        </div>
        <FooterForPost />
      </div>
    </div>
  );
};

export default BubbleTeaDevoteas;