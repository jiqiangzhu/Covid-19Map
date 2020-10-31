import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import covidData from './list.json';
import './my.css';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "helloworld"
        }
    }
    // AJAX
    componentWillMount() {
        console.log("componentWillMount");
    }
    // 添加动画
    componentDidMount() {
        console.log("componentDidMount");
    }
    // 将要接收props/state数据
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps");
    }
    // 更新之后
    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    // 将要更新
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }
    // 将要被卸载
    componentWillUnmount() {
        console.log("componentUnmount");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        if (this.state.msg === "helloworld") {
            return true;
        } else {
            return false;
        }
    }
    updateMsg = () => {
        this.setState({
            msg: "update",
            isShow: true
        })
    }
    // deleteMsg = () => {
    //     this.setState({
    //         isShow: false
    //     })
    // }
    render() {
        return (
            <div>
                <h1>信息：{this.state.msg}</h1>
                <button onClick={this.updateMsg}>更新</button>
            </div>
        )
    }
}

class ParentCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
    }
    removeMsg = ()=> {
        this.setState({
            isShow: false
        })
    }
    render() {
        if (this.state.isShow) {
            return (
                <div>
                    <button onClick={this.removeMsg}>移除</button>
                    <LifeCycle list={{name: 'zjq'}}/>
                </div>
            )
        } else {
            return <h1>LifeCycle已移除</h1>
        }

    }
}


ReactDOM.render(
    <ParentCom />,
    document.getElementById('root')
) 