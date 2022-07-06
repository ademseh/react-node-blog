import React from "react";
import "./style.scss";
export default function ArticleCardMini({ image, likes }) {
  return (
    <div className="article-mini">
      <div className="article-mini__container">
        <div className="image-container">
          <img src={image} className="image" />
        </div>
        <div className="likes-container">
          <i className="fa-solid fa-heart"></i>
          <p> {likes} </p>
        </div>
      </div>
    </div>
  );
}
