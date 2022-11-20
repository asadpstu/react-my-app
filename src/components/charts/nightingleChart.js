import ReactECharts from 'echarts-for-react';

const NightingleChart = () => {
  const options = {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true }
      }
    },
    series: [
      {
        name: 'Employment Experience',
        type: 'pie',
        radius: [50, 250],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 42, name: 'MYOL' },
          { value: 14, name: 'Brandt Intl' },
          { value: 11, name: 'G. P.' },
          { value: 14, name: 'SD Global' },
          { value: 8, name: 'I-Serve' },
          { value: 10, name: 'Luxolis' },
          { value: 6, name: 'Apsis' },
        ]
      }
    ]
  };

  return (
    <div className='customBorder'>
      <ReactECharts option={options} notMerge={true} style={{ height: '700px' }} />
    </div>
  )
}

export default NightingleChart;