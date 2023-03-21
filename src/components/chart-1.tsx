import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { px } from '../shared/px';
import { baseEchartOptions } from '../shared/base-echart-options';
import { createEchartsOptions } from '../shared/create-echarts-options';


export const Chart1 = () => {
    const divRef = useRef(null);
    useEffect(() => {
        var myChart = echarts.init(divRef.current);
        myChart.setOption(createEchartsOptions({
            ...baseEchartOptions,
            xAxis: {
                data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
                axisTick: { show: false },
                axisLine: {
                    lineStyle: { color: '#083B70' }
                },
                axisLabel: {
                    fontSize: px(12),
                    //x轴换行的写法
                    formatter(val) {
                        if (val.length > 2) {
                            const array = val.split('');//把val变成数组
                            array.splice(2, 0, '\n');//在第2个，删除0个，添加回车；
                            return array.join('');//将数组变成字符串
                        } else {
                            return val;
                        }
                    }
                },
            },

            yAxis: {
                splitLine: { show: false },
                axisLine: {
                    show: true,
                    lineStyle: { color: '#083B70' }
                },
                axisLabel: {
                    fontSize: px(12)
                }
            },
            series: [{
                type: 'bar',
                data: [10, 20, 36, 41, 15, 26, 37, 18, 29]
            }]
        })
        );
    }, []);

    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className="chart">

            </div>
        </div>
    );

};