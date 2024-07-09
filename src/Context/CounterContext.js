import {createContext} from 'react';

export let counterContext = createContext();


function counterContextProvider(props){
    return <counterContext.provider>
        {(props.children)}
    </counterContext.provider>
}