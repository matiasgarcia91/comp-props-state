import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";

// useEffect => fetch the data
const apiURL = "https://jsonplaceholder.typicode.com/posts?_limit=5";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log("Use Effect!");
    // define an async function that does an axios call
    const fetchArticles = async () => {
      const response = await axios.get(apiURL);
      // check the response.
      console.log("axios response", response.data);
      setArticles(response.data);
    };

    fetchArticles();
  }, []); // its gonna fire depending on what we pass as second param

  // Second argument
  // [] -> Fire only when component is mounted
  // null => Fire in every re render
  // [something] => when "something" is changed.

  const toggleHide = () => {
    setHidden(!hidden);
  };

  console.log(articles);
  // map into articleCard component

  if (articles.length === 0) {
    return <div>Loading...</div>;
  }

  const articleCards = articles.map((article, index) => (
    <ArticleCard key={index} title={article.title} content={article.body} />
  ));

  const buttonText = hidden ? "Show articles" : "Hide articles";

  return (
    <div>
      <button onClick={toggleHide}>{buttonText}</button>
      {!hidden && articleCards}
    </div>
  );
};

export default ArticleList;
