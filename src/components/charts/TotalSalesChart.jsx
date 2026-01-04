import React, { useEffect, useRef } from 'react'
import ReactECharts from 'echarts-for-react'

const TotalSalesChart = ({ leftOpen, rightOpen }) => {
  const chartRef = useRef(null)

  const data = [
    { value: 300.56, name: 'Direct', color: '#C6C7F8' },
    { value: 135.18, name: 'Affiliate', color: '#BAEDBD' },
    { value: 154.02, name: 'Sponsored', color: '#95A4FC' },
    { value: 48.96, name: 'E-mail', color: '#B1E3FF' },
  ]

  const total = data.reduce((sum, d) => sum + d.value, 0)
  const percent = ((data[0].value / total) * 100).toFixed(1)

  const option = {
    tooltip: { show: false },
    series: [
      {
        type: 'pie',
        radius: ['55%', '75%'],
        center: ['50%', '50%'], // ✅ important
        startAngle: 90,
        label: { show: false },
        labelLine: { show: false },
        itemStyle: {
          borderRadius: 12,
          borderWidth: 3,
        },
        data: data.map(d => ({
          value: d.value,
          name: d.name,
          itemStyle: { color: d.color },
        })),
      },
    ],
  }

  // ✅ Resize after initial mount (Vercel hydration fix)
  useEffect(() => {
    const timer = setTimeout(() => {
      chartRef.current?.getEchartsInstance().resize()
    }, 150)

    return () => clearTimeout(timer)
  }, [])

  // ✅ Resize when sidebars open/close
  useEffect(() => {
    chartRef.current?.getEchartsInstance().resize()
  }, [leftOpen, rightOpen])

  return (
    <div className="w-full rounded-3xl p-5">
      <h3 className="text-lg font-semibold mb-4">Total Sales</h3>

      {/* ✅ fixed height container */}
      <div className="relative flex justify-center items-center h-[220px]">
        <ReactECharts
          ref={chartRef}               // ✅ REQUIRED
          option={option}
          style={{ height: 200, width: 200 }}
        />

        {/* Percentage bubble */}
        <div className="absolute bottom-8 bg-[#3E443F] text-white text-sm px-4 py-2 rounded-xl">
          {percent}%
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-3">
        {data.map(item => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm">{item.name}</span>
            </div>
            <span className="text-sm font-medium">
              ${item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TotalSalesChart
