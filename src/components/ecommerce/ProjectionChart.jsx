import React, { useEffect, useRef } from 'react'
import ReactEcharts from "echarts-for-react"

const ProjectionChart = ({ trigger }) => {
  const chartRef = useRef(null);

  const axisColor =
  getComputedStyle(document.documentElement)
    .getPropertyValue('--axis-text')
    .trim()

  useEffect(() => {
    setTimeout(() => {
      chartRef.current?.getEchartsInstance().resize()
    }, 300)
  }, [trigger])

  const option = {
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      axisLabel: {
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 12,
        fontWeight: 400,
        color: axisColor
      }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 60,
      interval: 20,
      axisLabel: {
        formatter: '{value}M',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: 12,
        fontWeight: 400,
        color: axisColor
      }
    },

    series: [
      // 🔹 First half
      {
        name: 'Part 1',
        type: 'bar',
        stack: 'total',
        data: [15, 21, 18, 23, 17, 21],
        itemStyle: {
          color: '#A8C5DA'
        },
        barWidth: 30
      },

      // 🔹 Second half
      {
        name: 'Part 2',
        type: 'bar',
        stack: 'total',
        data: [22, 25, 23, 29, 19, 27],
        itemStyle: {
          color: 'rgba(168, 197, 218, 0.5)',
          borderRadius: [4, 4, 0, 0]
        }
      }
    ]
  }

  return (
    <ReactEcharts
      className="flex-1 bg-(--card)"
      ref={chartRef}
      option={option}
      style={{ height: '100%', width: '100%' }}
    />
  )
}

export default ProjectionChart
