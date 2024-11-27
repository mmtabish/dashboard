import { useSyncExternalStore } from "react";

export function useExternal(){
    const isOnline = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    return isOnline;
}

    function getSnapshot(){
        return navigator.online;
    };

    function getServerSnapshot(){
        return true;
    };

    function subscribe(callback){

    }

    function chatIndicator({userId}){
        const isOnline =useSyncExternalStore(subscribe, getSnapshot);

        const subscribe = useCallback(()=>{

        },[userId])
    }

    import {memo} from 'react';

    const postTab = memo(function (){
        console.log("[ARTIFICIALLY SLOW] ");

        let items= [];
        for(let i=0; i<500; i++){
            items.push(<SlowPost key={i} items={i} />)
        }
        return(
            <ul className='items'>
                {items}
            </ul>
        );
    });

    function SlowPost(){
        let startTime = performance.now();
        while(performance.now() - startTime <1){

        }
        return(
            <li>
                post #{index}
            </li>
        );
    }

    // export default postTab;

    /*button tab */

    import{useTransition} from 'react';
import App from "../App";

export default function TabButton({children, isActivity, onClick}){
    if(isActivity){
        return <p>{children}</p>
    }
    return(
        <button onClick={()=>{
            onClick();
        }}>
            {children}
        </button>
    );

}

// App 

import {useState, useTransition} from 'react';


function TabContainer(){
    const  [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState();

    function selectTab(nextTab){
        startTransition(()=>{
            nextTab();
        })
    }

    return(
    <>
        <TabButton 
        isActivity={tab ==='about'}
        onClick={()=> selectTab('about') }
        >
            About
        </TabButton>
        <TabButton
        isActivity={tab ==='post'}
        onClick={()=>selectTab('post')}
        >
        post (slow)
        </TabButton>
        <TabButton
        isActivity={tab === 'contact'}
        onClick={()=> selectTab('contact')}
        >
            contact
        </TabButton>
    
    </>
    )

}

import {useEffect} from 'react';
import {createConnection} from './chat';

function ChatRoom(){
    const [chat, setChat] = useState('https/.portal:123');

    useEffect(()=>{
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return ()=>{
            connection.disconnect();
        }
    },[server,roomId]);
}

function FriendList(){
    const onlineCount = onlineFriendCount();
    if(friend.length === 0){
        return<NoFriend/>
    }
    return(
        <span>{online} counter</span>
    

    );

}

const ReactCompilerConfig = {/*    */};
const BabelPluginReactCompiler =  require("babel-plugin-react-compiler");

function reactCompilerLoader(sourceCode, sourceMap){

    const result = sourceCode()

}


