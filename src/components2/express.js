// --------------------------------------------------EXPRESS------------------------------------------

const express = require('express');

const app = express;

const port = 3500;

app.get('/',(res, req) =>{
    req.send('send to data');
});

app.listen( PORT,()=>{
    console.log('server is runing on... ${PORT}');
})

// -------------------------------------------------AXIOS---------------------------------------------------------

const axios = requrie('axios');

axios.get('https:/api.example.com/data')
    .then(response =>{
        console.log(response.data);
    })
    .catch(error =>{
        console.error('error fetching data',error);
    });


    // Make request for user

    axios.get('https:/api.example.com/data')
    .then(function(response){
        console.log(response);
    }).catch(function(error){
        console.log(error);
    })


// -----------------------------------------------useEffect-------------------------------------------------------------------

useEffect(()=>{
    const Connection = createConnection(serverUrl, roomId);
    connection.connectiom();
    return(
        <>
        connection.disconnect();
        </>
    )
},[serverUrl, roomId]);

// ------------------------------------------------handle---------------------------------------------------------------------------

function Counter(){
    console.log('render counter');

    const [counter , setCounter] = useState (0);

    function handleClick(e){
        e.stopPropogation();
        setTimeout(()=>{
            setCounter(counter+1);
        },2000)
        console.log(counter)
    }
}

// --------------------------------------------------useId-----------------------------------------------------------------------------

import {useId} from 'react';

function PasswordField(){
    const PasswordHintId = useId();
    return(
        <>
        <input type='password' aria_discribedly={PasswordHintId} />
        <P id={PasswordHintId} />
        </>
    )
}