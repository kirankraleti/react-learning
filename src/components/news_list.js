import React from 'react';

const newsList = (props) => {
    /*return (
        <>
            { props.news.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <div>
                        { item.feed }
                    </div>
                </div>
            )) }
        </>
    )*/

    // OR

    const news = props.news.map((item) => (
        <div key={item.id}>
            <h3>{item.title}</h3>
            <div>
                { item.feed }
            </div>
        </div>
    ));

    return (
        <>
            { news }
        </>
    )
}

export default newsList;