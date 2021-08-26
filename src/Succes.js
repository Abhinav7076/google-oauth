import React,{useEffect} from 'react';

import {useHistory} from 'react-router-dom';

function Succes() {
    const history = useHistory();

    const googleId = JSON.parse(localStorage.getItem('tokenId'));
    console.log(googleId);


    const handleLogout = () => {
     localStorage.removeItem('tokenId');
     history.push('/');

    }

    useEffect(() => {

        if (googleId) {
            history.push('/success');
        } else {
            history.push('/');
        }

    }, [googleId])

    return (
        <div>
            Succes

            <button onClick={handleLogout}>Google Logout</button>
        </div>
    )
}

export default Succes
