import React from "react";
import bubble_tea_front_page from "/public/images/bubble_tea_devoteas/bubble_tea_front_page.png";

const Post = () => {
  return (
    <div id="content">
      <div className="post">
        <div id="header">Project</div>
        <p className="description">POST</p>
        <div className="image">
        <img src={bubble_tea_front_page} alt="Bubble Tea Devoteas Front Page" />
        </div>
      </div>
    </div>
  );
};

export default Post;
