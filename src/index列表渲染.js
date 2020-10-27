import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//列表渲染
// class ListItem extends React.Component {
//     constructor(props) {
//         super(props);
//     }
// }
function ListItem(props) {
    return (
        <li onClick={props.onClick}>
            {props.data.title}
            <p>{props.data.content}</p>
        </li>
    )
}
class ParentCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    title: 'React props',
                    content: 'Props Content'
                },
                {
                    title: 'React state',
                    content: 'State Content'
                },
                {
                    title: 'React 列表渲染',
                    content: '列表渲染 Content'
                }
            ]
        };
    }
    render() {
        var listItem = this.state.list.map((item, index) => {
            return (
                <ListItem key={index} data={item} onClick={(event) => this.itemClick(item, index, event)} />
                // <li key={index} onClick={this.itemClick}>
                //     {item.title}
                //     <p>{item.content}</p>
                // </li>

            )
        })
        return (
            <div>
                <h1>React目录</h1>
                <ul>
                    {listItem}
                    {/* <ListItem /> */}
                </ul>
            </div>
        )
    }
    itemClick = (item, index, event) => {
        console.log(item + '-' + index);
        // console.log(event);
    }

}

ReactDOM.render(
    <ParentCom />,
    document.getElementById("root")
)