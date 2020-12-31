import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';



const responseGoogle = (response) => {
  console.log(response);
}
function GoogleLogin7 (){
return(  <GoogleLogin
    clientId="535294813022-p4qebn043gi8ui530r958q7mrdll1tdr.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  
);
}
export default GoogleLogin; 