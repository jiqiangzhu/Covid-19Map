import React from 'react';

export default class SearchCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            result: null
        }
    }
    serachEvent = (e) => {
        if (e.keyCode === 13) {
            if (this.props.provinceObj[e.target.value] === undefined) {
                this.setState({
                    result: <h2>输入错误，不是省份</h2>
                })
            } else {
                this.setState({
                    result: (
                        <div>
                            <div>确诊人数：{this.props.provinceObj[e.target.value].zero}</div>
                            <div>死亡人数：{this.props.provinceObj[e.target.value].dead}</div>
                            <div>治愈人数：{this.props.provinceObj[e.target.value].heal}</div>
                        </div>
                    )
                })
            }
            this.setState({
                value: this.props.value
            })
        }
    }
    changeEvent = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type='text' placeholder='请输入查询的省份' onChange={this.changeEvent} onKeyDown={this.serachEvent} value={this.state.value}/>
                <div>
                    <h2>查询结果：</h2>
                    <div>
                        {this.state.result}
                    </div>
                </div>

            </div>
        )
    }
}

// export SearchCom
