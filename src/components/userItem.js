import React, {useContext} from 'react';
import {MyContext} from '../context/index';

const UserItem = () => {
    // console.log("PROPS: ", props);

    // how to access context? USE HOOK
    const context = useContext(MyContext);

    console.log("context: ", context);

    const listUsers = context.active ? context.users.map((user) => (
        <div key={user.id}>
            <h4>{user.name}</h4>
            <hr/>
        </div>
    )) : null;

    return(
      <>
        { listUsers }
        <hr/>
        <button onClick={context.toggleActive}>Toggle Active</button>
        <hr/>
      </>
    )
}

export default UserItem;