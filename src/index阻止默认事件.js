import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//事件
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
    parentEvent = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form action="http://www.baidu.com">
                    <h1>HelloWorld</h1>
                    <button onClick={this.parentEvent}>
                        提交(箭头函数)
                    </button>
                    <button onClick={(e)=>this.parentEvent1(123, e)}>
                        提交(多参数)
                    </button>
                    <button onClick={function(e){this.parentEvent1(123, e)}.bind(this)}>
                        提交(不使用ES6)
                    </button>
                </form>
            </div>
        )
    }
    parentEvent1 = (num, e) => {
        e.preventDefault();
        console.log(num);
    } 
}
ReactDOM.render(
    <ParentCom />,
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
