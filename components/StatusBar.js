'use client';
import * as echarts from 'echarts/core';
import { TitleComponent, TooltipComponent, GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect, useRef } from 'react';

echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, CanvasRenderer]);

/** @type EChartsOption */
const option = {
	xAxis: {
		type: 'value',
	},
	yAxis: {
		data: ['Task #1', 'Task #2', 'Task #3'].reverse(),
		type: 'category',
		axisTick: null,
	},
	series: [
		{
			itemStyle: {
				borderColor: 'transparent',
				color: 'transparent',
			},
			data: [0, 15, 20].reverse(),
			type: 'bar',
			stack: 'progress',
		},
		{
			data: [15, 5, 10].reverse(),
			type: 'bar',
			stack: 'progress',
		},
	],
};

export default function StatusBar() {
	const chartRef = useRef(null);

	useEffect(() => {
		let chartInstance = null;
		const renderedInstance = echarts.getInstanceByDom(chartRef.current);
		if (renderedInstance) {
			chartInstance = renderedInstance;
		} else {
			chartInstance = echarts.init(chartRef.current);
		}
		chartInstance.setOption(option);
	}, []);

	return <div ref={chartRef} className='w-full h-96'></div>;
}
