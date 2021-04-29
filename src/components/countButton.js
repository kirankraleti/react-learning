import React from 'react';

const CountButton = ({handleCount}) => {
    console.log('3-countButton');
    return (
      <>
        <button onClick={ handleCount }>
            Increment Count
        </button>
      </>
    );
}

// using memo here will not work as it calls a function & everytime a function is called, it treats as a new fn in memory.
// So, no way to identify it is the same old fn.
// SOLUTION - useCallback
export default React.memo(CountButton);