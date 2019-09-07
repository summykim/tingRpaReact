import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
 
class Login extends Component {
    isLogin = false;

    componentDidMount(){
        axios({
            method: 'get',
            url: 'http://169.56.96.101:18080/AdminUserLogin',
            params: {
                userId:'244128', userPwd:'1234'
            }
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
          });

    }

    render() {
        return (
            <div>
                {
                    !this.isLogin && <Redirect to="/"/>
                }
                로그인 되었습니다.
            </div>
        );
    }
}
 
export default Login;