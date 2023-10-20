import React from 'react';
import './Newsarticle.css';

function NewsArticle({author, title , description, url, urlToImage, publishedAt}) {
  return (
    <>
    <div className='news-article-card'>
              <img src={urlToImage}    alt='' className='news-articles-img'/>
              <h1 className='article-title'>{title}</h1>
              <div className='article-info'>
                <span className='article-author'>{author}</span>
                <span className='article-publishedAt'>{publishedAt}</span>
              </div>
              <p className='article-description'>{description}</p>

              <a href={url} target='_blank' className='btn-read-more btn btn-primary'>Read More</a>
            </div>
    </>
  )
}

export default NewsArticle