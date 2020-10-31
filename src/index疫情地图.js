import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import covidData from './list.json';
import './my.css';
// import echarts from 'echarts';
// 引入 ECharts 主模块

let provinceObj = [];

covidData.data.forEach((item, index) => {
    provinceObj[index] = {
        "province": item.province,
        "nowConfirm": item.nowConfirm,
        "confirmAdd": item.zero,
        "dead": item.dead,
        "heal": item.heal,
        "zero": item.zero
    }
})
let provinceObjSort = provinceObj.sort((a, b) => {
    if (a.confirmAdd > b.confirmAdd) {
        return -1;
    } else {
        return 1;
    }
})
let provinceData = [];
let confirmData = [];
let mydata = [];
for (let prop in provinceObjSort) {
    provinceData.push(provinceObjSort[prop].province);
    confirmData.push(provinceObjSort[prop].zero);
    mydata.push({ name: provinceObjSort[prop].province, value: provinceObjSort[prop].zero })
}
function randomData() {
    return Math.round(Math.random() * 500);
}

let chart = window.echarts.init(document.getElementById('main'));
let option = {
    backgroundColor: 'gray',
    title: {
        text: '全国地图',
        // subtext: '纯属虚构',
        x: 'center'
    },
    tooltip: {
        // trigger: 'item'
    },
    visualMap: {
        min: 0,
        max: 300,
        show: true,//图注
        x: 'left',
        y: 'bottom',
        text: ['高', '低'],
        inRange: {
            color: ['#FFDAB9', '#8B4513']
        }
        // splitList: [
        //     { start: 250, end: 300 }, { start: 200, end: 250 },
        //     { start: 150, end: 200 }, { start: 100, end: 150 },
        //     { start: 50, end: 100 }, { start: 0, end: 50 },
        // ],
        // color: ['#f50e0e', '#f75151', '#f77676', '#f38e8e', '#f7d5d5',]
    },
    series: [{
        name: '实时数据',
        type: 'map',
        mapType: 'china',
        roam: true,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        data: mydata
    }]
};
chart.setOption(option);
// 疫情地图
class CovidMap extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <br /><br /><br /><br />
                {/* <EchartsTest /> */}
                <br /><hr />
                <h1>中国病例</h1>
                <ul>
                    <li>
                        <span>地区</span>
                        <span>确诊</span>
                        <span>现有确诊</span>
                        <span>死亡</span>
                        <span>治愈</span>
                    </li>
                    {this.props.list.map((item, index) => {
                        return (
                            <li key={index}>
                                <span>{item.province}</span>
                                <span>{item.zero}</span>
                                <span>{item.nowConfirm}</span>
                                <span>{item.dead}</span>
                                <span>{item.heal}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}


ReactDOM.render(
    <CovidMap list={provinceObjSort} />,
    document.getElementById('root')
) 