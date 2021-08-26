import React,{useEffect} from 'react'
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router';


function Login() {
    const history = useHistory();
    const googleId = JSON.parse(localStorage.getItem('tokenId'));


    const responseGoogle = (response) => {
        console.log(response);
        const { googleId } = response?.profileObj;
        console.log(googleId);
        history.push('/success');

        localStorage.setItem('tokenId', googleId);


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
            <div>
                <GoogleLogin
                    clientId="977549250999-70udmtl7562r3rb4aieh0p8qtvnvvk3r.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}

                />
            </div>
        </div>
    )
}

export default Login
