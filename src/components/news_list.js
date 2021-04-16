import React from 'react';
import NewsItem from './news_list_item';

const newsList = (props) => {
    const news = props.news.map((item) => (
        <NewsItem item={item} key={item.id}/>
    ));

    return (
        <>
            { news }
        </>
    )
}

export default newsList;