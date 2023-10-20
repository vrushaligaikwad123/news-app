import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Newsarticle from "../../component/Newsarticle/Newsarticle";


function Home() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("nagpur");

  const loadNews = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=tesla&from=2023-09-20&sortBy=publishedAt&apiKey=7e2479db56ec4f7ebe9304e83d929119`
      );
      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  useEffect(() => {
    loadNews();
  }, [searchQuery]);
  return (
    <>
      <nav class="navbar navbar-dark bg-dark text-light">
        <h3 class="navbar-brand ms-3" className="heading">News App🗞️</h3>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2 me-5"
            type="search"
            placeholder="Search"
            className="search-input"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            aria-label="Search"
          />
        </form>
      </nav>

      <div className="news-container mt-3">
        {news.map((newsarticles, index) => {
          const {
            author,
            title,
            description,
            url,
            urlToImage,
            publishedAt,
            content,
          } = newsarticles;
          return (
            <Newsarticle
              author={author}
              title={title}
              description={description}
              url={url}
              urlToImage={urlToImage}
              publishedAt={publishedAt}
              content={content}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;