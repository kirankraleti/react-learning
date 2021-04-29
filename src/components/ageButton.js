import React from 'react';

const AgeButton = ({handleAge}) => {
    console.log('5-ageButton');
    return (
      <>
        <button onClick={ handleAge }>
            Increment Age
        </button>
      </>
    );
}

export default React.memo(AgeButton);