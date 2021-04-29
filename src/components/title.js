import React from 'react';

const Title = () => {

    console.log('1-title');
  
    return (
      <>
        <h1>My App</h1>
        <hr/>
      </>
    );
}

// using below will stop re-rendering component every time if there is no change in props. 
export default React.memo(Title);