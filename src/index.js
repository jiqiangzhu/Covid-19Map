import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import covidData from './list.json';
import './my.css';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图 折线图 饼状图
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EchartsTest extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            title: { text: '各省份确诊人数' },
            tooltip: {},
            xAxis: {
                data: provinceData,
                axisLabel: {
                    interval: 0
                }

            },
            yAxis: {},
            series: [{
                name: '人数-折线',
                type: 'line',
                data: confirmData
            }, {
                name: '人数-柱状',
                type: 'bar',
                data: confirmData
            }, {
                name: '人数-饼状',
                type: 'pie',
                center: ['80%', '30%'],
                radius: 50,
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        },
                        labelLine: {
                            show: true
                        }
                    }
                },
                data: confirmData
            }
            ]
        });
    }
    render() {
        return (
            <div id="main" style={{ width: 1200, height: 400 }}></div>
        );
    }
}

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
for (let prop in provinceObjSort) {
    provinceData.push(provinceObjSort[prop].province);
    confirmData.push(provinceObjSort[prop].zero);
}
console.log(provinceData);

console.log(provinceObjSort);
// 疫情地图
class CovidMap extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <br /><br /><br /><br />
                <EchartsTest />
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
                            <li>
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