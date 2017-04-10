
import React from 'react';
import { render } from 'react-dom';

export class LoginControl extends React.Component {

    constructor(props) {
        super(props);
        this.LoginClick = this.LoginClick.bind(this);
        this.LogoutClick = this.LogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        };
    }

    LoginClick() {
        this.setState({ isLoggedIn: true });
    }
    LogoutClick() {
        this.setState({ isLoggedIn:false });
    }
            render() {
                const isLoggedIn = this.state.isLoggedIn;//todo learn Why ?
                let button = null;
                if (isLoggedIn) {
                    button = <LogoutButton onClick={this.LogoutClick} />;
                }
                else {
                    button = <LoginButton onClick={this.LoginClick} />;
                }


                return (
                    <div>
                        <Selamlama isLoggedIn={isLoggedIn} />
                        {button}
                    </div>
                );
            }
}
function KullaniciSelamlama(props){
    return <h1>Merhaba Kullanici </h1>
}
function ZiyaretciSelamlama(props){
     return <h1>Merhaba  Ziyaterci </h1>
}
function Selamlama(props){
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn)
    {
        return <KullaniciSelamlama/>;
    } else {
        return <ZiyaretciSelamlama/>;
    }
}
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}
render(<LoginControl/>,document.getElementById("app"))
