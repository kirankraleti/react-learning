import React from 'react';

const newsItem = ({item}) => {
    return (
        <div className="news_item" key={item.id}>
            <h3>{item.title}</h3>
            <div>
                { item.feed }
            </div>
        </div>
    )

}

export default newsItem;