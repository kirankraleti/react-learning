// This is how it is done with hooks.
import React, {useRef} from 'react';


const App = () => {

  const textInput = useRef();

  const triggerHandler = () => {
    console.log(textInput.current.value);
  }

    return(
      <>
      <h1>Form:</h1>
      {/* <input type="text" ref={textInput}/> */}
      <InputComponent ref={textInput}/>
      <button onClick={triggerHandler}>
        Trigger
      </button>
      </>
    )
}

// Ref's cannot be passed as props
// So below wont work

// const InputComponent = ({ref}) => {
//   return (
//     <input type="text" ref={ref}/>
//   )
// }

// Solution

const InputComponent = React.forwardRef((props, ref) => {
  return (
    <input type="text" ref={ref}/>
  )
});

export default App;