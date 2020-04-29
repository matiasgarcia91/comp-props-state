import React from "react";
import "./App.css";
// import LikeCounter from "./components/LikeCounter";
import ArticleList from "./components/ArticleList";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <ArticleList />
      </header>
    </div>
  );
}

export default App;
