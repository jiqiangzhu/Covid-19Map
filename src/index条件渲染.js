import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//条件渲染
function UserGreet(props) {
    return (
        <h1>请先登录</h1>
    )
}
function UserLogin(props) {
    return (
        <h1>欢迎登录</h1>
    )
}

class ParentCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFlag: false
        }
    }
    render() {
        return (
            this.state.loginFlag ? <UserLogin /> : <UserGreet />
        )
    }
}

ReactDOM.render(
    <ParentCom />,
    document.getElementById("root")
)