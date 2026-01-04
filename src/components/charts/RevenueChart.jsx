import React, { useEffect, useRef } from 'react'
import ReactEcharts from 'echarts-for-react'

const RevenueChart = ({ trigger }) => {
  const chartRef = useRef(null);

  const getCssVar = (name) =>
    getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim();


  const currentLineColor = getCssVar('--line-style')

  useEffect(() => {
    setTimeout(() => {
      chartRef.current?.getEchartsInstance().resize()
    }, 300)
  }, [trigger])

  const option = {
    grid: {
      left: 40,
      right: 20,
      top: 20,
      bottom: 30
    },

    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line'
      }
    },

    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      boundaryGap: false,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        fontSize: 12,
        color: '#9ca3af',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: '400'
      }
    },

    yAxis: {
      type: 'value',
      min: 0,
      max: 30,
      interval: 10,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: {
          color: '#e5e7eb',
          type: 'dashed'
        }
      },
      axisLabel: {
        formatter: '{value}M',
        fontSize: 12,
        color: '#9ca3af',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontWeight: '400'
      }
    },

    series: [
      // 🔹 Previous Week
      {
        name: 'Previous Week',
        type: 'line',
        smooth: true,
        data: [7, 17, 14, 10, 14, 23],
        lineStyle: {
          color: currentLineColor,
          width: 3
        },
        symbol: 'none'
      },

      // 🔹 Current Week (solid part)
      {
        name: 'Current Week',
        type: 'line',
        smooth: true,
        data: [12, 8, 9, 15, null, null],
        lineStyle: {
          color: currentLineColor,
          width: 3
        },
        symbol: 'none'
      },

      // 🔹 Current Week (future dotted)
      {
        name: 'Current Week (Projected)',
        type: 'line',
        smooth: true,
        data: [null, null, null, 15, 18, 20],
        lineStyle: {
          color: currentLineColor,
          width: 3,
          type: 'dashed'
        },
        symbol: 'none'
      }
    ]
  }

  return (
    <div className="bg-(--card) text-(--text) rounded-2xl p-6 w-full h-full">
      {/* Header */}
      <div className="flex items-center gap-6 mb-4">
        <h2 className="text-lg font-semibold ">Revenue</h2>

        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-black" />
          <span className='text-(--text)'>Current Week</span>
          <span className="text-(--text) font-semibold">$58,211</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="w-2 h-2 rounded-full bg-[#9bbbd4]" />
          <span className='text-(--text)'>Previous Week</span>
          <span className="text-(--text) font-semibold">$68,768</span>
        </div>
      </div>

      {/* Chart */}
      <ReactEcharts
        ref={chartRef}
        option={option}
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  )
}

export default RevenueChart
