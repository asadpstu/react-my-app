import ReactECharts from 'echarts-for-react';

const Echarts = () => {


  const options = {
    dataset: {
      source: [
        ['score', 'amount', 'product'],
        [92, 98, 'JavaScript'],
        [95, 92, 'Node.js'],
        [80, 85, 'Micro-Service'],
        [90, 87, 'AWS'],
        [85, 95, 'Git'],
        [10, 10, 'React.js'],
        [20, 15, 'Angular'],
        [50, 70, 'Spring Boot'],
      ]
    },
    grid: { containLabel: true },
    xAxis: { name: 'Score' },
    yAxis: { type: 'category' },
    visualMap: {
      orient: 'horizontal',
      left: 'center',
      min: 0,
      max: 100,
      text: ['Strength', 'Weekness'],
      // Map the score column to color
      dimension: 0,
      inRange: {
        color: ['#65B581', '#FFCE34', '#FD665F']
      }
    },
    series: [
      {
        type: 'bar',
        encode: {
          // Map the "amount" column to X axis.
          x: 'amount',
          // Map the "product" column to Y axis
          y: 'product'
        }
      }
    ]
  };

  return (
    <div className='customBorder'>
      <ReactECharts option={options} notMerge={true} style={{ height: '500px' }} />
    </div>
  )
}

export default Echarts;