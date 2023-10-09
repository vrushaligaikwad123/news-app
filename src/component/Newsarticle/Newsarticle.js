import React from "react";
import "./Newsarticle.css";
function Newsarticle(author,title,description,url,urlToImage,publishedAt){
    return(
        <div className="news-article-card">
                 <img src={urlToImage} className="news-article-img"/>
                 <h1 className="article-title"> {title} </h1>
                 <div className="article-info">
                    <p className="article-author">{author}</p>
                    <p className="article-published">{publishedAt}</p>
                 </div>
                 <p className="article-description">{description}</p>
                 <a href={url} target="blank" className="btn-read-more">Read More</a>
         </div>
    )
}
export default Newsarticle