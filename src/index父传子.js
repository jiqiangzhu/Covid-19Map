import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//父传子
class ParentCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childData: null,
        };
    }
    setChildData = (data) => {
        this.setState({
            childData: data,
        });
    }
    render() {
        return (
            <div>
                <h1>子元素传递过来的数据： {this.state.childData}</h1>
                <ChildCom setChildData={this.setChildData} />
            </div>
        )
    }
}
class ChildCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "HelloWorld",
        };
    }
    sendData = () => {
        this.props.setChildData(this.state.msg);
    }
    render() {
        return (
            <div>
                <button onClick={this.sendData}>
                    点击传递数据给父元素
                </button>
            </div>
        )
    }
}
ReactDOM.render(
    <ParentCom />,
    document.getElementById('root')
);