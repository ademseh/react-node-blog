import React from "react";
import ArticleCardMini from "../../../components/ArticleCardMini";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogs } from "../../../state/blog";

export default function Recent() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div className="recent">
      <div className="recent-top">
        <h1 className="recent-title">Recent Articles</h1>
        <p className="recent-more-link">
          More in Photography <i className="fa-solid fa-arrow-right"></i>{" "}
        </p>
      </div>
      <div className="articles-container">
        <ArticleCardMini
          image="https://a6e8z9v6.stackpathcdn.com/akea/homepage3/wp-content/uploads/2018/11/juja-han-456323-unsplash-400x400.jpg"
          likes="225"
        />
        <ArticleCardMini
          image="https://a6e8z9v6.stackpathcdn.com/akea/homepage3/wp-content/uploads/2018/11/post-vr-400x400.jpg"
          likes="258"
        />
        <ArticleCardMini
          image="https://a6e8z9v6.stackpathcdn.com/akea/homepage3/wp-content/uploads/2018/11/yiran-ding-624696-unsplash-400x400.jpg"
          likes="265"
        />
        <ArticleCardMini
          image="https://a6e8z9v6.stackpathcdn.com/akea/homepage3/wp-content/uploads/2018/11/juja-han-456323-unsplash-400x400.jpg"
          likes="225"
        />
        <ArticleCardMini
          image="https://a6e8z9v6.stackpathcdn.com/akea/homepage3/wp-content/uploads/2018/11/post-vr-400x400.jpg"
          likes="258"
        />
      </div>
    </div>
  );
}
