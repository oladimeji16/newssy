import React from 'react'

const NewsArticle = ({ data }) => {
    return (
        <div className="news">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <span>{data.author}</span>
            <span>{data.publishedAt}</span>
            <span>{data.source}</span>
        </div>
    )
}

export default NewsArticle
