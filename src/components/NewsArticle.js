import React from 'react'

const NewsArticle = ({ data }) => {
    return (
        <div className="news">
            <h1 className='news-title'>{data.title}</h1>
            <p className='news-desc'>{data.description}</p>
            <span className='news-author'>{data.author}</span>
            <span className='news-published'>{data.publishedAt}</span>
            <br/>
            <span className='news-source'>{data.source.name}</span>
        </div>
    )
}

export default NewsArticle
