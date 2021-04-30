// Context lets us store & retrieve data or functions from a central location.
// can be used in class and functional components
import React from 'react';
import {MyProvider} from './context';

import User from './components/user';


const App = () => {

  // this goes inside context
  // const users =[
  //   {id: 1, name: 'Kiran'},
  //   {id: 2, name: 'Karthik'},
  //   {id: 3, name: 'Venky'}
  // ];

    // return(
    //   <>
    //    <User users={users}/>
    //   </>
    // )
  
  return(
    <>
      <MyProvider>
        <User/>
      </MyProvider>
    </>
  )
}

export default App;