import React, {createContext, useEffect, useState} from 'react'

import Axios from 'axios';

export const NewsContext = createContext()

export const NewsContextProvider = (props) => {
    const [data, setData] = useState()
    const apiKey = "da521002be7644f1a260de883a9c5bd1"


    useEffect(() => {
        Axios.get(`http://newsapi.org/v2/everything?q=rich&from=2020-10-20&sortBy=publishedAt&apiKey=${apiKey}`)
        .then(response => setData(response.data()))
        .catch(err => console.log(err))
    }, [data])

    
    return (
    <NewsContext.Provider value={{data}}>
        {props.children}
        </NewsContext.Provider>
    )
}
